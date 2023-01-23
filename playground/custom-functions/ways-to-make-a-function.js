// This is a function
// function doctorize(firstName) {
//   return `Dr. ${firstName}`;
// }

// This is an anonymous function
// function (firstName) {
//   return `Dr. ${firstName}`;
// }

// This a function expresssion
// const doctorize = function(firstName) {
//   return `Dr. ${firstName}`;
// };

// A normal function is hoisted, i.e., can run a function
// before it is called
// console.log(doctorizeHoisted("Peter"))

// function doctorizeHoisted(firstName) {
//   return `Dr. ${firstName}`;
// };

// Arrow function with one parameter, = (inches)
// You can remove the parenthesis, = inches
// const inchToCM = (inches) => inches * 2.54;

// Arrow function example
// const add = (a, b = 3) => a + b;

// Function expression including an array
// function makeABaby(first, last) {
//   const baby = {
//     name: `${first} ${last}`,
//     age: 0,
//   };
//   return baby;
// }

// Arrow functions are not always the answer
// const makeABaby = (first, last) => ({ name: `${first} ${last}`, age: 0 });

// Immediately invoked function expression (IIFE)
// aka an immediately run/ran function expression
// (function (age) {
//   return `You are cool and age ${age}`;
// })(21);

// Methods
const wes = {
  name: 'Wes Bos',
  // Method
  sayHi() {
    console.log('Hey, Wes');
    return 'Hey, Wes';
  },
  // Shorthand method
  yellHi() {
    console.log('HEEEYY, WEEEEESS!');
  },
  // Arrow function
  whisperHi: () => {
    console.log("hii, weeesss, i'm a mouse");
  },
};

// Callback functions
// When someone clicks something run this, or after some time run this
// Click callback
const button = document.querySelector('.clickMe');

// Callback previous function expression
// console.log(button);
// button.addEventListener('click', wes.yellHi);

// Callback anonymous function
button.addEventListener('click', () => {
  console.log('Nice job!!');
});

// Timer callback
setTimeout(() => {
  console.log('Done!! Time to eat!');
}, 1000);
