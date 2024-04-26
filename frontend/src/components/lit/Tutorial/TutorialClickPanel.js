/* global AFRAME, THREE */
import {html, css, LitElement} from 'lit';
import { ComponentBaseElement } from '../ComponentBase';

export class TutorialClickPanel extends ComponentBaseElement {
  // prior to AFrame loading.
  static styles = [
    ComponentBaseElement.styles ?? [],
    css`
      .html-container {
        position: absolute;
        width: 300px;
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
    }

    constructor() {
        super();
    }

    async firstUpdated(changedProperties) {
      // Give the browser a chance to paint
      await new Promise((r) => setTimeout(r, 0));
      this.addEventListener('click', this._clickHandler);      
    }

    render() {
      return html`
        <div id="container_${this.cid}" class="html-container" @click="${this._clickHandler}">
            <slot></slot>
            <div class="card card-body" style="background-color: white; display: none;" id="info"></div>
        </div>
      `;
    }

    _clickHandler(e) {
      console.log("Inside lit element, composed path = ", e.composedPath());
      // console.log(this.shadowRoot.querySelector("slot").assignedElements({ flatten: true }));
      this.web2vrComponent.aframe.container.emit("lit-click", e);
      this.querySelector(".example_button span").innerText = "Good Job!";
      this.querySelector(".example_button").style.backgroundColor = "green";
      // e.composedPath()[0].value = "Good Job!";
      // e.composedPath()[0].style.backgroundColor = "green";
      // this.shadowRoot.getElementById("info").style.display = "block";
      // console.log(this.shadowRoot.querySelector('.example_button'));
      // this.shadowRoot.querySelector(".example_button").style.backgroundColor = "green";
    }
}

customElements.define('esc-tutorial-click-panel', TutorialClickPanel);
