

let park = {
    name: '박',
    age: 30,
}

let jung = {
    name: '정',
    age: 40,
}



//     email: 'test@superstar.com',
//     address: '홍길동 11동',
//     food: ['김치찌게', '제육볶음'],

//     payment: function () {
//         console.log('결제 완료 되었습니다.');
//     },
//     deliverystart: function () {
//         console.log('배달이 시작되었습니다.');
//     },
//     logdelivery: function () {
//         console.log(this.food);
//     },

//     arrowlog: () => {
//         console.log(this.food);
//     }
// };

function User() {
    this.name = '두두';
    this.age = 30;
}


function Sum(a, b) {
    return a + b;
}

// function Calculator(a, b) {
//     this.a = 1
//     this.b = 2
//     this.sum = function () {
//         return this.a + this.b;
//     }
//     // this.sum = (a, b) => {
//     //     return this.a + this.b
//     // }
//     // this.mul = (a, b) => {
//     //     return this.a * this.b
//     // }
// }

// console.log(new Calculator(2, 3));

// let calculator = new Calculator(3, 4)

// console.log(calculator.a)
// console.log(calculator.b)

// console.log(calculator.sum())
// console.log(calculator.mul())
// console.log(calculator.sum(3, 4))
// console.log(calculator.mul(4, 5))
