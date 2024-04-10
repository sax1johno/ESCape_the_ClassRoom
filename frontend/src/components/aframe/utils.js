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
