import { WebhooksHelper } from '../../src/utilities/webhooksHelper';

describe('Test webhooks signature validation', () => {
    const requestBody = '{"merchant_id":"MLEFBHHSJGVHD","type":"webhooks.test_notification","event_id":"ac3ac95b-f97d-458c-a6e6-18981597e05f","created_at":"2022-07-13T20:30:59.037339943Z","data":{"type":"webhooks","id":"bc368e64-01aa-407e-b46e-3231809b1129"}}';

    const signatureHeader = 'GF4YkrJgGBDZ9NIYbNXBnMzqb2HoL4RW/S6vkZ9/2N4=';

    const signatureKey = 'Ibxx_5AKakO-3qeNVR61Dw';

    const notificationUrl = 'https://webhook.site/679a4f3a-dcfa-49ee-bac5-9d0edad886b9';

    test('test signature validation pass', () => {
        const isValid = WebhooksHelper.isValidWebhookEventSignature(
            requestBody,
            signatureHeader,
            signatureKey,
            notificationUrl
        );
        expect(isValid).toBe(true);
    });

    test('test signature unescaped chars validation pass', () => {
        const url = "https://webhook.site/webhooks"
        const sigKey = 'signature-key';
        const specialCharacterBody = '{"data":{"type":"webhooks","id":"fake_id"}}';
        const expectedSignatureHeader = 'W3FlCNk5IA3ZQ2LHTWoajvzfaDu/OwY2tNHIHC3IUOA=';

        const isValid = WebhooksHelper.isValidWebhookEventSignature(
            specialCharacterBody,
            expectedSignatureHeader,
            sigKey,
            url
        );
        expect(isValid).toBe(true);
    });

    test('test signature with escaped characters', () => {
        const url = "https://webhook.site/webhooks"
        const sigKey = 'signature-key';
        const specialCharacterBody = '{"data":{"type":"webhooks","id":">id<"}}';
        const expectedSignatureHeader = 'Cxt7+aTi4rKgcA0bC4g9EHdVtLSDWdqccmL5MvihU4U=';

        const isValid = WebhooksHelper.isValidWebhookEventSignature(
            specialCharacterBody,
            expectedSignatureHeader,
            sigKey,
            url
        );
        expect(isValid).toBe(true);
    });

    test('test signature validation fails on notification url mismatch', () => {
        const isValid = WebhooksHelper.isValidWebhookEventSignature(
            requestBody,
            signatureHeader,
            signatureKey,
            'https://webhook.site/79a4f3a-dcfa-49ee-bac5-9d0edad886b9'
        );
        expect(isValid).toBe(false);
    });

    test('test signature validation fails on invalid signature key', () => {
        const isValid = WebhooksHelper.isValidWebhookEventSignature(
            requestBody,
            signatureHeader,
            'MCmhFRxGX82xMwg5FsaoQA',
            notificationUrl
        );
        expect(isValid).toBe(false);
    });

    test('test signature validation fails on invalida signature header', () => {
        const isValid = WebhooksHelper.isValidWebhookEventSignature(
            requestBody,
            '1z2n3DEJJiUPKcPzQo1ftvbxGdw=',
            signatureKey,
            notificationUrl
        );
        expect(isValid).toBe(false);
    });

    test('test signature validation fails on request body mismatch', () => {
        let requestBody = '{"merchant_id":"MLEFBHHSJGVHD","type":"webhooks.test_notification","event_id":"ac3ac95b-f97d-458c-a6e6-18981597e05f","created_at":"2022-06-13T20:30:59.037339943Z","data":{"type":"webhooks","id":"bc368e64-01aa-407e-b46e-3231809b1129"}}';
        const isValid = WebhooksHelper.isValidWebhookEventSignature(
            requestBody,
            signatureHeader,
            signatureKey,
            notificationUrl
        );
        expect(isValid).toBe(false);
    });

    test('test signature validation fails on request body formatted', () => {
        let requestBody = '{\n'
        + '    "merchant_id": "MLEFBHHSJGVHD",\n'
        + '    "type": "webhooks.test_notification",\n'
        + '    "event_id": "ac3ac95b-f97d-458c-a6e6-18981597e05f",\n'
        + '    "created_at": "2022-07-13T20:30:59.037339943Z",\n'
        + '    "data": {\n'
        + '      "type": "webhooks",\n'
        + '      "id": "bc368e64-01aa-407e-b46e-3231809b1129"\n'
        + '    }\n'
        + '}';
        const isValid = WebhooksHelper.isValidWebhookEventSignature(
            requestBody,
            signatureHeader,
            signatureKey,
            notificationUrl
        );
        expect(isValid).toBe(false);
    });

    it('throws an error on empty signature key', () => {
        expect(() => {
                WebhooksHelper.isValidWebhookEventSignature(
                    requestBody,
                    signatureHeader,
                    '',
                    notificationUrl
                );
            }
        ).toThrowError('signatureKey is null or empty');
    });

    it('throws error on signature key not configured', () => {
        expect(() => {
                WebhooksHelper.isValidWebhookEventSignature(
                    requestBody,
                    signatureHeader,
                    null!,
                    notificationUrl
                );
            }
        ).toThrowError('signatureKey is null or empty');
    });

    it('throws error on empty notification url', () => {
        expect(() => {
                WebhooksHelper.isValidWebhookEventSignature(
                    requestBody,
                    signatureHeader,
                    signatureKey,
                    ''
                );
            }
        ).toThrowError('notificationUrl is null or empty');
    });

    it('throws error on notification url not configured', () => {
        expect(() => {
                WebhooksHelper.isValidWebhookEventSignature(
                    requestBody,
                    signatureHeader,
                    signatureKey,
                    null!
                );
            }
        ).toThrowError('notificationUrl is null or empty');
    });
});