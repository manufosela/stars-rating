import { LitElement, html, css } from './node_modules/lit-element/lit-element.js';
import { repeat } from './node_modules/lit-html/directives/repeat.js';

/**
 * `stars-rating`
 * Stars Rating
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
 class StarsRating extends LitElement {
  static get properties() {
    return {
      _stars: {
        type: Array
      },
      numstars: {
        type: Number,
        value: 7
      },
      rating: {
        type: Number,
        value: 0
      },
      manual: {
        type: Boolean,
        value: false
      },
      mode: {
        type: String,
        value: "auto"
      }
    }
  }

  static get styles() {
    return css`
      :host(:not([hidden])) {
          display: block;
          font-size: 2em;
          --star-size: 1em;
          --star-color: #FFD700;
        }
        fieldset,
        label {
          margin: 0;
          padding: 0;
        }
        fieldset {
          border: none;
        }
        input {
          display: none;
        }
        label:before {
          font-size: var(--star-size, 1em);
          display: inline-block;
          content: var(--start-unicode, "✩");
        }
        label {
          color: var(--star-color);
          opacity: 0.3;
        }
        label[data-hightlight] {
          opacity: 1;
        }
    `;
  }

  constructor() {
    super();
    this._rate = this._rate.bind(this);
  }

  connectedCallback() {
    super.connectedCallback();
    this._updateNumstars();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.renderRoot.querySelector("#rating").removeEventListener('click', this._rate);
  }

  updated(changedProperties, o) {
    if (changedProperties.get('manual') !==this.manual) {
      this._manualChanged();
    }
    if (changedProperties.get('rating') !==  this.rating) {
      this._ratingChange();
    }
  }

  _updateNumstars() {
    this._stars = new Array(this.numstars);
  }

  _isHightlight(index) {
    return index < this.rating;
  }

  _ratingChange() {
    if (this.rating < 0) {
      this.rating = 0;
    } else if (this.rating > this.numstars) {
      this.rating = this.numstars;
    }
    this.dispatchEvent(new CustomEvent('rating-changed', { detail: this.rating }));
  }

  reset() {
    this.rating = 0;
  }

  _manualChanged() {
    if (this.manual) {
      this.renderRoot.querySelector("#rating").addEventListener('click', this._rate);
    } else {
      this.renderRoot.querySelector("#rating").removeEventListener('click', this._rate);
    }
  }

  _rate(ev) {
    if (ev.target.nodeName === 'INPUT') {
      this.rating = parseInt(ev.target.value) + 1;
    }
  }

  render() {
    let index = 1;
    return html`
      <fieldset id="rating">
        ${repeat(
          this._stars,
          item => item,
          (item, i) => html`<label for="star${i}" ?data-hightlight="${this._isHightlight(i)}">
            <input type="radio" id="star${i}" name="rating" value="${i}" />
          </label>`
        )}
      </fieldset>
    `;
  }
}

window.customElements.define('stars-rating', StarsRating);