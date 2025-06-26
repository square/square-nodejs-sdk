import { createClient } from "./helpers";
import { SquareClient } from "../../src";

function formatDateString(date: Date): string {
    return date.toISOString().slice(0, 19) + "Z";
}

describe("Labor API", () => {
    const client: SquareClient = createClient();
    let locationId: string;
    let memberId: string;
    let breakId: string;
    let shiftId: string;

    beforeAll(async () => {
        // Get first available location
        const locations = await client.locations.list();
        if (!locations.locations?.length) {
            throw new Error("No locations available for testing");
        }
        locationId = locations.locations[0].id!;

        // Get first available team member at this location
        const teamMembers = await client.teamMembers.search({
            query: {
                filter: {
                    locationIds: [locationId],
                    status: "ACTIVE",
                },
            },
        });
        if (!teamMembers.teamMembers?.length) {
            throw new Error(`No team members available at location ${locationId}`);
        }
        memberId = teamMembers.teamMembers[0].id!;

        // Create break type for testing
        const breakResponse = await client.labor.breakTypes.create({
            idempotencyKey: crypto.randomUUID(),
            breakType: {
                locationId: locationId,
                expectedDuration: "PT0H30M0S", // 30 min duration in RFC 3339 format
                breakName: `Lunch_${crypto.randomUUID()}`,
                isPaid: true,
            },
        });
        if (!breakResponse.breakType?.id) {
            throw new Error("Failed to create break type");
        }
        breakId = breakResponse.breakType.id;

        // Create shift for testing
        const shiftResponse = await client.labor.shifts.create({
            idempotencyKey: crypto.randomUUID(),
            shift: {
                startAt: formatDateString(new Date()),
                locationId: locationId,
                teamMemberId: memberId,
            },
        });
        if (!shiftResponse.shift?.id) {
            throw new Error("Failed to create shift");
        }
        shiftId = shiftResponse.shift.id;
    });

    afterAll(async () => {
        // Clean up resources
        try {
            await client.labor.shifts.delete({
                id: shiftId,
            });
        } catch (e) {
            // Test may have already deleted the shift
        }

        try {
            await client.labor.breakTypes.delete({
                id: breakId,
            });
        } catch (e) {
            // Test may have already deleted the break
        }
    });

    it("should list break types", async () => {
        const response = await client.labor.breakTypes.list();

        expect(response.data).toBeDefined();
        expect(response.data?.length).toBeGreaterThan(0);
    });

    it("should get break type", async () => {
        const response = await client.labor.breakTypes.get({
            id: breakId,
        });

        expect(response.breakType).toBeDefined();
        expect(response.breakType?.id).toBe(breakId);
    });

    it("should update break type", async () => {
        const response = await client.labor.breakTypes.update({
            id: breakId,
            breakType: {
                locationId: locationId,
                expectedDuration: "PT1H0M0S", // 1 hour duration
                breakName: `Lunch_${crypto.randomUUID()}`,
                isPaid: true,
            },
        });

        expect(response.breakType).toBeDefined();
        expect(response.breakType?.id).toBe(breakId);
        expect(response.breakType?.expectedDuration).toBe("PT1H");
    });

    it("should search shifts", async () => {
        const response = await client.labor.shifts.search({
            limit: 1,
        });

        expect(response.shifts).toBeDefined();
        expect(response.shifts?.length).toBeGreaterThan(0);
    });

    it("should get shift", async () => {
        const response = await client.labor.shifts.get({
            id: shiftId,
        });

        expect(response.shift).toBeDefined();
        expect(response.shift?.id).toBe(shiftId);
    });

    it("should update shift", async () => {
        const response = await client.labor.shifts.update({
            id: shiftId,
            shift: {
                locationId: locationId,
                teamMemberId: memberId,
                startAt: formatDateString(new Date(Date.now() - 6000)),
                wage: {
                    title: "Manager",
                    hourlyRate: {
                        amount: BigInt(2500),
                        currency: "USD",
                    },
                },
            },
        });

        expect(response.shift).toBeDefined();
        expect(response.shift?.wage?.title).toBe("Manager");
        expect(response.shift?.wage?.hourlyRate?.amount).toBe(BigInt(2500));
        expect(response.shift?.wage?.hourlyRate?.currency).toBe("USD");
    });

    it("should delete shift", async () => {
        // First search for existing shifts for this team member
        const existingShifts = await client.labor.shifts.search({
            query: {
                filter: {
                    teamMemberIds: [memberId],
                },
            },
            limit: 100,
        });

        // Delete any existing shifts
        if (existingShifts.shifts) {
            for (const shift of existingShifts.shifts) {
                if (shift.id) {
                    await client.labor.shifts.delete({
                        id: shift.id,
                    });
                }
            }
        }

        // Start the shift 10 seconds from now and end it 20 seconds from now
        const startTime = new Date(Date.now() + 10000);
        const endTime = new Date(startTime.getTime() + 10000);

        // Create shift
        const shiftResponse = await client.labor.shifts.create({
            idempotencyKey: crypto.randomUUID(),
            shift: {
                locationId: locationId,
                startAt: formatDateString(startTime),
                teamMemberId: memberId,
                endAt: formatDateString(endTime),
            },
        });

        if (!shiftResponse.shift?.id) {
            throw new Error("Failed to create shift");
        }

        // Add a small delay to ensure the shift is fully created
        await new Promise(resolve => setTimeout(resolve, 1000));

        const response = await client.labor.shifts.delete({
            id: shiftResponse.shift.id,
        });
        expect(response).toBeDefined();
    });

    it("should delete break type", async () => {
        // create break type
        const breakResponse = await client.labor.breakTypes.create({
            idempotencyKey: crypto.randomUUID(),
            breakType: {
                locationId: locationId,
                expectedDuration: "PT0H30M0S",
                breakName: `Lunch_${crypto.randomUUID()}`,
                isPaid: true,
            },
        });

        const response = await client.labor.breakTypes.delete({
            id: breakResponse.breakType?.id!,
        });
        expect(response).toBeDefined();
    });

    it("should list workweek configs", async () => {
        const response = await client.labor.workweekConfigs.list();

        expect(response.data).toBeDefined();
        expect(response.data?.length).toBeGreaterThan(0);
    });
});