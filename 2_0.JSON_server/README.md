# JSON Server

## JSON Server is a simple Node.js tool that lets you:
### - Create a fake REST API in seconds
### - Use a plain JSON file as your database
### - Quickly test frontend apps without building a real backend

## 👉 Great for prototyping, mock APIs, or learning how to work with RESTful APIs.

### Install JSON Server
```
npm install -g json-server
```

### Setup a Database (db.json)
```
Create a file db.json:

{
  "posts": [
    { "id": 1, "title": "Hello World", "author": "Alice" },
    { "id": 2, "title": "JSON Server Rocks", "author": "Bob" }
  ],
  "comments": [
    { "id": 1, "postId": 1, "body": "Nice post!" }
  ]
}
```

### Run JSON Server
```
json-server --watch db.json --port 3000
```

## Features
### - Supports CRUD operations
### - Filters, sorting, pagination (/posts?_page=1&_limit=5)
### - Relationships (/comments?postId=1)
### - Can serve static files

## When to Use

### - ✅ Frontend testing (React, Vue, Angular)
### - ✅ Prototyping APIs quickly
### - ✅ Learning REST API requests
### - ❌ Not for production (since it’s fake DB in memory / file)

## ✅Don't forget to type in cmd " npm install " in order to get all packages installed)
