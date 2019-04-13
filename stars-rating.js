import { LitElement, html } from '/node_modules/@polymer/lit-element/lit-element.js';
import {afterNextRender, beforeNextRender} from '/node_modules/@polymer/polymer/lib/utils/render-status.js';

/**
 * `stars-rating`
 * Circle Alone
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
 class StarsRating extends LitElement {
  static get properties() {
    return {
      _stars: {
        type: Array,
        computed: '_updateNumStars(numStars)'
      },
      numStars: {
        type: Number,
        value: 7
      },
      rating: {
        type: Number,
        notify: true,
        value: 0,
        observer: '_ratingChange'
      },
      manual: {
        type: Boolean,
        value: false,
        observer: '_manualChanged'
      },
      mode: {
        type: String,
        value: "auto"
      }
    }
  }

  constructor() {
    super();
    this._rate = this._rate.bind(this);
  }

  connectedCallback() {
    super.connectedCallback();
    // Backward compatibility
    this.manual = this.manual || this.mode === "manual";
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.$.rating.removeEventListener('click', this._rate);
  }

  updated(changedProperties) {
    
  }

  _isHightlight(index) {
    return index < this.rating;
  }

  _ratingChange(rating) {
    if (this.rating < rating) {
      this.rating = 0;
    } else if (rating > this.numStars) {
      this.rating = this.numStars;
    }
  }

  _updateNumStars(numStars) {
    return new Array(numStars);
  }

  reset() {
    this.rating = 0;
  }

  _manualChanged(manual) {
    if (this.manual) {
      this.$.rating.addEventListener('click', this._rate);
    } else {
      this.$.rating.removeEventListener('click', this._rate);
    }
  }

  _rate(ev) {
    if (ev.target.nodeName === 'INPUT') {
      this.rating = parseInt(ev.target.value) + 1;
    }
  }

  render() {
    return html`
    <style>
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
          content: var(--start-unicode, "\2605");
        }

        label {
          color: var(--star-color);
          opacity: 0.3;
        }

        label[hightlight] {
          opacity: 1;
        }
    </style>
    <fieldset id="rating">
      ${this._stars.map((item,index) => html`
        <label for="star${index}" hightlight="{$this._isHightlight(index)}">
          <input type="radio" id="star${index}" name="rating" value="${index}"/>
        </label>
      `)}
    </fieldset>
    `;
  }
}

window.customElements.define('stars-rating', StarsRating);