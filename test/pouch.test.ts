import { Pouch } from '../src/pouch'

describe('Pouch', () => {
  it('calculates conversion rate properly', () => {
    let pouch = new Pouch()
    expect(pouch.convertFromFiat(100)).toBe(100)
  })
})
