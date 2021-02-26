import { ApiResponse } from '../apiResponse';
import { RequestOptions } from '../http/requestBuilder';
import { V1Employee, v1EmployeeSchema } from '../models/v1Employee';
import { V1EmployeeRole, v1EmployeeRoleSchema } from '../models/v1EmployeeRole';
import { array, number, optional, string } from '../schema';
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
   * Employee entities cannot be deleted. To disable employee profiles,
   * set the employee's status to <code>INACTIVE</code>
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
}
