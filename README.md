# Pattern Library

## What is it?

This library serves as a collection of patterns (components, elements etc.) for how I build a website. It's not a framework, it's a set of ideas and patterns that I find myself using often, abstracted into re-useable pieces of HTML and CSS.

### Who's it for?

Me. I built it so I could take away some of the repetition that comes with starting a new project. That said, if you want to use it, you're more than welcome. I'll be publishing the Sass to NPM and Github.

### Install it

```bash
npm install underscores-css --save
```

### Use it

```scss
/* Import The Library */
@use "node_modules/underscores-css/src/lib" with (

    // See node_modules/underscores-css/src/_tokens.scss
    // for all the defaults tokens. Extend them with your
    // project tokens here
    $projectTokens: (
        'color': (
            'pink': deeppink // Best color
        ),
        'font': (
            'base': 'Comic Sans MS' // Best font
        )
    )
);

/* Your project CSS */
@use 'main';

/* Include Utilities last to avoid specicifity issues */
@use 'node_modules/underscores-css/src/utilities';
```

### Mixins

This library comes with some mixins to take care of some common tasks, like generating custom properties from tokens or creating responsive utility classes. To use the available mixins, Sass provides the `@use` directive:

```scss
@use 'node_modules/underscores-css/src/mixins/media-query';

// MQ (Media Query) mixin can take a second argument
// Defaults to 'min-width' but any valid CSS is accepted.
// You can also use breakpoint keywords: sm, md, lg and xl.
@include mq(40em) {
	.my-thing {
		color: var(--color-pink);
	}
}
```

#### Available Mixins

-   `custom-prop($propKey, $key, $value)`: Generates a single custom property
-   `custom-props-from-map($propKey, $map)`: Generates custom properties based on map values
-   `mq($size, $query: "min-width")` Generates a media query
-   `responsive-util($className, $selector, $value)`: Generates a responsive utility class
-   `responsive-util-from-map($className, $selector, $map)`: Generates responsive utility classes based on map values
-   `util($className, $selector, $value)`: Generates a single utility class (not responsive)
-   `util-from-map($className, $selector, $map)`: Generates utility classes based on map values

I will write up proper documentation for these soon. For now if you're curious, I have commented the code (decently well, I think) so it should explain what's happening.

### Functions

The functions available are mostly used internally, but you can use them in your project should you need to.

#### Available Functions

-   `auto-color($color)`: Returns black/white based on the lightness of the passed in colour
-   `non-destructive-map-merge($parent-map, $child-map)`: Merges 2 maps resursively
-   `rem($multiple)`: Returns a REM value based on 4px grid scale, e.g. rem(1) === .25rem

Same goes here with regards to documentation, I will get it written up when I can.
