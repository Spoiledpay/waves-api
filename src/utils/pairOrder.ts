import { createOrderPair, MAINNET_DATA, TESTNET_DATA, ARBITRARY_NETWORK_DATA } from '@waves/assets-pairs-order';
import config from '../config';
import { MAINNET_BYTE, TESTNET_BYTE } from '../constants';


const resolvers = {
    mainnet: createOrderPair(MAINNET_DATA),
    testnet: createOrderPair(TESTNET_DATA),
    arbitrary: createOrderPair(ARBITRARY_NETWORK_DATA)
};

const resolve = (a1, a2) => {
    switch (config.getNetworkByte()) {
        case MAINNET_BYTE:
            return resolvers.mainnet(a1, a2);
        case TESTNET_BYTE:
            return resolvers.testnet(a1, a2);
        default:
            return resolvers.arbitrary(a1, a2);
    }
};


export const getOrderPair = (assetOne, assetTwo) => {
    const pairIds = resolve(assetOne, assetTwo);
    return {
        amountAssetId: pairIds[0],
        priceAssetId: pairIds[1]
    };
};
