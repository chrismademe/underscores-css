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

```css
/* Import The Library */
@use "node_modules/underscores-css/src/lib";

/* Your project CSS */
@use 'main';

/* Include Utilities last to avoid specicifity issues */
@use 'node_modules/underscores-css/src/utilities';
```
