'use strict';

// filter 
const names = ['Ivan', 'Anna', 'Ksenia', 'Nick', 'Valdemar'];
const short_names = names.filter((name) => {
    return name.length < 5;
});
console.log(short_names);

// map
let answers = ['IvAn', 'DEREk', 'HELlo'];
answers = answers.map((item) => {
    return item.toLowerCase();
});
console.log(answers);

// every / some
const some = [4, 'qtq', 'sfsafa'];
console.log(some.some((item) => typeof(item) == 'number'));

const some1 = [4, 5, 6, 7, 10];
console.log(some.every(item => typeof(item) == 'number'));

// reduce
const arr = [4, 5, 6, 1, 3, 10, 2];
const res = arr.reduce((sum, current) => sum + current);
console.log(res);

const arr1 = ['apple', 'pear', 'plum'];
const res1 = arr1.reduce((sum, current) => `${sum}, ${current}`);
console.log(res1);


// entries
const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal'
};


const newArr = Object.entries(obj);
const newArr1 = Object.entries(obj)
.filter(item => item[1] == 'persone')
.map(item => item[0]);

console.log(newArr);
console.log(newArr1);