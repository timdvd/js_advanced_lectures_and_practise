'use strict';

class User{
    constructor(name, age){
        this.name = name;
        this._age = age;
    }

    #surname = 'Devold';

    say = () => {
        console.log(`Name: ${this.name} ${this.#surname}, age: ${this._age}`);
    };

    get age(){
        return this._age;
    }

    set age(age){
        if(typeof age === 'number' && age > 0 && age < 110){
            this._age = age;
        }else{
            console.log('Not a proper number')
        }
    }
}


const ivan = new User('Ivan', 25);
console.log(ivan.name);
console.log(ivan.surname)
ivan.age = 55;
ivan.say();