# Reference

## Mobile

<details><summary><code>client.mobile.<a href="/src/api/resources/mobile/client/Client.ts">authorizationCode</a>({ ...params }) -> Square.CreateMobileAuthorizationCodeResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

**Note:** This endpoint is used by the deprecated Reader SDK.
Developers should update their integration to use the [Mobile Payments SDK](https://developer.squareup.com/docs/mobile-payments-sdk), which includes its own authorization methods.

Generates code to authorize a mobile application to connect to a Square card reader.

Authorization codes are one-time-use codes and expire 60 minutes after being issued.

The `Authorization` header you provide to this endpoint must have the following format:

```
Authorization: Bearer ACCESS_TOKEN
```

Replace `ACCESS_TOKEN` with a
[valid production authorization credential](https://developer.squareup.com/docs/build-basics/access-tokens).

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.mobile.authorizationCode({
    locationId: "YOUR_LOCATION_ID",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.CreateMobileAuthorizationCodeRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Mobile.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## OAuth

<details><summary><code>client.oAuth.<a href="/src/api/resources/oAuth/client/Client.ts">revokeToken</a>({ ...params }) -> Square.RevokeTokenResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Revokes an access token generated with the OAuth flow.

If an account has more than one OAuth access token for your application, this
endpoint revokes all of them, regardless of which token you specify.

**Important:** The `Authorization` header for this endpoint must have the
following format:

```
Authorization: Client APPLICATION_SECRET
```

Replace `APPLICATION_SECRET` with the application secret on the **OAuth**
page for your application in the Developer Dashboard.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.oAuth.revokeToken({
    clientId: "CLIENT_ID",
    accessToken: "ACCESS_TOKEN",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.RevokeTokenRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `OAuth.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.oAuth.<a href="/src/api/resources/oAuth/client/Client.ts">obtainToken</a>({ ...params }) -> Square.ObtainTokenResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns an OAuth access token and refresh token using the `authorization_code`
or `refresh_token` grant type.

When `grant_type` is `authorization_code`:

- With the [code flow](https://developer.squareup.com/docs/oauth-api/overview#code-flow),
  provide `code`, `client_id`, and `client_secret`.
- With the [PKCE flow](https://developer.squareup.com/docs/oauth-api/overview#pkce-flow),
  provide `code`, `client_id`, and `code_verifier`.

When `grant_type` is `refresh_token`:

- With the code flow, provide `refresh_token`, `client_id`, and `client_secret`.
  The response returns the same refresh token provided in the request.
- With the PKCE flow, provide `refresh_token` and `client_id`. The response returns
  a new refresh token.

You can use the `scopes` parameter to limit the set of permissions authorized by the
access token. You can use the `short_lived` parameter to create an access token that
expires in 24 hours.

**Important:** OAuth tokens should be encrypted and stored on a secure server.
Application clients should never interact directly with OAuth tokens.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.oAuth.obtainToken({
    clientId: "sq0idp-uaPHILoPzWZk3tlJqlML0g",
    clientSecret: "sq0csp-30a-4C_tVOnTh14Piza2BfTPBXyLafLPWSzY1qAjeBfM",
    code: "sq0cgb-l0SBqxs4uwxErTVyYOdemg",
    grantType: "authorization_code",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.ObtainTokenRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `OAuth.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.oAuth.<a href="/src/api/resources/oAuth/client/Client.ts">retrieveTokenStatus</a>() -> Square.RetrieveTokenStatusResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns information about an [OAuth access token](https://developer.squareup.com/docs/build-basics/access-tokens#get-an-oauth-access-token) or an application’s [personal access token](https://developer.squareup.com/docs/build-basics/access-tokens#get-a-personal-access-token).

Add the access token to the Authorization header of the request.

**Important:** The `Authorization` header you provide to this endpoint must have the following format:

```
Authorization: Bearer ACCESS_TOKEN
```

where `ACCESS_TOKEN` is a
[valid production authorization credential](https://developer.squareup.com/docs/build-basics/access-tokens).

If the access token is expired or not a valid access token, the endpoint returns an `UNAUTHORIZED` error.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.oAuth.retrieveTokenStatus();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `OAuth.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.oAuth.<a href="/src/api/resources/oAuth/client/Client.ts">authorize</a>() -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.oAuth.authorize();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `OAuth.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## V1Transactions

<details><summary><code>client.v1Transactions.<a href="/src/api/resources/v1Transactions/client/Client.ts">v1ListOrders</a>({ ...params }) -> Square.V1Order[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Provides summary information for a merchant's online store orders.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.v1Transactions.v1ListOrders({
    locationId: "location_id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.V1ListOrdersRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V1Transactions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.v1Transactions.<a href="/src/api/resources/v1Transactions/client/Client.ts">v1RetrieveOrder</a>({ ...params }) -> Square.V1Order</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Provides comprehensive information for a single online store order, including the order's history.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.v1Transactions.v1RetrieveOrder({
    locationId: "location_id",
    orderId: "order_id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.V1RetrieveOrderRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V1Transactions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.v1Transactions.<a href="/src/api/resources/v1Transactions/client/Client.ts">v1UpdateOrder</a>({ ...params }) -> Square.V1Order</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates the details of an online store order. Every update you perform on an order corresponds to one of three actions:

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.v1Transactions.v1UpdateOrder({
    locationId: "location_id",
    orderId: "order_id",
    action: "COMPLETE",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.V1UpdateOrderRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V1Transactions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## ApplePay

<details><summary><code>client.applePay.<a href="/src/api/resources/applePay/client/Client.ts">registerDomain</a>({ ...params }) -> Square.RegisterDomainResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Activates a domain for use with Apple Pay on the Web and Square. A validation
is performed on this domain by Apple to ensure that it is properly set up as
an Apple Pay enabled domain.

This endpoint provides an easy way for platform developers to bulk activate
Apple Pay on the Web with Square for merchants using their platform.

Note: You will need to host a valid domain verification file on your domain to support Apple Pay. The
current version of this file is always available at https://app.squareup.com/digital-wallets/apple-pay/apple-developer-merchantid-domain-association,
and should be hosted at `.well_known/apple-developer-merchantid-domain-association` on your
domain. This file is subject to change; we strongly recommend checking for updates regularly and avoiding
long-lived caches that might not keep in sync with the correct file version.

To learn more about the Web Payments SDK and how to add Apple Pay, see [Take an Apple Pay Payment](https://developer.squareup.com/docs/web-payments/apple-pay).

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.applePay.registerDomain({
    domainName: "example.com",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.RegisterDomainRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApplePay.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## BankAccounts

<details><summary><code>client.bankAccounts.<a href="/src/api/resources/bankAccounts/client/Client.ts">list</a>({ ...params }) -> core.Page<Square.BankAccount></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of [BankAccount](entity:BankAccount) objects linked to a Square account.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.bankAccounts.list();
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
const page = await client.bankAccounts.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.ListBankAccountsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BankAccounts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.bankAccounts.<a href="/src/api/resources/bankAccounts/client/Client.ts">getByV1Id</a>({ ...params }) -> Square.GetBankAccountByV1IdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns details of a [BankAccount](entity:BankAccount) identified by V1 bank account ID.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.bankAccounts.getByV1Id({
    v1BankAccountId: "v1_bank_account_id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.GetByV1IdBankAccountsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BankAccounts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.bankAccounts.<a href="/src/api/resources/bankAccounts/client/Client.ts">get</a>({ ...params }) -> Square.GetBankAccountResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns details of a [BankAccount](entity:BankAccount)
linked to a Square account.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.bankAccounts.get({
    bankAccountId: "bank_account_id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.GetBankAccountsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BankAccounts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Bookings

<details><summary><code>client.bookings.<a href="/src/api/resources/bookings/client/Client.ts">list</a>({ ...params }) -> core.Page<Square.Booking></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a collection of bookings.

To call this endpoint with buyer-level permissions, set `APPOINTMENTS_READ` for the OAuth scope.
To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_READ` and `APPOINTMENTS_READ` for the OAuth scope.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.bookings.list();
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
const page = await client.bookings.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.ListBookingsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Bookings.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.bookings.<a href="/src/api/resources/bookings/client/Client.ts">create</a>({ ...params }) -> Square.CreateBookingResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a booking.

The required input must include the following:

- `Booking.location_id`
- `Booking.start_at`
- `Booking.AppointmentSegment.team_member_id`
- `Booking.AppointmentSegment.service_variation_id`
- `Booking.AppointmentSegment.service_variation_version`

To call this endpoint with buyer-level permissions, set `APPOINTMENTS_WRITE` for the OAuth scope.
To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_WRITE` and `APPOINTMENTS_WRITE` for the OAuth scope.

For calls to this endpoint with seller-level permissions to succeed, the seller must have subscribed to _Appointments Plus_
or _Appointments Premium_.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.bookings.create({
    booking: {},
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.CreateBookingRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Bookings.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.bookings.<a href="/src/api/resources/bookings/client/Client.ts">searchAvailability</a>({ ...params }) -> Square.SearchAvailabilityResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Searches for availabilities for booking.

To call this endpoint with buyer-level permissions, set `APPOINTMENTS_READ` for the OAuth scope.
To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_READ` and `APPOINTMENTS_READ` for the OAuth scope.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.bookings.searchAvailability({
    query: {
        filter: {
            startAtRange: {},
        },
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.SearchAvailabilityRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Bookings.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.bookings.<a href="/src/api/resources/bookings/client/Client.ts">bulkRetrieveBookings</a>({ ...params }) -> Square.BulkRetrieveBookingsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Bulk-Retrieves a list of bookings by booking IDs.

To call this endpoint with buyer-level permissions, set `APPOINTMENTS_READ` for the OAuth scope.
To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_READ` and `APPOINTMENTS_READ` for the OAuth scope.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.bookings.bulkRetrieveBookings({
    bookingIds: ["booking_ids"],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.BulkRetrieveBookingsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Bookings.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.bookings.<a href="/src/api/resources/bookings/client/Client.ts">getBusinessProfile</a>() -> Square.GetBusinessBookingProfileResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a seller's booking profile.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.bookings.getBusinessProfile();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `Bookings.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.bookings.<a href="/src/api/resources/bookings/client/Client.ts">retrieveLocationBookingProfile</a>({ ...params }) -> Square.RetrieveLocationBookingProfileResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a seller's location booking profile.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.bookings.retrieveLocationBookingProfile({
    locationId: "location_id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.RetrieveLocationBookingProfileRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Bookings.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.bookings.<a href="/src/api/resources/bookings/client/Client.ts">bulkRetrieveTeamMemberBookingProfiles</a>({ ...params }) -> Square.BulkRetrieveTeamMemberBookingProfilesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves one or more team members' booking profiles.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.bookings.bulkRetrieveTeamMemberBookingProfiles({
    teamMemberIds: ["team_member_ids"],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.BulkRetrieveTeamMemberBookingProfilesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Bookings.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.bookings.<a href="/src/api/resources/bookings/client/Client.ts">get</a>({ ...params }) -> Square.GetBookingResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a booking.

To call this endpoint with buyer-level permissions, set `APPOINTMENTS_READ` for the OAuth scope.
To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_READ` and `APPOINTMENTS_READ` for the OAuth scope.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.bookings.get({
    bookingId: "booking_id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.GetBookingsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Bookings.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.bookings.<a href="/src/api/resources/bookings/client/Client.ts">update</a>({ ...params }) -> Square.UpdateBookingResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates a booking.

To call this endpoint with buyer-level permissions, set `APPOINTMENTS_WRITE` for the OAuth scope.
To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_WRITE` and `APPOINTMENTS_WRITE` for the OAuth scope.

For calls to this endpoint with seller-level permissions to succeed, the seller must have subscribed to _Appointments Plus_
or _Appointments Premium_.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.bookings.update({
    bookingId: "booking_id",
    booking: {},
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.UpdateBookingRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Bookings.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.bookings.<a href="/src/api/resources/bookings/client/Client.ts">cancel</a>({ ...params }) -> Square.CancelBookingResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Cancels an existing booking.

To call this endpoint with buyer-level permissions, set `APPOINTMENTS_WRITE` for the OAuth scope.
To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_WRITE` and `APPOINTMENTS_WRITE` for the OAuth scope.

For calls to this endpoint with seller-level permissions to succeed, the seller must have subscribed to _Appointments Plus_
or _Appointments Premium_.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.bookings.cancel({
    bookingId: "booking_id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.CancelBookingRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Bookings.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Cards

<details><summary><code>client.cards.<a href="/src/api/resources/cards/client/Client.ts">list</a>({ ...params }) -> core.Page<Square.Card></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a list of cards owned by the account making the request.
A max of 25 cards will be returned.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.cards.list();
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
const page = await client.cards.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.ListCardsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Cards.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.cards.<a href="/src/api/resources/cards/client/Client.ts">create</a>({ ...params }) -> Square.CreateCardResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Adds a card on file to an existing merchant.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.cards.create({
    idempotencyKey: "4935a656-a929-4792-b97c-8848be85c27c",
    sourceId: "cnon:uIbfJXhXETSP197M3GB",
    card: {
        cardholderName: "Amelia Earhart",
        billingAddress: {
            addressLine1: "500 Electric Ave",
            addressLine2: "Suite 600",
            locality: "New York",
            administrativeDistrictLevel1: "NY",
            postalCode: "10003",
            country: "US",
        },
        customerId: "VDKXEEKPJN48QDG3BGGFAK05P8",
        referenceId: "user-id-1",
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.CreateCardRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Cards.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.cards.<a href="/src/api/resources/cards/client/Client.ts">get</a>({ ...params }) -> Square.GetCardResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves details for a specific Card.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.cards.get({
    cardId: "card_id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.GetCardsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Cards.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.cards.<a href="/src/api/resources/cards/client/Client.ts">disable</a>({ ...params }) -> Square.DisableCardResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Disables the card, preventing any further updates or charges.
Disabling an already disabled card is allowed but has no effect.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.cards.disable({
    cardId: "card_id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.DisableCardsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Cards.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Catalog

<details><summary><code>client.catalog.<a href="/src/api/resources/catalog/client/Client.ts">batchDelete</a>({ ...params }) -> Square.BatchDeleteCatalogObjectsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes a set of [CatalogItem](entity:CatalogItem)s based on the
provided list of target IDs and returns a set of successfully deleted IDs in
the response. Deletion is a cascading event such that all children of the
targeted object are also deleted. For example, deleting a CatalogItem will
also delete all of its [CatalogItemVariation](entity:CatalogItemVariation)
children.

`BatchDeleteCatalogObjects` succeeds even if only a portion of the targeted
IDs can be deleted. The response will only include IDs that were
actually deleted.

To ensure consistency, only one delete request is processed at a time per seller account.
While one (batch or non-batch) delete request is being processed, other (batched and non-batched)
delete requests are rejected with the `429` error code.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.catalog.batchDelete({
    objectIds: ["W62UWFY35CWMYGVWK6TWJDNI", "AA27W3M2GGTF3H6AVPNB77CK"],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.BatchDeleteCatalogObjectsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Catalog.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.catalog.<a href="/src/api/resources/catalog/client/Client.ts">batchGet</a>({ ...params }) -> Square.BatchGetCatalogObjectsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a set of objects based on the provided ID.
Each [CatalogItem](entity:CatalogItem) returned in the set includes all of its
child information including: all of its
[CatalogItemVariation](entity:CatalogItemVariation) objects, references to
its [CatalogModifierList](entity:CatalogModifierList) objects, and the ids of
any [CatalogTax](entity:CatalogTax) objects that apply to it.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.catalog.batchGet({
    objectIds: ["W62UWFY35CWMYGVWK6TWJDNI", "AA27W3M2GGTF3H6AVPNB77CK"],
    includeRelatedObjects: true,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.BatchGetCatalogObjectsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Catalog.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.catalog.<a href="/src/api/resources/catalog/client/Client.ts">batchUpsert</a>({ ...params }) -> Square.BatchUpsertCatalogObjectsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates or updates up to 10,000 target objects based on the provided
list of objects. The target objects are grouped into batches and each batch is
inserted/updated in an all-or-nothing manner. If an object within a batch is
malformed in some way, or violates a database constraint, the entire batch
containing that item will be disregarded. However, other batches in the same
request may still succeed. Each batch may contain up to 1,000 objects, and
batches will be processed in order as long as the total object count for the
request (items, variations, modifier lists, discounts, and taxes) is no more
than 10,000.

To ensure consistency, only one update request is processed at a time per seller account.
While one (batch or non-batch) update request is being processed, other (batched and non-batched)
update requests are rejected with the `429` error code.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.catalog.batchUpsert({
    idempotencyKey: "789ff020-f723-43a9-b4b5-43b5dc1fa3dc",
    batches: [
        {
            objects: [
                {
                    type: "ITEM",
                    id: "id",
                },
                {
                    type: "ITEM",
                    id: "id",
                },
                {
                    type: "ITEM",
                    id: "id",
                },
                {
                    type: "TAX",
                    id: "id",
                },
            ],
        },
    ],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.BatchUpsertCatalogObjectsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Catalog.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.catalog.<a href="/src/api/resources/catalog/client/Client.ts">info</a>() -> Square.CatalogInfoResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves information about the Square Catalog API, such as batch size
limits that can be used by the `BatchUpsertCatalogObjects` endpoint.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.catalog.info();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `Catalog.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.catalog.<a href="/src/api/resources/catalog/client/Client.ts">list</a>({ ...params }) -> core.Page<Square.CatalogObject></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of all [CatalogObject](entity:CatalogObject)s of the specified types in the catalog.

The `types` parameter is specified as a comma-separated list of the [CatalogObjectType](entity:CatalogObjectType) values,
for example, "`ITEM`, `ITEM_VARIATION`, `MODIFIER`, `MODIFIER_LIST`, `CATEGORY`, `DISCOUNT`, `TAX`, `IMAGE`".

**Important:** ListCatalog does not return deleted catalog items. To retrieve
deleted catalog items, use [SearchCatalogObjects](api-endpoint:Catalog-SearchCatalogObjects)
and set the `include_deleted_objects` attribute value to `true`.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.catalog.list();
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
const page = await client.catalog.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.ListCatalogRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Catalog.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.catalog.<a href="/src/api/resources/catalog/client/Client.ts">search</a>({ ...params }) -> Square.SearchCatalogObjectsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Searches for [CatalogObject](entity:CatalogObject) of any type by matching supported search attribute values,
excluding custom attribute values on items or item variations, against one or more of the specified query filters.

This (`SearchCatalogObjects`) endpoint differs from the [SearchCatalogItems](api-endpoint:Catalog-SearchCatalogItems)
endpoint in the following aspects:

- `SearchCatalogItems` can only search for items or item variations, whereas `SearchCatalogObjects` can search for any type of catalog objects.
- `SearchCatalogItems` supports the custom attribute query filters to return items or item variations that contain custom attribute values, where `SearchCatalogObjects` does not.
- `SearchCatalogItems` does not support the `include_deleted_objects` filter to search for deleted items or item variations, whereas `SearchCatalogObjects` does.
- The both endpoints have different call conventions, including the query filter formats.
  </dd>
  </dl>
  </dd>
  </dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.catalog.search({
    objectTypes: ["ITEM"],
    query: {
        prefixQuery: {
            attributeName: "name",
            attributePrefix: "tea",
        },
    },
    limit: 100,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.SearchCatalogObjectsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Catalog.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.catalog.<a href="/src/api/resources/catalog/client/Client.ts">searchItems</a>({ ...params }) -> Square.SearchCatalogItemsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Searches for catalog items or item variations by matching supported search attribute values, including
custom attribute values, against one or more of the specified query filters.

This (`SearchCatalogItems`) endpoint differs from the [SearchCatalogObjects](api-endpoint:Catalog-SearchCatalogObjects)
endpoint in the following aspects:

- `SearchCatalogItems` can only search for items or item variations, whereas `SearchCatalogObjects` can search for any type of catalog objects.
- `SearchCatalogItems` supports the custom attribute query filters to return items or item variations that contain custom attribute values, where `SearchCatalogObjects` does not.
- `SearchCatalogItems` does not support the `include_deleted_objects` filter to search for deleted items or item variations, whereas `SearchCatalogObjects` does.
- The both endpoints use different call conventions, including the query filter formats.
  </dd>
  </dl>
  </dd>
  </dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.catalog.searchItems({
    textFilter: "red",
    categoryIds: ["WINE_CATEGORY_ID"],
    stockLevels: ["OUT", "LOW"],
    enabledLocationIds: ["ATL_LOCATION_ID"],
    limit: 100,
    sortOrder: "ASC",
    productTypes: ["REGULAR"],
    customAttributeFilters: [
        {
            customAttributeDefinitionId: "VEGAN_DEFINITION_ID",
            boolFilter: true,
        },
        {
            customAttributeDefinitionId: "BRAND_DEFINITION_ID",
            stringFilter: "Dark Horse",
        },
        {
            key: "VINTAGE",
            numberFilter: {
                min: "min",
                max: "max",
            },
        },
        {
            customAttributeDefinitionId: "VARIETAL_DEFINITION_ID",
        },
    ],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.SearchCatalogItemsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Catalog.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.catalog.<a href="/src/api/resources/catalog/client/Client.ts">updateItemModifierLists</a>({ ...params }) -> Square.UpdateItemModifierListsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates the [CatalogModifierList](entity:CatalogModifierList) objects
that apply to the targeted [CatalogItem](entity:CatalogItem) without having
to perform an upsert on the entire item.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.catalog.updateItemModifierLists({
    itemIds: ["H42BRLUJ5KTZTTMPVSLFAACQ", "2JXOBJIHCWBQ4NZ3RIXQGJA6"],
    modifierListsToEnable: ["H42BRLUJ5KTZTTMPVSLFAACQ", "2JXOBJIHCWBQ4NZ3RIXQGJA6"],
    modifierListsToDisable: ["7WRC16CJZDVLSNDQ35PP6YAD"],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.UpdateItemModifierListsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Catalog.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.catalog.<a href="/src/api/resources/catalog/client/Client.ts">updateItemTaxes</a>({ ...params }) -> Square.UpdateItemTaxesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates the [CatalogTax](entity:CatalogTax) objects that apply to the
targeted [CatalogItem](entity:CatalogItem) without having to perform an
upsert on the entire item.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.catalog.updateItemTaxes({
    itemIds: ["H42BRLUJ5KTZTTMPVSLFAACQ", "2JXOBJIHCWBQ4NZ3RIXQGJA6"],
    taxesToEnable: ["4WRCNHCJZDVLSNDQ35PP6YAD"],
    taxesToDisable: ["AQCEGCEBBQONINDOHRGZISEX"],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.UpdateItemTaxesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Catalog.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Customers

<details><summary><code>client.customers.<a href="/src/api/resources/customers/client/Client.ts">list</a>({ ...params }) -> core.Page<Square.Customer></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists customer profiles associated with a Square account.

Under normal operating conditions, newly created or updated customer profiles become available
for the listing operation in well under 30 seconds. Occasionally, propagation of the new or updated
profiles can take closer to one minute or longer, especially during network incidents and outages.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.customers.list();
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
const page = await client.customers.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.ListCustomersRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Customers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.customers.<a href="/src/api/resources/customers/client/Client.ts">create</a>({ ...params }) -> Square.CreateCustomerResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a new customer for a business.

You must provide at least one of the following values in your request to this
endpoint:

- `given_name`
- `family_name`
- `company_name`
- `email_address`
- `phone_number`
  </dd>
  </dl>
  </dd>
  </dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customers.create({
    givenName: "Amelia",
    familyName: "Earhart",
    emailAddress: "Amelia.Earhart@example.com",
    address: {
        addressLine1: "500 Electric Ave",
        addressLine2: "Suite 600",
        locality: "New York",
        administrativeDistrictLevel1: "NY",
        postalCode: "10003",
        country: "US",
    },
    phoneNumber: "+1-212-555-4240",
    referenceId: "YOUR_REFERENCE_ID",
    note: "a customer",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.CreateCustomerRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Customers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.customers.<a href="/src/api/resources/customers/client/Client.ts">batchCreate</a>({ ...params }) -> Square.BulkCreateCustomersResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates multiple [customer profiles](entity:Customer) for a business.

This endpoint takes a map of individual create requests and returns a map of responses.

You must provide at least one of the following values in each create request:

- `given_name`
- `family_name`
- `company_name`
- `email_address`
- `phone_number`
  </dd>
  </dl>
  </dd>
  </dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customers.batchCreate({
    customers: {
        "8bb76c4f-e35d-4c5b-90de-1194cd9179f0": {
            givenName: "Amelia",
            familyName: "Earhart",
            emailAddress: "Amelia.Earhart@example.com",
            address: {
                addressLine1: "500 Electric Ave",
                addressLine2: "Suite 600",
                locality: "New York",
                administrativeDistrictLevel1: "NY",
                postalCode: "10003",
                country: "US",
            },
            phoneNumber: "+1-212-555-4240",
            referenceId: "YOUR_REFERENCE_ID",
            note: "a customer",
        },
        "d1689f23-b25d-4932-b2f0-aed00f5e2029": {
            givenName: "Marie",
            familyName: "Curie",
            emailAddress: "Marie.Curie@example.com",
            address: {
                addressLine1: "500 Electric Ave",
                addressLine2: "Suite 601",
                locality: "New York",
                administrativeDistrictLevel1: "NY",
                postalCode: "10003",
                country: "US",
            },
            phoneNumber: "+1-212-444-4240",
            referenceId: "YOUR_REFERENCE_ID",
            note: "another customer",
        },
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.BulkCreateCustomersRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Customers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.customers.<a href="/src/api/resources/customers/client/Client.ts">bulkDeleteCustomers</a>({ ...params }) -> Square.BulkDeleteCustomersResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes multiple customer profiles.

The endpoint takes a list of customer IDs and returns a map of responses.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customers.bulkDeleteCustomers({
    customerIds: ["8DDA5NZVBZFGAX0V3HPF81HHE0", "N18CPRVXR5214XPBBA6BZQWF3C", "2GYD7WNXF7BJZW1PMGNXZ3Y8M8"],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.BulkDeleteCustomersRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Customers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.customers.<a href="/src/api/resources/customers/client/Client.ts">bulkRetrieveCustomers</a>({ ...params }) -> Square.BulkRetrieveCustomersResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves multiple customer profiles.

This endpoint takes a list of customer IDs and returns a map of responses.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customers.bulkRetrieveCustomers({
    customerIds: ["8DDA5NZVBZFGAX0V3HPF81HHE0", "N18CPRVXR5214XPBBA6BZQWF3C", "2GYD7WNXF7BJZW1PMGNXZ3Y8M8"],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.BulkRetrieveCustomersRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Customers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.customers.<a href="/src/api/resources/customers/client/Client.ts">bulkUpdateCustomers</a>({ ...params }) -> Square.BulkUpdateCustomersResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates multiple customer profiles.

This endpoint takes a map of individual update requests and returns a map of responses.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customers.bulkUpdateCustomers({
    customers: {
        "8DDA5NZVBZFGAX0V3HPF81HHE0": {
            emailAddress: "New.Amelia.Earhart@example.com",
            note: "updated customer note",
            version: 2,
        },
        N18CPRVXR5214XPBBA6BZQWF3C: {
            givenName: "Marie",
            familyName: "Curie",
            version: 0,
        },
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.BulkUpdateCustomersRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Customers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.customers.<a href="/src/api/resources/customers/client/Client.ts">search</a>({ ...params }) -> Square.SearchCustomersResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Searches the customer profiles associated with a Square account using one or more supported query filters.

Calling `SearchCustomers` without any explicit query filter returns all
customer profiles ordered alphabetically based on `given_name` and
`family_name`.

Under normal operating conditions, newly created or updated customer profiles become available
for the search operation in well under 30 seconds. Occasionally, propagation of the new or updated
profiles can take closer to one minute or longer, especially during network incidents and outages.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customers.search({
    limit: 2,
    query: {
        filter: {
            creationSource: {
                values: ["THIRD_PARTY"],
                rule: "INCLUDE",
            },
            createdAt: {
                startAt: "2018-01-01T00:00:00-00:00",
                endAt: "2018-02-01T00:00:00-00:00",
            },
            emailAddress: {
                fuzzy: "example.com",
            },
            groupIds: {
                all: ["545AXB44B4XXWMVQ4W8SBT3HHF"],
            },
        },
        sort: {
            field: "CREATED_AT",
            order: "ASC",
        },
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.SearchCustomersRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Customers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.customers.<a href="/src/api/resources/customers/client/Client.ts">get</a>({ ...params }) -> Square.GetCustomerResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns details for a single customer.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customers.get({
    customerId: "customer_id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.GetCustomersRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Customers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.customers.<a href="/src/api/resources/customers/client/Client.ts">update</a>({ ...params }) -> Square.UpdateCustomerResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates a customer profile. This endpoint supports sparse updates, so only new or changed fields are required in the request.
To add or update a field, specify the new value. To remove a field, specify `null`.

To update a customer profile that was created by merging existing profiles, you must use the ID of the newly created profile.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customers.update({
    customerId: "customer_id",
    emailAddress: "New.Amelia.Earhart@example.com",
    note: "updated customer note",
    version: 2,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.UpdateCustomerRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Customers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.customers.<a href="/src/api/resources/customers/client/Client.ts">delete</a>({ ...params }) -> Square.DeleteCustomerResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes a customer profile from a business.

To delete a customer profile that was created by merging existing profiles, you must use the ID of the newly created profile.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customers.delete({
    customerId: "customer_id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.DeleteCustomersRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Customers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Devices

<details><summary><code>client.devices.<a href="/src/api/resources/devices/client/Client.ts">list</a>({ ...params }) -> core.Page<Square.Device></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List devices associated with the merchant. Currently, only Terminal API
devices are supported.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.devices.list();
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
const page = await client.devices.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.ListDevicesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Devices.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.devices.<a href="/src/api/resources/devices/client/Client.ts">get</a>({ ...params }) -> Square.GetDeviceResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves Device with the associated `device_id`.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.devices.get({
    deviceId: "device_id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.GetDevicesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Devices.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Disputes

<details><summary><code>client.disputes.<a href="/src/api/resources/disputes/client/Client.ts">list</a>({ ...params }) -> core.Page<Square.Dispute></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of disputes associated with a particular account.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.disputes.list();
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
const page = await client.disputes.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.ListDisputesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Disputes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.disputes.<a href="/src/api/resources/disputes/client/Client.ts">get</a>({ ...params }) -> Square.GetDisputeResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns details about a specific dispute.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.disputes.get({
    disputeId: "dispute_id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.GetDisputesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Disputes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.disputes.<a href="/src/api/resources/disputes/client/Client.ts">accept</a>({ ...params }) -> Square.AcceptDisputeResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Accepts the loss on a dispute. Square returns the disputed amount to the cardholder and
updates the dispute state to ACCEPTED.

Square debits the disputed amount from the seller’s Square account. If the Square account
does not have sufficient funds, Square debits the associated bank account.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.disputes.accept({
    disputeId: "dispute_id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.AcceptDisputesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Disputes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.disputes.<a href="/src/api/resources/disputes/client/Client.ts">createEvidenceFile</a>({ ...params }) -> Square.CreateDisputeEvidenceFileResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Uploads a file to use as evidence in a dispute challenge. The endpoint accepts HTTP
multipart/form-data file uploads in HEIC, HEIF, JPEG, PDF, PNG, and TIFF formats.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.disputes.createEvidenceFile({
    disputeId: "dispute_id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.CreateEvidenceFileDisputesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Disputes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.disputes.<a href="/src/api/resources/disputes/client/Client.ts">createEvidenceText</a>({ ...params }) -> Square.CreateDisputeEvidenceTextResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Uploads text to use as evidence for a dispute challenge.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.disputes.createEvidenceText({
    disputeId: "dispute_id",
    idempotencyKey: "ed3ee3933d946f1514d505d173c82648",
    evidenceType: "TRACKING_NUMBER",
    evidenceText: "1Z8888888888888888",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.CreateDisputeEvidenceTextRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Disputes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.disputes.<a href="/src/api/resources/disputes/client/Client.ts">submitEvidence</a>({ ...params }) -> Square.SubmitEvidenceResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Submits evidence to the cardholder's bank.

The evidence submitted by this endpoint includes evidence uploaded
using the [CreateDisputeEvidenceFile](api-endpoint:Disputes-CreateDisputeEvidenceFile) and
[CreateDisputeEvidenceText](api-endpoint:Disputes-CreateDisputeEvidenceText) endpoints and
evidence automatically provided by Square, when available. Evidence cannot be removed from
a dispute after submission.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.disputes.submitEvidence({
    disputeId: "dispute_id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.SubmitEvidenceDisputesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Disputes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Employees

<details><summary><code>client.employees.<a href="/src/api/resources/employees/client/Client.ts">list</a>({ ...params }) -> core.Page<Square.Employee></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.employees.list();
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
const page = await client.employees.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.ListEmployeesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Employees.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.employees.<a href="/src/api/resources/employees/client/Client.ts">get</a>({ ...params }) -> Square.GetEmployeeResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.employees.get({
    id: "id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.GetEmployeesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Employees.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Events

<details><summary><code>client.events.<a href="/src/api/resources/events/client/Client.ts">searchEvents</a>({ ...params }) -> Square.SearchEventsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Search for Square API events that occur within a 28-day timeframe.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.events.searchEvents();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.SearchEventsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Events.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.events.<a href="/src/api/resources/events/client/Client.ts">disableEvents</a>() -> Square.DisableEventsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Disables events to prevent them from being searchable.
All events are disabled by default. You must enable events to make them searchable.
Disabling events for a specific time period prevents them from being searchable, even if you re-enable them later.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.events.disableEvents();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `Events.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.events.<a href="/src/api/resources/events/client/Client.ts">enableEvents</a>() -> Square.EnableEventsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Enables events to make them searchable. Only events that occur while in the enabled state are searchable.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.events.enableEvents();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `Events.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.events.<a href="/src/api/resources/events/client/Client.ts">listEventTypes</a>({ ...params }) -> Square.ListEventTypesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists all event types that you can subscribe to as webhooks or query using the Events API.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.events.listEventTypes();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.ListEventTypesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Events.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## GiftCards

<details><summary><code>client.giftCards.<a href="/src/api/resources/giftCards/client/Client.ts">list</a>({ ...params }) -> core.Page<Square.GiftCard></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists all gift cards. You can specify optional filters to retrieve
a subset of the gift cards. Results are sorted by `created_at` in ascending order.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.giftCards.list();
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
const page = await client.giftCards.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.ListGiftCardsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `GiftCards.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.giftCards.<a href="/src/api/resources/giftCards/client/Client.ts">create</a>({ ...params }) -> Square.CreateGiftCardResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a digital gift card or registers a physical (plastic) gift card. The resulting gift card
has a `PENDING` state. To activate a gift card so that it can be redeemed for purchases, call
[CreateGiftCardActivity](api-endpoint:GiftCardActivities-CreateGiftCardActivity) and create an `ACTIVATE`
activity with the initial balance. Alternatively, you can use [RefundPayment](api-endpoint:Refunds-RefundPayment)
to refund a payment to the new gift card.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.giftCards.create({
    idempotencyKey: "NC9Tm69EjbjtConu",
    locationId: "81FN9BNFZTKS4",
    giftCard: {
        type: "DIGITAL",
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.CreateGiftCardRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `GiftCards.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.giftCards.<a href="/src/api/resources/giftCards/client/Client.ts">getFromGan</a>({ ...params }) -> Square.GetGiftCardFromGanResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a gift card using the gift card account number (GAN).

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.giftCards.getFromGan({
    gan: "7783320001001635",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.GetGiftCardFromGanRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `GiftCards.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.giftCards.<a href="/src/api/resources/giftCards/client/Client.ts">getFromNonce</a>({ ...params }) -> Square.GetGiftCardFromNonceResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a gift card using a secure payment token that represents the gift card.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.giftCards.getFromNonce({
    nonce: "cnon:7783322135245171",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.GetGiftCardFromNonceRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `GiftCards.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.giftCards.<a href="/src/api/resources/giftCards/client/Client.ts">linkCustomer</a>({ ...params }) -> Square.LinkCustomerToGiftCardResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Links a customer to a gift card, which is also referred to as adding a card on file.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.giftCards.linkCustomer({
    giftCardId: "gift_card_id",
    customerId: "GKY0FZ3V717AH8Q2D821PNT2ZW",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.LinkCustomerToGiftCardRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `GiftCards.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.giftCards.<a href="/src/api/resources/giftCards/client/Client.ts">unlinkCustomer</a>({ ...params }) -> Square.UnlinkCustomerFromGiftCardResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Unlinks a customer from a gift card, which is also referred to as removing a card on file.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.giftCards.unlinkCustomer({
    giftCardId: "gift_card_id",
    customerId: "GKY0FZ3V717AH8Q2D821PNT2ZW",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.UnlinkCustomerFromGiftCardRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `GiftCards.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.giftCards.<a href="/src/api/resources/giftCards/client/Client.ts">get</a>({ ...params }) -> Square.GetGiftCardResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a gift card using the gift card ID.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.giftCards.get({
    id: "id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.GetGiftCardsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `GiftCards.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Inventory

<details><summary><code>client.inventory.<a href="/src/api/resources/inventory/client/Client.ts">deprecatedGetAdjustment</a>({ ...params }) -> Square.GetInventoryAdjustmentResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deprecated version of [RetrieveInventoryAdjustment](api-endpoint:Inventory-RetrieveInventoryAdjustment) after the endpoint URL
is updated to conform to the standard convention.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.inventory.deprecatedGetAdjustment({
    adjustmentId: "adjustment_id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.DeprecatedGetAdjustmentInventoryRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Inventory.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.inventory.<a href="/src/api/resources/inventory/client/Client.ts">getAdjustment</a>({ ...params }) -> Square.GetInventoryAdjustmentResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the [InventoryAdjustment](entity:InventoryAdjustment) object
with the provided `adjustment_id`.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.inventory.getAdjustment({
    adjustmentId: "adjustment_id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.GetAdjustmentInventoryRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Inventory.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.inventory.<a href="/src/api/resources/inventory/client/Client.ts">deprecatedBatchChange</a>({ ...params }) -> Square.BatchChangeInventoryResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deprecated version of [BatchChangeInventory](api-endpoint:Inventory-BatchChangeInventory) after the endpoint URL
is updated to conform to the standard convention.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.inventory.deprecatedBatchChange({
    idempotencyKey: "8fc6a5b0-9fe8-4b46-b46b-2ef95793abbe",
    changes: [
        {
            type: "PHYSICAL_COUNT",
            physicalCount: {
                referenceId: "1536bfbf-efed-48bf-b17d-a197141b2a92",
                catalogObjectId: "W62UWFY35CWMYGVWK6TWJDNI",
                state: "IN_STOCK",
                locationId: "C6W5YS5QM06F5",
                quantity: "53",
                teamMemberId: "LRK57NSQ5X7PUD05",
                occurredAt: "2016-11-16T22:25:24.878Z",
            },
        },
    ],
    ignoreUnchangedCounts: true,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.BatchChangeInventoryRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Inventory.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.inventory.<a href="/src/api/resources/inventory/client/Client.ts">deprecatedBatchGetChanges</a>({ ...params }) -> Square.BatchGetInventoryChangesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deprecated version of [BatchRetrieveInventoryChanges](api-endpoint:Inventory-BatchRetrieveInventoryChanges) after the endpoint URL
is updated to conform to the standard convention.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.inventory.deprecatedBatchGetChanges({
    catalogObjectIds: ["W62UWFY35CWMYGVWK6TWJDNI"],
    locationIds: ["C6W5YS5QM06F5"],
    types: ["PHYSICAL_COUNT"],
    states: ["IN_STOCK"],
    updatedAfter: "2016-11-01T00:00:00.000Z",
    updatedBefore: "2016-12-01T00:00:00.000Z",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.BatchRetrieveInventoryChangesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Inventory.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.inventory.<a href="/src/api/resources/inventory/client/Client.ts">deprecatedBatchGetCounts</a>({ ...params }) -> Square.BatchGetInventoryCountsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deprecated version of [BatchRetrieveInventoryCounts](api-endpoint:Inventory-BatchRetrieveInventoryCounts) after the endpoint URL
is updated to conform to the standard convention.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.inventory.deprecatedBatchGetCounts({
    catalogObjectIds: ["W62UWFY35CWMYGVWK6TWJDNI"],
    locationIds: ["59TNP9SA8VGDA"],
    updatedAfter: "2016-11-16T00:00:00.000Z",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.BatchGetInventoryCountsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Inventory.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.inventory.<a href="/src/api/resources/inventory/client/Client.ts">batchCreateChanges</a>({ ...params }) -> Square.BatchChangeInventoryResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Applies adjustments and counts to the provided item quantities.

On success: returns the current calculated counts for all objects
referenced in the request.
On failure: returns a list of related errors.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.inventory.batchCreateChanges({
    idempotencyKey: "8fc6a5b0-9fe8-4b46-b46b-2ef95793abbe",
    changes: [
        {
            type: "PHYSICAL_COUNT",
            physicalCount: {
                referenceId: "1536bfbf-efed-48bf-b17d-a197141b2a92",
                catalogObjectId: "W62UWFY35CWMYGVWK6TWJDNI",
                state: "IN_STOCK",
                locationId: "C6W5YS5QM06F5",
                quantity: "53",
                teamMemberId: "LRK57NSQ5X7PUD05",
                occurredAt: "2016-11-16T22:25:24.878Z",
            },
        },
    ],
    ignoreUnchangedCounts: true,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.BatchChangeInventoryRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Inventory.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.inventory.<a href="/src/api/resources/inventory/client/Client.ts">batchGetChanges</a>({ ...params }) -> core.Page<Square.InventoryChange></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns historical physical counts and adjustments based on the
provided filter criteria.

Results are paginated and sorted in ascending order according their
`occurred_at` timestamp (oldest first).

BatchRetrieveInventoryChanges is a catch-all query endpoint for queries
that cannot be handled by other, simpler endpoints.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.inventory.batchGetChanges({
    catalogObjectIds: ["W62UWFY35CWMYGVWK6TWJDNI"],
    locationIds: ["C6W5YS5QM06F5"],
    types: ["PHYSICAL_COUNT"],
    states: ["IN_STOCK"],
    updatedAfter: "2016-11-01T00:00:00.000Z",
    updatedBefore: "2016-12-01T00:00:00.000Z",
});
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
const page = await client.inventory.batchGetChanges({
    catalogObjectIds: ["W62UWFY35CWMYGVWK6TWJDNI"],
    locationIds: ["C6W5YS5QM06F5"],
    types: ["PHYSICAL_COUNT"],
    states: ["IN_STOCK"],
    updatedAfter: "2016-11-01T00:00:00.000Z",
    updatedBefore: "2016-12-01T00:00:00.000Z",
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.BatchRetrieveInventoryChangesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Inventory.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.inventory.<a href="/src/api/resources/inventory/client/Client.ts">batchGetCounts</a>({ ...params }) -> core.Page<Square.InventoryCount></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns current counts for the provided
[CatalogObject](entity:CatalogObject)s at the requested
[Location](entity:Location)s.

Results are paginated and sorted in descending order according to their
`calculated_at` timestamp (newest first).

When `updated_after` is specified, only counts that have changed since that
time (based on the server timestamp for the most recent change) are
returned. This allows clients to perform a "sync" operation, for example
in response to receiving a Webhook notification.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.inventory.batchGetCounts({
    catalogObjectIds: ["W62UWFY35CWMYGVWK6TWJDNI"],
    locationIds: ["59TNP9SA8VGDA"],
    updatedAfter: "2016-11-16T00:00:00.000Z",
});
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
const page = await client.inventory.batchGetCounts({
    catalogObjectIds: ["W62UWFY35CWMYGVWK6TWJDNI"],
    locationIds: ["59TNP9SA8VGDA"],
    updatedAfter: "2016-11-16T00:00:00.000Z",
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.BatchGetInventoryCountsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Inventory.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.inventory.<a href="/src/api/resources/inventory/client/Client.ts">deprecatedGetPhysicalCount</a>({ ...params }) -> Square.GetInventoryPhysicalCountResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deprecated version of [RetrieveInventoryPhysicalCount](api-endpoint:Inventory-RetrieveInventoryPhysicalCount) after the endpoint URL
is updated to conform to the standard convention.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.inventory.deprecatedGetPhysicalCount({
    physicalCountId: "physical_count_id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.DeprecatedGetPhysicalCountInventoryRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Inventory.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.inventory.<a href="/src/api/resources/inventory/client/Client.ts">getPhysicalCount</a>({ ...params }) -> Square.GetInventoryPhysicalCountResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the [InventoryPhysicalCount](entity:InventoryPhysicalCount)
object with the provided `physical_count_id`.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.inventory.getPhysicalCount({
    physicalCountId: "physical_count_id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.GetPhysicalCountInventoryRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Inventory.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.inventory.<a href="/src/api/resources/inventory/client/Client.ts">getTransfer</a>({ ...params }) -> Square.GetInventoryTransferResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the [InventoryTransfer](entity:InventoryTransfer) object
with the provided `transfer_id`.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.inventory.getTransfer({
    transferId: "transfer_id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.GetTransferInventoryRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Inventory.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.inventory.<a href="/src/api/resources/inventory/client/Client.ts">get</a>({ ...params }) -> core.Page<Square.InventoryCount></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves the current calculated stock count for a given
[CatalogObject](entity:CatalogObject) at a given set of
[Location](entity:Location)s. Responses are paginated and unsorted.
For more sophisticated queries, use a batch endpoint.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.inventory.get({
    catalogObjectId: "catalog_object_id",
});
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
const page = await client.inventory.get({
    catalogObjectId: "catalog_object_id",
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.GetInventoryRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Inventory.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.inventory.<a href="/src/api/resources/inventory/client/Client.ts">changes</a>({ ...params }) -> core.Page<Square.InventoryChange></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a set of physical counts and inventory adjustments for the
provided [CatalogObject](entity:CatalogObject) at the requested
[Location](entity:Location)s.

You can achieve the same result by calling [BatchRetrieveInventoryChanges](api-endpoint:Inventory-BatchRetrieveInventoryChanges)
and having the `catalog_object_ids` list contain a single element of the `CatalogObject` ID.

Results are paginated and sorted in descending order according to their
`occurred_at` timestamp (newest first).

There are no limits on how far back the caller can page. This endpoint can be
used to display recent changes for a specific item. For more
sophisticated queries, use a batch endpoint.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.inventory.changes({
    catalogObjectId: "catalog_object_id",
});
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
const page = await client.inventory.changes({
    catalogObjectId: "catalog_object_id",
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.ChangesInventoryRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Inventory.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Invoices

<details><summary><code>client.invoices.<a href="/src/api/resources/invoices/client/Client.ts">list</a>({ ...params }) -> core.Page<Square.Invoice></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of invoices for a given location. The response
is paginated. If truncated, the response includes a `cursor` that you  
use in a subsequent request to retrieve the next set of invoices.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.invoices.list({
    locationId: "location_id",
});
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
const page = await client.invoices.list({
    locationId: "location_id",
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.ListInvoicesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Invoices.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.invoices.<a href="/src/api/resources/invoices/client/Client.ts">create</a>({ ...params }) -> Square.CreateInvoiceResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a draft [invoice](entity:Invoice)
for an order created using the Orders API.

A draft invoice remains in your account and no action is taken.
You must publish the invoice before Square can process it (send it to the customer's email address or charge the customer’s card on file).

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.invoices.create({
    invoice: {
        locationId: "ES0RJRZYEC39A",
        orderId: "CAISENgvlJ6jLWAzERDzjyHVybY",
        primaryRecipient: {
            customerId: "JDKYHBWT1D4F8MFH63DBMEN8Y4",
        },
        paymentRequests: [
            {
                requestType: "BALANCE",
                dueDate: "2030-01-24",
                tippingEnabled: true,
                automaticPaymentSource: "NONE",
                reminders: [
                    {
                        relativeScheduledDays: -1,
                        message: "Your invoice is due tomorrow",
                    },
                ],
            },
        ],
        deliveryMethod: "EMAIL",
        invoiceNumber: "inv-100",
        title: "Event Planning Services",
        description: "We appreciate your business!",
        scheduledAt: "2030-01-13T10:00:00Z",
        acceptedPaymentMethods: {
            card: true,
            squareGiftCard: false,
            bankAccount: false,
            buyNowPayLater: false,
            cashAppPay: false,
        },
        customFields: [
            {
                label: "Event Reference Number",
                value: "Ref. #1234",
                placement: "ABOVE_LINE_ITEMS",
            },
            {
                label: "Terms of Service",
                value: "The terms of service are...",
                placement: "BELOW_LINE_ITEMS",
            },
        ],
        saleOrServiceDate: "2030-01-24",
        storePaymentMethodEnabled: false,
    },
    idempotencyKey: "ce3748f9-5fc1-4762-aa12-aae5e843f1f4",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.CreateInvoiceRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Invoices.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.invoices.<a href="/src/api/resources/invoices/client/Client.ts">search</a>({ ...params }) -> Square.SearchInvoicesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Searches for invoices from a location specified in
the filter. You can optionally specify customers in the filter for whom to
retrieve invoices. In the current implementation, you can only specify one location and
optionally one customer.

The response is paginated. If truncated, the response includes a `cursor`
that you use in a subsequent request to retrieve the next set of invoices.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.invoices.search({
    query: {
        filter: {
            locationIds: ["ES0RJRZYEC39A"],
            customerIds: ["JDKYHBWT1D4F8MFH63DBMEN8Y4"],
        },
        sort: {
            field: "INVOICE_SORT_DATE",
            order: "DESC",
        },
    },
    limit: 100,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.SearchInvoicesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Invoices.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.invoices.<a href="/src/api/resources/invoices/client/Client.ts">get</a>({ ...params }) -> Square.GetInvoiceResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves an invoice by invoice ID.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.invoices.get({
    invoiceId: "invoice_id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.GetInvoicesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Invoices.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.invoices.<a href="/src/api/resources/invoices/client/Client.ts">update</a>({ ...params }) -> Square.UpdateInvoiceResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates an invoice. This endpoint supports sparse updates, so you only need
to specify the fields you want to change along with the required `version` field.
Some restrictions apply to updating invoices. For example, you cannot change the
`order_id` or `location_id` field.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.invoices.update({
    invoiceId: "invoice_id",
    invoice: {
        version: 1,
        paymentRequests: [
            {
                uid: "2da7964f-f3d2-4f43-81e8-5aa220bf3355",
                tippingEnabled: false,
            },
        ],
    },
    idempotencyKey: "4ee82288-0910-499e-ab4c-5d0071dad1be",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.UpdateInvoiceRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Invoices.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.invoices.<a href="/src/api/resources/invoices/client/Client.ts">delete</a>({ ...params }) -> Square.DeleteInvoiceResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes the specified invoice. When an invoice is deleted, the
associated order status changes to CANCELED. You can only delete a draft
invoice (you cannot delete a published invoice, including one that is scheduled for processing).

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.invoices.delete({
    invoiceId: "invoice_id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.DeleteInvoicesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Invoices.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.invoices.<a href="/src/api/resources/invoices/client/Client.ts">createInvoiceAttachment</a>({ ...params }) -> Square.CreateInvoiceAttachmentResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Uploads a file and attaches it to an invoice. This endpoint accepts HTTP multipart/form-data file uploads
with a JSON `request` part and a `file` part. The `file` part must be a `readable stream` that contains a file
in a supported format: GIF, JPEG, PNG, TIFF, BMP, or PDF.

Invoices can have up to 10 attachments with a total file size of 25 MB. Attachments can be added only to invoices
in the `DRAFT`, `SCHEDULED`, `UNPAID`, or `PARTIALLY_PAID` state.

**NOTE:** When testing in the Sandbox environment, the total file size is limited to 1 KB.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.invoices.createInvoiceAttachment({
    invoiceId: "invoice_id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.CreateInvoiceAttachmentRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Invoices.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.invoices.<a href="/src/api/resources/invoices/client/Client.ts">deleteInvoiceAttachment</a>({ ...params }) -> Square.DeleteInvoiceAttachmentResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Removes an attachment from an invoice and permanently deletes the file. Attachments can be removed only
from invoices in the `DRAFT`, `SCHEDULED`, `UNPAID`, or `PARTIALLY_PAID` state.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.invoices.deleteInvoiceAttachment({
    invoiceId: "invoice_id",
    attachmentId: "attachment_id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.DeleteInvoiceAttachmentRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Invoices.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.invoices.<a href="/src/api/resources/invoices/client/Client.ts">cancel</a>({ ...params }) -> Square.CancelInvoiceResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Cancels an invoice. The seller cannot collect payments for
the canceled invoice.

You cannot cancel an invoice in the `DRAFT` state or in a terminal state: `PAID`, `REFUNDED`, `CANCELED`, or `FAILED`.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.invoices.cancel({
    invoiceId: "invoice_id",
    version: 0,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.CancelInvoiceRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Invoices.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.invoices.<a href="/src/api/resources/invoices/client/Client.ts">publish</a>({ ...params }) -> Square.PublishInvoiceResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Publishes the specified draft invoice.

After an invoice is published, Square
follows up based on the invoice configuration. For example, Square
sends the invoice to the customer's email address, charges the customer's card on file, or does
nothing. Square also makes the invoice available on a Square-hosted invoice page.

The invoice `status` also changes from `DRAFT` to a status
based on the invoice configuration. For example, the status changes to `UNPAID` if
Square emails the invoice or `PARTIALLY_PAID` if Square charges a card on file for a portion of the
invoice amount.

In addition to the required `ORDERS_WRITE` and `INVOICES_WRITE` permissions, `CUSTOMERS_READ`
and `PAYMENTS_WRITE` are required when publishing invoices configured for card-on-file payments.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.invoices.publish({
    invoiceId: "invoice_id",
    version: 1,
    idempotencyKey: "32da42d0-1997-41b0-826b-f09464fc2c2e",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.PublishInvoiceRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Invoices.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Locations

<details><summary><code>client.locations.<a href="/src/api/resources/locations/client/Client.ts">list</a>() -> Square.ListLocationsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Provides details about all of the seller's [locations](https://developer.squareup.com/docs/locations-api),
including those with an inactive status. Locations are listed alphabetically by `name`.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.locations.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `Locations.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.locations.<a href="/src/api/resources/locations/client/Client.ts">create</a>({ ...params }) -> Square.CreateLocationResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a [location](https://developer.squareup.com/docs/locations-api).
Creating new locations allows for separate configuration of receipt layouts, item prices,
and sales reports. Developers can use locations to separate sales activity through applications
that integrate with Square from sales activity elsewhere in a seller's account.
Locations created programmatically with the Locations API last forever and
are visible to the seller for their own management. Therefore, ensure that
each location has a sensible and unique name.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.locations.create({
    location: {
        name: "Midtown",
        address: {
            addressLine1: "1234 Peachtree St. NE",
            locality: "Atlanta",
            administrativeDistrictLevel1: "GA",
            postalCode: "30309",
        },
        description: "Midtown Atlanta store",
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.CreateLocationRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Locations.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.locations.<a href="/src/api/resources/locations/client/Client.ts">get</a>({ ...params }) -> Square.GetLocationResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves details of a single location. Specify "main"
as the location ID to retrieve details of the [main location](https://developer.squareup.com/docs/locations-api#about-the-main-location).

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.locations.get({
    locationId: "location_id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.GetLocationsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Locations.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.locations.<a href="/src/api/resources/locations/client/Client.ts">update</a>({ ...params }) -> Square.UpdateLocationResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates a [location](https://developer.squareup.com/docs/locations-api).

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.locations.update({
    locationId: "location_id",
    location: {
        businessHours: {
            periods: [
                {
                    dayOfWeek: "FRI",
                    startLocalTime: "07:00",
                    endLocalTime: "18:00",
                },
                {
                    dayOfWeek: "SAT",
                    startLocalTime: "07:00",
                    endLocalTime: "18:00",
                },
                {
                    dayOfWeek: "SUN",
                    startLocalTime: "09:00",
                    endLocalTime: "15:00",
                },
            ],
        },
        description: "Midtown Atlanta store - Open weekends",
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.UpdateLocationRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Locations.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.locations.<a href="/src/api/resources/locations/client/Client.ts">checkouts</a>({ ...params }) -> Square.CreateCheckoutResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Links a `checkoutId` to a `checkout_page_url` that customers are
directed to in order to provide their payment information using a
payment processing workflow hosted on connect.squareup.com.

NOTE: The Checkout API has been updated with new features.
For more information, see [Checkout API highlights](https://developer.squareup.com/docs/checkout-api#checkout-api-highlights).

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.locations.checkouts({
    locationId: "location_id",
    idempotencyKey: "86ae1696-b1e3-4328-af6d-f1e04d947ad6",
    order: {
        order: {
            locationId: "location_id",
            referenceId: "reference_id",
            customerId: "customer_id",
            lineItems: [
                {
                    name: "Printed T Shirt",
                    quantity: "2",
                    appliedTaxes: [
                        {
                            taxUid: "38ze1696-z1e3-5628-af6d-f1e04d947fg3",
                        },
                    ],
                    appliedDiscounts: [
                        {
                            discountUid: "56ae1696-z1e3-9328-af6d-f1e04d947gd4",
                        },
                    ],
                    basePriceMoney: {
                        amount: 1500,
                        currency: "USD",
                    },
                },
                {
                    name: "Slim Jeans",
                    quantity: "1",
                    basePriceMoney: {
                        amount: 2500,
                        currency: "USD",
                    },
                },
                {
                    name: "Woven Sweater",
                    quantity: "3",
                    basePriceMoney: {
                        amount: 3500,
                        currency: "USD",
                    },
                },
            ],
            taxes: [
                {
                    uid: "38ze1696-z1e3-5628-af6d-f1e04d947fg3",
                    type: "INCLUSIVE",
                    percentage: "7.75",
                    scope: "LINE_ITEM",
                },
            ],
            discounts: [
                {
                    uid: "56ae1696-z1e3-9328-af6d-f1e04d947gd4",
                    type: "FIXED_AMOUNT",
                    amountMoney: {
                        amount: 100,
                        currency: "USD",
                    },
                    scope: "LINE_ITEM",
                },
            ],
        },
        idempotencyKey: "12ae1696-z1e3-4328-af6d-f1e04d947gd4",
    },
    askForShippingAddress: true,
    merchantSupportEmail: "merchant+support@website.com",
    prePopulateBuyerEmail: "example@email.com",
    prePopulateShippingAddress: {
        addressLine1: "1455 Market St.",
        addressLine2: "Suite 600",
        locality: "San Francisco",
        administrativeDistrictLevel1: "CA",
        postalCode: "94103",
        country: "US",
        firstName: "Jane",
        lastName: "Doe",
    },
    redirectUrl: "https://merchant.website.com/order-confirm",
    additionalRecipients: [
        {
            locationId: "057P5VYJ4A5X1",
            description: "Application fees",
            amountMoney: {
                amount: 60,
                currency: "USD",
            },
        },
    ],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.CreateCheckoutRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Locations.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Loyalty

<details><summary><code>client.loyalty.<a href="/src/api/resources/loyalty/client/Client.ts">searchEvents</a>({ ...params }) -> Square.SearchLoyaltyEventsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Searches for loyalty events.

A Square loyalty program maintains a ledger of events that occur during the lifetime of a
buyer's loyalty account. Each change in the point balance
(for example, points earned, points redeemed, and points expired) is
recorded in the ledger. Using this endpoint, you can search the ledger for events.

Search results are sorted by `created_at` in descending order.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.loyalty.searchEvents({
    query: {
        filter: {
            orderFilter: {
                orderId: "PyATxhYLfsMqpVkcKJITPydgEYfZY",
            },
        },
    },
    limit: 30,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.SearchLoyaltyEventsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Loyalty.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Merchants

<details><summary><code>client.merchants.<a href="/src/api/resources/merchants/client/Client.ts">list</a>({ ...params }) -> core.Page<Square.Merchant></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Provides details about the merchant associated with a given access token.

The access token used to connect your application to a Square seller is associated
with a single merchant. That means that `ListMerchants` returns a list
with a single `Merchant` object. You can specify your personal access token
to get your own merchant information or specify an OAuth token to get the
information for the merchant that granted your application access.

If you know the merchant ID, you can also use the [RetrieveMerchant](api-endpoint:Merchants-RetrieveMerchant)
endpoint to retrieve the merchant information.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.merchants.list();
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
const page = await client.merchants.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.ListMerchantsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Merchants.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.merchants.<a href="/src/api/resources/merchants/client/Client.ts">get</a>({ ...params }) -> Square.GetMerchantResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves the `Merchant` object for the given `merchant_id`.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.merchants.get({
    merchantId: "merchant_id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.GetMerchantsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Merchants.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Checkout

<details><summary><code>client.checkout.<a href="/src/api/resources/checkout/client/Client.ts">retrieveLocationSettings</a>({ ...params }) -> Square.RetrieveLocationSettingsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves the location-level settings for a Square-hosted checkout page.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.checkout.retrieveLocationSettings({
    locationId: "location_id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.RetrieveLocationSettingsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Checkout.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.checkout.<a href="/src/api/resources/checkout/client/Client.ts">updateLocationSettings</a>({ ...params }) -> Square.UpdateLocationSettingsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates the location-level settings for a Square-hosted checkout page.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.checkout.updateLocationSettings({
    locationId: "location_id",
    locationSettings: {},
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.UpdateLocationSettingsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Checkout.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.checkout.<a href="/src/api/resources/checkout/client/Client.ts">retrieveMerchantSettings</a>() -> Square.RetrieveMerchantSettingsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves the merchant-level settings for a Square-hosted checkout page.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.checkout.retrieveMerchantSettings();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `Checkout.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.checkout.<a href="/src/api/resources/checkout/client/Client.ts">updateMerchantSettings</a>({ ...params }) -> Square.UpdateMerchantSettingsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates the merchant-level settings for a Square-hosted checkout page.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.checkout.updateMerchantSettings({
    merchantSettings: {},
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.UpdateMerchantSettingsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Checkout.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Orders

<details><summary><code>client.orders.<a href="/src/api/resources/orders/client/Client.ts">create</a>({ ...params }) -> Square.CreateOrderResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a new [order](entity:Order) that can include information about products for
purchase and settings to apply to the purchase.

To pay for a created order, see
[Pay for Orders](https://developer.squareup.com/docs/orders-api/pay-for-orders).

You can modify open orders using the [UpdateOrder](api-endpoint:Orders-UpdateOrder) endpoint.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.orders.create({
    order: {
        locationId: "057P5VYJ4A5X1",
        referenceId: "my-order-001",
        lineItems: [
            {
                name: "New York Strip Steak",
                quantity: "1",
                basePriceMoney: {
                    amount: 1599,
                    currency: "USD",
                },
            },
            {
                quantity: "2",
                catalogObjectId: "BEMYCSMIJL46OCDV4KYIKXIB",
                modifiers: [
                    {
                        catalogObjectId: "CHQX7Y4KY6N5KINJKZCFURPZ",
                    },
                ],
                appliedDiscounts: [
                    {
                        discountUid: "one-dollar-off",
                    },
                ],
            },
        ],
        taxes: [
            {
                uid: "state-sales-tax",
                name: "State Sales Tax",
                percentage: "9",
                scope: "ORDER",
            },
        ],
        discounts: [
            {
                uid: "labor-day-sale",
                name: "Labor Day Sale",
                percentage: "5",
                scope: "ORDER",
            },
            {
                uid: "membership-discount",
                catalogObjectId: "DB7L55ZH2BGWI4H23ULIWOQ7",
                scope: "ORDER",
            },
            {
                uid: "one-dollar-off",
                name: "Sale - $1.00 off",
                amountMoney: {
                    amount: 100,
                    currency: "USD",
                },
                scope: "LINE_ITEM",
            },
        ],
    },
    idempotencyKey: "8193148c-9586-11e6-99f9-28cfe92138cf",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.CreateOrderRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Orders.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.orders.<a href="/src/api/resources/orders/client/Client.ts">batchGet</a>({ ...params }) -> Square.BatchGetOrdersResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a set of [orders](entity:Order) by their IDs.

If a given order ID does not exist, the ID is ignored instead of generating an error.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.orders.batchGet({
    locationId: "057P5VYJ4A5X1",
    orderIds: ["CAISEM82RcpmcFBM0TfOyiHV3es", "CAISENgvlJ6jLWAzERDzjyHVybY"],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.BatchGetOrdersRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Orders.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.orders.<a href="/src/api/resources/orders/client/Client.ts">calculate</a>({ ...params }) -> Square.CalculateOrderResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Enables applications to preview order pricing without creating an order.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.orders.calculate({
    order: {
        locationId: "D7AVYMEAPJ3A3",
        lineItems: [
            {
                name: "Item 1",
                quantity: "1",
                basePriceMoney: {
                    amount: 500,
                    currency: "USD",
                },
            },
            {
                name: "Item 2",
                quantity: "2",
                basePriceMoney: {
                    amount: 300,
                    currency: "USD",
                },
            },
        ],
        discounts: [
            {
                name: "50% Off",
                percentage: "50",
                scope: "ORDER",
            },
        ],
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.CalculateOrderRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Orders.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.orders.<a href="/src/api/resources/orders/client/Client.ts">clone</a>({ ...params }) -> Square.CloneOrderResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a new order, in the `DRAFT` state, by duplicating an existing order. The newly created order has
only the core fields (such as line items, taxes, and discounts) copied from the original order.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.orders.clone({
    orderId: "ZAISEM52YcpmcWAzERDOyiWS123",
    version: 3,
    idempotencyKey: "UNIQUE_STRING",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.CloneOrderRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Orders.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.orders.<a href="/src/api/resources/orders/client/Client.ts">search</a>({ ...params }) -> Square.SearchOrdersResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Search all orders for one or more locations. Orders include all sales,
returns, and exchanges regardless of how or when they entered the Square
ecosystem (such as Point of Sale, Invoices, and Connect APIs).

`SearchOrders` requests need to specify which locations to search and define a
[SearchOrdersQuery](entity:SearchOrdersQuery) object that controls
how to sort or filter the results. Your `SearchOrdersQuery` can:

Set filter criteria.
Set the sort order.
Determine whether to return results as complete `Order` objects or as
[OrderEntry](entity:OrderEntry) objects.

Note that details for orders processed with Square Point of Sale while in
offline mode might not be transmitted to Square for up to 72 hours. Offline
orders have a `created_at` value that reflects the time the order was created,
not the time it was subsequently transmitted to Square.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.orders.search({
    locationIds: ["057P5VYJ4A5X1", "18YC4JDH91E1H"],
    query: {
        filter: {
            stateFilter: {
                states: ["COMPLETED"],
            },
            dateTimeFilter: {
                closedAt: {
                    startAt: "2018-03-03T20:00:00+00:00",
                    endAt: "2019-03-04T21:54:45+00:00",
                },
            },
        },
        sort: {
            sortField: "CLOSED_AT",
            sortOrder: "DESC",
        },
    },
    limit: 3,
    returnEntries: true,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.SearchOrdersRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Orders.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.orders.<a href="/src/api/resources/orders/client/Client.ts">get</a>({ ...params }) -> Square.GetOrderResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves an [Order](entity:Order) by ID.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.orders.get({
    orderId: "order_id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.GetOrdersRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Orders.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.orders.<a href="/src/api/resources/orders/client/Client.ts">update</a>({ ...params }) -> Square.UpdateOrderResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates an open [order](entity:Order) by adding, replacing, or deleting
fields. Orders with a `COMPLETED` or `CANCELED` state cannot be updated.

An `UpdateOrder` request requires the following:

- The `order_id` in the endpoint path, identifying the order to update.
- The latest `version` of the order to update.
- The [sparse order](https://developer.squareup.com/docs/orders-api/manage-orders/update-orders#sparse-order-objects)
  containing only the fields to update and the version to which the update is
  being applied.
- If deleting fields, the [dot notation paths](https://developer.squareup.com/docs/orders-api/manage-orders/update-orders#identifying-fields-to-delete)
  identifying the fields to clear.

To pay for an order, see
[Pay for Orders](https://developer.squareup.com/docs/orders-api/pay-for-orders).

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.orders.update({
    orderId: "order_id",
    order: {
        locationId: "location_id",
        lineItems: [
            {
                uid: "cookie_uid",
                name: "COOKIE",
                quantity: "2",
                basePriceMoney: {
                    amount: 200,
                    currency: "USD",
                },
            },
        ],
        version: 1,
    },
    fieldsToClear: ["discounts"],
    idempotencyKey: "UNIQUE_STRING",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.UpdateOrderRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Orders.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.orders.<a href="/src/api/resources/orders/client/Client.ts">pay</a>({ ...params }) -> Square.PayOrderResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Pay for an [order](entity:Order) using one or more approved [payments](entity:Payment)
or settle an order with a total of `0`.

The total of the `payment_ids` listed in the request must be equal to the order
total. Orders with a total amount of `0` can be marked as paid by specifying an empty
array of `payment_ids` in the request.

To be used with `PayOrder`, a payment must:

- Reference the order by specifying the `order_id` when [creating the payment](api-endpoint:Payments-CreatePayment).
  Any approved payments that reference the same `order_id` not specified in the
  `payment_ids` is canceled.
- Be approved with [delayed capture](https://developer.squareup.com/docs/payments-api/take-payments/card-payments/delayed-capture).
Using a delayed capture payment with `PayOrder` completes the approved payment.
  </dd>
  </dl>
  </dd>
  </dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.orders.pay({
    orderId: "order_id",
    idempotencyKey: "c043a359-7ad9-4136-82a9-c3f1d66dcbff",
    paymentIds: ["EnZdNAlWCmfh6Mt5FMNST1o7taB", "0LRiVlbXVwe8ozu4KbZxd12mvaB"],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.PayOrderRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Orders.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Payments

<details><summary><code>client.payments.<a href="/src/api/resources/payments/client/Client.ts">list</a>({ ...params }) -> core.Page<Square.Payment></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a list of payments taken by the account making the request.

Results are eventually consistent, and new payments or changes to payments might take several
seconds to appear.

The maximum results per page is 100.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.payments.list();
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
const page = await client.payments.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.ListPaymentsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Payments.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.payments.<a href="/src/api/resources/payments/client/Client.ts">create</a>({ ...params }) -> Square.CreatePaymentResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a payment using the provided source. You can use this endpoint
to charge a card (credit/debit card or  
Square gift card) or record a payment that the seller received outside of Square
(cash payment from a buyer or a payment that an external entity
processed on behalf of the seller).

The endpoint creates a
`Payment` object and returns it in the response.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.payments.create({
    sourceId: "ccof:GaJGNaZa8x4OgDJn4GB",
    idempotencyKey: "7b0f3ec5-086a-4871-8f13-3c81b3875218",
    amountMoney: {
        amount: 1000,
        currency: "USD",
    },
    appFeeMoney: {
        amount: 10,
        currency: "USD",
    },
    autocomplete: true,
    customerId: "W92WH6P11H4Z77CTET0RNTGFW8",
    locationId: "L88917AVBK2S5",
    referenceId: "123456",
    note: "Brief description",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.CreatePaymentRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Payments.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.payments.<a href="/src/api/resources/payments/client/Client.ts">cancelByIdempotencyKey</a>({ ...params }) -> Square.CancelPaymentByIdempotencyKeyResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Cancels (voids) a payment identified by the idempotency key that is specified in the
request.

Use this method when the status of a `CreatePayment` request is unknown (for example, after you send a
`CreatePayment` request, a network error occurs and you do not get a response). In this case, you can
direct Square to cancel the payment using this endpoint. In the request, you provide the same
idempotency key that you provided in your `CreatePayment` request that you want to cancel. After
canceling the payment, you can submit your `CreatePayment` request again.

Note that if no payment with the specified idempotency key is found, no action is taken and the endpoint
returns successfully.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.payments.cancelByIdempotencyKey({
    idempotencyKey: "a7e36d40-d24b-11e8-b568-0800200c9a66",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.CancelPaymentByIdempotencyKeyRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Payments.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.payments.<a href="/src/api/resources/payments/client/Client.ts">get</a>({ ...params }) -> Square.GetPaymentResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves details for a specific payment.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.payments.get({
    paymentId: "payment_id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.GetPaymentsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Payments.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.payments.<a href="/src/api/resources/payments/client/Client.ts">update</a>({ ...params }) -> Square.UpdatePaymentResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates a payment with the APPROVED status.
You can update the `amount_money` and `tip_money` using this endpoint.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.payments.update({
    paymentId: "payment_id",
    payment: {
        amountMoney: {
            amount: 1000,
            currency: "USD",
        },
        tipMoney: {
            amount: 100,
            currency: "USD",
        },
        versionToken: "ODhwVQ35xwlzRuoZEwKXucfu7583sPTzK48c5zoGd0g6o",
    },
    idempotencyKey: "956f8b13-e4ec-45d6-85e8-d1d95ef0c5de",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.UpdatePaymentRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Payments.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.payments.<a href="/src/api/resources/payments/client/Client.ts">cancel</a>({ ...params }) -> Square.CancelPaymentResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Cancels (voids) a payment. You can use this endpoint to cancel a payment with
the APPROVED `status`.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.payments.cancel({
    paymentId: "payment_id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.CancelPaymentsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Payments.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.payments.<a href="/src/api/resources/payments/client/Client.ts">complete</a>({ ...params }) -> Square.CompletePaymentResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Completes (captures) a payment.
By default, payments are set to complete immediately after they are created.

You can use this endpoint to complete a payment with the APPROVED `status`.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.payments.complete({
    paymentId: "payment_id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.CompletePaymentRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Payments.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Payouts

<details><summary><code>client.payouts.<a href="/src/api/resources/payouts/client/Client.ts">list</a>({ ...params }) -> core.Page<Square.Payout></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a list of all payouts for the default location.
You can filter payouts by location ID, status, time range, and order them in ascending or descending order.
To call this endpoint, set `PAYOUTS_READ` for the OAuth scope.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.payouts.list();
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
const page = await client.payouts.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.ListPayoutsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Payouts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.payouts.<a href="/src/api/resources/payouts/client/Client.ts">get</a>({ ...params }) -> Square.GetPayoutResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves details of a specific payout identified by a payout ID.
To call this endpoint, set `PAYOUTS_READ` for the OAuth scope.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.payouts.get({
    payoutId: "payout_id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.GetPayoutsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Payouts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.payouts.<a href="/src/api/resources/payouts/client/Client.ts">listEntries</a>({ ...params }) -> core.Page<Square.PayoutEntry></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a list of all payout entries for a specific payout.
To call this endpoint, set `PAYOUTS_READ` for the OAuth scope.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.payouts.listEntries({
    payoutId: "payout_id",
});
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
const page = await client.payouts.listEntries({
    payoutId: "payout_id",
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.ListEntriesPayoutsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Payouts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Refunds

<details><summary><code>client.refunds.<a href="/src/api/resources/refunds/client/Client.ts">list</a>({ ...params }) -> core.Page<Square.PaymentRefund></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a list of refunds for the account making the request.

Results are eventually consistent, and new refunds or changes to refunds might take several
seconds to appear.

The maximum results per page is 100.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.refunds.list();
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
const page = await client.refunds.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.ListRefundsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Refunds.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.refunds.<a href="/src/api/resources/refunds/client/Client.ts">refundPayment</a>({ ...params }) -> Square.RefundPaymentResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Refunds a payment. You can refund the entire payment amount or a
portion of it. You can use this endpoint to refund a card payment or record a
refund of a cash or external payment. For more information, see
[Refund Payment](https://developer.squareup.com/docs/payments-api/refund-payments).

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.refunds.refundPayment({
    idempotencyKey: "9b7f2dcf-49da-4411-b23e-a2d6af21333a",
    amountMoney: {
        amount: 1000,
        currency: "USD",
    },
    appFeeMoney: {
        amount: 10,
        currency: "USD",
    },
    paymentId: "R2B3Z8WMVt3EAmzYWLZvz7Y69EbZY",
    reason: "Example",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.RefundPaymentRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Refunds.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.refunds.<a href="/src/api/resources/refunds/client/Client.ts">get</a>({ ...params }) -> Square.GetPaymentRefundResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a specific refund using the `refund_id`.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.refunds.get({
    refundId: "refund_id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.GetRefundsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Refunds.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Sites

<details><summary><code>client.sites.<a href="/src/api/resources/sites/client/Client.ts">list</a>() -> Square.ListSitesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists the Square Online sites that belong to a seller. Sites are listed in descending order by the `created_at` date.

**Note:** Square Online APIs are publicly available as part of an early access program. For more information, see [Early access program for Square Online APIs](https://developer.squareup.com/docs/online-api#early-access-program-for-square-online-apis).

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sites.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `Sites.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Snippets

<details><summary><code>client.snippets.<a href="/src/api/resources/snippets/client/Client.ts">get</a>({ ...params }) -> Square.GetSnippetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves your snippet from a Square Online site. A site can contain snippets from multiple snippet applications, but you can retrieve only the snippet that was added by your application.

You can call [ListSites](api-endpoint:Sites-ListSites) to get the IDs of the sites that belong to a seller.

**Note:** Square Online APIs are publicly available as part of an early access program. For more information, see [Early access program for Square Online APIs](https://developer.squareup.com/docs/online-api#early-access-program-for-square-online-apis).

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.snippets.get({
    siteId: "site_id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.GetSnippetsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Snippets.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.snippets.<a href="/src/api/resources/snippets/client/Client.ts">upsert</a>({ ...params }) -> Square.UpsertSnippetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Adds a snippet to a Square Online site or updates the existing snippet on the site.
The snippet code is appended to the end of the `head` element on every page of the site, except checkout pages. A snippet application can add one snippet to a given site.

You can call [ListSites](api-endpoint:Sites-ListSites) to get the IDs of the sites that belong to a seller.

**Note:** Square Online APIs are publicly available as part of an early access program. For more information, see [Early access program for Square Online APIs](https://developer.squareup.com/docs/online-api#early-access-program-for-square-online-apis).

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.snippets.upsert({
    siteId: "site_id",
    snippet: {
        content: "<script>var js = 1;</script>",
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.UpsertSnippetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Snippets.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.snippets.<a href="/src/api/resources/snippets/client/Client.ts">delete</a>({ ...params }) -> Square.DeleteSnippetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Removes your snippet from a Square Online site.

You can call [ListSites](api-endpoint:Sites-ListSites) to get the IDs of the sites that belong to a seller.

**Note:** Square Online APIs are publicly available as part of an early access program. For more information, see [Early access program for Square Online APIs](https://developer.squareup.com/docs/online-api#early-access-program-for-square-online-apis).

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.snippets.delete({
    siteId: "site_id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.DeleteSnippetsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Snippets.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Subscriptions

<details><summary><code>client.subscriptions.<a href="/src/api/resources/subscriptions/client/Client.ts">create</a>({ ...params }) -> Square.CreateSubscriptionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Enrolls a customer in a subscription.

If you provide a card on file in the request, Square charges the card for
the subscription. Otherwise, Square sends an invoice to the customer's email
address. The subscription starts immediately, unless the request includes
the optional `start_date`. Each individual subscription is associated with a particular location.

For more information, see [Create a subscription](https://developer.squareup.com/docs/subscriptions-api/manage-subscriptions#create-a-subscription).

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.subscriptions.create({
    idempotencyKey: "8193148c-9586-11e6-99f9-28cfe92138cf",
    locationId: "S8GWD5R9QB376",
    planVariationId: "6JHXF3B2CW3YKHDV4XEM674H",
    customerId: "CHFGVKYY8RSV93M5KCYTG4PN0G",
    startDate: "2023-06-20",
    cardId: "ccof:qy5x8hHGYsgLrp4Q4GB",
    timezone: "America/Los_Angeles",
    source: {
        name: "My Application",
    },
    phases: [
        {
            ordinal: 0,
            orderTemplateId: "U2NaowWxzXwpsZU697x7ZHOAnCNZY",
        },
    ],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.CreateSubscriptionRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Subscriptions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.subscriptions.<a href="/src/api/resources/subscriptions/client/Client.ts">bulkSwapPlan</a>({ ...params }) -> Square.BulkSwapPlanResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Schedules a plan variation change for all active subscriptions under a given plan
variation. For more information, see [Swap Subscription Plan Variations](https://developer.squareup.com/docs/subscriptions-api/swap-plan-variations).

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.subscriptions.bulkSwapPlan({
    newPlanVariationId: "FQ7CDXXWSLUJRPM3GFJSJGZ7",
    oldPlanVariationId: "6JHXF3B2CW3YKHDV4XEM674H",
    locationId: "S8GWD5R9QB376",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.BulkSwapPlanRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Subscriptions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.subscriptions.<a href="/src/api/resources/subscriptions/client/Client.ts">search</a>({ ...params }) -> Square.SearchSubscriptionsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Searches for subscriptions.

Results are ordered chronologically by subscription creation date. If
the request specifies more than one location ID,
the endpoint orders the result
by location ID, and then by creation date within each location. If no locations are given
in the query, all locations are searched.

You can also optionally specify `customer_ids` to search by customer.
If left unset, all customers
associated with the specified locations are returned.
If the request specifies customer IDs, the endpoint orders results
first by location, within location by customer ID, and within
customer by subscription creation date.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.subscriptions.search({
    query: {
        filter: {
            customerIds: ["CHFGVKYY8RSV93M5KCYTG4PN0G"],
            locationIds: ["S8GWD5R9QB376"],
            sourceNames: ["My App"],
        },
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.SearchSubscriptionsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Subscriptions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.subscriptions.<a href="/src/api/resources/subscriptions/client/Client.ts">get</a>({ ...params }) -> Square.GetSubscriptionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a specific subscription.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.subscriptions.get({
    subscriptionId: "subscription_id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.GetSubscriptionsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Subscriptions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.subscriptions.<a href="/src/api/resources/subscriptions/client/Client.ts">update</a>({ ...params }) -> Square.UpdateSubscriptionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates a subscription by modifying or clearing `subscription` field values.
To clear a field, set its value to `null`.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.subscriptions.update({
    subscriptionId: "subscription_id",
    subscription: {
        cardId: "{NEW CARD ID}",
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.UpdateSubscriptionRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Subscriptions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.subscriptions.<a href="/src/api/resources/subscriptions/client/Client.ts">deleteAction</a>({ ...params }) -> Square.DeleteSubscriptionActionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes a scheduled action for a subscription.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.subscriptions.deleteAction({
    subscriptionId: "subscription_id",
    actionId: "action_id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.DeleteActionSubscriptionsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Subscriptions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.subscriptions.<a href="/src/api/resources/subscriptions/client/Client.ts">changeBillingAnchorDate</a>({ ...params }) -> Square.ChangeBillingAnchorDateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Changes the [billing anchor date](https://developer.squareup.com/docs/subscriptions-api/subscription-billing#billing-dates)
for a subscription.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.subscriptions.changeBillingAnchorDate({
    subscriptionId: "subscription_id",
    monthlyBillingAnchorDate: 1,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.ChangeBillingAnchorDateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Subscriptions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.subscriptions.<a href="/src/api/resources/subscriptions/client/Client.ts">cancel</a>({ ...params }) -> Square.CancelSubscriptionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Schedules a `CANCEL` action to cancel an active subscription. This
sets the `canceled_date` field to the end of the active billing period. After this date,
the subscription status changes from ACTIVE to CANCELED.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.subscriptions.cancel({
    subscriptionId: "subscription_id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.CancelSubscriptionsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Subscriptions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.subscriptions.<a href="/src/api/resources/subscriptions/client/Client.ts">listEvents</a>({ ...params }) -> core.Page<Square.SubscriptionEvent></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists all [events](https://developer.squareup.com/docs/subscriptions-api/actions-events) for a specific subscription.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.subscriptions.listEvents({
    subscriptionId: "subscription_id",
});
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
const page = await client.subscriptions.listEvents({
    subscriptionId: "subscription_id",
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.ListEventsSubscriptionsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Subscriptions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.subscriptions.<a href="/src/api/resources/subscriptions/client/Client.ts">pause</a>({ ...params }) -> Square.PauseSubscriptionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Schedules a `PAUSE` action to pause an active subscription.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.subscriptions.pause({
    subscriptionId: "subscription_id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.PauseSubscriptionRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Subscriptions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.subscriptions.<a href="/src/api/resources/subscriptions/client/Client.ts">resume</a>({ ...params }) -> Square.ResumeSubscriptionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Schedules a `RESUME` action to resume a paused or a deactivated subscription.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.subscriptions.resume({
    subscriptionId: "subscription_id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.ResumeSubscriptionRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Subscriptions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.subscriptions.<a href="/src/api/resources/subscriptions/client/Client.ts">swapPlan</a>({ ...params }) -> Square.SwapPlanResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Schedules a `SWAP_PLAN` action to swap a subscription plan variation in an existing subscription.
For more information, see [Swap Subscription Plan Variations](https://developer.squareup.com/docs/subscriptions-api/swap-plan-variations).

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.subscriptions.swapPlan({
    subscriptionId: "subscription_id",
    newPlanVariationId: "FQ7CDXXWSLUJRPM3GFJSJGZ7",
    phases: [
        {
            ordinal: 0,
            orderTemplateId: "uhhnjH9osVv3shUADwaC0b3hNxQZY",
        },
    ],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.SwapPlanRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Subscriptions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## TeamMembers

<details><summary><code>client.teamMembers.<a href="/src/api/resources/teamMembers/client/Client.ts">create</a>({ ...params }) -> Square.CreateTeamMemberResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a single `TeamMember` object. The `TeamMember` object is returned on successful creates.
You must provide the following values in your request to this endpoint:

- `given_name`
- `family_name`

Learn about [Troubleshooting the Team API](https://developer.squareup.com/docs/team/troubleshooting#createteammember).

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.teamMembers.create({
    idempotencyKey: "idempotency-key-0",
    teamMember: {
        referenceId: "reference_id_1",
        status: "ACTIVE",
        givenName: "Joe",
        familyName: "Doe",
        emailAddress: "joe_doe@gmail.com",
        phoneNumber: "+14159283333",
        assignedLocations: {
            assignmentType: "EXPLICIT_LOCATIONS",
            locationIds: ["YSGH2WBKG94QZ", "GA2Y9HSJ8KRYT"],
        },
        wageSetting: {
            jobAssignments: [
                {
                    payType: "SALARY",
                    annualRate: {
                        amount: 3000000,
                        currency: "USD",
                    },
                    weeklyHours: 40,
                    jobId: "FjS8x95cqHiMenw4f1NAUH4P",
                },
                {
                    payType: "HOURLY",
                    hourlyRate: {
                        amount: 2000,
                        currency: "USD",
                    },
                    jobId: "VDNpRv8da51NU8qZFC5zDWpF",
                },
            ],
            isOvertimeExempt: true,
        },
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.CreateTeamMemberRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TeamMembers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.teamMembers.<a href="/src/api/resources/teamMembers/client/Client.ts">batchCreate</a>({ ...params }) -> Square.BatchCreateTeamMembersResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates multiple `TeamMember` objects. The created `TeamMember` objects are returned on successful creates.
This process is non-transactional and processes as much of the request as possible. If one of the creates in
the request cannot be successfully processed, the request is not marked as failed, but the body of the response
contains explicit error information for the failed create.

Learn about [Troubleshooting the Team API](https://developer.squareup.com/docs/team/troubleshooting#bulk-create-team-members).

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.teamMembers.batchCreate({
    teamMembers: {
        "idempotency-key-1": {
            teamMember: {
                referenceId: "reference_id_1",
                givenName: "Joe",
                familyName: "Doe",
                emailAddress: "joe_doe@gmail.com",
                phoneNumber: "+14159283333",
                assignedLocations: {
                    assignmentType: "EXPLICIT_LOCATIONS",
                    locationIds: ["YSGH2WBKG94QZ", "GA2Y9HSJ8KRYT"],
                },
            },
        },
        "idempotency-key-2": {
            teamMember: {
                referenceId: "reference_id_2",
                givenName: "Jane",
                familyName: "Smith",
                emailAddress: "jane_smith@gmail.com",
                phoneNumber: "+14159223334",
                assignedLocations: {
                    assignmentType: "ALL_CURRENT_AND_FUTURE_LOCATIONS",
                },
            },
        },
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.BatchCreateTeamMembersRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TeamMembers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.teamMembers.<a href="/src/api/resources/teamMembers/client/Client.ts">batchUpdate</a>({ ...params }) -> Square.BatchUpdateTeamMembersResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates multiple `TeamMember` objects. The updated `TeamMember` objects are returned on successful updates.
This process is non-transactional and processes as much of the request as possible. If one of the updates in
the request cannot be successfully processed, the request is not marked as failed, but the body of the response
contains explicit error information for the failed update.
Learn about [Troubleshooting the Team API](https://developer.squareup.com/docs/team/troubleshooting#bulk-update-team-members).

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.teamMembers.batchUpdate({
    teamMembers: {
        "AFMwA08kR-MIF-3Vs0OE": {
            teamMember: {
                referenceId: "reference_id_2",
                isOwner: false,
                status: "ACTIVE",
                givenName: "Jane",
                familyName: "Smith",
                emailAddress: "jane_smith@gmail.com",
                phoneNumber: "+14159223334",
                assignedLocations: {
                    assignmentType: "ALL_CURRENT_AND_FUTURE_LOCATIONS",
                },
            },
        },
        "fpgteZNMaf0qOK-a4t6P": {
            teamMember: {
                referenceId: "reference_id_1",
                isOwner: false,
                status: "ACTIVE",
                givenName: "Joe",
                familyName: "Doe",
                emailAddress: "joe_doe@gmail.com",
                phoneNumber: "+14159283333",
                assignedLocations: {
                    assignmentType: "EXPLICIT_LOCATIONS",
                    locationIds: ["YSGH2WBKG94QZ", "GA2Y9HSJ8KRYT"],
                },
            },
        },
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.BatchUpdateTeamMembersRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TeamMembers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.teamMembers.<a href="/src/api/resources/teamMembers/client/Client.ts">search</a>({ ...params }) -> Square.SearchTeamMembersResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a paginated list of `TeamMember` objects for a business.
The list can be filtered by location IDs, `ACTIVE` or `INACTIVE` status, or whether
the team member is the Square account owner.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.teamMembers.search({
    query: {
        filter: {
            locationIds: ["0G5P3VGACMMQZ"],
            status: "ACTIVE",
        },
    },
    limit: 10,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.SearchTeamMembersRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TeamMembers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.teamMembers.<a href="/src/api/resources/teamMembers/client/Client.ts">get</a>({ ...params }) -> Square.GetTeamMemberResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a `TeamMember` object for the given `TeamMember.id`.
Learn about [Troubleshooting the Team API](https://developer.squareup.com/docs/team/troubleshooting#retrieve-a-team-member).

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.teamMembers.get({
    teamMemberId: "team_member_id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.GetTeamMembersRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TeamMembers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.teamMembers.<a href="/src/api/resources/teamMembers/client/Client.ts">update</a>({ ...params }) -> Square.UpdateTeamMemberResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates a single `TeamMember` object. The `TeamMember` object is returned on successful updates.
Learn about [Troubleshooting the Team API](https://developer.squareup.com/docs/team/troubleshooting#update-a-team-member).

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.teamMembers.update({
    teamMemberId: "team_member_id",
    body: {
        teamMember: {
            referenceId: "reference_id_1",
            status: "ACTIVE",
            givenName: "Joe",
            familyName: "Doe",
            emailAddress: "joe_doe@gmail.com",
            phoneNumber: "+14159283333",
            assignedLocations: {
                assignmentType: "EXPLICIT_LOCATIONS",
                locationIds: ["YSGH2WBKG94QZ", "GA2Y9HSJ8KRYT"],
            },
            wageSetting: {
                jobAssignments: [
                    {
                        payType: "SALARY",
                        annualRate: {
                            amount: 3000000,
                            currency: "USD",
                        },
                        weeklyHours: 40,
                        jobId: "FjS8x95cqHiMenw4f1NAUH4P",
                    },
                    {
                        payType: "HOURLY",
                        hourlyRate: {
                            amount: 1200,
                            currency: "USD",
                        },
                        jobId: "VDNpRv8da51NU8qZFC5zDWpF",
                    },
                ],
                isOvertimeExempt: true,
            },
        },
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.UpdateTeamMembersRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TeamMembers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Team

<details><summary><code>client.team.<a href="/src/api/resources/team/client/Client.ts">listJobs</a>({ ...params }) -> Square.ListJobsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists jobs in a seller account. Results are sorted by title in ascending order.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.team.listJobs();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.ListJobsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Team.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.team.<a href="/src/api/resources/team/client/Client.ts">createJob</a>({ ...params }) -> Square.CreateJobResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a job in a seller account. A job defines a title and tip eligibility. Note that
compensation is defined in a [job assignment](entity:JobAssignment) in a team member's wage setting.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.team.createJob({
    job: {
        title: "Cashier",
        isTipEligible: true,
    },
    idempotencyKey: "idempotency-key-0",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.CreateJobRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Team.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.team.<a href="/src/api/resources/team/client/Client.ts">retrieveJob</a>({ ...params }) -> Square.RetrieveJobResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a specified job.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.team.retrieveJob({
    jobId: "job_id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.RetrieveJobRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Team.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.team.<a href="/src/api/resources/team/client/Client.ts">updateJob</a>({ ...params }) -> Square.UpdateJobResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates the title or tip eligibility of a job. Changes to the title propagate to all
`JobAssignment`, `Shift`, and `TeamMemberWage` objects that reference the job ID. Changes to
tip eligibility propagate to all `TeamMemberWage` objects that reference the job ID.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.team.updateJob({
    jobId: "job_id",
    job: {
        title: "Cashier 1",
        isTipEligible: true,
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.UpdateJobRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Team.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Terminal

<details><summary><code>client.terminal.<a href="/src/api/resources/terminal/client/Client.ts">dismissTerminalAction</a>({ ...params }) -> Square.DismissTerminalActionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Dismisses a Terminal action request if the status and type of the request permits it.

See [Link and Dismiss Actions](https://developer.squareup.com/docs/terminal-api/advanced-features/custom-workflows/link-and-dismiss-actions) for more details.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.terminal.dismissTerminalAction({
    actionId: "action_id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.DismissTerminalActionRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Terminal.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.terminal.<a href="/src/api/resources/terminal/client/Client.ts">dismissTerminalCheckout</a>({ ...params }) -> Square.DismissTerminalCheckoutResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Dismisses a Terminal checkout request if the status and type of the request permits it.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.terminal.dismissTerminalCheckout({
    checkoutId: "checkout_id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.DismissTerminalCheckoutRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Terminal.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.terminal.<a href="/src/api/resources/terminal/client/Client.ts">dismissTerminalRefund</a>({ ...params }) -> Square.DismissTerminalRefundResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Dismisses a Terminal refund request if the status and type of the request permits it.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.terminal.dismissTerminalRefund({
    terminalRefundId: "terminal_refund_id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.DismissTerminalRefundRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Terminal.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Vendors

<details><summary><code>client.vendors.<a href="/src/api/resources/vendors/client/Client.ts">batchCreate</a>({ ...params }) -> Square.BatchCreateVendorsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates one or more [Vendor](entity:Vendor) objects to represent suppliers to a seller.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.vendors.batchCreate({
    vendors: {
        "8fc6a5b0-9fe8-4b46-b46b-2ef95793abbe": {
            name: "Joe's Fresh Seafood",
            address: {
                addressLine1: "505 Electric Ave",
                addressLine2: "Suite 600",
                locality: "New York",
                administrativeDistrictLevel1: "NY",
                postalCode: "10003",
                country: "US",
            },
            contacts: [
                {
                    name: "Joe Burrow",
                    emailAddress: "joe@joesfreshseafood.com",
                    phoneNumber: "1-212-555-4250",
                    ordinal: 1,
                },
            ],
            accountNumber: "4025391",
            note: "a vendor",
        },
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.BatchCreateVendorsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Vendors.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.vendors.<a href="/src/api/resources/vendors/client/Client.ts">batchGet</a>({ ...params }) -> Square.BatchGetVendorsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves one or more vendors of specified [Vendor](entity:Vendor) IDs.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.vendors.batchGet({
    vendorIds: ["INV_V_JDKYHBWT1D4F8MFH63DBMEN8Y4"],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.BatchGetVendorsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Vendors.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.vendors.<a href="/src/api/resources/vendors/client/Client.ts">batchUpdate</a>({ ...params }) -> Square.BatchUpdateVendorsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates one or more of existing [Vendor](entity:Vendor) objects as suppliers to a seller.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.vendors.batchUpdate({
    vendors: {
        FMCYHBWT1TPL8MFH52PBMEN92A: {
            vendor: {},
        },
        INV_V_JDKYHBWT1D4F8MFH63DBMEN8Y4: {
            vendor: {},
        },
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.BatchUpdateVendorsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Vendors.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.vendors.<a href="/src/api/resources/vendors/client/Client.ts">create</a>({ ...params }) -> Square.CreateVendorResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a single [Vendor](entity:Vendor) object to represent a supplier to a seller.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.vendors.create({
    idempotencyKey: "8fc6a5b0-9fe8-4b46-b46b-2ef95793abbe",
    vendor: {
        name: "Joe's Fresh Seafood",
        address: {
            addressLine1: "505 Electric Ave",
            addressLine2: "Suite 600",
            locality: "New York",
            administrativeDistrictLevel1: "NY",
            postalCode: "10003",
            country: "US",
        },
        contacts: [
            {
                name: "Joe Burrow",
                emailAddress: "joe@joesfreshseafood.com",
                phoneNumber: "1-212-555-4250",
                ordinal: 1,
            },
        ],
        accountNumber: "4025391",
        note: "a vendor",
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.CreateVendorRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Vendors.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.vendors.<a href="/src/api/resources/vendors/client/Client.ts">search</a>({ ...params }) -> Square.SearchVendorsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Searches for vendors using a filter against supported [Vendor](entity:Vendor) properties and a supported sorter.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.vendors.search();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.SearchVendorsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Vendors.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.vendors.<a href="/src/api/resources/vendors/client/Client.ts">get</a>({ ...params }) -> Square.GetVendorResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves the vendor of a specified [Vendor](entity:Vendor) ID.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.vendors.get({
    vendorId: "vendor_id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.GetVendorsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Vendors.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.vendors.<a href="/src/api/resources/vendors/client/Client.ts">update</a>({ ...params }) -> Square.UpdateVendorResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates an existing [Vendor](entity:Vendor) object as a supplier to a seller.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.vendors.update({
    vendorId: "vendor_id",
    body: {
        idempotencyKey: "8fc6a5b0-9fe8-4b46-b46b-2ef95793abbe",
        vendor: {
            id: "INV_V_JDKYHBWT1D4F8MFH63DBMEN8Y4",
            name: "Jack's Chicken Shack",
            version: 1,
            status: "ACTIVE",
        },
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.UpdateVendorsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Vendors.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Bookings CustomAttributeDefinitions

<details><summary><code>client.bookings.customAttributeDefinitions.<a href="/src/api/resources/bookings/resources/customAttributeDefinitions/client/Client.ts">list</a>({ ...params }) -> core.Page<Square.CustomAttributeDefinition></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get all bookings custom attribute definitions.

To call this endpoint with buyer-level permissions, set `APPOINTMENTS_READ` for the OAuth scope.
To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_READ` and `APPOINTMENTS_READ` for the OAuth scope.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.bookings.customAttributeDefinitions.list();
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
const page = await client.bookings.customAttributeDefinitions.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.bookings.ListCustomAttributeDefinitionsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomAttributeDefinitions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.bookings.customAttributeDefinitions.<a href="/src/api/resources/bookings/resources/customAttributeDefinitions/client/Client.ts">create</a>({ ...params }) -> Square.CreateBookingCustomAttributeDefinitionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a bookings custom attribute definition.

To call this endpoint with buyer-level permissions, set `APPOINTMENTS_WRITE` for the OAuth scope.
To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_WRITE` and `APPOINTMENTS_WRITE` for the OAuth scope.

For calls to this endpoint with seller-level permissions to succeed, the seller must have subscribed to _Appointments Plus_
or _Appointments Premium_.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.bookings.customAttributeDefinitions.create({
    customAttributeDefinition: {},
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.bookings.CreateBookingCustomAttributeDefinitionRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomAttributeDefinitions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.bookings.customAttributeDefinitions.<a href="/src/api/resources/bookings/resources/customAttributeDefinitions/client/Client.ts">get</a>({ ...params }) -> Square.RetrieveBookingCustomAttributeDefinitionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a bookings custom attribute definition.

To call this endpoint with buyer-level permissions, set `APPOINTMENTS_READ` for the OAuth scope.
To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_READ` and `APPOINTMENTS_READ` for the OAuth scope.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.bookings.customAttributeDefinitions.get({
    key: "key",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.bookings.GetCustomAttributeDefinitionsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomAttributeDefinitions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.bookings.customAttributeDefinitions.<a href="/src/api/resources/bookings/resources/customAttributeDefinitions/client/Client.ts">update</a>({ ...params }) -> Square.UpdateBookingCustomAttributeDefinitionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates a bookings custom attribute definition.

To call this endpoint with buyer-level permissions, set `APPOINTMENTS_WRITE` for the OAuth scope.
To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_WRITE` and `APPOINTMENTS_WRITE` for the OAuth scope.

For calls to this endpoint with seller-level permissions to succeed, the seller must have subscribed to _Appointments Plus_
or _Appointments Premium_.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.bookings.customAttributeDefinitions.update({
    key: "key",
    customAttributeDefinition: {},
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.bookings.UpdateBookingCustomAttributeDefinitionRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomAttributeDefinitions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.bookings.customAttributeDefinitions.<a href="/src/api/resources/bookings/resources/customAttributeDefinitions/client/Client.ts">delete</a>({ ...params }) -> Square.DeleteBookingCustomAttributeDefinitionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes a bookings custom attribute definition.

To call this endpoint with buyer-level permissions, set `APPOINTMENTS_WRITE` for the OAuth scope.
To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_WRITE` and `APPOINTMENTS_WRITE` for the OAuth scope.

For calls to this endpoint with seller-level permissions to succeed, the seller must have subscribed to _Appointments Plus_
or _Appointments Premium_.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.bookings.customAttributeDefinitions.delete({
    key: "key",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.bookings.DeleteCustomAttributeDefinitionsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomAttributeDefinitions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Bookings CustomAttributes

<details><summary><code>client.bookings.customAttributes.<a href="/src/api/resources/bookings/resources/customAttributes/client/Client.ts">batchDelete</a>({ ...params }) -> Square.BulkDeleteBookingCustomAttributesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Bulk deletes bookings custom attributes.

To call this endpoint with buyer-level permissions, set `APPOINTMENTS_WRITE` for the OAuth scope.
To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_WRITE` and `APPOINTMENTS_WRITE` for the OAuth scope.

For calls to this endpoint with seller-level permissions to succeed, the seller must have subscribed to _Appointments Plus_
or _Appointments Premium_.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.bookings.customAttributes.batchDelete({
    values: {
        key: {
            bookingId: "booking_id",
            key: "key",
        },
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.bookings.BulkDeleteBookingCustomAttributesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomAttributes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.bookings.customAttributes.<a href="/src/api/resources/bookings/resources/customAttributes/client/Client.ts">batchUpsert</a>({ ...params }) -> Square.BulkUpsertBookingCustomAttributesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Bulk upserts bookings custom attributes.

To call this endpoint with buyer-level permissions, set `APPOINTMENTS_WRITE` for the OAuth scope.
To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_WRITE` and `APPOINTMENTS_WRITE` for the OAuth scope.

For calls to this endpoint with seller-level permissions to succeed, the seller must have subscribed to _Appointments Plus_
or _Appointments Premium_.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.bookings.customAttributes.batchUpsert({
    values: {
        key: {
            bookingId: "booking_id",
            customAttribute: {},
        },
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.bookings.BulkUpsertBookingCustomAttributesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomAttributes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.bookings.customAttributes.<a href="/src/api/resources/bookings/resources/customAttributes/client/Client.ts">list</a>({ ...params }) -> core.Page<Square.CustomAttribute></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists a booking's custom attributes.

To call this endpoint with buyer-level permissions, set `APPOINTMENTS_READ` for the OAuth scope.
To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_READ` and `APPOINTMENTS_READ` for the OAuth scope.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.bookings.customAttributes.list({
    bookingId: "booking_id",
});
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
const page = await client.bookings.customAttributes.list({
    bookingId: "booking_id",
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.bookings.ListCustomAttributesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomAttributes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.bookings.customAttributes.<a href="/src/api/resources/bookings/resources/customAttributes/client/Client.ts">get</a>({ ...params }) -> Square.RetrieveBookingCustomAttributeResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a bookings custom attribute.

To call this endpoint with buyer-level permissions, set `APPOINTMENTS_READ` for the OAuth scope.
To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_READ` and `APPOINTMENTS_READ` for the OAuth scope.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.bookings.customAttributes.get({
    bookingId: "booking_id",
    key: "key",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.bookings.GetCustomAttributesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomAttributes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.bookings.customAttributes.<a href="/src/api/resources/bookings/resources/customAttributes/client/Client.ts">upsert</a>({ ...params }) -> Square.UpsertBookingCustomAttributeResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Upserts a bookings custom attribute.

To call this endpoint with buyer-level permissions, set `APPOINTMENTS_WRITE` for the OAuth scope.
To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_WRITE` and `APPOINTMENTS_WRITE` for the OAuth scope.

For calls to this endpoint with seller-level permissions to succeed, the seller must have subscribed to _Appointments Plus_
or _Appointments Premium_.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.bookings.customAttributes.upsert({
    bookingId: "booking_id",
    key: "key",
    customAttribute: {},
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.bookings.UpsertBookingCustomAttributeRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomAttributes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.bookings.customAttributes.<a href="/src/api/resources/bookings/resources/customAttributes/client/Client.ts">delete</a>({ ...params }) -> Square.DeleteBookingCustomAttributeResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes a bookings custom attribute.

To call this endpoint with buyer-level permissions, set `APPOINTMENTS_WRITE` for the OAuth scope.
To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_WRITE` and `APPOINTMENTS_WRITE` for the OAuth scope.

For calls to this endpoint with seller-level permissions to succeed, the seller must have subscribed to _Appointments Plus_
or _Appointments Premium_.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.bookings.customAttributes.delete({
    bookingId: "booking_id",
    key: "key",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.bookings.DeleteCustomAttributesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomAttributes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Bookings LocationProfiles

<details><summary><code>client.bookings.locationProfiles.<a href="/src/api/resources/bookings/resources/locationProfiles/client/Client.ts">list</a>({ ...params }) -> core.Page<Square.LocationBookingProfile></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists location booking profiles of a seller.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.bookings.locationProfiles.list();
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
const page = await client.bookings.locationProfiles.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.bookings.ListLocationProfilesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LocationProfiles.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Bookings TeamMemberProfiles

<details><summary><code>client.bookings.teamMemberProfiles.<a href="/src/api/resources/bookings/resources/teamMemberProfiles/client/Client.ts">list</a>({ ...params }) -> core.Page<Square.TeamMemberBookingProfile></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists booking profiles for team members.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.bookings.teamMemberProfiles.list();
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
const page = await client.bookings.teamMemberProfiles.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.bookings.ListTeamMemberProfilesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TeamMemberProfiles.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.bookings.teamMemberProfiles.<a href="/src/api/resources/bookings/resources/teamMemberProfiles/client/Client.ts">get</a>({ ...params }) -> Square.GetTeamMemberBookingProfileResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a team member's booking profile.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.bookings.teamMemberProfiles.get({
    teamMemberId: "team_member_id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.bookings.GetTeamMemberProfilesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TeamMemberProfiles.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## CashDrawers Shifts

<details><summary><code>client.cashDrawers.shifts.<a href="/src/api/resources/cashDrawers/resources/shifts/client/Client.ts">list</a>({ ...params }) -> core.Page<Square.CashDrawerShiftSummary></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Provides the details for all of the cash drawer shifts for a location
in a date range.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.cashDrawers.shifts.list({
    locationId: "location_id",
});
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
const page = await client.cashDrawers.shifts.list({
    locationId: "location_id",
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.cashDrawers.ListShiftsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Shifts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.cashDrawers.shifts.<a href="/src/api/resources/cashDrawers/resources/shifts/client/Client.ts">get</a>({ ...params }) -> Square.GetCashDrawerShiftResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Provides the summary details for a single cash drawer shift. See
[ListCashDrawerShiftEvents](api-endpoint:CashDrawers-ListCashDrawerShiftEvents) for a list of cash drawer shift events.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.cashDrawers.shifts.get({
    shiftId: "shift_id",
    locationId: "location_id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.cashDrawers.GetShiftsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Shifts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.cashDrawers.shifts.<a href="/src/api/resources/cashDrawers/resources/shifts/client/Client.ts">listEvents</a>({ ...params }) -> core.Page<Square.CashDrawerShiftEvent></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Provides a paginated list of events for a single cash drawer shift.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.cashDrawers.shifts.listEvents({
    shiftId: "shift_id",
    locationId: "location_id",
});
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
const page = await client.cashDrawers.shifts.listEvents({
    shiftId: "shift_id",
    locationId: "location_id",
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.cashDrawers.ListEventsShiftsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Shifts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Catalog Images

<details><summary><code>client.catalog.images.<a href="/src/api/resources/catalog/resources/images/client/Client.ts">create</a>({ ...params }) -> Square.CreateCatalogImageResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Uploads an image file to be represented by a [CatalogImage](entity:CatalogImage) object that can be linked to an existing
[CatalogObject](entity:CatalogObject) instance. The resulting `CatalogImage` is unattached to any `CatalogObject` if the `object_id`
is not specified.

This `CreateCatalogImage` endpoint accepts HTTP multipart/form-data requests with a JSON part and an image file part in
JPEG, PJPEG, PNG, or GIF format. The maximum file size is 15MB.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.catalog.images.create({});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.catalog.CreateImagesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Images.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.catalog.images.<a href="/src/api/resources/catalog/resources/images/client/Client.ts">update</a>({ ...params }) -> Square.UpdateCatalogImageResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Uploads a new image file to replace the existing one in the specified [CatalogImage](entity:CatalogImage) object.

This `UpdateCatalogImage` endpoint accepts HTTP multipart/form-data requests with a JSON part and an image file part in
JPEG, PJPEG, PNG, or GIF format. The maximum file size is 15MB.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.catalog.images.update({
    imageId: "image_id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.catalog.UpdateImagesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Images.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Catalog Object

<details><summary><code>client.catalog.object.<a href="/src/api/resources/catalog/resources/object/client/Client.ts">upsert</a>({ ...params }) -> Square.UpsertCatalogObjectResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a new or updates the specified [CatalogObject](entity:CatalogObject).

To ensure consistency, only one update request is processed at a time per seller account.
While one (batch or non-batch) update request is being processed, other (batched and non-batched)
update requests are rejected with the `429` error code.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.catalog.object.upsert({
    idempotencyKey: "af3d1afc-7212-4300-b463-0bfc5314a5ae",
    object: {
        type: "ITEM",
        id: "id",
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.catalog.UpsertCatalogObjectRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Object_.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.catalog.object.<a href="/src/api/resources/catalog/resources/object/client/Client.ts">get</a>({ ...params }) -> Square.GetCatalogObjectResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a single [CatalogItem](entity:CatalogItem) as a
[CatalogObject](entity:CatalogObject) based on the provided ID. The returned
object includes all of the relevant [CatalogItem](entity:CatalogItem)
information including: [CatalogItemVariation](entity:CatalogItemVariation)
children, references to its
[CatalogModifierList](entity:CatalogModifierList) objects, and the ids of
any [CatalogTax](entity:CatalogTax) objects that apply to it.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.catalog.object.get({
    objectId: "object_id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.catalog.GetObjectRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Object_.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.catalog.object.<a href="/src/api/resources/catalog/resources/object/client/Client.ts">delete</a>({ ...params }) -> Square.DeleteCatalogObjectResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes a single [CatalogObject](entity:CatalogObject) based on the
provided ID and returns the set of successfully deleted IDs in the response.
Deletion is a cascading event such that all children of the targeted object
are also deleted. For example, deleting a [CatalogItem](entity:CatalogItem)
will also delete all of its
[CatalogItemVariation](entity:CatalogItemVariation) children.

To ensure consistency, only one delete request is processed at a time per seller account.
While one (batch or non-batch) delete request is being processed, other (batched and non-batched)
delete requests are rejected with the `429` error code.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.catalog.object.delete({
    objectId: "object_id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.catalog.DeleteObjectRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Object_.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Checkout PaymentLinks

<details><summary><code>client.checkout.paymentLinks.<a href="/src/api/resources/checkout/resources/paymentLinks/client/Client.ts">list</a>({ ...params }) -> core.Page<Square.PaymentLink></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists all payment links.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.checkout.paymentLinks.list();
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
const page = await client.checkout.paymentLinks.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.checkout.ListPaymentLinksRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentLinks.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.checkout.paymentLinks.<a href="/src/api/resources/checkout/resources/paymentLinks/client/Client.ts">create</a>({ ...params }) -> Square.CreatePaymentLinkResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a Square-hosted checkout page. Applications can share the resulting payment link with their buyer to pay for goods and services.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.checkout.paymentLinks.create({
    idempotencyKey: "cd9e25dc-d9f2-4430-aedb-61605070e95f",
    quickPay: {
        name: "Auto Detailing",
        priceMoney: {
            amount: 10000,
            currency: "USD",
        },
        locationId: "A9Y43N9ABXZBP",
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.checkout.CreatePaymentLinkRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentLinks.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.checkout.paymentLinks.<a href="/src/api/resources/checkout/resources/paymentLinks/client/Client.ts">get</a>({ ...params }) -> Square.GetPaymentLinkResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a payment link.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.checkout.paymentLinks.get({
    id: "id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.checkout.GetPaymentLinksRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentLinks.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.checkout.paymentLinks.<a href="/src/api/resources/checkout/resources/paymentLinks/client/Client.ts">update</a>({ ...params }) -> Square.UpdatePaymentLinkResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates a payment link. You can update the `payment_link` fields such as
`description`, `checkout_options`, and `pre_populated_data`.
You cannot update other fields such as the `order_id`, `version`, `URL`, or `timestamp` field.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.checkout.paymentLinks.update({
    id: "id",
    paymentLink: {
        version: 1,
        checkoutOptions: {
            askForShippingAddress: true,
        },
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.checkout.UpdatePaymentLinkRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentLinks.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.checkout.paymentLinks.<a href="/src/api/resources/checkout/resources/paymentLinks/client/Client.ts">delete</a>({ ...params }) -> Square.DeletePaymentLinkResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes a payment link.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.checkout.paymentLinks.delete({
    id: "id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.checkout.DeletePaymentLinksRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentLinks.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Customers CustomAttributeDefinitions

<details><summary><code>client.customers.customAttributeDefinitions.<a href="/src/api/resources/customers/resources/customAttributeDefinitions/client/Client.ts">list</a>({ ...params }) -> core.Page<Square.CustomAttributeDefinition></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists the customer-related [custom attribute definitions](entity:CustomAttributeDefinition) that belong to a Square seller account.

When all response pages are retrieved, the results include all custom attribute definitions
that are visible to the requesting application, including those that are created by other
applications and set to `VISIBILITY_READ_ONLY` or `VISIBILITY_READ_WRITE_VALUES`. Note that
seller-defined custom attributes (also known as custom fields) are always set to `VISIBILITY_READ_WRITE_VALUES`.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.customers.customAttributeDefinitions.list();
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
const page = await client.customers.customAttributeDefinitions.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.customers.ListCustomAttributeDefinitionsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomAttributeDefinitions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.customers.customAttributeDefinitions.<a href="/src/api/resources/customers/resources/customAttributeDefinitions/client/Client.ts">create</a>({ ...params }) -> Square.CreateCustomerCustomAttributeDefinitionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a customer-related [custom attribute definition](entity:CustomAttributeDefinition) for a Square seller account.
Use this endpoint to define a custom attribute that can be associated with customer profiles.

A custom attribute definition specifies the `key`, `visibility`, `schema`, and other properties
for a custom attribute. After the definition is created, you can call
[UpsertCustomerCustomAttribute](api-endpoint:CustomerCustomAttributes-UpsertCustomerCustomAttribute) or
[BulkUpsertCustomerCustomAttributes](api-endpoint:CustomerCustomAttributes-BulkUpsertCustomerCustomAttributes)
to set the custom attribute for customer profiles in the seller's Customer Directory.

Sellers can view all custom attributes in exported customer data, including those set to
`VISIBILITY_HIDDEN`.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customers.customAttributeDefinitions.create({
    customAttributeDefinition: {
        key: "favoritemovie",
        schema: {
            ref: "https://developer-production-s.squarecdn.com/schemas/v1/common.json#squareup.common.String",
        },
        name: "Favorite Movie",
        description: "The favorite movie of the customer.",
        visibility: "VISIBILITY_HIDDEN",
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.customers.CreateCustomerCustomAttributeDefinitionRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomAttributeDefinitions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.customers.customAttributeDefinitions.<a href="/src/api/resources/customers/resources/customAttributeDefinitions/client/Client.ts">get</a>({ ...params }) -> Square.GetCustomerCustomAttributeDefinitionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a customer-related [custom attribute definition](entity:CustomAttributeDefinition) from a Square seller account.

To retrieve a custom attribute definition created by another application, the `visibility`
setting must be `VISIBILITY_READ_ONLY` or `VISIBILITY_READ_WRITE_VALUES`. Note that seller-defined custom attributes
(also known as custom fields) are always set to `VISIBILITY_READ_WRITE_VALUES`.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customers.customAttributeDefinitions.get({
    key: "key",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.customers.GetCustomAttributeDefinitionsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomAttributeDefinitions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.customers.customAttributeDefinitions.<a href="/src/api/resources/customers/resources/customAttributeDefinitions/client/Client.ts">update</a>({ ...params }) -> Square.UpdateCustomerCustomAttributeDefinitionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates a customer-related [custom attribute definition](entity:CustomAttributeDefinition) for a Square seller account.

Use this endpoint to update the following fields: `name`, `description`, `visibility`, or the
`schema` for a `Selection` data type.

Only the definition owner can update a custom attribute definition. Note that sellers can view
all custom attributes in exported customer data, including those set to `VISIBILITY_HIDDEN`.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customers.customAttributeDefinitions.update({
    key: "key",
    customAttributeDefinition: {
        description: "Update the description as desired.",
        visibility: "VISIBILITY_READ_ONLY",
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.customers.UpdateCustomerCustomAttributeDefinitionRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomAttributeDefinitions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.customers.customAttributeDefinitions.<a href="/src/api/resources/customers/resources/customAttributeDefinitions/client/Client.ts">delete</a>({ ...params }) -> Square.DeleteCustomerCustomAttributeDefinitionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes a customer-related [custom attribute definition](entity:CustomAttributeDefinition) from a Square seller account.

Deleting a custom attribute definition also deletes the corresponding custom attribute from
all customer profiles in the seller's Customer Directory.

Only the definition owner can delete a custom attribute definition.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customers.customAttributeDefinitions.delete({
    key: "key",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.customers.DeleteCustomAttributeDefinitionsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomAttributeDefinitions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.customers.customAttributeDefinitions.<a href="/src/api/resources/customers/resources/customAttributeDefinitions/client/Client.ts">batchUpsert</a>({ ...params }) -> Square.BatchUpsertCustomerCustomAttributesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates or updates [custom attributes](entity:CustomAttribute) for customer profiles as a bulk operation.

Use this endpoint to set the value of one or more custom attributes for one or more customer profiles.
A custom attribute is based on a custom attribute definition in a Square seller account, which is
created using the [CreateCustomerCustomAttributeDefinition](api-endpoint:CustomerCustomAttributes-CreateCustomerCustomAttributeDefinition) endpoint.

This `BulkUpsertCustomerCustomAttributes` endpoint accepts a map of 1 to 25 individual upsert
requests and returns a map of individual upsert responses. Each upsert request has a unique ID
and provides a customer ID and custom attribute. Each upsert response is returned with the ID
of the corresponding request.

To create or update a custom attribute owned by another application, the `visibility` setting
must be `VISIBILITY_READ_WRITE_VALUES`. Note that seller-defined custom attributes
(also known as custom fields) are always set to `VISIBILITY_READ_WRITE_VALUES`.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customers.customAttributeDefinitions.batchUpsert({
    values: {
        id1: {
            customerId: "N3NCVYY3WS27HF0HKANA3R9FP8",
            customAttribute: {
                key: "favoritemovie",
                value: "Dune",
            },
        },
        id2: {
            customerId: "SY8EMWRNDN3TQDP2H4KS1QWMMM",
            customAttribute: {
                key: "ownsmovie",
                value: false,
            },
        },
        id3: {
            customerId: "SY8EMWRNDN3TQDP2H4KS1QWMMM",
            customAttribute: {
                key: "favoritemovie",
                value: "Star Wars",
            },
        },
        id4: {
            customerId: "N3NCVYY3WS27HF0HKANA3R9FP8",
            customAttribute: {
                key: "square:a0f1505a-2aa1-490d-91a8-8d31ff181808",
                value: "10.5",
            },
        },
        id5: {
            customerId: "70548QG1HN43B05G0KCZ4MMC1G",
            customAttribute: {
                key: "sq0ids-0evKIskIGaY45fCyNL66aw:backupemail",
                value: "fake-email@squareup.com",
            },
        },
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.customers.BatchUpsertCustomerCustomAttributesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomAttributeDefinitions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Customers Groups

<details><summary><code>client.customers.groups.<a href="/src/api/resources/customers/resources/groups/client/Client.ts">list</a>({ ...params }) -> core.Page<Square.CustomerGroup></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves the list of customer groups of a business.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.customers.groups.list();
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
const page = await client.customers.groups.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.customers.ListGroupsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Groups.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.customers.groups.<a href="/src/api/resources/customers/resources/groups/client/Client.ts">create</a>({ ...params }) -> Square.CreateCustomerGroupResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a new customer group for a business.

The request must include the `name` value of the group.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customers.groups.create({
    group: {
        name: "Loyal Customers",
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.customers.CreateCustomerGroupRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Groups.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.customers.groups.<a href="/src/api/resources/customers/resources/groups/client/Client.ts">get</a>({ ...params }) -> Square.GetCustomerGroupResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a specific customer group as identified by the `group_id` value.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customers.groups.get({
    groupId: "group_id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.customers.GetGroupsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Groups.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.customers.groups.<a href="/src/api/resources/customers/resources/groups/client/Client.ts">update</a>({ ...params }) -> Square.UpdateCustomerGroupResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates a customer group as identified by the `group_id` value.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customers.groups.update({
    groupId: "group_id",
    group: {
        name: "Loyal Customers",
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.customers.UpdateCustomerGroupRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Groups.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.customers.groups.<a href="/src/api/resources/customers/resources/groups/client/Client.ts">delete</a>({ ...params }) -> Square.DeleteCustomerGroupResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes a customer group as identified by the `group_id` value.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customers.groups.delete({
    groupId: "group_id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.customers.DeleteGroupsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Groups.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.customers.groups.<a href="/src/api/resources/customers/resources/groups/client/Client.ts">add</a>({ ...params }) -> Square.AddGroupToCustomerResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Adds a group membership to a customer.

The customer is identified by the `customer_id` value
and the customer group is identified by the `group_id` value.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customers.groups.add({
    customerId: "customer_id",
    groupId: "group_id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.customers.AddGroupsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Groups.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.customers.groups.<a href="/src/api/resources/customers/resources/groups/client/Client.ts">remove</a>({ ...params }) -> Square.RemoveGroupFromCustomerResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Removes a group membership from a customer.

The customer is identified by the `customer_id` value
and the customer group is identified by the `group_id` value.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customers.groups.remove({
    customerId: "customer_id",
    groupId: "group_id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.customers.RemoveGroupsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Groups.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Customers Segments

<details><summary><code>client.customers.segments.<a href="/src/api/resources/customers/resources/segments/client/Client.ts">list</a>({ ...params }) -> core.Page<Square.CustomerSegment></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves the list of customer segments of a business.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.customers.segments.list();
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
const page = await client.customers.segments.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.customers.ListSegmentsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Segments.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.customers.segments.<a href="/src/api/resources/customers/resources/segments/client/Client.ts">get</a>({ ...params }) -> Square.GetCustomerSegmentResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a specific customer segment as identified by the `segment_id` value.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customers.segments.get({
    segmentId: "segment_id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.customers.GetSegmentsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Segments.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Customers Cards

<details><summary><code>client.customers.cards.<a href="/src/api/resources/customers/resources/cards/client/Client.ts">create</a>({ ...params }) -> Square.CreateCustomerCardResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Adds a card on file to an existing customer.

As with charges, calls to `CreateCustomerCard` are idempotent. Multiple
calls with the same card nonce return the same card record that was created
with the provided nonce during the _first_ call.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customers.cards.create({
    customerId: "customer_id",
    cardNonce: "YOUR_CARD_NONCE",
    billingAddress: {
        addressLine1: "500 Electric Ave",
        addressLine2: "Suite 600",
        locality: "New York",
        administrativeDistrictLevel1: "NY",
        postalCode: "10003",
        country: "US",
    },
    cardholderName: "Amelia Earhart",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.customers.CreateCustomerCardRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Cards.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.customers.cards.<a href="/src/api/resources/customers/resources/cards/client/Client.ts">delete</a>({ ...params }) -> Square.DeleteCustomerCardResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Removes a card on file from a customer.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customers.cards.delete({
    customerId: "customer_id",
    cardId: "card_id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.customers.DeleteCardsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Cards.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Customers CustomAttributes

<details><summary><code>client.customers.customAttributes.<a href="/src/api/resources/customers/resources/customAttributes/client/Client.ts">list</a>({ ...params }) -> core.Page<Square.CustomAttribute></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists the [custom attributes](entity:CustomAttribute) associated with a customer profile.

You can use the `with_definitions` query parameter to also retrieve custom attribute definitions
in the same call.

When all response pages are retrieved, the results include all custom attributes that are
visible to the requesting application, including those that are owned by other applications
and set to `VISIBILITY_READ_ONLY` or `VISIBILITY_READ_WRITE_VALUES`.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.customers.customAttributes.list({
    customerId: "customer_id",
});
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
const page = await client.customers.customAttributes.list({
    customerId: "customer_id",
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.customers.ListCustomAttributesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomAttributes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.customers.customAttributes.<a href="/src/api/resources/customers/resources/customAttributes/client/Client.ts">get</a>({ ...params }) -> Square.GetCustomerCustomAttributeResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a [custom attribute](entity:CustomAttribute) associated with a customer profile.

You can use the `with_definition` query parameter to also retrieve the custom attribute definition
in the same call.

To retrieve a custom attribute owned by another application, the `visibility` setting must be
`VISIBILITY_READ_ONLY` or `VISIBILITY_READ_WRITE_VALUES`. Note that seller-defined custom attributes
(also known as custom fields) are always set to `VISIBILITY_READ_WRITE_VALUES`.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customers.customAttributes.get({
    customerId: "customer_id",
    key: "key",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.customers.GetCustomAttributesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomAttributes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.customers.customAttributes.<a href="/src/api/resources/customers/resources/customAttributes/client/Client.ts">upsert</a>({ ...params }) -> Square.UpsertCustomerCustomAttributeResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates or updates a [custom attribute](entity:CustomAttribute) for a customer profile.

Use this endpoint to set the value of a custom attribute for a specified customer profile.
A custom attribute is based on a custom attribute definition in a Square seller account, which
is created using the [CreateCustomerCustomAttributeDefinition](api-endpoint:CustomerCustomAttributes-CreateCustomerCustomAttributeDefinition) endpoint.

To create or update a custom attribute owned by another application, the `visibility` setting
must be `VISIBILITY_READ_WRITE_VALUES`. Note that seller-defined custom attributes
(also known as custom fields) are always set to `VISIBILITY_READ_WRITE_VALUES`.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customers.customAttributes.upsert({
    customerId: "customer_id",
    key: "key",
    customAttribute: {
        value: "Dune",
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.customers.UpsertCustomerCustomAttributeRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomAttributes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.customers.customAttributes.<a href="/src/api/resources/customers/resources/customAttributes/client/Client.ts">delete</a>({ ...params }) -> Square.DeleteCustomerCustomAttributeResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes a [custom attribute](entity:CustomAttribute) associated with a customer profile.

To delete a custom attribute owned by another application, the `visibility` setting must be
`VISIBILITY_READ_WRITE_VALUES`. Note that seller-defined custom attributes
(also known as custom fields) are always set to `VISIBILITY_READ_WRITE_VALUES`.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customers.customAttributes.delete({
    customerId: "customer_id",
    key: "key",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.customers.DeleteCustomAttributesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomAttributes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Devices Codes

<details><summary><code>client.devices.codes.<a href="/src/api/resources/devices/resources/codes/client/Client.ts">list</a>({ ...params }) -> core.Page<Square.DeviceCode></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists all DeviceCodes associated with the merchant.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.devices.codes.list();
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
const page = await client.devices.codes.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.devices.ListCodesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Codes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.devices.codes.<a href="/src/api/resources/devices/resources/codes/client/Client.ts">create</a>({ ...params }) -> Square.CreateDeviceCodeResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a DeviceCode that can be used to login to a Square Terminal device to enter the connected
terminal mode.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.devices.codes.create({
    idempotencyKey: "01bb00a6-0c86-4770-94ed-f5fca973cd56",
    deviceCode: {
        name: "Counter 1",
        productType: "TERMINAL_API",
        locationId: "B5E4484SHHNYH",
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.devices.CreateDeviceCodeRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Codes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.devices.codes.<a href="/src/api/resources/devices/resources/codes/client/Client.ts">get</a>({ ...params }) -> Square.GetDeviceCodeResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves DeviceCode with the associated ID.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.devices.codes.get({
    id: "id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.devices.GetCodesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Codes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Disputes Evidence

<details><summary><code>client.disputes.evidence.<a href="/src/api/resources/disputes/resources/evidence/client/Client.ts">list</a>({ ...params }) -> core.Page<Square.DisputeEvidence></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of evidence associated with a dispute.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.disputes.evidence.list({
    disputeId: "dispute_id",
});
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
const page = await client.disputes.evidence.list({
    disputeId: "dispute_id",
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.disputes.ListEvidenceRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Evidence.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.disputes.evidence.<a href="/src/api/resources/disputes/resources/evidence/client/Client.ts">get</a>({ ...params }) -> Square.GetDisputeEvidenceResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the metadata for the evidence specified in the request URL path.

You must maintain a copy of any evidence uploaded if you want to reference it later. Evidence cannot be downloaded after you upload it.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.disputes.evidence.get({
    disputeId: "dispute_id",
    evidenceId: "evidence_id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.disputes.GetEvidenceRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Evidence.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.disputes.evidence.<a href="/src/api/resources/disputes/resources/evidence/client/Client.ts">delete</a>({ ...params }) -> Square.DeleteDisputeEvidenceResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Removes specified evidence from a dispute.
Square does not send the bank any evidence that is removed.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.disputes.evidence.delete({
    disputeId: "dispute_id",
    evidenceId: "evidence_id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.disputes.DeleteEvidenceRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Evidence.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## GiftCards Activities

<details><summary><code>client.giftCards.activities.<a href="/src/api/resources/giftCards/resources/activities/client/Client.ts">list</a>({ ...params }) -> core.Page<Square.GiftCardActivity></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists gift card activities. By default, you get gift card activities for all
gift cards in the seller's account. You can optionally specify query parameters to
filter the list. For example, you can get a list of gift card activities for a gift card,
for all gift cards in a specific region, or for activities within a time window.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.giftCards.activities.list();
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
const page = await client.giftCards.activities.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.giftCards.ListActivitiesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Activities.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.giftCards.activities.<a href="/src/api/resources/giftCards/resources/activities/client/Client.ts">create</a>({ ...params }) -> Square.CreateGiftCardActivityResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a gift card activity to manage the balance or state of a [gift card](entity:GiftCard).
For example, create an `ACTIVATE` activity to activate a gift card with an initial balance before first use.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.giftCards.activities.create({
    idempotencyKey: "U16kfr-kA70er-q4Rsym-7U7NnY",
    giftCardActivity: {
        type: "ACTIVATE",
        locationId: "81FN9BNFZTKS4",
        giftCardId: "gftc:6d55a72470d940c6ba09c0ab8ad08d20",
        activateActivityDetails: {
            orderId: "jJNGHm4gLI6XkFbwtiSLqK72KkAZY",
            lineItemUid: "eIWl7X0nMuO9Ewbh0ChIx",
        },
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.giftCards.CreateGiftCardActivityRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Activities.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Labor BreakTypes

<details><summary><code>client.labor.breakTypes.<a href="/src/api/resources/labor/resources/breakTypes/client/Client.ts">list</a>({ ...params }) -> core.Page<Square.BreakType></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a paginated list of `BreakType` instances for a business.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.labor.breakTypes.list();
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
const page = await client.labor.breakTypes.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.labor.ListBreakTypesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BreakTypes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.labor.breakTypes.<a href="/src/api/resources/labor/resources/breakTypes/client/Client.ts">create</a>({ ...params }) -> Square.CreateBreakTypeResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a new `BreakType`.

A `BreakType` is a template for creating `Break` objects.
You must provide the following values in your request to this
endpoint:

- `location_id`
- `break_name`
- `expected_duration`
- `is_paid`

You can only have three `BreakType` instances per location. If you attempt to add a fourth
`BreakType` for a location, an `INVALID_REQUEST_ERROR` "Exceeded limit of 3 breaks per location."
is returned.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.labor.breakTypes.create({
    idempotencyKey: "PAD3NG5KSN2GL",
    breakType: {
        locationId: "CGJN03P1D08GF",
        breakName: "Lunch Break",
        expectedDuration: "PT30M",
        isPaid: true,
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.labor.CreateBreakTypeRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BreakTypes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.labor.breakTypes.<a href="/src/api/resources/labor/resources/breakTypes/client/Client.ts">get</a>({ ...params }) -> Square.GetBreakTypeResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a single `BreakType` specified by `id`.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.labor.breakTypes.get({
    id: "id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.labor.GetBreakTypesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BreakTypes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.labor.breakTypes.<a href="/src/api/resources/labor/resources/breakTypes/client/Client.ts">update</a>({ ...params }) -> Square.UpdateBreakTypeResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates an existing `BreakType`.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.labor.breakTypes.update({
    id: "id",
    breakType: {
        locationId: "26M7H24AZ9N6R",
        breakName: "Lunch",
        expectedDuration: "PT50M",
        isPaid: true,
        version: 1,
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.labor.UpdateBreakTypeRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BreakTypes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.labor.breakTypes.<a href="/src/api/resources/labor/resources/breakTypes/client/Client.ts">delete</a>({ ...params }) -> Square.DeleteBreakTypeResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes an existing `BreakType`.

A `BreakType` can be deleted even if it is referenced from a `Shift`.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.labor.breakTypes.delete({
    id: "id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.labor.DeleteBreakTypesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BreakTypes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Labor EmployeeWages

<details><summary><code>client.labor.employeeWages.<a href="/src/api/resources/labor/resources/employeeWages/client/Client.ts">list</a>({ ...params }) -> core.Page<Square.EmployeeWage></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a paginated list of `EmployeeWage` instances for a business.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.labor.employeeWages.list();
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
const page = await client.labor.employeeWages.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.labor.ListEmployeeWagesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EmployeeWages.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.labor.employeeWages.<a href="/src/api/resources/labor/resources/employeeWages/client/Client.ts">get</a>({ ...params }) -> Square.GetEmployeeWageResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a single `EmployeeWage` specified by `id`.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.labor.employeeWages.get({
    id: "id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.labor.GetEmployeeWagesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EmployeeWages.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Labor Shifts

<details><summary><code>client.labor.shifts.<a href="/src/api/resources/labor/resources/shifts/client/Client.ts">create</a>({ ...params }) -> Square.CreateShiftResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a new `Shift`.

A `Shift` represents a complete workday for a single team member.
You must provide the following values in your request to this
endpoint:

- `location_id`
- `team_member_id`
- `start_at`

An attempt to create a new `Shift` can result in a `BAD_REQUEST` error when:

- The `status` of the new `Shift` is `OPEN` and the team member has another
  shift with an `OPEN` status.
- The `start_at` date is in the future.
- The `start_at` or `end_at` date overlaps another shift for the same team member.
- The `Break` instances are set in the request and a break `start_at`
is before the `Shift.start_at`, a break `end_at` is after
the `Shift.end_at`, or both.
  </dd>
  </dl>
  </dd>
  </dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.labor.shifts.create({
    idempotencyKey: "HIDSNG5KS478L",
    shift: {
        locationId: "PAA1RJZZKXBFG",
        startAt: "2019-01-25T03:11:00-05:00",
        endAt: "2019-01-25T13:11:00-05:00",
        wage: {
            title: "Barista",
            hourlyRate: {
                amount: 1100,
                currency: "USD",
            },
            tipEligible: true,
        },
        breaks: [
            {
                startAt: "2019-01-25T06:11:00-05:00",
                endAt: "2019-01-25T06:16:00-05:00",
                breakTypeId: "REGS1EQR1TPZ5",
                name: "Tea Break",
                expectedDuration: "PT5M",
                isPaid: true,
            },
        ],
        teamMemberId: "ormj0jJJZ5OZIzxrZYJI",
        declaredCashTipMoney: {
            amount: 500,
            currency: "USD",
        },
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.labor.CreateShiftRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Shifts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.labor.shifts.<a href="/src/api/resources/labor/resources/shifts/client/Client.ts">search</a>({ ...params }) -> Square.SearchShiftsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a paginated list of `Shift` records for a business.
The list to be returned can be filtered by:

- Location IDs
- Team member IDs
- Shift status (`OPEN` or `CLOSED`)
- Shift start
- Shift end
- Workday details

The list can be sorted by:

- `START_AT`
- `END_AT`
- `CREATED_AT`
- `UPDATED_AT`
  </dd>
  </dl>
  </dd>
  </dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.labor.shifts.search({
    query: {
        filter: {
            workday: {
                dateRange: {
                    startDate: "2019-01-20",
                    endDate: "2019-02-03",
                },
                matchShiftsBy: "START_AT",
                defaultTimezone: "America/Los_Angeles",
            },
        },
    },
    limit: 100,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.labor.SearchShiftsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Shifts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.labor.shifts.<a href="/src/api/resources/labor/resources/shifts/client/Client.ts">get</a>({ ...params }) -> Square.GetShiftResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a single `Shift` specified by `id`.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.labor.shifts.get({
    id: "id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.labor.GetShiftsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Shifts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.labor.shifts.<a href="/src/api/resources/labor/resources/shifts/client/Client.ts">update</a>({ ...params }) -> Square.UpdateShiftResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates an existing `Shift`.

When adding a `Break` to a `Shift`, any earlier `Break` instances in the `Shift` have
the `end_at` property set to a valid RFC-3339 datetime string.

When closing a `Shift`, all `Break` instances in the `Shift` must be complete with `end_at`
set on each `Break`.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.labor.shifts.update({
    id: "id",
    shift: {
        locationId: "PAA1RJZZKXBFG",
        startAt: "2019-01-25T03:11:00-05:00",
        endAt: "2019-01-25T13:11:00-05:00",
        wage: {
            title: "Bartender",
            hourlyRate: {
                amount: 1500,
                currency: "USD",
            },
            tipEligible: true,
        },
        breaks: [
            {
                id: "X7GAQYVVRRG6P",
                startAt: "2019-01-25T06:11:00-05:00",
                endAt: "2019-01-25T06:16:00-05:00",
                breakTypeId: "REGS1EQR1TPZ5",
                name: "Tea Break",
                expectedDuration: "PT5M",
                isPaid: true,
            },
        ],
        version: 1,
        teamMemberId: "ormj0jJJZ5OZIzxrZYJI",
        declaredCashTipMoney: {
            amount: 500,
            currency: "USD",
        },
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.labor.UpdateShiftRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Shifts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.labor.shifts.<a href="/src/api/resources/labor/resources/shifts/client/Client.ts">delete</a>({ ...params }) -> Square.DeleteShiftResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes a `Shift`.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.labor.shifts.delete({
    id: "id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.labor.DeleteShiftsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Shifts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Labor TeamMemberWages

<details><summary><code>client.labor.teamMemberWages.<a href="/src/api/resources/labor/resources/teamMemberWages/client/Client.ts">list</a>({ ...params }) -> core.Page<Square.TeamMemberWage></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a paginated list of `TeamMemberWage` instances for a business.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.labor.teamMemberWages.list();
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
const page = await client.labor.teamMemberWages.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.labor.ListTeamMemberWagesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TeamMemberWages.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.labor.teamMemberWages.<a href="/src/api/resources/labor/resources/teamMemberWages/client/Client.ts">get</a>({ ...params }) -> Square.GetTeamMemberWageResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a single `TeamMemberWage` specified by `id`.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.labor.teamMemberWages.get({
    id: "id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.labor.GetTeamMemberWagesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TeamMemberWages.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Labor WorkweekConfigs

<details><summary><code>client.labor.workweekConfigs.<a href="/src/api/resources/labor/resources/workweekConfigs/client/Client.ts">list</a>({ ...params }) -> core.Page<Square.WorkweekConfig></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `WorkweekConfig` instances for a business.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.labor.workweekConfigs.list();
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
const page = await client.labor.workweekConfigs.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.labor.ListWorkweekConfigsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WorkweekConfigs.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.labor.workweekConfigs.<a href="/src/api/resources/labor/resources/workweekConfigs/client/Client.ts">get</a>({ ...params }) -> Square.UpdateWorkweekConfigResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates a `WorkweekConfig`.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.labor.workweekConfigs.get({
    id: "id",
    workweekConfig: {
        startOfWeek: "MON",
        startOfDayLocalTime: "10:00",
        version: 10,
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.labor.UpdateWorkweekConfigRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WorkweekConfigs.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Locations CustomAttributeDefinitions

<details><summary><code>client.locations.customAttributeDefinitions.<a href="/src/api/resources/locations/resources/customAttributeDefinitions/client/Client.ts">list</a>({ ...params }) -> core.Page<Square.CustomAttributeDefinition></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists the location-related [custom attribute definitions](entity:CustomAttributeDefinition) that belong to a Square seller account.
When all response pages are retrieved, the results include all custom attribute definitions
that are visible to the requesting application, including those that are created by other
applications and set to `VISIBILITY_READ_ONLY` or `VISIBILITY_READ_WRITE_VALUES`.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.locations.customAttributeDefinitions.list();
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
const page = await client.locations.customAttributeDefinitions.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.locations.ListCustomAttributeDefinitionsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomAttributeDefinitions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.locations.customAttributeDefinitions.<a href="/src/api/resources/locations/resources/customAttributeDefinitions/client/Client.ts">create</a>({ ...params }) -> Square.CreateLocationCustomAttributeDefinitionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a location-related [custom attribute definition](entity:CustomAttributeDefinition) for a Square seller account.
Use this endpoint to define a custom attribute that can be associated with locations.
A custom attribute definition specifies the `key`, `visibility`, `schema`, and other properties
for a custom attribute. After the definition is created, you can call
[UpsertLocationCustomAttribute](api-endpoint:LocationCustomAttributes-UpsertLocationCustomAttribute) or
[BulkUpsertLocationCustomAttributes](api-endpoint:LocationCustomAttributes-BulkUpsertLocationCustomAttributes)
to set the custom attribute for locations.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.locations.customAttributeDefinitions.create({
    customAttributeDefinition: {
        key: "bestseller",
        schema: {
            ref: "https://developer-production-s.squarecdn.com/schemas/v1/common.json#squareup.common.String",
        },
        name: "Bestseller",
        description: "Bestselling item at location",
        visibility: "VISIBILITY_READ_WRITE_VALUES",
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.locations.CreateLocationCustomAttributeDefinitionRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomAttributeDefinitions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.locations.customAttributeDefinitions.<a href="/src/api/resources/locations/resources/customAttributeDefinitions/client/Client.ts">get</a>({ ...params }) -> Square.RetrieveLocationCustomAttributeDefinitionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a location-related [custom attribute definition](entity:CustomAttributeDefinition) from a Square seller account.
To retrieve a custom attribute definition created by another application, the `visibility`
setting must be `VISIBILITY_READ_ONLY` or `VISIBILITY_READ_WRITE_VALUES`.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.locations.customAttributeDefinitions.get({
    key: "key",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.locations.GetCustomAttributeDefinitionsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomAttributeDefinitions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.locations.customAttributeDefinitions.<a href="/src/api/resources/locations/resources/customAttributeDefinitions/client/Client.ts">update</a>({ ...params }) -> Square.UpdateLocationCustomAttributeDefinitionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates a location-related [custom attribute definition](entity:CustomAttributeDefinition) for a Square seller account.
Use this endpoint to update the following fields: `name`, `description`, `visibility`, or the
`schema` for a `Selection` data type.
Only the definition owner can update a custom attribute definition.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.locations.customAttributeDefinitions.update({
    key: "key",
    customAttributeDefinition: {
        description: "Update the description as desired.",
        visibility: "VISIBILITY_READ_ONLY",
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.locations.UpdateLocationCustomAttributeDefinitionRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomAttributeDefinitions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.locations.customAttributeDefinitions.<a href="/src/api/resources/locations/resources/customAttributeDefinitions/client/Client.ts">delete</a>({ ...params }) -> Square.DeleteLocationCustomAttributeDefinitionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes a location-related [custom attribute definition](entity:CustomAttributeDefinition) from a Square seller account.
Deleting a custom attribute definition also deletes the corresponding custom attribute from
all locations.
Only the definition owner can delete a custom attribute definition.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.locations.customAttributeDefinitions.delete({
    key: "key",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.locations.DeleteCustomAttributeDefinitionsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomAttributeDefinitions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Locations CustomAttributes

<details><summary><code>client.locations.customAttributes.<a href="/src/api/resources/locations/resources/customAttributes/client/Client.ts">batchDelete</a>({ ...params }) -> Square.BulkDeleteLocationCustomAttributesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes [custom attributes](entity:CustomAttribute) for locations as a bulk operation.
To delete a custom attribute owned by another application, the `visibility` setting must be
`VISIBILITY_READ_WRITE_VALUES`.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.locations.customAttributes.batchDelete({
    values: {
        id1: {
            key: "bestseller",
        },
        id2: {
            key: "bestseller",
        },
        id3: {
            key: "phone-number",
        },
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.locations.BulkDeleteLocationCustomAttributesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomAttributes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.locations.customAttributes.<a href="/src/api/resources/locations/resources/customAttributes/client/Client.ts">batchUpsert</a>({ ...params }) -> Square.BulkUpsertLocationCustomAttributesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates or updates [custom attributes](entity:CustomAttribute) for locations as a bulk operation.
Use this endpoint to set the value of one or more custom attributes for one or more locations.
A custom attribute is based on a custom attribute definition in a Square seller account, which is
created using the [CreateLocationCustomAttributeDefinition](api-endpoint:LocationCustomAttributes-CreateLocationCustomAttributeDefinition) endpoint.
This `BulkUpsertLocationCustomAttributes` endpoint accepts a map of 1 to 25 individual upsert
requests and returns a map of individual upsert responses. Each upsert request has a unique ID
and provides a location ID and custom attribute. Each upsert response is returned with the ID
of the corresponding request.
To create or update a custom attribute owned by another application, the `visibility` setting
must be `VISIBILITY_READ_WRITE_VALUES`.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.locations.customAttributes.batchUpsert({
    values: {
        id1: {
            locationId: "L0TBCBTB7P8RQ",
            customAttribute: {
                key: "bestseller",
                value: "hot cocoa",
            },
        },
        id2: {
            locationId: "L9XMD04V3STJX",
            customAttribute: {
                key: "bestseller",
                value: "berry smoothie",
            },
        },
        id3: {
            locationId: "L0TBCBTB7P8RQ",
            customAttribute: {
                key: "phone-number",
                value: "+12223334444",
            },
        },
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.locations.BulkUpsertLocationCustomAttributesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomAttributes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.locations.customAttributes.<a href="/src/api/resources/locations/resources/customAttributes/client/Client.ts">list</a>({ ...params }) -> core.Page<Square.CustomAttribute></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists the [custom attributes](entity:CustomAttribute) associated with a location.
You can use the `with_definitions` query parameter to also retrieve custom attribute definitions
in the same call.
When all response pages are retrieved, the results include all custom attributes that are
visible to the requesting application, including those that are owned by other applications
and set to `VISIBILITY_READ_ONLY` or `VISIBILITY_READ_WRITE_VALUES`.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.locations.customAttributes.list({
    locationId: "location_id",
});
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
const page = await client.locations.customAttributes.list({
    locationId: "location_id",
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.locations.ListCustomAttributesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomAttributes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.locations.customAttributes.<a href="/src/api/resources/locations/resources/customAttributes/client/Client.ts">get</a>({ ...params }) -> Square.RetrieveLocationCustomAttributeResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a [custom attribute](entity:CustomAttribute) associated with a location.
You can use the `with_definition` query parameter to also retrieve the custom attribute definition
in the same call.
To retrieve a custom attribute owned by another application, the `visibility` setting must be
`VISIBILITY_READ_ONLY` or `VISIBILITY_READ_WRITE_VALUES`.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.locations.customAttributes.get({
    locationId: "location_id",
    key: "key",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.locations.GetCustomAttributesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomAttributes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.locations.customAttributes.<a href="/src/api/resources/locations/resources/customAttributes/client/Client.ts">upsert</a>({ ...params }) -> Square.UpsertLocationCustomAttributeResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates or updates a [custom attribute](entity:CustomAttribute) for a location.
Use this endpoint to set the value of a custom attribute for a specified location.
A custom attribute is based on a custom attribute definition in a Square seller account, which
is created using the [CreateLocationCustomAttributeDefinition](api-endpoint:LocationCustomAttributes-CreateLocationCustomAttributeDefinition) endpoint.
To create or update a custom attribute owned by another application, the `visibility` setting
must be `VISIBILITY_READ_WRITE_VALUES`.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.locations.customAttributes.upsert({
    locationId: "location_id",
    key: "key",
    customAttribute: {
        value: "hot cocoa",
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.locations.UpsertLocationCustomAttributeRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomAttributes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.locations.customAttributes.<a href="/src/api/resources/locations/resources/customAttributes/client/Client.ts">delete</a>({ ...params }) -> Square.DeleteLocationCustomAttributeResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes a [custom attribute](entity:CustomAttribute) associated with a location.
To delete a custom attribute owned by another application, the `visibility` setting must be
`VISIBILITY_READ_WRITE_VALUES`.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.locations.customAttributes.delete({
    locationId: "location_id",
    key: "key",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.locations.DeleteCustomAttributesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomAttributes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Locations Transactions

<details><summary><code>client.locations.transactions.<a href="/src/api/resources/locations/resources/transactions/client/Client.ts">list</a>({ ...params }) -> Square.ListTransactionsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists transactions for a particular location.

Transactions include payment information from sales and exchanges and refund
information from returns and exchanges.

Max results per [page](https://developer.squareup.com/docs/working-with-apis/pagination): 50

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.locations.transactions.list({
    locationId: "location_id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.locations.ListTransactionsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Transactions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.locations.transactions.<a href="/src/api/resources/locations/resources/transactions/client/Client.ts">get</a>({ ...params }) -> Square.GetTransactionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves details for a single transaction.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.locations.transactions.get({
    locationId: "location_id",
    transactionId: "transaction_id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.locations.GetTransactionsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Transactions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.locations.transactions.<a href="/src/api/resources/locations/resources/transactions/client/Client.ts">capture</a>({ ...params }) -> Square.CaptureTransactionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Captures a transaction that was created with the [Charge](api-endpoint:Transactions-Charge)
endpoint with a `delay_capture` value of `true`.

See [Delayed capture transactions](https://developer.squareup.com/docs/payments/transactions/overview#delayed-capture)
for more information.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.locations.transactions.capture({
    locationId: "location_id",
    transactionId: "transaction_id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.locations.CaptureTransactionsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Transactions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.locations.transactions.<a href="/src/api/resources/locations/resources/transactions/client/Client.ts">void</a>({ ...params }) -> Square.VoidTransactionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Cancels a transaction that was created with the [Charge](api-endpoint:Transactions-Charge)
endpoint with a `delay_capture` value of `true`.

See [Delayed capture transactions](https://developer.squareup.com/docs/payments/transactions/overview#delayed-capture)
for more information.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.locations.transactions.void({
    locationId: "location_id",
    transactionId: "transaction_id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.locations.VoidTransactionsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Transactions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Loyalty Accounts

<details><summary><code>client.loyalty.accounts.<a href="/src/api/resources/loyalty/resources/accounts/client/Client.ts">create</a>({ ...params }) -> Square.CreateLoyaltyAccountResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a loyalty account. To create a loyalty account, you must provide the `program_id` and a `mapping` with the `phone_number` of the buyer.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.loyalty.accounts.create({
    loyaltyAccount: {
        programId: "d619f755-2d17-41f3-990d-c04ecedd64dd",
        mapping: {
            phoneNumber: "+14155551234",
        },
    },
    idempotencyKey: "ec78c477-b1c3-4899-a209-a4e71337c996",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.loyalty.CreateLoyaltyAccountRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Accounts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.loyalty.accounts.<a href="/src/api/resources/loyalty/resources/accounts/client/Client.ts">search</a>({ ...params }) -> Square.SearchLoyaltyAccountsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Searches for loyalty accounts in a loyalty program.

You can search for a loyalty account using the phone number or customer ID associated with the account. To return all loyalty accounts, specify an empty `query` object or omit it entirely.

Search results are sorted by `created_at` in ascending order.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.loyalty.accounts.search({
    query: {
        mappings: [
            {
                phoneNumber: "+14155551234",
            },
        ],
    },
    limit: 10,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.loyalty.SearchLoyaltyAccountsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Accounts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.loyalty.accounts.<a href="/src/api/resources/loyalty/resources/accounts/client/Client.ts">get</a>({ ...params }) -> Square.GetLoyaltyAccountResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a loyalty account.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.loyalty.accounts.get({
    accountId: "account_id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.loyalty.GetAccountsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Accounts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.loyalty.accounts.<a href="/src/api/resources/loyalty/resources/accounts/client/Client.ts">accumulatePoints</a>({ ...params }) -> Square.AccumulateLoyaltyPointsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Adds points earned from a purchase to a [loyalty account](entity:LoyaltyAccount).

- If you are using the Orders API to manage orders, provide the `order_id`. Square reads the order
  to compute the points earned from both the base loyalty program and an associated
  [loyalty promotion](entity:LoyaltyPromotion). For purchases that qualify for multiple accrual
  rules, Square computes points based on the accrual rule that grants the most points.
  For purchases that qualify for multiple promotions, Square computes points based on the most
  recently created promotion. A purchase must first qualify for program points to be eligible for promotion points.

- If you are not using the Orders API to manage orders, provide `points` with the number of points to add.
You must first perform a client-side computation of the points earned from the loyalty program and
loyalty promotion. For spend-based and visit-based programs, you can call [CalculateLoyaltyPoints](api-endpoint:Loyalty-CalculateLoyaltyPoints)
to compute the points earned from the base loyalty program. For information about computing points earned from a loyalty promotion, see
[Calculating promotion points](https://developer.squareup.com/docs/loyalty-api/loyalty-promotions#calculate-promotion-points).
  </dd>
  </dl>
  </dd>
  </dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.loyalty.accounts.accumulatePoints({
    accountId: "account_id",
    accumulatePoints: {
        orderId: "RFZfrdtm3mhO1oGzf5Cx7fEMsmGZY",
    },
    idempotencyKey: "58b90739-c3e8-4b11-85f7-e636d48d72cb",
    locationId: "P034NEENMD09F",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.loyalty.AccumulateLoyaltyPointsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Accounts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.loyalty.accounts.<a href="/src/api/resources/loyalty/resources/accounts/client/Client.ts">adjust</a>({ ...params }) -> Square.AdjustLoyaltyPointsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Adds points to or subtracts points from a buyer's account.

Use this endpoint only when you need to manually adjust points. Otherwise, in your application flow, you call
[AccumulateLoyaltyPoints](api-endpoint:Loyalty-AccumulateLoyaltyPoints)
to add points when a buyer pays for the purchase.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.loyalty.accounts.adjust({
    accountId: "account_id",
    idempotencyKey: "bc29a517-3dc9-450e-aa76-fae39ee849d1",
    adjustPoints: {
        points: 10,
        reason: "Complimentary points",
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.loyalty.AdjustLoyaltyPointsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Accounts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Loyalty Programs

<details><summary><code>client.loyalty.programs.<a href="/src/api/resources/loyalty/resources/programs/client/Client.ts">list</a>() -> Square.ListLoyaltyProgramsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of loyalty programs in the seller's account.
Loyalty programs define how buyers can earn points and redeem points for rewards. Square sellers can have only one loyalty program, which is created and managed from the Seller Dashboard. For more information, see [Loyalty Program Overview](https://developer.squareup.com/docs/loyalty/overview).

Replaced with [RetrieveLoyaltyProgram](api-endpoint:Loyalty-RetrieveLoyaltyProgram) when used with the keyword `main`.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.loyalty.programs.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `Programs.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.loyalty.programs.<a href="/src/api/resources/loyalty/resources/programs/client/Client.ts">get</a>({ ...params }) -> Square.GetLoyaltyProgramResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves the loyalty program in a seller's account, specified by the program ID or the keyword `main`.

Loyalty programs define how buyers can earn points and redeem points for rewards. Square sellers can have only one loyalty program, which is created and managed from the Seller Dashboard. For more information, see [Loyalty Program Overview](https://developer.squareup.com/docs/loyalty/overview).

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.loyalty.programs.get({
    programId: "program_id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.loyalty.GetProgramsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Programs.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.loyalty.programs.<a href="/src/api/resources/loyalty/resources/programs/client/Client.ts">calculate</a>({ ...params }) -> Square.CalculateLoyaltyPointsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Calculates the number of points a buyer can earn from a purchase. Applications might call this endpoint
to display the points to the buyer.

- If you are using the Orders API to manage orders, provide the `order_id` and (optional) `loyalty_account_id`.
  Square reads the order to compute the points earned from the base loyalty program and an associated
  [loyalty promotion](entity:LoyaltyPromotion).

- If you are not using the Orders API to manage orders, provide `transaction_amount_money` with the
purchase amount. Square uses this amount to calculate the points earned from the base loyalty program,
but not points earned from a loyalty promotion. For spend-based and visit-based programs, the `tax_mode`
setting of the accrual rule indicates how taxes should be treated for loyalty points accrual.
If the purchase qualifies for program points, call
[ListLoyaltyPromotions](api-endpoint:Loyalty-ListLoyaltyPromotions) and perform a client-side computation
to calculate whether the purchase also qualifies for promotion points. For more information, see
[Calculating promotion points](https://developer.squareup.com/docs/loyalty-api/loyalty-promotions#calculate-promotion-points).
  </dd>
  </dl>
  </dd>
  </dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.loyalty.programs.calculate({
    programId: "program_id",
    orderId: "RFZfrdtm3mhO1oGzf5Cx7fEMsmGZY",
    loyaltyAccountId: "79b807d2-d786-46a9-933b-918028d7a8c5",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.loyalty.CalculateLoyaltyPointsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Programs.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Loyalty Rewards

<details><summary><code>client.loyalty.rewards.<a href="/src/api/resources/loyalty/resources/rewards/client/Client.ts">create</a>({ ...params }) -> Square.CreateLoyaltyRewardResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a loyalty reward. In the process, the endpoint does following:

- Uses the `reward_tier_id` in the request to determine the number of points
  to lock for this reward.
- If the request includes `order_id`, it adds the reward and related discount to the order.

After a reward is created, the points are locked and
not available for the buyer to redeem another reward.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.loyalty.rewards.create({
    reward: {
        loyaltyAccountId: "5adcb100-07f1-4ee7-b8c6-6bb9ebc474bd",
        rewardTierId: "e1b39225-9da5-43d1-a5db-782cdd8ad94f",
        orderId: "RFZfrdtm3mhO1oGzf5Cx7fEMsmGZY",
    },
    idempotencyKey: "18c2e5ea-a620-4b1f-ad60-7b167285e451",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.loyalty.CreateLoyaltyRewardRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Rewards.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.loyalty.rewards.<a href="/src/api/resources/loyalty/resources/rewards/client/Client.ts">search</a>({ ...params }) -> Square.SearchLoyaltyRewardsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Searches for loyalty rewards. This endpoint accepts a request with no query filters and returns results for all loyalty accounts.
If you include a `query` object, `loyalty_account_id` is required and `status` is optional.

If you know a reward ID, use the
[RetrieveLoyaltyReward](api-endpoint:Loyalty-RetrieveLoyaltyReward) endpoint.

Search results are sorted by `updated_at` in descending order.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.loyalty.rewards.search({
    query: {
        loyaltyAccountId: "5adcb100-07f1-4ee7-b8c6-6bb9ebc474bd",
    },
    limit: 10,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.loyalty.SearchLoyaltyRewardsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Rewards.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.loyalty.rewards.<a href="/src/api/resources/loyalty/resources/rewards/client/Client.ts">get</a>({ ...params }) -> Square.GetLoyaltyRewardResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a loyalty reward.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.loyalty.rewards.get({
    rewardId: "reward_id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.loyalty.GetRewardsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Rewards.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.loyalty.rewards.<a href="/src/api/resources/loyalty/resources/rewards/client/Client.ts">delete</a>({ ...params }) -> Square.DeleteLoyaltyRewardResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes a loyalty reward by doing the following:

- Returns the loyalty points back to the loyalty account.
- If an order ID was specified when the reward was created
  (see [CreateLoyaltyReward](api-endpoint:Loyalty-CreateLoyaltyReward)),
  it updates the order by removing the reward and related
  discounts.

You cannot delete a reward that has reached the terminal state (REDEEMED).

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.loyalty.rewards.delete({
    rewardId: "reward_id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.loyalty.DeleteRewardsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Rewards.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.loyalty.rewards.<a href="/src/api/resources/loyalty/resources/rewards/client/Client.ts">redeem</a>({ ...params }) -> Square.RedeemLoyaltyRewardResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Redeems a loyalty reward.

The endpoint sets the reward to the `REDEEMED` terminal state.

If you are using your own order processing system (not using the
Orders API), you call this endpoint after the buyer paid for the
purchase.

After the reward reaches the terminal state, it cannot be deleted.
In other words, points used for the reward cannot be returned
to the account.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.loyalty.rewards.redeem({
    rewardId: "reward_id",
    idempotencyKey: "98adc7f7-6963-473b-b29c-f3c9cdd7d994",
    locationId: "P034NEENMD09F",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.loyalty.RedeemLoyaltyRewardRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Rewards.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Loyalty Programs Promotions

<details><summary><code>client.loyalty.programs.promotions.<a href="/src/api/resources/loyalty/resources/programs/resources/promotions/client/Client.ts">list</a>({ ...params }) -> core.Page<Square.LoyaltyPromotion></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists the loyalty promotions associated with a [loyalty program](entity:LoyaltyProgram).
Results are sorted by the `created_at` date in descending order (newest to oldest).

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.loyalty.programs.promotions.list({
    programId: "program_id",
});
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
const page = await client.loyalty.programs.promotions.list({
    programId: "program_id",
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.loyalty.programs.ListPromotionsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Promotions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.loyalty.programs.promotions.<a href="/src/api/resources/loyalty/resources/programs/resources/promotions/client/Client.ts">create</a>({ ...params }) -> Square.CreateLoyaltyPromotionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a loyalty promotion for a [loyalty program](entity:LoyaltyProgram). A loyalty promotion
enables buyers to earn points in addition to those earned from the base loyalty program.

This endpoint sets the loyalty promotion to the `ACTIVE` or `SCHEDULED` status, depending on the
`available_time` setting. A loyalty program can have a maximum of 10 loyalty promotions with an
`ACTIVE` or `SCHEDULED` status.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.loyalty.programs.promotions.create({
    programId: "program_id",
    loyaltyPromotion: {
        name: "Tuesday Happy Hour Promo",
        incentive: {
            type: "POINTS_MULTIPLIER",
            pointsMultiplierData: {
                multiplier: "3.0",
            },
        },
        availableTime: {
            timePeriods: [
                "BEGIN:VEVENT\nDTSTART:20220816T160000\nDURATION:PT2H\nRRULE:FREQ=WEEKLY;BYDAY=TU\nEND:VEVENT",
            ],
        },
        triggerLimit: {
            times: 1,
            interval: "DAY",
        },
        minimumSpendAmountMoney: {
            amount: 2000,
            currency: "USD",
        },
        qualifyingCategoryIds: ["XTQPYLR3IIU9C44VRCB3XD12"],
    },
    idempotencyKey: "ec78c477-b1c3-4899-a209-a4e71337c996",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.loyalty.programs.CreateLoyaltyPromotionRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Promotions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.loyalty.programs.promotions.<a href="/src/api/resources/loyalty/resources/programs/resources/promotions/client/Client.ts">get</a>({ ...params }) -> Square.GetLoyaltyPromotionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a loyalty promotion.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.loyalty.programs.promotions.get({
    promotionId: "promotion_id",
    programId: "program_id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.loyalty.programs.GetPromotionsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Promotions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.loyalty.programs.promotions.<a href="/src/api/resources/loyalty/resources/programs/resources/promotions/client/Client.ts">cancel</a>({ ...params }) -> Square.CancelLoyaltyPromotionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Cancels a loyalty promotion. Use this endpoint to cancel an `ACTIVE` promotion earlier than the
end date, cancel an `ACTIVE` promotion when an end date is not specified, or cancel a `SCHEDULED` promotion.
Because updating a promotion is not supported, you can also use this endpoint to cancel a promotion before
you create a new one.

This endpoint sets the loyalty promotion to the `CANCELED` state

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.loyalty.programs.promotions.cancel({
    promotionId: "promotion_id",
    programId: "program_id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.loyalty.programs.CancelPromotionsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Promotions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Merchants CustomAttributeDefinitions

<details><summary><code>client.merchants.customAttributeDefinitions.<a href="/src/api/resources/merchants/resources/customAttributeDefinitions/client/Client.ts">list</a>({ ...params }) -> core.Page<Square.CustomAttributeDefinition></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists the merchant-related [custom attribute definitions](entity:CustomAttributeDefinition) that belong to a Square seller account.
When all response pages are retrieved, the results include all custom attribute definitions
that are visible to the requesting application, including those that are created by other
applications and set to `VISIBILITY_READ_ONLY` or `VISIBILITY_READ_WRITE_VALUES`.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.merchants.customAttributeDefinitions.list();
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
const page = await client.merchants.customAttributeDefinitions.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.merchants.ListCustomAttributeDefinitionsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomAttributeDefinitions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.merchants.customAttributeDefinitions.<a href="/src/api/resources/merchants/resources/customAttributeDefinitions/client/Client.ts">create</a>({ ...params }) -> Square.CreateMerchantCustomAttributeDefinitionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a merchant-related [custom attribute definition](entity:CustomAttributeDefinition) for a Square seller account.
Use this endpoint to define a custom attribute that can be associated with a merchant connecting to your application.
A custom attribute definition specifies the `key`, `visibility`, `schema`, and other properties
for a custom attribute. After the definition is created, you can call
[UpsertMerchantCustomAttribute](api-endpoint:MerchantCustomAttributes-UpsertMerchantCustomAttribute) or
[BulkUpsertMerchantCustomAttributes](api-endpoint:MerchantCustomAttributes-BulkUpsertMerchantCustomAttributes)
to set the custom attribute for a merchant.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.merchants.customAttributeDefinitions.create({
    customAttributeDefinition: {
        key: "alternative_seller_name",
        schema: {
            ref: "https://developer-production-s.squarecdn.com/schemas/v1/common.json#squareup.common.String",
        },
        name: "Alternative Merchant Name",
        description: "This is the other name this merchant goes by.",
        visibility: "VISIBILITY_READ_ONLY",
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.merchants.CreateMerchantCustomAttributeDefinitionRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomAttributeDefinitions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.merchants.customAttributeDefinitions.<a href="/src/api/resources/merchants/resources/customAttributeDefinitions/client/Client.ts">get</a>({ ...params }) -> Square.RetrieveMerchantCustomAttributeDefinitionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a merchant-related [custom attribute definition](entity:CustomAttributeDefinition) from a Square seller account.
To retrieve a custom attribute definition created by another application, the `visibility`
setting must be `VISIBILITY_READ_ONLY` or `VISIBILITY_READ_WRITE_VALUES`.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.merchants.customAttributeDefinitions.get({
    key: "key",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.merchants.GetCustomAttributeDefinitionsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomAttributeDefinitions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.merchants.customAttributeDefinitions.<a href="/src/api/resources/merchants/resources/customAttributeDefinitions/client/Client.ts">update</a>({ ...params }) -> Square.UpdateMerchantCustomAttributeDefinitionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates a merchant-related [custom attribute definition](entity:CustomAttributeDefinition) for a Square seller account.
Use this endpoint to update the following fields: `name`, `description`, `visibility`, or the
`schema` for a `Selection` data type.
Only the definition owner can update a custom attribute definition.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.merchants.customAttributeDefinitions.update({
    key: "key",
    customAttributeDefinition: {
        description: "Update the description as desired.",
        visibility: "VISIBILITY_READ_ONLY",
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.merchants.UpdateMerchantCustomAttributeDefinitionRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomAttributeDefinitions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.merchants.customAttributeDefinitions.<a href="/src/api/resources/merchants/resources/customAttributeDefinitions/client/Client.ts">delete</a>({ ...params }) -> Square.DeleteMerchantCustomAttributeDefinitionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes a merchant-related [custom attribute definition](entity:CustomAttributeDefinition) from a Square seller account.
Deleting a custom attribute definition also deletes the corresponding custom attribute from
the merchant.
Only the definition owner can delete a custom attribute definition.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.merchants.customAttributeDefinitions.delete({
    key: "key",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.merchants.DeleteCustomAttributeDefinitionsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomAttributeDefinitions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Merchants CustomAttributes

<details><summary><code>client.merchants.customAttributes.<a href="/src/api/resources/merchants/resources/customAttributes/client/Client.ts">batchDelete</a>({ ...params }) -> Square.BulkDeleteMerchantCustomAttributesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes [custom attributes](entity:CustomAttribute) for a merchant as a bulk operation.
To delete a custom attribute owned by another application, the `visibility` setting must be
`VISIBILITY_READ_WRITE_VALUES`.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.merchants.customAttributes.batchDelete({
    values: {
        id1: {
            key: "alternative_seller_name",
        },
        id2: {
            key: "has_seen_tutorial",
        },
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.merchants.BulkDeleteMerchantCustomAttributesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomAttributes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.merchants.customAttributes.<a href="/src/api/resources/merchants/resources/customAttributes/client/Client.ts">batchUpsert</a>({ ...params }) -> Square.BulkUpsertMerchantCustomAttributesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates or updates [custom attributes](entity:CustomAttribute) for a merchant as a bulk operation.
Use this endpoint to set the value of one or more custom attributes for a merchant.
A custom attribute is based on a custom attribute definition in a Square seller account, which is
created using the [CreateMerchantCustomAttributeDefinition](api-endpoint:MerchantCustomAttributes-CreateMerchantCustomAttributeDefinition) endpoint.
This `BulkUpsertMerchantCustomAttributes` endpoint accepts a map of 1 to 25 individual upsert
requests and returns a map of individual upsert responses. Each upsert request has a unique ID
and provides a merchant ID and custom attribute. Each upsert response is returned with the ID
of the corresponding request.
To create or update a custom attribute owned by another application, the `visibility` setting
must be `VISIBILITY_READ_WRITE_VALUES`.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.merchants.customAttributes.batchUpsert({
    values: {
        id1: {
            merchantId: "DM7VKY8Q63GNP",
            customAttribute: {
                key: "alternative_seller_name",
                value: "Ultimate Sneaker Store",
            },
        },
        id2: {
            merchantId: "DM7VKY8Q63GNP",
            customAttribute: {
                key: "has_seen_tutorial",
                value: true,
            },
        },
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.merchants.BulkUpsertMerchantCustomAttributesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomAttributes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.merchants.customAttributes.<a href="/src/api/resources/merchants/resources/customAttributes/client/Client.ts">list</a>({ ...params }) -> core.Page<Square.CustomAttribute></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists the [custom attributes](entity:CustomAttribute) associated with a merchant.
You can use the `with_definitions` query parameter to also retrieve custom attribute definitions
in the same call.
When all response pages are retrieved, the results include all custom attributes that are
visible to the requesting application, including those that are owned by other applications
and set to `VISIBILITY_READ_ONLY` or `VISIBILITY_READ_WRITE_VALUES`.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.merchants.customAttributes.list({
    merchantId: "merchant_id",
});
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
const page = await client.merchants.customAttributes.list({
    merchantId: "merchant_id",
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.merchants.ListCustomAttributesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomAttributes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.merchants.customAttributes.<a href="/src/api/resources/merchants/resources/customAttributes/client/Client.ts">get</a>({ ...params }) -> Square.RetrieveMerchantCustomAttributeResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a [custom attribute](entity:CustomAttribute) associated with a merchant.
You can use the `with_definition` query parameter to also retrieve the custom attribute definition
in the same call.
To retrieve a custom attribute owned by another application, the `visibility` setting must be
`VISIBILITY_READ_ONLY` or `VISIBILITY_READ_WRITE_VALUES`.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.merchants.customAttributes.get({
    merchantId: "merchant_id",
    key: "key",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.merchants.GetCustomAttributesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomAttributes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.merchants.customAttributes.<a href="/src/api/resources/merchants/resources/customAttributes/client/Client.ts">upsert</a>({ ...params }) -> Square.UpsertMerchantCustomAttributeResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates or updates a [custom attribute](entity:CustomAttribute) for a merchant.
Use this endpoint to set the value of a custom attribute for a specified merchant.
A custom attribute is based on a custom attribute definition in a Square seller account, which
is created using the [CreateMerchantCustomAttributeDefinition](api-endpoint:MerchantCustomAttributes-CreateMerchantCustomAttributeDefinition) endpoint.
To create or update a custom attribute owned by another application, the `visibility` setting
must be `VISIBILITY_READ_WRITE_VALUES`.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.merchants.customAttributes.upsert({
    merchantId: "merchant_id",
    key: "key",
    customAttribute: {
        value: "Ultimate Sneaker Store",
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.merchants.UpsertMerchantCustomAttributeRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomAttributes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.merchants.customAttributes.<a href="/src/api/resources/merchants/resources/customAttributes/client/Client.ts">delete</a>({ ...params }) -> Square.DeleteMerchantCustomAttributeResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes a [custom attribute](entity:CustomAttribute) associated with a merchant.
To delete a custom attribute owned by another application, the `visibility` setting must be
`VISIBILITY_READ_WRITE_VALUES`.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.merchants.customAttributes.delete({
    merchantId: "merchant_id",
    key: "key",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.merchants.DeleteCustomAttributesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomAttributes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Orders CustomAttributeDefinitions

<details><summary><code>client.orders.customAttributeDefinitions.<a href="/src/api/resources/orders/resources/customAttributeDefinitions/client/Client.ts">list</a>({ ...params }) -> core.Page<Square.CustomAttributeDefinition></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists the order-related [custom attribute definitions](entity:CustomAttributeDefinition) that belong to a Square seller account.

When all response pages are retrieved, the results include all custom attribute definitions
that are visible to the requesting application, including those that are created by other
applications and set to `VISIBILITY_READ_ONLY` or `VISIBILITY_READ_WRITE_VALUES`. Note that
seller-defined custom attributes (also known as custom fields) are always set to `VISIBILITY_READ_WRITE_VALUES`.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.orders.customAttributeDefinitions.list();
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
const page = await client.orders.customAttributeDefinitions.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.orders.ListCustomAttributeDefinitionsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomAttributeDefinitions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.orders.customAttributeDefinitions.<a href="/src/api/resources/orders/resources/customAttributeDefinitions/client/Client.ts">create</a>({ ...params }) -> Square.CreateOrderCustomAttributeDefinitionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates an order-related custom attribute definition. Use this endpoint to
define a custom attribute that can be associated with orders.

After creating a custom attribute definition, you can set the custom attribute for orders
in the Square seller account.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.orders.customAttributeDefinitions.create({
    customAttributeDefinition: {
        key: "cover-count",
        schema: {
            ref: "https://developer-production-s.squarecdn.com/schemas/v1/common.json#squareup.common.Number",
        },
        name: "Cover count",
        description: "The number of people seated at a table",
        visibility: "VISIBILITY_READ_WRITE_VALUES",
    },
    idempotencyKey: "IDEMPOTENCY_KEY",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.orders.CreateOrderCustomAttributeDefinitionRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomAttributeDefinitions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.orders.customAttributeDefinitions.<a href="/src/api/resources/orders/resources/customAttributeDefinitions/client/Client.ts">get</a>({ ...params }) -> Square.RetrieveOrderCustomAttributeDefinitionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves an order-related [custom attribute definition](entity:CustomAttributeDefinition) from a Square seller account.

To retrieve a custom attribute definition created by another application, the `visibility`
setting must be `VISIBILITY_READ_ONLY` or `VISIBILITY_READ_WRITE_VALUES`. Note that seller-defined custom attributes
(also known as custom fields) are always set to `VISIBILITY_READ_WRITE_VALUES`.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.orders.customAttributeDefinitions.get({
    key: "key",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.orders.GetCustomAttributeDefinitionsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomAttributeDefinitions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.orders.customAttributeDefinitions.<a href="/src/api/resources/orders/resources/customAttributeDefinitions/client/Client.ts">update</a>({ ...params }) -> Square.UpdateOrderCustomAttributeDefinitionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates an order-related custom attribute definition for a Square seller account.

Only the definition owner can update a custom attribute definition. Note that sellers can view all custom attributes in exported customer data, including those set to `VISIBILITY_HIDDEN`.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.orders.customAttributeDefinitions.update({
    key: "key",
    customAttributeDefinition: {
        key: "cover-count",
        visibility: "VISIBILITY_READ_ONLY",
        version: 1,
    },
    idempotencyKey: "IDEMPOTENCY_KEY",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.orders.UpdateOrderCustomAttributeDefinitionRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomAttributeDefinitions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.orders.customAttributeDefinitions.<a href="/src/api/resources/orders/resources/customAttributeDefinitions/client/Client.ts">delete</a>({ ...params }) -> Square.DeleteOrderCustomAttributeDefinitionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes an order-related [custom attribute definition](entity:CustomAttributeDefinition) from a Square seller account.

Only the definition owner can delete a custom attribute definition.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.orders.customAttributeDefinitions.delete({
    key: "key",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.orders.DeleteCustomAttributeDefinitionsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomAttributeDefinitions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Orders CustomAttributes

<details><summary><code>client.orders.customAttributes.<a href="/src/api/resources/orders/resources/customAttributes/client/Client.ts">batchDelete</a>({ ...params }) -> Square.BulkDeleteOrderCustomAttributesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes order [custom attributes](entity:CustomAttribute) as a bulk operation.

Use this endpoint to delete one or more custom attributes from one or more orders.
A custom attribute is based on a custom attribute definition in a Square seller account. (To create a
custom attribute definition, use the [CreateOrderCustomAttributeDefinition](api-endpoint:OrderCustomAttributes-CreateOrderCustomAttributeDefinition) endpoint.)

This `BulkDeleteOrderCustomAttributes` endpoint accepts a map of 1 to 25 individual delete
requests and returns a map of individual delete responses. Each delete request has a unique ID
and provides an order ID and custom attribute. Each delete response is returned with the ID
of the corresponding request.

To delete a custom attribute owned by another application, the `visibility` setting
must be `VISIBILITY_READ_WRITE_VALUES`. Note that seller-defined custom attributes
(also known as custom fields) are always set to `VISIBILITY_READ_WRITE_VALUES`.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.orders.customAttributes.batchDelete({
    values: {
        "cover-count": {
            key: "cover-count",
            orderId: "7BbXGEIWNldxAzrtGf9GPVZTwZ4F",
        },
        "table-number": {
            key: "table-number",
            orderId: "7BbXGEIWNldxAzrtGf9GPVZTwZ4F",
        },
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.orders.BulkDeleteOrderCustomAttributesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomAttributes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.orders.customAttributes.<a href="/src/api/resources/orders/resources/customAttributes/client/Client.ts">batchUpsert</a>({ ...params }) -> Square.BulkUpsertOrderCustomAttributesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates or updates order [custom attributes](entity:CustomAttribute) as a bulk operation.

Use this endpoint to delete one or more custom attributes from one or more orders.
A custom attribute is based on a custom attribute definition in a Square seller account. (To create a
custom attribute definition, use the [CreateOrderCustomAttributeDefinition](api-endpoint:OrderCustomAttributes-CreateOrderCustomAttributeDefinition) endpoint.)

This `BulkUpsertOrderCustomAttributes` endpoint accepts a map of 1 to 25 individual upsert
requests and returns a map of individual upsert responses. Each upsert request has a unique ID
and provides an order ID and custom attribute. Each upsert response is returned with the ID
of the corresponding request.

To create or update a custom attribute owned by another application, the `visibility` setting
must be `VISIBILITY_READ_WRITE_VALUES`. Note that seller-defined custom attributes
(also known as custom fields) are always set to `VISIBILITY_READ_WRITE_VALUES`.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.orders.customAttributes.batchUpsert({
    values: {
        "cover-count": {
            customAttribute: {
                key: "cover-count",
                value: "6",
                version: 2,
            },
            orderId: "7BbXGEIWNldxAzrtGf9GPVZTwZ4F",
        },
        "table-number": {
            customAttribute: {
                key: "table-number",
                value: "11",
                version: 4,
            },
            orderId: "7BbXGEIWNldxAzrtGf9GPVZTwZ4F",
        },
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.orders.BulkUpsertOrderCustomAttributesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomAttributes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.orders.customAttributes.<a href="/src/api/resources/orders/resources/customAttributes/client/Client.ts">list</a>({ ...params }) -> core.Page<Square.CustomAttribute></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists the [custom attributes](entity:CustomAttribute) associated with an order.

You can use the `with_definitions` query parameter to also retrieve custom attribute definitions
in the same call.

When all response pages are retrieved, the results include all custom attributes that are
visible to the requesting application, including those that are owned by other applications
and set to `VISIBILITY_READ_ONLY` or `VISIBILITY_READ_WRITE_VALUES`.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.orders.customAttributes.list({
    orderId: "order_id",
});
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
const page = await client.orders.customAttributes.list({
    orderId: "order_id",
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.orders.ListCustomAttributesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomAttributes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.orders.customAttributes.<a href="/src/api/resources/orders/resources/customAttributes/client/Client.ts">get</a>({ ...params }) -> Square.RetrieveOrderCustomAttributeResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a [custom attribute](entity:CustomAttribute) associated with an order.

You can use the `with_definition` query parameter to also retrieve the custom attribute definition
in the same call.

To retrieve a custom attribute owned by another application, the `visibility` setting must be
`VISIBILITY_READ_ONLY` or `VISIBILITY_READ_WRITE_VALUES`. Note that seller-defined custom attributes
also known as custom fields) are always set to `VISIBILITY_READ_WRITE_VALUES`.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.orders.customAttributes.get({
    orderId: "order_id",
    customAttributeKey: "custom_attribute_key",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.orders.GetCustomAttributesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomAttributes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.orders.customAttributes.<a href="/src/api/resources/orders/resources/customAttributes/client/Client.ts">upsert</a>({ ...params }) -> Square.UpsertOrderCustomAttributeResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates or updates a [custom attribute](entity:CustomAttribute) for an order.

Use this endpoint to set the value of a custom attribute for a specific order.
A custom attribute is based on a custom attribute definition in a Square seller account. (To create a
custom attribute definition, use the [CreateOrderCustomAttributeDefinition](api-endpoint:OrderCustomAttributes-CreateOrderCustomAttributeDefinition) endpoint.)

To create or update a custom attribute owned by another application, the `visibility` setting
must be `VISIBILITY_READ_WRITE_VALUES`. Note that seller-defined custom attributes
(also known as custom fields) are always set to `VISIBILITY_READ_WRITE_VALUES`.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.orders.customAttributes.upsert({
    orderId: "order_id",
    customAttributeKey: "custom_attribute_key",
    customAttribute: {
        key: "table-number",
        value: "42",
        version: 1,
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.orders.UpsertOrderCustomAttributeRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomAttributes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.orders.customAttributes.<a href="/src/api/resources/orders/resources/customAttributes/client/Client.ts">delete</a>({ ...params }) -> Square.DeleteOrderCustomAttributeResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes a [custom attribute](entity:CustomAttribute) associated with a customer profile.

To delete a custom attribute owned by another application, the `visibility` setting must be
`VISIBILITY_READ_WRITE_VALUES`. Note that seller-defined custom attributes
(also known as custom fields) are always set to `VISIBILITY_READ_WRITE_VALUES`.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.orders.customAttributes.delete({
    orderId: "order_id",
    customAttributeKey: "custom_attribute_key",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.orders.DeleteCustomAttributesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomAttributes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## TeamMembers WageSetting

<details><summary><code>client.teamMembers.wageSetting.<a href="/src/api/resources/teamMembers/resources/wageSetting/client/Client.ts">get</a>({ ...params }) -> Square.GetWageSettingResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a `WageSetting` object for a team member specified
by `TeamMember.id`. For more information, see
[Troubleshooting the Team API](https://developer.squareup.com/docs/team/troubleshooting#retrievewagesetting).

Square recommends using [RetrieveTeamMember](api-endpoint:Team-RetrieveTeamMember) or [SearchTeamMembers](api-endpoint:Team-SearchTeamMembers)
to get this information directly from the `TeamMember.wage_setting` field.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.teamMembers.wageSetting.get({
    teamMemberId: "team_member_id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.teamMembers.GetWageSettingRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WageSetting.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.teamMembers.wageSetting.<a href="/src/api/resources/teamMembers/resources/wageSetting/client/Client.ts">update</a>({ ...params }) -> Square.UpdateWageSettingResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates or updates a `WageSetting` object. The object is created if a
`WageSetting` with the specified `team_member_id` doesn't exist. Otherwise,
it fully replaces the `WageSetting` object for the team member.
The `WageSetting` is returned on a successful update. For more information, see
[Troubleshooting the Team API](https://developer.squareup.com/docs/team/troubleshooting#create-or-update-a-wage-setting).

Square recommends using [CreateTeamMember](api-endpoint:Team-CreateTeamMember) or [UpdateTeamMember](api-endpoint:Team-UpdateTeamMember)
to manage the `TeamMember.wage_setting` field directly.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.teamMembers.wageSetting.update({
    teamMemberId: "team_member_id",
    wageSetting: {
        jobAssignments: [
            {
                jobTitle: "Manager",
                payType: "SALARY",
                annualRate: {
                    amount: 3000000,
                    currency: "USD",
                },
                weeklyHours: 40,
            },
            {
                jobTitle: "Cashier",
                payType: "HOURLY",
                hourlyRate: {
                    amount: 2000,
                    currency: "USD",
                },
            },
        ],
        isOvertimeExempt: true,
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.teamMembers.UpdateWageSettingRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WageSetting.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Terminal Actions

<details><summary><code>client.terminal.actions.<a href="/src/api/resources/terminal/resources/actions/client/Client.ts">create</a>({ ...params }) -> Square.CreateTerminalActionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a Terminal action request and sends it to the specified device.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.terminal.actions.create({
    idempotencyKey: "thahn-70e75c10-47f7-4ab6-88cc-aaa4076d065e",
    action: {
        deviceId: "{{DEVICE_ID}}",
        deadlineDuration: "PT5M",
        type: "SAVE_CARD",
        saveCardOptions: {
            customerId: "{{CUSTOMER_ID}}",
            referenceId: "user-id-1",
        },
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.terminal.CreateTerminalActionRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Actions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.terminal.actions.<a href="/src/api/resources/terminal/resources/actions/client/Client.ts">search</a>({ ...params }) -> Square.SearchTerminalActionsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a filtered list of Terminal action requests created by the account making the request. Terminal action requests are available for 30 days.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.terminal.actions.search({
    query: {
        filter: {
            createdAt: {
                startAt: "2022-04-01T00:00:00.000Z",
            },
        },
        sort: {
            sortOrder: "DESC",
        },
    },
    limit: 2,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.terminal.SearchTerminalActionsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Actions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.terminal.actions.<a href="/src/api/resources/terminal/resources/actions/client/Client.ts">get</a>({ ...params }) -> Square.GetTerminalActionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a Terminal action request by `action_id`. Terminal action requests are available for 30 days.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.terminal.actions.get({
    actionId: "action_id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.terminal.GetActionsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Actions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.terminal.actions.<a href="/src/api/resources/terminal/resources/actions/client/Client.ts">cancel</a>({ ...params }) -> Square.CancelTerminalActionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Cancels a Terminal action request if the status of the request permits it.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.terminal.actions.cancel({
    actionId: "action_id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.terminal.CancelActionsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Actions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Terminal Checkouts

<details><summary><code>client.terminal.checkouts.<a href="/src/api/resources/terminal/resources/checkouts/client/Client.ts">create</a>({ ...params }) -> Square.CreateTerminalCheckoutResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a Terminal checkout request and sends it to the specified device to take a payment
for the requested amount.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.terminal.checkouts.create({
    idempotencyKey: "28a0c3bc-7839-11ea-bc55-0242ac130003",
    checkout: {
        amountMoney: {
            amount: 2610,
            currency: "USD",
        },
        referenceId: "id11572",
        note: "A brief note",
        deviceOptions: {
            deviceId: "dbb5d83a-7838-11ea-bc55-0242ac130003",
        },
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.terminal.CreateTerminalCheckoutRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Checkouts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.terminal.checkouts.<a href="/src/api/resources/terminal/resources/checkouts/client/Client.ts">search</a>({ ...params }) -> Square.SearchTerminalCheckoutsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a filtered list of Terminal checkout requests created by the application making the request. Only Terminal checkout requests created for the merchant scoped to the OAuth token are returned. Terminal checkout requests are available for 30 days.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.terminal.checkouts.search({
    query: {
        filter: {
            status: "COMPLETED",
        },
    },
    limit: 2,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.terminal.SearchTerminalCheckoutsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Checkouts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.terminal.checkouts.<a href="/src/api/resources/terminal/resources/checkouts/client/Client.ts">get</a>({ ...params }) -> Square.GetTerminalCheckoutResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a Terminal checkout request by `checkout_id`. Terminal checkout requests are available for 30 days.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.terminal.checkouts.get({
    checkoutId: "checkout_id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.terminal.GetCheckoutsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Checkouts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.terminal.checkouts.<a href="/src/api/resources/terminal/resources/checkouts/client/Client.ts">cancel</a>({ ...params }) -> Square.CancelTerminalCheckoutResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Cancels a Terminal checkout request if the status of the request permits it.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.terminal.checkouts.cancel({
    checkoutId: "checkout_id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.terminal.CancelCheckoutsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Checkouts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Terminal Refunds

<details><summary><code>client.terminal.refunds.<a href="/src/api/resources/terminal/resources/refunds/client/Client.ts">create</a>({ ...params }) -> Square.CreateTerminalRefundResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a request to refund an Interac payment completed on a Square Terminal. Refunds for Interac payments on a Square Terminal are supported only for Interac debit cards in Canada. Other refunds for Terminal payments should use the Refunds API. For more information, see [Refunds API](api:Refunds).

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.terminal.refunds.create({
    idempotencyKey: "402a640b-b26f-401f-b406-46f839590c04",
    refund: {
        paymentId: "5O5OvgkcNUhl7JBuINflcjKqUzXZY",
        amountMoney: {
            amount: 111,
            currency: "CAD",
        },
        reason: "Returning items",
        deviceId: "f72dfb8e-4d65-4e56-aade-ec3fb8d33291",
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.terminal.CreateTerminalRefundRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Refunds.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.terminal.refunds.<a href="/src/api/resources/terminal/resources/refunds/client/Client.ts">search</a>({ ...params }) -> Square.SearchTerminalRefundsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a filtered list of Interac Terminal refund requests created by the seller making the request. Terminal refund requests are available for 30 days.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.terminal.refunds.search({
    query: {
        filter: {
            status: "COMPLETED",
        },
    },
    limit: 1,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.terminal.SearchTerminalRefundsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Refunds.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.terminal.refunds.<a href="/src/api/resources/terminal/resources/refunds/client/Client.ts">get</a>({ ...params }) -> Square.GetTerminalRefundResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves an Interac Terminal refund object by ID. Terminal refund objects are available for 30 days.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.terminal.refunds.get({
    terminalRefundId: "terminal_refund_id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.terminal.GetRefundsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Refunds.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.terminal.refunds.<a href="/src/api/resources/terminal/resources/refunds/client/Client.ts">cancel</a>({ ...params }) -> Square.CancelTerminalRefundResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Cancels an Interac Terminal refund request by refund request ID if the status of the request permits it.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.terminal.refunds.cancel({
    terminalRefundId: "terminal_refund_id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.terminal.CancelRefundsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Refunds.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Webhooks EventTypes

<details><summary><code>client.webhooks.eventTypes.<a href="/src/api/resources/webhooks/resources/eventTypes/client/Client.ts">list</a>({ ...params }) -> Square.ListWebhookEventTypesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists all webhook event types that can be subscribed to.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.webhooks.eventTypes.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.webhooks.ListEventTypesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EventTypes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Webhooks Subscriptions

<details><summary><code>client.webhooks.subscriptions.<a href="/src/api/resources/webhooks/resources/subscriptions/client/Client.ts">list</a>({ ...params }) -> core.Page<Square.WebhookSubscription></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists all webhook subscriptions owned by your application.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.webhooks.subscriptions.list();
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
const page = await client.webhooks.subscriptions.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.webhooks.ListSubscriptionsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Subscriptions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.webhooks.subscriptions.<a href="/src/api/resources/webhooks/resources/subscriptions/client/Client.ts">create</a>({ ...params }) -> Square.CreateWebhookSubscriptionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a webhook subscription.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.webhooks.subscriptions.create({
    idempotencyKey: "63f84c6c-2200-4c99-846c-2670a1311fbf",
    subscription: {
        name: "Example Webhook Subscription",
        eventTypes: ["payment.created", "payment.updated"],
        notificationUrl: "https://example-webhook-url.com",
        apiVersion: "2021-12-15",
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.webhooks.CreateWebhookSubscriptionRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Subscriptions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.webhooks.subscriptions.<a href="/src/api/resources/webhooks/resources/subscriptions/client/Client.ts">get</a>({ ...params }) -> Square.GetWebhookSubscriptionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a webhook subscription identified by its ID.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.webhooks.subscriptions.get({
    subscriptionId: "subscription_id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.webhooks.GetSubscriptionsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Subscriptions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.webhooks.subscriptions.<a href="/src/api/resources/webhooks/resources/subscriptions/client/Client.ts">update</a>({ ...params }) -> Square.UpdateWebhookSubscriptionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates a webhook subscription.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.webhooks.subscriptions.update({
    subscriptionId: "subscription_id",
    subscription: {
        name: "Updated Example Webhook Subscription",
        enabled: false,
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.webhooks.UpdateWebhookSubscriptionRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Subscriptions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.webhooks.subscriptions.<a href="/src/api/resources/webhooks/resources/subscriptions/client/Client.ts">delete</a>({ ...params }) -> Square.DeleteWebhookSubscriptionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes a webhook subscription.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.webhooks.subscriptions.delete({
    subscriptionId: "subscription_id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.webhooks.DeleteSubscriptionsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Subscriptions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.webhooks.subscriptions.<a href="/src/api/resources/webhooks/resources/subscriptions/client/Client.ts">updateSignatureKey</a>({ ...params }) -> Square.UpdateWebhookSubscriptionSignatureKeyResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates a webhook subscription by replacing the existing signature key with a new one.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.webhooks.subscriptions.updateSignatureKey({
    subscriptionId: "subscription_id",
    idempotencyKey: "ed80ae6b-0654-473b-bbab-a39aee89a60d",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.webhooks.UpdateWebhookSubscriptionSignatureKeyRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Subscriptions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.webhooks.subscriptions.<a href="/src/api/resources/webhooks/resources/subscriptions/client/Client.ts">test</a>({ ...params }) -> Square.TestWebhookSubscriptionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Tests a webhook subscription by sending a test event to the notification URL.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.webhooks.subscriptions.test({
    subscriptionId: "subscription_id",
    eventType: "payment.created",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Square.webhooks.TestWebhookSubscriptionRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Subscriptions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>
