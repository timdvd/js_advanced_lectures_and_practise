# JSON = JavaScript Object Notation
## It is a lightweight format for storing and exchanging data.
## JSON looks like JavaScript objects, but it is always a string
## when transmitted between systems (e.g., client <-> server).

// Example JSON string:
```
const jsonString = '{"name": "Alice", "age": 25, "isAdmin": false}';

// Parse JSON string -> JavaScript object
const user = JSON.parse(jsonString);
console.log(user.name); // "Alice"
console.log(user.age);  // 25

// Convert JavaScript object -> JSON string
const obj = {
  name: "Bob",
  age: 30,
  hobbies: ["reading", "gaming"],
  active: true
};

const json = JSON.stringify(obj);
console.log(json);
// Output: {"name":"Bob","age":30,"hobbies":["reading","gaming"],"active":true}
```


## ✅ Notes:
### - Keys and string values must be wrapped in double quotes in JSON.
### - JSON supports: objects, arrays, strings, numbers, booleans, null.
### - Functions, undefined, and Date objects are NOT directly supported.
