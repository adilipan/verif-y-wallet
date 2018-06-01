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
}

export class Pouch {
  derive(node: Node, index: Index, hardened: boolean): IPouch {
    if (hardened) {
      return node.deriveHardened(index)
    } else {
      return node.derive(index)
    }
  }
}
