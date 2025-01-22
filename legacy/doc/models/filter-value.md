
# Filter Value

A filter to select resources based on an exact field value. For any given
value, the value can only be in one property. Depending on the field, either
all properties can be set or only a subset will be available.

Refer to the documentation of the field.

## Structure

`FilterValue`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `all` | `string[] \| null \| undefined` | Optional | A list of terms that must be present on the field of the resource. |
| `any` | `string[] \| null \| undefined` | Optional | A list of terms where at least one of them must be present on the<br>field of the resource. |
| `none` | `string[] \| null \| undefined` | Optional | A list of terms that must not be present on the field the resource |

## Example (as JSON)

```json
{
  "all": [
    "all9",
    "all0",
    "all1"
  ],
  "any": [
    "any8",
    "any9",
    "any0"
  ],
  "none": [
    "none3",
    "none4"
  ]
}
```

