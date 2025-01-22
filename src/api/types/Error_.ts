/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Square from "../index";

/**
 * Represents an error encountered during a request to the Connect API.
 *
 * See [Handling errors](https://developer.squareup.com/docs/build-basics/handling-errors) for more information.
 */
export interface Error_ {
    /**
     * The high-level category for the error.
     * See [ErrorCategory](#type-errorcategory) for possible values
     */
    category: Square.ErrorCategory;
    /**
     * The specific code of the error.
     * See [ErrorCode](#type-errorcode) for possible values
     */
    code: Square.ErrorCode;
    /** A human-readable description of the error for debugging purposes. */
    detail?: string;
    /**
     * The name of the field provided in the original request (if any) that
     * the error pertains to.
     */
    field?: string;
}
