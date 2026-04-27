## Migration from v3.x and Under

Animate.css v4 brought some improvements, improved animations, and new animations, which makes it worth upgrading. However, it also comes with a breaking change: we have added a prefix for all of the Animate.css classes - defaulting to `animate__` - so a direct migration is impossible.

But fear not! Although the default build, `animate.min.css`, brings the `animate__` prefix we also provide the `animate.compat.css` file which brings no prefix at all, like the previous versions (3.x and under).

If you're using a bundler, update your import:

from:

```js
import 'animate.min.css';
```

to

```js
import 'animate.compat.css';
```

Notice that depending on your project's configuration, this might change a bit.

In case of using a CDN, update the link in your HTML:

from:

```html
<head>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css"
  />
</head>
```

to

```html
<head>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.compat.css"
  />
</head>
```

In the case of a new project, it's highly recommended to use the default prefixed version as it'll make sure that you'll hardly have classes conflicting with your project. Besides, in later versions, we might decide to discontinue the `animate.compat.css` file.
