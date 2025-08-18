# What is Encapsulation?

## Encapsulation is an OOP (Object-Oriented Programming) principle where:

### The internal details (data, methods) of an object are hidden.

### You only expose what’s necessary through a public interface.

### In simple words: wrap data + behavior together and restrict direct access to internal details.

## Why Encapsulation?

### - ✅ Protects data from being changed accidentally
### - ✅ Keeps code modular and organized
### - ✅ Makes objects easier to maintain and extend
### - ✅ Increases security by exposing only what’s needed

## Ways to Achieve Encapsulation in JavaScript
### 1) Using Functions (Closures)
```
function createUser(name) {
  let password = "secret123"; // private

  return {
    getName: () => name,
    checkPassword: (pass) => pass === password
  };
}

const user = createUser("Alice");
console.log(user.getName());          // Alice
console.log(user.password);           // undefined (hidden)
console.log(user.checkPassword("123"));  // false
console.log(user.checkPassword("secret123")); // true


Here, password is hidden inside the closure.
```

### 2) Using ES6 Classes with #privateFields
```
class BankAccount {
  #balance = 0; // private field

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const acc = new BankAccount();
acc.deposit(100);
console.log(acc.getBalance()); // 100
console.log(acc.#balance);     // ❌ Error! Private field


Here, #balance is truly private and cannot be accessed outside.
```

### 3) Using Getter and Setter Methods
```
class Person {
  #age;

  constructor(name, age) {
    this.name = name;
    this.#age = age;
  }

  getAge() {
    return this.#age;
  }

  setAge(newAge) {
    if (newAge > 0) {
      this.#age = newAge;
    } else {
      console.log("Invalid age");
    }
  }
}

const p = new Person("Bob", 25);
console.log(p.getAge());  // 25
p.setAge(-5);             // Invalid age
console.log(p.getAge());  // 25 (unchanged)
```

## Key Idea

### - Encapsulation = control access.
### - Use closures or private fields (#field) for real privacy.
### - Use getters/setters for controlled access.
### - Expose only what is needed = public interface.
