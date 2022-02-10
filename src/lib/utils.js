const isNumberOnly = (string) => {
  return /^[0-9]+$/.test(string)
}

const isEven = (number) => {
  return number % 2 === 0
}

const isOdd = (number) => {
  return number % 2 === 1
}

module.exports = {
  isNumberOnly,
  isEven,
  isOdd
}
