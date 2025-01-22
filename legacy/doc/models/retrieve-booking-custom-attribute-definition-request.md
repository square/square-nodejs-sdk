
# Retrieve Booking Custom Attribute Definition Request

Represents a [RetrieveBookingCustomAttributeDefinition](../../doc/api/booking-custom-attributes.md#retrieve-booking-custom-attribute-definition) request.

## Structure

`RetrieveBookingCustomAttributeDefinitionRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `version` | `number \| undefined` | Optional | The current version of the custom attribute definition, which is used for strongly consistent<br>reads to guarantee that you receive the most up-to-date data. When included in the request,<br>Square returns the specified version or a higher version if one exists. If the specified version<br>is higher than the current version, Square returns a `BAD_REQUEST` error. |

## Example (as JSON)

```json
{
  "version": 70
}
```

