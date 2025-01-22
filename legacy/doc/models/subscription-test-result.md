
# Subscription Test Result

Represents the details of a webhook subscription, including notification URL,
event types, and signature key.

## Structure

`SubscriptionTestResult`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | A Square-generated unique ID for the subscription test result.<br>**Constraints**: *Maximum Length*: `64` |
| `statusCode` | `number \| null \| undefined` | Optional | The status code returned by the subscription notification URL. |
| `payload` | `string \| null \| undefined` | Optional | An object containing the payload of the test event. For example, a `payment.created` event. |
| `createdAt` | `string \| undefined` | Optional | The timestamp of when the subscription was created, in RFC 3339 format.<br>For example, "2016-09-04T23:59:33.123Z". |
| `updatedAt` | `string \| undefined` | Optional | The timestamp of when the subscription was updated, in RFC 3339 format. For example, "2016-09-04T23:59:33.123Z".<br>Because a subscription test result is unique, this field is the same as the `created_at` field. |

## Example (as JSON)

```json
{
  "id": "id0",
  "status_code": 208,
  "payload": "payload6",
  "created_at": "created_at8",
  "updated_at": "updated_at4"
}
```

