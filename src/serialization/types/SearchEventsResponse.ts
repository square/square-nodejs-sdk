/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";
import { Error_ } from "./Error_";
import { Event } from "./Event";
import { EventMetadata } from "./EventMetadata";

export const SearchEventsResponse: core.serialization.ObjectSchema<
    serializers.SearchEventsResponse.Raw,
    Square.SearchEventsResponse
> = core.serialization.object({
    errors: core.serialization.list(Error_).optional(),
    events: core.serialization.list(Event).optional(),
    metadata: core.serialization.list(EventMetadata).optional(),
    cursor: core.serialization.string().optional(),
});

export declare namespace SearchEventsResponse {
    export interface Raw {
        errors?: Error_.Raw[] | null;
        events?: Event.Raw[] | null;
        metadata?: EventMetadata.Raw[] | null;
        cursor?: string | null;
    }
}
