/* global AFRAME, THREE */
import * as Web2VR from "web2vr";
import {html, css, LitElement} from 'lit';
import { RootStyleElement } from './rootstyles.js';


export const ComponentBaseMixin = (superClass) => {
    class ComponentBaseElement extends superClass {
        static styles = [
          RootStyleElement.styles,
          ]

        get cid() {
            if (!this._id) {
                const array = new Uint32Array(1);
                window.crypto.getRandomValues(array);  
                this._id = array[0];
                return this._id;
            } else {
                return this._id;
            }
        }
          
          static properties = {
            settings: { type: String, default: undefined },
            // position: { type: Object, default: {x: 0, y: 0, z: 0}},
            web2vrComponent: { type: Object, default: null},
            components: { type: String , default: ""},
            id: { type: String, default: ""}
          }
      
          constructor() {
              super();
          }
      
          connectedCallback() {
            super.connectedCallback();
        
            // Should updateComplete resolve the after first time render ran?
            var that = this;
            this.updateComplete.then(async () => {
              console.log("Update Complete callback has fired");
              await new Promise((r) => setTimeout(r, 100));
              var settings = that.settings ? JSON.parse(that.settings) : {};
              // Disable border because there are race condition issues between border and the LitElement.
              // settings.border = false;
              // console.log("Settings = ", settings)
              if (that.shadowRoot) {
                that.web2vrComponent = new Web2VR(that.shadowRoot.getElementById(`container_${that.cid}`), settings);
              } else {
                that.web2vrComponent = new Web2VR(that.querySelector(`#container_${that.cid}`), settings);
              }
              await that.web2vrComponent.start();
              
              var components = that.components ? JSON.parse(that.components) : {};
              // console.log("Components = ", components);
              for (var component in components) {
                that.web2vrComponent.aframe.container.setAttribute(component, components[component]);
              }

              if (that.shadowRoot) {
                that.web2vrComponent.aframe.container.setAttribute("data-lit-panel-root", `#${that.id}`);
                that.web2vrComponent.aframe.container.setAttribute("data-lit-panel", `#container_${that.cid}`);
              } else {
                that.web2vrComponent.aframe.container.setAttribute("data-lit-panel", `#container_${that.cid}`);
              }

            });

          }

          async firstUpdated(changedProperties) {
            // Give the browser a chance to paint
            if (this.shadowRoot) {
              this.shadowRoot.addEventListener( 'slotchange', this._slotChanged );
            } else {
              this.addEventListener('slotchange', this._slotChanged);
            }
          }

          updated(changedProperties) {
            super.updated(changedProperties);
            try {
              this.web2vrComponent?.update();              
            } catch(e) {
              // Swallow the error since errors from update are transient
            }
            
          }

          baseRender(template) {
            return html`
                <div class="html-container" id="container_${this.cid}">
                  ${template}
                </div>
            `;            
          }

          _slotChanged() {
            this.web2vrComponent?.update();
          }
      }

      return ComponentBaseElement;
} 

export const ComponentBaseElement = ComponentBaseMixin(LitElement)

// Cannot use this element directly - must use it as a base class.
