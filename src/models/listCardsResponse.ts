import { array, lazy, object, optional, Schema, string } from '../schema';
import { Card, cardSchema } from './card';
import { Error, errorSchema } from './error';

/**
 * Defines the fields that are included in the response body of
 * a request to the [ListCards]($e/Cards/ListCards) endpoint.
 * Note: if there are errors processing the request, the card field will not be
 * present.
 */
export interface ListCardsResponse {
  /** Information on errors encountered during the request. */
  errors?: Error[];
  /** The requested list of `Card`s. */
  cards?: Card[];
  /**
   * The pagination cursor to be used in a subsequent request. If empty,
   * this is the final response.
   * See [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination) for more information.
   */
  cursor?: string;
}

export const listCardsResponseSchema: Schema<ListCardsResponse> = object({
  errors: ['errors', optional(array(lazy(() => errorSchema)))],
  cards: ['cards', optional(array(lazy(() => cardSchema)))],
  cursor: ['cursor', optional(string())],
});
