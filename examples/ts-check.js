// //@ts-check

/** @type {number} */
let x;
// x = 0; // ✅ OK
// x = false; // 🚨 Error: boolean is not assignable to number

/** @type {{a: number}} */
// let obj = { a: 1 };
// obj.b = 2;  // 🚨 Error, type {a: number} does not have property b

/**
 * @param {string} [somebody] - Somebody's name.
 */
// function sayHello(somebody) {
//     if (!somebody) {
//         somebody = 'John Doe';
//     }
//     alert('Hello ' + somebody);
// }

// sayHello('Ema');
// sayHello(12312);