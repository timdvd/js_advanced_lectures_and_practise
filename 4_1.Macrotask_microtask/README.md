#  Macrotasks and Microtasks

## Macrotask Queue (Task Queue)
1) Contains things like:
 - setTimeout / setInterval
 - setImmediate (Node.js)
 - I/O events
 - UI rendering
2) These tasks run one at a time. After each macrotask, the engine checks the microtask queue.

## Microtask Queue (Job Queue)
1) Contains things like:
 - Promise.then(), catch(), finally()
 - queueMicrotask()
 - MutationObserver
2) Microtasks are executed immediately after the current macrotask finishes — before rendering and before the next macrotask.

## Example
```
console.log('Start');

setTimeout(() => {
  console.log('Macrotask: setTimeout');
}, 0);

Promise.resolve()
  .then(() => {
    console.log('Microtask: Promise 1');
  })
  .then(() => {
    console.log('Microtask: Promise 2');
  });

console.log('End');
```

### Output:
```
Start
End
Microtask: Promise 1
Microtask: Promise 2
Macrotask: setTimeout
```

## Why?
1) "Start" → runs immediately (synchronous).
2) "End" → still synchronous.
3) After the synchronous code, the event loop checks the microtask queue:
 - Executes all .then() callbacks before moving on.
4) Only when microtasks are done does it pick the next macrotask (setTimeout).

## Visualization
1) Call Stack → runs code.
2) After finishing a macrotask, event loop checks:
 - Microtask queue → run all microtasks.
 - Then → pick the next macrotask.

### So order is:
```
Macrotask → (all Microtasks) → Macrotask → (all Microtasks) → ...
```
