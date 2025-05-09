/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";
import { Job } from "./Job";
import { Error_ } from "./Error_";

export const CreateJobResponse: core.serialization.ObjectSchema<
    serializers.CreateJobResponse.Raw,
    Square.CreateJobResponse
> = core.serialization.object({
    job: Job.optional(),
    errors: core.serialization.list(Error_).optional(),
});

export declare namespace CreateJobResponse {
    export interface Raw {
        job?: Job.Raw | null;
        errors?: Error_.Raw[] | null;
    }
}
