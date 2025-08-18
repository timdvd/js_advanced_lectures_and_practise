# Getters and Setters

## Getter → a method that lets you read a property in a controlled way.

## Setter → a method that lets you update a property with validation or side effects.

### They look like normal properties when used, but behind the scenes, they are functions.

### Example with get and set
```
class Person {
  constructor(name, age) {
    this.name = name;
    this._age = age; // convention: "_" means "private-like"
  }

  // Getter
  get age() {
    return this._age;
  }

  // Setter
  set age(newAge) {
    if (newAge > 0) {
      this._age = newAge;
    } else {
      console.log("❌ Invalid age");
    }
  }
}

const p = new Person("Alice", 25);

console.log(p.age);   // calls getter → 25
p.age = 30;           // calls setter → updates to 30
console.log(p.age);   // 30

p.age = -5;           // ❌ Invalid age
console.log(p.age);   // still 30
```

### Object Literals with Getters/Setters
```
const user = {
  firstName: "John",
  lastName: "Doe",
  
  // Getter
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  
  // Setter
  set fullName(name) {
    const parts = name.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
};

console.log(user.fullName);  // John Doe
user.fullName = "Jane Smith";
console.log(user.firstName); // Jane
console.log(user.lastName);  // Smith
```
## Why Use Getters and Setters?

### - ✅ Encapsulation → hide private details but give controlled access
### - ✅ Validation → check values before assigning
### - ✅ Computed properties → dynamically return values (like fullName)
### - ✅ Consistency → they look like normal properties
