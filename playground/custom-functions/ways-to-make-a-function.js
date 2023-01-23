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

//
const makeABaby = (first, last) => ({
  name: `${first} ${last}`,
  age: 0,
});
