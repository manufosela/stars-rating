# stars-rating [![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/manufosela/stars-rating)


Polymer web component configurable to vote a rate stars.

## Demo

[stars-rating codepen demo](http://codepen.io/manufosela/pen/QGaKMw)
[stars-rating jsfiddle demo](https://jsfiddle.net/manufosela/2qnz1Lx2/)

```
<h2>Basic stars-rating Demo</h2>
<h3>Demo 1</h3>
<stars-rating numstars="8" rating="6"></stars-rating>

<h3>Demo 2 - stars size 0.5em</h3>
<stars-rating numstars="12" rating="8" star-size="0.5em"></stars-rating>

<h3>Demo 3 - Customized</h3>
<style>
  #emoji {
    --start-unicode: '❤️';
    --star-size: 0.5em;
  }
</style>
<stars-rating id="emoji" numstars="8" rating="6"></stars-rating>

<h3>Demo 6 - Click in star to vote a rating</h3>
<p>Your rating: <span id="yourRating"></span></p>
<stars-rating id="demo6" numstars="5" manual></stars-rating>
<script>
  var el = document.querySelector("#demo6");
  el.addEventListener('rating-changed', function(ev) {
    document.querySelector("#yourRating").innerText = ev.detail;
  })
</script>

<h3>Demo 5 - Click in star to vote a rating with by default value</h3>
<stars-rating numstars="5" rating="3" manual></stars-rating>
```
<!---
```
<custom-element-demo>
  <template>
    <link rel="import" href="stars-rating.html">
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<stars-rating num-stars="8" rating="6"></stars-rating>

<stars-rating num-stars="12" rating="8" star-size="0.5em"></stars-rating>

<p>Click in star to vote a rating</p>
<stars-rating num-stars="5" mode="manual"></stars-rating>

<p>Click in star to change the rating</p>
<stars-rating num-stars="5" rating="3" mode="manual"></stars-rating>
```

## Author

* **Mánu Fosela** - *Javascript Composer* - [manufosela](https://github.com/manufosela)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Acknowledgments

* Cesar Villar @beatbits 
Thank you for his comments and that he is always there to help
* Jorge del Casar @jorgecasar
Thank you for emojis and improvements. You are a true ninja! ;)
