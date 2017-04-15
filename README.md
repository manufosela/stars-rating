# cvitaede-starsrating Polymer Web Component [![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/manufosela/cvitaede-starsrating)


Polymer web component configurable to vote a rate stars.

## Demo

[cvitaede-starsrating demo](http://codepen.io/manufosela/pen/QGaKMw)


<!--
```
<custom-element-demo>
  <template>
    <link rel="import" href="cvitaede-starsrating.html">
  </template>
</custom-element-demo>
```
-->
```html
<h3>Basic cvitaede-starsrating Demo</h3>
<cvitaede-starsrating num-stars="8" rating="6"></cvitaede-starsrating>

<cvitaede-starsrating num-stars="12" rating="8" star-size="0.5em"></cvitaede-starsrating>

<p>Click in star to vote a rating</p>
<cvitaede-starsrating num-stars="5" mode="manual"></cvitaede-starsrating>

<p>Click in star to change the rating</p>
<cvitaede-starsrating num-stars="5" rating="3" mode="manual"></cvitaede-starsrating>
```


## Getting Started

Clone the repository. Install all dependencies with `bower install`. Then run `polymer serve` to serve your application locally.

### Prerequisites

First, make sure you have the [Polymer CLI](https://www.npmjs.com/package/polymer-cli) installed.
Second, make sure you have [bower](https://www.npmjs.com/package/bower) installed.

## Running the tests

```
$ polymer test
```

Your application is already set up to be tested via [web-component-tester](https://github.com/Polymer/web-component-tester). Run `polymer test` to run your application's test suite locally.


## Building Your Application

```
$ polymer build
```

This will create a `build/` folder with `bundled/` and `unbundled/` sub-folders
containing a bundled (Vulcanized) and unbundled builds, both run through HTML,
CSS, and JS optimizers.

You can serve the built versions by giving `polymer serve` a folder to serve
from:

```
$ polymer serve build/bundled
```
## Versioning

I use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/manufosela/cvitaede-starsrating/tags). 

## Authors

* **Mánu Fosela** - *Javascript Composer* - [manufosela](https://github.com/manufosela)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Acknowledgments

* Cesar Villar @beatbits 
Thank you for his comments and that he is always there to help
