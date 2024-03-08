import { LitElement, html, css } from 'lit';
import { repeat } from 'lit/directives/repeat.js';

/**
 * `stars-rating`
 * Stars Rating
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
export class StarsRating extends LitElement {
  static get properties() {
    return {
      _stars: {
        type: Array,
      },
      numstars: {
        type: Number,
        value: 7,
      },
      rating: {
        type: Number,
        value: 0,
      },
      manual: {
        type: Boolean,
        value: false,
      },
      mode: {
        type: String,
        value: 'auto',
      },
      resetbtn: {
        type: Boolean,
        value: false,
      },
    };
  }

  static get styles() {
    return css`
      :host(:not([hidden])) {
        display: block;
        font-size: 2em;
        --star-size: 1em;
        --star-color: #ffd700;
        --star-unicode: '★';
        --star-reset-unicode: 'ø';
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
        content: var(--star-unicode, '★');
      }
      label {
        color: var(--star-color);
        opacity: 0.3;
      }
      label[data-hightlight] {
        opacity: 1;
      }
      label.resetbtn {
        color: #f00;
        font-size: 0.5em;
        opacity: 1;
      }
      label.resetbtn:before {
        font-size: var(--star-size, 1em);
        display: inline-block;
        content: var(--star-reset-unicode, 'ø');
        opacity: 1;
      }
    `;
  }

  constructor() {
    super();
    this._rate = this._rate.bind(this);
    this._stars = [];
  }

  connectedCallback() {
    if (super.connectedCallback) super.connectedCallback();
    this._updateNumstars();
  }

  disconnectedCallback() {
    if (super.disconnectedCallback) super.disconnectedCallback();
    this.renderRoot
      .querySelector('#rating')
      .removeEventListener('click', this._rate);
  }

  updated(changedProperties) {
    if (changedProperties.get('manual') !== this.manual) {
      this._manualChanged();
    }
    if (changedProperties.get('rating') !== this.rating) {
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
    this.dispatchEvent(
      new CustomEvent('rating-changed', { detail: this.rating })
    );
  }

  reset() {
    this.rating = 0;
  }

  _manualChanged() {
    if (this.manual) {
      this.renderRoot
        .querySelector('#rating')
        .addEventListener('click', this._rate);
    } else {
      this.renderRoot
        .querySelector('#rating')
        .removeEventListener('click', this._rate);
    }
  }

  _rate(ev) {
    if (ev.target.nodeName === 'INPUT') {
      this.rating = parseInt(ev.target.value, 10) + 1;
    }
  }

  render() {
    return html`
      <fieldset id="rating">
        ${this.resetbtn && this.manual
          ? html`<label class="resetbtn"
              ><input
                @click="${this.reset}"
                type="radio"
                id="x"
                name="resetbtn"
                value="-1"
            /></label> `
          : html``}
        ${repeat(
          this._stars,
          item => item,
          (item, index) => html`<label
            for="star${index}"
            ?data-hightlight="${this._isHightlight(index)}"
          >
            <input
              type="radio"
              id="star${index}"
              name="rating"
              .value="${index.toString()}"
            />
          </label>`
        )}
      </fieldset>
    `;
  }
}
