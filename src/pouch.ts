import { IFold } from './fold'

export interface IPouch {
  name: string
  symbol: string
  conversionRate: number
  conversionFee: number
  totalAmount: number
  totalAmountInFiat: number
  folds: IFold[]

  convertFromFiat(amount: number): number
}

export class Pouch implements IPouch {
  name: string
  symbol: string
  conversionRate: number
  conversionFee: number
  totalAmount: number
  totalAmountInFiat: number
  folds: IFold[]

  constructor() {
    this.name = 'empty'
    this.symbol = 'empty'
    this.conversionFee = 0
    this.conversionRate = 1
    this.totalAmount = 0
    this.totalAmountInFiat = 0
    this.folds = []
  }

  convertFromFiat(amount: number): number {
    return (amount - this.conversionFee) / this.conversionRate
  }
}
