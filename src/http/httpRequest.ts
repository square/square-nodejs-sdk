import { FileWrapper } from '../fileWrapper';

/**
 * Represents an HTTP request
 */
export interface HttpRequest {
  /** HTTP method */
  method: HttpMethod;
  /** HTTP Headers */
  headers?: Record<string, string>;
  /** Request URL including the query part */
  url: string;
  /** HTTP Basic authentication credentials */
  auth?: HttpBasicAuthCredentials;
  /** HTTP request body */
  body?: HttpRequestBody;
  responseType?: 'text' | 'stream';
}

export type HttpRequestBody =
  | HttpRequestTextBody
  | HttpRequestUrlEncodedFormBody
  | HttpRequestMultipartFormBody
  | HttpRequestStreamBody;

export interface HttpRequestTextBody {
  type: 'text';
  content: string;
}

export interface HttpRequestUrlEncodedFormBody {
  type: 'form';
  content: { key: string; value: string }[];
}

export interface HttpRequestMultipartFormBody {
  type: 'form-data';
  content: { key: string; value: string | FileWrapper }[];
}

export interface HttpRequestStreamBody {
  type: 'stream';
  content: FileWrapper;
}

export type HttpMethod =
  | 'GET'
  | 'DELETE'
  | 'HEAD'
  | 'OPTIONS'
  | 'POST'
  | 'PUT'
  | 'PATCH'
  | 'LINK'
  | 'UNLINK';

export interface HttpBasicAuthCredentials {
  username: string;
  password?: string;
}
