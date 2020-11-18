
# V1 List Pages Response

## Structure

`V1ListPagesResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `items` | [`V1Page[]`](/doc/models/v1-page.md) | Optional | - |

## Example (as JSON)

```json
{
  "items": [
    {
      "id": "id7",
      "name": "name7",
      "page_index": 19,
      "cells": [
        {
          "page_id": "page_id9",
          "row": 207,
          "column": 131,
          "object_type": "PLACEHOLDER",
          "object_id": "object_id7"
        },
        {
          "page_id": "page_id0",
          "row": 206,
          "column": 132,
          "object_type": "ITEM",
          "object_id": "object_id8"
        },
        {
          "page_id": "page_id1",
          "row": 205,
          "column": 133,
          "object_type": "DISCOUNT",
          "object_id": "object_id9"
        }
      ]
    },
    {
      "id": "id8",
      "name": "name8",
      "page_index": 20,
      "cells": [
        {
          "page_id": "page_id0",
          "row": 206,
          "column": 132,
          "object_type": "ITEM",
          "object_id": "object_id8"
        }
      ]
    }
  ]
}
```

