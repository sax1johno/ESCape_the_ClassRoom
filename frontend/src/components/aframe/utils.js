AFRAME.registerComponent("send-state-event", {
    schema: { type: "string" },
    init: function () {
        this.el.addEventListener("click", (evt) => {
            console.log(this.data);
            this.el.sceneEl.emit("game-state-event", this.data);
        });
    }
  })


    AFRAME.registerComponent('log-on-click', {
        init: function () {
            this.el.addEventListener('click', function (evt) {
                console.log('I was clicked at: ', evt.detail.intersection.point);
            });
        }
    });


      AFRAME.registerComponent("briefing-dismiss", {
        init: function() {
          var el = this.el;
          var cb = function(evt) {
            // console.log(evt.detail);
            if (evt.detail.target.classList.contains("dismiss")) {
            //     console.log("Briefing panel clicked");
            //     // End the briefing.
                el.removeEventListener("lit-click", cb);
                el.emit("game-state-event", "end");
                document.querySelector("esc-watch").web2vrComponent.aframe.container.components["game-clock"].start()
            }
            // el.remove();
          }
          this.el.addEventListener("lit-click", cb);
          // console.log(this.el.querySelector(".dismiss"));
          // this.el.querySelector(".dismiss").addEventListener("click", cb);
        }
      });

      AFRAME.registerComponent("tutorial-example", {
        init: function() {
          var el = this.el;
          var cb = function(evt) {
            console.log(evt.detail);
            // if (evt.detail.target.classList.contains("dismiss")) {
            console.log("Button was clicked!");
            el.removeEventListener("lit-click", cb);
                // el.emit("game-state-event", "end");
          }
          
          this.el.addEventListener("lit-click", cb);
          // console.log(this.el.querySelector(".dismiss"));
          // this.el.querySelector(".dismiss").addEventListener("click", cb);
          // this.el.querySelector(".example_button span").innerText = "Good Job!";
          // this.el.querySelector(".example_button").style.backgroundColor = "green";
        }
      });


      AFRAME.registerComponent("to-main-scene", {
        init: function() {
          var el = this.el;
          var cb = function(evt) {
            // if (evt.detail.target.classList.contains("map")) {
              document.getElementById("fadeStationaryCamera").emit("animate_fadeOut");
              setTimeout(() => {
                document.getElementById("fadeMainCamera").emit("animate_fadeIn");
                document.getElementById('mainScene').setAttribute('visible', 'true')
                document.getElementById('stationaryScene').setAttribute('visible', 'false')
                document.getElementById("camera").setAttribute("camera", "active", "true");
              }, 500);
                // el.removeEventListener("lit-click", cb);
                // el.emit("game-state-event", "end");
            // }
          }
          this.el.addEventListener("lit-click", cb);
          // console.log(this.el.querySelector(".dismiss"));
          // this.el.querySelector(".dismiss").addEventListener("click", cb);
        }
      });
      AFRAME.registerComponent("to-stationary-scene", {
        init: function() {
          var el = this.el;
          var cb = function(evt) {
              document.getElementById("fadeMainCamera").emit("animate_fadeOut");
              document.getElementById("fadeStationaryCamera").emit("animate_fadeIn");
              setTimeout(() => {
                document.getElementById('mainScene').setAttribute('visible', 'false')
                document.getElementById('stationaryScene').setAttribute('visible', 'true')
                document.getElementById("stationaryCamera").setAttribute("camera", "active", "true");
              }, 500);
                // el.removeEventListener("lit-click", cb);
                // el.emit("game-state-event", "end");
          }
          this.el.addEventListener("lit-click", cb);
          // console.log(this.el.querySelector(".dismiss"));
          // this.el.querySelector(".dismiss").addEventListener("click", cb);
        }
      });


      // TODO: Make one of these for each puzzle.
      AFRAME.registerComponent("puzzle1solved", {
        init: function() {
          var el = this.el;
          var cb = function(evt) {
            console.log("Room 1 Puzzle 1 clicked");
            if (evt.detail.target.classList.contains("solve_puzzle_1")) {
              console.log("SHould End puzzle 1");
                el.removeEventListener("lit-click", cb);
                el.emit("game-state-event", "puzzle1.solved");
            }
          }
          this.el.addEventListener("lit-click", cb);
        }
      });

      // Add actions to the state machine for this application.
      AFRAME.registerComponent("custom-game-state-actions", {
        init: function() {
          this.el.sceneEl.systems['game-state'].addActions({
            room1complete: function({context, event}) {
              console.log('Room 1 complete');
              document.querySelector("#firstPuzzleDoor .navmesh-hole").remove();
              document.querySelector("#firstPuzzleDoor").setAttribute("visible", "false");
            },
            room2complete: function({context, event}) {
              console.log('Room 2 complete');
              document.querySelector("#secondPuzzleDoor .navmesh-hole").remove();
              document.querySelector("#secondPuzzleDoor").setAttribute("visible", "false");          
            },
            finalCoomComplete: function({context, event}) {
              console.log('Final Room complete');
              document.querySelector("#exitDoor .navmesh-hole").remove();
              document.querySelector("#exitDoor").setAttribute("visible", "false");          
            }
          });
        }
      });