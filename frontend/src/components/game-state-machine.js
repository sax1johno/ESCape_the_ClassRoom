/* global AFRAME */

import {createMachine, createActor} from 'xstate';

import baseGameLoop from "./base-game-loop.json";

// Example complete game state machine.
const sampleMachine = createMachine({
    /** @xstate-layout N4IgpgJg5mDOIC5RQIYFswGUAuLtgFkUBjACwEsA7MAOllwCdsqoBiAGwHsUJIBtAAwBdRKAAOnWOWadKokAA9EARgCsAZhoCA7ABYATANX6AnAIBsJgBzaTAGhABPFRas0Nxq7uUCf2-boAvoEOqBg4eIQkFNQ0DACulJQsrGIo8bBggiJIIBJSMnK5SgjK5ro05lbVRpa66h7qDs4Ihso02g3m-vrq2mWq2trBoehYuPhEZFS0CUkpYJQQ2fL50uSy8iXGzYj6yvVaymW2ytbHIyBh45FTMbOJyZRQNABGDORgAGYpELK09EiNGuEUm0RmcUeLDeH2+LBWuTWhS2iCsym07nM5T6Z2qql02l2CHK+g6GhM5WO6jMaMuIImUWmsTmTxe70+P2eMI5LAACuwUI5UulMgjxJJ1ptiohdCYMQJ1Ppycp9Poqmcif0BB1bJZygJdKobCY6WNQYz7pD5lz2XCbbDOVB+YLWItlsJVhLkdKELL5Yrlar1fYnIhzMcaCqrOGrAECVZ1EEQlczQy7hCWdDbY7uXanSLIKwGHB4hgxXkvRsiqASn6tAHqSq1WiQy0sdqTPj0boe31o+pTeE0+DmVCuQxOJw0MpWH9YoD8MDU7cRw9rS8J1PlOWkVWUaVbJorCZDQIE1jtKoBK2wwYydTKcpqWflIObmCmWvWXFJ9O6Jx2AAN1+f46AZJchxXT8rW-Tc-1gADgOeHdKylGsVFUCMKU6TtFWsbRjyJLFSW8LstSsI19CsN9zXTUd1x-Ld-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-g9Cvkw4ZttvU72ptJIK75yK-mKwsBiHs9NTzKc6Hi3NBLFXjTk8lzj4HuPaj2rLakFS+gD21ON2Mqb9oGAwwZqec6DYmbvYqLSCL6vUvU8cfEOprzGgMJ0dusW+u4aXetqoFKhUNZpWI1WpIZu9ujKYaMZ2uYmZk7jTG8mUuf28D9OrVKRXHwapYYwnRu4+HMB91bl6l2WzvaagrBgGiJIsJYEGAKehd3qH0HsrnyvLaYxNC7bGrtuGB8KxrYjdXXMGBRY8qoDT0YjjQ0nItgN81+wN3zQ3fRlBu9t0HisQEfMvFR7oYyZ3E45wWrnnnZNI-+-uNObhdWyIbZtJJwCrxaColTPHm1jBQIY-myTiuEt5Up8LkHtOVDSq0EIw9lgapw+Rl91ByCi2q59IDu3NP7sqFdpUZqMiDDxJWot7rWGjPw+k97nzuS1dnkqBDZTMO6nVrEXhEmJxlI9ivFRD35cFO8PcJTCk2JU6DEud0EmK0DR4IOJ10vSWFPQx+ieem-gctZam7naGs3Dx-pj+bwlt9Dbl4pJXvUNe+h18Vp0g7+F0MnZzRP3r8DycLwU8zOf1f6i18JNEiRz2k2tWsLDuXyiVvB136vH3WV98Q0P0kyWi-T8PdphSTsqbJYQELB29H8QNfdBtUsqhSR242pvA9sx5sc61cdsQCdKY7Elt5dJMEEldnJ98ex38F9Lxv8MJWoGdyZmdDBT1b9GMC1sDrd2NwD+dUtqRSR8R59j8v89cBVJdDBpdAdx92c79Sc6Dvs+Zk92lvJrE6YzA9AKIjAzwLA9cJVDdBgUDTcQCvdjY8CKg2Cj9P8iD1ondrw1JXchFN9BCaCsDQC8pn8sZX9WCq8P8T91pQ8sQuhI9Oho8NCEcLZxDME24qgzVM5rxD1fA0RygXDTB894lali9zCYEhDvwNFHRqs1QT5Q0VonxLEFQXCVQA0WVugVQmoust87VkiGE3FVUWFqt9I3AbBlpf5si31ShZR2g8R-BYxoZVQKIztyjXEXF8x1VqsItMRjBFRE5egAgaYMR0R5ZalhkKRejKjOU+ioBnU+cU8fQlREMZExj9gSRFRdAzE2jZFVZ24bBqhKZw1mkNiJD44LlgoLF61GoXNqRbBDRw03Q-sIC8k7xlIzAcUjdZQjjgolIKhmxoZgUp0kxgggA */
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
            console.log("game-state-updated in show-in-state", event.detail.value);
            if (event.detail.matches(this.data.state)) {
                this.el.setAttribute("visible", true);
            } else if (this.data.hideOtherwise && this.el.getAttribute("visible")) {
                this.el.setAttribute("visible", false);
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
