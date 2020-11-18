import { array, lazy, object, optional, Schema, string } from '../schema';
import { Address, addressSchema } from './address';
import { Card, cardSchema } from './card';
import {
  CustomerGroupInfo,
  customerGroupInfoSchema,
} from './customerGroupInfo';
import {
  CustomerPreferences,
  customerPreferencesSchema,
} from './customerPreferences';

/**
 * Represents a Square customer profile, which can have one or more
 * cards on file associated with it.
 */
export interface Customer {
  /** A unique Square-assigned ID for the customer profile. */
  id?: string;
  /** The timestamp when the customer profile was created, in RFC 3339 format. */
  createdAt?: string;
  /** The timestamp when the customer profile was last updated, in RFC 3339 format. */
  updatedAt?: string;
  /** Payment details of cards stored on file for the customer profile. */
  cards?: Card[];
  /** The given (i.e., first) name associated with the customer profile. */
  givenName?: string;
  /** The family (i.e., last) name associated with the customer profile. */
  familyName?: string;
  /** A nickname for the customer profile. */
  nickname?: string;
  /** A business name associated with the customer profile. */
  companyName?: string;
  /** The email address associated with the customer profile. */
  emailAddress?: string;
  /** Represents a physical address. */
  address?: Address;
  /** The 11-digit phone number associated with the customer profile. */
  phoneNumber?: string;
  /**
   * The birthday associated with the customer profile, in RFC 3339 format.
   * Year is optional, timezone and times are not allowed.
   * For example: `0000-09-01T00:00:00-00:00` indicates a birthday on September 1st.
   * `1998-09-01T00:00:00-00:00` indications a birthday on September 1st __1998__.
   */
  birthday?: string;
  /**
   * An optional, second ID used to associate the customer profile with an
   * entity in another system.
   */
  referenceId?: string;
  /** A custom note associated with the customer profile. */
  note?: string;
  /** Represents communication preferences for the customer profile. */
  preferences?: CustomerPreferences;
  /** The customer groups and segments the customer belongs to. This deprecated field has been replaced with  the dedicated `group_ids` for customer groups and the dedicated `segment_ids` field for customer segments. You can retrieve information about a given customer group and segment respectively using the Customer Groups API and Customer Segments API. */
  groups?: CustomerGroupInfo[];
  /** Indicates the method used to create the customer profile. */
  creationSource?: string;
  /** The IDs of customer groups the customer belongs to. */
  groupIds?: string[];
  /** The IDs of segments the customer belongs to. */
  segmentIds?: string[];
}

export const customerSchema: Schema<Customer> = object({
  id: ['id', optional(string())],
  createdAt: ['created_at', optional(string())],
  updatedAt: ['updated_at', optional(string())],
  cards: ['cards', optional(array(lazy(() => cardSchema)))],
  givenName: ['given_name', optional(string())],
  familyName: ['family_name', optional(string())],
  nickname: ['nickname', optional(string())],
  companyName: ['company_name', optional(string())],
  emailAddress: ['email_address', optional(string())],
  address: ['address', optional(lazy(() => addressSchema))],
  phoneNumber: ['phone_number', optional(string())],
  birthday: ['birthday', optional(string())],
  referenceId: ['reference_id', optional(string())],
  note: ['note', optional(string())],
  preferences: ['preferences', optional(lazy(() => customerPreferencesSchema))],
  groups: ['groups', optional(array(lazy(() => customerGroupInfoSchema)))],
  creationSource: ['creation_source', optional(string())],
  groupIds: ['group_ids', optional(array(string()))],
  segmentIds: ['segment_ids', optional(array(string()))],
});
