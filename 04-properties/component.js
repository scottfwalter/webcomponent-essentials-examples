const template = document.createElement('template');
template.innerHTML = `
  <p></p>
`;

class XComponent extends HTMLElement {
  set name(value) {
    this._name = value;
    this.nameElement.innerText = this._name;
  }

  get name() {
    return this._name;
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.nameElement = this.shadowRoot.querySelector('p');
  }
}

customElements.define('x-component', XComponent);
