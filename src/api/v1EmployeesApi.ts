import { ApiResponse } from '../apiResponse';
import { RequestOptions } from '../http/requestBuilder';
import {
  V1CashDrawerShift,
  v1CashDrawerShiftSchema,
} from '../models/v1CashDrawerShift';
import { V1Employee, v1EmployeeSchema } from '../models/v1Employee';
import { V1EmployeeRole, v1EmployeeRoleSchema } from '../models/v1EmployeeRole';
import { V1Timecard, v1TimecardSchema } from '../models/v1Timecard';
import {
  V1TimecardEvent,
  v1TimecardEventSchema,
} from '../models/v1TimecardEvent';
import { array, boolean, number, optional, string, unknown } from '../schema';
import { BaseApi } from './baseApi';

export class V1EmployeesApi extends BaseApi {
  /**
   * Provides summary information for all of a business's employees.
   *
   * @param order            The order in which employees are listed in the response, based on their
   *                                   created_at field.      Default value: ASC
   * @param beginUpdatedAt   If filtering results by their updated_at field, the beginning of the requested
   *                                   reporting period, in ISO 8601 format
   * @param endUpdatedAt     If filtering results by there updated_at field, the end of the requested
   *                                   reporting period, in ISO 8601 format.
   * @param beginCreatedAt   If filtering results by their created_at field, the beginning of the requested
   *                                   reporting period, in ISO 8601 format.
   * @param endCreatedAt     If filtering results by their created_at field, the end of the requested
   *                                   reporting period, in ISO 8601 format.
   * @param status           If provided, the endpoint returns only employee entities with the specified
   *                                   status (ACTIVE or INACTIVE).
   * @param externalId       If provided, the endpoint returns only employee entities with the specified
   *                                   external_id.
   * @param limit            The maximum integer number of employee entities to return in a single response.
   *                                   Default 100, maximum 200.
   * @param batchToken       A pagination cursor to retrieve the next set of results for your original query
   *                                   to the endpoint.
   * @return Response from the API call
   */
  async listEmployees(
    order?: string,
    beginUpdatedAt?: string,
    endUpdatedAt?: string,
    beginCreatedAt?: string,
    endCreatedAt?: string,
    status?: string,
    externalId?: string,
    limit?: number,
    batchToken?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<V1Employee[]>> {
    const req = this.createRequest('GET', '/v1/me/employees');
    const mapped = req.prepareArgs({
      order: [order, optional(string())],
      beginUpdatedAt: [beginUpdatedAt, optional(string())],
      endUpdatedAt: [endUpdatedAt, optional(string())],
      beginCreatedAt: [beginCreatedAt, optional(string())],
      endCreatedAt: [endCreatedAt, optional(string())],
      status: [status, optional(string())],
      externalId: [externalId, optional(string())],
      limit: [limit, optional(number())],
      batchToken: [batchToken, optional(string())],
    });
    req.query('order', mapped.order);
    req.query('begin_updated_at', mapped.beginUpdatedAt);
    req.query('end_updated_at', mapped.endUpdatedAt);
    req.query('begin_created_at', mapped.beginCreatedAt);
    req.query('end_created_at', mapped.endCreatedAt);
    req.query('status', mapped.status);
    req.query('external_id', mapped.externalId);
    req.query('limit', mapped.limit);
    req.query('batch_token', mapped.batchToken);
    return req.callAsJson(array(v1EmployeeSchema), requestOptions);
  }

  /**
   * Use the CreateEmployee endpoint to add an employee to a Square
   * account. Employees created with the Connect API have an initial status
   * of `INACTIVE`. Inactive employees cannot sign in to Square Point of Sale
   * until they are activated from the Square Dashboard. Employee status
   * cannot be changed with the Connect API.
   *
   * <aside class="important">
   * Employee entities cannot be deleted. To disable employee profiles,
   * set the employee's status to <code>INACTIVE</code>
   * </aside>
   *
   * @param body An object containing the fields to POST for the request.  See the corresponding
   *                                  object definition for field details.
   * @return Response from the API call
   */
  async createEmployee(
    body: V1Employee,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<V1Employee>> {
    const req = this.createRequest('POST', '/v1/me/employees');
    const mapped = req.prepareArgs({ body: [body, v1EmployeeSchema] });
    req.json(mapped.body);
    return req.callAsJson(v1EmployeeSchema, requestOptions);
  }

  /**
   * Provides the details for a single employee.
   *
   * @param employeeId  The employee's ID.
   * @return Response from the API call
   */
  async retrieveEmployee(
    employeeId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<V1Employee>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ employeeId: [employeeId, string()] });
    req.appendTemplatePath`/v1/me/employees/${mapped.employeeId}`;
    return req.callAsJson(v1EmployeeSchema, requestOptions);
  }

  /**
   * UpdateEmployee
   *
   * @param employeeId  The ID of the role to modify.
   * @param body        An object containing the fields to POST for the request.  See the
   *                                         corresponding object definition for field details.
   * @return Response from the API call
   */
  async updateEmployee(
    employeeId: string,
    body: V1Employee,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<V1Employee>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({
      employeeId: [employeeId, string()],
      body: [body, v1EmployeeSchema],
    });
    req.json(mapped.body);
    req.appendTemplatePath`/v1/me/employees/${mapped.employeeId}`;
    return req.callAsJson(v1EmployeeSchema, requestOptions);
  }

  /**
   * Provides summary information for all of a business's employee roles.
   *
   * @param order       The order in which employees are listed in the response, based on their created_at
   *                              field.Default value: ASC
   * @param limit       The maximum integer number of employee entities to return in a single response.
   *                              Default 100, maximum 200.
   * @param batchToken  A pagination cursor to retrieve the next set of results for your original query to
   *                              the endpoint.
   * @return Response from the API call
   */
  async listEmployeeRoles(
    order?: string,
    limit?: number,
    batchToken?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<V1EmployeeRole[]>> {
    const req = this.createRequest('GET', '/v1/me/roles');
    const mapped = req.prepareArgs({
      order: [order, optional(string())],
      limit: [limit, optional(number())],
      batchToken: [batchToken, optional(string())],
    });
    req.query('order', mapped.order);
    req.query('limit', mapped.limit);
    req.query('batch_token', mapped.batchToken);
    return req.callAsJson(array(v1EmployeeRoleSchema), requestOptions);
  }

  /**
   * Creates an employee role you can then assign to employees.
   *
   * Square accounts can include any number of roles that can be assigned to
   * employees. These roles define the actions and permissions granted to an
   * employee with that role. For example, an employee with a "Shift Manager"
   * role might be able to issue refunds in Square Point of Sale, whereas an
   * employee with a "Clerk" role might not.
   *
   * Roles are assigned with the [V1UpdateEmployee](#endpoint-v1updateemployee)
   * endpoint. An employee can have only one role at a time.
   *
   * If an employee has no role, they have none of the permissions associated
   * with roles. All employees can accept payments with Square Point of Sale.
   *
   * @param body An EmployeeRole object with a name and permissions, and an optional owner
   *                                      flag.
   * @return Response from the API call
   */
  async createEmployeeRole(
    body: V1EmployeeRole,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<V1EmployeeRole>> {
    const req = this.createRequest('POST', '/v1/me/roles');
    const mapped = req.prepareArgs({ body: [body, v1EmployeeRoleSchema] });
    req.json(mapped.body);
    return req.callAsJson(v1EmployeeRoleSchema, requestOptions);
  }

  /**
   * Provides the details for a single employee role.
   *
   * @param roleId  The role's ID.
   * @return Response from the API call
   */
  async retrieveEmployeeRole(
    roleId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<V1EmployeeRole>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ roleId: [roleId, string()] });
    req.appendTemplatePath`/v1/me/roles/${mapped.roleId}`;
    return req.callAsJson(v1EmployeeRoleSchema, requestOptions);
  }

  /**
   * Modifies the details of an employee role.
   *
   * @param roleId  The ID of the role to modify.
   * @param body    An object containing the fields to POST for the request.  See the
   *                                         corresponding object definition for field details.
   * @return Response from the API call
   */
  async updateEmployeeRole(
    roleId: string,
    body: V1EmployeeRole,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<V1EmployeeRole>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({
      roleId: [roleId, string()],
      body: [body, v1EmployeeRoleSchema],
    });
    req.json(mapped.body);
    req.appendTemplatePath`/v1/me/roles/${mapped.roleId}`;
    return req.callAsJson(v1EmployeeRoleSchema, requestOptions);
  }

  /**
   * Provides summary information for all of a business's employee timecards.
   *
   * @param order               The order in which timecards are listed in the response, based on their
   *                                       created_at field.
   * @param employeeId          If provided, the endpoint returns only timecards for the employee with the
   *                                       specified ID.
   * @param beginClockinTime    If filtering results by their clockin_time field, the beginning of the
   *                                       requested reporting period, in ISO 8601 format.
   * @param endClockinTime      If filtering results by their clockin_time field, the end of the requested
   *                                       reporting period, in ISO 8601 format.
   * @param beginClockoutTime   If filtering results by their clockout_time field, the beginning of the
   *                                       requested reporting period, in ISO 8601 format.
   * @param endClockoutTime     If filtering results by their clockout_time field, the end of the requested
   *                                       reporting period, in ISO 8601 format.
   * @param beginUpdatedAt      If filtering results by their updated_at field, the beginning of the
   *                                       requested reporting period, in ISO 8601 format.
   * @param endUpdatedAt        If filtering results by their updated_at field, the end of the requested
   *                                       reporting period, in ISO 8601 format.
   * @param deleted             If true, only deleted timecards are returned. If false, only valid
   *                                       timecards are returned.If you don't provide this parameter, both valid and
   *                                       deleted timecards are returned.
   * @param limit               The maximum integer number of employee entities to return in a single
   *                                       response. Default 100, maximum 200.
   * @param batchToken          A pagination cursor to retrieve the next set of results for your original
   *                                       query to the endpoint.
   * @return Response from the API call
   * @deprecated
   */
  async listTimecards(
    order?: string,
    employeeId?: string,
    beginClockinTime?: string,
    endClockinTime?: string,
    beginClockoutTime?: string,
    endClockoutTime?: string,
    beginUpdatedAt?: string,
    endUpdatedAt?: string,
    deleted?: boolean,
    limit?: number,
    batchToken?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<V1Timecard[]>> {
    const req = this.createRequest('GET', '/v1/me/timecards');
    const mapped = req.prepareArgs({
      order: [order, optional(string())],
      employeeId: [employeeId, optional(string())],
      beginClockinTime: [beginClockinTime, optional(string())],
      endClockinTime: [endClockinTime, optional(string())],
      beginClockoutTime: [beginClockoutTime, optional(string())],
      endClockoutTime: [endClockoutTime, optional(string())],
      beginUpdatedAt: [beginUpdatedAt, optional(string())],
      endUpdatedAt: [endUpdatedAt, optional(string())],
      deleted: [deleted, optional(boolean())],
      limit: [limit, optional(number())],
      batchToken: [batchToken, optional(string())],
    });
    req.query('order', mapped.order);
    req.query('employee_id', mapped.employeeId);
    req.query('begin_clockin_time', mapped.beginClockinTime);
    req.query('end_clockin_time', mapped.endClockinTime);
    req.query('begin_clockout_time', mapped.beginClockoutTime);
    req.query('end_clockout_time', mapped.endClockoutTime);
    req.query('begin_updated_at', mapped.beginUpdatedAt);
    req.query('end_updated_at', mapped.endUpdatedAt);
    req.query('deleted', mapped.deleted);
    req.query('limit', mapped.limit);
    req.query('batch_token', mapped.batchToken);
    req.deprecated('V1EmployeesApi.listTimecards');
    return req.callAsJson(array(v1TimecardSchema), requestOptions);
  }

  /**
   * Creates a timecard for an employee and clocks them in with an
   * `API_CREATE` event and a `clockin_time` set to the current time unless
   * the request provides a different value.
   *
   * To import timecards from another
   * system (rather than clocking someone in). Specify the `clockin_time`
   * and* `clockout_time` in the request.
   *
   * Timecards correspond to exactly one shift for a given employee, bounded
   * by the `clockin_time` and `clockout_time` fields. An employee is
   * considered clocked in if they have a timecard that doesn't have a
   * `clockout_time` set. An employee that is currently clocked in cannot
   * be clocked in a second time.
   *
   * @param body An object containing the fields to POST for the request.  See the corresponding
   *                                  object definition for field details.
   * @return Response from the API call
   * @deprecated
   */
  async createTimecard(
    body: V1Timecard,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<V1Timecard>> {
    const req = this.createRequest('POST', '/v1/me/timecards');
    const mapped = req.prepareArgs({ body: [body, v1TimecardSchema] });
    req.json(mapped.body);
    req.deprecated('V1EmployeesApi.createTimecard');
    return req.callAsJson(v1TimecardSchema, requestOptions);
  }

  /**
   * Deletes a timecard. Timecards can also be deleted through the
   * Square Dashboard. Deleted timecards are still accessible through
   * Connect API endpoints, but cannot be modified. The `deleted` field of
   * the `Timecard` object indicates whether the timecard has been deleted.
   *
   *
   * __Note__: By default, deleted timecards appear alongside valid timecards in
   * results returned by the [ListTimecards](#endpoint-v1employees-listtimecards)
   * endpoint. To filter deleted timecards, include the `deleted` query
   * parameter in the list request.
   *
   * Only approved accounts can manage their employees with Square.
   * Unapproved accounts cannot use employee management features with the
   * API.
   *
   * @param timecardId  The ID of the timecard to delete.
   * @return Response from the API call
   * @deprecated
   */
  async deleteTimecard(
    timecardId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<unknown>> {
    const req = this.createRequest('DELETE');
    const mapped = req.prepareArgs({ timecardId: [timecardId, string()] });
    req.appendTemplatePath`/v1/me/timecards/${mapped.timecardId}`;
    req.deprecated('V1EmployeesApi.deleteTimecard');
    return req.callAsJson(unknown(), requestOptions);
  }

  /**
   * Provides the details for a single timecard.
   *
   *
   * <aside>
   * Only approved accounts can manage their employees with Square.
   * Unapproved accounts cannot use employee management features with the
   * API.
   * </aside>
   *
   * @param timecardId  The timecard's ID.
   * @return Response from the API call
   * @deprecated
   */
  async retrieveTimecard(
    timecardId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<V1Timecard>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ timecardId: [timecardId, string()] });
    req.appendTemplatePath`/v1/me/timecards/${mapped.timecardId}`;
    req.deprecated('V1EmployeesApi.retrieveTimecard');
    return req.callAsJson(v1TimecardSchema, requestOptions);
  }

  /**
   * Modifies the details of a timecard with an `API_EDIT` event for
   * the timecard. Updating an active timecard with a `clockout_time`
   * clocks the employee out.
   *
   * @param timecardId  TThe ID of the timecard to modify.
   * @param body        An object containing the fields to POST for the request. See the
   *                                         corresponding object definition for field details.
   * @return Response from the API call
   * @deprecated
   */
  async updateTimecard(
    timecardId: string,
    body: V1Timecard,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<V1Timecard>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({
      timecardId: [timecardId, string()],
      body: [body, v1TimecardSchema],
    });
    req.json(mapped.body);
    req.appendTemplatePath`/v1/me/timecards/${mapped.timecardId}`;
    req.deprecated('V1EmployeesApi.updateTimecard');
    return req.callAsJson(v1TimecardSchema, requestOptions);
  }

  /**
   * Provides summary information for all events associated with a
   * particular timecard.
   *
   *
   * <aside>
   * Only approved accounts can manage their employees with Square.
   * Unapproved accounts cannot use employee management features with the
   * API.
   * </aside>
   *
   * @param timecardId  The ID of the timecard to list events for.
   * @return Response from the API call
   * @deprecated
   */
  async listTimecardEvents(
    timecardId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<V1TimecardEvent[]>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ timecardId: [timecardId, string()] });
    req.appendTemplatePath`/v1/me/timecards/${mapped.timecardId}/events`;
    req.deprecated('V1EmployeesApi.listTimecardEvents');
    return req.callAsJson(array(v1TimecardEventSchema), requestOptions);
  }

  /**
   * Provides the details for all of a location's cash drawer shifts during a date range. The date range
   * you specify cannot exceed 90 days.
   *
   * @param locationId  The ID of the location to list cash drawer shifts for.
   * @param order       The order in which cash drawer shifts are listed in the response, based on their
   *                              created_at field. Default value: ASC
   * @param beginTime   The beginning of the requested reporting period, in ISO 8601 format. Default value:
   *                              The current time minus 90 days.
   * @param endTime     The beginning of the requested reporting period, in ISO 8601 format. Default value:
   *                              The current time.
   * @return Response from the API call
   * @deprecated
   */
  async listCashDrawerShifts(
    locationId: string,
    order?: string,
    beginTime?: string,
    endTime?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<V1CashDrawerShift[]>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      locationId: [locationId, string()],
      order: [order, optional(string())],
      beginTime: [beginTime, optional(string())],
      endTime: [endTime, optional(string())],
    });
    req.query('order', mapped.order);
    req.query('begin_time', mapped.beginTime);
    req.query('end_time', mapped.endTime);
    req.appendTemplatePath`/v1/${mapped.locationId}/cash-drawer-shifts`;
    req.deprecated('V1EmployeesApi.listCashDrawerShifts');
    return req.callAsJson(array(v1CashDrawerShiftSchema), requestOptions);
  }

  /**
   * Provides the details for a single cash drawer shift, including all events that occurred during the
   * shift.
   *
   * @param locationId  The ID of the location to list cash drawer shifts for.
   * @param shiftId     The shift's ID.
   * @return Response from the API call
   * @deprecated
   */
  async retrieveCashDrawerShift(
    locationId: string,
    shiftId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<V1CashDrawerShift>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      locationId: [locationId, string()],
      shiftId: [shiftId, string()],
    });
    req.appendTemplatePath`/v1/${mapped.locationId}/cash-drawer-shifts/${mapped.shiftId}`;
    req.deprecated('V1EmployeesApi.retrieveCashDrawerShift');
    return req.callAsJson(v1CashDrawerShiftSchema, requestOptions);
  }
}
