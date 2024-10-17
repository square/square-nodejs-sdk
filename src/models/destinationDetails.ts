import { lazy, object, optional, Schema } from '../schema';
import {
  DestinationDetailsCardRefundDetails,
  destinationDetailsCardRefundDetailsSchema,
} from './destinationDetailsCardRefundDetails';
import {
  DestinationDetailsCashRefundDetails,
  destinationDetailsCashRefundDetailsSchema,
} from './destinationDetailsCashRefundDetails';
import {
  DestinationDetailsExternalRefundDetails,
  destinationDetailsExternalRefundDetailsSchema,
} from './destinationDetailsExternalRefundDetails';

/** Details about a refund's destination. */
export interface DestinationDetails {
  cardDetails?: DestinationDetailsCardRefundDetails;
  /** Stores details about a cash refund. Contains only non-confidential information. */
  cashDetails?: DestinationDetailsCashRefundDetails;
  /** Stores details about an external refund. Contains only non-confidential information. */
  externalDetails?: DestinationDetailsExternalRefundDetails;
}

export const destinationDetailsSchema: Schema<DestinationDetails> = object({
  cardDetails: [
    'card_details',
    optional(lazy(() => destinationDetailsCardRefundDetailsSchema)),
  ],
  cashDetails: [
    'cash_details',
    optional(lazy(() => destinationDetailsCashRefundDetailsSchema)),
  ],
  externalDetails: [
    'external_details',
    optional(lazy(() => destinationDetailsExternalRefundDetailsSchema)),
  ],
});
