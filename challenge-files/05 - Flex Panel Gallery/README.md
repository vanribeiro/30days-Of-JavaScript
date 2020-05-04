# Day 05 - Flex Panel Image Gallery ✅

**Date:** 05/03/2020

I loved this Painel! 😍 It's beautiful! 💪

![Flex Panel Images Gallery](../../images/challenges/05-flex-panel-image-gallery.jpg)

## About CSS

I researched, learned and understood nice things about `flex` property doing this exercise! If you wanna know more and see [some code example](my-studies/flex-examples.html) about this [you can read my studies and notes about it](my-studies/flex-shortand.md).

## About JavaScript

Here, Wes used the JavaScript to show the words were hidden. He used the `toggle()` method, which I had never used before.

Accordding to [MDN](https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/toggle):

> The [`toggle()`](https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/toggle) method of the [DOMTokenList](https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList) interface removes a given token from the list and returns `false`. If token doesn't exist it's added and the function returns `true`.

Here we have the function coded by Wes to show the hidden words when we click on image:

```javascript
    function toggleOpen() {
        this.classList.toggle('open');
    }
```
According with we read before about `toggle()` method, this function verifies if the class `open` exists or not in the `classList` of that element, which is being verified:
- If the class `open` exists on the `classList`, this class is removed from the list and returns `false`. 
- If the class `open` NOT exists on the `classList`, the `open` class is added in the list and returns `true`.

## Conclusion

Learn about it is really funny! 😊💖

You can see final result [here](https://vanribeiro-30daysofjavascript.netlify.app/challenge-files/05%20-%20flex%20panel%20gallery/). 😃😉😍

That's all folks! 😃

Thanks [WesBos](https://github.com/wesbos) to share this with us! 😊💖

---

written by [@vanribeiro](https://github.com/vanribeiro).