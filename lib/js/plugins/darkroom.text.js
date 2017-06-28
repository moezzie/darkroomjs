(function() {
'use strict';

var TextLayer = Darkroom.Transformation.extend({
  applyTransformation: function(canvas, image, next) {

    var text = new fabric.Text('Hello Darkroom!', {
      fill: 'rgb(0,200,0)',
      selectable: true,
      evented: true,
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

  initialize: function InitDarkroomRotatePlugin() {

    this.loadFonts(this.fonts())
    
    var buttonGroup = this.darkroom.toolbar.createButtonGroup();

    var textButton = buttonGroup.createButton({
      image: 'text'
    })

    this.textToolsButtonGroup = this.darkroom.toolbar.createButtonGroup();
    this.textToolsButtonGroup.element.id = 'textTools'
    this.textToolsButtonGroup.element.style.display = 'none'

    var boldButton = this.textToolsButtonGroup.createButton({image: 'bold'})
    var italicButton = this.textToolsButtonGroup.createButton({image: 'italic'})
    var fontSelect  = this.textToolsButtonGroup.createSelect({})

    fontSelect.addOptions(Object.keys(this.fonts()))

    textButton.addEventListener('click', this.addTextLayer.bind(this))
    boldButton.addEventListener('click', this.setWeight.bind(this))
    italicButton.addEventListener('click', this.setStyle.bind(this))
    fontSelect.addEventListener('change', this.setFontFamily.bind(this))

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

  setFontFamily: function (event) {
    if (this.selected) {
      var option = event.target.item(event.target.selectedIndex)
      this.setProperty('FontFamily', option.value)
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
  },

  fonts: function (){
    var fontString = 'Abril+Fatface|Arvo:400,400i,700,700i|Droid+Sans:400,700|Josefin+Slab:100,100i,300,300i,400,400i,600,600i,700,700i|Lato:100,100i,300,300i,400,400i,700,700i,900,900i|Old+Standard+TT:400,400i,700|Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i|PT+Sans:400,400i,700|PT+Serif:400,400i,700,700i|Raleway:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900|Ubuntu:300,300i,400,400i,500,500i,700,700i|Vollkorn:400,400i,700,700i|Calligraffitti'

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
        fonts[tmp[0].replace('+',' ')] = tmp[1].split(',')
      } else {
        fonts[parts[n].replace('+', ' ')] = ['400'] // Normal font size
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
      var p = document.createElement('p')
      p.style.fontFamily = keys[n].replace('+', ' ')
      p.textContent = keys[n]
      fontLoadContainer.appendChild(p)
    }

    document.body.appendChild(fontLoadContainer)
  }

});

})();
