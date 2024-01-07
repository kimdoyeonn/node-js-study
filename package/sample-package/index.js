console.log('require로 부르면 실행')

module.exports = { // 외부로 노출될 객체
  add: (a, b) => a + b,
  sub: (a, b) => a - b,
  multi: (a, b) => a * b,
  div: (a, b) => a / b
}