# localStorage

## localStorage is a built-in web storage feature that lets you store key-value pairs in the browser.
### - Data is stored persistently (remains even after refreshing or closing the browser).
### - Storage limit ≈ 5–10MB (depends on browser).
### - Data is stored as strings only.

## 👉 Think of it like a tiny database inside your browser.

### Basic Methods
```
// Save data
localStorage.setItem("username", "Alice");

// Get data
let user = localStorage.getItem("username");
console.log(user); // Alice

// Remove item
localStorage.removeItem("username");

// Clear all data
localStorage.clear();
```

### Storing Objects & Arrays

 - Since localStorage only stores strings, you need JSON.stringify and JSON.parse.
```
const user = { name: "Alice", age: 25 };

// Store
localStorage.setItem("user", JSON.stringify(user));

// Retrieve
const savedUser = JSON.parse(localStorage.getItem("user"));
console.log(savedUser.name); // Alice
```

### Example: Page Visit Counter
```
let visits = localStorage.getItem("visits");

if (!visits) {
  visits = 1;
} else {
  visits = parseInt(visits) + 1;
}

localStorage.setItem("visits", visits);
console.log(`You have visited this page ${visits} times.`);
```
## When to Use
### - ✅ Save user preferences (theme, language, settings)
### - ✅ Store temporary app data (cart items, drafts)
### - ✅ Avoid extra server calls

## ❌ Don’t use for sensitive data (passwords, tokens) — it’s not secure.
