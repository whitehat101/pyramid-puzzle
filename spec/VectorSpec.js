import Vector from "../lib/Vector"

/* Vector
 *
 * It's the user's responsibility to ensure that
 * vecotrs of similar dimensions are used -- a reasonable "performance" tradeoff?
 *
 * Features:
 * - dot
 * - normalization
 * - angleBetween
 *
 */

describe('Vector', () => {
  var v2d, v3d

  v2d = {
       UP: new Vector(  0, 1 ),
     DOWN: new Vector(  0,-1 ),
     LEFT: new Vector(  1, 0 ),
    RIGHT: new Vector( -1, 0 ),
  }

  // yes this is a tad trivial…
  v3d = {
       UP: new Vector(  0, 1, 0 ),
     DOWN: new Vector(  0,-1, 0 ),
     LEFT: new Vector(  1, 0, 0 ),
    RIGHT: new Vector( -1, 0, 0 ),
  }

  describe('dot products', () => {
    it('works with a trivial 2d example', () => {
      expect(
        v2d.UP.dot(new Vector(2, 42))
      ).toBe(42)
    })

    it('works with a less trivial 2d example', () => {
      expect(
        (new Vector(1, 2)).dot(new Vector(7, 3))
      ).toBe(13)
    })

    it('works with a trivial 3d example', () => {
      expect(
        v3d.UP.dot(new Vector(2, 42, 11))
      ).toBe(42)
    })

    it('works with a less trivial 3d example', () => {
      expect(
        (new Vector(1, 2, 3)).dot(new Vector(7, 3, 1))
      ).toBe(16)
    })
  })

  describe('normalization', () => {
    it('works with a trivial 2d example', () => {
      expect(
        v2d.UP.magnitude()
      ).toBe(1)
    })

    it('works with a trivial 3d example', () => {
      expect(
        v3d.UP.magnitude()
      ).toBe(1)
    })

    it('works with a 2d example', () => {
      expect(
        (new Vector(3, 4)).magnitude()
      ).toBe(5)
    })

    it('works with a 3d example', () => {
      expect(
        (new Vector(1, 2, 3)).magnitude()
      ).toBe(3.7416573867739413)
    })
  })


  describe('angle between vectors', () => {
    it('works with a trivial 2d example', () => {
      expect(
        (v2d.UP).angleBetween(v2d.RIGHT)
      ).toBe(Math.PI/2)
    })

    it('works with another trivial 2d example', () => {
      expect(
        (v2d.UP).angleBetween(v2d.DOWN)
      ).toBe(Math.PI)
    })

    it('works with two of the same vectors', () => {
      expect(
        (new Vector(1, 2, 3)).angleBetween(new Vector(1, 2, 3))
      ).toBe(0)
    })

    it('works with itself', () => {
      let v = new Vector(1, 2, 3)
      expect(
        v.angleBetween(v)
      ).toBe(0)
    })
  })

})
