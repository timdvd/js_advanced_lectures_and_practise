# new Error

## In JavaScript, Error is a built-in object used to represent runtime errors.
## When you create an error using new Error("message"), you get an error object with details like:

### - message → description of the error

### - name → type of error (default "Error")

### - stack → call stack (where the error happened)

## Basic Example
```
try {
  throw new Error("Something went wrong!");
} catch (err) {
  console.log("Error name:", err.name);     // Error
  console.log("Error message:", err.message); // Something went wrong!
  console.log("Error stack:", err.stack);   // stack trace
}
```

## Custom Error Types

### Besides Error, JavaScript has built-in error types:

 - TypeError → invalid type

 - ReferenceError → using variable that doesn’t exist

 - SyntaxError → invalid syntax

 - RangeError → number out of range

Example:
```
try {
  let x = null;
  x.toUpperCase(); // ❌ TypeError
} catch (err) {
  console.log(err.name);    // TypeError
  console.log(err.message); // Cannot read properties of null
}
```
## Custom Error Class

### You can define your own error type:
```
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

function registerUser(age) {
  if (age < 18) {
    throw new ValidationError("User must be at least 18.");
  }
  return "User registered!";
}

try {
  console.log(registerUser(16));
} catch (err) {
  console.log(`${err.name}: ${err.message}`);
}
```

✅ Output:
ValidationError: User must be at least 18.

## Key Points
### - new Error("message") → creates a standard error object.
### - Errors can be thrown with throw and caught with try...catch.
### - You can use built-in error types or create custom ones.
### - Useful for debugging and graceful error handling.
