import { CashDrawersApi, LocationsApi } from "../../src"
import { testClient } from "../testClient"

describe('CashDrawers API', () => {
  let cashDrawersApi : CashDrawersApi
  let locationsApi   : LocationsApi

  let locationId : string

  beforeAll(async () => {
   cashDrawersApi = testClient.cashDrawersApi
   locationsApi = testClient.locationsApi

   let { result: { locations } } = await locationsApi.listLocations()

   locationId = (locations!)[0].id!
  })

  it('should testListCashDrawerShiftEvents', async () => {
    const nowMs = Date.now()
    const start =  (new Date(nowMs - (1000 * 60 * 60))).toISOString()
    const end  = (new Date()).toISOString()
    let { statusCode } =  await cashDrawersApi.listCashDrawerShifts(locationId, undefined, start, end)
    expect(statusCode).toBe(200)
  })
})
