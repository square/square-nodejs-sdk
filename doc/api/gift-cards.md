# Gift Cards

```ts
const giftCardsApi = client.giftCardsApi;
```

## Class Name

`GiftCardsApi`

## Methods

* [List Gift Cards](/doc/api/gift-cards.md#list-gift-cards)
* [Create Gift Card](/doc/api/gift-cards.md#create-gift-card)
* [Retrieve Gift Card From GAN](/doc/api/gift-cards.md#retrieve-gift-card-from-gan)
* [Retrieve Gift Card From Nonce](/doc/api/gift-cards.md#retrieve-gift-card-from-nonce)
* [Link Customer to Gift Card](/doc/api/gift-cards.md#link-customer-to-gift-card)
* [Unlink Customer From Gift Card](/doc/api/gift-cards.md#unlink-customer-from-gift-card)
* [Retrieve Gift Card](/doc/api/gift-cards.md#retrieve-gift-card)


# List Gift Cards

Lists all gift cards. You can specify optional filters to retrieve
a subset of the gift cards.

```ts
async listGiftCards(
  type?: string,
  state?: string,
  limit?: number,
  cursor?: string,
  customerId?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ListGiftCardsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | `string \| undefined` | Query, Optional | If a type is provided, gift cards of this type are returned<br>(see [GiftCardType](/doc/models/gift-card-type.md)).<br>If no type is provided, it returns gift cards of all types. |
| `state` | `string \| undefined` | Query, Optional | If the state is provided, it returns the gift cards in the specified state<br>(see [GiftCardStatus](/doc/models/gift-card-status.md)).<br>Otherwise, it returns the gift cards of all states. |
| `limit` | `number \| undefined` | Query, Optional | If a value is provided, it returns only that number of results per page.<br>The maximum number of results allowed per page is 50. The default value is 30. |
| `cursor` | `string \| undefined` | Query, Optional | A pagination cursor returned by a previous call to this endpoint.<br>Provide this cursor to retrieve the next set of results for the original query.<br>If a cursor is not provided, it returns the first page of the results.<br>For more information, see [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination). |
| `customerId` | `string \| undefined` | Query, Optional | If a value is provided, returns only the gift cards linked to the specified customer |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ListGiftCardsResponse`](/doc/models/list-gift-cards-response.md)

## Example Usage

```ts
const type = 'type0';
const state = 'state4';
const limit = 172;
const cursor = 'cursor6';
const customerId = 'customer_id8';
try {
  const { result, ...httpResponse } = await giftCardsApi.listGiftCards(type, state, limit, cursor, customerId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Create Gift Card

Creates a digital gift card. You must activate the gift card before
it can be used. For more information, see
[Selling gift cards](https://developer.squareup.com/docs/gift-cards/using-gift-cards-api#selling-square-gift-cards).

```ts
async createGiftCard(
  body: CreateGiftCardRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CreateGiftCardResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CreateGiftCardRequest`](/doc/models/create-gift-card-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CreateGiftCardResponse`](/doc/models/create-gift-card-response.md)

## Example Usage

```ts
const bodyGiftCardBalanceMoney: Money = {};
bodyGiftCardBalanceMoney.amount = 2;
bodyGiftCardBalanceMoney.currency = 'DOP';

const bodyGiftCard: GiftCard = {
  type: 'DIGITAL',
};
bodyGiftCard.id = 'id4';
bodyGiftCard.ganSource = 'SQUARE';
bodyGiftCard.state = 'ACTIVE';
bodyGiftCard.balanceMoney = bodyGiftCardBalanceMoney;
bodyGiftCard.gan = 'gan0';

const body: CreateGiftCardRequest = {
  idempotencyKey: 'NC9Tm69EjbjtConu',
  locationId: '81FN9BNFZTKS4',
  giftCard: bodyGiftCard,
};

try {
  const { result, ...httpResponse } = await giftCardsApi.createGiftCard(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Retrieve Gift Card From GAN

Retrieves a gift card using the gift card account number (GAN).

```ts
async retrieveGiftCardFromGAN(
  body: RetrieveGiftCardFromGANRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<RetrieveGiftCardFromGANResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`RetrieveGiftCardFromGANRequest`](/doc/models/retrieve-gift-card-from-gan-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`RetrieveGiftCardFromGANResponse`](/doc/models/retrieve-gift-card-from-gan-response.md)

## Example Usage

```ts
const body: RetrieveGiftCardFromGANRequest = {
  gan: '7783320001001635',
};

try {
  const { result, ...httpResponse } = await giftCardsApi.retrieveGiftCardFromGAN(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Retrieve Gift Card From Nonce

Retrieves a gift card using a nonce (a secure token) that represents the gift card.

```ts
async retrieveGiftCardFromNonce(
  body: RetrieveGiftCardFromNonceRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<RetrieveGiftCardFromNonceResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`RetrieveGiftCardFromNonceRequest`](/doc/models/retrieve-gift-card-from-nonce-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`RetrieveGiftCardFromNonceResponse`](/doc/models/retrieve-gift-card-from-nonce-response.md)

## Example Usage

```ts
const body: RetrieveGiftCardFromNonceRequest = {
  nonce: 'cnon:7783322135245171',
};

try {
  const { result, ...httpResponse } = await giftCardsApi.retrieveGiftCardFromNonce(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Link Customer to Gift Card

Links a customer to a gift card

```ts
async linkCustomerToGiftCard(
  giftCardId: string,
  body: LinkCustomerToGiftCardRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<LinkCustomerToGiftCardResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `giftCardId` | `string` | Template, Required | The ID of the gift card to link. |
| `body` | [`LinkCustomerToGiftCardRequest`](/doc/models/link-customer-to-gift-card-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`LinkCustomerToGiftCardResponse`](/doc/models/link-customer-to-gift-card-response.md)

## Example Usage

```ts
const giftCardId = 'gift_card_id8';
const body: LinkCustomerToGiftCardRequest = {
  customerId: 'GKY0FZ3V717AH8Q2D821PNT2ZW',
};

try {
  const { result, ...httpResponse } = await giftCardsApi.linkCustomerToGiftCard(giftCardId, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Unlink Customer From Gift Card

Unlinks a customer from a gift card

```ts
async unlinkCustomerFromGiftCard(
  giftCardId: string,
  body: UnlinkCustomerFromGiftCardRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<UnlinkCustomerFromGiftCardResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `giftCardId` | `string` | Template, Required | - |
| `body` | [`UnlinkCustomerFromGiftCardRequest`](/doc/models/unlink-customer-from-gift-card-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`UnlinkCustomerFromGiftCardResponse`](/doc/models/unlink-customer-from-gift-card-response.md)

## Example Usage

```ts
const giftCardId = 'gift_card_id8';
const body: UnlinkCustomerFromGiftCardRequest = {
  customerId: 'GKY0FZ3V717AH8Q2D821PNT2ZW',
};

try {
  const { result, ...httpResponse } = await giftCardsApi.unlinkCustomerFromGiftCard(giftCardId, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Retrieve Gift Card

Retrieves a gift card using its ID.

```ts
async retrieveGiftCard(
  id: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<RetrieveGiftCardResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | The ID of the gift card to retrieve. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`RetrieveGiftCardResponse`](/doc/models/retrieve-gift-card-response.md)

## Example Usage

```ts
const id = 'id0';
try {
  const { result, ...httpResponse } = await giftCardsApi.retrieveGiftCard(id);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

