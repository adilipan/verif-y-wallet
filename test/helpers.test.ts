import * as helpers from '../src/helpers'

describe('helpers', () => {
  it('can get prefixes for cryptocurrencies', () => {
    let prefixes = helpers.getCryptoPrefixes()
    expect(prefixes).toEqual({
      ETH: '\u039E',
      BTC: '\u0E3F',
      DAO: '\u0110'
    })
  })
})
