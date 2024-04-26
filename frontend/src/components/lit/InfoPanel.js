/* global AFRAME, THREE */
import {html, css, LitElement} from 'lit';
import { ComponentBaseElement } from './ComponentBase';

export class InfoPanel extends ComponentBaseElement {
  // Note: All elements are placed at -9999 to avoid the Flash of Unstyled Content (FOUC)
  // prior to AFrame loading.
  static styles = [
    ComponentBaseElement.styles ?? [],
    css`
      .html-container {
        position: absolute;
      }
      .visible {
        display: block;
      }
      .invisible {
        display: none;
      }
      .card-body {
        margin: 0;
      }
    `
    ]
    static properties = {
      ...ComponentBaseElement.properties,
      title: { type: String, default: "Hello world!"},
      message: { type: String, default: "Hello world message!"}
    }

    constructor() {
        super();
        // console.log("Creating Info panel");
    }

    updated(changedProperties) {
      changedProperties.forEach((oldValue, propName) => {
      });
    }

    createRenderRoot() {
      const root = super.createRenderRoot();
      // root.addEventListener(
      //   'click',
      //   (e) => ( root.emit("lit-click", e.target.localName)
      // );
      return root;
    }
  

    render() {
      return html`
      <div id="container_${this.cid}" class="html-container">
            <slot></slot>
            <button @click="${this._clickHandler}" class="btn btn-primary dismiss">Start The Game</button>
      </div>
      `;
      // <button slot="dismiss" @click="${this._clickHandler}" class="btn btn-primary dismiss rounded">Dismiss</button>

    }

    _clickHandler(e) {
      // Click Handler here is delegated to the AFrame click handler, which listens on the entire entity.
      // this.infoVisible = !this.infoVisible;
      // console.log("Inside the lit element click handler, evt is ", e);
      // console.log("Inside lit element, composed path = ", e.composedPath());
      // console.log("Shadow name = ", e.target.localName);
      this.web2vrComponent.aframe.container.emit("lit-click", e);
      // this.shadowRoot.getElementById("info").innerText = "Button Clicked!";      
    }
}

customElements.define('esc-info-panel', InfoPanel);
