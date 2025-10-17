export async function createHmacOverride(payload: string, key: string): Promise<string> {
    try {
        const crypto = require("crypto");
        const hmac = crypto.createHmac("sha256", key);
        hmac.update(payload, "utf8");
        return hmac.digest("base64");
    } catch (_err) {
        // Not in Node environmnet; use subtle crypto.
    }
    const subtleCrypto = getSubtleCrypto();
    if (!subtleCrypto) {
        throw new Error("No crypto implementation available");
    }
    const encoder = new TextEncoder();
    const cryptoKey = await subtleCrypto.importKey(
        "raw",
        encoder.encode(key),
        {
            name: "HMAC",
            hash: { name: "SHA-256" },
        },
        false,
        ["sign"],
    );
    const signatureBuffer = await subtleCrypto.sign("HMAC", cryptoKey, encoder.encode(payload));
    return arrayBufferToBase64(signatureBuffer);
}

function getSubtleCrypto(): SubtleCrypto | undefined {
    if (typeof window !== "undefined" && window?.crypto?.subtle) {
        return window.crypto.subtle;
    }
    return undefined;
}

function arrayBufferToBase64(buffer: ArrayBuffer): string {
    if (typeof btoa === "function") {
        // Browser environment
        const bytes = new Uint8Array(buffer);
        let binary = "";
        for (let i = 0; i < bytes.byteLength; i++) {
            binary += String.fromCharCode(bytes[i]);
        }
        return btoa(binary);
    } else {
        // Node environment
        return Buffer.from(buffer).toString("base64");
    }
}
