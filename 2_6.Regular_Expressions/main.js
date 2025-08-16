'use strict';

// new RegExp('pattern', 'flags');
// /pattern/f

const ans = prompt('Ввесдите ваше имя');

const reg = /n/ig;

// i - flag
// g - flag
// m - flag

console.log(ans.search(reg));
console.log(ans.match(reg));

const pass = prompt('Password');

console.log(pass.replace(/./g, "*"));
console.log(pass.replace(/\./g, "*"));
console.log(pass.replace(/\\/g, "*"));

console.log('12-34-56'.replace(/-/g, ":"));

console.log(reg.test(ans));

// \d - search numbaer
// \w - search words (letters)
// \s - search spaces

// const reg1 = /\d/;
// console.log(ans.match(reg));

const str = 'My name is R2R2';
console.log(str.match(/\w\d\w\d/i));

// \D - not number
// \W - not letters

console.log(str.match(/\W/ig));
console.log(str.match(/\D/ig));