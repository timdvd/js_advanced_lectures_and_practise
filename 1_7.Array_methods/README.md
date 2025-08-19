## Here’s a cheat sheet of JavaScript array methods grouped by what they do — with quick examples so you can see them in action:

### 🔹 Create / Copy
```
Array.isArray([1,2]);     // true
Array.from('hi');         // ["h", "i"]
Array.of(1,2,3);          // [1, 2, 3]

const arr = [1,2,3];
arr.slice();              // copy: [1,2,3]
```

### 🔹 Push / Pop / Shift / Unshift
```
let nums = [1,2,3];
nums.push(4);     // [1,2,3,4] (add at end)
nums.pop();       // [1,2,3]   (remove end)

nums.unshift(0);  // [0,1,2,3] (add at start)
nums.shift();     // [1,2,3]   (remove start)

nums.splice(1, 1, 9); // at index 1, remove 1, insert 9 → [1,9,3]
```

### 🔹 Join / Split
```
[1,2].concat([3,4]);    // [1,2,3,4]
[...'hi'];              // ["h","i"] spread
['a','b'].join('-');    // "a-b"
'one two'.split(' ');   // ["one","two"]
```

### 🔹 Search / Check
```
const arr = [5,10,15];
arr.includes(10);    // true
arr.indexOf(15);     // 2
arr.lastIndexOf(5);  // 0

arr.find(x => x > 7);    // 10 (first match)
arr.findIndex(x => x > 7); // 1
arr.some(x => x > 12);   // true
arr.every(x => x > 0);   // true
```

### 🔹 Loop / Transform
```
[1,2,3].forEach(n => console.log(n*2)); // side-effects only

[1,2,3].map(n => n*2);    // [2,4,6]
[1,2,3].filter(n => n>1); // [2,3]
[1,2,3].reduce((sum,n)=>sum+n,0); // 6
[1,2,3].reduceRight((s,n)=>s+n,0); // 6 (right to left)
```

### 🔹 Sort 
```
[3,1,2].sort();              // [1,2,3] (string compare by default)
[3,1,2].sort((a,b)=>a-b);    // numeric sort [1,2,3]

[1,2,3].reverse();           // [3,2,1]

[1,2,3,4].flat();            // [1,2,3,4] (flattens nested arrays 1 level)
[[1,2],[3,4]].flat();        // [1,2,3,4]
[[1,[2]]].flat(2);           // [1,2]

['a','b'].fill('x');         // ['x','x']
[1,2,3].copyWithin(0,2);     // [3,2,3]
```

### 🔹 Modern ES6+ methods
```
[1,2,3].includes(2);          // true
[1,2,3].flatMap(n => [n, n*2]); // [1,2,2,4,3,6]

Array.from({length:5},(_,i)=>i); // [0,1,2,3,4]
```

## ✅ Tips to remember:
### - Use .map() when transforming → new array.
### - Use .filter() when selecting some values.
### - Use .reduce() when combining into a single value.
### - Use .forEach() only for side effects (it doesn’t return).

## More information is here
- map() : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
- filter() : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
- reduce() : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
- object.entries() : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
