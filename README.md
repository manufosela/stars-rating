# stars-rating [![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/manufosela/stars-rating)


Lit-Elementy web component configurable to vote a rate stars.

## Demo

[stars-rating codepen demo](https://codepen.io/manufosela/pen/ROJKvj)

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

<h3>Demo 4 - Click in star to vote a rating</h3>
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
## Install the Polymer-CLI

First, make sure you have the [Polymer CLI](https://www.npmjs.com/package/polymer-cli) and npm (packaged with [Node.js](https://nodejs.org)) installed. Run `npm install` to install your element's dependencies, then run `polymer serve` to serve your element locally.

## Viewing Your Element

```
$ polymer serve
```

## Running Tests

```
$ polymer test
```

## Build
```
$ npm run build
```

Your application is already set up to be tested via [web-component-tester](https://github.com/Polymer/web-component-tester). Run `polymer test` to run your application's test suite locally.

## Author

* **Mánu Fosela** - *Javascript Composer* - [manufosela](https://github.com/manufosela)

## License

This project is licensed under the Apache 2.0 License - see the [LICENSE](LICENSE) file for details

## Acknowledgments

* Cesar Villar @beatbits 
Thank you for his comments and that he is always there to help
* Jorge del Casar @jorgecasar
Thank you for emojis and improvements. You are a true ninja! ;)
