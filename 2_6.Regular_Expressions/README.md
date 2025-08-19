# Regular Expression

## A Regular Expression (regex) is a pattern used to match, search, and manipulate strings.

### In JS, regex is written between / slashes:
```
const pattern = /hello/;
```

### Creating a Regex

1) Literal notation
```
const regex = /hello/;
```
2) Constructor
```
const regex = new RegExp("hello");
```

### Common Regex Methods
```
const text = "Hello world!";

// test() → returns true/false
console.log(/Hello/.test(text));  // true

// exec() → returns match details or null
console.log(/world/.exec(text));  // ["world"]

// match() → string method
console.log(text.match(/Hello/)); // ["Hello"]

// replace() → replace text
console.log(text.replace(/world/, "JS")); // "Hello JS!"

// search() → index of match
console.log(text.search(/world/)); // 6

// split() → split string by regex
console.log(text.split(/\s/)); // ["Hello", "world!"]
```

## Special Characters

### - . → any character
### - \d → digit (0–9)
### - \w → word character (a-z, A-Z, 0-9, _)
### - \s → whitespace (space, tab)
### - ^ → start of string
### - $ → end of string
### - + → one or more
### - * → zero or more
### - ? → optional
### - {n} → exactly n times
### - {n,} → n or more times
### - {n,m} → between n and m times
### - [abc] → match a, b, or c
### - [^abc] → NOT a, b, or c
### - (x|y) → x or y

## Flags

### - i → case-insensitive
### - g → global (all matches, not just first)
### - m → multiline

### Example:
```
const text = "JS is awesome. js is powerful.";
const regex = /js/gi; 
console.log(text.match(regex)); // ["JS", "js"]
```

### Practical Examples
```
Validate Email
const email = "test@example.com";
const regex = /^[\w.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
console.log(regex.test(email)); // true

Extract Numbers
const str = "Order 123, Price $45";
console.log(str.match(/\d+/g)); // ["123", "45"]

Check if String Starts with "Hello"
console.log(/^Hello/.test("Hello World")); // true
```


✅ In short:
Regular Expressions = patterns for text matching/search.
Use /pattern/flags with methods like .test(), .match(), .replace().

### More information is here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
