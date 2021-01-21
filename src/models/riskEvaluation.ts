import { object, optional, Schema, string } from '../schema';

/**
 * Represents fraud risk information for the associated payment.
 * When you take a payment through Square's Payments API (using the `CreatePayment`
 * endpoint), Square evaluates it and assigns a risk level to the payment. Sellers
 * can use this information to determine the course of action (for example,
 * provide the goods/services or refund the payment).
 */
export interface RiskEvaluation {
  /** The timestamp when payment risk was evaluated, in RFC 3339 format. */
  createdAt?: string;
  riskLevel?: string;
}

export const riskEvaluationSchema: Schema<RiskEvaluation> = object({
  createdAt: ['created_at', optional(string())],
  riskLevel: ['risk_level', optional(string())],
});
