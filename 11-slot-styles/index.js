const template = document.createElement('template');
template.innerHTML = `
  <style>
    ::slotted(button) {
      background: #2d2d2d;
      color: #fff;
      padding: 12px;
      border: 0;
      cursor: pointer;
    }
  </style>
  <div>
    <slot></slot>
  </div>
`;

class XComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('x-component', XComponent);