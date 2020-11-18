import isNode from 'detect-node';
import { FileWrapper } from '../fileWrapper';
import { deprecated, sanitizeUrl } from '../apiHelper';
import { ApiResponse } from '../apiResponse';
import { ArgumentsValidationError } from '../errors/argumentsValidationError';
import { ResponseValidationError } from '../errors/responseValidationError';
import {
  Schema,
  validateAndMap,
  validateAndMapXml,
  validateAndUnmapXml,
} from '../schema';
import { HttpContext } from './httpContext';
import {
  ACCEPT_HEADER,
  CONTENT_LENGTH_HEADER,
  CONTENT_TYPE_HEADER,
  JSON_CONTENT_TYPE,
  mergeHeaders,
  setHeader,
  setHeaderIfNotSet,
  TEXT_CONTENT_TYPE,
  XML_CONTENT_TYPE,
} from './httpHeaders';
import {
  callHttpInterceptors,
  HttpInterceptorInterface,
} from './httpInterceptor';
import {
  HttpMethod,
  HttpRequest,
  HttpRequestMultipartFormBody,
  HttpRequestUrlEncodedFormBody,
} from './httpRequest';
import { HttpResponse } from './httpResponse';
import {
  pathTemplate,
  PathTemplatePrimitiveTypes,
  PathTemplateTypes,
  SkipEncode,
} from './pathTemplate';
import {
  filterFileWrapperFromKeyValuePairs,
  formDataEncodeObject,
  urlEncodeObject,
} from './queryString';
import { prepareArgs } from './validate';
import { xmlDeserialize, xmlSerialize } from './xmlSerialization';

export interface RequestBuilderFactory<BaseUrlParamType, AuthParams> {
  (httpMethod: HttpMethod, path?: string): RequestBuilder<
    BaseUrlParamType,
    AuthParams
  >;
}

type QueryValue =
  | string
  | string[]
  | number
  | number[]
  | boolean
  | null
  | undefined;

export function skipEncode<T extends PathTemplatePrimitiveTypes>(
  value: T
): SkipEncode<T> {
  return new SkipEncode(value);
}

/** Optional API call options such as the Abort Signal. */
export interface RequestOptions {
  /**
   * Allows cancelling the API call using an Abort Signal.
   *
   * This must be set to an instance compatible with the
   * [WHATWG AbortSignal](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal). The
   * AbortSignal comes built-in in modern browsers and can be polyfilled for older browser versions
   * and Node.js using the
   * [abort-controller](https://github.com/mysticatea/abort-controller) package.
   */
  abortSignal?: AbortSignal;
}

export interface HttpClientInterface {
  (request: HttpRequest, requestOptions?: RequestOptions): Promise<
    HttpResponse
  >;
}

export interface ApiErrorConstructor {
  new (response: HttpContext, message: string): any;
}

export interface AuthenticatorInterface<AuthParams> {
  (authParams?: AuthParams): HttpInterceptorInterface<
    RequestOptions | undefined
  >;
}

export interface RequestBuilder<BaseUrlParamType, AuthParams> {
  deprecated(methodName: string, message?: string): void;
  prepareArgs: typeof prepareArgs;
  method(httpMethodName: HttpMethod): void;
  baseUrl(arg: BaseUrlParamType): void;
  authenticate(params: AuthParams): void;
  appendPath(path: string): void;
  appendTemplatePath(
    strings: TemplateStringsArray,
    ...args: Array<PathTemplateTypes>
  ): void;
  acceptJson(): void;
  accept(acceptHeaderValue: string): void;
  contentType(contentTypeHeaderValue: string): void;
  header(name: string, value?: string | boolean | number): void;
  headers(headersToMerge: Record<string, string>): void;
  query(name: string, value: QueryValue): void;
  query(parameters?: Record<string, QueryValue> | null): void;
  form(parameters: Record<string, unknown>): void;
  formData(parameters: Record<string, unknown>): void;
  text(body: string): void;
  json(data: unknown): void;
  xml<T>(
    argName: string,
    data: T,
    rootName: string,
    schema: Schema<T, any>
  ): void;
  stream(file?: FileWrapper): void;
  toRequest(): HttpRequest;
  intercept(
    interceptor: HttpInterceptorInterface<RequestOptions | undefined>
  ): void;
  interceptRequest(interceptor: (request: HttpRequest) => HttpRequest): void;
  interceptResponse(interceptor: (response: HttpContext) => HttpContext): void;
  defaultToError(apiErrorCtor: ApiErrorConstructor): void;
  validateResponse(validate: boolean): void;
  throwOn<ErrorCtorArgs extends any[]>(
    statusCode: number | [number, number],
    errorConstructor: {
      new (response: HttpContext, ...args: ErrorCtorArgs): any;
    },
    ...args: ErrorCtorArgs
  ): void;
  call(requestOptions?: RequestOptions): Promise<ApiResponse<void>>;
  callAsJson<T>(
    schema: Schema<T, any>,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<T>>;
  callAsStream(
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<NodeJS.ReadableStream | Blob>>;
  callAsText(requestOptions?: RequestOptions): Promise<ApiResponse<string>>;
  callAsOptionalText(
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<string | undefined>>;
  callAsXml<T>(
    rootName: string,
    schema: Schema<T, any>,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<T>>;
  callAsXml<T>(
    rootName: string,
    schema: Schema<T, any>,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<T>>;
}

export class DefaultRequestBuilder<BaseUrlParamType, AuthParams>
  implements RequestBuilder<BaseUrlParamType, AuthParams> {
  protected _accept?: string;
  protected _contentType?: string;
  protected _headers: Record<string, string>;
  protected _body?: string;
  protected _stream?: FileWrapper;
  protected _query: string[];
  protected _form?: HttpRequestUrlEncodedFormBody['content'];
  protected _formData?: HttpRequestMultipartFormBody['content'];
  protected _baseUrlArg: BaseUrlParamType | undefined;
  protected _validateResponse: boolean;
  protected _interceptors: HttpInterceptorInterface<
    RequestOptions | undefined
  >[];
  protected _authParams?: AuthParams;
  public prepareArgs: typeof prepareArgs;

  constructor(
    protected _httpClient: HttpClientInterface,
    protected _baseUrlProvider: (arg?: BaseUrlParamType) => string,
    protected _apiErrorFactory: ApiErrorConstructor,
    protected _authenticationProvider: AuthenticatorInterface<AuthParams>,
    protected _httpMethod: HttpMethod,
    protected _path?: string
  ) {
    this._headers = {};
    this._query = [];
    this._interceptors = [];
    this._validateResponse = true;
    this._addResponseValidator();
    this._addAuthentication();
    this.prepareArgs = prepareArgs.bind(this);
  }
  authenticate(params: AuthParams): void {
    this._authParams = params;
  }
  deprecated(methodName: string, message?: string): void {
    deprecated(methodName, message);
  }
  appendTemplatePath(
    strings: TemplateStringsArray,
    ...args: Array<PathTemplateTypes>
  ): void {
    const pathSegment = pathTemplate(strings, ...args);
    this.appendPath(pathSegment);
  }
  method(httpMethodName: HttpMethod): void {
    this._httpMethod = httpMethodName;
  }
  baseUrl(arg: BaseUrlParamType): void {
    this._baseUrlArg = arg;
  }
  appendPath(path: string): void {
    this._path = this._path ? mergePath(this._path, path) : path;
  }
  acceptJson(): void {
    this._accept = JSON_CONTENT_TYPE;
  }
  accept(acceptHeaderValue: string): void {
    this._accept = acceptHeaderValue;
  }
  contentType(contentTypeHeaderValue: string): void {
    this._contentType = contentTypeHeaderValue;
  }
  header(name: string, value?: string | boolean | number): void {
    if (value === undefined) {
      return;
    }
    setHeader(this._headers, name, value.toString());
  }
  headers(headersToMerge: Record<string, string>): void {
    mergeHeaders(this._headers, headersToMerge);
  }
  query(name: string, value: QueryValue): void;
  query(parameters?: Record<string, QueryValue> | null): void;
  query(
    nameOrParameters: string | Record<string, QueryValue> | null | undefined,
    value?: unknown
  ): void {
    if (nameOrParameters === null || nameOrParameters === undefined) return;
    const queryString =
      typeof nameOrParameters === 'string'
        ? urlEncodeObject({
            [nameOrParameters]: value,
          })
        : urlEncodeObject(nameOrParameters);
    if (queryString) {
      this._query.push(queryString);
    }
  }
  text(body: string): void {
    this._body = body;
    this._setContentTypeIfNotSet(TEXT_CONTENT_TYPE);
  }
  json(data: unknown): void {
    this._body = JSON.stringify(data);
    this._setContentTypeIfNotSet(JSON_CONTENT_TYPE);
  }
  xml<T>(
    argName: string,
    data: T,
    rootName: string,
    schema: Schema<T, any>
  ): void {
    const mappingResult = validateAndUnmapXml(data, schema);
    if (mappingResult.errors) {
      throw new ArgumentsValidationError({ [argName]: mappingResult.errors });
    }
    this._body = xmlSerialize(rootName, mappingResult.result);
    this._setContentTypeIfNotSet(XML_CONTENT_TYPE);
  }
  stream(file?: FileWrapper): void {
    this._stream = file;
  }
  form(parameters: Record<string, unknown>): void {
    this._form = filterFileWrapperFromKeyValuePairs(
      formDataEncodeObject(parameters)
    );
  }
  formData(parameters: Record<string, unknown>): void {
    this._formData = formDataEncodeObject(parameters);
  }
  toRequest(): HttpRequest {
    const request: HttpRequest = {
      method: this._httpMethod,
      url: mergePath(this._baseUrlProvider(this._baseUrlArg), this._path),
    };

    if (this._query.length > 0) {
      const queryString = this._query.join('&');
      request.url +=
        (request.url.indexOf('?') === -1 ? '?' : '&') + queryString;
    }

    request.url = sanitizeUrl(request.url);

    // defensively copy headers
    const headers = { ...this._headers };

    if (this._accept) {
      setHeader(headers, ACCEPT_HEADER, this._accept);
    }

    if (this._contentType) {
      setHeader(headers, CONTENT_TYPE_HEADER, this._contentType);
    }

    setHeader(headers, CONTENT_LENGTH_HEADER);

    request.headers = headers;

    if (this._body !== undefined) {
      request.body = { type: 'text', content: this._body };
    } else if (this._form !== undefined) {
      request.body = { type: 'form', content: this._form };
    } else if (this._formData !== undefined) {
      request.body = { type: 'form-data', content: this._formData };
    } else if (this._stream !== undefined) {
      request.body = { type: 'stream', content: this._stream };
    }

    return request;
  }
  intercept(
    interceptor: HttpInterceptorInterface<RequestOptions | undefined>
  ): void {
    this._interceptors.push(interceptor);
  }
  interceptRequest(
    interceptor: (httpRequest: HttpRequest) => HttpRequest
  ): void {
    this.intercept((req, opt, next) => next(interceptor(req), opt));
  }
  interceptResponse(interceptor: (response: HttpContext) => HttpContext): void {
    this.intercept(async (req, opt, next) => interceptor(await next(req, opt)));
  }
  defaultToError(apiErrorCtor: ApiErrorConstructor): void {
    this._apiErrorFactory = apiErrorCtor;
  }
  validateResponse(validate: boolean): void {
    this._validateResponse = validate;
  }
  throwOn<ErrorCtorArgs extends any[]>(
    statusCode: number | [number, number],
    errorConstructor: {
      new (response: HttpContext, ...args: ErrorCtorArgs): any;
    },
    ...args: ErrorCtorArgs
  ): void {
    this.interceptResponse(context => {
      const { response } = context;
      if (
        (typeof statusCode === 'number' &&
          response.statusCode === statusCode) ||
        (typeof statusCode !== 'number' &&
          response.statusCode >= statusCode[0] &&
          response.statusCode <= statusCode[1])
      ) {
        throw new errorConstructor(context, ...args);
      }
      return context;
    });
  }
  async call(requestOptions?: RequestOptions): Promise<ApiResponse<void>> {
    // Prepare the HTTP pipeline
    const pipeline = callHttpInterceptors(
      this._interceptors,
      async (request, opt) => {
        const response = await this._httpClient(request, opt);
        return { request, response };
      }
    );

    // Execute HTTP pipeline
    const { request, response } = await pipeline(
      this.toRequest(),
      requestOptions
    );

    return { ...response, request, result: undefined };
  }
  async callAsText(
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<string>> {
    const result = await this.call(requestOptions);
    if (typeof result.body !== 'string') {
      throw new Error('Could not parse body as string.'); // TODO: Replace with SDK error
    }
    return { ...result, result: result.body };
  }
  async callAsOptionalText(
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<string | undefined>> {
    const result = await this.call(requestOptions);
    if (typeof result.body !== 'string') {
      return { ...result, result: undefined };
    }
    return { ...result, result: result.body };
  }
  async callAsStream(
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<NodeJS.ReadableStream | Blob>> {
    this.interceptRequest(req => ({ ...req, responseType: 'stream' }));
    const result = await this.call(requestOptions);
    return { ...result, result: convertToStream(result.body) };
  }
  async callAsJson<T>(
    schema: Schema<T>,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<T>> {
    this.interceptRequest(request => {
      const headers = { ...request.headers };
      setHeaderIfNotSet(headers, ACCEPT_HEADER, JSON_CONTENT_TYPE);
      return { ...request, headers };
    });
    const result = await this.call(requestOptions);
    if (result.body === '') {
      throw new Error(
        'Could not parse body as JSON. The response body is empty.'
      );
    }
    if (typeof result.body !== 'string') {
      throw new Error(
        'Could not parse body as JSON. The response body is not a string.'
      );
    }
    let parsed: unknown;
    try {
      parsed = JSON.parse(result.body);
    } catch (error) {
      throw new Error(`Could not parse body as JSON.\n\n${error.message}`);
    }
    const mappingResult = validateAndMap(parsed, schema);
    if (mappingResult.errors) {
      throw new ResponseValidationError(result, mappingResult.errors);
    }
    return { ...result, result: mappingResult.result };
  }
  async callAsXml<T>(
    rootName: string,
    schema: Schema<T, any>,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<T>> {
    this.interceptRequest(request => {
      const headers = { ...request.headers };
      setHeaderIfNotSet(headers, ACCEPT_HEADER, XML_CONTENT_TYPE);
      return { ...request, headers };
    });
    const result = await this.call(requestOptions);
    if (result.body === '') {
      throw new Error(
        'Could not parse body as XML. The response body is empty.'
      );
    }
    if (typeof result.body !== 'string') {
      throw new Error(
        'Could not parse body as XML. The response body is not a string.'
      );
    }
    let xmlObject: unknown;
    try {
      xmlObject = await xmlDeserialize(rootName, result.body);
    } catch (error) {
      throw new Error(`Could not parse body as XML.\n\n${error.message}`);
    }
    const mappingResult = validateAndMapXml(xmlObject, schema);
    if (mappingResult.errors) {
      throw new ResponseValidationError(result, mappingResult.errors);
    }
    return { ...result, result: mappingResult.result };
  }
  private _setContentTypeIfNotSet(contentType: string) {
    if (!this._contentType) {
      setHeaderIfNotSet(this._headers, CONTENT_TYPE_HEADER, contentType);
    }
  }
  private _addResponseValidator(): void {
    this.interceptResponse(context => {
      const { response } = context;
      if (
        this._validateResponse &&
        (response.statusCode < 200 || response.statusCode >= 300)
      ) {
        throw new this._apiErrorFactory(
          context,
          `Response status code was not ok: ${response.statusCode}.`
        );
      }
      return context;
    });
  }
  private _addAuthentication() {
    this.intercept((...args) => {
      const handler = this._authenticationProvider(this._authParams);
      return handler(...args);
    });
  }
}

export function createRequestBuilderFactory<BaseUrlParamType, AuthParams>(
  httpClient: HttpClientInterface,
  baseUrlProvider: (arg?: BaseUrlParamType) => string,
  apiErrorFactory: ApiErrorConstructor,
  authenticationProvider: AuthenticatorInterface<AuthParams>
): RequestBuilderFactory<BaseUrlParamType, AuthParams> {
  return (httpMethod, path?) => {
    return new DefaultRequestBuilder(
      httpClient,
      baseUrlProvider,
      apiErrorFactory,
      authenticationProvider,
      httpMethod,
      path
    );
  };
}

function mergePath(left: string, right?: string): string {
  if (!right || right === '') {
    return left;
  }

  if (left[left.length - 1] === '/' && right[0] === '/') {
    return left + right.substr(1);
  } else if (left[left.length - 1] === '/' || right[0] === '/') {
    return left + right;
  } else {
    return `${left}/${right}`;
  }
}

export function convertToStream(
  content: string | Blob | NodeJS.ReadableStream
): Blob | NodeJS.ReadableStream {
  if (typeof content !== 'string') {
    return content;
  }

  if (isNode) {
    // ref: https://stackoverflow.com/a/22085851
    const rs = new (require('stream').Readable)();
    rs._read = () => {};
    rs.push(content);
    rs.push(null);
    return rs;
  }

  return new Blob([content]);
}
