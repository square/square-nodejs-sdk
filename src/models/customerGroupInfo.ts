import { object, Schema, string } from '../schema';

/** Contains some brief information about a Customer Group with its identifier included. */
export interface CustomerGroupInfo {
  /** The ID of the Customer Group. */
  id: string;
  /** The name of the Customer Group. */
  name: string;
}

export const customerGroupInfoSchema: Schema<CustomerGroupInfo> = object({
  id: ['id', string()],
  name: ['name', string()],
});
