
# Error Code

Indicates the specific error that occurred during a request to a
Square API.

## Enumeration

`ErrorCode`

## Fields

| Name | Description |
|  --- | --- |
| `INTERNAL_SERVER_ERROR` | 500 Internal Server Error - a general server error occurred. |
| `UNAUTHORIZED` | 401 Unauthorized - a general authorization error occurred. |
| `ACCESS_TOKEN_EXPIRED` | 401 Unauthorized - the provided access token has expired. |
| `ACCESS_TOKEN_REVOKED` | 401 Unauthorized - the provided access token has been revoked. |
| `CLIENT_DISABLED` | 401 Unauthorized - the provided client has been disabled. |
| `FORBIDDEN` | 403 Forbidden - a general access error occurred. |
| `INSUFFICIENT_SCOPES` | 403 Forbidden - the provided access token does not have permission<br>to execute the requested action. |
| `APPLICATION_DISABLED` | 403 Forbidden - the calling application was disabled. |
| `V1_APPLICATION` | 403 Forbidden - the calling application was created prior to<br>2016-03-30 and is not compatible with v2 Square API calls. |
| `V1_ACCESS_TOKEN` | 403 Forbidden - the calling application is using an access token<br>created prior to 2016-03-30 and is not compatible with v2 Square API<br>calls. |
| `CARD_PROCESSING_NOT_ENABLED` | 403 Forbidden - the location provided in the API call is not<br>enabled for credit card processing. |
| `BAD_REQUEST` | 400 Bad Request - a general error occurred. |
| `MISSING_REQUIRED_PARAMETER` | 400 Bad Request - the request is missing a required path, query, or<br>body parameter. |
| `INCORRECT_TYPE` | 400 Bad Request - the value provided in the request is the wrong<br>type. For example, a string instead of an integer. |
| `INVALID_TIME` | 400 Bad Request - formatting for the provided time value is<br>incorrect. |
| `INVALID_TIME_RANGE` | 400 Bad Request - the time range provided in the request is invalid.<br>For example, the end time is before the start time. |
| `INVALID_VALUE` | 400 Bad Request - the provided value is invalid. For example,<br>including `%` in a phone number. |
| `INVALID_CURSOR` | 400 Bad Request - the pagination cursor included in the request is<br>invalid. |
| `UNKNOWN_QUERY_PARAMETER` | 400 Bad Request - the query parameters provided is invalid for the<br>requested endpoint. |
| `CONFLICTING_PARAMETERS` | 400 Bad Request - 1 or more of the request parameters conflict with<br>each other. |
| `EXPECTED_JSON_BODY` | 400 Bad Request - the request body is not a JSON object. |
| `INVALID_SORT_ORDER` | 400 Bad Request - the provided sort order is not a valid key.<br>Currently, sort order must be `ASC` or `DESC`. |
| `VALUE_REGEX_MISMATCH` | 400 Bad Request - the provided value does not match an expected<br>regular expression. |
| `VALUE_TOO_SHORT` | 400 Bad Request - the provided string value is shorter than the<br>minimum length allowed. |
| `VALUE_TOO_LONG` | 400 Bad Request - the provided string value is longer than the<br>maximum length allowed. |
| `VALUE_TOO_LOW` | 400 Bad Request - the provided value is less than the supported<br>minimum. |
| `VALUE_TOO_HIGH` | 400 Bad Request - the provided value is greater than the supported<br>maximum. |
| `VALUE_EMPTY` | 400 Bad Request - the provided value has a default (empty) value<br>such as a blank string. |
| `ARRAY_LENGTH_TOO_LONG` | 400 Bad Request - the provided array has too many elements. |
| `ARRAY_LENGTH_TOO_SHORT` | 400 Bad Request - the provided array has too few elements. |
| `ARRAY_EMPTY` | 400 Bad Request - the provided array is empty. |
| `EXPECTED_BOOLEAN` | 400 Bad Request - the endpoint expected the provided value to be a<br>boolean. |
| `EXPECTED_INTEGER` | 400 Bad Request - the endpoint expected the provided value to be an<br>integer. |
| `EXPECTED_FLOAT` | 400 Bad Request - the endpoint expected the provided value to be a<br>float. |
| `EXPECTED_STRING` | 400 Bad Request - the endpoint expected the provided value to be a<br>string. |
| `EXPECTED_OBJECT` | 400 Bad Request - the endpoint expected the provided value to be a<br>JSON object. |
| `EXPECTED_ARRAY` | 400 Bad Request - the endpoint expected the provided value to be an<br>array or list. |
| `EXPECTED_MAP` | 400 Bad Request - the endpoint expected the provided value to be a<br>map or associative array. |
| `EXPECTED_BASE64_ENCODED_BYTE_ARRAY` | 400 Bad Request - the endpoint expected the provided value to be an<br>array encoded in base64. |
| `INVALID_ARRAY_VALUE` | 400 Bad Request - 1 or more object in the array does not match the<br>array type. |
| `INVALID_ENUM_VALUE` | 400 Bad Request - the provided static string is not valid for the<br>field. |
| `INVALID_CONTENT_TYPE` | 400 Bad Request - invalid content type header. |
| `INVALID_FORM_VALUE` | 400 Bad Request - Only relevant for applications created prior to<br>2016-03-30. Indicates there was an error while parsing form values. |
| `CUSTOMER_NOT_FOUND` | 400 Bad Request - the provided customer id can't be found in the merchant's customers list. |
| `ONE_INSTRUMENT_EXPECTED` | 400 Bad Request - a general error occurred. |
| `NO_FIELDS_SET` | 400 Bad Request - a general error occurred. |
| `TOO_MANY_MAP_ENTRIES` | 400 Bad Request - too many entries in the map field. |
| `MAP_KEY_LENGTH_TOO_SHORT` | 400 Bad Request - the length of one of the provided keys in the map is too short. |
| `MAP_KEY_LENGTH_TOO_LONG` | 400 Bad Request - the length of one of the provided keys in the map is too long. |
| `CARD_EXPIRED` | The card issuer declined the request because the card is expired. |
| `INVALID_EXPIRATION` | The expiration date for the payment card is invalid. For example,<br>it indicates a date in the past. |
| `INVALID_EXPIRATION_YEAR` | The expiration year for the payment card is invalid. For example,<br>it indicates a year in the past or contains invalid characters. |
| `INVALID_EXPIRATION_DATE` | The expiration date for the payment card is invalid. For example,<br>it contains invalid characters. |
| `UNSUPPORTED_CARD_BRAND` | The credit card provided is not from a supported issuer. |
| `UNSUPPORTED_ENTRY_METHOD` | The entry method for the credit card (swipe, dip, tap) is not supported. |
| `INVALID_ENCRYPTED_CARD` | The encrypted card information is invalid. |
| `INVALID_CARD` | The credit card cannot be validated based on the provided details. |
| `GENERIC_DECLINE` | An unexpected error occurred. |
| `CVV_FAILURE` | The card issuer declined the request because the CVV value is invalid. |
| `ADDRESS_VERIFICATION_FAILURE` | The card issuer declined the request because the postal code is invalid. |
| `INVALID_ACCOUNT` | The card issuer was not able to locate account on record. |
| `CURRENCY_MISMATCH` | The currency associated with the payment is not valid for the provided<br>funding source. For example, a gift card funded in USD cannot be used to process<br>payments in GBP. |
| `INSUFFICIENT_FUNDS` | The funding source has insufficient funds to cover the payment. |
| `INSUFFICIENT_PERMISSIONS` | The Square account does not have the permissions to accept<br>this payment. For example, Square may limit which merchants are<br>allowed to receive gift card payments. |
| `CARDHOLDER_INSUFFICIENT_PERMISSIONS` | The card issuer has declined the transaction due to restrictions on where the card can be used.<br>For example, a gift card is limited to a single merchant. |
| `INVALID_LOCATION` | The Square account cannot take payments in the specified region.<br>A Square account can take payments only from the region where the account was created. |
| `TRANSACTION_LIMIT` | The card issuer has determined the payment amount is either too high or too low.<br>The API returns the error code mostly for credit cards (for example, the card reached<br>the credit limit). However, sometimes the issuer bank can indicate the error for debit<br>or prepaid cards (for example, card has insufficient funds). |
| `VOICE_FAILURE` | The card issuer declined the request because the issuer requires voice authorization from the cardholder. |
| `PAN_FAILURE` | The specified card number is invalid. For example, it is of<br>incorrect length or is incorrectly formatted. |
| `EXPIRATION_FAILURE` | The card expiration date is either invalid or indicates that the<br>card is expired. |
| `CARD_NOT_SUPPORTED` | The card is not supported either in the geographic region or by<br>the MCC [merchant category code](https://developer.squareup.com/docs/api/connect/v2#navsection-connectapibasics) |
| `INVALID_PIN` | The card issuer declined the request because the PIN is invalid. |
| `INVALID_POSTAL_CODE` | The postal code is incorrectly formatted. |
| `INVALID_FEES` | The app_fee_money on a payment is too high. |
| `MANUALLY_ENTERED_PAYMENT_NOT_SUPPORTED` | The card must be swiped, tapped, or dipped. Payments attempted by manually entering the card number are declined. |
| `PAYMENT_LIMIT_EXCEEDED` | Square declined the request because the payment amount exceeded the processing limit for this merchant. |
| `GIFT_CARD_AVAILABLE_AMOUNT` | When a Gift Card is a payment source, you can allow taking a partial payment<br>by adding the `accept_partial_authorization` parameter in the request.<br>However, taking such a partial payment does not work if your request also includes<br>`tip_money`, `app_fee_money`, or both. Square declines such payments and returns<br>the `GIFT_CARD_AVAILABLE_AMOUNT` error.<br>For more information, see<br>[CreatePayment errors (additional information)](https://developer.squareup.com/docs/payments-api/error-codes#createpayment-errors-additional-information). |
| `DELAYED_TRANSACTION_EXPIRED` | The application tried to update a delayed-capture payment that has expired. |
| `DELAYED_TRANSACTION_CANCELED` | The application tried to cancel a delayed-capture payment that was already cancelled. |
| `DELAYED_TRANSACTION_CAPTURED` | The application tried to capture a delayed-capture payment that was already captured. |
| `DELAYED_TRANSACTION_FAILED` | The application tried to update a delayed-capture payment that failed. |
| `CARD_TOKEN_EXPIRED` | The provided card token (nonce) has expired. |
| `CARD_TOKEN_USED` | The provided card token (nonce) was already used to process payment. |
| `AMOUNT_TOO_HIGH` | The requested payment amount is too high for the provided payment source. |
| `UNSUPPORTED_INSTRUMENT_TYPE` | The API request references an unsupported instrument type/ |
| `REFUND_AMOUNT_INVALID` | The requested refund amount exceeds the amount available to refund. |
| `REFUND_ALREADY_PENDING` | The payment already has a pending refund. |
| `PAYMENT_NOT_REFUNDABLE` | The payment is not refundable. For example, a previous refund has<br>already been rejected and no new refunds can be accepted. |
| `REFUND_DECLINED` | Request failed - The card issuer declined the refund. |
| `INVALID_CARD_DATA` | Generic error - the provided card data is invalid. |
| `SOURCE_USED` | The provided source id was already used to create a card. |
| `SOURCE_EXPIRED` | The provided source id has expired. |
| `LOCATION_MISMATCH` | Generic error - the given location does not matching what is expected. |
| `IDEMPOTENCY_KEY_REUSED` | The provided idempotency key has already been used. |
| `UNEXPECTED_VALUE` | General error - the value provided was unexpected. |
| `SANDBOX_NOT_SUPPORTED` | The API request is not supported in sandbox. |
| `INVALID_EMAIL_ADDRESS` | The provided email address is invalid. |
| `INVALID_PHONE_NUMBER` | The provided phone number is invalid. |
| `CHECKOUT_EXPIRED` | The provided checkout URL has expired. |
| `BAD_CERTIFICATE` | Bad certificate. |
| `INVALID_SQUARE_VERSION_FORMAT` | The provided Square-Version is incorrectly formatted. |
| `API_VERSION_INCOMPATIBLE` | The provided Square-Version is incompatible with the requested action. |
| `CARD_DECLINED` | 402 Request failed - the card was declined. |
| `VERIFY_CVV_FAILURE` | 402 Request failed - the CVV could not be verified. |
| `VERIFY_AVS_FAILURE` | 402 Request failed - the AVS could not be verified. |
| `CARD_DECLINED_CALL_ISSUER` | 402 Request failed - the payment card was declined with a request<br>for the card holder to call the issuer. |
| `CARD_DECLINED_VERIFICATION_REQUIRED` | 402 Request failed - the payment card was declined with a request<br>for additional verification. |
| `BAD_EXPIRATION` | 402 Request failed - the card expiration date is either missing or<br>incorrectly formatted. |
| `CHIP_INSERTION_REQUIRED` | 402 Request failed - the card issuer requires that the card be read<br>using a chip reader. |
| `ALLOWABLE_PIN_TRIES_EXCEEDED` | 402 Request failed - the card has exhausted its available pin entry<br>retries set by the card issuer. Resolving the error typically requires the<br>card holder to contact the card issuer. |
| `RESERVATION_DECLINED` | 402 Request failed - The card issuer declined the refund. |
| `NOT_FOUND` | 404 Not Found - a general error occurred. |
| `APPLE_PAYMENT_PROCESSING_CERTIFICATE_HASH_NOT_FOUND` | 404 Not Found - Square could not find the associated Apple Pay certificate. |
| `METHOD_NOT_ALLOWED` | 405 Method Not Allowed - a general error occurred. |
| `NOT_ACCEPTABLE` | 406 Not Acceptable - a general error occurred. |
| `REQUEST_TIMEOUT` | 408 Request Timeout - a general error occurred. |
| `CONFLICT` | 409 Conflict - a general error occurred. |
| `GONE` | 410 Gone - the target resource is no longer available and this<br>condition is likely to be permanent.. |
| `REQUEST_ENTITY_TOO_LARGE` | 413 Request Entity Too Large - a general error occurred. |
| `UNSUPPORTED_MEDIA_TYPE` | 415 Unsupported Media Type - a general error occurred. |
| `UNPROCESSABLE_ENTITY` | 422 Unprocessable Entity - a general error occurred. |
| `RATE_LIMITED` | 429 Rate Limited - a general error occurred. |
| `NOT_IMPLEMENTED` | 501 Not Implemented - a general error occurred. |
| `BAD_GATEWAY` | 502 Bad Gateway - a general error occurred. |
| `SERVICE_UNAVAILABLE` | 503 Service Unavailable - a general error occurred. |
| `TEMPORARY_ERROR` | A temporary internal error occurred. You can safely retry your call<br>using the same idempotency key. |
| `GATEWAY_TIMEOUT` | 504 Gateway Timeout - a general error occurred. |

