import crypto from 'crypto';

/**
 * Utility to help with {@link https://developer.squareup.com/docs/webhooks/overview Square Webhooks }
 */
export class WebhooksHelper {
    /**
     * Verifies and validates an event notification. 
     * See the {@link https://developer.squareup.com/docs/webhooks/step3validate documentation} for more details.
     * 
     * @param requestBody       The JSON body of the request.
     * @param signatureHeader   The value for the `x-square-hmacsha256-signature` header.
     * @param signatureKey      The signature key from the {@link https://developer.squareup.com/apps Square Developer portal} for the webhook subscription.
     * @param notificationUrl   The notification endpoint URL as defined in the {@link https://developer.squareup.com/apps Square Developer portal} for the webhook subscription.
     * @returns                 `true` if the signature is valid, indicating that the event can be trusted as it came from Square. `false` if the signature validation fails, indicating that the event did not come from Square, so it may be malicious and should be discarded.
     */
    static isValidWebhookEventSignature(
        requestBody: string,
        signatureHeader: string,
        signatureKey: string,
        notificationUrl: string
    ): boolean {
        if (requestBody == null) {
            return false;
        }
        if (signatureKey == null || signatureKey.length == 0) {
            throw new Error('signatureKey is null or empty');
        }
        if (notificationUrl == null || notificationUrl.length == 0) {
            throw new Error('notificationUrl is null or empty');
        }

        // Perform UTF-8 encoding to bytes
        let payloadBytes = Buffer.from(notificationUrl + requestBody, 'utf-8');
        let signatureKeyBytes = Buffer.from(signatureKey, 'utf-8');

        // Compute the hash value
        const hmac = crypto.createHmac('sha256', signatureKeyBytes);
        hmac.update(payloadBytes);

        // Compare the computed hash vs the value in the signature header
        const hashBase64 = hmac.digest('base64');
        return hashBase64 === signatureHeader;
    }
}