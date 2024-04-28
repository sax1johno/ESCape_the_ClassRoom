/* global AFRAME */

import {createMachine, createActor} from 'xstate';

import baseGameLoop from "./base-game-loop.json";

// Example complete game state machine.
const sampleMachine = createMachine({
    /** @xstate-layout N4IgpgJg5mDOIC5RQIYFswGUAuLtgFkUBjACwEsA7MAOllwCdsqoBiAGwHsUJIBtAAwBdRKAAOnWOWadKokAA9EARgCsAZhoCA7ABYATMv26AnADZduiwBoQATxUCzADhobVynWeVrn+5wC+AbaoGDh4hCQU1DQMAK6UlCysYihxsGCCIkggElIycjlKCMoWNC7OzgLOJpX6Gurqtg4I+gLKNNrqqmba2hba-qVBIehYuPhEZFS08YnJYJQQWfJ50uSy8sWq+s2Ihrqa7cp+h4caJiMgoeMRU9GzCUmUUDQARgzkYABmyRCytHoERoN3CkyiM1iTxY70+PxYKxyawKW0QzmU2jcZgs7WqpgE6jMewQFn0nQuAlMZn02lOV1BE0i0xic2erw+X1+L1hnJYAAV2Cg7Ck0hlEeJJOtNkVEKZMQT6jTqn1tATVMTtJ5OtpzAJ9GZ1FUTCZ1PSxmCmQ8ofNuRz4ba4VyoAKhaxFsthKtJSiZQg5Vp1IrVc4VWrid4OkZnKpVMbtKoBCY9Wawoz7pDWTC7U6efbnaLIKwGHA4hhxblvRtCqBiv6FTtg6HuuGzAIaCZVLpqsp1E5Y1YU7dwczHjbXgxOJw0MpWP8YkD8CDzWmISzodyJ1PlOXkVXUSUdZoaocO+oTaptOGDOTDWYTIYuj4zIOLem12PYpPp3ROOwAG5-ACdCMkuqZ3Kuo5sp+W4-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-o-hOw6qc0Nch4D9B9ppGSFloK2VbN6ETSKNRAzGijo51D0XrE6yNhuvUbZvDmGNKYaShpO5tjPMDTsR9cVqC091QufbAyqSxcl8FgSfCdm1DoVUupejeBa2NNz972suExVc7ruLevGI2nGJwKlLAxjbUPKlnbxsrqnjAgzbl2OylKDNkFNyeu73bIFYi5xQm6Ty6AmRo0WN63nh5wzpzVXRkImpT69RBsAweYMeoX11W9CZlFx73zCuPVAxxOLH2AXTaS+d+b-DqSdEhr0Skn1TDSzGy9u9jl9tFcR-uPjp3WUXdwd-C581zBvMbgTibxODt1yOwgYM5rPoGjUrUWoX8ExaHC59HwCyL0PekdD9mu39ZTdcCjnFeKVDGDJImBaKbcI8PuxSq96Hz6E7h2AfTpPDtGeO0CrrqPlclEdtiRogxssM2Z7LvT72zefeqOUe8X7XZUl61lomtt1Za-vISMbMmydSXYWFXo79jQJio6lzElhaQmlUzliP7v2fm5KDZ9sAGU0Kx0GoZVRihd1ZBY1wi7z2369HuPWHG69qE07HH9WLUk+4OqQNvoiZWwjYl7r5zMXRqN5SrpwST7LCx5uQn9oPQAZ6iWxDVsOP1tZ9d4JEnWUn33ln-Hzvi-cH4iuyaG73Q7ub506u7PXj9ylD8ErPwhgdB7TPJpQH37gdYMJGDk+kOUuS6VcN+XM0+0cbec+R+kyLQVGa8WOqolguKFW1+sOk+As2GEAe+giVgUBiex+sBtONIFw2IkMTOgBW2Lq4+r28Od+rCSSuK1MSYkUYMmk56l4NOQueo32r84uqBE+0m4BB+He+BMBKu146uZK1IwKOudeLm4C1BROeUmB2Bwh8+XesBduBojMTuBI-BNBxudBpaVSLgCaJWLgwYCYLgFmKggefGZWoeakshm2i6H4tiTo8WR81MegryvYhIfgDsaCCkHYlgYMOwJw9G7h1CDi8izo9C8Wya3hGWBoBI1hlMHQlQF4OadQ6steLh160RoqURTiTCWBUeEcO036PQwmYiCs30lMmIGI6qPYWCuOkRMRdixRUARqZRHu3isYVRZKBIpM1RugS+GRDMZ4BoasuWw++W0SpRfamykKZ4WaGmxEDUzBEOku5c7oOGfRD+14mxKkj4rYVGYxcsck0c+omCP0yGmmQQAQQAA */
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
