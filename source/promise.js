// promises in es6
'use strict'

// let myPromise = new Promise((resolve, reject) => {
//    setTimeout(() => {
//       resolve('Good to go!');
//    }, 500);

// setTimeout(() => {
//    reject('There is an elephant in the room');
// }, 500);
// });

// myPromise.then((res) => {
//       console.log(res);
//    })
//    .catch((err) => {
//       console.log(err);
//    })
// });

// let myPromise2 = new Promise((resolve, reject) => {
//    setTimeout(() => {
//       resolve('This looks even more promising');
//    }, 1000);
// });

// Promise.all([myPromise, myPromise2])
//    .then((data) => {
//       console.log(data);
//    });
// });

fetch('http://api.icndb.com/jokes/random/10')
   .then((res) => {
      res.json().then((data) => {
         console.log(data);
      });
   })
   .catch((err) => {
      console.log(err);
   });
