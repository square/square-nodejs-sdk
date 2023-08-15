
# Archived State

Defines the values for the `archived_state` query expression
used in [SearchCatalogItems](../../doc/api/catalog.md#search-catalog-items)
to return the archived, not archived or either type of catalog items.

## Enumeration

`ArchivedState`

## Fields

| Name | Description |
|  --- | --- |
| `ARCHIVED_STATE_NOT_ARCHIVED` | Requested items are not archived with the `is_archived` attribute set to `false`. |
| `ARCHIVED_STATE_ARCHIVED` | Requested items are archived with the `is_archived` attribute set to `true`. |
| `ARCHIVED_STATE_ALL` | Requested items can be archived or not archived. |

