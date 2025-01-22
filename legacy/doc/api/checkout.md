# Checkout

```ts
const checkoutApi = client.checkoutApi;
```

## Class Name

`CheckoutApi`

## Methods

* [Create Checkout](../../doc/api/checkout.md#create-checkout)
* [Retrieve Location Settings](../../doc/api/checkout.md#retrieve-location-settings)
* [Update Location Settings](../../doc/api/checkout.md#update-location-settings)
* [Retrieve Merchant Settings](../../doc/api/checkout.md#retrieve-merchant-settings)
* [Update Merchant Settings](../../doc/api/checkout.md#update-merchant-settings)
* [List Payment Links](../../doc/api/checkout.md#list-payment-links)
* [Create Payment Link](../../doc/api/checkout.md#create-payment-link)
* [Delete Payment Link](../../doc/api/checkout.md#delete-payment-link)
* [Retrieve Payment Link](../../doc/api/checkout.md#retrieve-payment-link)
* [Update Payment Link](../../doc/api/checkout.md#update-payment-link)


# Create Checkout

**This endpoint is deprecated.**

Links a `checkoutId` to a `checkout_page_url` that customers are
directed to in order to provide their payment information using a
payment processing workflow hosted on connect.squareup.com.

NOTE: The Checkout API has been updated with new features.
For more information, see [Checkout API highlights](https://developer.squareup.com/docs/checkout-api#checkout-api-highlights).

```ts
async createCheckout(
  locationId: string,
  body: CreateCheckoutRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CreateCheckoutResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `locationId` | `string` | Template, Required | The ID of the business location to associate the checkout with. |
| `body` | [`CreateCheckoutRequest`](../../doc/models/create-checkout-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CreateCheckoutResponse`](../../doc/models/create-checkout-response.md)

## Example Usage

```ts
const locationId = 'location_id4';

const body: CreateCheckoutRequest = {
  idempotencyKey: '86ae1696-b1e3-4328-af6d-f1e04d947ad6',
  order: {
    order: {
      locationId: 'location_id',
      referenceId: 'reference_id',
      customerId: 'customer_id',
      lineItems: [
        {
          quantity: '2',
          name: 'Printed T Shirt',
          appliedTaxes: [
            {
              taxUid: '38ze1696-z1e3-5628-af6d-f1e04d947fg3',
            }
          ],
          appliedDiscounts: [
            {
              discountUid: '56ae1696-z1e3-9328-af6d-f1e04d947gd4',
            }
          ],
          basePriceMoney: {
            amount: BigInt(1500),
            currency: 'USD',
          },
        },
        {
          quantity: '1',
          name: 'Slim Jeans',
          basePriceMoney: {
            amount: BigInt(2500),
            currency: 'USD',
          },
        },
        {
          quantity: '3',
          name: 'Woven Sweater',
          basePriceMoney: {
            amount: BigInt(3500),
            currency: 'USD',
          },
        }
      ],
      taxes: [
        {
          uid: '38ze1696-z1e3-5628-af6d-f1e04d947fg3',
          type: 'INCLUSIVE',
          percentage: '7.75',
          scope: 'LINE_ITEM',
        }
      ],
      discounts: [
        {
          uid: '56ae1696-z1e3-9328-af6d-f1e04d947gd4',
          type: 'FIXED_AMOUNT',
          amountMoney: {
            amount: BigInt(100),
            currency: 'USD',
          },
          scope: 'LINE_ITEM',
        }
      ],
    },
    idempotencyKey: '12ae1696-z1e3-4328-af6d-f1e04d947gd4',
  },
  askForShippingAddress: true,
  merchantSupportEmail: 'merchant+support@website.com',
  prePopulateBuyerEmail: 'example@email.com',
  prePopulateShippingAddress: {
    addressLine1: '1455 Market St.',
    addressLine2: 'Suite 600',
    locality: 'San Francisco',
    administrativeDistrictLevel1: 'CA',
    postalCode: '94103',
    country: 'US',
    firstName: 'Jane',
    lastName: 'Doe',
  },
  redirectUrl: 'https://merchant.website.com/order-confirm',
  additionalRecipients: [
    {
      locationId: '057P5VYJ4A5X1',
      description: 'Application fees',
      amountMoney: {
        amount: BigInt(60),
        currency: 'USD',
      },
    }
  ],
};

try {
  const { result, ...httpResponse } = await checkoutApi.createCheckout(
  locationId,
  body
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


# Retrieve Location Settings

Retrieves the location-level settings for a Square-hosted checkout page.

```ts
async retrieveLocationSettings(
  locationId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<RetrieveLocationSettingsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `locationId` | `string` | Template, Required | The ID of the location for which to retrieve settings. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`RetrieveLocationSettingsResponse`](../../doc/models/retrieve-location-settings-response.md)

## Example Usage

```ts
const locationId = 'location_id4';

try {
  const { result, ...httpResponse } = await checkoutApi.retrieveLocationSettings(locationId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Update Location Settings

Updates the location-level settings for a Square-hosted checkout page.

```ts
async updateLocationSettings(
  locationId: string,
  body: UpdateLocationSettingsRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<UpdateLocationSettingsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `locationId` | `string` | Template, Required | The ID of the location for which to retrieve settings. |
| `body` | [`UpdateLocationSettingsRequest`](../../doc/models/update-location-settings-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`UpdateLocationSettingsResponse`](../../doc/models/update-location-settings-response.md)

## Example Usage

```ts
const locationId = 'location_id4';

const body: UpdateLocationSettingsRequest = {
  locationSettings: {
  },
};

try {
  const { result, ...httpResponse } = await checkoutApi.updateLocationSettings(
  locationId,
  body
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


# Retrieve Merchant Settings

Retrieves the merchant-level settings for a Square-hosted checkout page.

```ts
async retrieveMerchantSettings(
  requestOptions?: RequestOptions
): Promise<ApiResponse<RetrieveMerchantSettingsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`RetrieveMerchantSettingsResponse`](../../doc/models/retrieve-merchant-settings-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await checkoutApi.retrieveMerchantSettings();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Update Merchant Settings

Updates the merchant-level settings for a Square-hosted checkout page.

```ts
async updateMerchantSettings(
  body: UpdateMerchantSettingsRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<UpdateMerchantSettingsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`UpdateMerchantSettingsRequest`](../../doc/models/update-merchant-settings-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`UpdateMerchantSettingsResponse`](../../doc/models/update-merchant-settings-response.md)

## Example Usage

```ts
const body: UpdateMerchantSettingsRequest = {
  merchantSettings: {
  },
};

try {
  const { result, ...httpResponse } = await checkoutApi.updateMerchantSettings(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# List Payment Links

Lists all payment links.

```ts
async listPaymentLinks(
  cursor?: string,
  limit?: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ListPaymentLinksResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cursor` | `string \| undefined` | Query, Optional | A pagination cursor returned by a previous call to this endpoint.<br>Provide this cursor to retrieve the next set of results for the original query.<br>If a cursor is not provided, the endpoint returns the first page of the results.<br>For more  information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination). |
| `limit` | `number \| undefined` | Query, Optional | A limit on the number of results to return per page. The limit is advisory and<br>the implementation might return more or less results. If the supplied limit is negative, zero, or<br>greater than the maximum limit of 1000, it is ignored.<br><br>Default value: `100` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ListPaymentLinksResponse`](../../doc/models/list-payment-links-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await checkoutApi.listPaymentLinks();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Create Payment Link

Creates a Square-hosted checkout page. Applications can share the resulting payment link with their buyer to pay for goods and services.

```ts
async createPaymentLink(
  body: CreatePaymentLinkRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CreatePaymentLinkResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CreatePaymentLinkRequest`](../../doc/models/create-payment-link-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CreatePaymentLinkResponse`](../../doc/models/create-payment-link-response.md)

## Example Usage

```ts
const body: CreatePaymentLinkRequest = {
  idempotencyKey: 'cd9e25dc-d9f2-4430-aedb-61605070e95f',
  quickPay: {
    name: 'Auto Detailing',
    priceMoney: {
      amount: BigInt(10000),
      currency: 'USD',
    },
    locationId: 'A9Y43N9ABXZBP',
  },
};

try {
  const { result, ...httpResponse } = await checkoutApi.createPaymentLink(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Delete Payment Link

Deletes a payment link.

```ts
async deletePaymentLink(
  id: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DeletePaymentLinkResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | The ID of the payment link to delete. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DeletePaymentLinkResponse`](../../doc/models/delete-payment-link-response.md)

## Example Usage

```ts
const id = 'id0';

try {
  const { result, ...httpResponse } = await checkoutApi.deletePaymentLink(id);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Retrieve Payment Link

Retrieves a payment link.

```ts
async retrievePaymentLink(
  id: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<RetrievePaymentLinkResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | The ID of link to retrieve. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`RetrievePaymentLinkResponse`](../../doc/models/retrieve-payment-link-response.md)

## Example Usage

```ts
const id = 'id0';

try {
  const { result, ...httpResponse } = await checkoutApi.retrievePaymentLink(id);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Update Payment Link

Updates a payment link. You can update the `payment_link` fields such as
`description`, `checkout_options`, and  `pre_populated_data`.
You cannot update other fields such as the `order_id`, `version`, `URL`, or `timestamp` field.

```ts
async updatePaymentLink(
  id: string,
  body: UpdatePaymentLinkRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<UpdatePaymentLinkResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | The ID of the payment link to update. |
| `body` | [`UpdatePaymentLinkRequest`](../../doc/models/update-payment-link-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`UpdatePaymentLinkResponse`](../../doc/models/update-payment-link-response.md)

## Example Usage

```ts
const id = 'id0';

const body: UpdatePaymentLinkRequest = {
  paymentLink: {
    version: 1,
    checkoutOptions: {
      askForShippingAddress: true,
    },
  },
};

try {
  const { result, ...httpResponse } = await checkoutApi.updatePaymentLink(
  id,
  body
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

