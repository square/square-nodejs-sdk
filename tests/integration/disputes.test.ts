import { createClient, getTestFile, newTestUuid } from "./helpers";
import { SquareClient } from "../../src";

describe("Disputes API", () => {
    const client: SquareClient = createClient();
    let disputeId: string;
    let textEvidenceId: string;

    beforeAll(async () => {
        // Create a payment that will generate a dispute
        const paymentsResp = await client.payments.create({
            idempotencyKey: newTestUuid(),
            autocomplete: true,
            sourceId: "cnon:card-nonce-ok",
            amountMoney: {
                amount: BigInt(8803), // In sandbox, amount of 88.03 USD automatically generates a dispute with reason DUPLICATE
                currency: "USD",
            },
        });

        // Poll for dispute to be created
        for (let i = 0; i < 100; i++) {
            const disputeResponse = await client.disputes.list({
                states: "EVIDENCE_REQUIRED",
            });

            if (disputeResponse.data && disputeResponse.data.length > 0) {
                disputeId = disputeResponse.data[0].id!;
                break;
            }

            // Wait for 2 seconds before polling again
            await new Promise((resolve) => setTimeout(resolve, 2_000));
        }

        if (!disputeId) {
            throw new Error("Dispute was not created within the expected time frame.");
        }

        // Create evidence text for testing
        const evidenceResponse = await client.disputes.createEvidenceText({
            disputeId,
            idempotencyKey: newTestUuid(),
            evidenceType: "GENERIC_EVIDENCE",
            evidenceText: "This is not a duplicate",
        });
        textEvidenceId = evidenceResponse.evidence!.id!;
    }, 200_000);

    afterAll(async () => {
        // Clean up evidence if it exists
        try {
            await client.disputes.evidence.delete({
                disputeId,
                evidenceId: textEvidenceId,
            });
        } catch (error) {
            // Evidence might already be deleted by test
        }
    });

    it("should list disputes", async () => {
        const response = await client.disputes.list({
            states: "EVIDENCE_REQUIRED",
        });

        expect(response.data).toBeDefined();
        expect(response.data?.length).toBeGreaterThan(0);
        expect(response.data?.[0]).toMatchObject({
            reason: "DUPLICATE",
            state: "EVIDENCE_REQUIRED",
            cardBrand: "VISA",
        });
    });

    it("should retrieve dispute", async () => {
        const response = await client.disputes.get({
            disputeId,
        });

        expect(response.dispute).toBeDefined();
        expect(response.dispute?.id).toBe(disputeId);
    });

    it("should create dispute evidence text", async () => {
        const response = await client.disputes.createEvidenceText({
            disputeId,
            idempotencyKey: newTestUuid(),
            evidenceType: "GENERIC_EVIDENCE",
            evidenceText: "This is not a duplicate",
        });

        expect(response.evidence).toBeDefined();
    });

    it("should retrieve dispute evidence", async () => {
        const response = await client.disputes.evidence.get({
            disputeId,
            evidenceId: textEvidenceId,
        });

        expect(response.evidence).toBeDefined();
        expect(response.evidence?.id).toBe(textEvidenceId);
    });

    it("should list dispute evidence", async () => {
        const response = await client.disputes.evidence.list({
            disputeId,
        });

        expect(response.data).toBeDefined();
        expect(response.data?.length).toBeGreaterThan(0);
    });

    it("should delete dispute evidence", async () => {
        const response = await client.disputes.evidence.delete({
            disputeId,
            evidenceId: textEvidenceId,
        });

        expect(response).toBeDefined();
    });

    it("should create dispute evidence file", async () => {
        const imageFile = await getTestFile();

        const response = await client.disputes.createEvidenceFile({
            disputeId,
            request: {
                idempotencyKey: newTestUuid(),
                contentType: "image/jpeg",
                evidenceType: "GENERIC_EVIDENCE",
            },
            imageFile,
        });

        expect(response.evidence).toBeDefined();
        expect(response.evidence?.disputeId).toBe(disputeId);
    });

    it("should submit evidence", async () => {
        const response = await client.disputes.submitEvidence({
            disputeId,
        });

        expect(response).toBeDefined();
    });

    it("should accept dispute", async () => {
        const response = await client.disputes.accept({
            disputeId,
        });

        expect(response).toBeDefined();
    });
});
