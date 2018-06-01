import { IFold } from './fold'

export interface IPouch {
  fullName: string
  fullDisplayName: string
  abbreviation: string
  hdType: number
  isSubtype: boolean
  isTestnet: boolean
  mnemonic: string
  folds: IFold[]

  sendAmount(amount: number): Promise<{}>
}

export class Pouch {}
