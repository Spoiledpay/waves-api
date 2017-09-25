import { Schema, ArrayPart, NumberPart, ObjectPart, StringPart } from 'ts-api-validator';
import { MoneyPart } from '../../schema.MoneyPart';
import * as constants from '../../../constants';


// TODO : remove in the new API
function temporaryStringConversion(n) {
    return (typeof n === 'number') ? String(n) : null;
}


export const detailedWavesBalanceSchema = new Schema({
    type: ObjectPart,
    required: true,
    content: {
        regular: {
            type: MoneyPart,
            assetId: constants.WAVES,
            parseValue: temporaryStringConversion
        },
        available: {
            type: MoneyPart,
            assetId: constants.WAVES,
            parseValue: temporaryStringConversion
        },
        effective: {
            type: MoneyPart,
            assetId: constants.WAVES,
            parseValue: temporaryStringConversion
        },
        generating: {
            type: MoneyPart,
            assetId: constants.WAVES,
            parseValue: temporaryStringConversion
        },
        leased: {
            type: MoneyPart,
            assetId: constants.WAVES,
            // TODO : remove in the new API
            path: null,
            parseValue: (o) => {
                const regular = o.regular;
                const available = o.available;
                return temporaryStringConversion(regular - available);
            }
        }
    }
});

export const aliasesByAddressSchema = new Schema({
    type: ArrayPart,
    required: true,
    content: {
        type: StringPart
    }
});

export const assetBalancesSchema = new Schema({
    type: ArrayPart,
    required: true,
    path: 'balances',
    content: {
        type: ObjectPart,
        content: {
            id: {
                type: StringPart,
                required: true,
                path: 'assetId'
            },
            name: {
                type: StringPart,
                required: true,
                path: 'issueTransaction.name'
            },
            precision: {
                type: NumberPart,
                required: true,
                path: 'issueTransaction.decimals'
            },
            amount: {
                type: MoneyPart,
                required: true,
                path: 'balance',
                asset: {
                    idPath: 'assetId',
                    namePath: 'issueTransaction.name',
                    precisionPath: 'issueTransaction.decimals',
                    descriptionPath: 'issueTransaction.description'
                },
                parseValue: temporaryStringConversion
            }
        }
    }
});
