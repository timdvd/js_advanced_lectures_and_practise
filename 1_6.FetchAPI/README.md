# The fetch API 
## in JavaScript is used to make network requests (like getting data from an API). It returns a Promise that resolves with the response.

### Here’s a basic example:
```
// Simple GET request
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json(); // parse response as JSON
  })
  .then(data => {
    console.log(data); // use the data
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });
```

### POST request with JSON body:
```
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    title: 'Hello',
    body: 'World',
    userId: 1
  })
})
  .then(response => response.json())
  .then(data => {
    console.log('Created:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
```

### With async/await (cleaner syntax):
```
async function getPost() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    if (!response.ok) throw new Error(`Error: ${response.status}`);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Fetch error:', error);
  }
}

getPost();
```
## More information is here
 - https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch


👉 Do you want me to also show you how to cancel a fetch request (using AbortController), or just the basics for now?
