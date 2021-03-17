import { TeamApi, CreateTeamMemberRequest, TeamMember, UpdateTeamMemberRequest, UpdateWageSettingRequest, WageSetting, JobAssignment, BulkCreateTeamMembersRequest, BulkUpdateTeamMembersRequest } from "../../src"
import { testClient } from "../testClient"
import { v4 as uuidv4} from 'uuid'

describe('Team API', () => {
  let teamApi : TeamApi

  let memberId   : string
  const bulkIds  : string[] = []
  beforeAll(() => {
    teamApi = testClient.teamApi
  })

  it('should testSearchTeamMembers', async () => {
    let { statusCode } = await teamApi.searchTeamMembers({
      limit: 1
    })
    expect(statusCode).toBe(200)
  })

  it('should testCreateTeamMember', async () => {
    let teamMember1 : TeamMember = {
      givenName: "Sherlock",
      familyName: "Holmes"
    }
    let body : CreateTeamMemberRequest = {
      idempotencyKey: uuidv4(),
      teamMember: teamMember1
    }
    let { result: {teamMember}, statusCode } = await teamApi.createTeamMember(body)
    expect(statusCode).toBe(200)

    memberId = teamMember?.id!
  })

  it('should testRetrieveTeamMember', async () => {
    let { result: { teamMember }, statusCode } = await teamApi.retrieveTeamMember(memberId)
    expect(statusCode).toBe(200)
    expect(teamMember?.id!).toBe(memberId)
  })


  it('should testRetrieveWageSetting', async () => {
    let { result: { wageSetting }, statusCode } = await teamApi.retrieveWageSetting(memberId)
    expect(statusCode).toBe(200)
    expect(wageSetting?.teamMemberId!).toBe(memberId)
  })

  it('should testUpdateTeamMember', async () => {
    let teamMember1: TeamMember = {
      givenName: "Agent",
      familyName: "Smith"
    }
    let body: UpdateTeamMemberRequest = {
      teamMember: teamMember1
    }
    let { result: {teamMember}, statusCode } = await teamApi.updateTeamMember(memberId, body)
    expect(statusCode).toBe(200)
    expect(teamMember).toEqual(expect.objectContaining({
      ...teamMember,
      id: memberId
    }))
  })

  xit('should testUpdateWageSetting', async () => {
    const assignment: JobAssignment = {
      jobTitle: "Math tutor",
      payType: "HOURLY",
      hourlyRate: {
        amount: BigInt(2500),
        currency: 'USD'
      }
    }
    const setting: WageSetting = {
      jobAssignments: [ assignment]
    }
    let body: UpdateWageSettingRequest = {
      wageSetting:setting
    }
    let { result: { wageSetting }, statusCode } = await teamApi.updateWageSetting(memberId, body)
    expect(statusCode).toBe(200)
    expect(wageSetting).toEqual(expect.objectContaining({
      jobAssignments: expect.arrayContaining([
        expect.objectContaining({
          ...assignment,
          hourlyRate: expect.objectContaining({...assignment.hourlyRate})
        })
      ])
    }))
  })

  it('should testBatchCreateTeamMembers', async () => {
    const idempotencyKey1 = uuidv4()
    const idempotencyKey2 = uuidv4()

    let don : TeamMember = {
      givenName: "Donatello",
      familyName: "Splinter"
    }

    let mike: TeamMember = {
      givenName: "Michaelangelo",
      familyName: "Splinter"
    }

    let body : BulkCreateTeamMembersRequest = {
      teamMembers:{
        [idempotencyKey1] : {
          teamMember: don
        },
        [idempotencyKey2] : {
          teamMember: mike
        }
      }
    }

    let { result, statusCode} =  await teamApi.bulkCreateTeamMembers(body)
    expect(statusCode).toBe(200)
    expect(result).toEqual(expect.objectContaining({
      teamMembers: expect.objectContaining({
        [idempotencyKey1]: expect.objectContaining({
          teamMember: expect.objectContaining({ ...don })
        }),
        [idempotencyKey2]: expect.objectContaining({
          teamMember: expect.objectContaining({ ...mike })
        })
      })
    }))

    for(let key in result.teamMembers!) {
      let {teamMember}: CreateTeamMemberRequest = (result.teamMembers!)[key]
      bulkIds.push(teamMember?.id!)
    }

  })

  it('should testBulkUpdateTeamMember', async () => {

    let raph: TeamMember = {
      givenName: "Raphael",
      familyName: "Splinter"
    }

    let leo: TeamMember = {
      givenName: "Leonardo",
      familyName: "Splinter"
    }

    let body: BulkUpdateTeamMembersRequest = {
      teamMembers:{
        [bulkIds[0]]:{
          teamMember: raph
        },
        [bulkIds[1]] : {
          teamMember: leo
        }
      }
    }
    let {statusCode} = await teamApi.bulkUpdateTeamMembers(body)
    expect(statusCode).toBe(200)
  })
})
