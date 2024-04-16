# Sites

```ts
const sitesApi = client.sitesApi;
```

## Class Name

`SitesApi`


# List Sites

Lists the Square Online sites that belong to a seller. Sites are listed in descending order by the `created_at` date.

__Note:__ Square Online APIs are publicly available as part of an early access program. For more information, see [Early access program for Square Online APIs](https://developer.squareup.com/docs/online-api#early-access-program-for-square-online-apis).

```ts
async listSites(
  requestOptions?: RequestOptions
): Promise<ApiResponse<ListSitesResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ListSitesResponse`](../../doc/models/list-sites-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await sitesApi.listSites();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

