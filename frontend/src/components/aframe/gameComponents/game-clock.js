AFRAME.registerComponent("game-clock", {
    init: function() {
      // var el = this.el;
      // var timeLeft = 60 * 60;
      var el = this.el;
      var that = this;
      that.running = false;
      var cb = function(evt) {
        // console.log(evt.detail);
        if (evt.detail.target.classList.contains("toggle-start-button")) {
            if (!that.running) {
                that.running = true;
                that.start();
                document.querySelector("esc-watch .toggle-start-button .vr-span").innerText = "PAUSE";
            } else {
                that.running = false;
                that.pause();
                document.querySelector("esc-watch .toggle-start-button .vr-span").innerText = "START";
            }
        //     console.log("Briefing panel clicked");
        //     // End the briefing.
            // el.removeEventListener("lit-click", cb);
            // el.emit("game-state-event", "end");
        }
        // el.remove();
      }
      this.el.addEventListener("lit-click", AFRAME.utils.throttle(cb, 100, this));
    },
    start: function() {
        var that = this;
        this.timeElapsed = this.timeElapsed || 0;
        this.timer = setInterval(function() {
          that.timeElapsed += 1000;
          // console.log("timeElapsed = ", that.timeElapsed);
          document.querySelector("esc-watch").tick({time: new Date(), timeDelta: that.timeElapsed});
        }, 1000);
    },
    pause: function() {
        clearInterval(this.timer);
    }
    // tick: function(time, timeDelta) {
    });
      // console.log("Ticking");
      // this.el.tick(time, timeDelta);
    //   this.tickTime = this.tickTime || 0;
    //   this.tickTime += timeDelta;
    //   if (this.tickTime > 1000) {
    //     console.log("Tick time over 1s");
    //     this.tickTime = 0;
    //     this.el.sceneEl.emit("tick", {time: time, timeDelta: timeDelta});
    //   }
    // }
  // })
