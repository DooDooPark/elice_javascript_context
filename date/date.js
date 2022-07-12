// 자바스크립트 내장객체 사이트
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects

const now = new Date()

console.log(now)
console.log(typeof now)

console.log('getFullYear:', now.getFullYear())
console.log('getMonth:', now.getMonth())
console.log('getDate:', now.getDate())
console.log('getDay:', now.getDay())
console.log('getHours:', now.getHours())
console.log('getMinutes:', now.getMinutes())
console.log('getSeconds:', now.getSeconds())

console.log(now.toDateString())
console.log(now.toTimeString())
console.log(now.toLocaleString())

// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Date/Date

function Calculator(a, b) {
    this.a = 1
    this.b = 2
    this.sum = function () {
        return this.a + this.b;
    }
    // this.sum = (a, b) => {
    //     return this.a + this.b
    // }
    // this.mul = (a, b) => {
    //     return this.a * this.b
    // }
}

console.log(new Calculator(2, 3));

// let calculator = new Calculator(3, 4)

// console.log(calculator.a)
// console.log(calculator.b)

// console.log(calculator.sum())
// console.log(calculator.mul())
// console.log(calculator.sum(3, 4))
// console.log(calculator.mul(4, 5))
