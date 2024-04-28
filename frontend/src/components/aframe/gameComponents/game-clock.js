AFRAME.registerSystem("game-clock", {
    schema: {
      "timeLeft": {type: 'number', default: 1000 * 60 * 60},
      "running": {type: 'boolean', default: false},
      "timeElapsed": {type: 'number', default: 0},
    },
    init: function() {
      var that = this;
      this.timeLeft = this.data.timeLeft;
      this.running = false;
      this.el.addEventListener("game-state-event", function(evt) {
        if (evt.detail === "end") {
          that.running = false;
          that.pause();
        }
      });
      this.clocks = [];
      this.started = false;
      document.querySelector("a-scene").addEventListener("tick", (evt) => {
        this.updateClocks({"time": evt.detail.time, "timeDelta": evt.detail.timeDelta, "timeRemaining": evt.detail.timeRemaining});
      });
    },
    addClock: function(clock) {
      this.clocks.push(clock);
    },
    updateClocks: function({time, timeDelta, timeRemaining}) {
      this.clocks.forEach(function(clock) {
        // this.querySelector.
        clock.tick({time, timeDelta});
      });
    },
    start: function() {
      if (this.started) {
        return;
      }
      var that = this;
      this.timeElapsed = this.timeElapsed || 0;
      this.started = true;
      this.timer = setInterval(function() {
        that.timeElapsed += 1000;
        that.timeLeft -= 1000;
        if (that.timeLeft <= 0) {
          that.running = false;
          that.pause();
          that.el.emit("game-state-event", "end");
          that.started = false;
        }
        document.querySelector("a-scene").emit("tick", {time: new Date(), timeDelta: that.timeElapsed, timeRemaining: that.timeRemaining});
      }, 1000)
    },
    pause: function() {
      clearInterval(this.timer);
    }
  });
AFRAME.registerComponent("game-clock", {
    init: function() {
      // var el = this.el;
      // var timeLeft = 60 * 60;
      var shadowSelector = this.el.getAttribute("data-lit-panel-root");
    //   console.log("Shadow = ", shadowSelector);
      var elementSelector = this.el.getAttribute("data-lit-panel");
    //   console.log("Element = ", elementSelector);
      var litContainer;
      if (shadowSelector) {
        litContainer = document.querySelector(shadowSelector);
      } else {
        litContainer = document.querySelector(elementSelector);
      }
      this.system.addClock(litContainer);
    },
      start: function() {
        this.system.start();
      },
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
