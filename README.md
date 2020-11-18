[![Build Status](https://travis-ci.com/square/square-nodejs-sdk.svg?token=7KUGXNa8mbAXsapsn66r&branch=master)](https://travis-ci.com/square/square-nodejs-sdk)
[![npm version](https://badge.fury.io/js/square.svg)](https://badge.fury.io/js/square)
[![Apache-2 license](https://img.shields.io/badge/license-Apache2-brightgreen.svg)](https://www.apache.org/licenses/LICENSE-2.0)

# Square Node.js SDK - Beta 

Use this JavaScript library to manage Square resources (such as payments, orders, items, and inventory) for your own Square account or on behalf of Square sellers.

## Requirements

The SDK requires [Node.js](https://nodejs.org/en/) version 10 or later.

We intend to update the SDK to support the current and LTS versions of Node.js while dropping support for versions that have reached their EOL.

## Does the SDK support [TypeScript](https://www.typescriptlang.org/#installation)?

Yes.

The SDK package also exports the type files which help type-check the SDK usage in TypeScript codebases and provide hints in JavaScript codebases in supported IDEs.

## Installation

### Install the latest SDK using npm:
```sh
$ npm install square
```

### Install the latest SDK using GitHub:

```sh
git clone https://github.com/square/square-nodejs-sdk.git
```
Then, build the SDK:
```sh
$ cd square-nodejs-sdk
$ npm link
```
Lastly, run the following in the directory that contains your code:
```sh
$ npm link square
```

## How do I import the client and other types from the SDK?
**Recommended:** You can import the client in ES module style if your environment supports it:

```javascript
import { Client, Environment } from 'square'
```

Or you can import the client in CommonJS style:

```javascript
const { Client, Environment } = require('square')
```

### Import Gotcha

Do not mix ES module and CommonJS imports in the same codebase. This will likely cause issues that are hard to debug. For more information, do a web search for "Dual Package Hazard Node".

## How do I initialize the client?

```javascript
import { Client, Environment } from 'square'

const client = new Client({
  environment: Environment.Sandbox,
  accessToken: process.env.SQUARE_ACCESS_TOKEN,
})
```

## How can I update the access token or some other configuration in the client?

You should not attempt to modify an existing client instance. Instead, create a new instance using the `withConfiguration` method:

```javascript
import { Client } from 'square'

const client = new Client(/** some config **/)

// After getting the access token...
const newClient = client.withConfiguration({
  accessToken: newlyAcquiredAccessTokenValue,
})
```

`withConfiguration` copies over the existing configuration and state with the given configuration overrides.

## API documentation

### Payments
* [Payments]
* [Refunds]
* [Disputes]
* [Checkout]
* [Apple Pay]
* [Terminal]

### Orders
* [Orders]

### Subscriptions
* [Subscriptions]

### Invoices
* [Invoices]

### Items
* [Catalog]
* [Inventory]

### Customers
* [Customers]
* [Customer Groups]
* [Customer Segments]

### Loyalty
* [Loyalty]

### Bookings
* [Bookings]

### Business
* [Merchants]
* [Locations]
* [Devices]

### Team
* [Team]
* [Employees]
* [Labor]
* [Cash Drawers]

### Financials
* [Bank Accounts]

### Authorization APIs
* [Mobile Authorization]
* [O Auth]

### Deprecated APIs
* [V1 Locations]
* [V1 Employees]
* [V1 Transactions]
* [V1 Items]
* [Transactions]

## Usage

First time using Square? Here’s how to get started:

1. **Create a Square account.** If you don’t have one already, [sign up for a developer account].
1. **Create an application.** Go to your [Developer Dashboard] and create your first application. All you need to do is give it a name. When you’re doing this for your production application, enter the name as you would want a customer to see it.
1. **Make your first API call.** You’ll make your first call to `listLocations` to get a location ID, which is required by many Square API calls. For more information about locations, see the [Locations overview].

Now let’s call your first Square API. Open your favorite text editor, create a new file called `locations.js`, and copy the following code into that file:

```javascript
import { ApiError, Client, Environment } from 'square'
 
// Create an instance of the API Client 
// and initialize it with the credentials 
// for the Square account whose assets you want to manage
const client = new Client({
  timeout:3000,
  environment: Environment.Sandbox,
  accessToken: process.env.SQUARE_ACCESS_TOKEN,
})
 
// Get an instance of the Square API you want call
const { locationsApi } = client

// Create wrapper async function 
const getLocations = async () => {
  // The try/catch statement needs to be called from within an asynchronous function
  try {
    // Call listLocations method to get all locations in this Square account
    let listLocationsResponse = await locationsApi.listLocations()

    // Get first location from list
    let firstLocation = listLocationsResponse.result.locations[0]

    console.log("Here is your first location: ", firstLocation)
  } catch (error) {
    if (error instanceof ApiError) {
      console.log("There was an error in your request: ", error.errors)
    } else {
      console.log("Unexpected Error: ", error)
    }
  }
}

// Invokes the async function
getLocations()
```

Next, get an access token and reference it in your code. To call the Square API, you need to get an access token and initialize the API Client class with that token. An application has two sets of credentials: production and sandbox. To get started, you’ll use your sandbox access token so you can try things out in a test environment that is completely separate from production resources. Here’s how:

1. Go back to your application in the Developer Dashboard.
1. View the details of your application.
1. Make sure that **Sandbox** is selected at the top of the page.
1. In the **Sandbox Access Token** box, click **Show** to display the token.
1. Copy the sandbox access token.
1. Set the environment variable `SQUARE_ACCESS_TOKEN` with that token:

   ```sh
   export SQUARE_ACCESS_TOKEN="YOUR SANDBOX ACCESS TOKEN HERE"
   ```

You’ll notice in `locations.js` that the Client object is initialized with the environment set to sandbox. You use the environment parameter to specify whether you want to access production or sandbox resources.

**Important** When you eventually switch from trying things out on sandbox to actually working with your real production resources, you should not embed the access token in your code. Make sure you store and access your production access tokens securely.

Now save `locations.js` and run it:

```sh
node locations.js
```

If your call is successful, you’ll get a response that looks like this:

```
Here is your first location:  { 
  id: 'LOCATION_ID',
  name: 'Default Test Account',
  timezone: 'Etc/UTC',
  capabilities: [ 'CREDIT_CARD_PROCESSING' ],
  status: 'ACTIVE',
  createdAt: '2019-07-23T19:46:48Z',
  merchantId: "YOUR_MERCHANT_ID",
  country: 'US',
  languageCode: 'en-US',
  currency: 'USD',
  type: 'PHYSICAL',
  businessHours: {},
  mcc: '7299' }
```

Yay! You successfully made your first call. If you didn’t, you would see an error message that looks something like this:

```
There was an error in your request:  { errors:
   [ { category: 'AUTHENTICATION_ERROR',
       code: 'UNAUTHORIZED',
       detail: 'This request could not be authorized.' } ] }
```

This error was returned when an invalid token was used to call the API.

After you’ve tried out the Square APIs and tested your application using sandbox, you will want to switch to your production credentials so you can manage real Square resources. Don't forget to switch your access token from sandbox to production for real data.

## SDK patterns
If you know a few patterns, you’ll be able to call any API in the SDK. Here are some important ones:

### Get an access token

To use the Square API to manage the resources (such as payments, orders, customers, etc.) of a Square account, you need to create an application (or use an existing one) in the Developer Dashboard and get an access token for the application.

When you call a Square API, you provide an access token that is appropriate for your use case. An access token has specific permissions to resources in a specific Square account.
There are two options:

- To manage the resources for your own Square account, use the access token (sandbox or production) for the application created in your Square account.
- To manage resources for other Square accounts, use OAuth to ask owners of the accounts you want to manage to allow you to work on their behalf. When you implement OAuth, you ask the Square account holder for permission to manage resources in their account (you can request access to specific resources) and get an OAuth access token and refresh token for their account. For more information, see the [OAuth overview].

**Important** For both use cases, make sure you store and access the tokens securely.

### Import and Instantiate the Client Class

To use the Square API, you import the Client class, instantiate a Client object, and initialize it with the appropriate access token and environment. Here’s how:

1. Import the Client class from the Square JS SDK module so you can call the Square API:
   ```javascript
   import { Client } from 'square'
   ```
1. Instantiate a Client object and initialize it with the access token for the Square account whose resources you want to manage and the environment that you want to use.

To access sandbox resources, initialize the Client with environment set to sandbox:

```javascript
import { Client, Environment } from 'square'

const client = new Client({
  environment: Environment.Sandbox,
  accessToken: process.env.SQUARE_ACCESS_TOKEN,
})
```

To access production resources, set environment to production:

```javascript
import { Client, Environment } from 'square'

const client = new Client({
  environment: Environment.Production,
  accessToken: process.env.SQUARE_ACCESS_TOKEN,
})
```
 
### Get an instance of an API object and call its methods

Each API is implemented as a class. The Client object instantiates every API class and exposes them as properties so you can easily start using any Square API. You work with an API by calling methods on an instance of an API class. Here’s how:

**Work with an API by calling the methods on the API object.** For example, you would call `listCustomers` to get a list of all customers in the Square account:

```javascript
import { ApiError, Client, Environment } from 'square'

const client = new Client({
  environment: Environment.Sandbox,
  accessToken: process.env.SQUARE_ACCESS_TOKEN,
})

// Get an instance of the Square API you want call
const { customersApi }  = client
const listCustomers = async () => {
  try {
    // Returns and API response object. API call value is on the result property
    let { result } = await customersApi.listCustomers()
    console.log(result)
  } catch (error) {
    if (error instanceof ApiError) {
      console.log(error.errors)
    } else {
      console.log("Unexpected Error: ", error)
    }
  }
}
listCustomers()
```
See the SDK documentation for the list of methods for each API class.

**Pass complex parameters (such as create, update, search, etc.) as a dictionary.** For example, you would pass a dictionary containing the values used to create a new customer using `createCustomer`:

```javascript
import { ApiError, Client, Environment } from 'square'

// Create a unique key for this creation operation so you don't accidentally
// create the customer multiple times if you need to retry this operation.
// Here we use the npm package uuid
import { v4 as uuidv4 } from 'uuid'

const client = new Client({
  environment: Environment.Sandbox,
  accessToken: process.env.SQUARE_ACCESS_TOKEN,
})

let idempotencyKey = uuidv4()

const createCustomer = async () => {
  // To create a customer, you only need 1 of 5 identity values but you'll be
  // specifying two.
  let requestBody = {
    idempotencyKey: idempotencyKey, // A unique id for the request
    givenName: "Amelia",
    familyName: "Earhart"
  }

  try {
    let { result } = await customersApi.createCustomer(requestBody)
    console.log(result)
  } catch (error) {
    if (error instanceof ApiError) {
      console.log(error.errors)
    } else {
      console.log("Unexpected Error: ", error)
    }
  }
}
createCustomer()
```

If your call succeeds, you’ll see a response that looks like this:
```javascript
{
  'customer': {
    'createdAt': '2019-06-28T21:23:05.126Z',
    'creationSource': 'THIRD_PARTY',
    'familyName': 'Earhart',
    'givenName': 'Amelia',
    'id': 'CBASEDwl3El91nohQ2FLEk4aBfcgAQ',
    'preferences': {
      'emailUnsubscribed': False
    },
    'updatedAt': '2019-06-28T21:23:05.126Z'
  }
}
```

**Use idempotency for create, update, or other calls that you want to avoid calling twice.** To make an idempotent API call, you add the idempotencyKey with a unique value in the Hash for the API call’s request. Many operations require an idempotencyKey.

**Specify a location ID for APIs such as Transactions, Orders, and Checkout that deal with payments.** When a payment or order is created in Square, it is always associated with a location. Many operations require a location ID.

### Handle the response

API calls return an ApiResponse or throw an ApiError. ApiResponse and ApiError objects both contain properties that describe both the request (headers and request) and the response (statusCode, body, and result). ApiErrors are thrown when the statusCode of the response is out of the 200s range. Here’s how to handle the response:

**Use a try/catch statement to check whether the response succeeded or failed:**

```javascript
try {
  let { result } = await customersApi.createCustomer(requestBody) 
  // If successful we will display response result
  console.log(result)
} catch (error) {
  if (error instanceof ApiError) {
    // If unsuccessful we will display the list of errors
    console.log("Errors: ", error.errors)
  } else {
    console.log("Unexpected Error: ", error)
  }
}
```

**Read the response payload.** The response payload is returned as text in the body property or as a dictionary in the result property. For retrieve calls, a dictionary containing a single item is returned with a key name that is the name of the object (for example, customer). For list calls, an object containing a list of objects is returned with a key name that is the plural of the object name (for example, customers). If there are no objects for a list call to return, it returns an empty dictionary.

**Check the cursor for list operations.** Make sure you get all items returned in a list call by checking the cursor value returned in the API response. When you call a list API the first time, you set the cursor to an empty string in the API request. If the API response contains a cursor value, you call the API again to get the next page of items and continue to call that API again until the cursor is not returned in the API response. Here’s a code snippet that calls `listCustomers` to count the total number of customers:

```javascript
import { ApiError, Client, Environment } from 'square'

const client = new Client({
  environment: Environment.Sandbox,
  accessToken: process.env.SQUARE_ACCESS_TOKEN,
})

// Get an instance of the Square API you want call
const { customersApi }  = client

const tallyUpCustomers = async  () => {
  // Initialize the customer count
  let totalCustomers = 0
  // Initialize the cursor with an empty string since we are
  // calling listCustomers for the first time
  let cursor = ""
  // Count the total number of customers using the listCustomers method
  while (cursor !== null) {

    try {
      // Call listCustomers method to get all customers in this Square account
      let { result } = await customersApi.listCustomers(cursor)
      totalCustomers += result.customers.length

      // Get the cursor if it exists in the result else set it to null
      cursor = result.cursor ? result.cursor : null
      console.log(`cursor: ${cursor}`)

    } catch (error) {
      if (error instanceof ApiError) {
        console.log(`Errors: ${error.errors}`)
      } else {
        console.log("Unexpected Error: ", error)
      }

      // Exit loop once an error is encountered
      break
    }
  }

  console.log(`Total customers: ${totalCustomers}`)
}
tallyUpCustomers()
```

## Tests

First, clone the repo locally and `cd` into the directory.

```sh
git clone https://github.com/square/square-nodejs-sdk.git
cd square-nodejs-sdk
```

Next, install dependencies and build.

```sh
npm install
npm run build
```

Before running the tests, get a sandbox access token from your [Developer Dashboard] and use it to set a `SQUARE_SANDBOX_TOKEN` environment variable.

```sh
export SQUARE_SANDBOX_TOKEN="YOUR SANDBOX ACCESS TOKEN HERE"
```

And run the tests.

```sh
npm test
```

## Learn more

The Square Platform is built on the [Square API]. Square has a number of other SDKs that enable you to securely handle credit card information on both mobile and web so that you can process payments via the Square API. 

You can also use the Square API to create applications or services that work with payments, orders, inventory, etc. that have been created and managed in Square’s in-person hardware products (Square Point of Sale and Square Register).

[Developer Dashboard]: https://developer.squareup.com/apps
[Square API]: https://squareup.com/developers
[sign up for a developer account]: https://squareup.com/signup?v=developers
[Locations overview]: https://developer.squareup.com/docs/locations-api
[OAuth overview]: https://developer.squareup.com/docs/oauth-api/overview
[Client]: doc/client.md
[Devices]: doc/api/devices.md
[Disputes]: doc/api/disputes.md
[Terminal]: doc/api/terminal.md
[Team]: doc/api/team.md
[Cash Drawers]: doc/api/cash-drawers.md
[Customer Groups]: doc/api/customer-groups.md
[Customer Segments]: doc/api/customer-segments.md
[Bank Accounts]: doc/api/bank-accounts
[Payments]: doc/api/payments.md
[Checkout]: doc/api/checkout.md
[Catalog]: doc/api/catalog.md
[Customers]: doc/api/customers.md
[Employees]: doc/api/employees.md
[Inventory]: doc/api/inventory.md
[Labor]: doc/api/labor.md
[Loyalty]: doc/api/loyalty.md
[Bookings]: doc/api/bookings.md
[Locations]: doc/api/locations.md
[Merchants]: doc/api/merchants.md
[Orders]: doc/api/orders.md
[Invoices]: doc/api/invoices.md
[Apple Pay]: doc/api/apple-pay.md
[Refunds]: doc/api/refunds.md
[Subscriptions]: doc/api/subscriptions.md
[Mobile Authorization]: doc/api/mobile-authorization.md
[O Auth]: doc/api/o-auth.md
[V1 Locations]: doc/api/v1-locations.md
[V1 Employees]: doc/api/v1-employees.md
[V1 Transactions]: doc/api/v1-transactions.md
[V1 Items]: doc/api/v1-items.md
[Transactions]: doc/api/transactions.md
