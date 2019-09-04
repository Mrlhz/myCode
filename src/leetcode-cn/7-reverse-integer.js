function reverse(x) {
  const min = Math.pow(-2, 31) // -2147483648
  const max = Math.pow(2, 31) - 1 // 2147483647

  let ans = 0

  while (x !== 0) {
    let pop = x % 10

    if (ans > max / 10 || (ans === max / 10 && pop > 7)) {
      return 0
    }

    if (ans < min / 10 || (ans === min / 10 && pop < -8)) {
      return 0
    }

    x = parseInt(x / 10)
    ans = ans * 10 + pop
  }
  return ans
}


// reverse(-900)
// reverse(123)
// reverse(120)
// reverse(-214748364)

function reverseInteger(x) {
  const min = Math.pow(-2, 31) // -2147483648
  const max = Math.pow(2, 31) - 1 // 2147483647

  if (!x || x > max || x < min) return 0

  let flag = false

  if (x < 0) {
    flag = true
    x = Math.abs(x)
  }

  let ans = 0

  let reverseArr = x.toString().split('').reverse()

  let len = reverseArr.length

  for (let i = 0; i < len; i++) {
    ans += reverseArr[i] * Math.pow(10, len - i - 1)
  }
  if (ans > max || ans < min) return 0
  return flag ? -1 * ans : Number(ans)
}

// reverseInteger(-900)
// reverseInteger(123)
// reverseInteger(120)
// reverseInteger(-2147483647)

module.exports = {
  reverse,
  reverseInteger
}