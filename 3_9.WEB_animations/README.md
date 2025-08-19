# Web Animations

## Basic Syntax
```
element.animate(keyframes, options);
```
### - keyframes → array of style changes (like CSS @keyframes)
### - options → timing info (duration, iterations, easing, etc.)

## Example: Simple Animation
```
const box = document.querySelector('.box');

box.animate(
  [
    // keyframes
    { transform: 'translateX(0px)', opacity: 1 },
    { transform: 'translateX(300px)', opacity: 0.5 }
  ],
  {
    // options
    duration: 1000,      // 1 second
    iterations: 2,       // repeat 2 times
    direction: 'alternate', // go back and forth
    easing: 'ease-in-out'
  }
);
```
### This will move .box 300px to the right and fade it, then back.

## Controlling the Animation
### animate() returns an Animation object you can control.
```
const box = document.querySelector('.box');

const animation = box.animate(
  [
    { transform: 'scale(1)', background: 'blue' },
    { transform: 'scale(1.5)', background: 'red' }
  ],
  { duration: 2000, iterations: Infinity }
);

// Control it:
setTimeout(() => animation.pause(), 3000);   // pause after 3s
setTimeout(() => animation.play(), 5000);   // resume after 5s
setTimeout(() => animation.cancel(), 8000); // stop completely
```

## Key Options

### - duration: how long (ms)
### - iterations: number of loops (Infinity for endless)
### - delay: start delay
### - easing: timing function (linear, ease, ease-in-out, etc.)
### - direction: normal, reverse, alternate

## When to use
### - Use CSS animations for simple, declarative effects.
### - Use animate() JS API when you need programmatic control (start, stop, reverse, change speed, etc.).

### More information is here:
 - animate() method : https://developer.mozilla.org/en-US/docs/Web/API/Element/animate
 - Animation: https://developer.mozilla.org/en-US/docs/Web/API/Animation
