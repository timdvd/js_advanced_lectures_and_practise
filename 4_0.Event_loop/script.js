'use strict';

console.log(1);

setTimeout(() => {
    console.log('Timeout 2');
}, 2000);

setTimeout(() => {
    console.log('Timeout 4');
}, 4000);

console.log(2);