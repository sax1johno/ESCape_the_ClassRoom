var LOADING_MODELS = {};
var MODELS = {};
var MODEL_METADATA = {};

AFRAME.registerComponent('gltf-part-custom', {
  schema: {
    buffer: {default: true},
    part: {type: 'string'},
    src: {type: 'asset'},
    keepPosition: { type: 'boolean', default: true }
  },

  update: function () {
    var el = this.el;
    if (!this.data.part && this.data.src) { return; }
    this.getModel(function (modelPart) {
      if (!modelPart) { return; }
      el.setObject3D('mesh', modelPart);
      const originalPosition = MODEL_METADATA[el.getAttribute('gltf-part-custom').part].position;
      const originalRotation = MODEL_METADATA[el.getAttribute('gltf-part-custom').part].rotation;
      console.log(`originalPosition: ${originalPosition.x} ${originalPosition.y} ${originalPosition.z}`);
      console.log(`originalRotation: ${originalRotation.x} ${originalRotation.y} ${originalRotation.z}, ${originalRotation.w}`);
      el.setAttribute('position', `${originalPosition.x} ${originalPosition.y} ${originalPosition.z}`);
      el.setAttribute('rotation', `${THREE.MathUtils.radToDeg(originalRotation.x)} ${THREE.MathUtils.radToDeg(originalRotation.y)} ${THREE.MathUtils.radToDeg(originalRotation.z)}`);
      // el.setAttribute('rotation', `${originalRotation.x} ${originalRotation.y} ${originalRotation.z}`);
      // Use this instead of setAttribute('rotation') - see https://aframe.io/docs/1.5.0/components/rotation.html#updating-rotation
      // el.getObject3D().setRotationFromQuaternion(originalPosition);
    });
  },

  /**
   * Fetch, cache, and select from GLTF.
   *
   * @returns {object} Selected subset of model.
   */
  getModel: function (cb) {
    var self = this;

    // Already parsed, grab it.
    if (MODELS[this.data.src]) {
      cb(this.selectFromModel(MODELS[this.data.src]));
      return;
    }

    // Currently loading, wait for it.
    if (LOADING_MODELS[this.data.src]) {
      return LOADING_MODELS[this.data.src].then(function (model) {
        cb(self.selectFromModel(model));
      });
    }

    // Not yet fetching, fetch it.
    LOADING_MODELS[this.data.src] = new Promise(function (resolve) {
      new THREE.GLTFLoader().load(self.data.src, function (gltfModel) {
        var model = gltfModel.scene || gltfModel.scenes[0];

        MODELS[self.data.src] = model;
        delete LOADING_MODELS[self.data.src];
        cb(self.selectFromModel(model));
        resolve(model);
      }, function () { }, console.error);
    });
  },

  /**
   * Search for the part name and look for a mesh.
   */
  selectFromModel: function (model) {
    var mesh;
    var part;

    part = model.getObjectByName(this.data.part);
    if (!part) {
      console.error('[gltf-part] `' + this.data.part + '` not found in model.');
      return;
    }

    mesh = part.getObjectByProperty('type', 'Mesh').clone(true);
    MODEL_METADATA[this.data.part] = MODEL_METADATA[this.data.part] || {};
    MODEL_METADATA[this.data.part].position = model.getObjectByName(this.data.part).getWorldPosition(new THREE.Vector3(0,0,0));
    MODEL_METADATA[this.data.part].rotation = model.getObjectByName(this.data.part).rotation;
    // MODEL_METADATA[this.data.part].rotation.x += Math.PI;
    console.log("rotation: ", MODEL_METADATA[this.data.part].rotation);
    if (this.data.buffer) {
      mesh.geometry = mesh.geometry.toNonIndexed();
      return mesh;
    }
    mesh.geometry = new THREE.Geometry().fromBufferGeometry(mesh.geometry);
    return mesh;
  }
});