// import Vector from "./Vector"

const MAP = Symbol('map')

class VectorToPosition {

  constructor(map, threshold = 30) {
    this.threshold = threshold * Math.PI / 180
    this[MAP] = new Map()
    for(let key of Object.keys(map)) {
      this[MAP].set(key, map[key])
    }
  }

  map(vector) {
    for(let [key,position] of this[MAP].entries()) {
      let angle = vector.angleBetween(position)
      if (angle <= this.threshold)
        return key
    }

    return 'NONE'
  }

}

export default VectorToPosition
// export Vector from "./Vector"
