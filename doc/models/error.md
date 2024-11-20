
# Error

Represents an error encountered during a request to the Connect API.

See [Handling errors](https://developer.squareup.com/docs/build-basics/handling-errors) for more information.

## Structure

`Error`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `category` | [`string`](../../doc/models/error-category.md) | Required | Indicates which high-level category of error has occurred during a<br>request to the Connect API. |
| `code` | [`string`](../../doc/models/error-code.md) | Required | Indicates the specific error that occurred during a request to a<br>Square API. |
| `detail` | `string \| undefined` | Optional | A human-readable description of the error for debugging purposes. |
| `field` | `string \| undefined` | Optional | The name of the field provided in the original request (if any) that<br>the error pertains to. |

## Example (as JSON)

```json
{
  "category": "API_ERROR",
  "code": "INVALID_PAUSE_LENGTH",
  "detail": "detail0",
  "field": "field8"
}
```

