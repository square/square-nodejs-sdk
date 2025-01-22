
# Terminal Action Action Type

Describes the type of this unit and indicates which field contains the unit information. This is an ‘open’ enum.

## Enumeration

`TerminalActionActionType`

## Fields

| Name | Description |
|  --- | --- |
| `QR_CODE` | The action represents a request to display a QR code. Details are contained in<br>the `qr_code_options` object. |
| `PING` | The action represents a request to check if the specific device is<br>online or currently active with the merchant in question. Does not require an action options value. |
| `SAVE_CARD` | Represents a request to save a card for future card-on-file use. Details are contained<br>in the `save_card_options` object. |
| `SIGNATURE` | The action represents a request to capture a buyer's signature. Details are contained<br>in the `signature_options` object. |
| `CONFIRMATION` | The action represents a request to collect a buyer's confirmation decision to the<br>displayed terms. Details are contained in the `confirmation_options` object. |
| `RECEIPT` | The action represents a request to display the receipt screen options. Details are<br>contained in the `receipt_options` object. |
| `DATA_COLLECTION` | The action represents a request to collect a buyer's text data. Details<br>are contained in the `data_collection_options` object. |
| `SELECT` | The action represents a request to allow the buyer to select from provided options.<br>Details are contained in the `select_options` object. |

