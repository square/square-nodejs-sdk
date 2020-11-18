import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import isNode from 'detect-node';
import FormData from 'form-data';
import { isBlob } from '../apiHelper';
import { AbortError } from '../errors/abortError';
import { isFileWrapper } from '../fileWrapper';
import {
  CONTENT_TYPE_HEADER,
  FORM_URLENCODED_CONTENT_TYPE,
  mergeHeaders,
  setHeader,
  setHeaderIfNotSet,
} from './httpHeaders';
import { HttpRequest } from './httpRequest';
import { HttpResponse } from './httpResponse';
import { urlEncodeKeyValuePairs } from './queryString';

export const DEFAULT_AXIOS_CONFIG_OVERRIDES: AxiosRequestConfig = {
  transformResponse: [],
};

export const DEFAULT_TIMEOUT = 30 * 1000;

/**
 * HTTP client implementation.
 *
 * This implementation is a wrapper over the Axios client.
 */
export class HttpClient {
  private _axiosInstance: AxiosInstance;
  private _timeout: number;

  constructor({
    clientConfigOverrides,
    timeout = DEFAULT_TIMEOUT,
  }: { clientConfigOverrides?: AxiosRequestConfig; timeout?: number } = {}) {
    this._timeout = timeout;
    this._axiosInstance = axios.create({
      ...DEFAULT_AXIOS_CONFIG_OVERRIDES,
      ...clientConfigOverrides,
    });
  }

  /** Converts an HttpRequest object to an Axios request. */
  public convertHttpRequest(req: HttpRequest): AxiosRequestConfig {
    const newRequest: AxiosRequestConfig = {
      method: req.method,
      url: req.url,
      responseType: 'text',
      headers: { ...req.headers },
    };

    if (req.auth) {
      // Set basic auth credentials if provided
      newRequest.auth = {
        username: req.auth.username,
        password: req.auth.password || '',
      };
    }

    const requestBody = req.body;
    if (requestBody?.type === 'text') {
      newRequest.data = requestBody.content;
    } else if (
      requestBody?.type === 'form-data' &&
      requestBody.content.some(item => isFileWrapper(item.value))
    ) {
      // Create multipart request if a file is present
      const form = new FormData();
      for (const iter of requestBody.content) {
        if (isFileWrapper(iter.value)) {
          let fileData = iter.value.file;

          // Make sure Blob has the correct content type if provided
          if (isBlob(fileData) && iter.value.options?.contentType) {
            fileData = new Blob([fileData], {
              type: iter.value.options.contentType,
            });
          }

          form.append(iter.key, fileData, iter.value.options);
        } else {
          form.append(iter.key, iter.value);
        }
      }

      newRequest.data = form;
      mergeHeaders(newRequest.headers, form.getHeaders());
    } else if (
      requestBody?.type === 'form-data' ||
      requestBody?.type === 'form'
    ) {
      // Create form-urlencoded request
      setHeader(
        newRequest.headers,
        CONTENT_TYPE_HEADER,
        FORM_URLENCODED_CONTENT_TYPE
      );
      newRequest.data = urlEncodeKeyValuePairs(requestBody.content);
    } else if (requestBody?.type === 'stream') {
      let contentType = 'application/octet-stream';
      if (isBlob(requestBody.content.file) && requestBody.content.file.type) {
        // Set Blob mime type as the content-type header if present
        contentType = requestBody.content.file.type;
      } else if (requestBody.content.options?.contentType) {
        // Otherwise, use the content type if available.
        contentType = requestBody.content.options.contentType;
      }
      setHeaderIfNotSet(newRequest.headers, CONTENT_TYPE_HEADER, contentType);
      newRequest.data = requestBody.content.file;
    } else if (requestBody?.type !== undefined) {
      throw new Error(
        `HTTP client encountered unknown body type '${requestBody?.type}'. Could not execute HTTP request.`
      );
    }

    if (req.responseType === 'stream') {
      newRequest.responseType = isNode ? 'stream' : 'blob';
    }

    // Prevent superagent from converting any status code to error
    newRequest.validateStatus = () => true;

    // Set 30 seconds timeout
    newRequest.timeout = this._timeout;

    return newRequest;
  }

  /** Converts an Axios response to an HttpResponse object. */
  public convertHttpResponse(resp: AxiosResponse): HttpResponse {
    return {
      body: resp.data,
      headers: resp.headers,
      statusCode: resp.status,
    };
  }

  /**
   * Executes the HttpRequest with the given options and returns the HttpResponse
   * or throws an error.
   */
  public async executeRequest(
    request: HttpRequest,
    requestOptions?: { abortSignal?: AbortSignal }
  ): Promise<HttpResponse> {
    const axiosRequest = this.convertHttpRequest(request);

    if (requestOptions?.abortSignal) {
      // throw if already aborted; do not place HTTP call
      if (requestOptions.abortSignal.aborted) {
        throw this.abortError();
      }

      const cancelToken = axios.CancelToken.source();
      axiosRequest.cancelToken = cancelToken.token;

      // attach abort event handler
      requestOptions.abortSignal.addEventListener('abort', () => {
        cancelToken.cancel();
      });
    }

    try {
      return this.convertHttpResponse(await this._axiosInstance(axiosRequest));
    } catch (error) {
      // abort error should be thrown as the AbortError
      if (axios.isCancel(error)) {
        throw this.abortError();
      }

      throw error;
    }
  }

  private abortError() {
    return new AbortError('The HTTP call was aborted.');
  }
}
