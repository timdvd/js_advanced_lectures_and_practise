# Event Loop

## JavaScript is single-threaded (one call stack).
## But it can handle async tasks (timers, promises, network requests) thanks to the event loop.

### The event loop’s job is to coordinate execution between:

1) Call Stack → Runs synchronous code.
2) Web APIs (or Node APIs) → Handle async tasks (setTimeout, HTTP requests, DOM events).
3) Task Queues:
- Macrotask Queue (Task Queue) → setTimeout, setInterval, setImmediate (Node), I/O.
- Microtask Queue (Job Queue) → Promise.then(), catch(), finally(), queueMicrotask(), process.nextTick() (Node).

## How it Works

1) Run synchronous code → everything goes on the call stack.

2) When async code is called (like setTimeout), it’s handled by Web APIs.

3) When async work finishes, its callback is placed in a queue (macro or micro).

4) Event loop checks:
 - If the call stack is empty →
 - Run all microtasks first.
 - Then run one macrotask.
 - Repeat.

### More information is here:
 - https://vault-developer.github.io/event-loop-explorer/
 - JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7
