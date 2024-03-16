/* global AFRAME */

import {createMachine, createActor} from 'xstate';

import baseGameLoop from "./base-game-loop.json";

// Example complete game state machine.
// const sampleMachine = createMachine({
//     /** @xstate-layout N4IgpgJg5mDOIC5RQIYFswGUAuLtgFkUBjACwEsA7MAOllwCdsqoBiAGwHsUJIBtAAwBdRKAAOnWOWadKokAA9EARgCsAZhoCA7ABYATMv0A2bcuPrDAGhABPFQNM1tA5QA5jA-ercCN6gF8Am1QMHDxCEgpqGgYAV0pKFlYxFDjYMEERJBAJKRk5HKUEc10aYzc3bTcATl03ZXcK4xt7BH0vGlVjGtd1L1dPVTcgkPQsXHwiMipaeMTksEoILPk86XJZeWLVfVbEQwMaZWr+410dao9RkFCJiOnouYSkyigaACMGcjAAM2SILJaPQIjQ7uEplFZrEXixPt8-ixVjl1gVtogGtousYLOpLN0BLVlPsEOdlDQah1VDVVC4qsZVLobuDJpEZjF5q93l8fv83vDeSwAArsFC2FJpDLI8SSDZbIqIXQ1LECfHKGk4ip+VQkswCGjqCwCAS6U2G7Q45njCFsp4whb8nmIx0IvlQEVi1hLFbCNaytEKhBKlVqjU43yqHV2RDGIwG6q0-H6JVufRWsKsx7Qzlwp1ugXO92SyCsBhwOIYaW5f2bQqgYrBrSh7rh7UknH6jR6CoW5XKHzp+6Q9nPB3vBicThoZSsQExEH4MHWzNQjmw-kTqfKKuo2vokraGqaWq6VSOCwXXx7aOk3Tkyl+Gl0i2Mwc2rNrsexSfTuicdgAG4AkCdCskuGYPKuo5ct+W5-oBSK+iiNbyvWKiqI0FKmOoujaHhxo6C0N44uSwxUrh1TmLsb4riO9owZuv6wP+QH8mIcQAF4cewYDkgkzGASW7FcTx5ICQB-BITK+R7oGjR3s42gdAySnqOqxLETUNQ0BcujqC4WkWLs2g0ZBdE5huP5iSxcLCdxYD6DQ-EsUJnH2Y54mSdk0lynWigqMoCl4cptLeOpJJuNSzjKKqFwDISR6mcOdoWeOVnwax7x2TxmjOYJEApG5OUZV5foyah-klIF5LBY4oVqTUGltBo2kCDUbj9L0lIaMMSW2tm65pVO+iziBC60CyZkpYNsFoPoO4oX5xSNJUXTaIyHXtbhDRuCSgWWDpbh6cMh6no1IzBLcy5TQNX6MR5NlvKN85gZNyW3QxP4PQhbwLeVS2IL0xjlPUp4Ybsqb9ntp6OYFwxqYenixX1H7QXC90ZbZRW8U5lCeQV2U4-jf2+fuGjA6eamEgldRVNDtRYVeSr1IS9Qo1B9Ho19mNsdjjl5RJBN8yVPredW-1k4aOkaDFvi1LT2h7Qy+r6HofjVCY9ImZdb39Z+n3DTzWXY7leMuULIlgJoxNSeLpOBuT0tU3LWn1IrN79vo2k4oY61nnoGHKOz5kzYx6jPcCr3Xe9+tc1O6gkwGaHtKUFKqkp3hXPodMe3pjmg+oJ11NS7jB9Nd0-tbj1sHOkegrrqOc5Z8dG4nsnJ+4qYUi+RmBX7u257sxynh1Jw1EjOFlx9cdoFXP3G5bfFm-lhWLyLbcVctGGOZR2eBaYR51PT2nj0ztOsxdYwQTHaPN7PRs0IT-PL4Lq-uevtu7pv6FxrvDS6AfdQR8PbKxoKrC4tJUw9lMFPWOd856ZUfibXG+M37FRtmLL+AMSjb2cA0PeADDxAN0HtSw3tjC+0jDoU8jRYG33eLwPMcJGGumFKKcUqR0iZE-otfcyYOpNgwrUYReJDR7TPDVboh42pg0LnQpuDCwBMP5CwwUbwPTim9BvbB-DNCqiEe1dqoiiJtECp0GKwxTTtVpCceRqUaCqMLA4pRrD1HFgKmWWAFZuGYN4YGXRgj3CGI6niExKgaEUjUgjce3QTDyM4RkDx5ZKw8IlnJc45RKjVFpitZoJI6jaT1J1DqFxcTxPcV6ZY2j9xqDKBUKoJ4GhNA8BFcklgvbuH7FUQyqggiXUoJwXg8AcgNygmVe2ycAC0YSECTNUBSLSiylmLLUPIkETAWDjKTpVAwe1HBYg8O1PwqYWa2J1tHPW9Ctnt0qvoZMYD3BKT9oaVMww9qrSeR4Doyo8QnTsTNCg9BrnfwQGpYGhgqiq0jC8kw+T6jlDUj1YhjhzD-K-MoqAwKdFHgeZC55FRYU3l2JofasTGraHxIEc519LkKILPmDFGisX7hwuSCFTzoUEpmT0NwNBXnJhxF1YYl8ro0sbvYjF9LhTuOZYGWMmhYkGGVOtNQdzdQmmOOYE0PgOiUrRTBSVGKACiyxZXJ3ldiZMXs8LgzVcRGKOkcRnlqB0QKNR9Uz2UGayqVQsRdgqEInoAqSSq2Bn4HQV5DT9kZEyalQ5aX2MYtZfK3rloUPmUeDw6b6hNPbFFY0JhzCVCsUdD1d9k2ZVTYDfQ8z-WRSaJSABJJDSaH0oaIxegjxnipVfeN4rQ7pXEljReVaEA-K6PpANDbg32vJAW2MD5lYmjLUNJi1ckFrwFpAUdMVDATotPWw5M62g9G0qFL2oT+hNJXbNCtw77IVu3chNJHc1LkhOJ1YKwxujtnagaGt3RdhtUsEAm9SaH5P1HeOutgbG0zLwm0wk5xlQWC9q4MDg711PxQebHdXhSKTsPUGptN5IraQafiamVRS5xvfBzRNmH54bvfvjHdUS+X-zlp4ZWUY2iRV5RYNQT4SL9m1r2ujIcK5wSHbzS26goMUv3VOo9JG2inn1D0EiDJRM4WMBh6TWHkFbogHhvdMHp2qcQC1MBPs6hqDxO4Htoq+30YHQZpjhMEFPp8ts5aakyiuHMHiMwAaTQkg0Ly1wNJdO7A0AYfTc1R2q0cuyqF5MoF7JxOUfe6pz6qzE85iT5cDZzRFqZjT6pexHnMMmd2pirHYnOMmQkHUKEFdGZJkr31K3PomZVSwKtHlpZhTMxoGhInrQZDSQk28EvdfvaJUdLzcUcvS4S+rrhGv1FMCc8wenaO0WKzPebsmH04ZTb13zipzAreG1y6GvRjiGh0LU9UVI5sQexo+kzl2bnFBcPMyKd4aSpnPCcemvLKjVY6HefsFCPsyYXu5JbFRbv4oyx7bo5JIWhLuf0M8vSDs3Tgauk7SOeLP1Y79kFd5wVDfR+tlQoDTTql8OqZ7hPxOHennfMnzGKdlep9guklriV3LVh1JWSpjg0mzncmtVRY1c+J-Q2afPPMo95alhno3kxss8EAowbVaSEgR4ZuT53Bajtp2jzlGPTFkL5f0Nq1Q9Bj054V7nJO1efYt1Tnzf3EAi6DW7tq48mukOzl0EJ+lDDeDqPt5XN86Vhx3fwroACOolyx3VhwWXYwANyyzfLCWvM-YDyC3LwM6iu9TF2ku0NpctgMJeVrqtS9GzT+PDPFRC6NRz3tezE3APTfrWmInyeGMt0R-z3ibHTQ96z-32MueSgXFIjibbGtaeJ89yrlPldfdneM2xyki++9qBXw9-UcOXuMje34DvM-CbfZ3QS44qYom4UcCaa89XVpQ5qQw6NCGjj5J4Jpub3zP58zz5lCMi97Z5X6Y6xh8qqSgHeDhoe4dZHbwJH4C4n5C41JAKOTwFL6X7g4gJng6TA5s5HhDBP7m4sa4aEHpJHR8pAzh5+BAI5ymLIYy4Qzy4nRK576T6QEIILZWywHn6IEUGmJ642aqiNTfIm4irYE86rriGnbFQEEV7YL9hn6kEX4D4eyO4dTGjKiK7u4MEebIL+52xXYlABpaAdBHQJ5CYtImFR7wzBZx7EK75qHe6OJuhJYmD6hVD+x6RtSb7qCkKYSGDnjJj9Cx7+EXL9pfhBHMIuJqLujsJJZXqoERGdTREPZzrEqOA1p1TLoT4QHpFZFOIZFuJcLl72GB7tDUhnrIb7QALnAaAPbAw4TOyeAwyBQ3oNGKLGqmosHJw1paTYhKhdGb69G5ybZeAuDnhAz0HVGNwJLeYtE05-6AxAJaDHKNRgreDUjyLei7FYI1IXDlDEpAIUKpgUpNQHCezlBeCng9DdAdTj5BBAA */
//     id: 'gameStateMachine',
//     initial: 'starting',
//     states: {
//         starting: {
//             id: 'starting',
//             on: {
//                 "loaded": "running"
//             }
//         },
//         running: {
//             initial: "briefing",
//             on: {
//                 "pause": "paused",
//                 "end": "ended"
//             },
//             states: {
//                 hist: { 
//                     type: 'history',
//                     history: 'deep',                    
//                 },
//                 briefing: {
//                     id: 'briefing',
//                     initial: 'briefingPlay',
//                     states: {
//                         briefingPlay: {
//                             on: {
//                                 "pause": "briefingPaused",
//                                 "end": "briefingEnd"
//                             }
//                         },
//                         briefingPaused: {
//                             on: {
//                                 "resume": "briefingPlay",
//                             }
//                         },
//                         briefingEnd: {
//                             type: "final"
//                         }
//                     },
//                     onDone: {
//                         target: "room1",
//                     }
//                 }, 
//                 room1: {
//                     id: 'room1',
//                     initial: "solving",
//                     onDone: 'room2',
//                     states: {
//                         "solved": {
//                             type: "final"
//                         },
//                         "solving": {
//                             type: 'parallel',
//                             onDone: "solved",
//                             states: {
//                                 puzzle1: {
//                                     initial: 'unsolved',
//                                     states: {
//                                         "unsolved": {
//                                             on: {
//                                                 "puzzle1.solved": "solved"
//                                             }
//                                         },
//                                         "solved": {
//                                             type: "final"
//                                         }
//                                     }
//                                 },
//                                 puzzle2: {
//                                     initial: 'unsolved',
//                                     states: {
//                                         "unsolved": {
//                                             on: {
//                                                 "puzzle2.solved": "solved"
//                                             }
//                                         },
//                                         "solved": {
//                                             type: "final"
//                                         }
//                                     }
//                                 },
//                                 puzzle3: {
//                                     initial: 'unsolved',
//                                     states: {
//                                         "unsolved": {
//                                             on: {
//                                                 "puzzle3.solved": "solved"
//                                             }
//                                         },
//                                         "solved": {
//                                             type: "final"
//                                         }
//                                     }                
//                                 },
//                             },
//                         },
//                     }
//                 },
//                 room2: {
//                     id: 'room2',
//                     initial: "solving",
//                     onDone: 'room3',
//                     states: {
//                         "solved": {
//                             type: "final"
//                         },
//                         "solving": {
//                             type: 'parallel',
//                             onDone: "solved",
//                             states: {
//                                 puzzle1: {
//                                     initial: 'unsolved',
//                                     states: {
//                                         "unsolved": {
//                                             on: {
//                                                 "puzzle1.solved": "solved"
//                                             }
//                                         },
//                                         "solved": {
//                                             type: "final"
//                                         }
//                                     }
//                                 },
//                                 puzzle2: {
//                                     initial: 'unsolved',
//                                     states: {
//                                         "unsolved": {
//                                             on: {
//                                                 "puzzle2.solved": "solved"
//                                             }
//                                         },
//                                         "solved": {
//                                             type: "final"
//                                         }
//                                     }
//                                 },
//                                 puzzle3: {
//                                     initial: 'unsolved',
//                                     states: {
//                                         "unsolved": {
//                                             on: {
//                                                 "puzzle3.solved": "solved"
//                                             }
//                                         },
//                                         "solved": {
//                                             type: "final"
//                                         }
//                                     }                
//                                 },
//                             },
//                         },
//                     }
//                 },
//                 room3: {
//                     id: 'room3',
//                     initial: "solving",
//                     onDone: 'debriefing',
//                     states: {
//                         "solved": {
//                             type: "final"
//                         },
//                         "solving": {
//                             type: 'parallel',
//                             onDone: "solved",
//                             states: {
//                                 puzzle1: {
//                                     initial: 'unsolved',
//                                     states: {
//                                         "unsolved": {
//                                             on: {
//                                                 "puzzle1.solved": "solved"
//                                             }
//                                         },
//                                         "solved": {
//                                             type: "final"
//                                         }
//                                     }
//                                 },
//                                 puzzle2: {
//                                     initial: 'unsolved',
//                                     states: {
//                                         "unsolved": {
//                                             on: {
//                                                 "puzzle2.solved": "solved"
//                                             }
//                                         },
//                                         "solved": {
//                                             type: "final"
//                                         }
//                                     }
//                                 },
//                                 puzzle3: {
//                                     initial: 'unsolved',
//                                     states: {
//                                         "unsolved": {
//                                             on: {
//                                                 "puzzle3.solved": "solved"
//                                             }
//                                         },
//                                         "solved": {
//                                             type: "final"
//                                         }
//                                     }                
//                                 },
//                             },
//                         },
//                     }
//                 },
//                 debriefing: {
//                     id: 'debriefing',
//                     type: 'final',
//                     initial: 'debriefingPlay',
//                     states: {
//                         debriefingPlay: {
//                             on: {
//                                 "pause": "debriefingPaused",
//                                 "end": "debriefingEnd"
//                             }
//                         },
//                         debriefingPaused: {
//                             on: {
//                                 "resume": "debriefingPlay",
//                             }
//                         },
//                         debriefingEnd: {
//                             type: "final"
//                         }
//                     },
//                 },     
//             }
//         },
//         paused: {
//             on: {
//                 "resume": "running.hist",
//                 "end": "ended"
//             }
//         },
//         ended: {
//             type: "final"
//         }
//     }
// });

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
            console.log("Game State Machine Updated", state.value);
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
