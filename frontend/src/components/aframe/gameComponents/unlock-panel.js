AFRAME.registerComponent('unlock-panel', {
    schema: {
      "solvedEvent": {type: 'string', default: ""},
      "unlockCode" : {type: 'string', default: ""},
    },
    init: function () {
        console.log("This.data = ", this.data);
      // Get the original element HTML from the lit element panel.
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
      var el = this.el;
      var that = this;
      var cb = function () {
        var unlockCode = '';
        var unlockInputs = litContainer.querySelectorAll('.entry input');
        unlockInputs.forEach(function (input) {
          unlockCode += input.value;
        });
        console.log("Unlock Code = ", unlockCode.toUpperCase());
        console.log("Data = ", that.data.unlockCode.toUpperCase());
        if (unlockCode.toUpperCase() === that.data.unlockCode.toUpperCase()) {
          litContainer.querySelector('.info span').innerText = 'Code correct! Puzzle Unlocked';
          // document.querySelector('a-scene').emit('unlock-success');
          unlockInputs.forEach(function (input) {
            input.disabled = true;
          });
          litContainer.querySelector('button.unlock span').innerText = 'UNLOCKED';
          litContainer.querySelector('button.unlock').classList.add('disabled');
          litContainer.querySelector('button.unlock').removeEventListener('click', cb);
          el.emit("game-state-event", that.data.solvedEvent);
        } else {
          // litContainer.querySelector('a-scene').emit('unlock-fail');
            litContainer.querySelector('.info span').innerText = 'Incorrect code. Try again.';
        }
        litContainer.web2vrComponent.update();
      }
      litContainer.querySelector('.unlock').addEventListener('click', AFRAME.utils.throttle(cb, 1000));
  }
});