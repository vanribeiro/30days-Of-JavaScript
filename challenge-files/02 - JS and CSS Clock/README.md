# Day 02 - JS and CSS Clock - WesBos Challenge ✅

**Date:** 04/28/2020

I loved this clock! 😍

![CSS Clock](../../images/challenges/02-js-and-css-clock.png)

## About CSS

I learned two new things here:

### The `transform-origin` property:

According to [w3School](https://www.w3schools.com/cssref/css3_pr_transform-origin.asp), this property:

> The transform-origin property allows you to change the position of transformed elements.

In this JS and Clock CSS, Wes used:

```css
    transform-origin: 100%;
```
This puts the bottom `.hand` extremity on the right side, which gives us the impression that the clock hand is centered.

### The `cubic-bezier()` function:

According to [w3School](https://www.w3schools.com/cssref/func_cubic-bezier.asp) again, this function:

>The cubic-bezier() function defines a Cubic Bezier curve.

I'm not not a mathmatician then I'm not sure to write about it, but basically we pass coordenates as arguments: 

```css
    transition-timing-function: cubic-bezier(0.1, 2.7, 0.58, 1);
```

- x1 = 0.1
- y1 = 2.7 
- x2 = 0.58 
- y2 = 1

The x1 and x2 determine where the curve start and where it finishes. And must be have the [0, 1] range.

On my poor math understanding, the y1 and y2 are control this curve. According the [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function), if we set y1 and y2 with more than [0, 1] range value may generate _bouncing effects_:

> Cubic Bézier curves with the P1(y1) or P2(y2) ordinate outside the [0, 1] range may generate bouncing effects.
We have some rules to right here:

This makes the analogical tic-tac clock effects.

## About JavaScript

I learned about how to manipulate dates! 

Using the object `Date()`, the JavaScript give to us many functions to manupulate the time and dates:

```javascript
    const now = new Date();
```

Here, we use the `getSeconds()`, `getMinutes()` and `getHours()`:

```javascript
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hour = now.getHours();
```

But I want to explore other function like `getUTCHours()` to create an international clock, for example.

And I learned a new way to set values to CSS using template strings:

```javascript
hourHand.style.transform = `rotate(${hourDegrees}deg)`;
```

That's all folks! 😃

Thanks [WesBos](https://github.com/wesbos) to share this with us! 😊💖

---

written by [@vanribeiro](https://github.com/vanribeiro).