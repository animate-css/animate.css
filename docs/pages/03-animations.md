### Animations

To animate an element, add the class `animate__animated` to an element. You can include the class `animate__infinite` for an infinite loop. Finally you need to add one of the following classes to the element (adding the `animate__` prefix before it):

| Class Name           |                     |                     |                      |
| -------------------- | ------------------- | ------------------- | -------------------- |
| `bounce`             | `flash`             | `pulse`             | `rubberBand`         |
| `shake`              | `headShake`         | `swing`             | `tada`               |
| `wobble`             | `jello`             | `bounceIn`          | `bounceInDown`       |
| `bounceInLeft`       | `bounceInRight`     | `bounceInUp`        | `bounceOut`          |
| `bounceOutDown`      | `bounceOutLeft`     | `bounceOutRight`    | `bounceOutUp`        |
| `fadeIn`             | `fadeInDown`        | `fadeInDownBig`     | `fadeInLeft`         |
| `fadeInLeftBig`      | `fadeInRight`       | `fadeInRightBig`    | `fadeInUp`           |
| `fadeInUpBig`        | `fadeOut`           | `fadeOutDown`       | `fadeOutDownBig`     |
| `fadeOutLeft`        | `fadeOutLeftBig`    | `fadeOutRight`      | `fadeOutRightBig`    |
| `fadeOutUp`          | `fadeOutUpBig`      | `fadeInTopLeft`     | `fadeInTopRight`     |
| `fadeInBottomLeft`   | `fadeInBottomRight` | `fadeOutTopLeft`    | `fadeOutTopRight`    |
| `fadeOutBottomRight` | `fadeOutBottomLeft` | `flipInX`           | `flipInY`            |
| `flipOutX`           | `flipOutY`          | `lightSpeedIn`      | `lightSpeedOut`      |
| `rotateIn`           | `rotateInDownLeft`  | `rotateInDownRight` | `rotateInUpLeft`     |
| `rotateInUpRight`    | `rotateOut`         | `rotateOutDownLeft` | `rotateOutDownRight` |
| `rotateOutUpLeft`    | `rotateOutUpRight`  | `hinge`             | `jackInTheBox`       |
| `rollIn`             | `rollOut`           | `zoomIn`            | `zoomInDown`         |
| `zoomInLeft`         | `zoomInRight`       | `zoomInUp`          | `zoomOut`            |
| `zoomOutDown`        | `zoomOutLeft`       | `zoomOutRight`      | `zoomOutUp`          |
| `slideInDown`        | `slideInLeft`       | `slideInRight`      | `slideInUp`          |
| `slideOutDown`       | `slideOutLeft`      | `slideOutRight`     | `slideOutUp`         |
| `backInDown`         | `backInLeft`        | `backInRight`       | `backInUp`           |
| `backOutDown`        | `backOutLeft`       | `backOutRight`      | `backOutUp`          |
| `heartBeat`          |

Full example:

```html
<h1 class="animate__animated animate__infinite animate__bounce animate__delay-2s">Example</h1>
```

[Check out all the animations here!](https://daneden.github.io/animate.css/)

It's possible to change the duration of your animations, add a delay or change the number of times that it plays:

```css
.yourElement {
  animation-duration: 3s;
  animation-delay: 2s;
  animation-iteration-count: infinite;
}
```
