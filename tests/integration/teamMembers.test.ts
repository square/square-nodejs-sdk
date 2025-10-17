import type { SquareClient } from "../../src";
import { createClient, newTestUuid } from "./helpers";

describe("Team members API", () => {
    const client: SquareClient = createClient();
    let memberId: string;
    let bulkMemberIds: string[] = [];

    beforeAll(async () => {
        // Create team member for testing
        const memberResponse = await client.teamMembers.create({
            idempotencyKey: newTestUuid(),
            teamMember: {
                givenName: "Sherlock",
                familyName: "Holmes",
            },
        });
        memberId = memberResponse.teamMember?.id!;

        // Create bulk team members for testing
        const bulkResponse = await client.teamMembers.batchCreate({
            teamMembers: {
                [newTestUuid()]: {
                    teamMember: {
                        givenName: "Donatello",
                        familyName: "Splinter",
                    },
                },
                [newTestUuid()]: {
                    teamMember: {
                        givenName: "Michaelangelo",
                        familyName: "Splinter",
                    },
                },
            },
        });

        bulkMemberIds = Object.values(bulkResponse.teamMembers!).map((result) => result.teamMember?.id!);
    });

    it("should search team members", async () => {
        const response = await client.teamMembers.search({
            limit: 1,
        });

        expect(response.teamMembers).toBeDefined();
        expect(response.teamMembers?.length).toBeGreaterThan(0);
    });

    it("should create team member", async () => {
        const response = await client.teamMembers.create({
            idempotencyKey: newTestUuid(),
            teamMember: {
                givenName: "John",
                familyName: "Watson",
            },
        });

        expect(response.teamMember).toBeDefined();
        expect(response.teamMember?.givenName).toBe("John");
        expect(response.teamMember?.familyName).toBe("Watson");
    });

    it("should retrieve team member", async () => {
        const response = await client.teamMembers.get({
            teamMemberId: memberId,
        });

        expect(response.teamMember).toBeDefined();
        expect(response.teamMember?.id).toBe(memberId);
    });

    it("should retrieve wage setting", async () => {
        const response = await client.teamMembers.wageSetting.get({
            teamMemberId: memberId,
        });

        expect(response.wageSetting).toBeDefined();
        expect(response.wageSetting?.teamMemberId).toBe(memberId);
    });

    it("should update team member", async () => {
        const _response = await client.teamMembers.update({
            teamMemberId: memberId,
            // TODO: check if we can flatter this
            body: {
                teamMember: {
                    givenName: "Agent",
                    familyName: "Smith",
                },
            },
        });

        const getResponse = await client.teamMembers.get({ teamMemberId: memberId });

        expect(getResponse.teamMember).toBeDefined();
        expect(getResponse.teamMember?.id).toBe(memberId);
        expect(getResponse.teamMember?.givenName).toBe("Agent");
        expect(getResponse.teamMember?.familyName).toBe("Smith");
    });

    it("should update wage setting", async () => {
        const response = await client.teamMembers.wageSetting.update({
            teamMemberId: memberId,
            wageSetting: {
                jobAssignments: [
                    {
                        jobTitle: "Math tutor",
                        payType: "HOURLY",
                        hourlyRate: {
                            amount: BigInt(2500),
                            currency: "USD",
                        },
                    },
                ],
            },
        });

        expect(response.wageSetting).toBeDefined();
        expect(response.wageSetting?.jobAssignments?.[0].jobTitle).toBe("Math tutor");
        expect(response.wageSetting?.jobAssignments?.[0].hourlyRate?.amount).toBe(BigInt(2500));
    });

    it("should batch update team members", async () => {
        const response = await client.teamMembers.batchUpdate({
            teamMembers: {
                [bulkMemberIds[0]]: {
                    teamMember: {
                        givenName: "Raphael",
                        familyName: "Splinter",
                    },
                },
                [bulkMemberIds[1]]: {
                    teamMember: {
                        givenName: "Leonardo",
                        familyName: "Splinter",
                    },
                },
            },
        });

        expect(response.teamMembers).toBeDefined();
        expect(Object.keys(response.teamMembers!).length).toBe(2);
    });
});
