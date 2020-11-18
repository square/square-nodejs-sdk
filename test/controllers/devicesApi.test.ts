import { DevicesApi, CreateDeviceCodeRequest } from "../../src"
import { testClient } from "../testClient"
import { v4 as uuidv4 } from "uuid"

describe('Devices API', () => {
  let devicesApi : DevicesApi

  let deviceCodeId : string

  beforeAll(() => {
    devicesApi = testClient.devicesApi
  })

  it('should testListDevicesCodes', async () => {
    let { statusCode } = await devicesApi.listDeviceCodes()
    expect(statusCode).toBe(200)
  })

  it('should testCreateDeviceCode', async () => {
    let body : CreateDeviceCodeRequest = {
      idempotencyKey: uuidv4(),
      deviceCode: {
        productType: 'TERMINAL_API'
      }
    }
    let { result, statusCode } = await devicesApi.createDeviceCode(body)
    expect(statusCode).toBe(200)
    expect(result).toEqual(expect.objectContaining({
      deviceCode : expect.objectContaining({
        productType: 'TERMINAL_API'
      })
    }))

    deviceCodeId = result.deviceCode?.id!
  })

  it('should testListDevicesCodes', async () => {
    let { result : { deviceCode },statusCode } = await devicesApi.getDeviceCode(deviceCodeId)
    expect(statusCode).toBe(200)
    expect(deviceCode?.id!).toBe(deviceCodeId)
  })
})
