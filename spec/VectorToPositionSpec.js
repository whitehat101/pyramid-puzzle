var assert = require('assert')
import VectorToPosition from "../lib/VectorToPosition"
// import Vector from "../lib/Vector"

/* VectorToPosition
 *
 * given an object of LABEL: VECTOR mappings
 * map a new VECTOR into a LABEL
 */

xdescribe('VectorToPosition', () => {
  var v2p, map, threshold

  map = {
       UP: new Vector(  0, 1 ),
     DOWN: new Vector(  0,-1 ),
     LEFT: new Vector(  1, 0 ),
    RIGHT: new Vector( -1, 0 ),
  }
  threshold = 30 // deg

  beforeEach(() => {
    v2p = new VectorToPosition(map, threshold)
  })

  it('Can Map UP', () => {
    expect(
      v2p.map(map.UP)
    ).toBe('UP')
  })

  it('Can Map DOWN', () => {
    expect(
      v2p.map(map.DOWN)
    ).toBe('DOWN')
  })

  it('Can Map LEFT', () => {
    expect(
      v2p.map(map.LEFT)
    ).toBe('LEFT')
  })

  it('Can Map RIGHT', () => {
    expect(
      v2p.map(map.RIGHT)
    ).toBe('RIGHT')
  })

  it('Otherwise it maps to NONE', () => {
    let root2 = Math.sqrt(1/2)
    expect(
      v2p.map(new Vector(root2, -root2))
    ).toBe('NONE')
  })

})
