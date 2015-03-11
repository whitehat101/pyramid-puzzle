class Vector {

  constructor(...parts) {
    this.components = parts
  }

  dot(other) {
    return this.components
      .map((self, i) => self * other.components[i])
      .reduce((prev, curr) => prev + curr)
  }

  magnitude() {
    if (this._magnitude === undefined)
      this._magnitude = Math.hypot.apply(null, this.components)
    return this._magnitude
  }

  angleBetween(other) {
    let dot = this.dot(other)
    let angle = Math.acos(dot/(this.magnitude()*other.magnitude()))
    if (angle === 0 && dot < 0)
      return Math.PI/2
    else
      return angle
  }

}

export default Vector
