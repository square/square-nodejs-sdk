# Checkout

```ts
const checkoutApi = client.checkoutApi;
```

## Class Name

`CheckoutApi`

## Methods

* [Create Checkout](../../doc/api/checkout.md#create-checkout)
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
We recommend that you use the new [CreatePaymentLink](api-endpoint:Checkout-CreatePaymentLink) 
endpoint in place of this previously released endpoint.

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
const contentType = null;
const bodyOrderOrderLineItems: OrderLineItem[] = [];

const bodyOrderOrderlineItems0AppliedTaxes: OrderLineItemAppliedTax[] = [];

const bodyOrderOrderlineItems0appliedTaxes0: OrderLineItemAppliedTax = {
  taxUid: '38ze1696-z1e3-5628-af6d-f1e04d947fg3',
};

bodyOrderOrderlineItems0AppliedTaxes[0] = bodyOrderOrderlineItems0appliedTaxes0;

const bodyOrderOrderlineItems0AppliedDiscounts: OrderLineItemAppliedDiscount[] = [];

const bodyOrderOrderlineItems0appliedDiscounts0: OrderLineItemAppliedDiscount = {
  discountUid: '56ae1696-z1e3-9328-af6d-f1e04d947gd4',
};

bodyOrderOrderlineItems0AppliedDiscounts[0] = bodyOrderOrderlineItems0appliedDiscounts0;

const bodyOrderOrderlineItems0BasePriceMoney: Money = {};

const bodyOrderOrderlineItems0: OrderLineItem = {
  quantity: '2',
};
bodyOrderOrderlineItems0.name = 'Printed T Shirt';
bodyOrderOrderlineItems0.appliedTaxes = bodyOrderOrderlineItems0AppliedTaxes;
bodyOrderOrderlineItems0.appliedDiscounts = bodyOrderOrderlineItems0AppliedDiscounts;
bodyOrderOrderlineItems0.basePriceMoney = bodyOrderOrderlineItems0BasePriceMoney;

bodyOrderOrderLineItems[0] = bodyOrderOrderlineItems0;

const bodyOrderOrderlineItems1BasePriceMoney: Money = {};

const bodyOrderOrderlineItems1: OrderLineItem = {
  quantity: '1',
};
bodyOrderOrderlineItems1.name = 'Slim Jeans';
bodyOrderOrderlineItems1.basePriceMoney = bodyOrderOrderlineItems1BasePriceMoney;

bodyOrderOrderLineItems[1] = bodyOrderOrderlineItems1;

const bodyOrderOrderlineItems2BasePriceMoney: Money = {};

const bodyOrderOrderlineItems2: OrderLineItem = {
  quantity: '3',
};
bodyOrderOrderlineItems2.name = 'Woven Sweater';
bodyOrderOrderlineItems2.basePriceMoney = bodyOrderOrderlineItems2BasePriceMoney;

bodyOrderOrderLineItems[2] = bodyOrderOrderlineItems2;

const bodyOrderOrderTaxes: OrderLineItemTax[] = [];

const bodyOrderOrdertaxes0: OrderLineItemTax = {};
bodyOrderOrdertaxes0.uid = '38ze1696-z1e3-5628-af6d-f1e04d947fg3';
bodyOrderOrdertaxes0.type = 'INCLUSIVE';
bodyOrderOrdertaxes0.percentage = '7.75';
bodyOrderOrdertaxes0.scope = 'LINE_ITEM';

bodyOrderOrderTaxes[0] = bodyOrderOrdertaxes0;

const bodyOrderOrderDiscounts: OrderLineItemDiscount[] = [];

const bodyOrderOrderdiscounts0AmountMoney: Money = {};

const bodyOrderOrderdiscounts0: OrderLineItemDiscount = {};
bodyOrderOrderdiscounts0.uid = '56ae1696-z1e3-9328-af6d-f1e04d947gd4';
bodyOrderOrderdiscounts0.type = 'FIXED_AMOUNT';
bodyOrderOrderdiscounts0.amountMoney = bodyOrderOrderdiscounts0AmountMoney;
bodyOrderOrderdiscounts0.scope = 'LINE_ITEM';

bodyOrderOrderDiscounts[0] = bodyOrderOrderdiscounts0;

const bodyOrderOrder: Order = {
  locationId: 'location_id',
};
bodyOrderOrder.referenceId = 'reference_id';
bodyOrderOrder.customerId = 'customer_id';
bodyOrderOrder.lineItems = bodyOrderOrderLineItems;
bodyOrderOrder.taxes = bodyOrderOrderTaxes;
bodyOrderOrder.discounts = bodyOrderOrderDiscounts;

const bodyOrder: CreateOrderRequest = {};
bodyOrder.order = bodyOrderOrder;
bodyOrder.idempotencyKey = '12ae1696-z1e3-4328-af6d-f1e04d947gd4';

const bodyPrePopulateShippingAddress: Address = {};
bodyPrePopulateShippingAddress.addressLine1 = '1455 Market St.';
bodyPrePopulateShippingAddress.addressLine2 = 'Suite 600';
bodyPrePopulateShippingAddress.locality = 'San Francisco';
bodyPrePopulateShippingAddress.administrativeDistrictLevel1 = 'CA';
bodyPrePopulateShippingAddress.postalCode = '94103';
bodyPrePopulateShippingAddress.country = 'US';
bodyPrePopulateShippingAddress.firstName = 'Jane';
bodyPrePopulateShippingAddress.lastName = 'Doe';

const bodyAdditionalRecipients: ChargeRequestAdditionalRecipient[] = [];

const bodyadditionalRecipients0AmountMoney: Money = {};
bodyadditionalRecipients0AmountMoney.amount = BigInt(60);
bodyadditionalRecipients0AmountMoney.currency = 'USD';

const bodyadditionalRecipients0: ChargeRequestAdditionalRecipient = {
  locationId: '057P5VYJ4A5X1',
  description: 'Application fees',
  amountMoney: bodyadditionalRecipients0AmountMoney,
};

bodyAdditionalRecipients[0] = bodyadditionalRecipients0;

const body: CreateCheckoutRequest = {
  idempotencyKey: '86ae1696-b1e3-4328-af6d-f1e04d947ad6',
  order: bodyOrder,
};
body.askForShippingAddress = true;
body.merchantSupportEmail = 'merchant+support@website.com';
body.prePopulateBuyerEmail = 'example@email.com';
body.prePopulateShippingAddress = bodyPrePopulateShippingAddress;
body.redirectUrl = 'https://merchant.website.com/order-confirm';
body.additionalRecipients = bodyAdditionalRecipients;

try {
  const { result, ...httpResponse } = await checkoutApi.createCheckout(locationId, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
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
| `cursor` | `string \| undefined` | Query, Optional | A pagination cursor returned by a previous call to this endpoint.<br>Provide this cursor to retrieve the next set of results for the original query.<br>If a cursor is not provided, the endpoint returns the first page of the results.<br>For more  information, see [Pagination](https://developer.squareup.com/docs/basics/api101/pagination). |
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
} catch(error) {
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
const contentType = null;
const bodyQuickPayPriceMoney: Money = {};
bodyQuickPayPriceMoney.amount = BigInt(10000);
bodyQuickPayPriceMoney.currency = 'USD';

const bodyQuickPay: QuickPay = {
  name: 'Auto Detailing',
  priceMoney: bodyQuickPayPriceMoney,
  locationId: 'A9Y43N9ABXZBP',
};

const body: CreatePaymentLinkRequest = {};
body.idempotencyKey = 'cd9e25dc-d9f2-4430-aedb-61605070e95f';
body.quickPay = bodyQuickPay;

try {
  const { result, ...httpResponse } = await checkoutApi.createPaymentLink(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
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
} catch(error) {
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
} catch(error) {
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
const contentType = null;
const bodyPaymentLinkCheckoutOptions: CheckoutOptions = {};
bodyPaymentLinkCheckoutOptions.askForShippingAddress = true;

const bodyPaymentLink: PaymentLink = {
  version: 1,
};
bodyPaymentLink.checkoutOptions = bodyPaymentLinkCheckoutOptions;

const body: UpdatePaymentLinkRequest = {
  paymentLink: bodyPaymentLink,
};

try {
  const { result, ...httpResponse } = await checkoutApi.updatePaymentLink(id, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

