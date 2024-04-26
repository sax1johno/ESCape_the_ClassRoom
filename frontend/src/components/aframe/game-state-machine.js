/* global AFRAME */

import {createMachine, createActor} from 'xstate';

import baseGameLoop from "./base-game-loop.json";

// Example complete game state machine.
const sampleMachine = createMachine({
    /** @xstate-layout N4IgpgJg5mDOIC5RQIYFswGUAuLtgFkUBjACwEsA7MAOllwCdsqoBiAGwHsUJIBtAAwBdRKAAOnWOWadKokAA9EARgCsAZhoCA7ABYATOoEBOAat3rtx9QBoQATxUCAbAA4aG1QIOvXy117OAL5BdqgYOHiEJBTUNAwArpSULKxiKAmwYIIiSCASUjJyeUoIys66NG6+yuUC6vqq2r52jgj6Aso02uqqzv26zh3Gqr4hYehYuPhEZFS0icmpYJQQOfIF0uSy8qWq+q2I+soWWrW6At5exmrjIOFTUbOxC0kplFA0AEYM5GAAZqkILJaPQojQHpEZjF5vE3ixvr8ASx1nlNkVdog-NoPANnD0XMZXC5DggKvpuho-AJXLptG51Mo7pDptE5nFFu9Pj8-oCPojeSwAArsFD2NIZLKo8SSLY7EqIXTGHH1fRDIb6PxGbSk7TKATdKz7WnqAxq3TMyZQtkvOFLfk85EOpF8qAisWsFZrYQbWUYhUIJUqhrq-Sa5Ta0nOWo0ZSa8z0kYjVzBUL3K2s56wzkIx2ugVOt2SyCsBhwBIYaX5P3bYqgUpBrQhtVhrU6KPOA0jC7qYnOa6NS0RTMwjnw-kMTicNDKVjAuJg-AQjNPUeve2fSfT5RV9G1zFlKyaVzGQb7ZqjXQWKMGSmWemXTqNVMTYer9nrrnxKczuicdgAG5AiCdCssub7Qh+dpfluv6wP+QEfLuNbyvWKiqDGxj4roGEnle-YdhSuhqPozQ4aoSb6EOjyQbaOYTj+XTwYBCJiAkABe7HsGAXRJMxAElmxnHcUxCH8D6aIoXWigqCcXTaNoxyjL4rh6Lqlw0IY2gYRczgNIY1HWlmY4bt+25-ix-JCVxYAUnxYkQGkHE2RS-HibkMqFPuAbnPJilqCpqm6KSKYGuYvT+P2LjaPUhkjlB9GboxFmIZ81ncZo9mAYJzkZSl7m+l5qEyWUcmGkpgVqQ4iAaMYNDWHUlxWAYGhxe+dHjkl076HOIGLrQLLtdmnVmWg+jIUV0mlLUvgeNpel6noyhGqSJzqJojJ6Iyp4XNobW0cNpmwa5CHAQuYGDQdJkwT+J2WVAE1ylNiCmM4VS6AEaq+BUSquKtOEUsqKk9KoTSdOo+02odN3dSlrG5TxNBZQJjnpYjbneh51aTQeGhvThjJePoZ4pn91VlEqBrEhGOj9l4yhYZDxmfgix1w1ZCN2ZQGNOcJtn5ZjhVPbj6j4xoagCMT-ak6t-ZdPqi16aLxjGJqTNrtBrO3ezaUI5l3MObzNmaBjj3+mhCB4zQBMS1LoxuKt60Gkq+wq6M4b9OrCUjbB6i9ed4KXVD11a9O6hm95FvHBU9X1BY1j6Cr+q2OTa0bctdInr4pFq2mQfM5rDFhzr-ughdK5XSzRdoCbp1IRJnnCz52f1fSnbNGGFTtqnAOt8DvRgxGXsdUdP61-dNBo7xBvZajCOibPEfFdNGEUs0Esq3pWnOP9pg0NT2p050jN5xXwdV11Nc65PnNIzPKNG9xd0o0vz1lKv3R+NcWENJYO+p3LWMOhlpK2cCrXOr4aLn0LpfceqUb5831jzNGcCCqSRxj5D+69v5bz-o7Iw1sRiJ2TB7F86YILQMSjQXgeYEQ0JdMKUU4p0iZGyA3bGTco4fU0PULwoxegq3UNYVaRMPAniwrUaMV5RbD2hnQsAtD+T0MFB8d04ovSvwPMTVwPDehmB0RRawwie6S3qr2I0PRajHFkSHJRCiGF2MUUWVhjkyywArGwrGe5l5HG4U2PhBjBHGLaCcfY3RyQpn1JLUGNjaAsKyK48slZ2HeLfuUSo1Q-B1AaE0Fo5MRhhQsLhKK+JJaxMnsWRyGiUlSQPGoDJKlJGqlyWTNofgaD6RuDSQwaoM4hDTJQTgvB4B5HzmuIW5sSoAFp-5tBmVoR8izFknCoqfChBcwRMBYBMyOJUDCrRcO4GKRg1C9B7CYcpiUdk+PaMTTS-htImFUk0U8rSVAnlxLUBSPRlQ-VWZAoyGsqEUHoNct+jI3rHGeU87SK18lKmthUH5nYLhNEuSNJxYKtHWHudCoksKRikn2GvL6uS1Q0nWui0yTiCyujUVigMpouhQsefil5qh1IGh0BhUJRMIwWjWVAguVCaVOKFJUhlFtoyaD6M+PocYAYpzaDFVQHTpYuxVrSD6VKvyiocVAAAoqsSVJVpW4jldGYm+wlWIGjFyoMbgKjWABjq0OM4TWlFUjiDQCkKJDGVDk0kpE3q+AuL4PoRg1QQ0FYC72o9zIYw9SoIYqrrAnl-qeSW2kowUX3r0FMp4RjLTVK66uC9UpJoQKrVVPrtJYUTj0RopJRaVA6GAwRKZNSuH+eQoVQKfbJX4vDPmyhK0Bo8PeP1DbA3k2jF0AxBaXbFrIWMuNMM4J111iOu+ib0GcJKvqY4E7fX1oDU28mMVnZmHFjoxSEDe2xpHuu8tw6bLlsgJWiMMZi2CL1InPhUYVaxlGM0eo-gLBXlLZfF9HM+b6DHT0Y9db-WNo5RexSsZiLdtUsSI0TIY3xSfW6mDW6XI7ocp+yWXRa1TrPWhtpnZujnBuHGeMLgoOjRIwgsju7G6TOmoyY8fhpE4UGDog45MAh1UGHSIRKKzB7QI0NWx0Hr4oIQzKydp7UOkhwtR4hh6TCg06Bx2CXGUHkdnpRo9NHtMzraOYLlbsc5Blw6Zwdm7uN5V4xw-jKhGSVE6MtQmksKi0iJb2fexpjiqj8D21dRHq7wb3X59oGGWXXGeXCkJ0VrZ0maH2CoID3Owx86kupksDTRiTvibtotSL-S8B0t2MU9AmGIopgFhG5FJZ1pWhoBoMswvZatephpCQqSwlYFdZ9hUDtK55qe-W3C4tZVlwlJiKRCJGG4TVEbXAlbGmp+elmUaVuIpCh5mWCX0ZUJTeqYDNRPkUod5+r6RIC0rSqqLBg9IBDjE0CTISPp1TvU0IRh7GSveO3B5b7ghtsuy+hIY3Rr2bV2wYfDXXlMX1Gm92DZHkYfpS7shs5RVvXZGwAjCmlHl9EGAFvo0Oh0E6fp9knNyYruFldGTsDNsPGFlk1yWWrGiqw6AK7HlcYF45h8bOHFPhtI7KMTCkJhRYmD-aeIeSnpdULZiz0jeUicQHO+ThH63btlCdlULeaptKbXi7N-t8ajuG682AVBpuOdvy51UVWfYlQM5tdbxO1tyj7DMPV+o0apeUPmzXT92iPCDFVoWsBAWDn4jywpXwLgiv0kO17z9m96r5f8Gm9XOoe5Ne22DNr2vOsPu6yp0acDtk+7qYnN65hHvp4asFVOY2FITd8FNk+ce5uu-b6znin7TSVF72npUGeTj-VMXX3bRJ9tF7lx9k38-VYp77yvgfu8uyPepjnXf7up7s746T5N3bYzdtqtYe8-0Plg5+ZDrHzeccy6+x762Tz5XjH7L5YRn6pyyqo6gzo54TWK67x7T7AFcxla1I+RCIUhL6Jyn6Z7U7Mp04VB6ShIzbrIu7roz5G78zoEYIWzlC0j7ymDNSuz+BmBC5cqahXhi5hjeA36LZ6ygGL6p64GQH4EhKq5aDWCdjKhxja6x7-564J5UEe5IIUad6YFH44H97iH+YEL9D6T4jiwvZIFT6UHAHF4aH0FuCqqVa+BbTdKD4hINDSYR4dB4wdCUqmEUHyKYpWElSdxUx6A3BEi4GKSOxxhaBFLEqniXpO7kFrq+H6rUL2IqJuhMKVqGA0j7zBH85hFA53Y3D7wBD0z6hXgMEcbKKFgpFioSr+GlBi51T04qwKTcHRi7w4ggJFLcrEqqCVGpHVFVGuhGre4P43KNG4hKjKh6C-bKDr7zqGJgJdxGB9HeFQTxLE5jFvz7L5JCJ5pdJ0j9D9h6jlJeibG+aP4UxbYMyPhUjEKgxBr8qaTVA9g-wXb9JBBAA */
    id: 'gameStateMachine',
    initial: 'starting',
    states: {
        starting: {
            id: 'starting',
            on: {
                "loaded": "running"
            }
        },
        running: {
            initial: "briefing",
            on: {
                "pause": "paused",
                "end": "ended"
            },
            states: {
                hist: { 
                    type: 'history',
                    history: 'deep',                    
                },
                briefing: {
                    id: 'briefing',
                    initial: 'briefingPlay',
                    states: {
                        briefingPlay: {
                            on: {
                                "pause": "briefingPaused",
                                "end": "briefingEnd"
                            }
                        },
                        briefingPaused: {
                            on: {
                                "resume": "briefingPlay",
                            }
                        },
                        briefingEnd: {
                            type: "final"
                        }
                    },
                    onDone: {
                        target: "room1",
                    }
                }, 
                room1: {
                    id: 'room1',
                    initial: "solving",
                    onDone: 'room2',
                    states: {
                        "solved": {
                            type: "final"
                        },
                        "solving": {
                            type: 'parallel',
                            onDone: "solved",
                            states: {
                                puzzle1: {
                                    initial: 'unsolved',
                                    states: {
                                        "unsolved": {
                                            on: {
                                                "puzzle1.solved": "solved"
                                            }
                                        },
                                        "solved": {
                                            type: "final"
                                        }
                                    }
                                },
                                puzzle2: {
                                    initial: 'unsolved',
                                    states: {
                                        "unsolved": {
                                            on: {
                                                "puzzle2.solved": "solved"
                                            }
                                        },
                                        "solved": {
                                            type: "final"
                                        }
                                    }
                                },
                                puzzle3: {
                                    initial: 'unsolved',
                                    states: {
                                        "unsolved": {
                                            on: {
                                                "puzzle3.solved": "solved"
                                            }
                                        },
                                        "solved": {
                                            type: "final"
                                        }
                                    }                
                                },
                            },
                        },
                    }
                },
                room2: {
                    id: 'room2',
                    initial: "solving",
                    onDone: 'room3',
                    states: {
                        "solved": {
                            type: "final"
                        },
                        "solving": {
                            type: 'parallel',
                            onDone: "solved",
                            states: {
                                puzzle1: {
                                    initial: 'unsolved',
                                    states: {
                                        "unsolved": {
                                            on: {
                                                "puzzle1.solved": "solved"
                                            }
                                        },
                                        "solved": {
                                            type: "final"
                                        }
                                    }
                                },
                                puzzle2: {
                                    initial: 'unsolved',
                                    states: {
                                        "unsolved": {
                                            on: {
                                                "puzzle2.solved": "solved"
                                            }
                                        },
                                        "solved": {
                                            type: "final"
                                        }
                                    }
                                },
                                puzzle3: {
                                    initial: 'unsolved',
                                    states: {
                                        "unsolved": {
                                            on: {
                                                "puzzle3.solved": "solved"
                                            }
                                        },
                                        "solved": {
                                            type: "final"
                                        }
                                    }                
                                },
                            },
                        },
                    }
                },
                room3: {
                    id: 'room3',
                    initial: "solving",
                    onDone: 'debriefing',
                    states: {
                        "solved": {
                            type: "final"
                        },
                        "solving": {
                            type: 'parallel',
                            onDone: "solved",
                            states: {
                                puzzle1: {
                                    initial: 'unsolved',
                                    states: {
                                        "unsolved": {
                                            on: {
                                                "puzzle1.solved": "solved"
                                            }
                                        },
                                        "solved": {
                                            type: "final"
                                        }
                                    }
                                },
                                puzzle2: {
                                    initial: 'unsolved',
                                    states: {
                                        "unsolved": {
                                            on: {
                                                "puzzle2.solved": "solved"
                                            }
                                        },
                                        "solved": {
                                            type: "final"
                                        }
                                    }
                                },
                                puzzle3: {
                                    initial: 'unsolved',
                                    states: {
                                        "unsolved": {
                                            on: {
                                                "puzzle3.solved": "solved"
                                            }
                                        },
                                        "solved": {
                                            type: "final"
                                        }
                                    }                
                                },
                            },
                        },
                    }
                },
                debriefing: {
                    id: 'debriefing',
                    type: 'final',
                    initial: 'debriefingPlay',
                    states: {
                        debriefingPlay: {
                            on: {
                                "pause": "debriefingPaused",
                                "end": "debriefingEnd"
                            }
                        },
                        debriefingPaused: {
                            on: {
                                "resume": "debriefingPlay",
                            }
                        },
                        debriefingEnd: {
                            type: "final"
                        }
                    },
                },     
            }
        },
        paused: {
            on: {
                "resume": "running.hist",
                "end": "ended"
            }
        },
        ended: {
            type: "final"
        }
    }
});

/**
 * A system for managing the global game state machine.
 * If you add any actions that the game states rely on, you must add them using "addAction" to the system
 * before running "start()".
 */
AFRAME.registerSystem("game-state", {
    schema: {
    },
    init: function () {
        this.service = null;
        this.roomElements = [];
        this.puzzleElements = [];
        this.actions = {};
        // this.context = {};
        this.gameStateMachineDefinition = {
        };
        this.manager = null;
    },
    pause: function () {
        // NO OP for now.
    },
    play: function () {
        // NO OP for now.
    },
    addAction: function(actionName, actionFn) {
        // Add an action to the game state machine.
        // this.actions.push({"name": actionName, "fn": actionFn});
        this.actions[actionName] = actionFn;
    },
    addActions: function(actions) {
        // Add multiple actions to the game state machine.
        var keys = Object.keys(actions);
        for (var i = 0 ; i < keys.length; i++) {
            this.addAction(keys[i], actions[keys[i]]);
        }
        // // Add an action to the game state machine.
        // // this.actions.push({"name": actionName, "fn": actionFn});
        // this.gameStateMachine.actions[actionName] = actionFn;
    },
    addRoom: function(roomName, roomElement, actions) {
        // Add a room to the state machine.
        // This effectively adds a state to the game state machine which is defined in order by the index.
        this.roomElements.push({"name": roomName, "el": roomElement, "onDone": actions});
    },
    addPuzzle: function(roomName, puzzleName, puzzleElement, actions) {
        // Add a puzzle to a room in the state machine.
        // This effectively adds a state to the game state machine which is defined in order by the index.
        // this.gameStateMachineDefinition[roomName].states.solving.states[puzzleName] = {
        //     "id": puzzleName,
        //     "initial": "unsolved",
        //     "states": {
        //         "unsolved": {
        //             "on": {
        //                 [`${puzzleName}.solved`]: "solved"
        //             }
        //         },
        //         "solved": {
        //             "type": "final"
        //         }
        //     }
        // }
        this.puzzleElements.push({"room": roomName, "name": puzzleName, "el": puzzleElement, "actions": actions});
    },
    start: function () {
        // Create the game state machine based on the baseGameLoop.
        // if (!this.manager) {
        //     throw new Error("A game state manager must be defined in the scene.");
        // }
        this.gameStateMachine = {...baseGameLoop};
        // Build the game state machine definition from the room elements.
        this._buildRoomElements();
        this._buildPuzzleElements();
        this.gameStateMachine.states.running.states = {...this.gameStateMachine.states.running.states, ...this.gameStateMachineDefinition};
        // Create an actor from the state machine definition.
        this.service = createActor(createMachine(this.gameStateMachine, {
            actions: this.actions
        }));
        // Create subscriptions that allow updates when game state machine updates.
        this.service.subscribe((state) => {
            // console.log("Game State Machine Updated", state.value);
            this.el.emit("game-state-updated", state);
        });
        this.el.addEventListener("game-state-event", (event) => {
            this.service.send({"type": event.detail});
        });
        this.service.start();
    },
    _buildRoomElements: function() {
        // For each room element, add a state to the game state machine.
        console.log("Room Elements", this.roomElements);
        this.gameStateMachine.states.running.states.briefing.onDone = {
            target: this.roomElements[0].name
            // actions: ({context, event}) => {
            //     console.log(`ctx = ${JSON.stringify(context)} and evt = ${JSON.stringify(event)}`);
            //     this.el.emit("game-notify-event", event)
            // }
        };
        
        for (let i = 0; i < this.roomElements.length; i++) {
            this.gameStateMachineDefinition[this.roomElements[i].name] = {
                "id": this.roomElements[i].name,
                "initial": "solving",
                "onDone": {
                    "target": this.roomElements[i+1] ? this.roomElements[i+1].name : "debriefing",
                    "actions": this.roomElements[i].onDone || ""
                },
                "states": {
                    "solved": {
                        "type": "final"
                    },
                    "solving": {
                        "type": "parallel",
                        "onDone": {
                            "target": "solved"
                            // "actions": ({context, event}) => {
                            //     console.log(`ctx = ${JSON.stringify(context)} and evt = ${JSON.stringify(event)}`);                                
                            //     this.el.emit("game-notify-event", event)
                            // }
                        },
                        "states": {
                        }
                    }
                }
            }
        }
    },
    _buildPuzzleElements: function() {
        for (let i = 0; i < this.puzzleElements.length; i++) {
            this.gameStateMachineDefinition[this.puzzleElements[i].room].states.solving.states[this.puzzleElements[i].name] = {
                "initial": "unsolved",
                "states": {
                    "unsolved": {
                        "on": {
                            [`${this.puzzleElements[i].name}.solved`]: "solved"
                        }
                    },
                    "solved": {
                        "type": "final"
                    }
                }
            }
        }
    }
});

AFRAME.registerComponent("remove-on-game-event", {
    schema: {
        state: {type: "string", required: true},
    },
    init: function () {
        this.el.sceneEl.addEventListener("game-notify-event", (event) => {
            if (event.detail.type == this.data.state) {
                this.el.remove();
            }
        });
    }
})

AFRAME.registerComponent("disable-movement-in-states", {
    schema: {
        "states": {type: "array", required: true},
    }, 
    init: function () {
        console.log("States to disable movement in", this.data.states);
        this.el.sceneEl.addEventListener("game-state-updated", (event) => {
            if (this.data.states.includes(event.detail.value)) {
                this.previousState = this.el.getAttribute("motionControls");
                this.el.setAttribute("motionControls", "enabled", false);
            } else {
                if (this.previousState) {
                    this.el.setAttribute("motionControls", this.previousState);
                    this.previousState = null;
                }
            }
        });
    }
});

AFRAME.registerComponent("show-in-state", {
    schema: {
        state: {type: "string", required: true},
        hideOtherwise: {type: "boolean", default: false},
    },
    init: function () {
        this.el.sceneEl.addEventListener("game-state-updated", (event) => {
            console.log(this.el, "game-state-updated in show-in-state", event.detail.value);
            if (event.detail.matches(this.data.state)) {
                this.el.setAttribute("visible", true);
            } else if (this.data.hideOtherwise && this.el.getAttribute("visible")) {
                this.el.setAttribute("visible", false);
            }
        });
    }
});

AFRAME.registerComponent("hide-in-state", {
    schema: {
        state: {type: "string", required: true},
        showOtherwise: {type: "boolean", default: false},
    },
    init: function () {
        this.el.sceneEl.addEventListener("game-state-updated", (event) => {
            if (event.detail.matches(this.data.state) && this.el.getAttribute("visible")) {
                this.el.setAttribute("visible", false);
            } else if (this.data.showOtherwise) {
                this.el.setAttribute("visible", true);
            }
        });
    }
});

/**
 * Hides the given gltf part when a game event occurs.
 */
AFRAME.registerComponent("hide-part-on-game-event", {
    multiple: true,
    schema: {
        state: {type: "string", required: true},
        parts: {
            default: []
        }
    },
    init: function() {
        // var self = this;
        // this.el.addEventListener('model-loaded', () => {
            // console.log(this.el.components["gltf-model"].model.getObjectByName("apartmentDoor001"));
            // var model = this.el.components["gltf-model"].model;
            // var parts = this.data.parts;
            // console.log(parts);
            // for (var i = 0; i < parts.length; i++) {
            //   var part = model.getObjectByName(parts[i]);
            //   if (part) {
            //     // part.visible = false;
            //   }
            // }
        // });

        document.querySelector("a-scene").addEventListener("game-notify-event", (event) => {
            console.log(this.data.parts);
            console.log(this.data.state);
            if (event.detail.type == this.data.state) {
                console.log("Game-notify-event in hide-on-game-event", event.detail);
                var model = this.el.components["gltf-model"].model;
                var parts = this.data.parts;
                for (var i = 0; i < parts.length; i++) {
                    var part = model.getObjectByName(parts[i]);
                    if (part) {
                        part.visible = false;
                    }
                }
            }
        });
    }
});
/**
 * Listens for a games state (specified by the state attribute) and then triggers
 * the animation specified by the action attribute.
 * 
 */
AFRAME.registerComponent("animate-on-game-event", {
    multiple: true,
    schema: {
        state: {type: "string", required: true},
        action: {type: "string", required: true},
        // target: {type: "selector", required: true},
    },
    init: function () {
        console.log("event = ", this.data.state, " and action = ", this.data.action);        
        // Listen on the scene for game state updates.
        document.querySelector("a-scene").addEventListener("game-notify-event", (event) => {
            // console.log("Listening for game state event", event.detail);
            if (event.detail.type == this.data.state) {
                console.log("Animation on game event triggered by event", event.detail);
                this.el.setAttribute(`animation-mixer`, {
                    "clip": this.data.action, 
                    "loop": "once",
                    "clampWhenFinished": "true"
                });
                // this.data.target.emit(this.data.action);
            }
        // });
            console.log(`Animation on game event triggered by event ${JSON.stringify((event.detail))}`);
        // this.el.addEventListener("game-state-updated", (event) => {
        });
    }
});

AFRAME.registerComponent("game-state", {
    schema: {
        name: {type: "string", required: true},
        type: {type: "string", oneOf: ["room", "puzzle"], required: true},
        room: {type: "string", default: ""},
        onDone: {type: "array", default: []},
    },
    init: function () {
        if (this.data.type == "room") {
            // this.system = this.el.sceneEl.systems["game-state-machine"];
            this.system.addRoom(this.data.name, this.el, this.data.onDone);
        };
        if (this.data.type == "puzzle") {
            // this.system = this.el.sceneEl.systems["game-state-machine"];
            this.system.addPuzzle(this.data.room, this.data.name, this.el);
        };
    }
});
