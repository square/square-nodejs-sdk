/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Supported types of an event occurred to a subscription.
 */
export type SubscriptionEventSubscriptionEventType =
    | "START_SUBSCRIPTION"
    | "PLAN_CHANGE"
    | "STOP_SUBSCRIPTION"
    | "DEACTIVATE_SUBSCRIPTION"
    | "RESUME_SUBSCRIPTION"
    | "PAUSE_SUBSCRIPTION"
    | "BILLING_ANCHOR_DATE_CHANGED";
export const SubscriptionEventSubscriptionEventType = {
    StartSubscription: "START_SUBSCRIPTION",
    PlanChange: "PLAN_CHANGE",
    StopSubscription: "STOP_SUBSCRIPTION",
    DeactivateSubscription: "DEACTIVATE_SUBSCRIPTION",
    ResumeSubscription: "RESUME_SUBSCRIPTION",
    PauseSubscription: "PAUSE_SUBSCRIPTION",
    BillingAnchorDateChanged: "BILLING_ANCHOR_DATE_CHANGED",
} as const;
