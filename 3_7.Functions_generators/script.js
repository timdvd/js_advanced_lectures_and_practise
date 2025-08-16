'use strict';

function* generator(){
    yield 'S';
    yield 'c';
    yield 'r';
    yield 'i';
    yield 'p';
    yield 't';
}

const str = generator();

console.log(str.next());
console.log(str.next());
console.log(str.next().value);

function* count(n){
    for(let i = 0; i < n; i++){
        yield i;
    }
}

const counter = count(7);

for(let k of count(7)){
    console.log(k);
}