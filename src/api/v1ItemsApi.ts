import { ApiResponse } from '../apiResponse';
import { RequestOptions } from '../http/requestBuilder';
import {
  V1AdjustInventoryRequest,
  v1AdjustInventoryRequestSchema,
} from '../models/v1AdjustInventoryRequest';
import { V1Category, v1CategorySchema } from '../models/v1Category';
import { V1Discount, v1DiscountSchema } from '../models/v1Discount';
import { V1Fee, v1FeeSchema } from '../models/v1Fee';
import {
  V1InventoryEntry,
  v1InventoryEntrySchema,
} from '../models/v1InventoryEntry';
import { V1Item, v1ItemSchema } from '../models/v1Item';
import { V1ModifierList, v1ModifierListSchema } from '../models/v1ModifierList';
import {
  V1ModifierOption,
  v1ModifierOptionSchema,
} from '../models/v1ModifierOption';
import { V1Page, v1PageSchema } from '../models/v1Page';
import { V1PageCell, v1PageCellSchema } from '../models/v1PageCell';
import {
  V1UpdateModifierListRequest,
  v1UpdateModifierListRequestSchema,
} from '../models/v1UpdateModifierListRequest';
import { V1Variation, v1VariationSchema } from '../models/v1Variation';
import { array, number, optional, string } from '../schema';
import { BaseApi } from './baseApi';

export class V1ItemsApi extends BaseApi {
  /**
   * Lists all the item categories for a given location.
   *
   * @param locationId  The ID of the location to list categories for.
   * @return Response from the API call
   * @deprecated
   */
  async listCategories(
    locationId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<V1Category[]>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ locationId: [locationId, string()] });
    req.appendTemplatePath`/v1/${mapped.locationId}/categories`;
    req.deprecated('V1ItemsApi.listCategories');
    return req.callAsJson(array(v1CategorySchema), requestOptions);
  }

  /**
   * Creates an item category.
   *
   * @param locationId  The ID of the location to create an item for.
   * @param body        An object containing the fields to POST for the request.  See the
   *                                         corresponding object definition for field details.
   * @return Response from the API call
   * @deprecated
   */
  async createCategory(
    locationId: string,
    body: V1Category,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<V1Category>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      locationId: [locationId, string()],
      body: [body, v1CategorySchema],
    });
    req.json(mapped.body);
    req.appendTemplatePath`/v1/${mapped.locationId}/categories`;
    req.deprecated('V1ItemsApi.createCategory');
    return req.callAsJson(v1CategorySchema, requestOptions);
  }

  /**
   * Deletes an existing item category.
   *
   *
   * __DeleteCategory__ returns nothing on success but Connect SDKs
   * map the empty response to an empty `V1DeleteCategoryRequest` object
   * as documented below.
   *
   * @param locationId  The ID of the item's associated location.
   * @param categoryId  The ID of the category to delete.
   * @return Response from the API call
   * @deprecated
   */
  async deleteCategory(
    locationId: string,
    categoryId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<V1Category>> {
    const req = this.createRequest('DELETE');
    const mapped = req.prepareArgs({
      locationId: [locationId, string()],
      categoryId: [categoryId, string()],
    });
    req.appendTemplatePath`/v1/${mapped.locationId}/categories/${mapped.categoryId}`;
    req.deprecated('V1ItemsApi.deleteCategory');
    return req.callAsJson(v1CategorySchema, requestOptions);
  }

  /**
   * Modifies the details of an existing item category.
   *
   * @param locationId  The ID of the category's associated location.
   * @param categoryId  The ID of the category to edit.
   * @param body        An object containing the fields to POST for the request.  See the
   *                                         corresponding object definition for field details.
   * @return Response from the API call
   * @deprecated
   */
  async updateCategory(
    locationId: string,
    categoryId: string,
    body: V1Category,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<V1Category>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({
      locationId: [locationId, string()],
      categoryId: [categoryId, string()],
      body: [body, v1CategorySchema],
    });
    req.json(mapped.body);
    req.appendTemplatePath`/v1/${mapped.locationId}/categories/${mapped.categoryId}`;
    req.deprecated('V1ItemsApi.updateCategory');
    return req.callAsJson(v1CategorySchema, requestOptions);
  }

  /**
   * Lists all the discounts for a given location.
   *
   * @param locationId  The ID of the location to list categories for.
   * @return Response from the API call
   * @deprecated
   */
  async listDiscounts(
    locationId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<V1Discount[]>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ locationId: [locationId, string()] });
    req.appendTemplatePath`/v1/${mapped.locationId}/discounts`;
    req.deprecated('V1ItemsApi.listDiscounts');
    return req.callAsJson(array(v1DiscountSchema), requestOptions);
  }

  /**
   * Creates a discount.
   *
   * @param locationId  The ID of the location to create an item for.
   * @param body        An object containing the fields to POST for the request.  See the
   *                                         corresponding object definition for field details.
   * @return Response from the API call
   * @deprecated
   */
  async createDiscount(
    locationId: string,
    body: V1Discount,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<V1Discount>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      locationId: [locationId, string()],
      body: [body, v1DiscountSchema],
    });
    req.json(mapped.body);
    req.appendTemplatePath`/v1/${mapped.locationId}/discounts`;
    req.deprecated('V1ItemsApi.createDiscount');
    return req.callAsJson(v1DiscountSchema, requestOptions);
  }

  /**
   * Deletes an existing discount.
   *
   *
   * __DeleteDiscount__ returns nothing on success but Connect SDKs
   * map the empty response to an empty `V1DeleteDiscountRequest` object
   * as documented below.
   *
   * @param locationId  The ID of the item's associated location.
   * @param discountId  The ID of the discount to delete.
   * @return Response from the API call
   * @deprecated
   */
  async deleteDiscount(
    locationId: string,
    discountId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<V1Discount>> {
    const req = this.createRequest('DELETE');
    const mapped = req.prepareArgs({
      locationId: [locationId, string()],
      discountId: [discountId, string()],
    });
    req.appendTemplatePath`/v1/${mapped.locationId}/discounts/${mapped.discountId}`;
    req.deprecated('V1ItemsApi.deleteDiscount');
    return req.callAsJson(v1DiscountSchema, requestOptions);
  }

  /**
   * Modifies the details of an existing discount.
   *
   * @param locationId  The ID of the category's associated location.
   * @param discountId  The ID of the discount to edit.
   * @param body        An object containing the fields to POST for the request.  See the
   *                                         corresponding object definition for field details.
   * @return Response from the API call
   * @deprecated
   */
  async updateDiscount(
    locationId: string,
    discountId: string,
    body: V1Discount,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<V1Discount>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({
      locationId: [locationId, string()],
      discountId: [discountId, string()],
      body: [body, v1DiscountSchema],
    });
    req.json(mapped.body);
    req.appendTemplatePath`/v1/${mapped.locationId}/discounts/${mapped.discountId}`;
    req.deprecated('V1ItemsApi.updateDiscount');
    return req.callAsJson(v1DiscountSchema, requestOptions);
  }

  /**
   * Lists all the fees (taxes) for a given location.
   *
   * @param locationId  The ID of the location to list fees for.
   * @return Response from the API call
   * @deprecated
   */
  async listFees(
    locationId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<V1Fee[]>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ locationId: [locationId, string()] });
    req.appendTemplatePath`/v1/${mapped.locationId}/fees`;
    req.deprecated('V1ItemsApi.listFees');
    return req.callAsJson(array(v1FeeSchema), requestOptions);
  }

  /**
   * Creates a fee (tax).
   *
   * @param locationId  The ID of the location to create a fee for.
   * @param body        An object containing the fields to POST for the request.  See the
   *                                    corresponding object definition for field details.
   * @return Response from the API call
   * @deprecated
   */
  async createFee(
    locationId: string,
    body: V1Fee,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<V1Fee>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      locationId: [locationId, string()],
      body: [body, v1FeeSchema],
    });
    req.json(mapped.body);
    req.appendTemplatePath`/v1/${mapped.locationId}/fees`;
    req.deprecated('V1ItemsApi.createFee');
    return req.callAsJson(v1FeeSchema, requestOptions);
  }

  /**
   * Deletes an existing fee (tax).
   *
   *
   * __DeleteFee__ returns nothing on success but Connect SDKs
   * map the empty response to an empty `V1DeleteFeeRequest` object
   * as documented below.
   *
   * @param locationId  The ID of the fee's associated location.
   * @param feeId       The ID of the fee to delete.
   * @return Response from the API call
   * @deprecated
   */
  async deleteFee(
    locationId: string,
    feeId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<V1Fee>> {
    const req = this.createRequest('DELETE');
    const mapped = req.prepareArgs({
      locationId: [locationId, string()],
      feeId: [feeId, string()],
    });
    req.appendTemplatePath`/v1/${mapped.locationId}/fees/${mapped.feeId}`;
    req.deprecated('V1ItemsApi.deleteFee');
    return req.callAsJson(v1FeeSchema, requestOptions);
  }

  /**
   * Modifies the details of an existing fee (tax).
   *
   * @param locationId  The ID of the fee's associated location.
   * @param feeId       The ID of the fee to edit.
   * @param body        An object containing the fields to POST for the request.  See the
   *                                    corresponding object definition for field details.
   * @return Response from the API call
   * @deprecated
   */
  async updateFee(
    locationId: string,
    feeId: string,
    body: V1Fee,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<V1Fee>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({
      locationId: [locationId, string()],
      feeId: [feeId, string()],
      body: [body, v1FeeSchema],
    });
    req.json(mapped.body);
    req.appendTemplatePath`/v1/${mapped.locationId}/fees/${mapped.feeId}`;
    req.deprecated('V1ItemsApi.updateFee');
    return req.callAsJson(v1FeeSchema, requestOptions);
  }

  /**
   * Provides inventory information for all inventory-enabled item
   * variations.
   *
   * @param locationId  The ID of the item's associated location.
   * @param limit       The maximum number of inventory entries to return in a single response. This value
   *                              cannot exceed 1000.
   * @param batchToken  A pagination cursor to retrieve the next set of results for your original query to
   *                              the endpoint.
   * @return Response from the API call
   * @deprecated
   */
  async listInventory(
    locationId: string,
    limit?: number,
    batchToken?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<V1InventoryEntry[]>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      locationId: [locationId, string()],
      limit: [limit, optional(number())],
      batchToken: [batchToken, optional(string())],
    });
    req.query('limit', mapped.limit);
    req.query('batch_token', mapped.batchToken);
    req.appendTemplatePath`/v1/${mapped.locationId}/inventory`;
    req.deprecated('V1ItemsApi.listInventory');
    return req.callAsJson(array(v1InventoryEntrySchema), requestOptions);
  }

  /**
   * Adjusts the current available inventory of an item variation.
   *
   * @param locationId   The ID of the item's associated location.
   * @param variationId  The ID of the variation to adjust inventory information
   *                                                        for.
   * @param body         An object containing the fields to POST for the request.
   *                                                        See the corresponding object definition for field details.
   * @return Response from the API call
   * @deprecated
   */
  async adjustInventory(
    locationId: string,
    variationId: string,
    body: V1AdjustInventoryRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<V1InventoryEntry>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      locationId: [locationId, string()],
      variationId: [variationId, string()],
      body: [body, v1AdjustInventoryRequestSchema],
    });
    req.json(mapped.body);
    req.appendTemplatePath`/v1/${mapped.locationId}/inventory/${mapped.variationId}`;
    req.deprecated('V1ItemsApi.adjustInventory');
    return req.callAsJson(v1InventoryEntrySchema, requestOptions);
  }

  /**
   * Provides summary information of all items for a given location.
   *
   * @param locationId  The ID of the location to list items for.
   * @param batchToken  A pagination cursor to retrieve the next set of results for your original query to
   *                              the endpoint.
   * @return Response from the API call
   * @deprecated
   */
  async listItems(
    locationId: string,
    batchToken?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<V1Item[]>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      locationId: [locationId, string()],
      batchToken: [batchToken, optional(string())],
    });
    req.query('batch_token', mapped.batchToken);
    req.appendTemplatePath`/v1/${mapped.locationId}/items`;
    req.deprecated('V1ItemsApi.listItems');
    return req.callAsJson(array(v1ItemSchema), requestOptions);
  }

  /**
   * Creates an item and at least one variation for it.
   *
   *
   *
   * Item-related entities include fields you can use to associate them with
   * entities in a non-Square system.
   *
   * When you create an item-related entity, you can optionally specify `id`.
   * This value must be unique among all IDs ever specified for the account,
   * including those specified by other applications. You can never reuse an
   * entity ID. If you do not specify an ID, Square generates one for the entity.
   *
   * Item variations have a `user_data` string that lets you associate arbitrary
   * metadata with the variation. The string cannot exceed 255 characters.
   *
   * @param locationId  The ID of the location to create an item for.
   * @param body        An object containing the fields to POST for the request.  See the
   *                                     corresponding object definition for field details.
   * @return Response from the API call
   * @deprecated
   */
  async createItem(
    locationId: string,
    body: V1Item,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<V1Item>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      locationId: [locationId, string()],
      body: [body, v1ItemSchema],
    });
    req.json(mapped.body);
    req.appendTemplatePath`/v1/${mapped.locationId}/items`;
    req.deprecated('V1ItemsApi.createItem');
    return req.callAsJson(v1ItemSchema, requestOptions);
  }

  /**
   * Deletes an existing item and all item variations associated with it.
   *
   *
   * __DeleteItem__ returns nothing on success but Connect SDKs
   * map the empty response to an empty `V1DeleteItemRequest` object
   * as documented below.
   *
   * @param locationId  The ID of the item's associated location.
   * @param itemId      The ID of the item to modify.
   * @return Response from the API call
   * @deprecated
   */
  async deleteItem(
    locationId: string,
    itemId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<V1Item>> {
    const req = this.createRequest('DELETE');
    const mapped = req.prepareArgs({
      locationId: [locationId, string()],
      itemId: [itemId, string()],
    });
    req.appendTemplatePath`/v1/${mapped.locationId}/items/${mapped.itemId}`;
    req.deprecated('V1ItemsApi.deleteItem');
    return req.callAsJson(v1ItemSchema, requestOptions);
  }

  /**
   * Provides the details for a single item, including associated modifier
   * lists and fees.
   *
   * @param locationId  The ID of the item's associated location.
   * @param itemId      The item's ID.
   * @return Response from the API call
   * @deprecated
   */
  async retrieveItem(
    locationId: string,
    itemId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<V1Item>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      locationId: [locationId, string()],
      itemId: [itemId, string()],
    });
    req.appendTemplatePath`/v1/${mapped.locationId}/items/${mapped.itemId}`;
    req.deprecated('V1ItemsApi.retrieveItem');
    return req.callAsJson(v1ItemSchema, requestOptions);
  }

  /**
   * Modifies the core details of an existing item.
   *
   * @param locationId  The ID of the item's associated location.
   * @param itemId      The ID of the item to modify.
   * @param body        An object containing the fields to POST for the request.  See the
   *                                     corresponding object definition for field details.
   * @return Response from the API call
   * @deprecated
   */
  async updateItem(
    locationId: string,
    itemId: string,
    body: V1Item,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<V1Item>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({
      locationId: [locationId, string()],
      itemId: [itemId, string()],
      body: [body, v1ItemSchema],
    });
    req.json(mapped.body);
    req.appendTemplatePath`/v1/${mapped.locationId}/items/${mapped.itemId}`;
    req.deprecated('V1ItemsApi.updateItem');
    return req.callAsJson(v1ItemSchema, requestOptions);
  }

  /**
   * Removes a fee assocation from an item so the fee is no longer
   * automatically applied to the item in Square Point of Sale.
   *
   * @param locationId  The ID of the fee's associated location.
   * @param itemId      The ID of the item to add the fee to.
   * @param feeId       The ID of the fee to apply.
   * @return Response from the API call
   * @deprecated
   */
  async removeFee(
    locationId: string,
    itemId: string,
    feeId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<V1Item>> {
    const req = this.createRequest('DELETE');
    const mapped = req.prepareArgs({
      locationId: [locationId, string()],
      itemId: [itemId, string()],
      feeId: [feeId, string()],
    });
    req.appendTemplatePath`/v1/${mapped.locationId}/items/${mapped.itemId}/fees/${mapped.feeId}`;
    req.deprecated('V1ItemsApi.removeFee');
    return req.callAsJson(v1ItemSchema, requestOptions);
  }

  /**
   * Associates a fee with an item so the fee is automatically applied to
   * the item in Square Point of Sale.
   *
   * @param locationId  The ID of the fee's associated location.
   * @param itemId      The ID of the item to add the fee to.
   * @param feeId       The ID of the fee to apply.
   * @return Response from the API call
   * @deprecated
   */
  async applyFee(
    locationId: string,
    itemId: string,
    feeId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<V1Item>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({
      locationId: [locationId, string()],
      itemId: [itemId, string()],
      feeId: [feeId, string()],
    });
    req.appendTemplatePath`/v1/${mapped.locationId}/items/${mapped.itemId}/fees/${mapped.feeId}`;
    req.deprecated('V1ItemsApi.applyFee');
    return req.callAsJson(v1ItemSchema, requestOptions);
  }

  /**
   * Removes a modifier list association from an item so the modifier
   * options from the list can no longer be applied to the item.
   *
   * @param locationId       The ID of the item's associated location.
   * @param modifierListId   The ID of the modifier list to remove.
   * @param itemId           The ID of the item to remove the modifier list from.
   * @return Response from the API call
   * @deprecated
   */
  async removeModifierList(
    locationId: string,
    modifierListId: string,
    itemId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<V1Item>> {
    const req = this.createRequest('DELETE');
    const mapped = req.prepareArgs({
      locationId: [locationId, string()],
      modifierListId: [modifierListId, string()],
      itemId: [itemId, string()],
    });
    req.appendTemplatePath`/v1/${mapped.locationId}/items/${mapped.modifierListId}/modifier-lists/${mapped.itemId}`;
    req.deprecated('V1ItemsApi.removeModifierList');
    return req.callAsJson(v1ItemSchema, requestOptions);
  }

  /**
   * Associates a modifier list with an item so the associated modifier
   * options can be applied to the item.
   *
   * @param locationId       The ID of the item's associated location.
   * @param modifierListId   The ID of the modifier list to apply.
   * @param itemId           The ID of the item to add the modifier list to.
   * @return Response from the API call
   * @deprecated
   */
  async applyModifierList(
    locationId: string,
    modifierListId: string,
    itemId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<V1Item>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({
      locationId: [locationId, string()],
      modifierListId: [modifierListId, string()],
      itemId: [itemId, string()],
    });
    req.appendTemplatePath`/v1/${mapped.locationId}/items/${mapped.modifierListId}/modifier-lists/${mapped.itemId}`;
    req.deprecated('V1ItemsApi.applyModifierList');
    return req.callAsJson(v1ItemSchema, requestOptions);
  }

  /**
   * Creates an item variation for an existing item.
   *
   * @param locationId  The ID of the item's associated location.
   * @param itemId      The item's ID.
   * @param body        An object containing the fields to POST for the request.  See the
   *                                          corresponding object definition for field details.
   * @return Response from the API call
   * @deprecated
   */
  async createVariation(
    locationId: string,
    itemId: string,
    body: V1Variation,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<V1Variation>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      locationId: [locationId, string()],
      itemId: [itemId, string()],
      body: [body, v1VariationSchema],
    });
    req.json(mapped.body);
    req.appendTemplatePath`/v1/${mapped.locationId}/items/${mapped.itemId}/variations`;
    req.deprecated('V1ItemsApi.createVariation');
    return req.callAsJson(v1VariationSchema, requestOptions);
  }

  /**
   * Deletes an existing item variation from an item.
   *
   *
   * __DeleteVariation__ returns nothing on success but Connect SDKs
   * map the empty response to an empty `V1DeleteVariationRequest` object
   * as documented below.
   *
   * @param locationId   The ID of the item's associated location.
   * @param itemId       The ID of the item to delete.
   * @param variationId  The ID of the variation to delete.
   * @return Response from the API call
   * @deprecated
   */
  async deleteVariation(
    locationId: string,
    itemId: string,
    variationId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<V1Variation>> {
    const req = this.createRequest('DELETE');
    const mapped = req.prepareArgs({
      locationId: [locationId, string()],
      itemId: [itemId, string()],
      variationId: [variationId, string()],
    });
    req.appendTemplatePath`/v1/${mapped.locationId}/items/${mapped.itemId}/variations/${mapped.variationId}`;
    req.deprecated('V1ItemsApi.deleteVariation');
    return req.callAsJson(v1VariationSchema, requestOptions);
  }

  /**
   * Modifies the details of an existing item variation.
   *
   * @param locationId   The ID of the item's associated location.
   * @param itemId       The ID of the item to modify.
   * @param variationId  The ID of the variation to modify.
   * @param body         An object containing the fields to POST for the request.  See the
   *                                           corresponding object definition for field details.
   * @return Response from the API call
   * @deprecated
   */
  async updateVariation(
    locationId: string,
    itemId: string,
    variationId: string,
    body: V1Variation,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<V1Variation>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({
      locationId: [locationId, string()],
      itemId: [itemId, string()],
      variationId: [variationId, string()],
      body: [body, v1VariationSchema],
    });
    req.json(mapped.body);
    req.appendTemplatePath`/v1/${mapped.locationId}/items/${mapped.itemId}/variations/${mapped.variationId}`;
    req.deprecated('V1ItemsApi.updateVariation');
    return req.callAsJson(v1VariationSchema, requestOptions);
  }

  /**
   * Lists all the modifier lists for a given location.
   *
   * @param locationId  The ID of the location to list modifier lists for.
   * @return Response from the API call
   * @deprecated
   */
  async listModifierLists(
    locationId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<V1ModifierList[]>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ locationId: [locationId, string()] });
    req.appendTemplatePath`/v1/${mapped.locationId}/modifier-lists`;
    req.deprecated('V1ItemsApi.listModifierLists');
    return req.callAsJson(array(v1ModifierListSchema), requestOptions);
  }

  /**
   * Creates an item modifier list and at least 1 modifier option for it.
   *
   * @param locationId  The ID of the location to create a modifier list for.
   * @param body        An object containing the fields to POST for the request.  See the
   *                                             corresponding object definition for field details.
   * @return Response from the API call
   * @deprecated
   */
  async createModifierList(
    locationId: string,
    body: V1ModifierList,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<V1ModifierList>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      locationId: [locationId, string()],
      body: [body, v1ModifierListSchema],
    });
    req.json(mapped.body);
    req.appendTemplatePath`/v1/${mapped.locationId}/modifier-lists`;
    req.deprecated('V1ItemsApi.createModifierList');
    return req.callAsJson(v1ModifierListSchema, requestOptions);
  }

  /**
   * Deletes an existing item modifier list and all modifier options
   * associated with it.
   *
   *
   * __DeleteModifierList__ returns nothing on success but Connect SDKs
   * map the empty response to an empty `V1DeleteModifierListRequest` object
   * as documented below.
   *
   * @param locationId       The ID of the item's associated location.
   * @param modifierListId   The ID of the modifier list to delete.
   * @return Response from the API call
   * @deprecated
   */
  async deleteModifierList(
    locationId: string,
    modifierListId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<V1ModifierList>> {
    const req = this.createRequest('DELETE');
    const mapped = req.prepareArgs({
      locationId: [locationId, string()],
      modifierListId: [modifierListId, string()],
    });
    req.appendTemplatePath`/v1/${mapped.locationId}/modifier-lists/${mapped.modifierListId}`;
    req.deprecated('V1ItemsApi.deleteModifierList');
    return req.callAsJson(v1ModifierListSchema, requestOptions);
  }

  /**
   * Provides the details for a single modifier list.
   *
   * @param locationId       The ID of the item's associated location.
   * @param modifierListId   The modifier list's ID.
   * @return Response from the API call
   * @deprecated
   */
  async retrieveModifierList(
    locationId: string,
    modifierListId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<V1ModifierList>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      locationId: [locationId, string()],
      modifierListId: [modifierListId, string()],
    });
    req.appendTemplatePath`/v1/${mapped.locationId}/modifier-lists/${mapped.modifierListId}`;
    req.deprecated('V1ItemsApi.retrieveModifierList');
    return req.callAsJson(v1ModifierListSchema, requestOptions);
  }

  /**
   * Modifies the details of an existing item modifier list.
   *
   * @param locationId       The ID of the item's associated location.
   * @param modifierListId   The ID of the modifier list to edit.
   * @param body             An object containing the fields to POST for the
   *                                                               request.  See the corresponding object definition
   *                                                               for field details.
   * @return Response from the API call
   * @deprecated
   */
  async updateModifierList(
    locationId: string,
    modifierListId: string,
    body: V1UpdateModifierListRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<V1ModifierList>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({
      locationId: [locationId, string()],
      modifierListId: [modifierListId, string()],
      body: [body, v1UpdateModifierListRequestSchema],
    });
    req.json(mapped.body);
    req.appendTemplatePath`/v1/${mapped.locationId}/modifier-lists/${mapped.modifierListId}`;
    req.deprecated('V1ItemsApi.updateModifierList');
    return req.callAsJson(v1ModifierListSchema, requestOptions);
  }

  /**
   * Creates an item modifier option and adds it to a modifier list.
   *
   * @param locationId       The ID of the item's associated location.
   * @param modifierListId   The ID of the modifier list to edit.
   * @param body             An object containing the fields to POST for the request.  See
   *                                                    the corresponding object definition for field details.
   * @return Response from the API call
   * @deprecated
   */
  async createModifierOption(
    locationId: string,
    modifierListId: string,
    body: V1ModifierOption,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<V1ModifierOption>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      locationId: [locationId, string()],
      modifierListId: [modifierListId, string()],
      body: [body, v1ModifierOptionSchema],
    });
    req.json(mapped.body);
    req.appendTemplatePath`/v1/${mapped.locationId}/modifier-lists/${mapped.modifierListId}/modifier-options`;
    req.deprecated('V1ItemsApi.createModifierOption');
    return req.callAsJson(v1ModifierOptionSchema, requestOptions);
  }

  /**
   * Deletes an existing item modifier option from a modifier list.
   *
   *
   * __DeleteModifierOption__ returns nothing on success but Connect
   * SDKs map the empty response to an empty `V1DeleteModifierOptionRequest`
   * object.
   *
   * @param locationId         The ID of the item's associated location.
   * @param modifierListId     The ID of the modifier list to delete.
   * @param modifierOptionId   The ID of the modifier list to edit.
   * @return Response from the API call
   * @deprecated
   */
  async deleteModifierOption(
    locationId: string,
    modifierListId: string,
    modifierOptionId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<V1ModifierOption>> {
    const req = this.createRequest('DELETE');
    const mapped = req.prepareArgs({
      locationId: [locationId, string()],
      modifierListId: [modifierListId, string()],
      modifierOptionId: [modifierOptionId, string()],
    });
    req.appendTemplatePath`/v1/${mapped.locationId}/modifier-lists/${mapped.modifierListId}/modifier-options/${mapped.modifierOptionId}`;
    req.deprecated('V1ItemsApi.deleteModifierOption');
    return req.callAsJson(v1ModifierOptionSchema, requestOptions);
  }

  /**
   * Modifies the details of an existing item modifier option.
   *
   * @param locationId         The ID of the item's associated location.
   * @param modifierListId     The ID of the modifier list to edit.
   * @param modifierOptionId   The ID of the modifier list to edit.
   * @param body               An object containing the fields to POST for the request.
   *                                                      See the corresponding object definition for field details.
   * @return Response from the API call
   * @deprecated
   */
  async updateModifierOption(
    locationId: string,
    modifierListId: string,
    modifierOptionId: string,
    body: V1ModifierOption,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<V1ModifierOption>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({
      locationId: [locationId, string()],
      modifierListId: [modifierListId, string()],
      modifierOptionId: [modifierOptionId, string()],
      body: [body, v1ModifierOptionSchema],
    });
    req.json(mapped.body);
    req.appendTemplatePath`/v1/${mapped.locationId}/modifier-lists/${mapped.modifierListId}/modifier-options/${mapped.modifierOptionId}`;
    req.deprecated('V1ItemsApi.updateModifierOption');
    return req.callAsJson(v1ModifierOptionSchema, requestOptions);
  }

  /**
   * Lists all Favorites pages (in Square Point of Sale) for a given
   * location.
   *
   * @param locationId  The ID of the location to list Favorites pages for.
   * @return Response from the API call
   * @deprecated
   */
  async listPages(
    locationId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<V1Page[]>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ locationId: [locationId, string()] });
    req.appendTemplatePath`/v1/${mapped.locationId}/pages`;
    req.deprecated('V1ItemsApi.listPages');
    return req.callAsJson(array(v1PageSchema), requestOptions);
  }

  /**
   * Creates a Favorites page in Square Point of Sale.
   *
   * @param locationId  The ID of the location to create an item for.
   * @param body        An object containing the fields to POST for the request.  See the
   *                                     corresponding object definition for field details.
   * @return Response from the API call
   * @deprecated
   */
  async createPage(
    locationId: string,
    body: V1Page,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<V1Page>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      locationId: [locationId, string()],
      body: [body, v1PageSchema],
    });
    req.json(mapped.body);
    req.appendTemplatePath`/v1/${mapped.locationId}/pages`;
    req.deprecated('V1ItemsApi.createPage');
    return req.callAsJson(v1PageSchema, requestOptions);
  }

  /**
   * Deletes an existing Favorites page and all of its cells.
   *
   *
   * __DeletePage__ returns nothing on success but Connect SDKs
   * map the empty response to an empty `V1DeletePageRequest` object.
   *
   * @param locationId  The ID of the Favorites page's associated location.
   * @param pageId      The ID of the page to delete.
   * @return Response from the API call
   * @deprecated
   */
  async deletePage(
    locationId: string,
    pageId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<V1Page>> {
    const req = this.createRequest('DELETE');
    const mapped = req.prepareArgs({
      locationId: [locationId, string()],
      pageId: [pageId, string()],
    });
    req.appendTemplatePath`/v1/${mapped.locationId}/pages/${mapped.pageId}`;
    req.deprecated('V1ItemsApi.deletePage');
    return req.callAsJson(v1PageSchema, requestOptions);
  }

  /**
   * Modifies the details of a Favorites page in Square Point of Sale.
   *
   * @param locationId  The ID of the Favorites page's associated location
   * @param pageId      The ID of the page to modify.
   * @param body        An object containing the fields to POST for the request.  See the
   *                                     corresponding object definition for field details.
   * @return Response from the API call
   * @deprecated
   */
  async updatePage(
    locationId: string,
    pageId: string,
    body: V1Page,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<V1Page>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({
      locationId: [locationId, string()],
      pageId: [pageId, string()],
      body: [body, v1PageSchema],
    });
    req.json(mapped.body);
    req.appendTemplatePath`/v1/${mapped.locationId}/pages/${mapped.pageId}`;
    req.deprecated('V1ItemsApi.updatePage');
    return req.callAsJson(v1PageSchema, requestOptions);
  }

  /**
   * Deletes a cell from a Favorites page in Square Point of Sale.
   *
   *
   * __DeletePageCell__ returns nothing on success but Connect SDKs
   * map the empty response to an empty `V1DeletePageCellRequest` object
   * as documented below.
   *
   * @param locationId  The ID of the Favorites page's associated location.
   * @param pageId      The ID of the page to delete.
   * @param row         The row of the cell to clear. Always an integer between 0 and 4, inclusive. Row 0 is
   *                              the top row.
   * @param column      The column of the cell to clear. Always an integer between 0 and 4, inclusive.
   *                              Column 0 is the leftmost column.
   * @return Response from the API call
   * @deprecated
   */
  async deletePageCell(
    locationId: string,
    pageId: string,
    row?: string,
    column?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<V1Page>> {
    const req = this.createRequest('DELETE');
    const mapped = req.prepareArgs({
      locationId: [locationId, string()],
      pageId: [pageId, string()],
      row: [row, optional(string())],
      column: [column, optional(string())],
    });
    req.query('row', mapped.row);
    req.query('column', mapped.column);
    req.appendTemplatePath`/v1/${mapped.locationId}/pages/${mapped.pageId}/cells`;
    req.deprecated('V1ItemsApi.deletePageCell');
    return req.callAsJson(v1PageSchema, requestOptions);
  }

  /**
   * Modifies a cell of a Favorites page in Square Point of Sale.
   *
   * @param locationId  The ID of the Favorites page's associated location.
   * @param pageId      The ID of the page the cell belongs to.
   * @param body        An object containing the fields to POST for the request.  See the
   *                                         corresponding object definition for field details.
   * @return Response from the API call
   * @deprecated
   */
  async updatePageCell(
    locationId: string,
    pageId: string,
    body: V1PageCell,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<V1Page>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({
      locationId: [locationId, string()],
      pageId: [pageId, string()],
      body: [body, v1PageCellSchema],
    });
    req.json(mapped.body);
    req.appendTemplatePath`/v1/${mapped.locationId}/pages/${mapped.pageId}/cells`;
    req.deprecated('V1ItemsApi.updatePageCell');
    return req.callAsJson(v1PageSchema, requestOptions);
  }
}
