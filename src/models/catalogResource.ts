import {
  nullable,
  object,
  optional,
  Schema,
  string,
} from '../schema';

/**
 * Create resources - like rooms, stations, or chairs - and assign them to your services that require them. When those services are booked,
 * the resources are automatically booked at the same time so that you don’t get doubled booked when a resource is unavailable.
 * You can also view which resource is booked out for the service from the appointment details.
 * You can also use resources to help you restrict the number of appointments for the same time slot, such as a private shopping appointment.
 */
export interface CatalogResource {
  /** The resource's name. This is a searchable attribute for use in applicable query filters, and its value length is of Unicode code points. */
  name: string;
  /** The resource's description, if any. This is a searchable attribute for use in applicable query filters. */
  description?: string | null;
}

export const catalogResourceSchema: Schema<CatalogResource> = object({
  name: ['name', string()],
  description: ['description', optional(nullable(string()))],
});
