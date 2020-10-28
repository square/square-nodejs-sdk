[![Build Status](https://travis-ci.com/square/square-nodejs-sdk-internal.svg?token=7KUGXNa8mbAXsapsn66r&branch=master)](https://travis-ci.com/square/square-nodejs-sdk-internal)

# Square NodeJS SDK - ALPHA

Use this Javascript library to manage Square resources (payments, orders, items, inventory, etc.) for your own Square account or on behalf of Square sellers.

## Requirements

The SDK requires [Nodejs](https://nodejs.org/en/) version 10 or later.

In the future, we intend to update the SDK to support the current and LTS versions of Node.js while dropping support for versions that have reached their EOL.

## Does the SDK support [TypeScript](https://www.typescriptlang.org/#installation)?

Yes.

The SDK package also exports the type files which help type-check the SDK usage in TypeScript codebases and provide hints in JavaScript codebases in supported IDEs.

## Installation

Install the latest SDK using github (Will be npm in the future):

```sh
git clone https://github.com/square/square-nodejs-sdk-internal.git
```
The build the sdk:
```sh
$ cd square-nodejs-sdk-internal
$ npm install
$ npm run build
```

## How do I import the Client and other types from the SDK?
**Recommended:** You can import it in ES-module style if your environment supports it:

The entry point to the sdk is the `dist` directory. When using this SDK locally replace `square-node-sdk` with a path to `square-nodejs-sdk/dist`. 

```ts
import { Client, Environment } from "square-nodejs-sdk";
```

Or you can import it in Commonjs style:

```ts
const square = require("square-nodejs-sdk");
const Client = square.Client;
const Environment = square.Environment;
```

### Import Gotcha

Do not mix ES Module and Commonjs imports in the same codebase. This will likely cause hard-to-debug issues. For more info, Google "Dual Package Hazard Node".

## How do I initialize the client?

```ts
import { Client, Environment } from "square-nodejs-sdk";

const client = new Client({
  environment: Environment.Sandbox,
  accessToken: process.env.SQUARE_ACCESS_TOKEN,
});
```

## How can I update the access token or some other configuration in the client?

You should not attempt to modify an existing client instance. Instead, create a new instance using the `withConfiguration` method:

```ts
import { Client } from "square-nodejs-sdk";

const client = new Client(/** some config **/);

// After getting the access token...
const newClient = client.withConfiguration({
  accessToken: newAcquiredAccessTokenValue,
});
```

`withConfiguration` copies over the existing configuration and state but with the given configuration overrides.

### Docs on SDK usage are a work in progress

## Usage

First time using Square? Here’s how to get started:

1. **Create a Square account.** If you don’t have one already, [sign up for a developer account].
1. **Create an application.** Go to your [Developer Dashboard] and create your first application. All you need to do is give it a name. When you’re doing this for your production application, enter the name as you would want a customer to see it.
1. **Make your first API call.** Almost all Square API calls require a location ID. You’ll make your first call to listLocations, which happens to be one of the API calls that don’t require a location ID. For more information about locations, see the [Locations overview].

Now let’s call your first Square API. Open your favorite text editor, create a new file called `locations.js`, and copy the following code into that file:

```javascript
import { Client } from 'square-nodejs-sdk'
 
// Create an instance of the API Client 
// and initialize it with the credentials 
// for the Square account whose assets you want to manage
const client = new Client({
  timeout:3000,
  environment: "sandbox",
  accessToken: process.env.SQUARE_ACCESS_TOKEN,
})
 
// Get an instance of the Square API you want call
const { locationsApi } = client

// The try/catch statement needs to be called from within an asynchronous function
try {
  // Call listLocations method to get all locations in this Square account
  let listLocationsResponse = await locationsApi.listLocations()

  // Get first location from list
  let firstLocation = listLocationsResponse.result.locations[0]

  console.log("Here is your first location: ", firstLocation)
} catch (error) {
  console.log("There was an error in your request: ", error.result)
}
 
```

Next, get an access token and reference it in your code. To call the Square API, you need to get an access token and initialize the API Client class with that token. An application has two sets of credentials: production and sandbox. To get started, you’ll use your sandbox token so that you can try things out in a test environment that is completely separate from production. Here’s how:

1. Go back to your application in the Developer Dashboard.
1. View the details of your application.
1. Make sure that Sandbox Settings is set in the lower left corner.
1. In the Sandbox Token box, click Show to display the token.
1. Copy the sandbox access token.
1. In locations.js, replace {{REPLACE_ACCESS_TOKEN}} with that token.

You’ll notice in locations.js that the Client object is initialized with the environment set to sandbox. You use the environment parameter to specify whether you want to access production or sandbox resources.

**Important** When you eventually switch from trying things out on sandbox to actually working with your real production resources, you should not embed the access token in your code. Make sure you store and access your production access tokens securely.

Now save `locations.js` and run it:

```sh
node locations.js
```

If your call is successful, you’ll get a response that looks like this:

```
Here is your first location:  { id: 'LOCATION_ID',
  name: 'Default Test Account',
  timezone: 'Etc/UTC',
  capabilities: [ 'CREDIT_CARD_PROCESSING' ],
  status: 'ACTIVE',
  created_at: '2019-07-23T19:46:48Z',
  merchant_id: "YOUR_MERCHANT_ID",
  country: 'US',
  language_code: 'en-US',
  currency: 'USD',
  type: 'PHYSICAL',
  business_hours: {},
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

After you’ve tried out the Square APIs and tested your application using sandbox, you will want to switch to your production credentials so that you can manage real Square resources. Don't forget to switch your access token from sandbox to production for real data.

## SDK patterns
If you know a few patterns, you’ll be able to call any API in the SDK. Here are some important ones:

### Get an access token

To use the Square API to manage the resources (such as payments, orders, customers, etc.) of a Square account, you need to create an application (or use an existing one) in the Developer Dashboard and get an access token for that application.

When you call a Square API, you call it using an access token. An access token has specific permissions to resources in a specific Square account.
Use an access token that is appropriate for your use case. There are two options:

- To manage the resources for your own Square account, use the Personal Access Token for the application created in your Square account.
- To manage resources for other Square accounts, use OAuth to ask owners of the accounts you want to manage so that you can work on their behalf. When you implement OAuth, you ask the Square account holder for permission to manage resources in their account (you can define the specific resources to access) and get an OAuth access token and refresh token for their account. For more information, see the [OAuth overview].

**Important** For both use cases, make sure you store and access the tokens securely.

### Import and Instantiate the Client Class

To use the Square API, you import the Client class, instantiate a Client object, and initialize it with the appropriate access token and environment. Here’s how:

1. Import the Client class from the Square JS SDK module so you can call the Square API:
```javascript
import { Client } from "square-nodejs-sdk"
```
1. Instantiate a Client object and initialize it with the access token for the Square account whose resources you want to manage and the environment that you want to use.

To access sandbox resources, initialize the Client with environment set to sandbox:

```javascript
const client = new Client({
  environment: "sandbox",
  accessToken: process.env.SQUARE_ACCESS_TOKEN,
})
```

To access production resources, set environment to production:

```javascript
import { Client } from 'square-nodejs-sdk'

const client = new Client({
  environment: "production",
  accessToken: process.env.SQUARE_ACCESS_TOKEN,
})
```
 
### Get an Instance of an API object and call its methods

Each API is implemented as a class. The Client object instantiates every API class and exposes them as properties so you can easily start using any Square API. You work with an API by calling methods on an instance of an API class. Here’s how:

**Work with an API by calling the methods on the API object.** For example, you would call listCustomers to get a list of all customers in the Square account:

```javascript
import { Client } from 'square-nodejs-sdk'

const client = new Client({
  environment: "sandbox",
  accessToken: process.env.SQUARE_ACCESS_TOKEN,
})

// Get an instance of the Square API you want call
const { customersApi }  = client

try {
  // Returns and API response object. API call value is on the result property
  let { result } = await customersApi.listCustomers()
  console.log(result)
} catch (error) {
  console.log(error.result)
}
```
See the SDK documentation for the list of methods for each API class.

**Pass complex parameters (such as create, update, search, etc.) as a dictionary.** For example, you would pass a dictionary containing the values used to create a new customer using createCustomer:

```javascript
// Create a unique key for this creation operation so you don't accidentally
// create the customer multiple times if you need to retry this operation.
// Here we use the npm package uuid
import { v4 as uuidv4 } from 'uuid';

let idempotencyKey = uuidv4()

  // To create a customer, you only need 1 of 5 identity values but you'll be
  // specifying two.
  let requestBody = {
    idempotency_key: idempotencyKey, // A unique id for the request
    given_name: "Amelia",
    family_name: "Earhardt"
  }

  try {
    let { result } = await customersApi.createCustomer(requestBody)
    console.log(result)
  } catch (error) {
    console.log(error)
  }
```

If your call succeeds, you’ll see a response that looks like this:
```
{'customer': {'created_at': '2019-06-28T21:23:05.126Z', 'creation_source': 'THIRD_PARTY', 'family_name': 'Earhardt', 'given_name': 'Amelia', 'id': 'CBASEDwl3El91nohQ2FLEk4aBfcgAQ', 'preferences': {'email_unsubscribed': False}, 'updated_at': '2019-06-28T21:23:05.126Z'}}
```

**Use idempotency for create, update, or other calls that you want to avoid calling twice.** To make an idempotent API call, you add the idempotencyKey with a unique value in the Hash for the API call’s request.

**Specify a location ID for APIs such as Transactions, Orders, and Checkout that deal with payments.** When a payment or order is created in Square, it is always associated with a location.

### Handle the response

API calls return an ApiResponse or throws an ApiError. ApiResponse and ApiError objects both contain properties that describe both the request (headers and request) and the response (statusCode, body, and result). ApiErrors are thrown when the statusCode of the response is out of the 200s range. Here’s how to handle the response:

**Use a try/catch statement to check whether the response succeeded or failed.** ApiResponse has two helper methods that enable you to easily determine the success or failure of a call:

```javascript
try {
  let { result } = await customersAPI.createCustomer(requestBody) 
  // If successful we will display response result
  console.log(result)
} catch (error) {
  // If unsuccessful we will diplay the list of errors
  console.log("Errors: ", error.result.errors)
}
```

**Read the response payload.** The response payload is returned as text in the body property or as a dictionary in the result property. For retrieve calls, a dictionary containing a single item is returned with a key name that is the name of the object (for example, customer). For list calls, an object containing a list of objects is returned with a key name that is the plural of the object name (for example, customers). If there are no objects for a list call to return, it returns an empty dictionary.

**Check the cursor for list operations.** Make sure you get all items returned in a list call by checking the cursor value returned in the API response. When you call a list API the first time, you set the cursor to an empty string in the API request. If the API response contains a cursor value, you call the API again to get the next page of items and continue to call that API again until the cursor is not returned in the API response. Here’s a code snippet that calls listCustomers to count the total number of customers:

```javascript
// Initialize the customer count
let totalCustomers = 0
// Initialize the cursor with an empty string since we are
// calling listCustomers for the first time
let cursor = ""
// Count the total number of customers using the listCustomers method
while (cursor !== null) {

  try {
    // Call listCustomers method to get all customers in this Square account
    let { result } = await customersApi.listCustomers({cursor})
    totalCustomers += result.customers.length

    // Get the cursor if it exists in the result else set it to null
    cursor = result.cursor ? result.cursor : null
    console.log(`cursor: ${cursor}`)

  } catch (error) {
    console.log(`Errors: ${error.result}`)
    // Exit loop once an error is encountered
    break
  }
}

console.log(`Total customers: ${totalCustomers}`)
```

## Tests

First, clone the repo locally and `cd` into the directory.

```sh
git clone https://github.com/square/square-nodejs-sdk.git
cd square-nodejs-sdk
```

Next, install dependencies.

```sh
npm install
```

Before running the tests, find a sandbox token in your [Developer Dashboard] and set a `SQUARE_ACCESS_TOKEN` environment variable.

```sh
export SQUARE_ACCESS_TOKEN="YOUR SANDBOX TOKEN HERE"
```

And run the tests.

```sh
npm test
```

## Learn more

The Square Platform is built on the [Square API]. Square has a number of other SDKs that enable you to securely handle credit card information on both mobile and web so that you can process payments via the Square API. 

You can also use the Square API to create applications or services that work with payments, orders, inventory, etc. that have been created and managed in Square’s in-person hardware products (Square Point of Sale and Square Register).
