# jQuery

## jQuery is a fast, lightweight JavaScript library created in 2006 to make working with the DOM (HTML elements), events, and AJAX easier.

## Its slogan was:
### 👉 “Write less, do more.”

## Why was jQuery popular?

### - Before modern JS (ES6+) and frameworks (React, Vue, Angular), jQuery solved many problems:

### - Browser inconsistencies (different browsers handled JS/DOM differently).

### - Complex syntax for selecting/manipulating elements.

### - Difficulties with AJAX and animations.

## Key Features
### - ✅ Easy DOM selection ($("selector"))
### - ✅ Simple DOM manipulation (change HTML, CSS, attributes)
### - ✅ Event handling (click, hover, etc.)
### - ✅ AJAX requests in fewer lines of code
### - ✅ Animations and effects (fadeIn, slideUp, etc.)
### - ✅ Cross-browser compatibility

### - $ → the jQuery function
### - selector → CSS-like selector (#id, .class, tag)
### - action → what you want to do (e.g., .hide(), .click(), .css())

## Examples
### Select & Change Text
```
$("#msg").text("Hello, World!");
```

### Event Handling
```
$("#btn").click(function() {
  alert("Button clicked!");
});
```

### Hide / Show
```
$("#box").hide();   // hides element
$("#box").show();   // shows element
```

### Simple Animation
```
$("#box").fadeIn(1000);  // fades in over 1s
$("#box").slideUp(500);  // slides up over 0.5s
```

### AJAX with jQuery
```
$.ajax({
  url: "https://jsonplaceholder.typicode.com/posts/1",
  method: "GET",
  success: function(data) {
    console.log("Data:", data);
  },
  error: function(err) {
    console.error("Error:", err);
  }
});
```
## ✅Don't forget to type in cmd " npm install " in order to get all packages installed)
