import {html, css, LitElement} from 'lit';
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import animate from "animate.css/animate.min.css";

export class RootStyleElement extends LitElement {

    static styles = [        
        bootstrap,
        animate
    ]
    
    createRenderRoot() {
        return this;
    }
}