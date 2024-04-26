/* global AFRAME, THREE */
import {html, css, LitElement} from 'lit';
import { ComponentBaseElement } from './ComponentBase';

export class DoorUnlock extends ComponentBaseElement {
  // Note: All elements are placed at -9999 to avoid the Flash of Unstyled Content (FOUC)
  // prior to AFrame loading.
  static styles = [
    ComponentBaseElement.styles ?? [],
    css`
      .html-container {
        position: absolute;
      }
      .container {  display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
        grid-template-rows: 1fr 2fr 1fr;
        gap: 0px 0px;
        grid-auto-flow: row;
        grid-template-areas:
          "Title Title Title Title Title Title"
          "Number-Pad Number-Pad Number-Pad Number-Pad Number-Pad Number-Pad"
          "Action Action Action Action Action Action";
      }
      
      .Title { grid-area: Title; }
      
      .Number-Pad { grid-area: Number-Pad; }
      
      .Action { grid-area: Action; }
    `
    ]
    static properties = {
      ...ComponentBaseElement.properties,
      title: { type: String, default: "Enter the code to unlock!"},
      code: { type: String, default: "1234"},
      roomId: { type: String, default: "room-1"}      
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
      <div id="container_${this.cid}" class="html-container container">
        <slot @click="${this._clickHandler}"></slot>
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

customElements.define('esc-door-unlock', DoorUnlock);
