# What is async/await?

## async: makes a function return a Promise automatically.

## await: pauses code execution inside an async function until a Promise resolves (or rejects).

### So instead of messy .then(), you can write async code like it’s synchronous.

### Basic Example
```
// async function always returns a Promise
async function getData() {
  return "Hello";
}

getData().then(res => console.log(res)); // "Hello"
```

### Using await
```
function fetchNumber() {
  return new Promise(resolve => {
    setTimeout(() => resolve(42), 1000);
  });
}

async function showNumber() {
  console.log("Waiting...");
  const num = await fetchNumber();   // waits 1s
  console.log("Result:", num);       // 42
}

showNumber();
```

### Error Handling with try...catch
```
async function fetchUser() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const user = await res.json();
    console.log(user.name);
  } catch (err) {
    console.error("Error:", err);
  }
}
fetchUser();
```

### Running Promises in Parallel
```
async function loadData() {
  const [posts, users] = await Promise.all([
    fetch("https://jsonplaceholder.typicode.com/posts").then(r => r.json()),
    fetch("https://jsonplaceholder.typicode.com/users").then(r => r.json())
  ]);
  console.log("Posts:", posts.length);
  console.log("Users:", users.length);
}
loadData();
```

## ✅ When to use async/await?
### - When you want cleaner, synchronous-looking async code.
### - When multiple awaits depend on each other.
### - Always wrap in try/catch for errors.
