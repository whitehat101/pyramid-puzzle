import Stabilizer from "../lib/Stabilizer"

/* Stabilizer
 *
 */

describe('Stabilizer', () => {

  it('returns true on the first token', () => {
    let three = Stabilizer(3)
    expect(three('OK')).toBe(true)
    expect(three('OK')).toBe(true)
    expect(three('OK')).toBe(true)
    expect(three('OK')).toBe(true)
  })

  it('returns true on the third same token', () => {
    let three = Stabilizer(3)
    expect(three('OK')   ).toBe(true)
    expect(three('MAYBE')).toBe(false)
    expect(three('MAYBE')).toBe(false)
    expect(three('MAYBE')).toBe(true)
    expect(three('MAYBE')).toBe(true)
    expect(three('YES')  ).toBe(false)
    expect(three('YES')  ).toBe(false)
    expect(three('YES')  ).toBe(true)
  })

})
