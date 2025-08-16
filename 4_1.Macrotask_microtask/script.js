setTimeout(() => console.log('timeout')); // fifth execution

Promise.resolve()
    .then(() => console.log('promise')); // second execution

queueMicrotask(() => console.log('microtask')); // third

Promise.resolve()
    .then(() => console.log('promise_2')); // forth execution

console.log('code'); // first execution


// () => {}
// microtasks : then/catch/finally, async/await
// render
// () => {}
// microtasks : then/catch/finally, async/await
// render
// () => {}