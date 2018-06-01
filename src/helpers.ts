import _ from 'lodash'
import { Mnemonic } from 'wallet.ts'
import * as bip39 from 'bip39'

export namespace Currencies {
  export interface CryptocurrencyInfo {
    prefix: string
    name: string
    abbreviation: string
    index: number
  }

  export type CryptoDictionary = { [key: string]: CryptocurrencyInfo }

  export const Cryptos: CryptoDictionary = {
    BTC: { prefix: '\u0E3F', name: 'Bitcoin', abbreviation: 'BTC', index: 0 },
    ETH: { prefix: '\u039E', name: 'Ethereum', abbreviation: 'ETH', index: 1 },
    DAO: { prefix: '\u0110', name: 'The DAO', abbreviation: 'DAO', index: 2 }
  }

  export interface FiatCurrencyInfo {
    prefix: string
    name: string
  }

  export type FiatDictionary = { [key: string]: FiatCurrencyInfo }

  export const Fiat: FiatDictionary = {
    AUD: { prefix: 'AU$', name: 'Australian Dollar' },
    BRL: { prefix: 'R$', name: 'Brazilian Real' },
    CAD: { prefix: 'CA$', name: 'Canadian Dollar' },
    CHF: { prefix: '\u0043', name: 'Swiss Franc' },
    CLP: { prefix: 'CL$', name: 'Chilean Peso' },
    CNY: { prefix: '\u00A5', name: 'Chinese Yuan' },
    CZK: { prefix: '\u004b', name: 'Czech Republic Koruna' },
    DKK: { prefix: 'kr', name: 'Danish Krona' },
    EUR: { prefix: '\u20AC', name: 'Euro' },
    GBP: { prefix: '\u00A3', name: 'British Pound' },
    HKD: { prefix: 'HK$', name: 'Hong Kong Dollar' },
    HUF: { prefix: '\u0046', name: 'Hungarian Forint' },
    IDR: { prefix: '\u0052', name: 'Indonesian Rupiah' },
    ILS: { prefix: '\u20AA', name: 'Israeli New Shekel' },
    INR: { prefix: '\u20B9', name: 'Indian Rupee' },
    ISK: { prefix: 'kr', name: 'Icelandik Kroner' },
    JPY: { prefix: '\u00A5', name: 'Japanese Yen' },
    KRW: { prefix: '\u20A9', name: 'South Korean Won' },
    MXN: { prefix: 'MX$', name: 'Mexican Peso' },
    MYR: { prefix: 'RM', name: 'Malaysian Myr' },
    NOK: { prefix: 'kr', name: 'Norwegian Kroner' },
    NZD: { prefix: 'NZ$', name: 'New Zealand Dollar' },
    PHP: { prefix: '\u20B1', name: 'Phillipine Peso' },
    PKR: { prefix: '\u20A8', name: 'Pakistani Rupee' },
    PLN: { prefix: 'z\u0142', name: 'Polish Zlotty' },
    RUB: { prefix: '\u20BD', name: 'Russian Ruble' },
    SEK: { prefix: 'kr', name: 'Swedish Krona' },
    SGD: { prefix: 'SG$', name: 'Singapore Dollar' },
    THB: { prefix: '\u0e3f', name: 'Thailand Baht' },
    TRY: { prefix: 't', name: 'Turkey Lira' },
    TWD: { prefix: 'NT$', name: 'New Taiwan Dollar' },
    USD: { prefix: 'US$', name: 'United States Dollar' },
    ZAR: { prefix: '\u0052', name: 'South African Rand' }
  }
}

export function getFiatPrefixes() {
  return _.mapValues(Currencies.Fiat, c => c.prefix)
}

export function getCryptoPrefixes() {
  return _.mapValues(Currencies.Cryptos, c => c.prefix)
}

export function getCryptoNames() {
  return _.mapValues(Currencies.Cryptos, c => c.name)
}

export function validateMnemonic(mnemonic: string): boolean {
  return bip39.validateMnemonic(mnemonic)
}

export function getCurrencyPrefix(currency: string): string | null {
  if (_.has(Currencies.Cryptos, `${currency}.prefix`)) {
    return Currencies.Cryptos[currency].prefix
  }

  if (_.has(Currencies.Fiat, `${currency}.prefix`)) {
    return Currencies.Fiat[currency].prefix
  }

  return null
}
