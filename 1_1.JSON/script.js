'use strict';

const person = {
    name: 'Alex',
    tel: '+744444444',
    parents: {
        mother: 'Olga',
        father: 'Mike'
    }
};

console.log(JSON.stringify(person));

console.log(JSON.parse(JSON.stringify(person)));

const clone = JSON.parse(JSON.stringify(person));
clone.parents.mother = 'Ann';
console.log(person);
console.log(clone);