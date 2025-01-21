import { createClient, newTestUuid } from "./helpers";
import { Square, SquareClient } from "../../src";

describe("Teams API", () => {
    const client: SquareClient = createClient();

    it("should bulk update team members with mix of successes and failures", async () => {
        // Get default location ID
        const { locations } = await client.locations.list();
        const locationId = locations?.[0]?.id;
        expect(locationId).toBeDefined();

        // SETUP: Create 3 team members (should always be successful)
        const createMembersResp = await client.teamMembers.batchCreate({
            teamMembers: {
                [newTestUuid()]: {
                    teamMember: createTestTeamMember([locationId!]),
                },
                [newTestUuid()]: {
                    teamMember: createTestTeamMember([locationId!]),
                },
                [newTestUuid()]: {
                    teamMember: createTestTeamMember([locationId!]),
                },
            },
        });

        expect(createMembersResp.teamMembers).toBeDefined();

        const createdMemberIds: string[] = [];
        Object.values(createMembersResp.teamMembers!).forEach((response) => {
            const memberId = response.teamMember?.id;
            expect(memberId).toBeDefined();
            expect(response.errors).toBeUndefined();
            createdMemberIds.push(memberId!);
        });

        // Update 3 team members in a bulk request, with 2 successful updates and 1
        // invalid update (location ID is invalid). This should result in a 200
        // response, with 2 nested success responses and 1 nested error response.
        const updateTeamMembersResp = await client.teamMembers.batchUpdate({
            teamMembers: {
                [createdMemberIds[0]]: {
                    teamMember: createTestTeamMember([locationId!]),
                },
                [createdMemberIds[1]]: {
                    teamMember: createTestTeamMember([locationId!]),
                },
                [createdMemberIds[2]]: {
                    teamMember: createTestTeamMember(["INVALID_LocationID"]),
                },
            },
        });

        const teamMembers = updateTeamMembersResp.teamMembers!;
        expect(Object.keys(teamMembers)).toHaveLength(3);

        const member1Errors = teamMembers[createdMemberIds[0]].errors;
        const member2Errors = teamMembers[createdMemberIds[1]].errors;
        const member3Errors = teamMembers[createdMemberIds[2]].errors;

        expect(member1Errors).toBeUndefined();
        expect(member2Errors).toBeUndefined();
        expect(member3Errors).toBeDefined();
        expect(member3Errors![0].code).toBe("INVALID_VALUE");
        expect(member3Errors![0].detail).toBe("Expected the assigned_locations.location_ids to be valid");
    });
});

// Helper function to create a test team member
function createTestTeamMember(locationIds: string[]): Square.TeamMember {
    return {
        assignedLocations: {
            assignmentType: "EXPLICIT_LOCATIONS",
            locationIds: locationIds,
        },
        familyName: "Doe",
        givenName: "Jane",
    };
}
