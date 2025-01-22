# Snippets

```ts
const snippetsApi = client.snippetsApi;
```

## Class Name

`SnippetsApi`

## Methods

* [Delete Snippet](../../doc/api/snippets.md#delete-snippet)
* [Retrieve Snippet](../../doc/api/snippets.md#retrieve-snippet)
* [Upsert Snippet](../../doc/api/snippets.md#upsert-snippet)


# Delete Snippet

Removes your snippet from a Square Online site.

You can call [ListSites](../../doc/api/sites.md#list-sites) to get the IDs of the sites that belong to a seller.

__Note:__ Square Online APIs are publicly available as part of an early access program. For more information, see [Early access program for Square Online APIs](https://developer.squareup.com/docs/online-api#early-access-program-for-square-online-apis).

```ts
async deleteSnippet(
  siteId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DeleteSnippetResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `siteId` | `string` | Template, Required | The ID of the site that contains the snippet. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DeleteSnippetResponse`](../../doc/models/delete-snippet-response.md)

## Example Usage

```ts
const siteId = 'site_id6';

try {
  const { result, ...httpResponse } = await snippetsApi.deleteSnippet(siteId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Retrieve Snippet

Retrieves your snippet from a Square Online site. A site can contain snippets from multiple snippet applications, but you can retrieve only the snippet that was added by your application.

You can call [ListSites](../../doc/api/sites.md#list-sites) to get the IDs of the sites that belong to a seller.

__Note:__ Square Online APIs are publicly available as part of an early access program. For more information, see [Early access program for Square Online APIs](https://developer.squareup.com/docs/online-api#early-access-program-for-square-online-apis).

```ts
async retrieveSnippet(
  siteId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<RetrieveSnippetResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `siteId` | `string` | Template, Required | The ID of the site that contains the snippet. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`RetrieveSnippetResponse`](../../doc/models/retrieve-snippet-response.md)

## Example Usage

```ts
const siteId = 'site_id6';

try {
  const { result, ...httpResponse } = await snippetsApi.retrieveSnippet(siteId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Upsert Snippet

Adds a snippet to a Square Online site or updates the existing snippet on the site.
The snippet code is appended to the end of the `head` element on every page of the site, except checkout pages. A snippet application can add one snippet to a given site.

You can call [ListSites](../../doc/api/sites.md#list-sites) to get the IDs of the sites that belong to a seller.

__Note:__ Square Online APIs are publicly available as part of an early access program. For more information, see [Early access program for Square Online APIs](https://developer.squareup.com/docs/online-api#early-access-program-for-square-online-apis).

```ts
async upsertSnippet(
  siteId: string,
  body: UpsertSnippetRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<UpsertSnippetResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `siteId` | `string` | Template, Required | The ID of the site where you want to add or update the snippet. |
| `body` | [`UpsertSnippetRequest`](../../doc/models/upsert-snippet-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`UpsertSnippetResponse`](../../doc/models/upsert-snippet-response.md)

## Example Usage

```ts
const siteId = 'site_id6';

const body: UpsertSnippetRequest = {
  snippet: {
    content: '<script>var js = 1;</script>',
  },
};

try {
  const { result, ...httpResponse } = await snippetsApi.upsertSnippet(
  siteId,
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

