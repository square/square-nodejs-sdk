
# List Order Custom Attribute Definitions Response

Represents a response from listing order custom attribute definitions.

## Structure

`ListOrderCustomAttributeDefinitionsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customAttributeDefinitions` | [`CustomAttributeDefinition[]`](../../doc/models/custom-attribute-definition.md) | Required | The retrieved custom attribute definitions. If no custom attribute definitions are found, Square returns an empty object (`{}`). |
| `cursor` | `string \| undefined` | Optional | The cursor to provide in your next call to this endpoint to retrieve the next page of results for your original request.<br>This field is present only if the request succeeded and additional results are available.<br>For more information, see [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination). |
| `errors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | Any errors that occurred during the request. |

## Example (as JSON)

```json
{
  "cursor": "aVM2BkhPMhCwTeh26dbFSsNMgHBbCpYF87NsAMd5scluQYoVTXFG1cimzDWzWjQsGSILbIsMW8xgvDXvGu0a2hzcxnSET9uqO8SPNIwJwiG5ZlPZhudh035I74RPMYomwk2TH4ZyzRIFU6DuBGBwBMwiYpTjAnSCYNQnLL5aqopIcIFoJcBpQxJ8MzC",
  "custom_attribute_definitions": [
    {
      "created_at": "2022-08-30T19:40:34.096Z",
      "key": "111627037215791390475626806237509578915",
      "schema": null,
      "updated_at": "2022-08-30T19:40:34.096Z",
      "version": 1,
      "visibility": "VISIBILITY_HIDDEN"
    },
    {
      "created_at": "2022-08-30T19:52:19.288Z",
      "key": "126152675641607375924561306264587662207",
      "schema": null,
      "updated_at": "2022-08-30T19:52:19.288Z",
      "version": 1,
      "visibility": "VISIBILITY_HIDDEN"
    },
    {
      "created_at": "2022-08-30T19:52:21.972Z",
      "key": "132229360713474508832800935172665181309",
      "schema": null,
      "updated_at": "2022-08-30T19:52:21.972Z",
      "version": 1,
      "visibility": "VISIBILITY_HIDDEN"
    },
    {
      "created_at": "2022-08-30T19:22:45.403Z",
      "key": "133736670883961047350849618723256277335",
      "schema": null,
      "updated_at": "2022-08-30T19:22:45.403Z",
      "version": 1,
      "visibility": "VISIBILITY_HIDDEN"
    },
    {
      "created_at": "2022-08-30T19:30:09.394Z",
      "key": "134023462651854972506633162970243971159",
      "schema": null,
      "updated_at": "2022-08-30T19:30:09.394Z",
      "version": 1,
      "visibility": "VISIBILITY_HIDDEN"
    },
    {
      "created_at": "2022-08-30T19:48:16.264Z",
      "key": "136212061194607338159028472153646132916",
      "schema": null,
      "updated_at": "2022-08-30T19:48:16.264Z",
      "version": 1,
      "visibility": "VISIBILITY_HIDDEN"
    },
    {
      "created_at": "2022-08-30T20:14:26.317Z",
      "key": "141651596820259452775504067410577872889",
      "schema": null,
      "updated_at": "2022-08-30T20:14:26.317Z",
      "version": 1,
      "visibility": "VISIBILITY_HIDDEN"
    },
    {
      "created_at": "2022-08-30T20:08:22.614Z",
      "key": "147272735064661946811911175641629624380",
      "schema": null,
      "updated_at": "2022-08-30T20:08:22.614Z",
      "version": 1,
      "visibility": "VISIBILITY_HIDDEN"
    },
    {
      "created_at": "2022-08-30T19:33:37.879Z",
      "key": "154293667112513202074149596622396659965",
      "schema": null,
      "updated_at": "2022-08-30T19:33:37.879Z",
      "version": 1,
      "visibility": "VISIBILITY_HIDDEN"
    },
    {
      "created_at": "2022-08-30T20:09:25.463Z",
      "key": "157514410686015059150439042434283096945",
      "schema": null,
      "updated_at": "2022-08-30T20:09:25.463Z",
      "version": 1,
      "visibility": "VISIBILITY_HIDDEN"
    },
    {
      "created_at": "2022-08-30T20:14:41.596Z",
      "key": "158803051939659258729577878113914994658",
      "schema": null,
      "updated_at": "2022-08-30T20:14:41.596Z",
      "version": 1,
      "visibility": "VISIBILITY_HIDDEN"
    },
    {
      "created_at": "2022-08-30T20:08:59.863Z",
      "key": "163654764750506925634649781514923867276",
      "schema": null,
      "updated_at": "2022-08-30T20:08:59.863Z",
      "version": 1,
      "visibility": "VISIBILITY_HIDDEN"
    },
    {
      "created_at": "2022-08-30T19:53:19.633Z",
      "key": "163996750485893483971604258547094799623",
      "schema": null,
      "updated_at": "2022-08-30T19:53:19.633Z",
      "version": 1,
      "visibility": "VISIBILITY_HIDDEN"
    },
    {
      "created_at": "2022-08-30T19:59:35.662Z",
      "key": "17116545288175190772020212470402879991",
      "schema": null,
      "updated_at": "2022-08-30T19:59:35.662Z",
      "version": 1,
      "visibility": "VISIBILITY_HIDDEN"
    },
    {
      "created_at": "2022-08-30T20:17:53.666Z",
      "key": "176575831392330233624899250004453426584",
      "schema": null,
      "updated_at": "2022-08-30T20:17:53.666Z",
      "version": 1,
      "visibility": "VISIBILITY_HIDDEN"
    },
    {
      "created_at": "2022-08-30T20:29:06.224Z",
      "key": "183970498782451227782092030924459084339",
      "schema": null,
      "updated_at": "2022-08-30T20:29:06.224Z",
      "version": 1,
      "visibility": "VISIBILITY_HIDDEN"
    },
    {
      "created_at": "2022-08-30T19:53:03.686Z",
      "key": "188539637539839368124250660866497721857",
      "schema": null,
      "updated_at": "2022-08-30T19:53:03.686Z",
      "version": 1,
      "visibility": "VISIBILITY_HIDDEN"
    },
    {
      "created_at": "2022-08-30T20:15:32.204Z",
      "key": "193396595413170011456682562082471783073",
      "schema": null,
      "updated_at": "2022-08-30T20:15:32.204Z",
      "version": 1,
      "visibility": "VISIBILITY_HIDDEN"
    },
    {
      "created_at": "2022-08-30T20:15:31.096Z",
      "key": "19521320534979629313284826964274790274",
      "schema": null,
      "updated_at": "2022-08-30T20:15:31.096Z",
      "version": 1,
      "visibility": "VISIBILITY_HIDDEN"
    },
    {
      "created_at": "2022-08-30T20:29:03.093Z",
      "key": "196282042176236836075541927350443201675",
      "schema": null,
      "updated_at": "2022-08-30T20:29:03.093Z",
      "version": 1,
      "visibility": "VISIBILITY_HIDDEN"
    }
  ]
}
```

