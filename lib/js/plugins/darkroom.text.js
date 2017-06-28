(function() {
'use strict';

var TextLayer = Darkroom.Transformation.extend({
  applyTransformation: function(canvas, image, next) {

    var text = new fabric.Text('Hello Darkroom!', {
      fill: 'rgb(0,200,0)',
      selectable: true,
      evented: true
    });

    canvas.add(text)
    canvas.centerObject(text)

    text.setCoords()

    canvas.renderAll();

    next();
  }
});

Darkroom.plugins['text'] = Darkroom.Plugin.extend({

  canvas: null,
  selected: null,
  textToolsButtonGroup: null,

  initialize: function InitDarkroomRotatePlugin() {
    


    var buttonGroup = this.darkroom.toolbar.createButtonGroup();

    var textButton = buttonGroup.createButton({
      image: 'text'
    })

    this.textToolsButtonGroup = this.darkroom.toolbar.createButtonGroup();
    this.textToolsButtonGroup.element.id = 'textTools'
    this.textToolsButtonGroup.element.style.display = 'none'

    var boldButton = this.textToolsButtonGroup.createButton({image: 'bold'})
    var italicButton = this.textToolsButtonGroup.createButton({image: 'italic'})

    textButton.addEventListener('click', this.addTextLayer.bind(this))
    boldButton.addEventListener('click', this.setWeight.bind(this))
    italicButton.addEventListener('click', this.setStyle.bind(this))

    this.canvas = this.darkroom.sourceCanvas

    this.canvas.on('object:selected', this.selectedLayer.bind(this))
    this.canvas.on('object:deselected', this.deselectedLayer.bind(this))
  },

  selectedLayer: function (event) {
    this.selected = (event.target.type === 'text') ? event.target : null

    this.afterSelected(this.selected)
  },

  deselectedLayer: function (event) {
    console.log('deselected', event)
  },

  afterSelected: function (selected) {
    if (selected && selected.type === 'text') {
      this.textToolsButtonGroup.element.style.display = 'inline-block'
    } else {
      this.textToolsButtonGroup.element.style.display = 'none'
    }
  },

  addTextLayer: function (angle) {
    this.darkroom.applyTransformation(
      new TextLayer()
    );
  },

  setWeight: function () {
    if (this.selected) {
      var weight = this.selected.fontWeight === 'bold' ? '' : 'bold'
      this.setProperty('FontWeight', weight)
    }
  },

  setStyle: function(){
    if (this.selected){
      var style = this.selected.fontStyle === 'italic' ? '' : 'italic'
      this.setProperty('FontStyle', style)
    }
  },

  setProperty: function (key, value) {
    console.log(this.selected)
    if (this.selected && key && value !== undefined) {
      let setter = 'set' + key.charAt(0).toUpperCase() + key.slice(1)

      this.selected[setter](value)
      this.selected._initDimensions()
      this.canvas.renderAll()
    }
  }

});

})();
