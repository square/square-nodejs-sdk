# Bank Accounts

```ts
const bankAccountsApi = client.bankAccountsApi;
```

## Class Name

`BankAccountsApi`

## Methods

* [List Bank Accounts](../../doc/api/bank-accounts.md#list-bank-accounts)
* [Get Bank Account by V1 Id](../../doc/api/bank-accounts.md#get-bank-account-by-v1-id)
* [Get Bank Account](../../doc/api/bank-accounts.md#get-bank-account)


# List Bank Accounts

Returns a list of [BankAccount](../../doc/models/bank-account.md) objects linked to a Square account.

```ts
async listBankAccounts(
  cursor?: string,
  limit?: number,
  locationId?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ListBankAccountsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cursor` | `string \| undefined` | Query, Optional | The pagination cursor returned by a previous call to this endpoint.<br>Use it in the next `ListBankAccounts` request to retrieve the next set<br>of results.<br><br>See the [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination) guide for more information. |
| `limit` | `number \| undefined` | Query, Optional | Upper limit on the number of bank accounts to return in the response.<br>Currently, 1000 is the largest supported limit. You can specify a limit<br>of up to 1000 bank accounts. This is also the default limit. |
| `locationId` | `string \| undefined` | Query, Optional | Location ID. You can specify this optional filter<br>to retrieve only the linked bank accounts belonging to a specific location. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ListBankAccountsResponse`](../../doc/models/list-bank-accounts-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await bankAccountsApi.listBankAccounts();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Bank Account by V1 Id

Returns details of a [BankAccount](../../doc/models/bank-account.md) identified by V1 bank account ID.

```ts
async getBankAccountByV1Id(
  v1BankAccountId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetBankAccountByV1IdResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `v1BankAccountId` | `string` | Template, Required | Connect V1 ID of the desired `BankAccount`. For more information, see<br>[Retrieve a bank account by using an ID issued by V1 Bank Accounts API](https://developer.squareup.com/docs/bank-accounts-api#retrieve-a-bank-account-by-using-an-id-issued-by-v1-bank-accounts-api). |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GetBankAccountByV1IdResponse`](../../doc/models/get-bank-account-by-v1-id-response.md)

## Example Usage

```ts
const v1BankAccountId = 'v1_bank_account_id8';

try {
  const { result, ...httpResponse } = await bankAccountsApi.getBankAccountByV1Id(v1BankAccountId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Bank Account

Returns details of a [BankAccount](../../doc/models/bank-account.md)
linked to a Square account.

```ts
async getBankAccount(
  bankAccountId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetBankAccountResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `bankAccountId` | `string` | Template, Required | Square-issued ID of the desired `BankAccount`. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GetBankAccountResponse`](../../doc/models/get-bank-account-response.md)

## Example Usage

```ts
const bankAccountId = 'bank_account_id0';

try {
  const { result, ...httpResponse } = await bankAccountsApi.getBankAccount(bankAccountId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

