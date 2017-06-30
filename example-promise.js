// function getTempCallback(location, callback) {
//   callback(undefined, 78);
//   callback('City no found');
// }
//
// getTempCallback('Plovdiv', function (err, temp) {
//   if (err) {
//     console.log('error', err);
//   } else {
//     console.log('success', temp);
//   }
// });
//
// function getTempPromise(location) {
//   return new Promise(function(resolve, reject) {
//     resolve(79);
//     reject('City not found');
//   });
// }
//
// getTempPromise('Plovdiv').then(function (temp) {
//   console.log('promise success', temp);
// }, function (err) {
//   console.log('promise error', err);
// });
//

function addPromise (a, b) {
  return new Promise(function (resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a + b);
    } else {
      reject('not a valid number');
    }
  });
}

addPromise(10, 2).then(function (result) {
  console.log(result);
}, function (err) {
  console.log(err);
});

addPromise(10, 'da').then(function (result) {
  console.log(result);
}, function (err) {
  console.log(err);
});
