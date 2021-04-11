class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2021
        Ricardo Armando Machorro Reyes.
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
© 2021 GitHub, Inc.
