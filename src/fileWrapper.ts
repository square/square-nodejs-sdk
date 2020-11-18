/**
 * Wraps file with mime-type and filename to be sent as part of an HTTP request.
 */
export class FileWrapper {
  constructor(
    public file: Blob | import('stream').Readable,
    public options?: FileWrapperOptions
  ) {
    this.file = file;
  }
}

/** File upload options such as filename and mime-type */
interface FileWrapperOptions {
  /** Mime-type to be sent with the file */
  contentType?: string;
  /** Name of the file to be used in the upload data */
  filename?: string;
  /** Headers to be used in the multipart request */
  headers?: Record<string, string>;
}

/** Returns true if value is a FileWrapper */
export function isFileWrapper(value: unknown): value is FileWrapper {
  return value instanceof FileWrapper;
}

/**
 * Returns a deep clone of the FileWrapper instance
 *
 * @param fileWrapper FileWrapper instance to copy
 */
export function cloneFileWrapper(fileWrapper: FileWrapper): FileWrapper {
  let options: FileWrapperOptions | undefined;
  if (fileWrapper.options) {
    options = cloneFileWrapperOptions(fileWrapper.options);
  }
  return new FileWrapper(fileWrapper.file, options);
}

function cloneFileWrapperOptions(
  fileWrapperOptions: FileWrapperOptions
): FileWrapperOptions {
  const clone = { ...fileWrapperOptions };
  if (fileWrapperOptions.headers) {
    clone.headers = { ...fileWrapperOptions.headers };
  }
  return clone;
}
