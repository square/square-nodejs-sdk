import { object, optional, Schema, string } from '../schema';

/** Represents the details of a tender with `type` `BUY_NOW_PAY_LATER`. */
export interface TenderBuyNowPayLaterDetails {
  buyNowPayLaterBrand?: string;
  status?: string;
}

export const tenderBuyNowPayLaterDetailsSchema: Schema<TenderBuyNowPayLaterDetails> = object(
  {
    buyNowPayLaterBrand: ['buy_now_pay_later_brand', optional(string())],
    status: ['status', optional(string())],
  }
);
