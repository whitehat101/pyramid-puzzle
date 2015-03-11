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
    return Math.acos(this.dot(other)/(this.norm()*other.norm()))
  }

}

export default Vector
