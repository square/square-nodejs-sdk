# Cards

```ts
const cardsApi = client.cardsApi;
```

## Class Name

`CardsApi`

## Methods

* [List Cards](../../doc/api/cards.md#list-cards)
* [Create Card](../../doc/api/cards.md#create-card)
* [Retrieve Card](../../doc/api/cards.md#retrieve-card)
* [Disable Card](../../doc/api/cards.md#disable-card)


# List Cards

Retrieves a list of cards owned by the account making the request.
A max of 25 cards will be returned.

```ts
async listCards(
  cursor?: string,
  customerId?: string,
  includeDisabled?: boolean,
  referenceId?: string,
  sortOrder?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ListCardsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cursor` | `string \| undefined` | Query, Optional | A pagination cursor returned by a previous call to this endpoint.<br>Provide this to retrieve the next set of results for your original query.<br><br>See [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination) for more information. |
| `customerId` | `string \| undefined` | Query, Optional | Limit results to cards associated with the customer supplied.<br>By default, all cards owned by the merchant are returned. |
| `includeDisabled` | `boolean \| undefined` | Query, Optional | Includes disabled cards.<br>By default, all enabled cards owned by the merchant are returned.<br>**Default**: `false` |
| `referenceId` | `string \| undefined` | Query, Optional | Limit results to cards associated with the reference_id supplied. |
| `sortOrder` | [`string \| undefined`](../../doc/models/sort-order.md) | Query, Optional | Sorts the returned list by when the card was created with the specified order.<br>This field defaults to ASC. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ListCardsResponse`](../../doc/models/list-cards-response.md)

## Example Usage

```ts
const includeDisabled = false;

try {
  const { result, ...httpResponse } = await cardsApi.listCards(
  undefined,
  undefined,
  includeDisabled
);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Create Card

Adds a card on file to an existing merchant.

```ts
async createCard(
  body: CreateCardRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CreateCardResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CreateCardRequest`](../../doc/models/create-card-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CreateCardResponse`](../../doc/models/create-card-response.md)

## Example Usage

```ts
const body: CreateCardRequest = {
  idempotencyKey: '4935a656-a929-4792-b97c-8848be85c27c',
  sourceId: 'cnon:uIbfJXhXETSP197M3GB',
  card: {
    cardholderName: 'Amelia Earhart',
    billingAddress: {
      addressLine1: '500 Electric Ave',
      addressLine2: 'Suite 600',
      locality: 'New York',
      administrativeDistrictLevel1: 'NY',
      postalCode: '10003',
      country: 'US',
    },
    customerId: 'VDKXEEKPJN48QDG3BGGFAK05P8',
    referenceId: 'user-id-1',
  },
};

try {
  const { result, ...httpResponse } = await cardsApi.createCard(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Retrieve Card

Retrieves details for a specific Card.

```ts
async retrieveCard(
  cardId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<RetrieveCardResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cardId` | `string` | Template, Required | Unique ID for the desired Card. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`RetrieveCardResponse`](../../doc/models/retrieve-card-response.md)

## Example Usage

```ts
const cardId = 'card_id4';

try {
  const { result, ...httpResponse } = await cardsApi.retrieveCard(cardId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Disable Card

Disables the card, preventing any further updates or charges.
Disabling an already disabled card is allowed but has no effect.

```ts
async disableCard(
  cardId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DisableCardResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cardId` | `string` | Template, Required | Unique ID for the desired Card. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DisableCardResponse`](../../doc/models/disable-card-response.md)

## Example Usage

```ts
const cardId = 'card_id4';

try {
  const { result, ...httpResponse } = await cardsApi.disableCard(cardId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

