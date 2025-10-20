import { SquareError } from "../../src/errors/SquareError";

describe("SquareError", () => {
    it("creates error with message only", () => {
        const error = new SquareError({ message: "Test error" });
        expect(error.message).toBe("Test error");
        expect(error.statusCode).toBeUndefined();
        expect(error.body).toBeUndefined();
        expect(error.errors).toHaveLength(1);
        expect(error.errors[0].code).toBe(SquareError.ErrorCode.Unknown);
    });

    it("creates error with status code", () => {
        const error = new SquareError({ message: "Test error", statusCode: 400 });
        expect(error.message).toContain("Test error");
        expect(error.message).toContain("Status code: 400");
        expect(error.statusCode).toBe(400);
    });

    it("creates error with body", () => {
        const body = { foo: "bar" };
        const error = new SquareError({ body });
        expect(error.message).toContain('{\n  "foo": "bar"\n}');
        expect(error.body).toEqual(body);
    });

    it("handles Square API v2 errors", () => {
        const body = {
            errors: [
                {
                    category: SquareError.ErrorCategory.ApiError,
                    code: SquareError.ErrorCode.BadRequest,
                    detail: "Invalid input",
                    field: "email",
                },
            ],
        };

        const error = new SquareError({ body });
        expect(error.errors).toEqual(body.errors);
        expect(error.errors[0].category).toBe(SquareError.ErrorCategory.ApiError);
        expect(error.errors[0].code).toBe(SquareError.ErrorCode.BadRequest);
    });

    it("handles Square API v1 errors", () => {
        const body = {
            type: "INVALID_REQUEST",
            message: "Invalid field value",
            field: "customer_id",
        };

        const error = new SquareError({ body });
        expect(error.errors).toHaveLength(1);
        expect(error.errors[0]).toEqual({
            category: SquareError.ErrorCategory.V1Error,
            code: "INVALID_REQUEST",
            detail: "Invalid field value",
            field: "customer_id",
        });
    });

    it("handles v1 errors with missing type", () => {
        const body = {
            message: "Invalid field value",
            field: "customer_id",
        };

        const error = new SquareError({ body });
        expect(error.errors).toHaveLength(1);
        expect(error.errors[0].code).toBe(SquareError.ErrorCode.Unknown);
    });

    it("combines all information in message", () => {
        const error = new SquareError({
            message: "API Error",
            statusCode: 400,
            body: { errors: [{ detail: "Invalid input" }] },
        });

        expect(error.message).toContain("API Error");
        expect(error.message).toContain("Status code: 400");
        expect(error.message).toContain("Invalid input");
    });
});
