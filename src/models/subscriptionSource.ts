import { object, optional, Schema, string } from '../schema';

/** The origination details of the subscription. */
export interface SubscriptionSource {
  /**
   * The name used to identify the place (physical or digital) that
   * a subscription originates. If unset, the name defaults to the name
   * of the application that created the subscription.
   */
  name?: string;
}

export const subscriptionSourceSchema: Schema<SubscriptionSource> = object({
  name: ['name', optional(string())],
});
