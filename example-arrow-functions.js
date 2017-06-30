let names = ['emil', 'tatyana', 'polina', 'viktoria'];

// names.forEach(function (name) {
//   console.log('forEach', name);
// });
//
// names.forEach((name) => {
//   console.log('arrowFunc', name);
// });
//
// names.forEach(name => console.log(name));

// let returnMe = (name) => name + '!';
//
// console.log(returnMe('Emil'));
//
// let person = {
//   name: 'Emil',
//   greet: function () {
//     names.forEach((name) => {
//       console.log(this.name + ' says hi to ' + name);
//     });
//   }
// };
//
// person.greet();

// function add(a, b) {
//   return a + b;
// }

let add = (a, b) => a + b;

console.log(add(1, 3));
add(9, 0);
