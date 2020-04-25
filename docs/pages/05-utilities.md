## Setting _Delay_ and _Speed_

### Delay Class

It's possible to add delays directly on the element's class attribute, just like this:

```html
<div class="animate__animated animate__bounce animate__delay-2s">Example</div>
```

| Class Name          | Delay Time |
| ------------------- | ---------- |
| `animate__delay-2s` | `2s`       |
| `animate__delay-3s` | `3s`       |
| `animate__delay-4s` | `4s`       |
| `animate__delay-5s` | `5s`       |

> _**Note**: The default delays are from 1 second to 5 seconds only. If you need custom delays, add it directly to your own CSS code._

### Slow, Slower, Fast, and Faster Class

It's possible to control the speed of the animation by adding these classes, as a sample below:

```html
<div class="animate__animated animate__bounce animate__faster">Example</div>
```

| Class Name        | Speed Time |
| ----------------- | ---------- |
| `animate__slow`   | `2s`       |
| `animate__slower` | `3s`       |
| `animate__fast`   | `800ms`    |
| `animate__faster` | `500ms`    |

> _**Note**: The `animate__animated` class has a default speed of `1s`. If you need custom duration, add it directly to your own CSS code._

### Loop Class

It's possible to control the iteration count of the animation by adding these classes, like below:

```html
<div class="animate__animated animate__bounce animate__loop-2">Example</div>
```

| Class Name        | Iteration Count |
| ----------------- | --------------- |
| `animate__loop-1` | `1`             |
| `animate__loop-2` | `2`             |
| `animate__loop-3` | `3`             |

> _**Note**: The `animate__loop` class has a default iteration count of `1`. If you need custom iteration count, add it directly to your own CSS code._
