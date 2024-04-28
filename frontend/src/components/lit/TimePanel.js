/* global AFRAME, THREE */
import {html, css, LitElement} from 'lit';
import { ComponentBaseElement } from './ComponentBase';


export class TimePanel extends ComponentBaseElement {
  // Note: All elements are placed at -9999 to avoid the Flash of Unstyled Content (FOUC)
  // prior to AFrame loading.
  static styles = [
    ComponentBaseElement.styles ?? [],
    css`  
  
    .time {
      font-size: 28px;
      margin-left: 30%;
      margin-top: 5%;
      height: 32px;
  }
    `
    ]
    static get properties(){
      return {
        ...ComponentBaseElement.properties,
        //   text: { type: String, default: "Hello world!"},
        "minutes": { type: Number, default: 60},
        "seconds": { type: Number, default: 0},
        "hintsLeft": { type: Number, default: 3},
        "tickTime": { type: Number, default: 0},
        "timeDelta": { type: Number, default: 0},
      }
    }

    constructor() {
      super();
      this.minutes = 60;
      this.seconds = 0;
      this.hintsLeft = 3;
      this.tickTime = 0;
      this.timeDelta = 0;
      console.log("Creating Time Panel");
    }
    
    _renderTime = (value) => {
      if (value < 10) { value = "0" + value };  // add zero in front of numbers < 10
      return value;      
    }

    firstUpdated(changedProperties) {
      super.firstUpdated(changedProperties);
      }
  
    // Put the entire watch in the light dom.
    // createRenderRoot() {
      // const root = super.createRenderRoot();
      // root.addEventListener(
      //   'click',
      //   (e) => ( root.emit("lit-click", e.target.localName)
      // );
      // return root;
      // return this;
    // }

    render() {
        return html`
            <div id="container_${this.cid}" class="html-container">
                <slot @click="${this._clickHandler}"></slot>
            </div>
      `;

    }

    tick({time, timeDelta}) {
      // document.querySelector("a-scene").emit("tick", {time: time, timeDelta: timeDelta});
      this.tickTime = this.tickTime + timeDelta;
      // console.log("Tick received", timeDelta);
      if (this.tickTime > 1000) {
        this.tickTime = 0;
        this._updateTime();
      }      
    }
  
    _updateTime() {
      if (this.seconds == 0) {
        if (this.minutes == 0) {
        //   this.web2vrComponent.aframe.container.emit("time-up");
          return;
        }
        this.minutes = this.minutes - 1;
        this.seconds = 59;
        this.requestUpdate("minutes", this.minutes);
        this.requestUpdate("seconds", this.seconds);
      } else {
        this.seconds = this.seconds - 1;
        this.requestUpdate("seconds", this.seconds);
      }
      this.querySelector(".time .minutes .vr-span").innerText = this._renderTime(this.minutes);
      this.querySelector(".time .seconds .vr-span").innerText = this._renderTime(this.seconds);
      // this.requestUpdate();
    }

    _clickHandler(e) {
      // Click Handler here is delegated to the AFrame click handler, which listens on the entire entity.
      // this.infoVisible = !this.infoVisible;
      // console.log("Inside the click handler, evt is ", e);
      this.web2vrComponent.aframe.container.emit("lit-click", e);
      // this.shadowRoot.getElementById("info").innerText = "Button Clicked!";      
    }
}

customElements.define('esc-time-panel', TimePanel);