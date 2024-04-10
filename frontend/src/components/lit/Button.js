/* global AFRAME, THREE */
import {html, css, LitElement} from 'lit';
import { ComponentBaseElement } from './ComponentBase';

export class Button extends ComponentBaseElement {
  // Note: All elements are placed at -9999 to avoid the Flash of Unstyled Content (FOUC)
  // prior to AFrame loading.
  static styles = [
    ComponentBaseElement.styles ?? [],
    css`
      .html-container {
        position: absolute;
        width: 200px;
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
      text: { type: String, default: "Hello world!"},
    }

    constructor() {
        super();
    }

    render() {
      return html`
        <div class="html-container" id="container_${this.id}">
            <button @click="${this._clickHandler}" class="btn btn-primary">${this.text}</button>
        </div>
      `;
    }

    _clickHandler(e) {
      // Click Handler here is delegated to the AFrame click handler, which listens on the entire entity.
      // this.infoVisible = !this.infoVisible;
      // console.log("Inside the click handler, evt is ", e);
      // this.web2vrComponent.aframe.container.emit("click", e);
      // this.shadowRoot.getElementById("info").innerText = "Button Clicked!";      
    }
}

customElements.define('esc-button', Button);
