/* global AFRAME, THREE */
import {html, css, LitElement} from 'lit';
import { ComponentBaseElement } from './ComponentBase';

export class Watch extends ComponentBaseElement {
  // Note: All elements are placed at -9999 to avoid the Flash of Unstyled Content (FOUC)
  // prior to AFrame loading.
  static styles = [
    ComponentBaseElement.styles ?? [],
    css`
    .watch {
      position: absolute;
      width: 200px;
      height: 200px;
      background-image: url(/images/backgroundWatch.png);
      background-size: cover;
      color: white;
      z-index: 0.5;
  }
  
  .time_header {
      font-size: 20px;
      margin-left: 15%;
      margin-top: 20%;
      height: 18px;
  }
  
  .time {
      font-size: 28px;
      margin-left: 30%;
      margin-top: 5%;
      height: 32px;
  }

  .hintsLeftHeader {
    font-size: 20px;
    margin-left: 25%;
    margin-top: 3%;
    height: 18px;
}
.hintsLeft {
    font-size: 20px;
    margin-left: 50%;
    margin-top: 5%;
    height: 30px;
}

  .hint-button {
    font-size: 30px;
    margin-left: 32%;
    margin-top: 5%;
    height: 38px;
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
      console.log("Creating Watch");
    }

    _checkTime(i) {
      if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
      return i;
    }
    
    firstUpdated(changedProperties) {
      super.firstUpdated(changedProperties);
      console.log("Watch Connected");
      // this.shadowRoot.querySelector(".hint-button").addEventListener("click", this._clickHandler.bind(this));
      // document.querySelector("a-scene").addEventListener("tick", this.tick.bind(this));
      // this.addEventListener("tick", this.tick.bind(this));
      // this.web2vrComponent.aframe.container.addEventListener("tick", this.tick.bind(this));
      // this.web2vrComponent.aframe.container.addEventListener("tick", (e) => { console.log(e) });
    }

    updated(changedProperties) {
      super.updated(changedProperties);
      changedProperties.forEach((oldValue, propName) => {
        console.log(`${propName} changed. oldValue: ${oldValue}`);
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
        <div class="watch" id="container_${this.id}">
            <div class="watch">
               <div class="time_header">Time Remaining</div>
               <div class="time"><span>${this._checkTime(this.minutes)}:${this._checkTime(this.seconds)}</span></div>
               <div class="hintsLeftHeader">Hints Left: <span class="hintsLeftcount">${this.hintsLeft}</span></div>         
               <slot @click="${this._clickHandler}"></slot>
                <button @click="${this._clickHandler}" class="hint-button control btn btn-secondary">HINT</button>
            </div>
        </div>
      `;

    }

    tick({time, timeDelta}) {
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
          this.web2vrComponent.aframe.container.emit("time-up");
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

customElements.define('esc-watch', Watch);