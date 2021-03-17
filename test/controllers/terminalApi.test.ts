import { TerminalApi, CreateTerminalCheckoutRequest, TerminalCheckout, SearchTerminalCheckoutsRequest } from "../../src"
import { testClient } from "../testClient"
import { v4 as uuidv4 } from 'uuid'

describe('Terminal API', () => {
  let terminalApi : TerminalApi
  let checkoutId  : string

  beforeAll(() => {
    terminalApi = testClient.terminalApi
  })

  it('should testCreateTerminalCheckout', async () => {
    const sandboxDeviceId = 'da40d603-c2ea-4a65-8cfd-f42e36dab0c7'
    const checkout: TerminalCheckout = {
      deviceOptions:{
        deviceId: sandboxDeviceId
      },
      amountMoney: {
        amount: BigInt(100),
        currency: 'USD'
      }
    }
    const body  : CreateTerminalCheckoutRequest = {
      checkout,
      idempotencyKey: uuidv4(),
    }
    let {result, statusCode} = await terminalApi.createTerminalCheckout(body)
    expect(statusCode).toBe(200)


    checkoutId = result.checkout?.id!
  })

  it('should testSearchTerminalCheckouts', async () => {
    let body: SearchTerminalCheckoutsRequest = {
      limit: 1
    }
    let {statusCode} = await terminalApi.searchTerminalCheckouts(body)
    expect(statusCode).toBe(200)
  })

  it('should testGetTerminalCheckouts', async () => {
    let { result, statusCode } = await terminalApi.getTerminalCheckout(checkoutId)
    expect(statusCode).toBe(200)
    expect(result.checkout?.id!).toBe(checkoutId)
  })

  it('should testCancelTerminalCheckouts', async () => {

    let { statusCode } = await terminalApi.cancelTerminalCheckout(checkoutId)
    expect(statusCode).toBe(200)
  })
})
