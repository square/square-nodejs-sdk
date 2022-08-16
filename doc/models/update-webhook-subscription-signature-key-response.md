
# Update Webhook Subscription Signature Key Response

Defines the fields that are included in the response body of
a request to the [UpdateWebhookSubscriptionSignatureKey](../../doc/api/webhook-subscriptions.md#update-webhook-subscription-signature-key) endpoint.

Note: If there are errors processing the request, the [Subscription](../../doc/models/webhook-subscription.md) is not
present.

## Structure

`UpdateWebhookSubscriptionSignatureKeyResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | Information on errors encountered during the request. |
| `signatureKey` | `string \| undefined` | Optional | The new Square-generated signature key used to validate the origin of the webhook event. |

## Example (as JSON)

```json
{
  "signature_key": "1k9bIJKCeTmSQwyagtNRLg"
}
```

