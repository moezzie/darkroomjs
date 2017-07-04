(function() {
'use strict';

// Inject SVG icons into the DOM
var element = document.createElement('div');
element.id = 'darkroom-icons';
element.style.height = 0;
element.style.width = 0;
element.style.position = 'absolute';
element.style.visibility = 'hidden';
element.innerHTML = '<!-- inject:svg --><svg xmlns="http://www.w3.org/2000/svg"><symbol id="arrow-down" viewBox="0 0 24 24"><g class="style-scope iron-icon"><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" class="style-scope iron-icon"/></g></symbol><symbol id="bold" viewBox="0 0 1409 1537"><title>bold</title><path d="M555.83 1393.424c50.667 21.333 97.334 32 140 32 87.334 0 159.334-13.667 216-41 56.667-27.334 97.334-65 122-113 25.334-46.667 38-107 38-181 0-76-13.666-136-41-180-38.666-62.667-85.666-104.667-141-126-53.333-21.334-135.666-32-247-32-49.333 0-83 3.333-101 10v144l-1 173 3 270c0 10 4 24.666 12 44zm-14-746c28.667 4.666 65 7 109 7 116.667 0 204.667-21.667 264-65 59.334-43.334 89-118 89-224 0-74.667-28.333-137-85-187-56-50-141-75-255-75-34.666 0-78 4.333-130 13 0 29.333.667 55 2 77 4.667 81.333 6.667 174.333 6 279l-1 98c0 28.666.334 54.333 1 77zm-541 889l2-94c30-6 52.667-10 68-12 51.334-8 92.334-18.334 123-31 11.334-18 18.334-35 21-51 6-44 9-108.667 9-194l-2-497c-3.333-170.667-6.333-305.334-9-404-.666-58-4.333-94.334-11-109-.666-2.667-4.666-6.667-12-12-12-8-35-13-69-15-20-1.334-58-5.667-114-13l-4-83 260-6 380-13 45-1c3.334 0 8-.167 14-.5 6-.334 10.667-.5 14-.5.667 0 7.834.166 21.5.5 13.667.333 27.167.5 40.5.5h74c58.667 0 122.334 9 191 27 28.667 8.666 60.667 21.666 96 39 38 19.333 72 44.666 102 76 29.334 31.333 51 66 65 104s21 78.666 21 122c0 46.666-10.666 89.333-32 128-21.333 38.666-53 73.666-95 105-17.333 13.333-67.333 39-150 77 118 27.333 207 76 267 146 61.334 70.666 92 149.333 92 236 0 50.666-9.666 104.333-29 161-14 41.333-37.666 80.333-71 117-44 48-90.666 84-140 108-48.666 24-116.333 44-203 60-54.666 10-120.666 13.666-198 11l-197-4c-56-1.334-155.333 2.333-298 11-22 2-112.666 5.666-272 11z" fill-rule="nonzero" fill="#FFF"/></symbol><symbol id="close" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/><path d="M0 0h24v24H0z" fill="none"/></symbol><symbol id="crop" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M17 15h2V7c0-1.1-.9-2-2-2H9v2h8v8zM7 17V1H5v4H1v2h4v10c0 1.1.9 2 2 2h10v4h2v-4h4v-2H7z"/></symbol><symbol id="done" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></symbol><symbol id="fontsize-down" viewBox="0 0 25 18"><title>icon</title><path d="M24.591 9.278v.947a.946.946 0 0 1-.947.947h-6.629a.946.946 0 0 1-.947-.947v-.947c0-.524.423-.947.947-.947h6.629c.524 0 .947.423.947.947zm-9.548 7.895c.05.203.058.358.026.458-.035.1-.143.153-.326.153h-3.105c-.284 0-.476-.065-.577-.191-.1-.129-.192-.33-.275-.599l-.804-2.982H4.914l-.838 3.057c-.084.272-.192.461-.326.562-.133.1-.317.153-.551.153H.421c-.184 0-.309-.038-.375-.115-.068-.076-.06-.258.025-.548L4.903 1.547c.083-.238.183-.421.3-.55.116-.126.342-.191.677-.191h3.155c.35 0 .58.07.688.205.108.136.204.323.288.561l5.032 15.601zm-5.826-6.001L7.53 4.918h-.124l-1.714 6.254h3.525z" fill-rule="nonzero" fill="#FFF"/></symbol><symbol id="fontsize-up" viewBox="0 0 25 18"><title>icon</title><path d="M24.591 9.278v.947a.946.946 0 0 1-.947.947h-6.629a.946.946 0 0 1-.947-.947v-.947c0-.524.423-.947.947-.947h6.629c.524 0 .947.423.947.947zM19.856 5.49h.947c.524 0 .947.423.947.947v6.629a.946.946 0 0 1-.947.947h-.947a.946.946 0 0 1-.947-.947V6.437c0-.524.423-.947.947-.947zm-4.813 11.683c.05.203.058.358.026.458-.035.1-.143.153-.326.153h-3.105c-.284 0-.476-.065-.577-.191-.1-.129-.192-.33-.275-.599l-.804-2.982H4.914l-.838 3.057c-.084.272-.192.461-.326.562-.133.1-.317.153-.551.153H.421c-.184 0-.309-.038-.375-.115-.068-.076-.06-.258.025-.548L4.903 1.547c.083-.238.183-.421.3-.55.116-.126.342-.191.677-.191h3.155c.35 0 .58.07.688.205.108.136.204.323.288.561l5.032 15.601zm-5.826-6.001L7.53 4.918h-.124l-1.714 6.254h3.525z" fill-rule="nonzero" fill="#FFF"/></symbol><symbol id="italic" viewBox="0 0 9 12"><title>italic</title><path d="M5.5 11.999l.249-.994h-1.5L6.758.968h1.5L8.5.001h-5l-.242.967h1.5L2.249 11.005h-1.5l-.249.994z" fill-rule="nonzero" fill="#FFF"/></symbol><symbol id="redo" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16a8.002 8.002 0 0 1 7.6-5.5c1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6z"/></symbol><symbol id="rotate-left" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M7.11 8.53L5.7 7.11C4.8 8.27 4.24 9.61 4.07 11h2.02c.14-.87.49-1.72 1.02-2.47zM6.09 13H4.07c.17 1.39.72 2.73 1.62 3.89l1.41-1.42c-.52-.75-.87-1.59-1.01-2.47zm1.01 5.32c1.16.9 2.51 1.44 3.9 1.61V17.9c-.87-.15-1.71-.49-2.46-1.03L7.1 18.32zM13 4.07V1L8.45 5.55 13 10V6.09c2.84.48 5 2.94 5 5.91s-2.16 5.43-5 5.91v2.02c3.95-.49 7-3.85 7-7.93s-3.05-7.44-7-7.93z"/></symbol><symbol id="rotate-right" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M15.55 5.55L11 1v3.07C7.06 4.56 4 7.92 4 12s3.05 7.44 7 7.93v-2.02c-2.84-.48-5-2.94-5-5.91s2.16-5.43 5-5.91V10l4.55-4.45zM19.93 11a7.906 7.906 0 0 0-1.62-3.89l-1.42 1.42c.54.75.88 1.6 1.02 2.47h2.02zM13 17.9v2.02c1.39-.17 2.74-.71 3.9-1.61l-1.44-1.44c-.75.54-1.59.89-2.46 1.03zm3.89-2.42l1.42 1.41c.9-1.16 1.45-2.5 1.62-3.89h-2.02c-.14.87-.48 1.72-1.02 2.48z"/></symbol><symbol id="save" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M17 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"/></symbol><symbol id="text" viewBox="0 0 15 17"><title>T</title><path d="M.683.43h13.955l.022 4.674h-.668c-.218-1.668-.845-2.796-1.878-3.384-.581-.325-1.449-.502-2.603-.532v12.2c0 .853.149 1.419.447 1.698.298.28.918.419 1.861.419v.588H3.557v-.588c.906 0 1.508-.142 1.806-.425.298-.282.447-.846.447-1.692v-12.2c-1.132.03-2 .207-2.603.532-1.11.604-1.736 1.732-1.88 3.384H.66L.683.43z" fill="#FFF" fill-rule="evenodd"/></symbol><symbol id="undo" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z"/></symbol></svg><!-- endinject -->';
document.body.appendChild(element);

})();
;(function() {
'use strict';

window.Darkroom = Darkroom;

// Core object of DarkroomJS.
// Basically it's a single object, instanciable via an element
// (it could be a CSS selector or a DOM element), some custom options,
// and a list of plugin objects (or none to use default ones).
function Darkroom(element, options, plugins) {
  return this.constructor(element, options, plugins);
}

// Create an empty list of plugin objects, which will be filled by
// other plugin scripts. This is the default plugin list if none is
// specified in Darkroom'ss constructor.
Darkroom.plugins = [];

Darkroom.prototype = {
  // Reference to the main container element
  containerElement: null,

  // Reference to the Fabric canvas object
  canvas: null,

  // Reference to the Fabric image object
  image: null,

  // Reference to the Fabric source canvas object
  sourceCanvas: null,

  // Reference to the Fabric source image object
  sourceImage: null,

  // Track of the original image element
  originalImageElement: null,

  // Stack of transformations to apply to the image source
  transformations: [],

  // Default options
  defaults: {
    // Canvas properties (dimension, ratio, color)
    minWidth: null,
    minHeight: null,
    maxWidth: null,
    maxHeight: null,
    ratio: null,
    backgroundColor: '#fff',

    // Plugins options
    plugins: {},

    // Post-initialisation callback
    initialize: function() { /* noop */ }
  },

  // List of the instancied plugins
  plugins: {},

  // This options are a merge between `defaults` and the options passed
  // through the constructor
  options: {},

  constructor: function(element, options, plugins) {
    this.options = Darkroom.Utils.extend(options, this.defaults);

    if (typeof element === 'string')
      element = document.querySelector(element);
    if (null === element)
      return;

    var image = new Image();
    image.onload = function() {
      // Initialize the DOM/Fabric elements
      this._initializeDOM(element);
      this._initializeImage(options);

      // Then initialize the plugins
      this._initializePlugins(Darkroom.plugins);

      // Public method to adjust image according to the canvas
      this.refresh(function() {
        // Execute a custom callback after initialization
        this.options.initialize.bind(this).call();
      }.bind(this));

    }.bind(this)

    //image.crossOrigin = 'anonymous';
    image.src = element.src;
  },

  selfDestroy: function() {
    var container = this.containerElement;
    var image = new Image();
    image.onload = function() {
      container.parentNode.replaceChild(image, container);
    }

    image.src = this.sourceImage.toDataURL();
  },

  // Add ability to attach event listener on the core object.
  // It uses the canvas element to process events.
  addEventListener: function(eventName, callback) {
    var el = this.sourceCanvas.getElement();
    if (el.addEventListener){
      el.addEventListener(eventName, callback);
    } else if (el.attachEvent) {
      el.attachEvent('on' + eventName, callback);
    }
  },

  dispatchEvent: function(eventName) {
    // Use the old way of creating event to be IE compatible
    // See https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events
    var event = document.createEvent('Event');
    event.initEvent(eventName, true, true);

    this.canvas.getElement().dispatchEvent(event);
  },

  // Adjust image & canvas dimension according to min/max width/height
  // and ratio specified in the options.
  // This method should be called after each image transformation.
  refresh: function(next) {
    var clone = new Image();
    clone.onload = function() {
      this._replaceCurrentImage(new fabric.Image(clone));

      if (next) next();
    }.bind(this);
    clone.src = this.sourceImage.toDataURL();
  },

  _replaceCurrentImage: function(newImage) {
    if (this.image) {
      this.image.remove();
    }

    this.image = newImage;
    this.image.selectable = false;

    // Adjust width or height according to specified ratio
    var viewport = Darkroom.Utils.computeImageViewPort(this.image);
    var canvasWidth = viewport.width;
    var canvasHeight = viewport.height;

    if (null !== this.options.ratio) {
      var canvasRatio = +this.options.ratio;
      var currentRatio = canvasWidth / canvasHeight;

      if (currentRatio > canvasRatio) {
        canvasHeight = canvasWidth / canvasRatio;
      } else if (currentRatio < canvasRatio) {
        canvasWidth = canvasHeight * canvasRatio;
      }
    }

    // Then scale the image to fit into dimension limits
    var scaleMin = 1;
    var scaleMax = 1;
    var scaleX = 1;
    var scaleY = 1;

    if (null !== this.options.maxWidth && this.options.maxWidth < canvasWidth) {
      scaleX =  this.options.maxWidth / canvasWidth;
    }
    if (null !== this.options.maxHeight && this.options.maxHeight < canvasHeight) {
      scaleY =  this.options.maxHeight / canvasHeight;
    }
    scaleMin = Math.min(scaleX, scaleY);

    scaleX = 1;
    scaleY = 1;
    if (null !== this.options.minWidth && this.options.minWidth > canvasWidth) {
      scaleX =  this.options.minWidth / canvasWidth;
    }
    if (null !== this.options.minHeight && this.options.minHeight > canvasHeight) {
      scaleY =  this.options.minHeight / canvasHeight;
    }
    scaleMax = Math.max(scaleX, scaleY);

    var scale = scaleMax * scaleMin; // one should be equals to 1

    canvasWidth *= scale;
    canvasHeight *= scale;

    // Finally place the image in the center of the canvas
    this.image.setScaleX(1 * scale);
    this.image.setScaleY(1 * scale);
    this.canvas.add(this.image);
    this.canvas.setWidth(canvasWidth);
    this.canvas.setHeight(canvasHeight);
    this.canvas.centerObject(this.image);
    this.image.setCoords();
  },

  // Apply the transformation on the current image and save it in the
  // transformations stack (in order to reconstitute the previous states
  // of the image).
  applyTransformation: function(transformation) {
    this.transformations.push(transformation);

    transformation.applyTransformation(
      this.sourceCanvas,
      this.sourceImage,
      this._postTransformation.bind(this)
    );
  },

  _postTransformation: function(newImage) {
    if (newImage)
      this.sourceImage = newImage;

    this.refresh(function() {
      this.dispatchEvent('core:transformation');
    }.bind(this));
  },

  // Initialize image from original element plus re-apply every
  // transformations.
  reinitializeImage: function(options) {
    this.sourceImage.remove();
    this._initializeImage(options);
    this._popTransformation(this.transformations.slice())
  },

  _popTransformation: function(transformations) {
    if (0 === transformations.length) {
      this.dispatchEvent('core:reinitialized');
      this.refresh();
      return;
    }

    var transformation = transformations.shift();

    var next = function(newImage) {
      if (newImage) this.sourceImage = newImage;
      this._popTransformation(transformations)
    };

    transformation.applyTransformation(
      this.sourceCanvas,
      this.sourceImage,
      next.bind(this)
    );
  },

  // Create the DOM elements and instanciate the Fabric canvas.
  // The image element is replaced by a new `div` element.
  // However the original image is re-injected in order to keep a trace of it.
  _initializeDOM: function(imageElement) {
    // Container
    var mainContainerElement = document.createElement('div');
    mainContainerElement.className = 'darkroom-container';

    // Toolbar
    var toolbarElement = document.createElement('div');
    toolbarElement.className = 'darkroom-toolbar';
    mainContainerElement.appendChild(toolbarElement);

    // Viewport canvas
    var canvasContainerElement = document.createElement('div');
    canvasContainerElement.className = 'darkroom-image-container';
    canvasContainerElement.style.display = 'none';
    var canvasElement = document.createElement('canvas');
    canvasContainerElement.appendChild(canvasElement);
    mainContainerElement.appendChild(canvasContainerElement);

    // Source canvas
    var sourceCanvasContainerElement = document.createElement('div');
    sourceCanvasContainerElement.className = 'darkroom-source-container';
    //sourceCanvasContainerElement.style.display = 'none';
    var sourceCanvasElement = document.createElement('canvas');
    sourceCanvasContainerElement.appendChild(sourceCanvasElement);
    mainContainerElement.appendChild(sourceCanvasContainerElement);

    // Original image
    imageElement.parentNode.replaceChild(mainContainerElement, imageElement);
    imageElement.style.display = 'none';
    mainContainerElement.appendChild(imageElement);

    // Instanciate object from elements
    this.containerElement = mainContainerElement;
    this.originalImageElement = imageElement;

    this.toolbar = new Darkroom.UI.Toolbar(toolbarElement);

    this.canvas = new fabric.Canvas(canvasElement, {
      selection: false,
      backgroundColor: this.options.backgroundColor
    });

    this.sourceCanvas = new fabric.Canvas(sourceCanvasElement, {
      selection: false,
      backgroundColor: this.options.backgroundColor
    });
  },

  // Instanciate the Fabric image object.
  // The image is created as a static element with no control,
  // then it is add in the Fabric canvas object.
  _initializeImage: function(options) {

    this.sourceImage = new fabric.Image(this.originalImageElement, {
      // Some options to make the image static
      selectable: true,
      evented: true,
      lockMovementX: true,
      lockMovementY: true,
      lockRotation: true,
      lockScalingX: true,
      lockScalingY: true,
      lockUniScaling: true,
      hasControls: true,
      hasBorders: true,
      originX: 'left',
      originY: 'top'
    });

    this.sourceCanvas.add(this.sourceImage);
    
    var scale = Math.max((options.maxHeight / this.sourceImage.height), (options.maxWidth / this.sourceImage.width))

    this.sourceImage.setScaleX(scale)
    this.sourceImage.setScaleY(scale)

    // Adjust width or height according to specified ratio
    var viewport = Darkroom.Utils.computeImageViewPort(this.sourceImage);
    var canvasWidth = viewport.width;
    var canvasHeight = viewport.height;

    this.sourceCanvas.setWidth(canvasWidth);
    this.sourceCanvas.setHeight(canvasHeight);
    this.sourceCanvas.centerObject(this.sourceImage);
    this.sourceImage.setCoords();
  },

  // Initialize every plugins.
  // Note that plugins are instanciated in the same order than they
  // are declared in the parameter object.
  _initializePlugins: function(plugins) {
    for (var name in plugins) {
      var plugin = plugins[name];
      var options = this.options.plugins[name];

      // Setting false into the plugin options will disable the plugin
      if (options === false)
        continue;

      // Avoid any issues with _proto_
      if (!plugins.hasOwnProperty(name))
        continue;

      this.plugins[name] = new plugin(this, options);
    }
  },
}

})();
;(function() {
'use strict';

Darkroom.Plugin = Plugin;

// Define a plugin object. This is the (abstract) parent class which
// has to be extended for each plugin.
function Plugin(darkroom, options) {
  this.darkroom = darkroom;
  this.options = Darkroom.Utils.extend(options, this.defaults);
  this.initialize();
}

Plugin.prototype = {
  defaults: {},
  initialize: function() { }
}

// Inspired by Backbone.js extend capability.
Plugin.extend = function(protoProps) {
  var parent = this;
  var child;

  if (protoProps && protoProps.hasOwnProperty('constructor')) {
    child = protoProps.constructor;
  } else {
    child = function(){ return parent.apply(this, arguments); };
  }

  Darkroom.Utils.extend(child, parent);

  var Surrogate = function(){ this.constructor = child; };
  Surrogate.prototype = parent.prototype;
  child.prototype = new Surrogate;

  if (protoProps) Darkroom.Utils.extend(child.prototype, protoProps);

  child.__super__ = parent.prototype;

  return child;
}

})();
;(function() {
'use strict';

Darkroom.Transformation = Transformation;

function Transformation(options) {
  this.options = options;
}

Transformation.prototype = {
  applyTransformation: function(image) { /* no-op */  }
}

// Inspired by Backbone.js extend capability.
Transformation.extend = function(protoProps) {
  var parent = this;
  var child;

  if (protoProps && protoProps.hasOwnProperty('constructor')) {
    child = protoProps.constructor;
  } else {
    child = function(){ return parent.apply(this, arguments); };
  }

  Darkroom.Utils.extend(child, parent);

  var Surrogate = function(){ this.constructor = child; };
  Surrogate.prototype = parent.prototype;
  child.prototype = new Surrogate;

  if (protoProps) Darkroom.Utils.extend(child.prototype, protoProps);

  child.__super__ = parent.prototype;

  return child;
}

})();
;(function() {
'use strict';

Darkroom.UI = {
  Toolbar: Toolbar,
  ButtonGroup: ButtonGroup,
  Button: Button,
};

// Toolbar object.
function Toolbar(element) {
  this.element = element;
}

Toolbar.prototype = {
  createButtonGroup: function(options) {
    var buttonGroup = document.createElement('div');
    buttonGroup.className = 'darkroom-button-group';
    this.element.appendChild(buttonGroup);

    return new ButtonGroup(buttonGroup);
  }
};

// ButtonGroup object.
function ButtonGroup(element) {
  this.element = element;
}

ButtonGroup.prototype = {
  createButton: function(options) {
    var defaults = {
      image: 'help',
      type: 'default',
      group: 'default',
      hide: false,
      disabled: false
    };

    options = Darkroom.Utils.extend(options, defaults);

    var buttonElement = document.createElement('button');
    buttonElement.type = 'button';
    buttonElement.className = 'darkroom-button darkroom-button-' + options.type;
    buttonElement.innerHTML = '<svg class="darkroom-icon"><use xlink:href="#' + options.image + '" /></svg>';
    this.element.appendChild(buttonElement);

    var button = new Button(buttonElement);
    button.hide(options.hide);
    button.disable(options.disabled);

    return button;
  },

  createSelect: function(options) {

    var defaults = {
      image: 'help',
      type: 'default',
      group: 'default',
      hide: false,
      disabled: false
    };
    var container = document.createElement('div')
    container.className = "darkroom-select-container"

    var selectElement = document.createElement('select')
    selectElement.className = 'darkroom-select'
    container.appendChild(selectElement)

    this.element.appendChild(container)

    var select = new Select(container);

    return select;
  }
}

function DarkroomElement(element) {
  this.element = element;
}

DarkroomElement.prototype = {
  addEventListener: function(eventName, listener) {
    if (this.element.addEventListener){
      this.element.addEventListener(eventName, listener);
    } else if (this.element.attachEvent) {
      this.element.attachEvent('on' + eventName, listener);
    }
  },
  removeEventListener: function(eventName, listener) {
    if (this.element.removeEventListener){
      this.element.removeEventListener(eventName, listener);
    }
  }
}

// Button object.
function Button(element) {
  this.element = element;
}

Button.prototype = DarkroomElement.prototype;

Button.prototype.active = function(value) {
  if (value)
    this.element.classList.add('darkroom-button-active');
  else
    this.element.classList.remove('darkroom-button-active');
};

Button.prototype.hide = function(value) {
  if (value)
    this.element.classList.add('darkroom-button-hidden');
  else
    this.element.classList.remove('darkroom-button-hidden');
};

Button.prototype.disable = function(value) {
  this.element.disabled = (value) ? true : false;
};

function Select(element) {
  this.element = element.children[0];
}

Select.prototype = DarkroomElement.prototype
Select.prototype.addOptions = function (options) {
  if (typeof options !== 'object') {return}

  // Is one object
  if (!options.length && options.value) {
    options = [options]
  } else if (Object.keys(options).length ) {
    options = this._convertObject(options)
  }

  for (var n = 0; n < options.length; n++) {
    if (typeof options[n] !== 'object') {
      options[n] = {value: options[n], label: options[n]}
    } else if (!options[n].value || !options[n].label) {
      options[n] = {value: options[n].value || options[n].label, label: options[n].value || options[n].label}
    }
  }

  var o = null;
  for (var n = 0; n < options.length; n++) {
    if (options[n].value && options[n].label) {
      o = document.createElement('option')
      o.value = options[n].value
      o.innerHTML = options[n].label
      this.element.appendChild(o)
    }
  }

}

Select.prototype._convertObject = function (obj) {

  // Is array
  if (typeof obj.forEach === 'function') { return obj }

  var keys = Object.keys(obj)
  var array = []

  if (keys.length === 1 && obj.value) {
    return [object]
  }

  for (var n = 0; n < keys.length; n++) {
    array[array.length] = {value: obj[keys[n]], label: keys[n]}
  }

  return array
}

})();
;(function() {
'use strict';

Darkroom.Utils = {
  extend: extend,
  computeImageViewPort: computeImageViewPort,
};


// Utility method to easily extend objects.
function extend(b, a) {
  var prop;
  if (b === undefined) {
    return a;
  }
  for (prop in a) {
    if (a.hasOwnProperty(prop) && b.hasOwnProperty(prop) === false) {
      b[prop] = a[prop];
    }
  }
  return b;
}

function computeImageViewPort(image) {
  return {
    height: Math.abs(image.getWidth() * (Math.sin(image.getAngle() * Math.PI/180))) + Math.abs(image.getHeight() * (Math.cos(image.getAngle() * Math.PI/180))),
    width: Math.abs(image.getHeight() * (Math.sin(image.getAngle() * Math.PI/180))) + Math.abs(image.getWidth() * (Math.cos(image.getAngle() * Math.PI/180))),
  }
}

})();
;;(function(window, document, Darkroom, fabric) {
  'use strict';

  Darkroom.plugins['history'] = Darkroom.Plugin.extend({
    undoTransformations: [],

    initialize: function InitDarkroomHistoryPlugin() {
      this._initButtons();

      this.darkroom.addEventListener('core:transformation', this._onTranformationApplied.bind(this));
    },

    undo: function() {
      if (this.darkroom.transformations.length === 0) {
        return;
      }

      var lastTransformation = this.darkroom.transformations.pop();
      this.undoTransformations.unshift(lastTransformation);

      this.darkroom.reinitializeImage();
      this._updateButtons();
    },

    redo: function() {
      if (this.undoTransformations.length === 0) {
        return;
      }

      var cancelTransformation = this.undoTransformations.shift();
      this.darkroom.transformations.push(cancelTransformation);

      this.darkroom.reinitializeImage();
      this._updateButtons();
    },

    _initButtons: function() {
      var buttonGroup = this.darkroom.toolbar.createButtonGroup();

      this.backButton = buttonGroup.createButton({
        image: 'undo',
        disabled: true
      });

      this.forwardButton = buttonGroup.createButton({
        image: 'redo',
        disabled: true
      });

      this.backButton.addEventListener('click', this.undo.bind(this));
      this.forwardButton.addEventListener('click', this.redo.bind(this));

      return this;
    },

    _updateButtons: function() {
      this.backButton.disable((this.darkroom.transformations.length === 0))
      this.forwardButton.disable((this.undoTransformations.length === 0))
    },

    _onTranformationApplied: function() {
      this.undoTransformations = [];
      this._updateButtons();
    }
  });
})(window, document, Darkroom, fabric);
;(function() {
'use strict';

var Rotation = Darkroom.Transformation.extend({
  applyTransformation: function(canvas, image, next) {
    var angle = (image.getAngle() + this.options.angle) % 360;
    image.rotate(angle);

    var width, height;
    height = Math.abs(image.getWidth()*(Math.sin(angle*Math.PI/180)))+Math.abs(image.getHeight()*(Math.cos(angle*Math.PI/180)));
    width = Math.abs(image.getHeight()*(Math.sin(angle*Math.PI/180)))+Math.abs(image.getWidth()*(Math.cos(angle*Math.PI/180)));

    canvas.setWidth(width);
    canvas.setHeight(height);

    canvas.centerObject(image);
    image.setCoords();
    canvas.renderAll();

    next();
  }
});

Darkroom.plugins['rotate'] = Darkroom.Plugin.extend({

  initialize: function InitDarkroomRotatePlugin() {
    var buttonGroup = this.darkroom.toolbar.createButtonGroup();

    var leftButton = buttonGroup.createButton({
      image: 'rotate-left'
    });

    var rightButton = buttonGroup.createButton({
      image: 'rotate-right'
    });

    leftButton.addEventListener('click', this.rotateLeft.bind(this));
    rightButton.addEventListener('click', this.rotateRight.bind(this));
  },

  rotateLeft: function rotateLeft() {
    this.rotate(-90);
  },

  rotateRight: function rotateRight() {
    this.rotate(90);
  },

  rotate: function rotate(angle) {
    this.darkroom.applyTransformation(
      new Rotation({angle: angle})
    );
  }

});

})();
;(function() {
'use strict';

var Crop = Darkroom.Transformation.extend({
  applyTransformation: function(canvas, image, next) {
    // Snapshot the image delimited by the crop zone
    var snapshot = new Image();
    snapshot.onload = function() {
      // Validate image
      if (height < 1 || width < 1)
        return;

      var imgInstance = new fabric.Image(this, {
        // options to make the image static
        selectable: false,
        evented: false,
        lockMovementX: true,
        lockMovementY: true,
        lockRotation: true,
        lockScalingX: true,
        lockScalingY: true,
        lockUniScaling: true,
        hasControls: false,
        hasBorders: false
      });

      var width = this.width;
      var height = this.height;

      // Update canvas size
      canvas.setWidth(width);
      canvas.setHeight(height);

      // Add image
      image.remove();
      canvas.add(imgInstance);

      next(imgInstance);
    };

    var viewport = Darkroom.Utils.computeImageViewPort(image);
    var imageWidth = viewport.width;
    var imageHeight = viewport.height;

    var left = this.options.left * imageWidth;
    var top = this.options.top * imageHeight;
    var width = Math.min(this.options.width * imageWidth, imageWidth - left);
    var height = Math.min(this.options.height * imageHeight, imageHeight - top);

    snapshot.src = canvas.toDataURL({
      left: left,
      top: top,
      width: width,
      height: height,
    });
  }
});

var CropZone = fabric.util.createClass(fabric.Rect, {
  _render: function(ctx) {
    this.callSuper('_render', ctx);

    var canvas = ctx.canvas;
    var dashWidth = 7;

    // Set original scale
    var flipX = this.flipX ? -1 : 1;
    var flipY = this.flipY ? -1 : 1;
    var scaleX = flipX / this.scaleX;
    var scaleY = flipY / this.scaleY;

    ctx.scale(scaleX, scaleY);

    // Overlay rendering
    ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
    this._renderOverlay(ctx);

    // Set dashed borders
    if (ctx.setLineDash !== undefined)
      ctx.setLineDash([dashWidth, dashWidth]);
    else if (ctx.mozDash !== undefined)
      ctx.mozDash = [dashWidth, dashWidth];

    // First lines rendering with black
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.2)';
    this._renderBorders(ctx);
    this._renderGrid(ctx);

    // Re render lines in white
    ctx.lineDashOffset = dashWidth;
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
    this._renderBorders(ctx);
    this._renderGrid(ctx);

    // Reset scale
    ctx.scale(1/scaleX, 1/scaleY);
  },

  _renderOverlay: function(ctx) {
    var canvas = ctx.canvas;

    //
    //    x0    x1        x2      x3
    // y0 +------------------------+
    //    |\\\\\\\\\\\\\\\\\\\\\\\\|
    //    |\\\\\\\\\\\\\\\\\\\\\\\\|
    // y1 +------+---------+-------+
    //    |\\\\\\|         |\\\\\\\|
    //    |\\\\\\|    0    |\\\\\\\|
    //    |\\\\\\|         |\\\\\\\|
    // y2 +------+---------+-------+
    //    |\\\\\\\\\\\\\\\\\\\\\\\\|
    //    |\\\\\\\\\\\\\\\\\\\\\\\\|
    // y3 +------------------------+
    //

    var x0 = Math.ceil(-this.getWidth() / 2 - this.getLeft());
    var x1 = Math.ceil(-this.getWidth() / 2);
    var x2 = Math.ceil(this.getWidth() / 2);
    var x3 = Math.ceil(this.getWidth() / 2 + (canvas.width - this.getWidth() - this.getLeft()));

    var y0 = Math.ceil(-this.getHeight() / 2 - this.getTop());
    var y1 = Math.ceil(-this.getHeight() / 2);
    var y2 = Math.ceil(this.getHeight() / 2);
    var y3 = Math.ceil(this.getHeight() / 2 + (canvas.height - this.getHeight() - this.getTop()));

    ctx.beginPath();
    
    // Draw outer rectangle.
    // Numbers are +/-1 so that overlay edges don't get blurry.
    ctx.moveTo(x0 - 1, y0 - 1);
    ctx.lineTo(x3 + 1, y0 - 1);
    ctx.lineTo(x3 + 1, y3 + 1);
    ctx.lineTo(x0 - 1, y3 - 1);
    ctx.lineTo(x0 - 1, y0 - 1);
    ctx.closePath();

    // Draw inner rectangle.
    ctx.moveTo(x1, y1);
    ctx.lineTo(x1, y2);
    ctx.lineTo(x2, y2);
    ctx.lineTo(x2, y1);
    ctx.lineTo(x1, y1);

    ctx.closePath();
    ctx.fill();
  },

  _renderBorders: function(ctx) {
    ctx.beginPath();
    ctx.moveTo(-this.getWidth()/2, -this.getHeight()/2); // upper left
    ctx.lineTo(this.getWidth()/2, -this.getHeight()/2); // upper right
    ctx.lineTo(this.getWidth()/2, this.getHeight()/2); // down right
    ctx.lineTo(-this.getWidth()/2, this.getHeight()/2); // down left
    ctx.lineTo(-this.getWidth()/2, -this.getHeight()/2); // upper left
    ctx.stroke();
  },

  _renderGrid: function(ctx) {
    // Vertical lines
    ctx.beginPath();
    ctx.moveTo(-this.getWidth()/2 + 1/3 * this.getWidth(), -this.getHeight()/2);
    ctx.lineTo(-this.getWidth()/2 + 1/3 * this.getWidth(), this.getHeight()/2);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(-this.getWidth()/2 + 2/3 * this.getWidth(), -this.getHeight()/2);
    ctx.lineTo(-this.getWidth()/2 + 2/3 * this.getWidth(), this.getHeight()/2);
    ctx.stroke();
    // Horizontal lines
    ctx.beginPath();
    ctx.moveTo(-this.getWidth()/2, -this.getHeight()/2 + 1/3 * this.getHeight());
    ctx.lineTo(this.getWidth()/2, -this.getHeight()/2 + 1/3 * this.getHeight());
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(-this.getWidth()/2, -this.getHeight()/2 + 2/3 * this.getHeight());
    ctx.lineTo(this.getWidth()/2, -this.getHeight()/2 + 2/3 * this.getHeight());
    ctx.stroke();
  }
});

Darkroom.plugins['crop'] = Darkroom.Plugin.extend({
  // Init point
  startX: null,
  startY: null,

  // Keycrop
  isKeyCroping: false,
  isKeyLeft: false,
  isKeyUp: false,

  defaults: {
    // min crop dimension
    minHeight: 1,
    minWidth: 1,
    // ensure crop ratio
    ratio: null,
    // quick crop feature (set a key code to enable it)
    quickCropKey: false
  },

  initialize: function InitDarkroomCropPlugin() {
    var buttonGroup = this.darkroom.toolbar.createButtonGroup();

    this.cropButton = buttonGroup.createButton({
      image: 'crop'
    });
    this.okButton = buttonGroup.createButton({
      image: 'done',
      type: 'success',
      hide: true
    });
    this.cancelButton = buttonGroup.createButton({
      image: 'close',
      type: 'danger',
      hide: true
    });

    // Buttons click
    this.cropButton.addEventListener('click', this.toggleCrop.bind(this));
    this.okButton.addEventListener('click', this.cropCurrentZone.bind(this));
    this.cancelButton.addEventListener('click', this.releaseFocus.bind(this));

    // Canvas events
    this.darkroom.canvas.on('mouse:down', this.onMouseDown.bind(this));
    this.darkroom.canvas.on('mouse:move', this.onMouseMove.bind(this));
    this.darkroom.canvas.on('mouse:up', this.onMouseUp.bind(this));
    this.darkroom.canvas.on('object:moving', this.onObjectMoving.bind(this));
    this.darkroom.canvas.on('object:scaling', this.onObjectScaling.bind(this));

    fabric.util.addListener(fabric.document, 'keydown', this.onKeyDown.bind(this));
    fabric.util.addListener(fabric.document, 'keyup', this.onKeyUp.bind(this));

    this.darkroom.addEventListener('core:transformation', this.releaseFocus.bind(this));
  },

  // Avoid crop zone to go beyond the canvas edges
  onObjectMoving: function(event) {
    if (!this.hasFocus()) {
      return;
    }

    var currentObject = event.target;
    if (currentObject !== this.cropZone)
      return;

    var canvas = this.darkroom.canvas;
    var x = currentObject.getLeft(), y = currentObject.getTop();
    var w = currentObject.getWidth(), h = currentObject.getHeight();
    var maxX = canvas.getWidth() - w;
    var maxY = canvas.getHeight() - h;

    if (x < 0)
      currentObject.set('left', 0);
    if (y < 0)
      currentObject.set('top', 0);
    if (x > maxX)
      currentObject.set('left', maxX);
    if (y > maxY)
      currentObject.set('top', maxY);

    this.darkroom.dispatchEvent('crop:update');
  },

  // Prevent crop zone from going beyond the canvas edges (like mouseMove)
  onObjectScaling: function(event) {
    if (!this.hasFocus()) {
      return;
    }

    var preventScaling = false;
    var currentObject = event.target;
    if (currentObject !== this.cropZone)
      return;

    var canvas = this.darkroom.canvas;
    var pointer = canvas.getPointer(event.e);
    var x = pointer.x;
    var y = pointer.y;

    var minX = currentObject.getLeft();
    var minY = currentObject.getTop();
    var maxX = currentObject.getLeft() + currentObject.getWidth();
    var maxY = currentObject.getTop() + currentObject.getHeight();

    if (null !== this.options.ratio) {
      if (minX < 0 || maxX > canvas.getWidth() || minY < 0 || maxY > canvas.getHeight()) {
        preventScaling = true;
      }
    }

    if (minX < 0 || maxX > canvas.getWidth() || preventScaling) {
      var lastScaleX = this.lastScaleX || 1;
      currentObject.setScaleX(lastScaleX);
    }
    if (minX < 0) {
      currentObject.setLeft(0);
    }

    if (minY < 0 || maxY > canvas.getHeight() || preventScaling) {
      var lastScaleY = this.lastScaleY || 1;
      currentObject.setScaleY(lastScaleY);
    }
    if (minY < 0) {
      currentObject.setTop(0);
    }

    if (currentObject.getWidth() < this.options.minWidth) {
      currentObject.scaleToWidth(this.options.minWidth);
    }
    if (currentObject.getHeight() < this.options.minHeight) {
      currentObject.scaleToHeight(this.options.minHeight);
    }

    this.lastScaleX = currentObject.getScaleX();
    this.lastScaleY = currentObject.getScaleY();

    this.darkroom.dispatchEvent('crop:update');
  },

  // Init crop zone
  onMouseDown: function(event) {
    if (!this.hasFocus()) {
      return;
    }

    var canvas = this.darkroom.canvas;

    // recalculate offset, in case canvas was manipulated since last `calcOffset`
    canvas.calcOffset();
    var pointer = canvas.getPointer(event.e);
    var x = pointer.x;
    var y = pointer.y;
    var point = new fabric.Point(x, y);

    // Check if user want to scale or drag the crop zone.
    var activeObject = canvas.getActiveObject();
    if (activeObject === this.cropZone || this.cropZone.containsPoint(point)) {
      return;
    }

    canvas.discardActiveObject();
    this.cropZone.setWidth(0);
    this.cropZone.setHeight(0);
    this.cropZone.setScaleX(1);
    this.cropZone.setScaleY(1);

    this.startX = x;
    this.startY = y;
  },

  // Extend crop zone
  onMouseMove: function(event) {
    // Quick crop feature
    if (this.isKeyCroping)
      return this.onMouseMoveKeyCrop(event);

    if (null === this.startX || null === this.startY) {
      return;
    }

    var canvas = this.darkroom.canvas;
    var pointer = canvas.getPointer(event.e);
    var x = pointer.x;
    var y = pointer.y;

    this._renderCropZone(this.startX, this.startY, x, y);
  },

  onMouseMoveKeyCrop: function(event) {
    var canvas = this.darkroom.canvas;
    var zone = this.cropZone;

    var pointer = canvas.getPointer(event.e);
    var x = pointer.x;
    var y = pointer.y;

    if (!zone.left || !zone.top) {
      zone.setTop(y);
      zone.setLeft(x);
    }

    this.isKeyLeft =  x < zone.left + zone.width / 2 ;
    this.isKeyUp = y < zone.top + zone.height / 2 ;

    this._renderCropZone(
      Math.min(zone.left, x),
      Math.min(zone.top, y),
      Math.max(zone.left+zone.width, x),
      Math.max(zone.top+zone.height, y)
    );
  },

  // Finish crop zone
  onMouseUp: function(event) {
    if (null === this.startX || null === this.startY) {
      return;
    }

    var canvas = this.darkroom.canvas;
    this.cropZone.setCoords();
    canvas.setActiveObject(this.cropZone);
    canvas.calcOffset();

    this.startX = null;
    this.startY = null;
  },

  onKeyDown: function(event) {
    if (false === this.options.quickCropKey || event.keyCode !== this.options.quickCropKey || this.isKeyCroping)
      return;

    // Active quick crop flow
    this.isKeyCroping = true ;
    this.darkroom.canvas.discardActiveObject();
    this.cropZone.setWidth(0);
    this.cropZone.setHeight(0);
    this.cropZone.setScaleX(1);
    this.cropZone.setScaleY(1);
    this.cropZone.setTop(0);
    this.cropZone.setLeft(0);
  },

  onKeyUp: function(event) {
    if (false === this.options.quickCropKey || event.keyCode !== this.options.quickCropKey || !this.isKeyCroping)
      return;

    // Unactive quick crop flow
    this.isKeyCroping = false;
    this.startX = 1;
    this.startY = 1;
    this.onMouseUp();
  },

  selectZone: function(x, y, width, height, forceDimension) {
    if (!this.hasFocus())
      this.requireFocus();

    if (!forceDimension) {
      this._renderCropZone(x, y, x+width, y+height);
    } else {
      this.cropZone.set({
        'left': x,
        'top': y,
        'width': width,
        'height': height
      });
    }

    var canvas = this.darkroom.canvas;
    canvas.bringToFront(this.cropZone);
    this.cropZone.setCoords();
    canvas.setActiveObject(this.cropZone);
    canvas.calcOffset();

    this.darkroom.dispatchEvent('crop:update');
  },

  toggleCrop: function() {
    if (!this.hasFocus())
      this.requireFocus();
    else
      this.releaseFocus();
  },

  cropCurrentZone: function() {
    if (!this.hasFocus())
      return;

    // Avoid croping empty zone
    if (this.cropZone.width < 1 && this.cropZone.height < 1)
      return;

    var image = this.darkroom.image;

    // Compute crop zone dimensions
    var top = this.cropZone.getTop() - image.getTop();
    var left = this.cropZone.getLeft() - image.getLeft();
    var width = this.cropZone.getWidth();
    var height = this.cropZone.getHeight();

    // Adjust dimensions to image only
    if (top < 0) {
      height += top;
      top = 0;
    }

    if (left < 0) {
      width += left;
      left = 0;
    }

    // Apply crop transformation.
    // Make sure to use relative dimension since the crop will be applied
    // on the source image.
    this.darkroom.applyTransformation(new Crop({
      top: top / image.getHeight(),
      left: left / image.getWidth(),
      width: width / image.getWidth(),
      height: height / image.getHeight(),
    }));
  },

  // Test wether crop zone is set
  hasFocus: function() {
    return this.cropZone !== undefined;
  },

  // Create the crop zone
  requireFocus: function() {
    this.cropZone = new CropZone({
      fill: 'transparent',
      hasBorders: false,
      originX: 'left',
      originY: 'top',
      //stroke: '#444',
      //strokeDashArray: [5, 5],
      //borderColor: '#444',
      cornerColor: '#444',
      cornerSize: 8,
      transparentCorners: false,
      lockRotation: true,
      hasRotatingPoint: false,
    });

    if (null !== this.options.ratio) {
      this.cropZone.set('lockUniScaling', true);
    }

    this.darkroom.canvas.add(this.cropZone);
    this.darkroom.canvas.defaultCursor = 'crosshair';

    this.cropButton.active(true);
    this.okButton.hide(false);
    this.cancelButton.hide(false);
  },

  // Remove the crop zone
  releaseFocus: function() {
    if (undefined === this.cropZone)
      return;

    this.cropZone.remove();
    this.cropZone = undefined;

    this.cropButton.active(false);
    this.okButton.hide(true);
    this.cancelButton.hide(true);

    this.darkroom.canvas.defaultCursor = 'default';

    this.darkroom.dispatchEvent('crop:update');
  },

  _renderCropZone: function(fromX, fromY, toX, toY) {
    var canvas = this.darkroom.canvas;

    var isRight = (toX > fromX);
    var isLeft = !isRight;
    var isDown = (toY > fromY);
    var isUp = !isDown;

    var minWidth = Math.min(+this.options.minWidth, canvas.getWidth());
    var minHeight = Math.min(+this.options.minHeight, canvas.getHeight());

    // Define corner coordinates
    var leftX = Math.min(fromX, toX);
    var rightX = Math.max(fromX, toX);
    var topY = Math.min(fromY, toY);
    var bottomY = Math.max(fromY, toY);

    // Replace current point into the canvas
    leftX = Math.max(0, leftX);
    rightX = Math.min(canvas.getWidth(), rightX);
    topY = Math.max(0, topY)
    bottomY = Math.min(canvas.getHeight(), bottomY);

    // Recalibrate coordinates according to given options
    if (rightX - leftX < minWidth) {
      if (isRight)
        rightX = leftX + minWidth;
      else
        leftX = rightX - minWidth;
    }
    if (bottomY - topY < minHeight) {
      if (isDown)
        bottomY = topY + minHeight;
      else
        topY = bottomY - minHeight;
    }

    // Truncate truncate according to canvas dimensions
    if (leftX < 0) {
      // Translate to the left
      rightX += Math.abs(leftX);
      leftX = 0
    }
    if (rightX > canvas.getWidth()) {
      // Translate to the right
      leftX -= (rightX - canvas.getWidth());
      rightX = canvas.getWidth();
    }
    if (topY < 0) {
      // Translate to the bottom
      bottomY += Math.abs(topY);
      topY = 0
    }
    if (bottomY > canvas.getHeight()) {
      // Translate to the right
      topY -= (bottomY - canvas.getHeight());
      bottomY = canvas.getHeight();
    }

    var width = rightX - leftX;
    var height = bottomY - topY;
    var currentRatio = width / height;

    if (this.options.ratio && +this.options.ratio !== currentRatio) {
      var ratio = +this.options.ratio;

      if(this.isKeyCroping) {
        isLeft = this.isKeyLeft;
        isUp = this.isKeyUp;
      }

      if (currentRatio < ratio) {
        var newWidth = height * ratio;
        if (isLeft) {
          leftX -= (newWidth - width);
        }
        width = newWidth;
      } else if (currentRatio > ratio) {
        var newHeight = height / (ratio * height/width);
        if (isUp) {
          topY -= (newHeight - height);
        }
        height = newHeight;
      }

      if (leftX < 0) {
        leftX = 0;
        //TODO
      }
      if (topY < 0) {
        topY = 0;
        //TODO
      }
      if (leftX + width > canvas.getWidth()) {
        var newWidth = canvas.getWidth() - leftX;
        height = newWidth * height / width;
        width = newWidth;
        if (isUp) {
          topY = fromY - height;
        }
      }
      if (topY + height > canvas.getHeight()) {
        var newHeight = canvas.getHeight() - topY;
        width = width * newHeight / height;
        height = newHeight;
        if (isLeft) {
          leftX = fromX - width;
        }
      }
    }

    // Apply coordinates
    this.cropZone.left = leftX;
    this.cropZone.top = topY;
    this.cropZone.width = width;
    this.cropZone.height = height;

    this.darkroom.canvas.bringToFront(this.cropZone);

    this.darkroom.dispatchEvent('crop:update');
  }
});

})();
;(function() {
'use strict';

Darkroom.plugins['save'] = Darkroom.Plugin.extend({

  defaults: {
    callback: function() {
      this.darkroom.selfDestroy();
    }
  },

  initialize: function InitializeDarkroomSavePlugin() {
    var buttonGroup = this.darkroom.toolbar.createButtonGroup();

    this.destroyButton = buttonGroup.createButton({
      image: 'save'
    });

    this.destroyButton.addEventListener('click', this.options.callback.bind(this));
  },
});

})();
;(function() {
'use strict';

var TextLayer = Darkroom.Transformation.extend({
  applyTransformation: function(canvas, image, next) {

    var text = new fabric.IText('Hello Darkroom!', {
      fill: 'rgb(0,200,0)',
      selectable: true,
      evented: true,
      fontFamily: 'Arial',
      id: Date.now().toString()
    });

    canvas.add(text)
    canvas.centerObject(text)

    text.setCoords()

    canvas.renderAll()

    canvas.setActiveObject(text)

    next();
  }
});

Darkroom.plugins['text'] = Darkroom.Plugin.extend({

  canvas: null,
  selected: null,
  textToolsButtonGroup: null,
  fonts: null,
  fontSelect: null,

  initialize: function InitDarkroomRotatePlugin() {

    this.fonts = this.initFonts()
    this.loadFonts(this.fonts)
    
    this.initTools()

    this.canvas = this.darkroom.sourceCanvas

    this.canvas.on('object:selected', this.selectedLayer.bind(this))
    this.canvas.on('object:deselected', this.deselectedLayer.bind(this))  
  },

  initTools: function() {
    var buttonGroup = this.darkroom.toolbar.createButtonGroup();

    var textButton = buttonGroup.createButton({
      image: 'text'
    })

    this.textToolsButtonGroup = this.darkroom.toolbar.createButtonGroup();
    this.textToolsButtonGroup.element.id = 'textTools'
    this.textToolsButtonGroup.element.style.display = 'none'

    var boldButton = this.createButton(this.textToolsButtonGroup, {image: 'bold', property: 'fontWeight', value: 'bold', action: 'toggle'})
    var italicButton = this.createButton(this.textToolsButtonGroup, {image: 'italic', property: 'fontStyle', value: 'italic', action: 'toggle'})
    var largerFontButton = this.createButton(this.textToolsButtonGroup, {image: 'fontsize-up', property: 'fontSize', value: 'x++', action: 'update'})
    var smallerFontButton = this.createButton(this.textToolsButtonGroup, {image: 'fontsize-down', property: 'fontSize', value: 'x--', action: 'update'})

    this.fontSelect  = this.textToolsButtonGroup.createSelect({})
    this.fontSelect.addOptions(Object.keys(this.fonts))

    var colorButton = this.textToolsButtonGroup.createButton({})
    colorButton.element.id = 'colorPicker'

    textButton.addEventListener('click', this.addTextLayer.bind(this))
    boldButton.addEventListener('click', this.toolClicked.bind(this))
    italicButton.addEventListener('click', this.toolClicked.bind(this))
    this.fontSelect.addEventListener('change', this.setFontFamily.bind(this))
    largerFontButton.addEventListener('click', this.toolClicked.bind(this))
    smallerFontButton.addEventListener('click', this.toolClicked.bind(this))

    this.initColorPicker()
  },

  createButton: function (buttonGroup, options) {
    var button = this.textToolsButtonGroup.createButton({image: options.image})
    if (options.property) {
      button.element.setAttribute('data-property', options.property)
    }

    if (options.value) {
      button.element.setAttribute('data-value', options.value)
    }
    
    if (options.action) {
      button.element.setAttribute('data-action', options.action)
    }

    return button
  },

  initColorPicker: function () {
    if (!window.CP) {return}
    var picker = new CP(document.querySelector('button#colorPicker'));

    picker.on("change", function(color) {
      console.log(color)
      //this.target.value = '#' + color;
      document.querySelector('button#colorPicker svg').style.backgroundColor = '#' + color
      this.setProperty('fill', '#' + color)
    }.bind(this));
  },

  selectedLayer: function (event) {
    this.selected = (event.target.type === 'text' || event.target.type === 'i-text') ? event.target : null
    this.afterSelected(this.selected)
  },

  deselectedLayer: function (event) {
    console.log('deselected', event)
  },

  afterSelected: function (selected) {
    if (selected) {
      this.textToolsButtonGroup.element.style.display = 'inline-block'
    } else {
      this.textToolsButtonGroup.element.style.display = 'none'
    }

    // Select correct font
    if (selected && this.fontSelect) {
      var font = selected.fontFamily
      var options = this.fontSelect.element.options

      for(var n = 0; n < options.length; n++) {
        if (options[n].label === font) {
          this.fontSelect.element.selectedIndex = n;
        }
      }
    }
  },

  addTextLayer: function (angle) {
    this.darkroom.applyTransformation(
      new TextLayer()
    );
  },

  setFontFamily: function (event) {
    if (this.selected) {
      var option = event.target.item(event.target.selectedIndex)
      this.setProperty('FontFamily', option.value)
    }
  },

  setProperty: function (key, value) {
    console.log(this.selected)
    if (this.selected && key && value !== undefined) {
      var setter = 'set' + key.charAt(0).toUpperCase() + key.slice(1)

      this.selected[setter](value)
      
      this.selected._initDimensions()
      this.canvas.renderAll()
    }
  },

  toggleProperty: function (key, value) {
    if (this.selected) {
      var value = (this.selected[key] == value) ? '' : value
      this.setProperty(key, value)
    }
  },

  updateProperty: function (key, value) {
    if (this.selected) {
      var x = this.selected[key]
      eval(value)

      this.setProperty(key, x)
    }
  },

  toolClicked: function(event) {
    if (this.selected) {

      var property  = event.currentTarget.getAttribute('data-property')
      var value  = event.currentTarget.getAttribute('data-value')

      var action = event.currentTarget.getAttribute('data-action')
      if ( action === 'toggle') {
        this.toggleProperty(property, value)
      } else if (action === 'update') {
        this.updateProperty(property, value)
      }
    }
  },

  initFonts: function () {

    var fontString = 'Abril+Fatface|Arvo:400,400i,700,700i|Droid+Sans:400,700|Josefin+Slab:100,100i,300,300i,400,400i,600,600i,700,700i|Lato:100,100i,300,300i,400,400i,700,700i,900,900i|Old+Standard+TT:400,400i,700|Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i|PT+Sans:400,400i,700|PT+Serif:400,400i,700,700i|Raleway:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900|Ubuntu:300,300i,400,400i,500,500i,700,700i|Vollkorn:400,400i,700,700i|Calligraffitti|Arial:400,400i,700,700i|Arial+Black:400,400i|Helvetica:300,300i,400,400i,600,600i|Geneva:400,400i,600,600i'

    var url   = 'https://fonts.googleapis.com/css?family=' + fontString;
    var link  = document.createElement('link')
    link.rel  = 'stylesheet'
    link.href = url
    var head = document.querySelector('head').appendChild(link)

    var fonts = {}
    var parts = fontString.split('|')
    var tmp = []
    for (var n = 0; n < parts.length; n++) {
      tmp = parts[n].split(':')
      if (tmp[1] && tmp[1].indexOf(':')) {
        fonts[tmp[0].replace(/\+/g, ' ')] = tmp[1].split(',')
      } else {
        fonts[parts[n].replace(/\+/g, ' ')] = ['400'] // Normal font size
      }
    }

    return fonts
  },

  loadFonts: function (fonts) {
    var fontLoadContainer = document.createElement('div')
    fontLoadContainer.style.height = 0;
    fontLoadContainer.style.overflow = 'hidden'

    var keys = Object.keys(fonts)
    for (var n = 0; n < keys.length; n++) {

      for(var i = 0; i < fonts[keys[n]].length; i++){
        var italic = (fonts[keys[n]][i].indexOf('i')) > -1
          
        var p = document.createElement('p')
        p.style.fontFamily = keys[n]
        p.style.fontWeight = fonts[keys[n]][i].replace('i','')
        if (italic) {
          p.style.fontStyle = 'italic'
        }
        p.textContent = keys[n]
        fontLoadContainer.appendChild(p)
      }
    }

    document.body.appendChild(fontLoadContainer)
  }

});

})();

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb3RzdHJhcC5qcyIsImRhcmtyb29tLmpzIiwicGx1Z2luLmpzIiwidHJhbnNmb3JtYXRpb24uanMiLCJ1aS5qcyIsInV0aWxzLmpzIiwiZGFya3Jvb20uaGlzdG9yeS5qcyIsImRhcmtyb29tLnJvdGF0ZS5qcyIsImRhcmtyb29tLmNyb3AuanMiLCJkYXJrcm9vbS5zYXZlLmpzIiwiZGFya3Jvb20udGV4dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0NkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0MxV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0N0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0NqTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQ2xFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQ3pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0NycUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImRhcmtyb29tLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG4vLyBJbmplY3QgU1ZHIGljb25zIGludG8gdGhlIERPTVxudmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmVsZW1lbnQuaWQgPSAnZGFya3Jvb20taWNvbnMnO1xuZWxlbWVudC5zdHlsZS5oZWlnaHQgPSAwO1xuZWxlbWVudC5zdHlsZS53aWR0aCA9IDA7XG5lbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbmVsZW1lbnQuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuZWxlbWVudC5pbm5lckhUTUwgPSAnPCEtLSBpbmplY3Q6c3ZnIC0tPjwhLS0gZW5kaW5qZWN0IC0tPic7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuXG59KSgpO1xuIiwiKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG53aW5kb3cuRGFya3Jvb20gPSBEYXJrcm9vbTtcblxuLy8gQ29yZSBvYmplY3Qgb2YgRGFya3Jvb21KUy5cbi8vIEJhc2ljYWxseSBpdCdzIGEgc2luZ2xlIG9iamVjdCwgaW5zdGFuY2lhYmxlIHZpYSBhbiBlbGVtZW50XG4vLyAoaXQgY291bGQgYmUgYSBDU1Mgc2VsZWN0b3Igb3IgYSBET00gZWxlbWVudCksIHNvbWUgY3VzdG9tIG9wdGlvbnMsXG4vLyBhbmQgYSBsaXN0IG9mIHBsdWdpbiBvYmplY3RzIChvciBub25lIHRvIHVzZSBkZWZhdWx0IG9uZXMpLlxuZnVuY3Rpb24gRGFya3Jvb20oZWxlbWVudCwgb3B0aW9ucywgcGx1Z2lucykge1xuICByZXR1cm4gdGhpcy5jb25zdHJ1Y3RvcihlbGVtZW50LCBvcHRpb25zLCBwbHVnaW5zKTtcbn1cblxuLy8gQ3JlYXRlIGFuIGVtcHR5IGxpc3Qgb2YgcGx1Z2luIG9iamVjdHMsIHdoaWNoIHdpbGwgYmUgZmlsbGVkIGJ5XG4vLyBvdGhlciBwbHVnaW4gc2NyaXB0cy4gVGhpcyBpcyB0aGUgZGVmYXVsdCBwbHVnaW4gbGlzdCBpZiBub25lIGlzXG4vLyBzcGVjaWZpZWQgaW4gRGFya3Jvb20nc3MgY29uc3RydWN0b3IuXG5EYXJrcm9vbS5wbHVnaW5zID0gW107XG5cbkRhcmtyb29tLnByb3RvdHlwZSA9IHtcbiAgLy8gUmVmZXJlbmNlIHRvIHRoZSBtYWluIGNvbnRhaW5lciBlbGVtZW50XG4gIGNvbnRhaW5lckVsZW1lbnQ6IG51bGwsXG5cbiAgLy8gUmVmZXJlbmNlIHRvIHRoZSBGYWJyaWMgY2FudmFzIG9iamVjdFxuICBjYW52YXM6IG51bGwsXG5cbiAgLy8gUmVmZXJlbmNlIHRvIHRoZSBGYWJyaWMgaW1hZ2Ugb2JqZWN0XG4gIGltYWdlOiBudWxsLFxuXG4gIC8vIFJlZmVyZW5jZSB0byB0aGUgRmFicmljIHNvdXJjZSBjYW52YXMgb2JqZWN0XG4gIHNvdXJjZUNhbnZhczogbnVsbCxcblxuICAvLyBSZWZlcmVuY2UgdG8gdGhlIEZhYnJpYyBzb3VyY2UgaW1hZ2Ugb2JqZWN0XG4gIHNvdXJjZUltYWdlOiBudWxsLFxuXG4gIC8vIFRyYWNrIG9mIHRoZSBvcmlnaW5hbCBpbWFnZSBlbGVtZW50XG4gIG9yaWdpbmFsSW1hZ2VFbGVtZW50OiBudWxsLFxuXG4gIC8vIFN0YWNrIG9mIHRyYW5zZm9ybWF0aW9ucyB0byBhcHBseSB0byB0aGUgaW1hZ2Ugc291cmNlXG4gIHRyYW5zZm9ybWF0aW9uczogW10sXG5cbiAgLy8gRGVmYXVsdCBvcHRpb25zXG4gIGRlZmF1bHRzOiB7XG4gICAgLy8gQ2FudmFzIHByb3BlcnRpZXMgKGRpbWVuc2lvbiwgcmF0aW8sIGNvbG9yKVxuICAgIG1pbldpZHRoOiBudWxsLFxuICAgIG1pbkhlaWdodDogbnVsbCxcbiAgICBtYXhXaWR0aDogbnVsbCxcbiAgICBtYXhIZWlnaHQ6IG51bGwsXG4gICAgcmF0aW86IG51bGwsXG4gICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG5cbiAgICAvLyBQbHVnaW5zIG9wdGlvbnNcbiAgICBwbHVnaW5zOiB7fSxcblxuICAgIC8vIFBvc3QtaW5pdGlhbGlzYXRpb24gY2FsbGJhY2tcbiAgICBpbml0aWFsaXplOiBmdW5jdGlvbigpIHsgLyogbm9vcCAqLyB9XG4gIH0sXG5cbiAgLy8gTGlzdCBvZiB0aGUgaW5zdGFuY2llZCBwbHVnaW5zXG4gIHBsdWdpbnM6IHt9LFxuXG4gIC8vIFRoaXMgb3B0aW9ucyBhcmUgYSBtZXJnZSBiZXR3ZWVuIGBkZWZhdWx0c2AgYW5kIHRoZSBvcHRpb25zIHBhc3NlZFxuICAvLyB0aHJvdWdoIHRoZSBjb25zdHJ1Y3RvclxuICBvcHRpb25zOiB7fSxcblxuICBjb25zdHJ1Y3RvcjogZnVuY3Rpb24oZWxlbWVudCwgb3B0aW9ucywgcGx1Z2lucykge1xuICAgIHRoaXMub3B0aW9ucyA9IERhcmtyb29tLlV0aWxzLmV4dGVuZChvcHRpb25zLCB0aGlzLmRlZmF1bHRzKTtcblxuICAgIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gJ3N0cmluZycpXG4gICAgICBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbGVtZW50KTtcbiAgICBpZiAobnVsbCA9PT0gZWxlbWVudClcbiAgICAgIHJldHVybjtcblxuICAgIHZhciBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIGltYWdlLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgLy8gSW5pdGlhbGl6ZSB0aGUgRE9NL0ZhYnJpYyBlbGVtZW50c1xuICAgICAgdGhpcy5faW5pdGlhbGl6ZURPTShlbGVtZW50KTtcbiAgICAgIHRoaXMuX2luaXRpYWxpemVJbWFnZShvcHRpb25zKTtcblxuICAgICAgLy8gVGhlbiBpbml0aWFsaXplIHRoZSBwbHVnaW5zXG4gICAgICB0aGlzLl9pbml0aWFsaXplUGx1Z2lucyhEYXJrcm9vbS5wbHVnaW5zKTtcblxuICAgICAgLy8gUHVibGljIG1ldGhvZCB0byBhZGp1c3QgaW1hZ2UgYWNjb3JkaW5nIHRvIHRoZSBjYW52YXNcbiAgICAgIHRoaXMucmVmcmVzaChmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gRXhlY3V0ZSBhIGN1c3RvbSBjYWxsYmFjayBhZnRlciBpbml0aWFsaXphdGlvblxuICAgICAgICB0aGlzLm9wdGlvbnMuaW5pdGlhbGl6ZS5iaW5kKHRoaXMpLmNhbGwoKTtcbiAgICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICB9LmJpbmQodGhpcylcblxuICAgIC8vaW1hZ2UuY3Jvc3NPcmlnaW4gPSAnYW5vbnltb3VzJztcbiAgICBpbWFnZS5zcmMgPSBlbGVtZW50LnNyYztcbiAgfSxcblxuICBzZWxmRGVzdHJveTogZnVuY3Rpb24oKSB7XG4gICAgdmFyIGNvbnRhaW5lciA9IHRoaXMuY29udGFpbmVyRWxlbWVudDtcbiAgICB2YXIgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWFnZS5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgIGNvbnRhaW5lci5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChpbWFnZSwgY29udGFpbmVyKTtcbiAgICB9XG5cbiAgICBpbWFnZS5zcmMgPSB0aGlzLnNvdXJjZUltYWdlLnRvRGF0YVVSTCgpO1xuICB9LFxuXG4gIC8vIEFkZCBhYmlsaXR5IHRvIGF0dGFjaCBldmVudCBsaXN0ZW5lciBvbiB0aGUgY29yZSBvYmplY3QuXG4gIC8vIEl0IHVzZXMgdGhlIGNhbnZhcyBlbGVtZW50IHRvIHByb2Nlc3MgZXZlbnRzLlxuICBhZGRFdmVudExpc3RlbmVyOiBmdW5jdGlvbihldmVudE5hbWUsIGNhbGxiYWNrKSB7XG4gICAgdmFyIGVsID0gdGhpcy5zb3VyY2VDYW52YXMuZ2V0RWxlbWVudCgpO1xuICAgIGlmIChlbC5hZGRFdmVudExpc3RlbmVyKXtcbiAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBjYWxsYmFjayk7XG4gICAgfSBlbHNlIGlmIChlbC5hdHRhY2hFdmVudCkge1xuICAgICAgZWwuYXR0YWNoRXZlbnQoJ29uJyArIGV2ZW50TmFtZSwgY2FsbGJhY2spO1xuICAgIH1cbiAgfSxcblxuICBkaXNwYXRjaEV2ZW50OiBmdW5jdGlvbihldmVudE5hbWUpIHtcbiAgICAvLyBVc2UgdGhlIG9sZCB3YXkgb2YgY3JlYXRpbmcgZXZlbnQgdG8gYmUgSUUgY29tcGF0aWJsZVxuICAgIC8vIFNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9HdWlkZS9FdmVudHMvQ3JlYXRpbmdfYW5kX3RyaWdnZXJpbmdfZXZlbnRzXG4gICAgdmFyIGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0V2ZW50Jyk7XG4gICAgZXZlbnQuaW5pdEV2ZW50KGV2ZW50TmFtZSwgdHJ1ZSwgdHJ1ZSk7XG5cbiAgICB0aGlzLmNhbnZhcy5nZXRFbGVtZW50KCkuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gIH0sXG5cbiAgLy8gQWRqdXN0IGltYWdlICYgY2FudmFzIGRpbWVuc2lvbiBhY2NvcmRpbmcgdG8gbWluL21heCB3aWR0aC9oZWlnaHRcbiAgLy8gYW5kIHJhdGlvIHNwZWNpZmllZCBpbiB0aGUgb3B0aW9ucy5cbiAgLy8gVGhpcyBtZXRob2Qgc2hvdWxkIGJlIGNhbGxlZCBhZnRlciBlYWNoIGltYWdlIHRyYW5zZm9ybWF0aW9uLlxuICByZWZyZXNoOiBmdW5jdGlvbihuZXh0KSB7XG4gICAgdmFyIGNsb25lID0gbmV3IEltYWdlKCk7XG4gICAgY2xvbmUub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLl9yZXBsYWNlQ3VycmVudEltYWdlKG5ldyBmYWJyaWMuSW1hZ2UoY2xvbmUpKTtcblxuICAgICAgaWYgKG5leHQpIG5leHQoKTtcbiAgICB9LmJpbmQodGhpcyk7XG4gICAgY2xvbmUuc3JjID0gdGhpcy5zb3VyY2VJbWFnZS50b0RhdGFVUkwoKTtcbiAgfSxcblxuICBfcmVwbGFjZUN1cnJlbnRJbWFnZTogZnVuY3Rpb24obmV3SW1hZ2UpIHtcbiAgICBpZiAodGhpcy5pbWFnZSkge1xuICAgICAgdGhpcy5pbWFnZS5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICB0aGlzLmltYWdlID0gbmV3SW1hZ2U7XG4gICAgdGhpcy5pbWFnZS5zZWxlY3RhYmxlID0gZmFsc2U7XG5cbiAgICAvLyBBZGp1c3Qgd2lkdGggb3IgaGVpZ2h0IGFjY29yZGluZyB0byBzcGVjaWZpZWQgcmF0aW9cbiAgICB2YXIgdmlld3BvcnQgPSBEYXJrcm9vbS5VdGlscy5jb21wdXRlSW1hZ2VWaWV3UG9ydCh0aGlzLmltYWdlKTtcbiAgICB2YXIgY2FudmFzV2lkdGggPSB2aWV3cG9ydC53aWR0aDtcbiAgICB2YXIgY2FudmFzSGVpZ2h0ID0gdmlld3BvcnQuaGVpZ2h0O1xuXG4gICAgaWYgKG51bGwgIT09IHRoaXMub3B0aW9ucy5yYXRpbykge1xuICAgICAgdmFyIGNhbnZhc1JhdGlvID0gK3RoaXMub3B0aW9ucy5yYXRpbztcbiAgICAgIHZhciBjdXJyZW50UmF0aW8gPSBjYW52YXNXaWR0aCAvIGNhbnZhc0hlaWdodDtcblxuICAgICAgaWYgKGN1cnJlbnRSYXRpbyA+IGNhbnZhc1JhdGlvKSB7XG4gICAgICAgIGNhbnZhc0hlaWdodCA9IGNhbnZhc1dpZHRoIC8gY2FudmFzUmF0aW87XG4gICAgICB9IGVsc2UgaWYgKGN1cnJlbnRSYXRpbyA8IGNhbnZhc1JhdGlvKSB7XG4gICAgICAgIGNhbnZhc1dpZHRoID0gY2FudmFzSGVpZ2h0ICogY2FudmFzUmF0aW87XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gVGhlbiBzY2FsZSB0aGUgaW1hZ2UgdG8gZml0IGludG8gZGltZW5zaW9uIGxpbWl0c1xuICAgIHZhciBzY2FsZU1pbiA9IDE7XG4gICAgdmFyIHNjYWxlTWF4ID0gMTtcbiAgICB2YXIgc2NhbGVYID0gMTtcbiAgICB2YXIgc2NhbGVZID0gMTtcblxuICAgIGlmIChudWxsICE9PSB0aGlzLm9wdGlvbnMubWF4V2lkdGggJiYgdGhpcy5vcHRpb25zLm1heFdpZHRoIDwgY2FudmFzV2lkdGgpIHtcbiAgICAgIHNjYWxlWCA9ICB0aGlzLm9wdGlvbnMubWF4V2lkdGggLyBjYW52YXNXaWR0aDtcbiAgICB9XG4gICAgaWYgKG51bGwgIT09IHRoaXMub3B0aW9ucy5tYXhIZWlnaHQgJiYgdGhpcy5vcHRpb25zLm1heEhlaWdodCA8IGNhbnZhc0hlaWdodCkge1xuICAgICAgc2NhbGVZID0gIHRoaXMub3B0aW9ucy5tYXhIZWlnaHQgLyBjYW52YXNIZWlnaHQ7XG4gICAgfVxuICAgIHNjYWxlTWluID0gTWF0aC5taW4oc2NhbGVYLCBzY2FsZVkpO1xuXG4gICAgc2NhbGVYID0gMTtcbiAgICBzY2FsZVkgPSAxO1xuICAgIGlmIChudWxsICE9PSB0aGlzLm9wdGlvbnMubWluV2lkdGggJiYgdGhpcy5vcHRpb25zLm1pbldpZHRoID4gY2FudmFzV2lkdGgpIHtcbiAgICAgIHNjYWxlWCA9ICB0aGlzLm9wdGlvbnMubWluV2lkdGggLyBjYW52YXNXaWR0aDtcbiAgICB9XG4gICAgaWYgKG51bGwgIT09IHRoaXMub3B0aW9ucy5taW5IZWlnaHQgJiYgdGhpcy5vcHRpb25zLm1pbkhlaWdodCA+IGNhbnZhc0hlaWdodCkge1xuICAgICAgc2NhbGVZID0gIHRoaXMub3B0aW9ucy5taW5IZWlnaHQgLyBjYW52YXNIZWlnaHQ7XG4gICAgfVxuICAgIHNjYWxlTWF4ID0gTWF0aC5tYXgoc2NhbGVYLCBzY2FsZVkpO1xuXG4gICAgdmFyIHNjYWxlID0gc2NhbGVNYXggKiBzY2FsZU1pbjsgLy8gb25lIHNob3VsZCBiZSBlcXVhbHMgdG8gMVxuXG4gICAgY2FudmFzV2lkdGggKj0gc2NhbGU7XG4gICAgY2FudmFzSGVpZ2h0ICo9IHNjYWxlO1xuXG4gICAgLy8gRmluYWxseSBwbGFjZSB0aGUgaW1hZ2UgaW4gdGhlIGNlbnRlciBvZiB0aGUgY2FudmFzXG4gICAgdGhpcy5pbWFnZS5zZXRTY2FsZVgoMSAqIHNjYWxlKTtcbiAgICB0aGlzLmltYWdlLnNldFNjYWxlWSgxICogc2NhbGUpO1xuICAgIHRoaXMuY2FudmFzLmFkZCh0aGlzLmltYWdlKTtcbiAgICB0aGlzLmNhbnZhcy5zZXRXaWR0aChjYW52YXNXaWR0aCk7XG4gICAgdGhpcy5jYW52YXMuc2V0SGVpZ2h0KGNhbnZhc0hlaWdodCk7XG4gICAgdGhpcy5jYW52YXMuY2VudGVyT2JqZWN0KHRoaXMuaW1hZ2UpO1xuICAgIHRoaXMuaW1hZ2Uuc2V0Q29vcmRzKCk7XG4gIH0sXG5cbiAgLy8gQXBwbHkgdGhlIHRyYW5zZm9ybWF0aW9uIG9uIHRoZSBjdXJyZW50IGltYWdlIGFuZCBzYXZlIGl0IGluIHRoZVxuICAvLyB0cmFuc2Zvcm1hdGlvbnMgc3RhY2sgKGluIG9yZGVyIHRvIHJlY29uc3RpdHV0ZSB0aGUgcHJldmlvdXMgc3RhdGVzXG4gIC8vIG9mIHRoZSBpbWFnZSkuXG4gIGFwcGx5VHJhbnNmb3JtYXRpb246IGZ1bmN0aW9uKHRyYW5zZm9ybWF0aW9uKSB7XG4gICAgdGhpcy50cmFuc2Zvcm1hdGlvbnMucHVzaCh0cmFuc2Zvcm1hdGlvbik7XG5cbiAgICB0cmFuc2Zvcm1hdGlvbi5hcHBseVRyYW5zZm9ybWF0aW9uKFxuICAgICAgdGhpcy5zb3VyY2VDYW52YXMsXG4gICAgICB0aGlzLnNvdXJjZUltYWdlLFxuICAgICAgdGhpcy5fcG9zdFRyYW5zZm9ybWF0aW9uLmJpbmQodGhpcylcbiAgICApO1xuICB9LFxuXG4gIF9wb3N0VHJhbnNmb3JtYXRpb246IGZ1bmN0aW9uKG5ld0ltYWdlKSB7XG4gICAgaWYgKG5ld0ltYWdlKVxuICAgICAgdGhpcy5zb3VyY2VJbWFnZSA9IG5ld0ltYWdlO1xuXG4gICAgdGhpcy5yZWZyZXNoKGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCdjb3JlOnRyYW5zZm9ybWF0aW9uJyk7XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfSxcblxuICAvLyBJbml0aWFsaXplIGltYWdlIGZyb20gb3JpZ2luYWwgZWxlbWVudCBwbHVzIHJlLWFwcGx5IGV2ZXJ5XG4gIC8vIHRyYW5zZm9ybWF0aW9ucy5cbiAgcmVpbml0aWFsaXplSW1hZ2U6IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICB0aGlzLnNvdXJjZUltYWdlLnJlbW92ZSgpO1xuICAgIHRoaXMuX2luaXRpYWxpemVJbWFnZShvcHRpb25zKTtcbiAgICB0aGlzLl9wb3BUcmFuc2Zvcm1hdGlvbih0aGlzLnRyYW5zZm9ybWF0aW9ucy5zbGljZSgpKVxuICB9LFxuXG4gIF9wb3BUcmFuc2Zvcm1hdGlvbjogZnVuY3Rpb24odHJhbnNmb3JtYXRpb25zKSB7XG4gICAgaWYgKDAgPT09IHRyYW5zZm9ybWF0aW9ucy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgnY29yZTpyZWluaXRpYWxpemVkJyk7XG4gICAgICB0aGlzLnJlZnJlc2goKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgdHJhbnNmb3JtYXRpb24gPSB0cmFuc2Zvcm1hdGlvbnMuc2hpZnQoKTtcblxuICAgIHZhciBuZXh0ID0gZnVuY3Rpb24obmV3SW1hZ2UpIHtcbiAgICAgIGlmIChuZXdJbWFnZSkgdGhpcy5zb3VyY2VJbWFnZSA9IG5ld0ltYWdlO1xuICAgICAgdGhpcy5fcG9wVHJhbnNmb3JtYXRpb24odHJhbnNmb3JtYXRpb25zKVxuICAgIH07XG5cbiAgICB0cmFuc2Zvcm1hdGlvbi5hcHBseVRyYW5zZm9ybWF0aW9uKFxuICAgICAgdGhpcy5zb3VyY2VDYW52YXMsXG4gICAgICB0aGlzLnNvdXJjZUltYWdlLFxuICAgICAgbmV4dC5iaW5kKHRoaXMpXG4gICAgKTtcbiAgfSxcblxuICAvLyBDcmVhdGUgdGhlIERPTSBlbGVtZW50cyBhbmQgaW5zdGFuY2lhdGUgdGhlIEZhYnJpYyBjYW52YXMuXG4gIC8vIFRoZSBpbWFnZSBlbGVtZW50IGlzIHJlcGxhY2VkIGJ5IGEgbmV3IGBkaXZgIGVsZW1lbnQuXG4gIC8vIEhvd2V2ZXIgdGhlIG9yaWdpbmFsIGltYWdlIGlzIHJlLWluamVjdGVkIGluIG9yZGVyIHRvIGtlZXAgYSB0cmFjZSBvZiBpdC5cbiAgX2luaXRpYWxpemVET006IGZ1bmN0aW9uKGltYWdlRWxlbWVudCkge1xuICAgIC8vIENvbnRhaW5lclxuICAgIHZhciBtYWluQ29udGFpbmVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1haW5Db250YWluZXJFbGVtZW50LmNsYXNzTmFtZSA9ICdkYXJrcm9vbS1jb250YWluZXInO1xuXG4gICAgLy8gVG9vbGJhclxuICAgIHZhciB0b29sYmFyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvb2xiYXJFbGVtZW50LmNsYXNzTmFtZSA9ICdkYXJrcm9vbS10b29sYmFyJztcbiAgICBtYWluQ29udGFpbmVyRWxlbWVudC5hcHBlbmRDaGlsZCh0b29sYmFyRWxlbWVudCk7XG5cbiAgICAvLyBWaWV3cG9ydCBjYW52YXNcbiAgICB2YXIgY2FudmFzQ29udGFpbmVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNhbnZhc0NvbnRhaW5lckVsZW1lbnQuY2xhc3NOYW1lID0gJ2Rhcmtyb29tLWltYWdlLWNvbnRhaW5lcic7XG4gICAgY2FudmFzQ29udGFpbmVyRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIHZhciBjYW52YXNFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgY2FudmFzQ29udGFpbmVyRWxlbWVudC5hcHBlbmRDaGlsZChjYW52YXNFbGVtZW50KTtcbiAgICBtYWluQ29udGFpbmVyRWxlbWVudC5hcHBlbmRDaGlsZChjYW52YXNDb250YWluZXJFbGVtZW50KTtcblxuICAgIC8vIFNvdXJjZSBjYW52YXNcbiAgICB2YXIgc291cmNlQ2FudmFzQ29udGFpbmVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNvdXJjZUNhbnZhc0NvbnRhaW5lckVsZW1lbnQuY2xhc3NOYW1lID0gJ2Rhcmtyb29tLXNvdXJjZS1jb250YWluZXInO1xuICAgIC8vc291cmNlQ2FudmFzQ29udGFpbmVyRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIHZhciBzb3VyY2VDYW52YXNFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgc291cmNlQ2FudmFzQ29udGFpbmVyRWxlbWVudC5hcHBlbmRDaGlsZChzb3VyY2VDYW52YXNFbGVtZW50KTtcbiAgICBtYWluQ29udGFpbmVyRWxlbWVudC5hcHBlbmRDaGlsZChzb3VyY2VDYW52YXNDb250YWluZXJFbGVtZW50KTtcblxuICAgIC8vIE9yaWdpbmFsIGltYWdlXG4gICAgaW1hZ2VFbGVtZW50LnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKG1haW5Db250YWluZXJFbGVtZW50LCBpbWFnZUVsZW1lbnQpO1xuICAgIGltYWdlRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIG1haW5Db250YWluZXJFbGVtZW50LmFwcGVuZENoaWxkKGltYWdlRWxlbWVudCk7XG5cbiAgICAvLyBJbnN0YW5jaWF0ZSBvYmplY3QgZnJvbSBlbGVtZW50c1xuICAgIHRoaXMuY29udGFpbmVyRWxlbWVudCA9IG1haW5Db250YWluZXJFbGVtZW50O1xuICAgIHRoaXMub3JpZ2luYWxJbWFnZUVsZW1lbnQgPSBpbWFnZUVsZW1lbnQ7XG5cbiAgICB0aGlzLnRvb2xiYXIgPSBuZXcgRGFya3Jvb20uVUkuVG9vbGJhcih0b29sYmFyRWxlbWVudCk7XG5cbiAgICB0aGlzLmNhbnZhcyA9IG5ldyBmYWJyaWMuQ2FudmFzKGNhbnZhc0VsZW1lbnQsIHtcbiAgICAgIHNlbGVjdGlvbjogZmFsc2UsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMub3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3JcbiAgICB9KTtcblxuICAgIHRoaXMuc291cmNlQ2FudmFzID0gbmV3IGZhYnJpYy5DYW52YXMoc291cmNlQ2FudmFzRWxlbWVudCwge1xuICAgICAgc2VsZWN0aW9uOiBmYWxzZSxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhpcy5vcHRpb25zLmJhY2tncm91bmRDb2xvclxuICAgIH0pO1xuICB9LFxuXG4gIC8vIEluc3RhbmNpYXRlIHRoZSBGYWJyaWMgaW1hZ2Ugb2JqZWN0LlxuICAvLyBUaGUgaW1hZ2UgaXMgY3JlYXRlZCBhcyBhIHN0YXRpYyBlbGVtZW50IHdpdGggbm8gY29udHJvbCxcbiAgLy8gdGhlbiBpdCBpcyBhZGQgaW4gdGhlIEZhYnJpYyBjYW52YXMgb2JqZWN0LlxuICBfaW5pdGlhbGl6ZUltYWdlOiBmdW5jdGlvbihvcHRpb25zKSB7XG5cbiAgICB0aGlzLnNvdXJjZUltYWdlID0gbmV3IGZhYnJpYy5JbWFnZSh0aGlzLm9yaWdpbmFsSW1hZ2VFbGVtZW50LCB7XG4gICAgICAvLyBTb21lIG9wdGlvbnMgdG8gbWFrZSB0aGUgaW1hZ2Ugc3RhdGljXG4gICAgICBzZWxlY3RhYmxlOiB0cnVlLFxuICAgICAgZXZlbnRlZDogdHJ1ZSxcbiAgICAgIGxvY2tNb3ZlbWVudFg6IHRydWUsXG4gICAgICBsb2NrTW92ZW1lbnRZOiB0cnVlLFxuICAgICAgbG9ja1JvdGF0aW9uOiB0cnVlLFxuICAgICAgbG9ja1NjYWxpbmdYOiB0cnVlLFxuICAgICAgbG9ja1NjYWxpbmdZOiB0cnVlLFxuICAgICAgbG9ja1VuaVNjYWxpbmc6IHRydWUsXG4gICAgICBoYXNDb250cm9sczogdHJ1ZSxcbiAgICAgIGhhc0JvcmRlcnM6IHRydWUsXG4gICAgICBvcmlnaW5YOiAnbGVmdCcsXG4gICAgICBvcmlnaW5ZOiAndG9wJ1xuICAgIH0pO1xuXG4gICAgdGhpcy5zb3VyY2VDYW52YXMuYWRkKHRoaXMuc291cmNlSW1hZ2UpO1xuICAgIFxuICAgIHZhciBzY2FsZSA9IE1hdGgubWF4KChvcHRpb25zLm1heEhlaWdodCAvIHRoaXMuc291cmNlSW1hZ2UuaGVpZ2h0KSwgKG9wdGlvbnMubWF4V2lkdGggLyB0aGlzLnNvdXJjZUltYWdlLndpZHRoKSlcblxuICAgIHRoaXMuc291cmNlSW1hZ2Uuc2V0U2NhbGVYKHNjYWxlKVxuICAgIHRoaXMuc291cmNlSW1hZ2Uuc2V0U2NhbGVZKHNjYWxlKVxuXG4gICAgLy8gQWRqdXN0IHdpZHRoIG9yIGhlaWdodCBhY2NvcmRpbmcgdG8gc3BlY2lmaWVkIHJhdGlvXG4gICAgdmFyIHZpZXdwb3J0ID0gRGFya3Jvb20uVXRpbHMuY29tcHV0ZUltYWdlVmlld1BvcnQodGhpcy5zb3VyY2VJbWFnZSk7XG4gICAgdmFyIGNhbnZhc1dpZHRoID0gdmlld3BvcnQud2lkdGg7XG4gICAgdmFyIGNhbnZhc0hlaWdodCA9IHZpZXdwb3J0LmhlaWdodDtcblxuICAgIHRoaXMuc291cmNlQ2FudmFzLnNldFdpZHRoKGNhbnZhc1dpZHRoKTtcbiAgICB0aGlzLnNvdXJjZUNhbnZhcy5zZXRIZWlnaHQoY2FudmFzSGVpZ2h0KTtcbiAgICB0aGlzLnNvdXJjZUNhbnZhcy5jZW50ZXJPYmplY3QodGhpcy5zb3VyY2VJbWFnZSk7XG4gICAgdGhpcy5zb3VyY2VJbWFnZS5zZXRDb29yZHMoKTtcbiAgfSxcblxuICAvLyBJbml0aWFsaXplIGV2ZXJ5IHBsdWdpbnMuXG4gIC8vIE5vdGUgdGhhdCBwbHVnaW5zIGFyZSBpbnN0YW5jaWF0ZWQgaW4gdGhlIHNhbWUgb3JkZXIgdGhhbiB0aGV5XG4gIC8vIGFyZSBkZWNsYXJlZCBpbiB0aGUgcGFyYW1ldGVyIG9iamVjdC5cbiAgX2luaXRpYWxpemVQbHVnaW5zOiBmdW5jdGlvbihwbHVnaW5zKSB7XG4gICAgZm9yICh2YXIgbmFtZSBpbiBwbHVnaW5zKSB7XG4gICAgICB2YXIgcGx1Z2luID0gcGx1Z2luc1tuYW1lXTtcbiAgICAgIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zLnBsdWdpbnNbbmFtZV07XG5cbiAgICAgIC8vIFNldHRpbmcgZmFsc2UgaW50byB0aGUgcGx1Z2luIG9wdGlvbnMgd2lsbCBkaXNhYmxlIHRoZSBwbHVnaW5cbiAgICAgIGlmIChvcHRpb25zID09PSBmYWxzZSlcbiAgICAgICAgY29udGludWU7XG5cbiAgICAgIC8vIEF2b2lkIGFueSBpc3N1ZXMgd2l0aCBfcHJvdG9fXG4gICAgICBpZiAoIXBsdWdpbnMuaGFzT3duUHJvcGVydHkobmFtZSkpXG4gICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICB0aGlzLnBsdWdpbnNbbmFtZV0gPSBuZXcgcGx1Z2luKHRoaXMsIG9wdGlvbnMpO1xuICAgIH1cbiAgfSxcbn1cblxufSkoKTtcbiIsIihmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxuRGFya3Jvb20uUGx1Z2luID0gUGx1Z2luO1xuXG4vLyBEZWZpbmUgYSBwbHVnaW4gb2JqZWN0LiBUaGlzIGlzIHRoZSAoYWJzdHJhY3QpIHBhcmVudCBjbGFzcyB3aGljaFxuLy8gaGFzIHRvIGJlIGV4dGVuZGVkIGZvciBlYWNoIHBsdWdpbi5cbmZ1bmN0aW9uIFBsdWdpbihkYXJrcm9vbSwgb3B0aW9ucykge1xuICB0aGlzLmRhcmtyb29tID0gZGFya3Jvb207XG4gIHRoaXMub3B0aW9ucyA9IERhcmtyb29tLlV0aWxzLmV4dGVuZChvcHRpb25zLCB0aGlzLmRlZmF1bHRzKTtcbiAgdGhpcy5pbml0aWFsaXplKCk7XG59XG5cblBsdWdpbi5wcm90b3R5cGUgPSB7XG4gIGRlZmF1bHRzOiB7fSxcbiAgaW5pdGlhbGl6ZTogZnVuY3Rpb24oKSB7IH1cbn1cblxuLy8gSW5zcGlyZWQgYnkgQmFja2JvbmUuanMgZXh0ZW5kIGNhcGFiaWxpdHkuXG5QbHVnaW4uZXh0ZW5kID0gZnVuY3Rpb24ocHJvdG9Qcm9wcykge1xuICB2YXIgcGFyZW50ID0gdGhpcztcbiAgdmFyIGNoaWxkO1xuXG4gIGlmIChwcm90b1Byb3BzICYmIHByb3RvUHJvcHMuaGFzT3duUHJvcGVydHkoJ2NvbnN0cnVjdG9yJykpIHtcbiAgICBjaGlsZCA9IHByb3RvUHJvcHMuY29uc3RydWN0b3I7XG4gIH0gZWxzZSB7XG4gICAgY2hpbGQgPSBmdW5jdGlvbigpeyByZXR1cm4gcGFyZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH07XG4gIH1cblxuICBEYXJrcm9vbS5VdGlscy5leHRlbmQoY2hpbGQsIHBhcmVudCk7XG5cbiAgdmFyIFN1cnJvZ2F0ZSA9IGZ1bmN0aW9uKCl7IHRoaXMuY29uc3RydWN0b3IgPSBjaGlsZDsgfTtcbiAgU3Vycm9nYXRlLnByb3RvdHlwZSA9IHBhcmVudC5wcm90b3R5cGU7XG4gIGNoaWxkLnByb3RvdHlwZSA9IG5ldyBTdXJyb2dhdGU7XG5cbiAgaWYgKHByb3RvUHJvcHMpIERhcmtyb29tLlV0aWxzLmV4dGVuZChjaGlsZC5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuXG4gIGNoaWxkLl9fc3VwZXJfXyA9IHBhcmVudC5wcm90b3R5cGU7XG5cbiAgcmV0dXJuIGNoaWxkO1xufVxuXG59KSgpO1xuIiwiKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG5EYXJrcm9vbS5UcmFuc2Zvcm1hdGlvbiA9IFRyYW5zZm9ybWF0aW9uO1xuXG5mdW5jdGlvbiBUcmFuc2Zvcm1hdGlvbihvcHRpb25zKSB7XG4gIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG59XG5cblRyYW5zZm9ybWF0aW9uLnByb3RvdHlwZSA9IHtcbiAgYXBwbHlUcmFuc2Zvcm1hdGlvbjogZnVuY3Rpb24oaW1hZ2UpIHsgLyogbm8tb3AgKi8gIH1cbn1cblxuLy8gSW5zcGlyZWQgYnkgQmFja2JvbmUuanMgZXh0ZW5kIGNhcGFiaWxpdHkuXG5UcmFuc2Zvcm1hdGlvbi5leHRlbmQgPSBmdW5jdGlvbihwcm90b1Byb3BzKSB7XG4gIHZhciBwYXJlbnQgPSB0aGlzO1xuICB2YXIgY2hpbGQ7XG5cbiAgaWYgKHByb3RvUHJvcHMgJiYgcHJvdG9Qcm9wcy5oYXNPd25Qcm9wZXJ0eSgnY29uc3RydWN0b3InKSkge1xuICAgIGNoaWxkID0gcHJvdG9Qcm9wcy5jb25zdHJ1Y3RvcjtcbiAgfSBlbHNlIHtcbiAgICBjaGlsZCA9IGZ1bmN0aW9uKCl7IHJldHVybiBwYXJlbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfTtcbiAgfVxuXG4gIERhcmtyb29tLlV0aWxzLmV4dGVuZChjaGlsZCwgcGFyZW50KTtcblxuICB2YXIgU3Vycm9nYXRlID0gZnVuY3Rpb24oKXsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9O1xuICBTdXJyb2dhdGUucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTtcbiAgY2hpbGQucHJvdG90eXBlID0gbmV3IFN1cnJvZ2F0ZTtcblxuICBpZiAocHJvdG9Qcm9wcykgRGFya3Jvb20uVXRpbHMuZXh0ZW5kKGNoaWxkLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG5cbiAgY2hpbGQuX19zdXBlcl9fID0gcGFyZW50LnByb3RvdHlwZTtcblxuICByZXR1cm4gY2hpbGQ7XG59XG5cbn0pKCk7XG4iLCIoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbkRhcmtyb29tLlVJID0ge1xuICBUb29sYmFyOiBUb29sYmFyLFxuICBCdXR0b25Hcm91cDogQnV0dG9uR3JvdXAsXG4gIEJ1dHRvbjogQnV0dG9uLFxufTtcblxuLy8gVG9vbGJhciBvYmplY3QuXG5mdW5jdGlvbiBUb29sYmFyKGVsZW1lbnQpIHtcbiAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbn1cblxuVG9vbGJhci5wcm90b3R5cGUgPSB7XG4gIGNyZWF0ZUJ1dHRvbkdyb3VwOiBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgdmFyIGJ1dHRvbkdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYnV0dG9uR3JvdXAuY2xhc3NOYW1lID0gJ2Rhcmtyb29tLWJ1dHRvbi1ncm91cCc7XG4gICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKGJ1dHRvbkdyb3VwKTtcblxuICAgIHJldHVybiBuZXcgQnV0dG9uR3JvdXAoYnV0dG9uR3JvdXApO1xuICB9XG59O1xuXG4vLyBCdXR0b25Hcm91cCBvYmplY3QuXG5mdW5jdGlvbiBCdXR0b25Hcm91cChlbGVtZW50KSB7XG4gIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG59XG5cbkJ1dHRvbkdyb3VwLnByb3RvdHlwZSA9IHtcbiAgY3JlYXRlQnV0dG9uOiBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgdmFyIGRlZmF1bHRzID0ge1xuICAgICAgaW1hZ2U6ICdoZWxwJyxcbiAgICAgIHR5cGU6ICdkZWZhdWx0JyxcbiAgICAgIGdyb3VwOiAnZGVmYXVsdCcsXG4gICAgICBoaWRlOiBmYWxzZSxcbiAgICAgIGRpc2FibGVkOiBmYWxzZVxuICAgIH07XG5cbiAgICBvcHRpb25zID0gRGFya3Jvb20uVXRpbHMuZXh0ZW5kKG9wdGlvbnMsIGRlZmF1bHRzKTtcblxuICAgIHZhciBidXR0b25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnV0dG9uRWxlbWVudC50eXBlID0gJ2J1dHRvbic7XG4gICAgYnV0dG9uRWxlbWVudC5jbGFzc05hbWUgPSAnZGFya3Jvb20tYnV0dG9uIGRhcmtyb29tLWJ1dHRvbi0nICsgb3B0aW9ucy50eXBlO1xuICAgIGJ1dHRvbkVsZW1lbnQuaW5uZXJIVE1MID0gJzxzdmcgY2xhc3M9XCJkYXJrcm9vbS1pY29uXCI+PHVzZSB4bGluazpocmVmPVwiIycgKyBvcHRpb25zLmltYWdlICsgJ1wiIC8+PC9zdmc+JztcbiAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQoYnV0dG9uRWxlbWVudCk7XG5cbiAgICB2YXIgYnV0dG9uID0gbmV3IEJ1dHRvbihidXR0b25FbGVtZW50KTtcbiAgICBidXR0b24uaGlkZShvcHRpb25zLmhpZGUpO1xuICAgIGJ1dHRvbi5kaXNhYmxlKG9wdGlvbnMuZGlzYWJsZWQpO1xuXG4gICAgcmV0dXJuIGJ1dHRvbjtcbiAgfSxcblxuICBjcmVhdGVTZWxlY3Q6IGZ1bmN0aW9uKG9wdGlvbnMpIHtcblxuICAgIHZhciBkZWZhdWx0cyA9IHtcbiAgICAgIGltYWdlOiAnaGVscCcsXG4gICAgICB0eXBlOiAnZGVmYXVsdCcsXG4gICAgICBncm91cDogJ2RlZmF1bHQnLFxuICAgICAgaGlkZTogZmFsc2UsXG4gICAgICBkaXNhYmxlZDogZmFsc2VcbiAgICB9O1xuICAgIHZhciBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnRhaW5lci5jbGFzc05hbWUgPSBcImRhcmtyb29tLXNlbGVjdC1jb250YWluZXJcIlxuXG4gICAgdmFyIHNlbGVjdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKVxuICAgIHNlbGVjdEVsZW1lbnQuY2xhc3NOYW1lID0gJ2Rhcmtyb29tLXNlbGVjdCdcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc2VsZWN0RWxlbWVudClcblxuICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChjb250YWluZXIpXG5cbiAgICB2YXIgc2VsZWN0ID0gbmV3IFNlbGVjdChjb250YWluZXIpO1xuXG4gICAgcmV0dXJuIHNlbGVjdDtcbiAgfVxufVxuXG5mdW5jdGlvbiBEYXJrcm9vbUVsZW1lbnQoZWxlbWVudCkge1xuICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xufVxuXG5EYXJrcm9vbUVsZW1lbnQucHJvdG90eXBlID0ge1xuICBhZGRFdmVudExpc3RlbmVyOiBmdW5jdGlvbihldmVudE5hbWUsIGxpc3RlbmVyKSB7XG4gICAgaWYgKHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKXtcbiAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgbGlzdGVuZXIpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5lbGVtZW50LmF0dGFjaEV2ZW50KSB7XG4gICAgICB0aGlzLmVsZW1lbnQuYXR0YWNoRXZlbnQoJ29uJyArIGV2ZW50TmFtZSwgbGlzdGVuZXIpO1xuICAgIH1cbiAgfSxcbiAgcmVtb3ZlRXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24oZXZlbnROYW1lLCBsaXN0ZW5lcikge1xuICAgIGlmICh0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcil7XG4gICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGxpc3RlbmVyKTtcbiAgICB9XG4gIH1cbn1cblxuLy8gQnV0dG9uIG9iamVjdC5cbmZ1bmN0aW9uIEJ1dHRvbihlbGVtZW50KSB7XG4gIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG59XG5cbkJ1dHRvbi5wcm90b3R5cGUgPSBEYXJrcm9vbUVsZW1lbnQucHJvdG90eXBlO1xuXG5CdXR0b24ucHJvdG90eXBlLmFjdGl2ZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSlcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZGFya3Jvb20tYnV0dG9uLWFjdGl2ZScpO1xuICBlbHNlXG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2Rhcmtyb29tLWJ1dHRvbi1hY3RpdmUnKTtcbn07XG5cbkJ1dHRvbi5wcm90b3R5cGUuaGlkZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSlcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZGFya3Jvb20tYnV0dG9uLWhpZGRlbicpO1xuICBlbHNlXG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2Rhcmtyb29tLWJ1dHRvbi1oaWRkZW4nKTtcbn07XG5cbkJ1dHRvbi5wcm90b3R5cGUuZGlzYWJsZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHRoaXMuZWxlbWVudC5kaXNhYmxlZCA9ICh2YWx1ZSkgPyB0cnVlIDogZmFsc2U7XG59O1xuXG5mdW5jdGlvbiBTZWxlY3QoZWxlbWVudCkge1xuICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50LmNoaWxkcmVuWzBdO1xufVxuXG5TZWxlY3QucHJvdG90eXBlID0gRGFya3Jvb21FbGVtZW50LnByb3RvdHlwZVxuU2VsZWN0LnByb3RvdHlwZS5hZGRPcHRpb25zID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBvcHRpb25zICE9PSAnb2JqZWN0Jykge3JldHVybn1cblxuICAvLyBJcyBvbmUgb2JqZWN0XG4gIGlmICghb3B0aW9ucy5sZW5ndGggJiYgb3B0aW9ucy52YWx1ZSkge1xuICAgIG9wdGlvbnMgPSBbb3B0aW9uc11cbiAgfSBlbHNlIGlmIChPYmplY3Qua2V5cyhvcHRpb25zKS5sZW5ndGggKSB7XG4gICAgb3B0aW9ucyA9IHRoaXMuX2NvbnZlcnRPYmplY3Qob3B0aW9ucylcbiAgfVxuXG4gIGZvciAodmFyIG4gPSAwOyBuIDwgb3B0aW9ucy5sZW5ndGg7IG4rKykge1xuICAgIGlmICh0eXBlb2Ygb3B0aW9uc1tuXSAhPT0gJ29iamVjdCcpIHtcbiAgICAgIG9wdGlvbnNbbl0gPSB7dmFsdWU6IG9wdGlvbnNbbl0sIGxhYmVsOiBvcHRpb25zW25dfVxuICAgIH0gZWxzZSBpZiAoIW9wdGlvbnNbbl0udmFsdWUgfHwgIW9wdGlvbnNbbl0ubGFiZWwpIHtcbiAgICAgIG9wdGlvbnNbbl0gPSB7dmFsdWU6IG9wdGlvbnNbbl0udmFsdWUgfHwgb3B0aW9uc1tuXS5sYWJlbCwgbGFiZWw6IG9wdGlvbnNbbl0udmFsdWUgfHwgb3B0aW9uc1tuXS5sYWJlbH1cbiAgICB9XG4gIH1cblxuICB2YXIgbyA9IG51bGw7XG4gIGZvciAodmFyIG4gPSAwOyBuIDwgb3B0aW9ucy5sZW5ndGg7IG4rKykge1xuICAgIGlmIChvcHRpb25zW25dLnZhbHVlICYmIG9wdGlvbnNbbl0ubGFiZWwpIHtcbiAgICAgIG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuICAgICAgby52YWx1ZSA9IG9wdGlvbnNbbl0udmFsdWVcbiAgICAgIG8uaW5uZXJIVE1MID0gb3B0aW9uc1tuXS5sYWJlbFxuICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKG8pXG4gICAgfVxuICB9XG5cbn1cblxuU2VsZWN0LnByb3RvdHlwZS5fY29udmVydE9iamVjdCA9IGZ1bmN0aW9uIChvYmopIHtcblxuICAvLyBJcyBhcnJheVxuICBpZiAodHlwZW9mIG9iai5mb3JFYWNoID09PSAnZnVuY3Rpb24nKSB7IHJldHVybiBvYmogfVxuXG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqKVxuICB2YXIgYXJyYXkgPSBbXVxuXG4gIGlmIChrZXlzLmxlbmd0aCA9PT0gMSAmJiBvYmoudmFsdWUpIHtcbiAgICByZXR1cm4gW29iamVjdF1cbiAgfVxuXG4gIGZvciAodmFyIG4gPSAwOyBuIDwga2V5cy5sZW5ndGg7IG4rKykge1xuICAgIGFycmF5W2FycmF5Lmxlbmd0aF0gPSB7dmFsdWU6IG9ialtrZXlzW25dXSwgbGFiZWw6IGtleXNbbl19XG4gIH1cblxuICByZXR1cm4gYXJyYXlcbn1cblxufSkoKTtcbiIsIihmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxuRGFya3Jvb20uVXRpbHMgPSB7XG4gIGV4dGVuZDogZXh0ZW5kLFxuICBjb21wdXRlSW1hZ2VWaWV3UG9ydDogY29tcHV0ZUltYWdlVmlld1BvcnQsXG59O1xuXG5cbi8vIFV0aWxpdHkgbWV0aG9kIHRvIGVhc2lseSBleHRlbmQgb2JqZWN0cy5cbmZ1bmN0aW9uIGV4dGVuZChiLCBhKSB7XG4gIHZhciBwcm9wO1xuICBpZiAoYiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGE7XG4gIH1cbiAgZm9yIChwcm9wIGluIGEpIHtcbiAgICBpZiAoYS5oYXNPd25Qcm9wZXJ0eShwcm9wKSAmJiBiLmhhc093blByb3BlcnR5KHByb3ApID09PSBmYWxzZSkge1xuICAgICAgYltwcm9wXSA9IGFbcHJvcF07XG4gICAgfVxuICB9XG4gIHJldHVybiBiO1xufVxuXG5mdW5jdGlvbiBjb21wdXRlSW1hZ2VWaWV3UG9ydChpbWFnZSkge1xuICByZXR1cm4ge1xuICAgIGhlaWdodDogTWF0aC5hYnMoaW1hZ2UuZ2V0V2lkdGgoKSAqIChNYXRoLnNpbihpbWFnZS5nZXRBbmdsZSgpICogTWF0aC5QSS8xODApKSkgKyBNYXRoLmFicyhpbWFnZS5nZXRIZWlnaHQoKSAqIChNYXRoLmNvcyhpbWFnZS5nZXRBbmdsZSgpICogTWF0aC5QSS8xODApKSksXG4gICAgd2lkdGg6IE1hdGguYWJzKGltYWdlLmdldEhlaWdodCgpICogKE1hdGguc2luKGltYWdlLmdldEFuZ2xlKCkgKiBNYXRoLlBJLzE4MCkpKSArIE1hdGguYWJzKGltYWdlLmdldFdpZHRoKCkgKiAoTWF0aC5jb3MoaW1hZ2UuZ2V0QW5nbGUoKSAqIE1hdGguUEkvMTgwKSkpLFxuICB9XG59XG5cbn0pKCk7XG4iLCI7KGZ1bmN0aW9uKHdpbmRvdywgZG9jdW1lbnQsIERhcmtyb29tLCBmYWJyaWMpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIERhcmtyb29tLnBsdWdpbnNbJ2hpc3RvcnknXSA9IERhcmtyb29tLlBsdWdpbi5leHRlbmQoe1xuICAgIHVuZG9UcmFuc2Zvcm1hdGlvbnM6IFtdLFxuXG4gICAgaW5pdGlhbGl6ZTogZnVuY3Rpb24gSW5pdERhcmtyb29tSGlzdG9yeVBsdWdpbigpIHtcbiAgICAgIHRoaXMuX2luaXRCdXR0b25zKCk7XG5cbiAgICAgIHRoaXMuZGFya3Jvb20uYWRkRXZlbnRMaXN0ZW5lcignY29yZTp0cmFuc2Zvcm1hdGlvbicsIHRoaXMuX29uVHJhbmZvcm1hdGlvbkFwcGxpZWQuYmluZCh0aGlzKSk7XG4gICAgfSxcblxuICAgIHVuZG86IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHRoaXMuZGFya3Jvb20udHJhbnNmb3JtYXRpb25zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBsYXN0VHJhbnNmb3JtYXRpb24gPSB0aGlzLmRhcmtyb29tLnRyYW5zZm9ybWF0aW9ucy5wb3AoKTtcbiAgICAgIHRoaXMudW5kb1RyYW5zZm9ybWF0aW9ucy51bnNoaWZ0KGxhc3RUcmFuc2Zvcm1hdGlvbik7XG5cbiAgICAgIHRoaXMuZGFya3Jvb20ucmVpbml0aWFsaXplSW1hZ2UoKTtcbiAgICAgIHRoaXMuX3VwZGF0ZUJ1dHRvbnMoKTtcbiAgICB9LFxuXG4gICAgcmVkbzogZnVuY3Rpb24oKSB7XG4gICAgICBpZiAodGhpcy51bmRvVHJhbnNmb3JtYXRpb25zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBjYW5jZWxUcmFuc2Zvcm1hdGlvbiA9IHRoaXMudW5kb1RyYW5zZm9ybWF0aW9ucy5zaGlmdCgpO1xuICAgICAgdGhpcy5kYXJrcm9vbS50cmFuc2Zvcm1hdGlvbnMucHVzaChjYW5jZWxUcmFuc2Zvcm1hdGlvbik7XG5cbiAgICAgIHRoaXMuZGFya3Jvb20ucmVpbml0aWFsaXplSW1hZ2UoKTtcbiAgICAgIHRoaXMuX3VwZGF0ZUJ1dHRvbnMoKTtcbiAgICB9LFxuXG4gICAgX2luaXRCdXR0b25zOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBidXR0b25Hcm91cCA9IHRoaXMuZGFya3Jvb20udG9vbGJhci5jcmVhdGVCdXR0b25Hcm91cCgpO1xuXG4gICAgICB0aGlzLmJhY2tCdXR0b24gPSBidXR0b25Hcm91cC5jcmVhdGVCdXR0b24oe1xuICAgICAgICBpbWFnZTogJ3VuZG8nLFxuICAgICAgICBkaXNhYmxlZDogdHJ1ZVxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuZm9yd2FyZEJ1dHRvbiA9IGJ1dHRvbkdyb3VwLmNyZWF0ZUJ1dHRvbih7XG4gICAgICAgIGltYWdlOiAncmVkbycsXG4gICAgICAgIGRpc2FibGVkOiB0cnVlXG4gICAgICB9KTtcblxuICAgICAgdGhpcy5iYWNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy51bmRvLmJpbmQodGhpcykpO1xuICAgICAgdGhpcy5mb3J3YXJkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5yZWRvLmJpbmQodGhpcykpO1xuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgX3VwZGF0ZUJ1dHRvbnM6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5iYWNrQnV0dG9uLmRpc2FibGUoKHRoaXMuZGFya3Jvb20udHJhbnNmb3JtYXRpb25zLmxlbmd0aCA9PT0gMCkpXG4gICAgICB0aGlzLmZvcndhcmRCdXR0b24uZGlzYWJsZSgodGhpcy51bmRvVHJhbnNmb3JtYXRpb25zLmxlbmd0aCA9PT0gMCkpXG4gICAgfSxcblxuICAgIF9vblRyYW5mb3JtYXRpb25BcHBsaWVkOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMudW5kb1RyYW5zZm9ybWF0aW9ucyA9IFtdO1xuICAgICAgdGhpcy5fdXBkYXRlQnV0dG9ucygpO1xuICAgIH1cbiAgfSk7XG59KSh3aW5kb3csIGRvY3VtZW50LCBEYXJrcm9vbSwgZmFicmljKTtcbiIsIihmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxudmFyIFJvdGF0aW9uID0gRGFya3Jvb20uVHJhbnNmb3JtYXRpb24uZXh0ZW5kKHtcbiAgYXBwbHlUcmFuc2Zvcm1hdGlvbjogZnVuY3Rpb24oY2FudmFzLCBpbWFnZSwgbmV4dCkge1xuICAgIHZhciBhbmdsZSA9IChpbWFnZS5nZXRBbmdsZSgpICsgdGhpcy5vcHRpb25zLmFuZ2xlKSAlIDM2MDtcbiAgICBpbWFnZS5yb3RhdGUoYW5nbGUpO1xuXG4gICAgdmFyIHdpZHRoLCBoZWlnaHQ7XG4gICAgaGVpZ2h0ID0gTWF0aC5hYnMoaW1hZ2UuZ2V0V2lkdGgoKSooTWF0aC5zaW4oYW5nbGUqTWF0aC5QSS8xODApKSkrTWF0aC5hYnMoaW1hZ2UuZ2V0SGVpZ2h0KCkqKE1hdGguY29zKGFuZ2xlKk1hdGguUEkvMTgwKSkpO1xuICAgIHdpZHRoID0gTWF0aC5hYnMoaW1hZ2UuZ2V0SGVpZ2h0KCkqKE1hdGguc2luKGFuZ2xlKk1hdGguUEkvMTgwKSkpK01hdGguYWJzKGltYWdlLmdldFdpZHRoKCkqKE1hdGguY29zKGFuZ2xlKk1hdGguUEkvMTgwKSkpO1xuXG4gICAgY2FudmFzLnNldFdpZHRoKHdpZHRoKTtcbiAgICBjYW52YXMuc2V0SGVpZ2h0KGhlaWdodCk7XG5cbiAgICBjYW52YXMuY2VudGVyT2JqZWN0KGltYWdlKTtcbiAgICBpbWFnZS5zZXRDb29yZHMoKTtcbiAgICBjYW52YXMucmVuZGVyQWxsKCk7XG5cbiAgICBuZXh0KCk7XG4gIH1cbn0pO1xuXG5EYXJrcm9vbS5wbHVnaW5zWydyb3RhdGUnXSA9IERhcmtyb29tLlBsdWdpbi5leHRlbmQoe1xuXG4gIGluaXRpYWxpemU6IGZ1bmN0aW9uIEluaXREYXJrcm9vbVJvdGF0ZVBsdWdpbigpIHtcbiAgICB2YXIgYnV0dG9uR3JvdXAgPSB0aGlzLmRhcmtyb29tLnRvb2xiYXIuY3JlYXRlQnV0dG9uR3JvdXAoKTtcblxuICAgIHZhciBsZWZ0QnV0dG9uID0gYnV0dG9uR3JvdXAuY3JlYXRlQnV0dG9uKHtcbiAgICAgIGltYWdlOiAncm90YXRlLWxlZnQnXG4gICAgfSk7XG5cbiAgICB2YXIgcmlnaHRCdXR0b24gPSBidXR0b25Hcm91cC5jcmVhdGVCdXR0b24oe1xuICAgICAgaW1hZ2U6ICdyb3RhdGUtcmlnaHQnXG4gICAgfSk7XG5cbiAgICBsZWZ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5yb3RhdGVMZWZ0LmJpbmQodGhpcykpO1xuICAgIHJpZ2h0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5yb3RhdGVSaWdodC5iaW5kKHRoaXMpKTtcbiAgfSxcblxuICByb3RhdGVMZWZ0OiBmdW5jdGlvbiByb3RhdGVMZWZ0KCkge1xuICAgIHRoaXMucm90YXRlKC05MCk7XG4gIH0sXG5cbiAgcm90YXRlUmlnaHQ6IGZ1bmN0aW9uIHJvdGF0ZVJpZ2h0KCkge1xuICAgIHRoaXMucm90YXRlKDkwKTtcbiAgfSxcblxuICByb3RhdGU6IGZ1bmN0aW9uIHJvdGF0ZShhbmdsZSkge1xuICAgIHRoaXMuZGFya3Jvb20uYXBwbHlUcmFuc2Zvcm1hdGlvbihcbiAgICAgIG5ldyBSb3RhdGlvbih7YW5nbGU6IGFuZ2xlfSlcbiAgICApO1xuICB9XG5cbn0pO1xuXG59KSgpO1xuIiwiKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgQ3JvcCA9IERhcmtyb29tLlRyYW5zZm9ybWF0aW9uLmV4dGVuZCh7XG4gIGFwcGx5VHJhbnNmb3JtYXRpb246IGZ1bmN0aW9uKGNhbnZhcywgaW1hZ2UsIG5leHQpIHtcbiAgICAvLyBTbmFwc2hvdCB0aGUgaW1hZ2UgZGVsaW1pdGVkIGJ5IHRoZSBjcm9wIHpvbmVcbiAgICB2YXIgc25hcHNob3QgPSBuZXcgSW1hZ2UoKTtcbiAgICBzbmFwc2hvdC5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgIC8vIFZhbGlkYXRlIGltYWdlXG4gICAgICBpZiAoaGVpZ2h0IDwgMSB8fCB3aWR0aCA8IDEpXG4gICAgICAgIHJldHVybjtcblxuICAgICAgdmFyIGltZ0luc3RhbmNlID0gbmV3IGZhYnJpYy5JbWFnZSh0aGlzLCB7XG4gICAgICAgIC8vIG9wdGlvbnMgdG8gbWFrZSB0aGUgaW1hZ2Ugc3RhdGljXG4gICAgICAgIHNlbGVjdGFibGU6IGZhbHNlLFxuICAgICAgICBldmVudGVkOiBmYWxzZSxcbiAgICAgICAgbG9ja01vdmVtZW50WDogdHJ1ZSxcbiAgICAgICAgbG9ja01vdmVtZW50WTogdHJ1ZSxcbiAgICAgICAgbG9ja1JvdGF0aW9uOiB0cnVlLFxuICAgICAgICBsb2NrU2NhbGluZ1g6IHRydWUsXG4gICAgICAgIGxvY2tTY2FsaW5nWTogdHJ1ZSxcbiAgICAgICAgbG9ja1VuaVNjYWxpbmc6IHRydWUsXG4gICAgICAgIGhhc0NvbnRyb2xzOiBmYWxzZSxcbiAgICAgICAgaGFzQm9yZGVyczogZmFsc2VcbiAgICAgIH0pO1xuXG4gICAgICB2YXIgd2lkdGggPSB0aGlzLndpZHRoO1xuICAgICAgdmFyIGhlaWdodCA9IHRoaXMuaGVpZ2h0O1xuXG4gICAgICAvLyBVcGRhdGUgY2FudmFzIHNpemVcbiAgICAgIGNhbnZhcy5zZXRXaWR0aCh3aWR0aCk7XG4gICAgICBjYW52YXMuc2V0SGVpZ2h0KGhlaWdodCk7XG5cbiAgICAgIC8vIEFkZCBpbWFnZVxuICAgICAgaW1hZ2UucmVtb3ZlKCk7XG4gICAgICBjYW52YXMuYWRkKGltZ0luc3RhbmNlKTtcblxuICAgICAgbmV4dChpbWdJbnN0YW5jZSk7XG4gICAgfTtcblxuICAgIHZhciB2aWV3cG9ydCA9IERhcmtyb29tLlV0aWxzLmNvbXB1dGVJbWFnZVZpZXdQb3J0KGltYWdlKTtcbiAgICB2YXIgaW1hZ2VXaWR0aCA9IHZpZXdwb3J0LndpZHRoO1xuICAgIHZhciBpbWFnZUhlaWdodCA9IHZpZXdwb3J0LmhlaWdodDtcblxuICAgIHZhciBsZWZ0ID0gdGhpcy5vcHRpb25zLmxlZnQgKiBpbWFnZVdpZHRoO1xuICAgIHZhciB0b3AgPSB0aGlzLm9wdGlvbnMudG9wICogaW1hZ2VIZWlnaHQ7XG4gICAgdmFyIHdpZHRoID0gTWF0aC5taW4odGhpcy5vcHRpb25zLndpZHRoICogaW1hZ2VXaWR0aCwgaW1hZ2VXaWR0aCAtIGxlZnQpO1xuICAgIHZhciBoZWlnaHQgPSBNYXRoLm1pbih0aGlzLm9wdGlvbnMuaGVpZ2h0ICogaW1hZ2VIZWlnaHQsIGltYWdlSGVpZ2h0IC0gdG9wKTtcblxuICAgIHNuYXBzaG90LnNyYyA9IGNhbnZhcy50b0RhdGFVUkwoe1xuICAgICAgbGVmdDogbGVmdCxcbiAgICAgIHRvcDogdG9wLFxuICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgfSk7XG4gIH1cbn0pO1xuXG52YXIgQ3JvcFpvbmUgPSBmYWJyaWMudXRpbC5jcmVhdGVDbGFzcyhmYWJyaWMuUmVjdCwge1xuICBfcmVuZGVyOiBmdW5jdGlvbihjdHgpIHtcbiAgICB0aGlzLmNhbGxTdXBlcignX3JlbmRlcicsIGN0eCk7XG5cbiAgICB2YXIgY2FudmFzID0gY3R4LmNhbnZhcztcbiAgICB2YXIgZGFzaFdpZHRoID0gNztcblxuICAgIC8vIFNldCBvcmlnaW5hbCBzY2FsZVxuICAgIHZhciBmbGlwWCA9IHRoaXMuZmxpcFggPyAtMSA6IDE7XG4gICAgdmFyIGZsaXBZID0gdGhpcy5mbGlwWSA/IC0xIDogMTtcbiAgICB2YXIgc2NhbGVYID0gZmxpcFggLyB0aGlzLnNjYWxlWDtcbiAgICB2YXIgc2NhbGVZID0gZmxpcFkgLyB0aGlzLnNjYWxlWTtcblxuICAgIGN0eC5zY2FsZShzY2FsZVgsIHNjYWxlWSk7XG5cbiAgICAvLyBPdmVybGF5IHJlbmRlcmluZ1xuICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSgwLCAwLCAwLCAwLjUpJztcbiAgICB0aGlzLl9yZW5kZXJPdmVybGF5KGN0eCk7XG5cbiAgICAvLyBTZXQgZGFzaGVkIGJvcmRlcnNcbiAgICBpZiAoY3R4LnNldExpbmVEYXNoICE9PSB1bmRlZmluZWQpXG4gICAgICBjdHguc2V0TGluZURhc2goW2Rhc2hXaWR0aCwgZGFzaFdpZHRoXSk7XG4gICAgZWxzZSBpZiAoY3R4Lm1vekRhc2ggIT09IHVuZGVmaW5lZClcbiAgICAgIGN0eC5tb3pEYXNoID0gW2Rhc2hXaWR0aCwgZGFzaFdpZHRoXTtcblxuICAgIC8vIEZpcnN0IGxpbmVzIHJlbmRlcmluZyB3aXRoIGJsYWNrXG4gICAgY3R4LnN0cm9rZVN0eWxlID0gJ3JnYmEoMCwgMCwgMCwgMC4yKSc7XG4gICAgdGhpcy5fcmVuZGVyQm9yZGVycyhjdHgpO1xuICAgIHRoaXMuX3JlbmRlckdyaWQoY3R4KTtcblxuICAgIC8vIFJlIHJlbmRlciBsaW5lcyBpbiB3aGl0ZVxuICAgIGN0eC5saW5lRGFzaE9mZnNldCA9IGRhc2hXaWR0aDtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpJztcbiAgICB0aGlzLl9yZW5kZXJCb3JkZXJzKGN0eCk7XG4gICAgdGhpcy5fcmVuZGVyR3JpZChjdHgpO1xuXG4gICAgLy8gUmVzZXQgc2NhbGVcbiAgICBjdHguc2NhbGUoMS9zY2FsZVgsIDEvc2NhbGVZKTtcbiAgfSxcblxuICBfcmVuZGVyT3ZlcmxheTogZnVuY3Rpb24oY3R4KSB7XG4gICAgdmFyIGNhbnZhcyA9IGN0eC5jYW52YXM7XG5cbiAgICAvL1xuICAgIC8vICAgIHgwICAgIHgxICAgICAgICB4MiAgICAgIHgzXG4gICAgLy8geTAgKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLStcbiAgICAvLyAgICB8XFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcfFxuICAgIC8vICAgIHxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFx8XG4gICAgLy8geTEgKy0tLS0tLSstLS0tLS0tLS0rLS0tLS0tLStcbiAgICAvLyAgICB8XFxcXFxcXFxcXFxcfCAgICAgICAgIHxcXFxcXFxcXFxcXFxcXHxcbiAgICAvLyAgICB8XFxcXFxcXFxcXFxcfCAgICAwICAgIHxcXFxcXFxcXFxcXFxcXHxcbiAgICAvLyAgICB8XFxcXFxcXFxcXFxcfCAgICAgICAgIHxcXFxcXFxcXFxcXFxcXHxcbiAgICAvLyB5MiArLS0tLS0tKy0tLS0tLS0tLSstLS0tLS0tK1xuICAgIC8vICAgIHxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFx8XG4gICAgLy8gICAgfFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXHxcbiAgICAvLyB5MyArLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tK1xuICAgIC8vXG5cbiAgICB2YXIgeDAgPSBNYXRoLmNlaWwoLXRoaXMuZ2V0V2lkdGgoKSAvIDIgLSB0aGlzLmdldExlZnQoKSk7XG4gICAgdmFyIHgxID0gTWF0aC5jZWlsKC10aGlzLmdldFdpZHRoKCkgLyAyKTtcbiAgICB2YXIgeDIgPSBNYXRoLmNlaWwodGhpcy5nZXRXaWR0aCgpIC8gMik7XG4gICAgdmFyIHgzID0gTWF0aC5jZWlsKHRoaXMuZ2V0V2lkdGgoKSAvIDIgKyAoY2FudmFzLndpZHRoIC0gdGhpcy5nZXRXaWR0aCgpIC0gdGhpcy5nZXRMZWZ0KCkpKTtcblxuICAgIHZhciB5MCA9IE1hdGguY2VpbCgtdGhpcy5nZXRIZWlnaHQoKSAvIDIgLSB0aGlzLmdldFRvcCgpKTtcbiAgICB2YXIgeTEgPSBNYXRoLmNlaWwoLXRoaXMuZ2V0SGVpZ2h0KCkgLyAyKTtcbiAgICB2YXIgeTIgPSBNYXRoLmNlaWwodGhpcy5nZXRIZWlnaHQoKSAvIDIpO1xuICAgIHZhciB5MyA9IE1hdGguY2VpbCh0aGlzLmdldEhlaWdodCgpIC8gMiArIChjYW52YXMuaGVpZ2h0IC0gdGhpcy5nZXRIZWlnaHQoKSAtIHRoaXMuZ2V0VG9wKCkpKTtcblxuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBcbiAgICAvLyBEcmF3IG91dGVyIHJlY3RhbmdsZS5cbiAgICAvLyBOdW1iZXJzIGFyZSArLy0xIHNvIHRoYXQgb3ZlcmxheSBlZGdlcyBkb24ndCBnZXQgYmx1cnJ5LlxuICAgIGN0eC5tb3ZlVG8oeDAgLSAxLCB5MCAtIDEpO1xuICAgIGN0eC5saW5lVG8oeDMgKyAxLCB5MCAtIDEpO1xuICAgIGN0eC5saW5lVG8oeDMgKyAxLCB5MyArIDEpO1xuICAgIGN0eC5saW5lVG8oeDAgLSAxLCB5MyAtIDEpO1xuICAgIGN0eC5saW5lVG8oeDAgLSAxLCB5MCAtIDEpO1xuICAgIGN0eC5jbG9zZVBhdGgoKTtcblxuICAgIC8vIERyYXcgaW5uZXIgcmVjdGFuZ2xlLlxuICAgIGN0eC5tb3ZlVG8oeDEsIHkxKTtcbiAgICBjdHgubGluZVRvKHgxLCB5Mik7XG4gICAgY3R4LmxpbmVUbyh4MiwgeTIpO1xuICAgIGN0eC5saW5lVG8oeDIsIHkxKTtcbiAgICBjdHgubGluZVRvKHgxLCB5MSk7XG5cbiAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgY3R4LmZpbGwoKTtcbiAgfSxcblxuICBfcmVuZGVyQm9yZGVyczogZnVuY3Rpb24oY3R4KSB7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8oLXRoaXMuZ2V0V2lkdGgoKS8yLCAtdGhpcy5nZXRIZWlnaHQoKS8yKTsgLy8gdXBwZXIgbGVmdFxuICAgIGN0eC5saW5lVG8odGhpcy5nZXRXaWR0aCgpLzIsIC10aGlzLmdldEhlaWdodCgpLzIpOyAvLyB1cHBlciByaWdodFxuICAgIGN0eC5saW5lVG8odGhpcy5nZXRXaWR0aCgpLzIsIHRoaXMuZ2V0SGVpZ2h0KCkvMik7IC8vIGRvd24gcmlnaHRcbiAgICBjdHgubGluZVRvKC10aGlzLmdldFdpZHRoKCkvMiwgdGhpcy5nZXRIZWlnaHQoKS8yKTsgLy8gZG93biBsZWZ0XG4gICAgY3R4LmxpbmVUbygtdGhpcy5nZXRXaWR0aCgpLzIsIC10aGlzLmdldEhlaWdodCgpLzIpOyAvLyB1cHBlciBsZWZ0XG4gICAgY3R4LnN0cm9rZSgpO1xuICB9LFxuXG4gIF9yZW5kZXJHcmlkOiBmdW5jdGlvbihjdHgpIHtcbiAgICAvLyBWZXJ0aWNhbCBsaW5lc1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKC10aGlzLmdldFdpZHRoKCkvMiArIDEvMyAqIHRoaXMuZ2V0V2lkdGgoKSwgLXRoaXMuZ2V0SGVpZ2h0KCkvMik7XG4gICAgY3R4LmxpbmVUbygtdGhpcy5nZXRXaWR0aCgpLzIgKyAxLzMgKiB0aGlzLmdldFdpZHRoKCksIHRoaXMuZ2V0SGVpZ2h0KCkvMik7XG4gICAgY3R4LnN0cm9rZSgpO1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKC10aGlzLmdldFdpZHRoKCkvMiArIDIvMyAqIHRoaXMuZ2V0V2lkdGgoKSwgLXRoaXMuZ2V0SGVpZ2h0KCkvMik7XG4gICAgY3R4LmxpbmVUbygtdGhpcy5nZXRXaWR0aCgpLzIgKyAyLzMgKiB0aGlzLmdldFdpZHRoKCksIHRoaXMuZ2V0SGVpZ2h0KCkvMik7XG4gICAgY3R4LnN0cm9rZSgpO1xuICAgIC8vIEhvcml6b250YWwgbGluZXNcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbygtdGhpcy5nZXRXaWR0aCgpLzIsIC10aGlzLmdldEhlaWdodCgpLzIgKyAxLzMgKiB0aGlzLmdldEhlaWdodCgpKTtcbiAgICBjdHgubGluZVRvKHRoaXMuZ2V0V2lkdGgoKS8yLCAtdGhpcy5nZXRIZWlnaHQoKS8yICsgMS8zICogdGhpcy5nZXRIZWlnaHQoKSk7XG4gICAgY3R4LnN0cm9rZSgpO1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKC10aGlzLmdldFdpZHRoKCkvMiwgLXRoaXMuZ2V0SGVpZ2h0KCkvMiArIDIvMyAqIHRoaXMuZ2V0SGVpZ2h0KCkpO1xuICAgIGN0eC5saW5lVG8odGhpcy5nZXRXaWR0aCgpLzIsIC10aGlzLmdldEhlaWdodCgpLzIgKyAyLzMgKiB0aGlzLmdldEhlaWdodCgpKTtcbiAgICBjdHguc3Ryb2tlKCk7XG4gIH1cbn0pO1xuXG5EYXJrcm9vbS5wbHVnaW5zWydjcm9wJ10gPSBEYXJrcm9vbS5QbHVnaW4uZXh0ZW5kKHtcbiAgLy8gSW5pdCBwb2ludFxuICBzdGFydFg6IG51bGwsXG4gIHN0YXJ0WTogbnVsbCxcblxuICAvLyBLZXljcm9wXG4gIGlzS2V5Q3JvcGluZzogZmFsc2UsXG4gIGlzS2V5TGVmdDogZmFsc2UsXG4gIGlzS2V5VXA6IGZhbHNlLFxuXG4gIGRlZmF1bHRzOiB7XG4gICAgLy8gbWluIGNyb3AgZGltZW5zaW9uXG4gICAgbWluSGVpZ2h0OiAxLFxuICAgIG1pbldpZHRoOiAxLFxuICAgIC8vIGVuc3VyZSBjcm9wIHJhdGlvXG4gICAgcmF0aW86IG51bGwsXG4gICAgLy8gcXVpY2sgY3JvcCBmZWF0dXJlIChzZXQgYSBrZXkgY29kZSB0byBlbmFibGUgaXQpXG4gICAgcXVpY2tDcm9wS2V5OiBmYWxzZVxuICB9LFxuXG4gIGluaXRpYWxpemU6IGZ1bmN0aW9uIEluaXREYXJrcm9vbUNyb3BQbHVnaW4oKSB7XG4gICAgdmFyIGJ1dHRvbkdyb3VwID0gdGhpcy5kYXJrcm9vbS50b29sYmFyLmNyZWF0ZUJ1dHRvbkdyb3VwKCk7XG5cbiAgICB0aGlzLmNyb3BCdXR0b24gPSBidXR0b25Hcm91cC5jcmVhdGVCdXR0b24oe1xuICAgICAgaW1hZ2U6ICdjcm9wJ1xuICAgIH0pO1xuICAgIHRoaXMub2tCdXR0b24gPSBidXR0b25Hcm91cC5jcmVhdGVCdXR0b24oe1xuICAgICAgaW1hZ2U6ICdkb25lJyxcbiAgICAgIHR5cGU6ICdzdWNjZXNzJyxcbiAgICAgIGhpZGU6IHRydWVcbiAgICB9KTtcbiAgICB0aGlzLmNhbmNlbEJ1dHRvbiA9IGJ1dHRvbkdyb3VwLmNyZWF0ZUJ1dHRvbih7XG4gICAgICBpbWFnZTogJ2Nsb3NlJyxcbiAgICAgIHR5cGU6ICdkYW5nZXInLFxuICAgICAgaGlkZTogdHJ1ZVxuICAgIH0pO1xuXG4gICAgLy8gQnV0dG9ucyBjbGlja1xuICAgIHRoaXMuY3JvcEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMudG9nZ2xlQ3JvcC5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLm9rQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jcm9wQ3VycmVudFpvbmUuYmluZCh0aGlzKSk7XG4gICAgdGhpcy5jYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnJlbGVhc2VGb2N1cy5iaW5kKHRoaXMpKTtcblxuICAgIC8vIENhbnZhcyBldmVudHNcbiAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5vbignbW91c2U6ZG93bicsIHRoaXMub25Nb3VzZURvd24uYmluZCh0aGlzKSk7XG4gICAgdGhpcy5kYXJrcm9vbS5jYW52YXMub24oJ21vdXNlOm1vdmUnLCB0aGlzLm9uTW91c2VNb3ZlLmJpbmQodGhpcykpO1xuICAgIHRoaXMuZGFya3Jvb20uY2FudmFzLm9uKCdtb3VzZTp1cCcsIHRoaXMub25Nb3VzZVVwLmJpbmQodGhpcykpO1xuICAgIHRoaXMuZGFya3Jvb20uY2FudmFzLm9uKCdvYmplY3Q6bW92aW5nJywgdGhpcy5vbk9iamVjdE1vdmluZy5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5vbignb2JqZWN0OnNjYWxpbmcnLCB0aGlzLm9uT2JqZWN0U2NhbGluZy5iaW5kKHRoaXMpKTtcblxuICAgIGZhYnJpYy51dGlsLmFkZExpc3RlbmVyKGZhYnJpYy5kb2N1bWVudCwgJ2tleWRvd24nLCB0aGlzLm9uS2V5RG93bi5iaW5kKHRoaXMpKTtcbiAgICBmYWJyaWMudXRpbC5hZGRMaXN0ZW5lcihmYWJyaWMuZG9jdW1lbnQsICdrZXl1cCcsIHRoaXMub25LZXlVcC5iaW5kKHRoaXMpKTtcblxuICAgIHRoaXMuZGFya3Jvb20uYWRkRXZlbnRMaXN0ZW5lcignY29yZTp0cmFuc2Zvcm1hdGlvbicsIHRoaXMucmVsZWFzZUZvY3VzLmJpbmQodGhpcykpO1xuICB9LFxuXG4gIC8vIEF2b2lkIGNyb3Agem9uZSB0byBnbyBiZXlvbmQgdGhlIGNhbnZhcyBlZGdlc1xuICBvbk9iamVjdE1vdmluZzogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBpZiAoIXRoaXMuaGFzRm9jdXMoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBjdXJyZW50T2JqZWN0ID0gZXZlbnQudGFyZ2V0O1xuICAgIGlmIChjdXJyZW50T2JqZWN0ICE9PSB0aGlzLmNyb3Bab25lKVxuICAgICAgcmV0dXJuO1xuXG4gICAgdmFyIGNhbnZhcyA9IHRoaXMuZGFya3Jvb20uY2FudmFzO1xuICAgIHZhciB4ID0gY3VycmVudE9iamVjdC5nZXRMZWZ0KCksIHkgPSBjdXJyZW50T2JqZWN0LmdldFRvcCgpO1xuICAgIHZhciB3ID0gY3VycmVudE9iamVjdC5nZXRXaWR0aCgpLCBoID0gY3VycmVudE9iamVjdC5nZXRIZWlnaHQoKTtcbiAgICB2YXIgbWF4WCA9IGNhbnZhcy5nZXRXaWR0aCgpIC0gdztcbiAgICB2YXIgbWF4WSA9IGNhbnZhcy5nZXRIZWlnaHQoKSAtIGg7XG5cbiAgICBpZiAoeCA8IDApXG4gICAgICBjdXJyZW50T2JqZWN0LnNldCgnbGVmdCcsIDApO1xuICAgIGlmICh5IDwgMClcbiAgICAgIGN1cnJlbnRPYmplY3Quc2V0KCd0b3AnLCAwKTtcbiAgICBpZiAoeCA+IG1heFgpXG4gICAgICBjdXJyZW50T2JqZWN0LnNldCgnbGVmdCcsIG1heFgpO1xuICAgIGlmICh5ID4gbWF4WSlcbiAgICAgIGN1cnJlbnRPYmplY3Quc2V0KCd0b3AnLCBtYXhZKTtcblxuICAgIHRoaXMuZGFya3Jvb20uZGlzcGF0Y2hFdmVudCgnY3JvcDp1cGRhdGUnKTtcbiAgfSxcblxuICAvLyBQcmV2ZW50IGNyb3Agem9uZSBmcm9tIGdvaW5nIGJleW9uZCB0aGUgY2FudmFzIGVkZ2VzIChsaWtlIG1vdXNlTW92ZSlcbiAgb25PYmplY3RTY2FsaW5nOiBmdW5jdGlvbihldmVudCkge1xuICAgIGlmICghdGhpcy5oYXNGb2N1cygpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHByZXZlbnRTY2FsaW5nID0gZmFsc2U7XG4gICAgdmFyIGN1cnJlbnRPYmplY3QgPSBldmVudC50YXJnZXQ7XG4gICAgaWYgKGN1cnJlbnRPYmplY3QgIT09IHRoaXMuY3JvcFpvbmUpXG4gICAgICByZXR1cm47XG5cbiAgICB2YXIgY2FudmFzID0gdGhpcy5kYXJrcm9vbS5jYW52YXM7XG4gICAgdmFyIHBvaW50ZXIgPSBjYW52YXMuZ2V0UG9pbnRlcihldmVudC5lKTtcbiAgICB2YXIgeCA9IHBvaW50ZXIueDtcbiAgICB2YXIgeSA9IHBvaW50ZXIueTtcblxuICAgIHZhciBtaW5YID0gY3VycmVudE9iamVjdC5nZXRMZWZ0KCk7XG4gICAgdmFyIG1pblkgPSBjdXJyZW50T2JqZWN0LmdldFRvcCgpO1xuICAgIHZhciBtYXhYID0gY3VycmVudE9iamVjdC5nZXRMZWZ0KCkgKyBjdXJyZW50T2JqZWN0LmdldFdpZHRoKCk7XG4gICAgdmFyIG1heFkgPSBjdXJyZW50T2JqZWN0LmdldFRvcCgpICsgY3VycmVudE9iamVjdC5nZXRIZWlnaHQoKTtcblxuICAgIGlmIChudWxsICE9PSB0aGlzLm9wdGlvbnMucmF0aW8pIHtcbiAgICAgIGlmIChtaW5YIDwgMCB8fCBtYXhYID4gY2FudmFzLmdldFdpZHRoKCkgfHwgbWluWSA8IDAgfHwgbWF4WSA+IGNhbnZhcy5nZXRIZWlnaHQoKSkge1xuICAgICAgICBwcmV2ZW50U2NhbGluZyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1pblggPCAwIHx8IG1heFggPiBjYW52YXMuZ2V0V2lkdGgoKSB8fCBwcmV2ZW50U2NhbGluZykge1xuICAgICAgdmFyIGxhc3RTY2FsZVggPSB0aGlzLmxhc3RTY2FsZVggfHwgMTtcbiAgICAgIGN1cnJlbnRPYmplY3Quc2V0U2NhbGVYKGxhc3RTY2FsZVgpO1xuICAgIH1cbiAgICBpZiAobWluWCA8IDApIHtcbiAgICAgIGN1cnJlbnRPYmplY3Quc2V0TGVmdCgwKTtcbiAgICB9XG5cbiAgICBpZiAobWluWSA8IDAgfHwgbWF4WSA+IGNhbnZhcy5nZXRIZWlnaHQoKSB8fCBwcmV2ZW50U2NhbGluZykge1xuICAgICAgdmFyIGxhc3RTY2FsZVkgPSB0aGlzLmxhc3RTY2FsZVkgfHwgMTtcbiAgICAgIGN1cnJlbnRPYmplY3Quc2V0U2NhbGVZKGxhc3RTY2FsZVkpO1xuICAgIH1cbiAgICBpZiAobWluWSA8IDApIHtcbiAgICAgIGN1cnJlbnRPYmplY3Quc2V0VG9wKDApO1xuICAgIH1cblxuICAgIGlmIChjdXJyZW50T2JqZWN0LmdldFdpZHRoKCkgPCB0aGlzLm9wdGlvbnMubWluV2lkdGgpIHtcbiAgICAgIGN1cnJlbnRPYmplY3Quc2NhbGVUb1dpZHRoKHRoaXMub3B0aW9ucy5taW5XaWR0aCk7XG4gICAgfVxuICAgIGlmIChjdXJyZW50T2JqZWN0LmdldEhlaWdodCgpIDwgdGhpcy5vcHRpb25zLm1pbkhlaWdodCkge1xuICAgICAgY3VycmVudE9iamVjdC5zY2FsZVRvSGVpZ2h0KHRoaXMub3B0aW9ucy5taW5IZWlnaHQpO1xuICAgIH1cblxuICAgIHRoaXMubGFzdFNjYWxlWCA9IGN1cnJlbnRPYmplY3QuZ2V0U2NhbGVYKCk7XG4gICAgdGhpcy5sYXN0U2NhbGVZID0gY3VycmVudE9iamVjdC5nZXRTY2FsZVkoKTtcblxuICAgIHRoaXMuZGFya3Jvb20uZGlzcGF0Y2hFdmVudCgnY3JvcDp1cGRhdGUnKTtcbiAgfSxcblxuICAvLyBJbml0IGNyb3Agem9uZVxuICBvbk1vdXNlRG93bjogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBpZiAoIXRoaXMuaGFzRm9jdXMoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBjYW52YXMgPSB0aGlzLmRhcmtyb29tLmNhbnZhcztcblxuICAgIC8vIHJlY2FsY3VsYXRlIG9mZnNldCwgaW4gY2FzZSBjYW52YXMgd2FzIG1hbmlwdWxhdGVkIHNpbmNlIGxhc3QgYGNhbGNPZmZzZXRgXG4gICAgY2FudmFzLmNhbGNPZmZzZXQoKTtcbiAgICB2YXIgcG9pbnRlciA9IGNhbnZhcy5nZXRQb2ludGVyKGV2ZW50LmUpO1xuICAgIHZhciB4ID0gcG9pbnRlci54O1xuICAgIHZhciB5ID0gcG9pbnRlci55O1xuICAgIHZhciBwb2ludCA9IG5ldyBmYWJyaWMuUG9pbnQoeCwgeSk7XG5cbiAgICAvLyBDaGVjayBpZiB1c2VyIHdhbnQgdG8gc2NhbGUgb3IgZHJhZyB0aGUgY3JvcCB6b25lLlxuICAgIHZhciBhY3RpdmVPYmplY3QgPSBjYW52YXMuZ2V0QWN0aXZlT2JqZWN0KCk7XG4gICAgaWYgKGFjdGl2ZU9iamVjdCA9PT0gdGhpcy5jcm9wWm9uZSB8fCB0aGlzLmNyb3Bab25lLmNvbnRhaW5zUG9pbnQocG9pbnQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY2FudmFzLmRpc2NhcmRBY3RpdmVPYmplY3QoKTtcbiAgICB0aGlzLmNyb3Bab25lLnNldFdpZHRoKDApO1xuICAgIHRoaXMuY3JvcFpvbmUuc2V0SGVpZ2h0KDApO1xuICAgIHRoaXMuY3JvcFpvbmUuc2V0U2NhbGVYKDEpO1xuICAgIHRoaXMuY3JvcFpvbmUuc2V0U2NhbGVZKDEpO1xuXG4gICAgdGhpcy5zdGFydFggPSB4O1xuICAgIHRoaXMuc3RhcnRZID0geTtcbiAgfSxcblxuICAvLyBFeHRlbmQgY3JvcCB6b25lXG4gIG9uTW91c2VNb3ZlOiBmdW5jdGlvbihldmVudCkge1xuICAgIC8vIFF1aWNrIGNyb3AgZmVhdHVyZVxuICAgIGlmICh0aGlzLmlzS2V5Q3JvcGluZylcbiAgICAgIHJldHVybiB0aGlzLm9uTW91c2VNb3ZlS2V5Q3JvcChldmVudCk7XG5cbiAgICBpZiAobnVsbCA9PT0gdGhpcy5zdGFydFggfHwgbnVsbCA9PT0gdGhpcy5zdGFydFkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgY2FudmFzID0gdGhpcy5kYXJrcm9vbS5jYW52YXM7XG4gICAgdmFyIHBvaW50ZXIgPSBjYW52YXMuZ2V0UG9pbnRlcihldmVudC5lKTtcbiAgICB2YXIgeCA9IHBvaW50ZXIueDtcbiAgICB2YXIgeSA9IHBvaW50ZXIueTtcblxuICAgIHRoaXMuX3JlbmRlckNyb3Bab25lKHRoaXMuc3RhcnRYLCB0aGlzLnN0YXJ0WSwgeCwgeSk7XG4gIH0sXG5cbiAgb25Nb3VzZU1vdmVLZXlDcm9wOiBmdW5jdGlvbihldmVudCkge1xuICAgIHZhciBjYW52YXMgPSB0aGlzLmRhcmtyb29tLmNhbnZhcztcbiAgICB2YXIgem9uZSA9IHRoaXMuY3JvcFpvbmU7XG5cbiAgICB2YXIgcG9pbnRlciA9IGNhbnZhcy5nZXRQb2ludGVyKGV2ZW50LmUpO1xuICAgIHZhciB4ID0gcG9pbnRlci54O1xuICAgIHZhciB5ID0gcG9pbnRlci55O1xuXG4gICAgaWYgKCF6b25lLmxlZnQgfHwgIXpvbmUudG9wKSB7XG4gICAgICB6b25lLnNldFRvcCh5KTtcbiAgICAgIHpvbmUuc2V0TGVmdCh4KTtcbiAgICB9XG5cbiAgICB0aGlzLmlzS2V5TGVmdCA9ICB4IDwgem9uZS5sZWZ0ICsgem9uZS53aWR0aCAvIDIgO1xuICAgIHRoaXMuaXNLZXlVcCA9IHkgPCB6b25lLnRvcCArIHpvbmUuaGVpZ2h0IC8gMiA7XG5cbiAgICB0aGlzLl9yZW5kZXJDcm9wWm9uZShcbiAgICAgIE1hdGgubWluKHpvbmUubGVmdCwgeCksXG4gICAgICBNYXRoLm1pbih6b25lLnRvcCwgeSksXG4gICAgICBNYXRoLm1heCh6b25lLmxlZnQrem9uZS53aWR0aCwgeCksXG4gICAgICBNYXRoLm1heCh6b25lLnRvcCt6b25lLmhlaWdodCwgeSlcbiAgICApO1xuICB9LFxuXG4gIC8vIEZpbmlzaCBjcm9wIHpvbmVcbiAgb25Nb3VzZVVwOiBmdW5jdGlvbihldmVudCkge1xuICAgIGlmIChudWxsID09PSB0aGlzLnN0YXJ0WCB8fCBudWxsID09PSB0aGlzLnN0YXJ0WSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBjYW52YXMgPSB0aGlzLmRhcmtyb29tLmNhbnZhcztcbiAgICB0aGlzLmNyb3Bab25lLnNldENvb3JkcygpO1xuICAgIGNhbnZhcy5zZXRBY3RpdmVPYmplY3QodGhpcy5jcm9wWm9uZSk7XG4gICAgY2FudmFzLmNhbGNPZmZzZXQoKTtcblxuICAgIHRoaXMuc3RhcnRYID0gbnVsbDtcbiAgICB0aGlzLnN0YXJ0WSA9IG51bGw7XG4gIH0sXG5cbiAgb25LZXlEb3duOiBmdW5jdGlvbihldmVudCkge1xuICAgIGlmIChmYWxzZSA9PT0gdGhpcy5vcHRpb25zLnF1aWNrQ3JvcEtleSB8fCBldmVudC5rZXlDb2RlICE9PSB0aGlzLm9wdGlvbnMucXVpY2tDcm9wS2V5IHx8IHRoaXMuaXNLZXlDcm9waW5nKVxuICAgICAgcmV0dXJuO1xuXG4gICAgLy8gQWN0aXZlIHF1aWNrIGNyb3AgZmxvd1xuICAgIHRoaXMuaXNLZXlDcm9waW5nID0gdHJ1ZSA7XG4gICAgdGhpcy5kYXJrcm9vbS5jYW52YXMuZGlzY2FyZEFjdGl2ZU9iamVjdCgpO1xuICAgIHRoaXMuY3JvcFpvbmUuc2V0V2lkdGgoMCk7XG4gICAgdGhpcy5jcm9wWm9uZS5zZXRIZWlnaHQoMCk7XG4gICAgdGhpcy5jcm9wWm9uZS5zZXRTY2FsZVgoMSk7XG4gICAgdGhpcy5jcm9wWm9uZS5zZXRTY2FsZVkoMSk7XG4gICAgdGhpcy5jcm9wWm9uZS5zZXRUb3AoMCk7XG4gICAgdGhpcy5jcm9wWm9uZS5zZXRMZWZ0KDApO1xuICB9LFxuXG4gIG9uS2V5VXA6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgaWYgKGZhbHNlID09PSB0aGlzLm9wdGlvbnMucXVpY2tDcm9wS2V5IHx8IGV2ZW50LmtleUNvZGUgIT09IHRoaXMub3B0aW9ucy5xdWlja0Nyb3BLZXkgfHwgIXRoaXMuaXNLZXlDcm9waW5nKVxuICAgICAgcmV0dXJuO1xuXG4gICAgLy8gVW5hY3RpdmUgcXVpY2sgY3JvcCBmbG93XG4gICAgdGhpcy5pc0tleUNyb3BpbmcgPSBmYWxzZTtcbiAgICB0aGlzLnN0YXJ0WCA9IDE7XG4gICAgdGhpcy5zdGFydFkgPSAxO1xuICAgIHRoaXMub25Nb3VzZVVwKCk7XG4gIH0sXG5cbiAgc2VsZWN0Wm9uZTogZnVuY3Rpb24oeCwgeSwgd2lkdGgsIGhlaWdodCwgZm9yY2VEaW1lbnNpb24pIHtcbiAgICBpZiAoIXRoaXMuaGFzRm9jdXMoKSlcbiAgICAgIHRoaXMucmVxdWlyZUZvY3VzKCk7XG5cbiAgICBpZiAoIWZvcmNlRGltZW5zaW9uKSB7XG4gICAgICB0aGlzLl9yZW5kZXJDcm9wWm9uZSh4LCB5LCB4K3dpZHRoLCB5K2hlaWdodCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY3JvcFpvbmUuc2V0KHtcbiAgICAgICAgJ2xlZnQnOiB4LFxuICAgICAgICAndG9wJzogeSxcbiAgICAgICAgJ3dpZHRoJzogd2lkdGgsXG4gICAgICAgICdoZWlnaHQnOiBoZWlnaHRcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHZhciBjYW52YXMgPSB0aGlzLmRhcmtyb29tLmNhbnZhcztcbiAgICBjYW52YXMuYnJpbmdUb0Zyb250KHRoaXMuY3JvcFpvbmUpO1xuICAgIHRoaXMuY3JvcFpvbmUuc2V0Q29vcmRzKCk7XG4gICAgY2FudmFzLnNldEFjdGl2ZU9iamVjdCh0aGlzLmNyb3Bab25lKTtcbiAgICBjYW52YXMuY2FsY09mZnNldCgpO1xuXG4gICAgdGhpcy5kYXJrcm9vbS5kaXNwYXRjaEV2ZW50KCdjcm9wOnVwZGF0ZScpO1xuICB9LFxuXG4gIHRvZ2dsZUNyb3A6IGZ1bmN0aW9uKCkge1xuICAgIGlmICghdGhpcy5oYXNGb2N1cygpKVxuICAgICAgdGhpcy5yZXF1aXJlRm9jdXMoKTtcbiAgICBlbHNlXG4gICAgICB0aGlzLnJlbGVhc2VGb2N1cygpO1xuICB9LFxuXG4gIGNyb3BDdXJyZW50Wm9uZTogZnVuY3Rpb24oKSB7XG4gICAgaWYgKCF0aGlzLmhhc0ZvY3VzKCkpXG4gICAgICByZXR1cm47XG5cbiAgICAvLyBBdm9pZCBjcm9waW5nIGVtcHR5IHpvbmVcbiAgICBpZiAodGhpcy5jcm9wWm9uZS53aWR0aCA8IDEgJiYgdGhpcy5jcm9wWm9uZS5oZWlnaHQgPCAxKVxuICAgICAgcmV0dXJuO1xuXG4gICAgdmFyIGltYWdlID0gdGhpcy5kYXJrcm9vbS5pbWFnZTtcblxuICAgIC8vIENvbXB1dGUgY3JvcCB6b25lIGRpbWVuc2lvbnNcbiAgICB2YXIgdG9wID0gdGhpcy5jcm9wWm9uZS5nZXRUb3AoKSAtIGltYWdlLmdldFRvcCgpO1xuICAgIHZhciBsZWZ0ID0gdGhpcy5jcm9wWm9uZS5nZXRMZWZ0KCkgLSBpbWFnZS5nZXRMZWZ0KCk7XG4gICAgdmFyIHdpZHRoID0gdGhpcy5jcm9wWm9uZS5nZXRXaWR0aCgpO1xuICAgIHZhciBoZWlnaHQgPSB0aGlzLmNyb3Bab25lLmdldEhlaWdodCgpO1xuXG4gICAgLy8gQWRqdXN0IGRpbWVuc2lvbnMgdG8gaW1hZ2Ugb25seVxuICAgIGlmICh0b3AgPCAwKSB7XG4gICAgICBoZWlnaHQgKz0gdG9wO1xuICAgICAgdG9wID0gMDtcbiAgICB9XG5cbiAgICBpZiAobGVmdCA8IDApIHtcbiAgICAgIHdpZHRoICs9IGxlZnQ7XG4gICAgICBsZWZ0ID0gMDtcbiAgICB9XG5cbiAgICAvLyBBcHBseSBjcm9wIHRyYW5zZm9ybWF0aW9uLlxuICAgIC8vIE1ha2Ugc3VyZSB0byB1c2UgcmVsYXRpdmUgZGltZW5zaW9uIHNpbmNlIHRoZSBjcm9wIHdpbGwgYmUgYXBwbGllZFxuICAgIC8vIG9uIHRoZSBzb3VyY2UgaW1hZ2UuXG4gICAgdGhpcy5kYXJrcm9vbS5hcHBseVRyYW5zZm9ybWF0aW9uKG5ldyBDcm9wKHtcbiAgICAgIHRvcDogdG9wIC8gaW1hZ2UuZ2V0SGVpZ2h0KCksXG4gICAgICBsZWZ0OiBsZWZ0IC8gaW1hZ2UuZ2V0V2lkdGgoKSxcbiAgICAgIHdpZHRoOiB3aWR0aCAvIGltYWdlLmdldFdpZHRoKCksXG4gICAgICBoZWlnaHQ6IGhlaWdodCAvIGltYWdlLmdldEhlaWdodCgpLFxuICAgIH0pKTtcbiAgfSxcblxuICAvLyBUZXN0IHdldGhlciBjcm9wIHpvbmUgaXMgc2V0XG4gIGhhc0ZvY3VzOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5jcm9wWm9uZSAhPT0gdW5kZWZpbmVkO1xuICB9LFxuXG4gIC8vIENyZWF0ZSB0aGUgY3JvcCB6b25lXG4gIHJlcXVpcmVGb2N1czogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5jcm9wWm9uZSA9IG5ldyBDcm9wWm9uZSh7XG4gICAgICBmaWxsOiAndHJhbnNwYXJlbnQnLFxuICAgICAgaGFzQm9yZGVyczogZmFsc2UsXG4gICAgICBvcmlnaW5YOiAnbGVmdCcsXG4gICAgICBvcmlnaW5ZOiAndG9wJyxcbiAgICAgIC8vc3Ryb2tlOiAnIzQ0NCcsXG4gICAgICAvL3N0cm9rZURhc2hBcnJheTogWzUsIDVdLFxuICAgICAgLy9ib3JkZXJDb2xvcjogJyM0NDQnLFxuICAgICAgY29ybmVyQ29sb3I6ICcjNDQ0JyxcbiAgICAgIGNvcm5lclNpemU6IDgsXG4gICAgICB0cmFuc3BhcmVudENvcm5lcnM6IGZhbHNlLFxuICAgICAgbG9ja1JvdGF0aW9uOiB0cnVlLFxuICAgICAgaGFzUm90YXRpbmdQb2ludDogZmFsc2UsXG4gICAgfSk7XG5cbiAgICBpZiAobnVsbCAhPT0gdGhpcy5vcHRpb25zLnJhdGlvKSB7XG4gICAgICB0aGlzLmNyb3Bab25lLnNldCgnbG9ja1VuaVNjYWxpbmcnLCB0cnVlKTtcbiAgICB9XG5cbiAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5hZGQodGhpcy5jcm9wWm9uZSk7XG4gICAgdGhpcy5kYXJrcm9vbS5jYW52YXMuZGVmYXVsdEN1cnNvciA9ICdjcm9zc2hhaXInO1xuXG4gICAgdGhpcy5jcm9wQnV0dG9uLmFjdGl2ZSh0cnVlKTtcbiAgICB0aGlzLm9rQnV0dG9uLmhpZGUoZmFsc2UpO1xuICAgIHRoaXMuY2FuY2VsQnV0dG9uLmhpZGUoZmFsc2UpO1xuICB9LFxuXG4gIC8vIFJlbW92ZSB0aGUgY3JvcCB6b25lXG4gIHJlbGVhc2VGb2N1czogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHVuZGVmaW5lZCA9PT0gdGhpcy5jcm9wWm9uZSlcbiAgICAgIHJldHVybjtcblxuICAgIHRoaXMuY3JvcFpvbmUucmVtb3ZlKCk7XG4gICAgdGhpcy5jcm9wWm9uZSA9IHVuZGVmaW5lZDtcblxuICAgIHRoaXMuY3JvcEJ1dHRvbi5hY3RpdmUoZmFsc2UpO1xuICAgIHRoaXMub2tCdXR0b24uaGlkZSh0cnVlKTtcbiAgICB0aGlzLmNhbmNlbEJ1dHRvbi5oaWRlKHRydWUpO1xuXG4gICAgdGhpcy5kYXJrcm9vbS5jYW52YXMuZGVmYXVsdEN1cnNvciA9ICdkZWZhdWx0JztcblxuICAgIHRoaXMuZGFya3Jvb20uZGlzcGF0Y2hFdmVudCgnY3JvcDp1cGRhdGUnKTtcbiAgfSxcblxuICBfcmVuZGVyQ3JvcFpvbmU6IGZ1bmN0aW9uKGZyb21YLCBmcm9tWSwgdG9YLCB0b1kpIHtcbiAgICB2YXIgY2FudmFzID0gdGhpcy5kYXJrcm9vbS5jYW52YXM7XG5cbiAgICB2YXIgaXNSaWdodCA9ICh0b1ggPiBmcm9tWCk7XG4gICAgdmFyIGlzTGVmdCA9ICFpc1JpZ2h0O1xuICAgIHZhciBpc0Rvd24gPSAodG9ZID4gZnJvbVkpO1xuICAgIHZhciBpc1VwID0gIWlzRG93bjtcblxuICAgIHZhciBtaW5XaWR0aCA9IE1hdGgubWluKCt0aGlzLm9wdGlvbnMubWluV2lkdGgsIGNhbnZhcy5nZXRXaWR0aCgpKTtcbiAgICB2YXIgbWluSGVpZ2h0ID0gTWF0aC5taW4oK3RoaXMub3B0aW9ucy5taW5IZWlnaHQsIGNhbnZhcy5nZXRIZWlnaHQoKSk7XG5cbiAgICAvLyBEZWZpbmUgY29ybmVyIGNvb3JkaW5hdGVzXG4gICAgdmFyIGxlZnRYID0gTWF0aC5taW4oZnJvbVgsIHRvWCk7XG4gICAgdmFyIHJpZ2h0WCA9IE1hdGgubWF4KGZyb21YLCB0b1gpO1xuICAgIHZhciB0b3BZID0gTWF0aC5taW4oZnJvbVksIHRvWSk7XG4gICAgdmFyIGJvdHRvbVkgPSBNYXRoLm1heChmcm9tWSwgdG9ZKTtcblxuICAgIC8vIFJlcGxhY2UgY3VycmVudCBwb2ludCBpbnRvIHRoZSBjYW52YXNcbiAgICBsZWZ0WCA9IE1hdGgubWF4KDAsIGxlZnRYKTtcbiAgICByaWdodFggPSBNYXRoLm1pbihjYW52YXMuZ2V0V2lkdGgoKSwgcmlnaHRYKTtcbiAgICB0b3BZID0gTWF0aC5tYXgoMCwgdG9wWSlcbiAgICBib3R0b21ZID0gTWF0aC5taW4oY2FudmFzLmdldEhlaWdodCgpLCBib3R0b21ZKTtcblxuICAgIC8vIFJlY2FsaWJyYXRlIGNvb3JkaW5hdGVzIGFjY29yZGluZyB0byBnaXZlbiBvcHRpb25zXG4gICAgaWYgKHJpZ2h0WCAtIGxlZnRYIDwgbWluV2lkdGgpIHtcbiAgICAgIGlmIChpc1JpZ2h0KVxuICAgICAgICByaWdodFggPSBsZWZ0WCArIG1pbldpZHRoO1xuICAgICAgZWxzZVxuICAgICAgICBsZWZ0WCA9IHJpZ2h0WCAtIG1pbldpZHRoO1xuICAgIH1cbiAgICBpZiAoYm90dG9tWSAtIHRvcFkgPCBtaW5IZWlnaHQpIHtcbiAgICAgIGlmIChpc0Rvd24pXG4gICAgICAgIGJvdHRvbVkgPSB0b3BZICsgbWluSGVpZ2h0O1xuICAgICAgZWxzZVxuICAgICAgICB0b3BZID0gYm90dG9tWSAtIG1pbkhlaWdodDtcbiAgICB9XG5cbiAgICAvLyBUcnVuY2F0ZSB0cnVuY2F0ZSBhY2NvcmRpbmcgdG8gY2FudmFzIGRpbWVuc2lvbnNcbiAgICBpZiAobGVmdFggPCAwKSB7XG4gICAgICAvLyBUcmFuc2xhdGUgdG8gdGhlIGxlZnRcbiAgICAgIHJpZ2h0WCArPSBNYXRoLmFicyhsZWZ0WCk7XG4gICAgICBsZWZ0WCA9IDBcbiAgICB9XG4gICAgaWYgKHJpZ2h0WCA+IGNhbnZhcy5nZXRXaWR0aCgpKSB7XG4gICAgICAvLyBUcmFuc2xhdGUgdG8gdGhlIHJpZ2h0XG4gICAgICBsZWZ0WCAtPSAocmlnaHRYIC0gY2FudmFzLmdldFdpZHRoKCkpO1xuICAgICAgcmlnaHRYID0gY2FudmFzLmdldFdpZHRoKCk7XG4gICAgfVxuICAgIGlmICh0b3BZIDwgMCkge1xuICAgICAgLy8gVHJhbnNsYXRlIHRvIHRoZSBib3R0b21cbiAgICAgIGJvdHRvbVkgKz0gTWF0aC5hYnModG9wWSk7XG4gICAgICB0b3BZID0gMFxuICAgIH1cbiAgICBpZiAoYm90dG9tWSA+IGNhbnZhcy5nZXRIZWlnaHQoKSkge1xuICAgICAgLy8gVHJhbnNsYXRlIHRvIHRoZSByaWdodFxuICAgICAgdG9wWSAtPSAoYm90dG9tWSAtIGNhbnZhcy5nZXRIZWlnaHQoKSk7XG4gICAgICBib3R0b21ZID0gY2FudmFzLmdldEhlaWdodCgpO1xuICAgIH1cblxuICAgIHZhciB3aWR0aCA9IHJpZ2h0WCAtIGxlZnRYO1xuICAgIHZhciBoZWlnaHQgPSBib3R0b21ZIC0gdG9wWTtcbiAgICB2YXIgY3VycmVudFJhdGlvID0gd2lkdGggLyBoZWlnaHQ7XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLnJhdGlvICYmICt0aGlzLm9wdGlvbnMucmF0aW8gIT09IGN1cnJlbnRSYXRpbykge1xuICAgICAgdmFyIHJhdGlvID0gK3RoaXMub3B0aW9ucy5yYXRpbztcblxuICAgICAgaWYodGhpcy5pc0tleUNyb3BpbmcpIHtcbiAgICAgICAgaXNMZWZ0ID0gdGhpcy5pc0tleUxlZnQ7XG4gICAgICAgIGlzVXAgPSB0aGlzLmlzS2V5VXA7XG4gICAgICB9XG5cbiAgICAgIGlmIChjdXJyZW50UmF0aW8gPCByYXRpbykge1xuICAgICAgICB2YXIgbmV3V2lkdGggPSBoZWlnaHQgKiByYXRpbztcbiAgICAgICAgaWYgKGlzTGVmdCkge1xuICAgICAgICAgIGxlZnRYIC09IChuZXdXaWR0aCAtIHdpZHRoKTtcbiAgICAgICAgfVxuICAgICAgICB3aWR0aCA9IG5ld1dpZHRoO1xuICAgICAgfSBlbHNlIGlmIChjdXJyZW50UmF0aW8gPiByYXRpbykge1xuICAgICAgICB2YXIgbmV3SGVpZ2h0ID0gaGVpZ2h0IC8gKHJhdGlvICogaGVpZ2h0L3dpZHRoKTtcbiAgICAgICAgaWYgKGlzVXApIHtcbiAgICAgICAgICB0b3BZIC09IChuZXdIZWlnaHQgLSBoZWlnaHQpO1xuICAgICAgICB9XG4gICAgICAgIGhlaWdodCA9IG5ld0hlaWdodDtcbiAgICAgIH1cblxuICAgICAgaWYgKGxlZnRYIDwgMCkge1xuICAgICAgICBsZWZ0WCA9IDA7XG4gICAgICAgIC8vVE9ET1xuICAgICAgfVxuICAgICAgaWYgKHRvcFkgPCAwKSB7XG4gICAgICAgIHRvcFkgPSAwO1xuICAgICAgICAvL1RPRE9cbiAgICAgIH1cbiAgICAgIGlmIChsZWZ0WCArIHdpZHRoID4gY2FudmFzLmdldFdpZHRoKCkpIHtcbiAgICAgICAgdmFyIG5ld1dpZHRoID0gY2FudmFzLmdldFdpZHRoKCkgLSBsZWZ0WDtcbiAgICAgICAgaGVpZ2h0ID0gbmV3V2lkdGggKiBoZWlnaHQgLyB3aWR0aDtcbiAgICAgICAgd2lkdGggPSBuZXdXaWR0aDtcbiAgICAgICAgaWYgKGlzVXApIHtcbiAgICAgICAgICB0b3BZID0gZnJvbVkgLSBoZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICh0b3BZICsgaGVpZ2h0ID4gY2FudmFzLmdldEhlaWdodCgpKSB7XG4gICAgICAgIHZhciBuZXdIZWlnaHQgPSBjYW52YXMuZ2V0SGVpZ2h0KCkgLSB0b3BZO1xuICAgICAgICB3aWR0aCA9IHdpZHRoICogbmV3SGVpZ2h0IC8gaGVpZ2h0O1xuICAgICAgICBoZWlnaHQgPSBuZXdIZWlnaHQ7XG4gICAgICAgIGlmIChpc0xlZnQpIHtcbiAgICAgICAgICBsZWZ0WCA9IGZyb21YIC0gd2lkdGg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBcHBseSBjb29yZGluYXRlc1xuICAgIHRoaXMuY3JvcFpvbmUubGVmdCA9IGxlZnRYO1xuICAgIHRoaXMuY3JvcFpvbmUudG9wID0gdG9wWTtcbiAgICB0aGlzLmNyb3Bab25lLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5jcm9wWm9uZS5oZWlnaHQgPSBoZWlnaHQ7XG5cbiAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5icmluZ1RvRnJvbnQodGhpcy5jcm9wWm9uZSk7XG5cbiAgICB0aGlzLmRhcmtyb29tLmRpc3BhdGNoRXZlbnQoJ2Nyb3A6dXBkYXRlJyk7XG4gIH1cbn0pO1xuXG59KSgpO1xuIiwiKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG5EYXJrcm9vbS5wbHVnaW5zWydzYXZlJ10gPSBEYXJrcm9vbS5QbHVnaW4uZXh0ZW5kKHtcblxuICBkZWZhdWx0czoge1xuICAgIGNhbGxiYWNrOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZGFya3Jvb20uc2VsZkRlc3Ryb3koKTtcbiAgICB9XG4gIH0sXG5cbiAgaW5pdGlhbGl6ZTogZnVuY3Rpb24gSW5pdGlhbGl6ZURhcmtyb29tU2F2ZVBsdWdpbigpIHtcbiAgICB2YXIgYnV0dG9uR3JvdXAgPSB0aGlzLmRhcmtyb29tLnRvb2xiYXIuY3JlYXRlQnV0dG9uR3JvdXAoKTtcblxuICAgIHRoaXMuZGVzdHJveUJ1dHRvbiA9IGJ1dHRvbkdyb3VwLmNyZWF0ZUJ1dHRvbih7XG4gICAgICBpbWFnZTogJ3NhdmUnXG4gICAgfSk7XG5cbiAgICB0aGlzLmRlc3Ryb3lCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9wdGlvbnMuY2FsbGJhY2suYmluZCh0aGlzKSk7XG4gIH0sXG59KTtcblxufSkoKTtcbiIsIihmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxudmFyIFRleHRMYXllciA9IERhcmtyb29tLlRyYW5zZm9ybWF0aW9uLmV4dGVuZCh7XG4gIGFwcGx5VHJhbnNmb3JtYXRpb246IGZ1bmN0aW9uKGNhbnZhcywgaW1hZ2UsIG5leHQpIHtcblxuICAgIHZhciB0ZXh0ID0gbmV3IGZhYnJpYy5JVGV4dCgnSGVsbG8gRGFya3Jvb20hJywge1xuICAgICAgZmlsbDogJ3JnYigwLDIwMCwwKScsXG4gICAgICBzZWxlY3RhYmxlOiB0cnVlLFxuICAgICAgZXZlbnRlZDogdHJ1ZSxcbiAgICAgIGZvbnRGYW1pbHk6ICdBcmlhbCcsXG4gICAgICBpZDogRGF0ZS5ub3coKS50b1N0cmluZygpXG4gICAgfSk7XG5cbiAgICBjYW52YXMuYWRkKHRleHQpXG4gICAgY2FudmFzLmNlbnRlck9iamVjdCh0ZXh0KVxuXG4gICAgdGV4dC5zZXRDb29yZHMoKVxuXG4gICAgY2FudmFzLnJlbmRlckFsbCgpXG5cbiAgICBjYW52YXMuc2V0QWN0aXZlT2JqZWN0KHRleHQpXG5cbiAgICBuZXh0KCk7XG4gIH1cbn0pO1xuXG5EYXJrcm9vbS5wbHVnaW5zWyd0ZXh0J10gPSBEYXJrcm9vbS5QbHVnaW4uZXh0ZW5kKHtcblxuICBjYW52YXM6IG51bGwsXG4gIHNlbGVjdGVkOiBudWxsLFxuICB0ZXh0VG9vbHNCdXR0b25Hcm91cDogbnVsbCxcbiAgZm9udHM6IG51bGwsXG4gIGZvbnRTZWxlY3Q6IG51bGwsXG5cbiAgaW5pdGlhbGl6ZTogZnVuY3Rpb24gSW5pdERhcmtyb29tUm90YXRlUGx1Z2luKCkge1xuXG4gICAgdGhpcy5mb250cyA9IHRoaXMuaW5pdEZvbnRzKClcbiAgICB0aGlzLmxvYWRGb250cyh0aGlzLmZvbnRzKVxuICAgIFxuICAgIHRoaXMuaW5pdFRvb2xzKClcblxuICAgIHRoaXMuY2FudmFzID0gdGhpcy5kYXJrcm9vbS5zb3VyY2VDYW52YXNcblxuICAgIHRoaXMuY2FudmFzLm9uKCdvYmplY3Q6c2VsZWN0ZWQnLCB0aGlzLnNlbGVjdGVkTGF5ZXIuYmluZCh0aGlzKSlcbiAgICB0aGlzLmNhbnZhcy5vbignb2JqZWN0OmRlc2VsZWN0ZWQnLCB0aGlzLmRlc2VsZWN0ZWRMYXllci5iaW5kKHRoaXMpKSAgXG4gIH0sXG5cbiAgaW5pdFRvb2xzOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgYnV0dG9uR3JvdXAgPSB0aGlzLmRhcmtyb29tLnRvb2xiYXIuY3JlYXRlQnV0dG9uR3JvdXAoKTtcblxuICAgIHZhciB0ZXh0QnV0dG9uID0gYnV0dG9uR3JvdXAuY3JlYXRlQnV0dG9uKHtcbiAgICAgIGltYWdlOiAndGV4dCdcbiAgICB9KVxuXG4gICAgdGhpcy50ZXh0VG9vbHNCdXR0b25Hcm91cCA9IHRoaXMuZGFya3Jvb20udG9vbGJhci5jcmVhdGVCdXR0b25Hcm91cCgpO1xuICAgIHRoaXMudGV4dFRvb2xzQnV0dG9uR3JvdXAuZWxlbWVudC5pZCA9ICd0ZXh0VG9vbHMnXG4gICAgdGhpcy50ZXh0VG9vbHNCdXR0b25Hcm91cC5lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcblxuICAgIHZhciBib2xkQnV0dG9uID0gdGhpcy5jcmVhdGVCdXR0b24odGhpcy50ZXh0VG9vbHNCdXR0b25Hcm91cCwge2ltYWdlOiAnYm9sZCcsIHByb3BlcnR5OiAnZm9udFdlaWdodCcsIHZhbHVlOiAnYm9sZCcsIGFjdGlvbjogJ3RvZ2dsZSd9KVxuICAgIHZhciBpdGFsaWNCdXR0b24gPSB0aGlzLmNyZWF0ZUJ1dHRvbih0aGlzLnRleHRUb29sc0J1dHRvbkdyb3VwLCB7aW1hZ2U6ICdpdGFsaWMnLCBwcm9wZXJ0eTogJ2ZvbnRTdHlsZScsIHZhbHVlOiAnaXRhbGljJywgYWN0aW9uOiAndG9nZ2xlJ30pXG4gICAgdmFyIGxhcmdlckZvbnRCdXR0b24gPSB0aGlzLmNyZWF0ZUJ1dHRvbih0aGlzLnRleHRUb29sc0J1dHRvbkdyb3VwLCB7aW1hZ2U6ICdmb250c2l6ZS11cCcsIHByb3BlcnR5OiAnZm9udFNpemUnLCB2YWx1ZTogJ3grKycsIGFjdGlvbjogJ3VwZGF0ZSd9KVxuICAgIHZhciBzbWFsbGVyRm9udEJ1dHRvbiA9IHRoaXMuY3JlYXRlQnV0dG9uKHRoaXMudGV4dFRvb2xzQnV0dG9uR3JvdXAsIHtpbWFnZTogJ2ZvbnRzaXplLWRvd24nLCBwcm9wZXJ0eTogJ2ZvbnRTaXplJywgdmFsdWU6ICd4LS0nLCBhY3Rpb246ICd1cGRhdGUnfSlcblxuICAgIHRoaXMuZm9udFNlbGVjdCAgPSB0aGlzLnRleHRUb29sc0J1dHRvbkdyb3VwLmNyZWF0ZVNlbGVjdCh7fSlcbiAgICB0aGlzLmZvbnRTZWxlY3QuYWRkT3B0aW9ucyhPYmplY3Qua2V5cyh0aGlzLmZvbnRzKSlcblxuICAgIHZhciBjb2xvckJ1dHRvbiA9IHRoaXMudGV4dFRvb2xzQnV0dG9uR3JvdXAuY3JlYXRlQnV0dG9uKHt9KVxuICAgIGNvbG9yQnV0dG9uLmVsZW1lbnQuaWQgPSAnY29sb3JQaWNrZXInXG5cbiAgICB0ZXh0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5hZGRUZXh0TGF5ZXIuYmluZCh0aGlzKSlcbiAgICBib2xkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy50b29sQ2xpY2tlZC5iaW5kKHRoaXMpKVxuICAgIGl0YWxpY0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMudG9vbENsaWNrZWQuYmluZCh0aGlzKSlcbiAgICB0aGlzLmZvbnRTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5zZXRGb250RmFtaWx5LmJpbmQodGhpcykpXG4gICAgbGFyZ2VyRm9udEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMudG9vbENsaWNrZWQuYmluZCh0aGlzKSlcbiAgICBzbWFsbGVyRm9udEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMudG9vbENsaWNrZWQuYmluZCh0aGlzKSlcblxuICAgIHRoaXMuaW5pdENvbG9yUGlja2VyKClcbiAgfSxcblxuICBjcmVhdGVCdXR0b246IGZ1bmN0aW9uIChidXR0b25Hcm91cCwgb3B0aW9ucykge1xuICAgIHZhciBidXR0b24gPSB0aGlzLnRleHRUb29sc0J1dHRvbkdyb3VwLmNyZWF0ZUJ1dHRvbih7aW1hZ2U6IG9wdGlvbnMuaW1hZ2V9KVxuICAgIGlmIChvcHRpb25zLnByb3BlcnR5KSB7XG4gICAgICBidXR0b24uZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvcGVydHknLCBvcHRpb25zLnByb3BlcnR5KVxuICAgIH1cblxuICAgIGlmIChvcHRpb25zLnZhbHVlKSB7XG4gICAgICBidXR0b24uZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdmFsdWUnLCBvcHRpb25zLnZhbHVlKVxuICAgIH1cbiAgICBcbiAgICBpZiAob3B0aW9ucy5hY3Rpb24pIHtcbiAgICAgIGJ1dHRvbi5lbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1hY3Rpb24nLCBvcHRpb25zLmFjdGlvbilcbiAgICB9XG5cbiAgICByZXR1cm4gYnV0dG9uXG4gIH0sXG5cbiAgaW5pdENvbG9yUGlja2VyOiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCF3aW5kb3cuQ1ApIHtyZXR1cm59XG4gICAgdmFyIHBpY2tlciA9IG5ldyBDUChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24jY29sb3JQaWNrZXInKSk7XG5cbiAgICBwaWNrZXIub24oXCJjaGFuZ2VcIiwgZnVuY3Rpb24oY29sb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGNvbG9yKVxuICAgICAgLy90aGlzLnRhcmdldC52YWx1ZSA9ICcjJyArIGNvbG9yO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uI2NvbG9yUGlja2VyIHN2ZycpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjJyArIGNvbG9yXG4gICAgICB0aGlzLnNldFByb3BlcnR5KCdmaWxsJywgJyMnICsgY29sb3IpXG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfSxcblxuICBzZWxlY3RlZExheWVyOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICB0aGlzLnNlbGVjdGVkID0gKGV2ZW50LnRhcmdldC50eXBlID09PSAndGV4dCcgfHwgZXZlbnQudGFyZ2V0LnR5cGUgPT09ICdpLXRleHQnKSA/IGV2ZW50LnRhcmdldCA6IG51bGxcbiAgICB0aGlzLmFmdGVyU2VsZWN0ZWQodGhpcy5zZWxlY3RlZClcbiAgfSxcblxuICBkZXNlbGVjdGVkTGF5ZXI6IGZ1bmN0aW9uIChldmVudCkge1xuICAgIGNvbnNvbGUubG9nKCdkZXNlbGVjdGVkJywgZXZlbnQpXG4gIH0sXG5cbiAgYWZ0ZXJTZWxlY3RlZDogZnVuY3Rpb24gKHNlbGVjdGVkKSB7XG4gICAgaWYgKHNlbGVjdGVkKSB7XG4gICAgICB0aGlzLnRleHRUb29sc0J1dHRvbkdyb3VwLmVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudGV4dFRvb2xzQnV0dG9uR3JvdXAuZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgfVxuXG4gICAgLy8gU2VsZWN0IGNvcnJlY3QgZm9udFxuICAgIGlmIChzZWxlY3RlZCAmJiB0aGlzLmZvbnRTZWxlY3QpIHtcbiAgICAgIHZhciBmb250ID0gc2VsZWN0ZWQuZm9udEZhbWlseVxuICAgICAgdmFyIG9wdGlvbnMgPSB0aGlzLmZvbnRTZWxlY3QuZWxlbWVudC5vcHRpb25zXG5cbiAgICAgIGZvcih2YXIgbiA9IDA7IG4gPCBvcHRpb25zLmxlbmd0aDsgbisrKSB7XG4gICAgICAgIGlmIChvcHRpb25zW25dLmxhYmVsID09PSBmb250KSB7XG4gICAgICAgICAgdGhpcy5mb250U2VsZWN0LmVsZW1lbnQuc2VsZWN0ZWRJbmRleCA9IG47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgYWRkVGV4dExheWVyOiBmdW5jdGlvbiAoYW5nbGUpIHtcbiAgICB0aGlzLmRhcmtyb29tLmFwcGx5VHJhbnNmb3JtYXRpb24oXG4gICAgICBuZXcgVGV4dExheWVyKClcbiAgICApO1xuICB9LFxuXG4gIHNldEZvbnRGYW1pbHk6IGZ1bmN0aW9uIChldmVudCkge1xuICAgIGlmICh0aGlzLnNlbGVjdGVkKSB7XG4gICAgICB2YXIgb3B0aW9uID0gZXZlbnQudGFyZ2V0Lml0ZW0oZXZlbnQudGFyZ2V0LnNlbGVjdGVkSW5kZXgpXG4gICAgICB0aGlzLnNldFByb3BlcnR5KCdGb250RmFtaWx5Jywgb3B0aW9uLnZhbHVlKVxuICAgIH1cbiAgfSxcblxuICBzZXRQcm9wZXJ0eTogZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnNlbGVjdGVkKVxuICAgIGlmICh0aGlzLnNlbGVjdGVkICYmIGtleSAmJiB2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YXIgc2V0dGVyID0gJ3NldCcgKyBrZXkuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBrZXkuc2xpY2UoMSlcblxuICAgICAgdGhpcy5zZWxlY3RlZFtzZXR0ZXJdKHZhbHVlKVxuICAgICAgXG4gICAgICB0aGlzLnNlbGVjdGVkLl9pbml0RGltZW5zaW9ucygpXG4gICAgICB0aGlzLmNhbnZhcy5yZW5kZXJBbGwoKVxuICAgIH1cbiAgfSxcblxuICB0b2dnbGVQcm9wZXJ0eTogZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICBpZiAodGhpcy5zZWxlY3RlZCkge1xuICAgICAgdmFyIHZhbHVlID0gKHRoaXMuc2VsZWN0ZWRba2V5XSA9PSB2YWx1ZSkgPyAnJyA6IHZhbHVlXG4gICAgICB0aGlzLnNldFByb3BlcnR5KGtleSwgdmFsdWUpXG4gICAgfVxuICB9LFxuXG4gIHVwZGF0ZVByb3BlcnR5OiBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgIGlmICh0aGlzLnNlbGVjdGVkKSB7XG4gICAgICB2YXIgeCA9IHRoaXMuc2VsZWN0ZWRba2V5XVxuICAgICAgZXZhbCh2YWx1ZSlcblxuICAgICAgdGhpcy5zZXRQcm9wZXJ0eShrZXksIHgpXG4gICAgfVxuICB9LFxuXG4gIHRvb2xDbGlja2VkOiBmdW5jdGlvbihldmVudCkge1xuICAgIGlmICh0aGlzLnNlbGVjdGVkKSB7XG5cbiAgICAgIHZhciBwcm9wZXJ0eSAgPSBldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1wcm9wZXJ0eScpXG4gICAgICB2YXIgdmFsdWUgID0gZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdmFsdWUnKVxuXG4gICAgICB2YXIgYWN0aW9uID0gZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYWN0aW9uJylcbiAgICAgIGlmICggYWN0aW9uID09PSAndG9nZ2xlJykge1xuICAgICAgICB0aGlzLnRvZ2dsZVByb3BlcnR5KHByb3BlcnR5LCB2YWx1ZSlcbiAgICAgIH0gZWxzZSBpZiAoYWN0aW9uID09PSAndXBkYXRlJykge1xuICAgICAgICB0aGlzLnVwZGF0ZVByb3BlcnR5KHByb3BlcnR5LCB2YWx1ZSlcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgaW5pdEZvbnRzOiBmdW5jdGlvbiAoKSB7XG5cbiAgICB2YXIgZm9udFN0cmluZyA9ICdBYnJpbCtGYXRmYWNlfEFydm86NDAwLDQwMGksNzAwLDcwMGl8RHJvaWQrU2Fuczo0MDAsNzAwfEpvc2VmaW4rU2xhYjoxMDAsMTAwaSwzMDAsMzAwaSw0MDAsNDAwaSw2MDAsNjAwaSw3MDAsNzAwaXxMYXRvOjEwMCwxMDBpLDMwMCwzMDBpLDQwMCw0MDBpLDcwMCw3MDBpLDkwMCw5MDBpfE9sZCtTdGFuZGFyZCtUVDo0MDAsNDAwaSw3MDB8T3BlbitTYW5zOjMwMCwzMDBpLDQwMCw0MDBpLDYwMCw2MDBpLDcwMCw3MDBpLDgwMCw4MDBpfFBUK1NhbnM6NDAwLDQwMGksNzAwfFBUK1NlcmlmOjQwMCw0MDBpLDcwMCw3MDBpfFJhbGV3YXk6MTAwLDEwMGksMjAwLDIwMGksMzAwLDMwMGksNDAwLDQwMGksNTAwLDUwMGksNjAwLDYwMGksNzAwLDcwMGksODAwLDgwMGksOTAwfFVidW50dTozMDAsMzAwaSw0MDAsNDAwaSw1MDAsNTAwaSw3MDAsNzAwaXxWb2xsa29ybjo0MDAsNDAwaSw3MDAsNzAwaXxDYWxsaWdyYWZmaXR0aXxBcmlhbDo0MDAsNDAwaSw3MDAsNzAwaXxBcmlhbCtCbGFjazo0MDAsNDAwaXxIZWx2ZXRpY2E6MzAwLDMwMGksNDAwLDQwMGksNjAwLDYwMGl8R2VuZXZhOjQwMCw0MDBpLDYwMCw2MDBpJ1xuXG4gICAgdmFyIHVybCAgID0gJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT0nICsgZm9udFN0cmluZztcbiAgICB2YXIgbGluayAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJylcbiAgICBsaW5rLnJlbCAgPSAnc3R5bGVzaGVldCdcbiAgICBsaW5rLmhyZWYgPSB1cmxcbiAgICB2YXIgaGVhZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWQnKS5hcHBlbmRDaGlsZChsaW5rKVxuXG4gICAgdmFyIGZvbnRzID0ge31cbiAgICB2YXIgcGFydHMgPSBmb250U3RyaW5nLnNwbGl0KCd8JylcbiAgICB2YXIgdG1wID0gW11cbiAgICBmb3IgKHZhciBuID0gMDsgbiA8IHBhcnRzLmxlbmd0aDsgbisrKSB7XG4gICAgICB0bXAgPSBwYXJ0c1tuXS5zcGxpdCgnOicpXG4gICAgICBpZiAodG1wWzFdICYmIHRtcFsxXS5pbmRleE9mKCc6JykpIHtcbiAgICAgICAgZm9udHNbdG1wWzBdLnJlcGxhY2UoL1xcKy9nLCAnICcpXSA9IHRtcFsxXS5zcGxpdCgnLCcpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb250c1twYXJ0c1tuXS5yZXBsYWNlKC9cXCsvZywgJyAnKV0gPSBbJzQwMCddIC8vIE5vcm1hbCBmb250IHNpemVcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZm9udHNcbiAgfSxcblxuICBsb2FkRm9udHM6IGZ1bmN0aW9uIChmb250cykge1xuICAgIHZhciBmb250TG9hZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZm9udExvYWRDb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gMDtcbiAgICBmb250TG9hZENvbnRhaW5lci5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nXG5cbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGZvbnRzKVxuICAgIGZvciAodmFyIG4gPSAwOyBuIDwga2V5cy5sZW5ndGg7IG4rKykge1xuXG4gICAgICBmb3IodmFyIGkgPSAwOyBpIDwgZm9udHNba2V5c1tuXV0ubGVuZ3RoOyBpKyspe1xuICAgICAgICB2YXIgaXRhbGljID0gKGZvbnRzW2tleXNbbl1dW2ldLmluZGV4T2YoJ2knKSkgPiAtMVxuICAgICAgICAgIFxuICAgICAgICB2YXIgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgICBwLnN0eWxlLmZvbnRGYW1pbHkgPSBrZXlzW25dXG4gICAgICAgIHAuc3R5bGUuZm9udFdlaWdodCA9IGZvbnRzW2tleXNbbl1dW2ldLnJlcGxhY2UoJ2knLCcnKVxuICAgICAgICBpZiAoaXRhbGljKSB7XG4gICAgICAgICAgcC5zdHlsZS5mb250U3R5bGUgPSAnaXRhbGljJ1xuICAgICAgICB9XG4gICAgICAgIHAudGV4dENvbnRlbnQgPSBrZXlzW25dXG4gICAgICAgIGZvbnRMb2FkQ29udGFpbmVyLmFwcGVuZENoaWxkKHApXG4gICAgICB9XG4gICAgfVxuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmb250TG9hZENvbnRhaW5lcilcbiAgfVxuXG59KTtcblxufSkoKTtcbiJdfQ==
