# Checkout

```ts
const checkoutApi = client.checkoutApi;
```

## Class Name

`CheckoutApi`


# Create Checkout

Links a `checkoutId` to a `checkout_page_url` that customers are
directed to in order to provide their payment information using a
payment processing workflow hosted on connect.squareup.com.

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
| `body` | [`CreateCheckoutRequest`](/doc/models/create-checkout-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CreateCheckoutResponse`](/doc/models/create-checkout-response.md)

## Example Usage

```ts
const locationId = 'location_id4';
const bodyOrderOrderSource: OrderSource = {};
bodyOrderOrderSource.name = 'name8';

const bodyOrderOrderLineItems: OrderLineItem[] = [];

const bodyOrderOrderlineItems0QuantityUnitMeasurementUnit: MeasurementUnit = {};
bodyOrderOrderlineItems0QuantityUnitMeasurementUnit.areaUnit = 'IMPERIAL_SQUARE_YARD';
bodyOrderOrderlineItems0QuantityUnitMeasurementUnit.lengthUnit = 'METRIC_CENTIMETER';
bodyOrderOrderlineItems0QuantityUnitMeasurementUnit.volumeUnit = 'GENERIC_SHOT';
bodyOrderOrderlineItems0QuantityUnitMeasurementUnit.weightUnit = 'METRIC_MILLIGRAM';

const bodyOrderOrderlineItems0QuantityUnit: OrderQuantityUnit = {};
bodyOrderOrderlineItems0QuantityUnit.measurementUnit = bodyOrderOrderlineItems0QuantityUnitMeasurementUnit;
bodyOrderOrderlineItems0QuantityUnit.precision = 191;

const bodyOrderOrderlineItems0AppliedTaxes: OrderLineItemAppliedTax[] = [];

const bodyOrderOrderlineItems0appliedTaxes0AppliedMoney: Money = {};
bodyOrderOrderlineItems0appliedTaxes0AppliedMoney.amount = 53;
bodyOrderOrderlineItems0appliedTaxes0AppliedMoney.currency = 'GBP';

const bodyOrderOrderlineItems0appliedTaxes0: OrderLineItemAppliedTax = {
  taxUid: '38ze1696-z1e3-5628-af6d-f1e04d947fg3',
};
bodyOrderOrderlineItems0appliedTaxes0.uid = 'uid3';
bodyOrderOrderlineItems0appliedTaxes0.appliedMoney = bodyOrderOrderlineItems0appliedTaxes0AppliedMoney;

bodyOrderOrderlineItems0AppliedTaxes[0] = bodyOrderOrderlineItems0appliedTaxes0;

const bodyOrderOrderlineItems0AppliedDiscounts: OrderLineItemAppliedDiscount[] = [];

const bodyOrderOrderlineItems0appliedDiscounts0AppliedMoney: Money = {};
bodyOrderOrderlineItems0appliedDiscounts0AppliedMoney.amount = 161;
bodyOrderOrderlineItems0appliedDiscounts0AppliedMoney.currency = 'LSL';

const bodyOrderOrderlineItems0appliedDiscounts0: OrderLineItemAppliedDiscount = {
  discountUid: '56ae1696-z1e3-9328-af6d-f1e04d947gd4',
};
bodyOrderOrderlineItems0appliedDiscounts0.uid = 'uid7';
bodyOrderOrderlineItems0appliedDiscounts0.appliedMoney = bodyOrderOrderlineItems0appliedDiscounts0AppliedMoney;

bodyOrderOrderlineItems0AppliedDiscounts[0] = bodyOrderOrderlineItems0appliedDiscounts0;

const bodyOrderOrderlineItems0BasePriceMoney: Money = {};
bodyOrderOrderlineItems0BasePriceMoney.amount = 1500;
bodyOrderOrderlineItems0BasePriceMoney.currency = 'USD';

const bodyOrderOrderlineItems0: OrderLineItem = {
  quantity: '2',
};
bodyOrderOrderlineItems0.uid = 'uid3';
bodyOrderOrderlineItems0.name = 'Printed T Shirt';
bodyOrderOrderlineItems0.quantityUnit = bodyOrderOrderlineItems0QuantityUnit;
bodyOrderOrderlineItems0.note = 'note1';
bodyOrderOrderlineItems0.catalogObjectId = 'catalog_object_id3';
bodyOrderOrderlineItems0.appliedTaxes = bodyOrderOrderlineItems0AppliedTaxes;
bodyOrderOrderlineItems0.appliedDiscounts = bodyOrderOrderlineItems0AppliedDiscounts;
bodyOrderOrderlineItems0.basePriceMoney = bodyOrderOrderlineItems0BasePriceMoney;

bodyOrderOrderLineItems[0] = bodyOrderOrderlineItems0;

const bodyOrderOrderlineItems1QuantityUnitMeasurementUnit: MeasurementUnit = {};
bodyOrderOrderlineItems1QuantityUnitMeasurementUnit.areaUnit = 'IMPERIAL_SQUARE_MILE';
bodyOrderOrderlineItems1QuantityUnitMeasurementUnit.lengthUnit = 'METRIC_MILLIMETER';
bodyOrderOrderlineItems1QuantityUnitMeasurementUnit.volumeUnit = 'GENERIC_CUP';
bodyOrderOrderlineItems1QuantityUnitMeasurementUnit.weightUnit = 'IMPERIAL_STONE';

const bodyOrderOrderlineItems1QuantityUnit: OrderQuantityUnit = {};
bodyOrderOrderlineItems1QuantityUnit.measurementUnit = bodyOrderOrderlineItems1QuantityUnitMeasurementUnit;
bodyOrderOrderlineItems1QuantityUnit.precision = 192;

const bodyOrderOrderlineItems1BasePriceMoney: Money = {};
bodyOrderOrderlineItems1BasePriceMoney.amount = 2500;
bodyOrderOrderlineItems1BasePriceMoney.currency = 'USD';

const bodyOrderOrderlineItems1: OrderLineItem = {
  quantity: '1',
};
bodyOrderOrderlineItems1.uid = 'uid4';
bodyOrderOrderlineItems1.name = 'Slim Jeans';
bodyOrderOrderlineItems1.quantityUnit = bodyOrderOrderlineItems1QuantityUnit;
bodyOrderOrderlineItems1.note = 'note0';
bodyOrderOrderlineItems1.catalogObjectId = 'catalog_object_id2';
bodyOrderOrderlineItems1.basePriceMoney = bodyOrderOrderlineItems1BasePriceMoney;

bodyOrderOrderLineItems[1] = bodyOrderOrderlineItems1;

const bodyOrderOrderlineItems2QuantityUnitMeasurementUnit: MeasurementUnit = {};
bodyOrderOrderlineItems2QuantityUnitMeasurementUnit.areaUnit = 'METRIC_SQUARE_CENTIMETER';
bodyOrderOrderlineItems2QuantityUnitMeasurementUnit.lengthUnit = 'IMPERIAL_MILE';
bodyOrderOrderlineItems2QuantityUnitMeasurementUnit.volumeUnit = 'GENERIC_PINT';
bodyOrderOrderlineItems2QuantityUnitMeasurementUnit.weightUnit = 'IMPERIAL_POUND';

const bodyOrderOrderlineItems2QuantityUnit: OrderQuantityUnit = {};
bodyOrderOrderlineItems2QuantityUnit.measurementUnit = bodyOrderOrderlineItems2QuantityUnitMeasurementUnit;
bodyOrderOrderlineItems2QuantityUnit.precision = 193;

const bodyOrderOrderlineItems2BasePriceMoney: Money = {};
bodyOrderOrderlineItems2BasePriceMoney.amount = 3500;
bodyOrderOrderlineItems2BasePriceMoney.currency = 'USD';

const bodyOrderOrderlineItems2: OrderLineItem = {
  quantity: '3',
};
bodyOrderOrderlineItems2.uid = 'uid5';
bodyOrderOrderlineItems2.name = 'Woven Sweater';
bodyOrderOrderlineItems2.quantityUnit = bodyOrderOrderlineItems2QuantityUnit;
bodyOrderOrderlineItems2.note = 'note9';
bodyOrderOrderlineItems2.catalogObjectId = 'catalog_object_id1';
bodyOrderOrderlineItems2.basePriceMoney = bodyOrderOrderlineItems2BasePriceMoney;

bodyOrderOrderLineItems[2] = bodyOrderOrderlineItems2;

const bodyOrderOrderTaxes: OrderLineItemTax[] = [];

const bodyOrderOrdertaxes0: OrderLineItemTax = {};
bodyOrderOrdertaxes0.uid = '38ze1696-z1e3-5628-af6d-f1e04d947fg3';
bodyOrderOrdertaxes0.catalogObjectId = 'catalog_object_id7';
bodyOrderOrdertaxes0.name = 'name9';
bodyOrderOrdertaxes0.type = 'INCLUSIVE';
bodyOrderOrdertaxes0.percentage = '7.75';
bodyOrderOrdertaxes0.scope = 'LINE_ITEM';

bodyOrderOrderTaxes[0] = bodyOrderOrdertaxes0;

const bodyOrderOrderDiscounts: OrderLineItemDiscount[] = [];

const bodyOrderOrderdiscounts0AmountMoney: Money = {};
bodyOrderOrderdiscounts0AmountMoney.amount = 100;
bodyOrderOrderdiscounts0AmountMoney.currency = 'USD';

const bodyOrderOrderdiscounts0: OrderLineItemDiscount = {};
bodyOrderOrderdiscounts0.uid = '56ae1696-z1e3-9328-af6d-f1e04d947gd4';
bodyOrderOrderdiscounts0.catalogObjectId = 'catalog_object_id1';
bodyOrderOrderdiscounts0.name = 'name7';
bodyOrderOrderdiscounts0.type = 'FIXED_AMOUNT';
bodyOrderOrderdiscounts0.percentage = 'percentage5';
bodyOrderOrderdiscounts0.amountMoney = bodyOrderOrderdiscounts0AmountMoney;
bodyOrderOrderdiscounts0.scope = 'LINE_ITEM';

bodyOrderOrderDiscounts[0] = bodyOrderOrderdiscounts0;

const bodyOrderOrder: Order = {
  locationId: 'location_id',
};
bodyOrderOrder.id = 'id6';
bodyOrderOrder.referenceId = 'reference_id';
bodyOrderOrder.source = bodyOrderOrderSource;
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
bodyPrePopulateShippingAddress.addressLine3 = 'address_line_36';
bodyPrePopulateShippingAddress.locality = 'San Francisco';
bodyPrePopulateShippingAddress.sublocality = 'sublocality0';
bodyPrePopulateShippingAddress.administrativeDistrictLevel1 = 'CA';
bodyPrePopulateShippingAddress.postalCode = '94103';
bodyPrePopulateShippingAddress.country = 'US';
bodyPrePopulateShippingAddress.firstName = 'Jane';
bodyPrePopulateShippingAddress.lastName = 'Doe';

const bodyAdditionalRecipients: ChargeRequestAdditionalRecipient[] = [];

const bodyadditionalRecipients0AmountMoney: Money = {};
bodyadditionalRecipients0AmountMoney.amount = 60;
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

