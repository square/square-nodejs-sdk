/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";
import { V1TenderType } from "./V1TenderType";
import { V1TenderCardBrand } from "./V1TenderCardBrand";
import { V1TenderEntryMethod } from "./V1TenderEntryMethod";
import { V1Money } from "./V1Money";

export const V1Tender: core.serialization.ObjectSchema<serializers.V1Tender.Raw, Square.V1Tender> =
    core.serialization.object({
        id: core.serialization.string().optional(),
        type: V1TenderType.optional(),
        name: core.serialization.string().optionalNullable(),
        employeeId: core.serialization.property("employee_id", core.serialization.string().optionalNullable()),
        receiptUrl: core.serialization.property("receipt_url", core.serialization.string().optionalNullable()),
        cardBrand: core.serialization.property("card_brand", V1TenderCardBrand.optional()),
        panSuffix: core.serialization.property("pan_suffix", core.serialization.string().optionalNullable()),
        entryMethod: core.serialization.property("entry_method", V1TenderEntryMethod.optional()),
        paymentNote: core.serialization.property("payment_note", core.serialization.string().optionalNullable()),
        totalMoney: core.serialization.property("total_money", V1Money.optional()),
        tenderedMoney: core.serialization.property("tendered_money", V1Money.optional()),
        tenderedAt: core.serialization.property("tendered_at", core.serialization.string().optionalNullable()),
        settledAt: core.serialization.property("settled_at", core.serialization.string().optionalNullable()),
        changeBackMoney: core.serialization.property("change_back_money", V1Money.optional()),
        refundedMoney: core.serialization.property("refunded_money", V1Money.optional()),
        isExchange: core.serialization.property("is_exchange", core.serialization.boolean().optionalNullable()),
    });

export declare namespace V1Tender {
    export interface Raw {
        id?: string | null;
        type?: V1TenderType.Raw | null;
        name?: (string | null) | null;
        employee_id?: (string | null) | null;
        receipt_url?: (string | null) | null;
        card_brand?: V1TenderCardBrand.Raw | null;
        pan_suffix?: (string | null) | null;
        entry_method?: V1TenderEntryMethod.Raw | null;
        payment_note?: (string | null) | null;
        total_money?: V1Money.Raw | null;
        tendered_money?: V1Money.Raw | null;
        tendered_at?: (string | null) | null;
        settled_at?: (string | null) | null;
        change_back_money?: V1Money.Raw | null;
        refunded_money?: V1Money.Raw | null;
        is_exchange?: (boolean | null) | null;
    }
}
