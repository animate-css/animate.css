## Utility classes

Animate.css comes packed with a few utility classes to simplify its use.

### Delay classes

You can add delays directly on the element's class attribute, just like this:

```html
<div class="animate__animated animate__bounce animate__delay-2s">Example</div>
```

Animate.css provides the following delays:

| Class name          | Default delay time |
| ------------------- | ------------------ |
| `animate__delay-2s` | `2s`               |
| `animate__delay-3s` | `3s`               |
| `animate__delay-4s` | `4s`               |
| `animate__delay-5s` | `5s`               |

The provided delays are from 1 to 5 seconds. You can customize them setting the `--animate-delay` property to a longer or a shorter duration:

```css
/* All delay classes will take 2x longer to start */
:root {
  --animate-delay: 2s;
}

/* All delay classes will take half the time to start */
:root {
  --animate-delay: 0.5s;
}
```

### Slow, slower, fast, and Faster classes

You can control the speed of the animation by adding these classes, as below:

```html
<div class="animate__animated animate__bounce animate__faster">Example</div>
```

| Class name        | Default speed time |
| ----------------- | ------------------ |
| `animate__slow`   | `2s`               |
| `animate__slower` | `3s`               |
| `animate__fast`   | `800ms`            |
| `animate__faster` | `500ms`            |

The `animate__animated` class has a default speed of `1s`. You can also customize the animations duration through the `--animate-duration` property, globally or locally. This will affect both the animations and the utility classes. Example:

```css
/* All animations will take twice as long to finish */
:root {
  --animate-duration: 2s;
}

/* Only this element will take half the time to finish */
.my-element {
  --animate-duration: 0.5s;
}
```

Notice that some animations have a duration of less than 1 second. As we used the CSS `calc()` function, setting the duration through the `--animation-duration` property will respect these ratios. So, when you change the global duration all the animations will respond to that change!

### Repeating classes

You can control the iteration count of the animation by adding these classes, like below:

```html
<div class="animate__animated animate__bounce animate__repeat-2">Example</div>
```

| Class Name          | Default iteration count |
| ------------------- | ----------------------- |
| `animate__repeat-1` | `1`                     |
| `animate__repeat-2` | `2`                     |
| `animate__repeat-3` | `3`                     |
| `animate__infinite` | `infinite`              |

As with the delay and speed classes, the `animate__repeat` class is based on the `--animate-repeat` property and has a default iteration count of `1`. You can customize them by setting the `--animate-repeat` property to a longer or a shorter value:

```css
/* The element will repeat the animation 2x
   It's better to set this property locally and not globally or
   you might end up with a messy situation */
.my-element {
  --animate-repeat: 2;
}
```

Notice that `animate__infinite` doesn't use any custom property and changes to `--animate-repeat` will have no effect on it. Don't forget to read the [best practices](#best-practices) section to make the best use of repeating animations.
