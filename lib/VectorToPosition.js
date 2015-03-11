// import Vector from "./Vector"

const MAP = Symbol('map')

class VectorToPosition {

  constructor(map, threshold = 30) {
    this.threshold = threshold * Math.PI / 180
    this[MAP] = new Map()
    for(let key of Object.keys(map)) {
      this[MAP].set(key, map[key])
    }
    console.log('thresh', this.threshold)
  }

  map(vector) {
    for(let [key,position] of this[MAP].entries()) {
      let angle = vector.angleBetween(position)
      console.log(key, angle, vector, position)
      if (Math.abs(angle) <= this.threshold)
        return key
    }

    return 'NONE'
  }

}

export default VectorToPosition
// export Vector from "./Vector"
