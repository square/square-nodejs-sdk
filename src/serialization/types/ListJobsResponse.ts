/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";
import { Job } from "./Job";
import { Error_ } from "./Error_";

export const ListJobsResponse: core.serialization.ObjectSchema<
    serializers.ListJobsResponse.Raw,
    Square.ListJobsResponse
> = core.serialization.object({
    jobs: core.serialization.list(Job).optional(),
    cursor: core.serialization.string().optional(),
    errors: core.serialization.list(Error_).optional(),
});

export declare namespace ListJobsResponse {
    export interface Raw {
        jobs?: Job.Raw[] | null;
        cursor?: string | null;
        errors?: Error_.Raw[] | null;
    }
}
