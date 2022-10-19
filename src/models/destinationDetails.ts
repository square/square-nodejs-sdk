import { lazy, object, optional, Schema } from '../schema';
import {
  DestinationDetailsCardRefundDetails,
  destinationDetailsCardRefundDetailsSchema,
} from './destinationDetailsCardRefundDetails';

/** Details about a refund's destination. */
export interface DestinationDetails {
  cardDetails?: DestinationDetailsCardRefundDetails;
}

export const destinationDetailsSchema: Schema<DestinationDetails> = object({
  cardDetails: [
    'card_details',
    optional(lazy(() => destinationDetailsCardRefundDetailsSchema)),
  ],
});
