import {
  OrthoPerspectiveCamera,
  Components,
  PostproductionRenderer,
  SimpleScene,
  SimpleRaycaster,
  FragmentManager,
  FragmentHighlighter,
  SimpleGrid,
  FragmentCacher,
  IfcPropertiesProcessor,
  FragmentHighlighterConfig,
} from "openbim-components";
import { Postproduction } from "openbim-components/src/navigation/PostproductionRenderer/src/postproduction";
import { Color, Matrix4, MeshBasicMaterial } from "three";
import { FragmentsGroup, IfcProperties } from "bim-fragment";
// import { ExtendedClassifier } from "./quick-dirty-fixes/extended-classifier";

export class SimpleSetupSettings {
  constructor() {
    this.divId = "app";
    this.models = [];
    this.showGrid = false;
    this.clickToZoom = false; // Zoom to object when clicked?
    this.centerAll = false; // If false, all models will be placed according to first model's transformation. If true, all models will simply be centered
  }
}

export class SimpleSceneSetup {
  constructor(settings) {
    this._settings = settings;
    this._viewer = new Components();
  }

  async init() {
    this._initScene();
    this._initRenderer();
    this._initCam();
    this._initViewer();
    this._initHighlighter();
    if (this._settings.showGrid) this._addGrid();
    await this.loadModels(this._settings.models);
    if (this._settings.clickToZoom) this._addClickToZoom();
    return this._viewer;
  }

  getViewerContainer() {
    if (!this._viewerContainer) throw new Error("Viewer container not set!");
    return this._viewerContainer;
  }

  get components() {
    return this._viewer;
  }

  async loadModels(models, callback) {
    let counter = 0;
    for (const model of models) {
      if (!model.group) {
        model.group = await this.loadLocalModel(
          model.fragmentsFilePath,
          model.propertiesFilePath,
          model.cache,
          model.hidden,
          model.classifications
        );
      }
      counter++;
      if (callback) callback(counter, model.group);
    }
  }

  async loadLocalModel(fragPath, propsPath, useCache = false, hideImmediately = false, classifications) {
    const fragFile = await fetch(fragPath);
    const buffer = await fragFile.arrayBuffer();
    if (propsPath) {
      const propsFile = await fetch(propsPath);
      const props = await propsFile.json();
      return this.loadModel(
        buffer,
        useCache,
        fragPath,
        hideImmediately,
        props,
        classifications
      );
    }
    return this.loadModel(buffer, useCache, fragPath, hideImmediately);
  }

  async loadModel(buffer, useCache, cacheId, hideImmediately = false, properties, classifications) {
    let fragments = this._viewer.tools.get(FragmentManager);
    let propsProcessor = this._viewer.tools.get(IfcPropertiesProcessor);
    const cacher = this._viewer.tools.get(FragmentCacher);
    let modelExistsInCache = false;
    if (useCache) {
      cacher.enabled = true;
      if (cacher.ids.includes(`${cacheId}-fragments`)) modelExistsInCache = true;
    }

    let fragmentGroup;
    if (!modelExistsInCache) {
      console.log("Loading model from server...");
      const uInt8Array = new Uint8Array(buffer);
      fragmentGroup = await fragments.load(uInt8Array);
      if (hideImmediately) fragmentGroup.visible = false;
      if (useCache) {
        await cacher.saveFragmentGroup(fragmentGroup, cacheId);
        console.log(`Cached model as ${cacheId}-fragments`);
      }
    } else {
      fragmentGroup = await cacher.getFragmentGroup(cacheId);
      if (hideImmediately) fragmentGroup.visible = false;
      console.log("Loaded model from cache");
    }

    if (!this._coordinationMatrix) {
      this._coordinationMatrix = fragmentGroup.coordinationMatrix;
    } else {
      if (!this._settings.centerAll) {
        fragmentGroup.applyMatrix4(fragmentGroup.coordinationMatrix.invert());
        fragmentGroup.applyMatrix4(this._coordinationMatrix);
        fragmentGroup.items.forEach(fragment => fragment.mesh.updateMatrixWorld(true));
      }
      const highlighter = this._viewer.tools.get(FragmentHighlighter);
      highlighter.update();
    }

    if (properties) fragmentGroup.properties = properties;
    propsProcessor.process(fragmentGroup);

    // if (classifications) {
    //   // const classifier = this._viewer.tools.get(ExtendedClassifier);
    //   classifier.byModel(cacheId, fragmentGroup);
    //   classifier.byEntity(fragmentGroup);
    //   classifier.byGlobalId(fragmentGroup);
    //   Object.keys(classifications).forEach(className => {
    //     classifier.byModelClass(fragmentGroup, className, classifications[className]);
    //   });
    // }

    if (this._highlighter) this._highlighter.update();
    return fragmentGroup;
  }

  _initScene() {
    const sceneComponent = new SimpleScene(this._viewer);
    sceneComponent.setup();
    this._viewer.scene = sceneComponent;
  }

  _initRenderer() {
    this._viewerContainer = document.getElementById(this._settings.divId);
    const rendererComponent = new PostproductionRenderer(this._viewer, this._viewerContainer);
    this._viewer.renderer = rendererComponent;
    this._postproduction = rendererComponent.postproduction;
  }

  _initCam(nearPlane = 0.1) {
    this._camera = new OrthoPerspectiveCamera(this._viewer);
    this._viewer.camera = this._camera;
    const c = this._camera.get();
    c.near = nearPlane;
    c.updateProjectionMatrix();
  }

  _initViewer() {
    this._viewer.init();
    if (this._postproduction) this._postproduction.enabled = true;
  }

  _initHighlighter() {
    const raycasterComponent = new SimpleRaycaster(this._viewer);
    this._viewer.raycaster = raycasterComponent;
    this._highlighter = this._viewer.tools.get(FragmentHighlighter);
    this._highlighter.outlineEnabled = true;
    this._highlighter.outlineMaterial.color.set(0xf0ff7a);
    const hlConfig = {
      selectName: "select",
      hoverName: "hover",
      selectionMaterial: new MeshBasicMaterial({
        color: "#9CC6CA",
        depthTest: false,
        opacity: 0.9,
        transparent: true,
      }),
      hoverMaterial: new MeshBasicMaterial({
        color: "#BCF124",
        depthTest: false,
        opacity: 0.3,
        transparent: true,
      }),
    };
    this._highlighter.setup(hlConfig);
  }

  _addGrid() {
    const grid = new SimpleGrid(this._viewer, new Color(0x666666));
    if (this._postproduction) this._postproduction.customEffects.excludedMeshes.push(grid.get());
  }

  _addClickToZoom() {
    const highlighter = this._viewer.tools.get(FragmentHighlighter);
    highlighter.zoomToSelection = true;
  }
}
