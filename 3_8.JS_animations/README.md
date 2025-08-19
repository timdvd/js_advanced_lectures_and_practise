# requestAnimationFrame
### - A browser API for smooth animations (optimized for 60fps).
### - It tells the browser:
### “Run this function before the next repaint (screen redraw).”

### - Unlike setInterval or setTimeout, it syncs with the browser’s refresh rate, so animations look smooth and save CPU/battery.

## Syntax
```
let id = requestAnimationFrame(callback);
cancelAnimationFrame(id);
```
### - callback → function that runs before each repaint.
### - The callback receives a timestamp argument (DOMHighResTimeStamp).

## Example: Move a box across the screen
```
<div id="box" style="width:50px;height:50px;background:red;position:absolute;"></div>

<script>
const box = document.getElementById('box');
let start = null;

function step(timestamp) {
  if (!start) start = timestamp;
  let progress = timestamp - start;

  // Move right 1px per ms (1000px in 1s)
  box.style.transform = `translateX(${Math.min(progress / 2, 300)}px)`;

  if (progress < 600) { // stop after 600ms
    requestAnimationFrame(step);
  }
}

requestAnimationFrame(step);
</script>
```
## Advantages over setInterval
### - ✅ Automatically pauses when the tab is inactive (saves resources).
### - ✅ Syncs with monitor refresh rate → smoother animations.
### - ✅ Provides a high-res timestamp for precise timing.

### More information is here:
 - Window: requestAnimationFrame() method: https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame
