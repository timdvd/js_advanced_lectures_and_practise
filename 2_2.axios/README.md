# Axios

## Axios is a promise-based HTTP client for JavaScript that works in both browser and Node.js.

### It’s mainly used to:
### - Make HTTP requests (GET, POST, PUT, DELETE)
### - Handle asynchronous data fetching
### - Work with APIs

## ✅ Advantages over fetch:

### - Automatically parses JSON
### - Handles request/response interceptors
### - Supports cancellation and timeouts
### - Works in older browsers without polyfills

## Install Axios

### For Node.js / npm project:
```
npm install axios
```

In HTML (via CDN):
```
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
```

### Basic GET Request
```
axios.get("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error("Error fetching data:", error);
  });


response.data contains the response body.
```

### Basic POST Request
```
axios.post("https://jsonplaceholder.typicode.com/posts", {
    title: "New Post",
    body: "This is some content",
    userId: 1
})
.then(response => {
    console.log("Created:", response.data);
})
.catch(error => {
    console.error(error);
});
```

### Using Async/Await
```
async function getPost() {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

getPost();
```

## Axios Features

### Set default base URL:
```
axios.defaults.baseURL = "https://api.example.com";
```

### Set headers:
```
axios.get("/data", { headers: { Authorization: "Bearer token" } });
```

### Request/Response Interceptors:
```
axios.interceptors.request.use(config => {
  console.log("Request sent at", new Date());
  return config;
});
```

### Cancel request:
```
const controller = new AbortController();
axios.get("/data", { signal: controller.signal });
controller.abort(); // cancel request
```
## ✅Don't forget to type in cmd " npm install " in order to get all packages installed)
