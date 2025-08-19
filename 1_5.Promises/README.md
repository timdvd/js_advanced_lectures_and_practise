# What is a Promise?

## A Promise in JavaScript is an object that represents the eventual completion or failure of an asynchronous operation.

### Think of it as:
➡️ "I promise I’ll give you a result later — success or failure."

## Promise States

### A Promise can be in one of three states:

### - Pending → still waiting (not finished yet).

### - Fulfilled → completed successfully → calls .then().

### - Rejected → failed → calls .catch().

### Example
```
// Creating a Promise
const myPromise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("✅ Operation was successful!");
  } else {
    reject("❌ Something went wrong.");
  }
});
```

### Using the Promise
```
myPromise
  .then(result => {
    console.log(result); // Runs if resolved
  })
  .catch(error => {
    console.error(error); // Runs if rejected
  })
  .finally(() => {
    console.log("Promise finished (success or failure).");
  });
```

### Real Example (fetch API)
```
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => response.json())   // when resolved
  .then(data => console.log("Post:", data))
  .catch(error => console.error("Error:", error)); // when rejected
```

### Async / Await (modern way to use Promises)
```
async function getPost() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await response.json();
    console.log("Post:", data);
  } catch (error) {
    console.error("Error:", error);
  }
}
getPost();
```

### ✅ In short:

### A Promise handles async tasks (like API calls, file loading).

### Use .then() for success, .catch() for errors.

### Use async/await for cleaner, modern code.

## More information is here 
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
