import { ApiResponse } from '../apiResponse';
import { RequestOptions } from '../http/requestBuilder';
import {
  CreateBookingRequest,
  createBookingRequestSchema,
} from '../models/createBookingRequest';
import {
  CreateBookingResponse,
  createBookingResponseSchema,
} from '../models/createBookingResponse';
import {
  ListTeamMemberBookingProfilesResponse,
  listTeamMemberBookingProfilesResponseSchema,
} from '../models/listTeamMemberBookingProfilesResponse';
import {
  RetrieveBookingResponse,
  retrieveBookingResponseSchema,
} from '../models/retrieveBookingResponse';
import {
  RetrieveBusinessBookingProfileResponse,
  retrieveBusinessBookingProfileResponseSchema,
} from '../models/retrieveBusinessBookingProfileResponse';
import {
  RetrieveTeamMemberBookingProfileResponse,
  retrieveTeamMemberBookingProfileResponseSchema,
} from '../models/retrieveTeamMemberBookingProfileResponse';
import {
  SearchAvailabilityRequest,
  searchAvailabilityRequestSchema,
} from '../models/searchAvailabilityRequest';
import {
  SearchAvailabilityResponse,
  searchAvailabilityResponseSchema,
} from '../models/searchAvailabilityResponse';
import {
  UpdateBookingRequest,
  updateBookingRequestSchema,
} from '../models/updateBookingRequest';
import {
  UpdateBookingResponse,
  updateBookingResponseSchema,
} from '../models/updateBookingResponse';
import { boolean, number, optional, string } from '../schema';
import { BaseApi } from './baseApi';

export class BookingsApi extends BaseApi {
  /**
   * Creates a booking.
   *
   * @param body An object containing the fields to POST for the request.  See the
   *                                            corresponding object definition for field details.
   * @return Response from the API call
   */
  async createBooking(
    body: CreateBookingRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<CreateBookingResponse>> {
    const req = this.createRequest('POST', '/v2/bookings');
    const mapped = req.prepareArgs({
      body: [body, createBookingRequestSchema],
    });
    req.json(mapped.body);
    return req.callAsJson(createBookingResponseSchema, requestOptions);
  }

  /**
   * Searches for availabilities for booking.
   *
   * @param body An object containing the fields to POST for the request.  See the
   *                                                 corresponding object definition for field details.
   * @return Response from the API call
   */
  async searchAvailability(
    body: SearchAvailabilityRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<SearchAvailabilityResponse>> {
    const req = this.createRequest('POST', '/v2/bookings/availability/search');
    const mapped = req.prepareArgs({
      body: [body, searchAvailabilityRequestSchema],
    });
    req.json(mapped.body);
    return req.callAsJson(searchAvailabilityResponseSchema, requestOptions);
  }

  /**
   * Retrieves a seller's booking profile.
   *
   * @return Response from the API call
   */
  async retrieveBusinessBookingProfile(
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<RetrieveBusinessBookingProfileResponse>> {
    const req = this.createRequest(
      'GET',
      '/v2/bookings/business-booking-profile'
    );
    return req.callAsJson(
      retrieveBusinessBookingProfileResponseSchema,
      requestOptions
    );
  }

  /**
   * Lists booking profiles for team members.
   *
   * @param bookableOnly  Indicates whether to include only bookable team members in the returned result
   *                                 (`true`) or not (`false`).
   * @param limit         The maximum number of results to return.
   * @param cursor        The cursor for paginating through the results.
   * @param locationId    Indicates whether to include only team members enabled at the given location in
   *                                 the returned result.
   * @return Response from the API call
   */
  async listTeamMemberBookingProfiles(
    bookableOnly?: boolean,
    limit?: number,
    cursor?: string,
    locationId?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ListTeamMemberBookingProfilesResponse>> {
    const req = this.createRequest(
      'GET',
      '/v2/bookings/team-member-booking-profiles'
    );
    const mapped = req.prepareArgs({
      bookableOnly: [bookableOnly, optional(boolean())],
      limit: [limit, optional(number())],
      cursor: [cursor, optional(string())],
      locationId: [locationId, optional(string())],
    });
    req.query('bookable_only', mapped.bookableOnly);
    req.query('limit', mapped.limit);
    req.query('cursor', mapped.cursor);
    req.query('location_id', mapped.locationId);
    return req.callAsJson(
      listTeamMemberBookingProfilesResponseSchema,
      requestOptions
    );
  }

  /**
   * Retrieves a team member's booking profile.
   *
   * @param teamMemberId   The ID of the team member to retrieve.
   * @return Response from the API call
   */
  async retrieveTeamMemberBookingProfile(
    teamMemberId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<RetrieveTeamMemberBookingProfileResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ teamMemberId: [teamMemberId, string()] });
    req.appendTemplatePath`/v2/bookings/team-member-booking-profiles/${mapped.teamMemberId}`;
    return req.callAsJson(
      retrieveTeamMemberBookingProfileResponseSchema,
      requestOptions
    );
  }

  /**
   * Retrieves a booking.
   *
   * @param bookingId  The ID of the [Booking](#type-booking) object representing the to-be-retrieved
   *                             booking.
   * @return Response from the API call
   */
  async retrieveBooking(
    bookingId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<RetrieveBookingResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ bookingId: [bookingId, string()] });
    req.appendTemplatePath`/v2/bookings/${mapped.bookingId}`;
    return req.callAsJson(retrieveBookingResponseSchema, requestOptions);
  }

  /**
   * Updates a booking.
   *
   * @param bookingId  The ID of the [Booking](#type-booking) object representing the
   *                                                  to-be-updated booking.
   * @param body       An object containing the fields to POST for the request.  See
   *                                                  the corresponding object definition for field details.
   * @return Response from the API call
   */
  async updateBooking(
    bookingId: string,
    body: UpdateBookingRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<UpdateBookingResponse>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({
      bookingId: [bookingId, string()],
      body: [body, updateBookingRequestSchema],
    });
    req.json(mapped.body);
    req.appendTemplatePath`/v2/bookings/${mapped.bookingId}`;
    return req.callAsJson(updateBookingResponseSchema, requestOptions);
  }
}
