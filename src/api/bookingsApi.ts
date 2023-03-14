import { ApiResponse, RequestOptions } from '../core';
import {
  CancelBookingRequest,
  cancelBookingRequestSchema,
} from '../models/cancelBookingRequest';
import {
  CancelBookingResponse,
  cancelBookingResponseSchema,
} from '../models/cancelBookingResponse';
import {
  CreateBookingRequest,
  createBookingRequestSchema,
} from '../models/createBookingRequest';
import {
  CreateBookingResponse,
  createBookingResponseSchema,
} from '../models/createBookingResponse';
import {
  ListBookingsResponse,
  listBookingsResponseSchema,
} from '../models/listBookingsResponse';
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
   * Retrieve a collection of bookings.
   *
   * To call this endpoint with buyer-level permissions, set `APPOINTMENTS_READ` for the OAuth scope.
   * To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_READ` and
   * `APPOINTMENTS_READ` for the OAuth scope.
   *
   * @param limit          The maximum number of results per page to return in a paged response.
   * @param cursor         The pagination cursor from the preceding response to return the next page of the
   *                                 results. Do not set this when retrieving the first page of the results.
   * @param teamMemberId   The team member for whom to retrieve bookings. If this is not set, bookings of
   *                                 all members are retrieved.
   * @param locationId     The location for which to retrieve bookings. If this is not set, all locations'
   *                                 bookings are retrieved.
   * @param startAtMin     The RFC 3339 timestamp specifying the earliest of the start time. If this is not
   *                                 set, the current time is used.
   * @param startAtMax     The RFC 3339 timestamp specifying the latest of the start time. If this is not
   *                                 set, the time of 31 days after `start_at_min` is used.
   * @return Response from the API call
   */
  async listBookings(
    limit?: number,
    cursor?: string,
    teamMemberId?: string,
    locationId?: string,
    startAtMin?: string,
    startAtMax?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ListBookingsResponse>> {
    const req = this.createRequest('GET', '/v2/bookings');
    const mapped = req.prepareArgs({
      limit: [limit, optional(number())],
      cursor: [cursor, optional(string())],
      teamMemberId: [teamMemberId, optional(string())],
      locationId: [locationId, optional(string())],
      startAtMin: [startAtMin, optional(string())],
      startAtMax: [startAtMax, optional(string())],
    });
    req.query('limit', mapped.limit);
    req.query('cursor', mapped.cursor);
    req.query('team_member_id', mapped.teamMemberId);
    req.query('location_id', mapped.locationId);
    req.query('start_at_min', mapped.startAtMin);
    req.query('start_at_max', mapped.startAtMax);
    return req.callAsJson(listBookingsResponseSchema, requestOptions);
  }

  /**
   * Creates a booking.
   *
   * The required input must include the following:
   * - `Booking.location_id`,
   * - `Booking.start_at`,
   * - `Booking.team_member_id`
   * - `Booking.AppointmentSegment.service_variation_id`
   * - `Booking.AppointmentSegment.service_variation_version`
   *
   * To call this endpoint with buyer-level permissions, set `APPOINTMENTS_WRITE` for the OAuth scope.
   * To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_WRITE` and
   * `APPOINTMENTS_WRITE` for the OAuth scope.
   *
   * For calls to this endpoint with seller-level permissions to succeed, the seller must have subscribed
   * to *Appointments Plus*
   * or *Appointments Premium*.
   *
   * @param body         An object containing the fields to POST for the request.  See
   *                                                    the corresponding object definition for field details.
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
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    return req.callAsJson(createBookingResponseSchema, requestOptions);
  }

  /**
   * Searches for availabilities for booking.
   *
   * To call this endpoint with buyer-level permissions, set `APPOINTMENTS_READ` for the OAuth scope.
   * To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_READ` and
   * `APPOINTMENTS_READ` for the OAuth scope.
   *
   * @param body         An object containing the fields to POST for the request.
   *                                                         See the corresponding object definition for field details.
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
    req.header('Content-Type', 'application/json');
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
   * @param limit         The maximum number of results to return in a paged response.
   * @param cursor        The pagination cursor from the preceding response to return the next page of the
   *                                 results. Do not set this when retrieving the first page of the results.
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
   * To call this endpoint with buyer-level permissions, set `APPOINTMENTS_READ` for the OAuth scope.
   * To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_READ` and
   * `APPOINTMENTS_READ` for the OAuth scope.
   *
   * @param bookingId  The ID of the [Booking]($m/Booking) object representing the to-be-retrieved booking.
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
   * To call this endpoint with buyer-level permissions, set `APPOINTMENTS_WRITE` for the OAuth scope.
   * To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_WRITE` and
   * `APPOINTMENTS_WRITE` for the OAuth scope.
   *
   * For calls to this endpoint with seller-level permissions to succeed, the seller must have subscribed
   * to *Appointments Plus*
   * or *Appointments Premium*.
   *
   * @param bookingId    The ID of the [Booking]($m/Booking) object representing the to-
   *                                                    be-updated booking.
   * @param body         An object containing the fields to POST for the request.  See
   *                                                    the corresponding object definition for field details.
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
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/v2/bookings/${mapped.bookingId}`;
    return req.callAsJson(updateBookingResponseSchema, requestOptions);
  }

  /**
   * Cancels an existing booking.
   *
   * To call this endpoint with buyer-level permissions, set `APPOINTMENTS_WRITE` for the OAuth scope.
   * To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_WRITE` and
   * `APPOINTMENTS_WRITE` for the OAuth scope.
   *
   * For calls to this endpoint with seller-level permissions to succeed, the seller must have subscribed
   * to *Appointments Plus*
   * or *Appointments Premium*.
   *
   * @param bookingId    The ID of the [Booking]($m/Booking) object representing the to-
   *                                                    be-cancelled booking.
   * @param body         An object containing the fields to POST for the request.  See
   *                                                    the corresponding object definition for field details.
   * @return Response from the API call
   */
  async cancelBooking(
    bookingId: string,
    body: CancelBookingRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<CancelBookingResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      bookingId: [bookingId, string()],
      body: [body, cancelBookingRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/v2/bookings/${mapped.bookingId}/cancel`;
    return req.callAsJson(cancelBookingResponseSchema, requestOptions);
  }
}
