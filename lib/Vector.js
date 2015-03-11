class Vector {

  constructor(...parts) {
    this.components = parts
  }

  dot(other) {
    return this.components
      .map((self, i) => self * other.components[i])
      .reduce((prev, curr) => prev + curr)
  }

  norm() {
    return Math.hypot.apply(null, this.components)
  }

  angleBetween(other) {
    let dot = this.dot(other)
    let angle = Math.acos(dot/(this.norm()*other.norm()))
    if (angle === 0 && dot < 0)
      return Math.PI/2
    else
      return angle
  }

}

export default Vector
