# What is AJAX?

## AJAX stands for Asynchronous JavaScript and XML.
## It is a technique used in web development to send and receive data from a server without reloading the entire web page.

### Key Points:

 - Asynchronous → The browser does not freeze while waiting for the server’s response.

 - Data exchange → Data can be sent or received in formats like JSON, XML, HTML, or text.

 - Better user experience → Pages can update parts of their content dynamically (like new comments appearing, search suggestions, or live chat).

### Example (using XMLHttpRequest):
```
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.example.com/data", true);
xhr.onload = function() {
  if (xhr.status === 200) {
    console.log("Response:", xhr.responseText);
  }
};
xhr.send();
```

### Example (modern fetch API, often used instead of old AJAX):
```
fetch("https://api.example.com/data")
  .then(response => response.json())
  .then(data => console.log("Response:", data))
  .catch(error => console.error("Error:", error));
```

## ✅ In short:
### - AJAX is not a programming language — it’s a technique for creating fast, dynamic web applications by updating parts of a page without refreshing it.

### - Do you want me to make this super short (1–2 sentences) for GitHub README, or a detailed explanation with examples?
