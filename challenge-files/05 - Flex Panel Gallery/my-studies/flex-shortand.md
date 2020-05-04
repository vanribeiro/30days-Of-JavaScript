# `flex` property

According to [w3School](https://www.w3schools.com/cssref/css3_pr_flex.asp), [`flex` property](https://www.w3schools.com/cssref/css3_pr_flex.asp) is a shortand version of another 3 properties:

>The flex property is a shorthand property for:
>
>- flex-grow
>- flex-shrink
>- flex-basis
>
>The flex property sets the flexible length on flexible items.
>
>Note: If the element is not a flexible item, the flex property has no effect.

Let's see these properties closer:


## `flex-grow`

According to [w3School](https://www.w3schools.com/cssref/css3_pr_flex-grow.asp):

>The [`flex-grow`](https://www.w3schools.com/cssref/css3_pr_flex-grow.asp) property specifies how much the item will grow relative to the rest of the flexible items inside the same container.

### What does it mean?

If I have three panels:

```html
    <div class="panel-1"></div>
    <div class="panel-2"></div>
    <div class="panel-3"></div>
```

We can set what of them is greater than other relatiely with each other, using [`flex-grow`](https://www.w3schools.com/cssref/css3_pr_flex-grow.asp):

```css
    .panel-1:hover{flex-grow: 1;}
    .panel-2:hover{flex-grow: 2;}
    .panel-3:hover{flex-grow: 3;}
```

See an example [here](index.html)!

## `flex-shrink`

According to [w3School](https://www.w3schools.com/cssref/css3_pr_flex-shrink.asp):

>The [`flex-shrink`](https://www.w3schools.com/cssref/css3_pr_flex-shrink.asp) property specifies how the item will shrink relative to the rest of the flexible items inside the same container.

### What does it mean?

Using the same last HTML panel example, we can set how and what of these panels is shrunk. Here I chose the middle panel:

```css
    .panel-3:hover{flex-shrink: 2;}
```

See an example [here](index.html)!


## `flex-basis`

According to [w3School](https://www.w3schools.com/cssref/css3_pr_flex-basis.asp):

>The [flex-basis](https://www.w3schools.com/cssref/css3_pr_flex-basis.asp) property specifies the initial length of a flexible item.

### What does it mean?

Using the same last HTML panel example, we can set the length of a flex item. Here I chose the middle panel to be initially bigger than others:

```css
.panel-1:hover{flex-basis: 15%;}
.panel-2:hover{flex-basis: 70%;}
.panel-3:hover{flex-basis: 15%;}
```

See an example [here](index.html)!

## Conclusion

I loved to understand better this property! It's really helpful!

That's all guys! 😃

---

written by [@vanribeiro](https://github.com/vanribeiro).