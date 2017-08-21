import { IWavesConfig } from './interfaces';


export const MAINNET_BYTE: number = 'W'.charCodeAt(0);
export const TESTNET_BYTE: number = 'T'.charCodeAt(0);

export const INITIAL_NONCE = 0;

export const ADDRESS_VERSION = 1;
export const ALIAS_VERSION = 2;

export const ISSUE_TX = 3;
export const TRANSFER_TX = 4;
export const REISSUE_TX = 5;
export const EXCHANGE_TX = 7;
export const LEASE_TX = 8;
export const CANCEL_LEASING_TX = 9;
export const CREATE_ALIAS_TX = 10;

export const ISSUE_TX_NAME = 'issue';
export const TRANSFER_TX_NAME = 'transfer';
export const REISSUE_TX_NAME = 'reissue';
export const EXCHANGE_TX_NAME = 'exchange';
export const LEASE_TX_NAME = 'lease';
export const CANCEL_LEASING_TX_NAME = 'cancelLeasing';
export const CREATE_ALIAS_TX_NAME = 'createAlias';

export const MINIMUM_AMOUNT = 1;
export const MINIMUM_FEE = 100000;

export const TRANSFER_ATTACHMENT_BYTE_LIMIT = 140;

export const DEFAULT_MAINNET_CONFIG: IWavesConfig = {
    networkByte: MAINNET_BYTE,
    nodeAddress: 'https://nodes.wavesnodes.com',
    matcherAddress: 'https://nodes.wavesnodes.com/matcher'
};

export const DEFAULT_TESTNET_CONFIG: IWavesConfig = {
    networkByte: TESTNET_BYTE,
    nodeAddress: 'http://52.30.47.67:6869',
    matcherAddress: 'http://52.30.47.67:6886'
};