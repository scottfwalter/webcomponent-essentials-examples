const template = document.createElement('template');
template.innerHTML = `
  <style>
    button {
      background: green;
      color: #fff;
      border: 0;
      padding: 12px;
    }
  </style>
  <button part="button-one">one</button>
  <button part="button-two">two</button>
  <button>three</button>
`;

class XComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('x-component', XComponent);
