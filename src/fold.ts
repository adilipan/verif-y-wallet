export type Address = String

export interface IFold {
  symbol: String
  name: String
  parentCurrencyConversionRate: number
  addresses: Address[]
}
