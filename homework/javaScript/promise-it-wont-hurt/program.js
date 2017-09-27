

// 1. Using setTimeout, print the string 'TIMED OUT!' after 300ms.

    // setTimeout(function() {
    //     console.log("TIMED OUT!");
    // }, 300);
   

// 2. Create a promise. Have it fulfilled with a value of 'FULFILLED!' in executor after a delay of 300ms, using setTimeout.
//Then, print the contents of the promise after if has been fulfilled by passing console.log to then.

// (function() {
//     "use strict";
//     const promise = new Promise(function(fulfill, reject) {
//         return setTimeout(function() {
//             return fulfill("FULFILLED");
//         }, 300);
// });

//     promise.then(console.log);

//     }).call(this);

//3. Create a promise that after a delay of 300ms, rejects with an Error object. The Error object should be constructed with parameter 'REJECTED!', which is the textual message of the error.
//Create a function onReject to print error.message using console.log. Pass this function as a rejection handler to the then method of your promise.

// (function() {
//     "use strict";
//     const promise = new Promise(function(fulfill, reject) {
//     return setTimeout(function() {
//         return reject(new Error("REJECTED"));
//     }, 300);
//     });

//     function onReject(error) {
//         return console.log(error.message);
//     };

//     promise.then(console.log, onReject);
// }).call(this);


//4. First, create a promise using the Promise constructor.
// After the creation of the promise, pass console.log as the success handler to the promise.
//Finally, print out “MAIN PROGRAM” with console.log.

// (function() {
//     "use strict";
//     var onRejected, promise;

//     promise = new Promise(function(fulfill, reject) {
//         fulfill("I FIRED");
//         return reject(new Error("I DID NOT FIRE"));
//     });

//     onRejected = function(error) {
//         return console.log(error.message);
//     };

//     promise.then(console.log, onRejected);

// }).call(this);

//5. First, create a promise using the Promise constructor.
//In the promise’s executor, immediately fulfill the promise with a value of 'PROMISE VALUE'.
// After the creation of the promise, pass console.log as the success handler to the promise.
//Finally, print out “MAIN PROGRAM” with console.log.

// (function() {
//     'use strict';
  
//     var promise = new Promise(function(fulfill, reject) {
//       return fulfill('PROMISE VALUE');
//     });
  
//     promise.then(console.log);
  
//     console.log('MAIN PROGRAM');
  
//   }).call(this);

//6. We don’t have any specific task we’d like to assign to you for this lesson.
//Feel free to explore all three functions at your own pace. When you are preparing to submit though, make sure you are using at least catch and one of Promise.resolve and Promise.reject

// (function() {
//     var promise, lie;

//     promise = Promise.resolve("promise is a promise");

//     lie = Promise.reject(new Error ("promise failed"));

//     lie.catch(function(error) {
//         return console.error(error.message);
//     });

// });

//7,. This task will allow you to demonstrate an understanding how to chain promises together using then.
// Call first function in your program. first() will return a promise that will be fulfilled with a secret value.
//Call second with the fulfilled value of first. Return the promise returned by second in your onFulfilled callback.
//Finally, print the fulfilled value of that new promise with console.log.

(function() {
    var first = first();
    var second = second();

    second = first.then(function(value) {
        return second(value);
    });

    second.then(console.log);
})

