import { render, html } from 'lit-html';
import './header.scss';

class Header extends HTMLElement {
  constructor() {
    super();
    const getPathRegexp = /^\/([^/]*)/;
    const [, pathname] = document.location.pathname.match(getPathRegexp);
    this.currentPath = pathname;
    this._onPathChange = this._onPathChange.bind(this);
  }

  connectedCallback() {
    this._render();
  }

  _onPathChange() {
    this._render();
  }

  _render() {
    const template = html`
      <header>
        <nav class="header">
          <ul class="header__nav">
            <li class="header__nav-item ${this.currentPath === '' ? 'header__nav-item_selected' : ''}">
              <app-link href="/">Home</app-link>
            </li>
            <li class="header__nav-item ${this.currentPath === 'products' ? 'header__nav-item_selected' : ''}">
              <app-link href="/products">Our Products</app-link>
            </li>
            <li class="header__nav-item header__nav-item_logo">
              <app-link href="/">Winded <br> Dandelion</app-link>
            </li>
            <li class="header__nav-item ${this.currentPath === 'shops' ? 'header__nav-item_selected' : ''}">
              <app-link href="/shops">Our Shops</app-link>
            </li>
            <li class="header__nav-item ${this.currentPath === 'about' ? 'header__nav-item_selected' : ''}">
              <app-link href="/about">About us</app-link>
            </li>
          </ul>
        </nav>
      </header>
    `;
    render(template, this);
  }
}

export default function init() {
  customElements.define('app-header', Header);
}
