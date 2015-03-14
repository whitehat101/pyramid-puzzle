// attempt to send _ to newborn generator

let Stabilizer = (threshold) => {
  let generator = function*() {
    let token, lastToken
    let count = threshold

    token = yield
    while (true) {
      lastToken = token
      token = yield (count >= threshold)
      if (token === lastToken)
        count += 1
      else
        count = 1
    }
  }()

  // prime the generator
  generator.next()

  return (val) => generator.next(val).value
}

export default Stabilizer
