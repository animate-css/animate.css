#How to include

A simple way to include a animation from the library, it uses the original naming conventions with camalCasing all animations from the original library is included as mixins.

    .your-element {
      @include ae(bounce);
    }

Remember it needs to have dimentions

To impliment keyframes set them inside: used-animations and only include then once you use. That way you minimize the code in your project.
