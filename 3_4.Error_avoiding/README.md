# try...catch...finally

## It’s a JavaScript error-handling mechanism.

### - try → code that might throw an error

### - catch → code that runs if an error occurs

### - finally → code that always runs (whether error happened or not)

### Basic Example
```
try {
  let result = 10 / 0;
  console.log(result);  // Infinity (no error yet)
  
  // Simulating error
  throw new Error("Something went wrong!");
  
} catch (error) {
  console.error("Caught an error:", error.message);
  
} finally {
  console.log("Finally block always runs!");
}
```

### ✅ Output:

 - Infinity
 - Caught an error: Something went wrong!
 - Finally block always runs!

### Real Example (JSON parsing)
```
const data = '{ "name": "Alice", "age": 25 }';

try {
  const user = JSON.parse(data);
  console.log("User name:", user.name);
  
} catch (error) {
  console.error("Invalid JSON:", error.message);
  
} finally {
  console.log("Parsing attempt finished.");
}
```

## Key Points
### - Use try...catch when something might fail (like API calls, JSON parsing, file reading).
### - The catch block runs only if an error occurs.
### - The finally block always runs (good for cleanup, closing connections, etc.).
