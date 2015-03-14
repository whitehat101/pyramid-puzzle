import RandomPuzzle from "../lib/RandomPuzzle"

/* RandomPuzzle
 *
 */

xdescribe('RandomPuzzle', () => {

  it('returns true on the first token', () => {
    let rp = RandomPuzzle(4, 3)
    expect(rp.next().value).toBe(true)
    expect(rp.next().value).toBe(true)
    expect(rp.next().value).toBe(true)
  })

})
