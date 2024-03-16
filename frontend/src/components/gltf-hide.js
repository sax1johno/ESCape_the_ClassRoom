AFRAME.registerComponent('gltf-hide', {
    schema: {
    parts: {
      default: []
    }
  },
    init: function () {
      this.el.addEventListener('model-loaded', () => {
        // console.log(this.el.components["gltf-model"].model.getObjectByName("apartmentDoor001"));
        var model = this.el.components["gltf-model"].model;
        var parts = this.data.parts;
        console.log(parts);
        for (var i = 0; i < parts.length; i++) {
          var part = model.getObjectByName(parts[i]);
          if (part) {
            part.visible = false;
          }
        }
    });
  }
});
