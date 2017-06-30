(function() {
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

    var boldButton = this.textToolsButtonGroup.createButton({image: 'bold'})
    boldButton.element.setAttribute('data-property', 'fontWeight')
    boldButton.element.setAttribute('data-value', 'bold')
    boldButton.element.setAttribute('data-action', 'toggle')

    var italicButton = this.textToolsButtonGroup.createButton({image: 'italic'})
    italicButton.element.setAttribute('data-property', 'fontWeight')
    italicButton.element.setAttribute('data-value', 'italic')
    boldButton.element.setAttribute('data-action', 'toggle')

    this.fontSelect  = this.textToolsButtonGroup.createSelect({})
    this.fontSelect.addOptions(Object.keys(this.fonts))

    var largerFontButton = this.textToolsButtonGroup.createButton({image: 'fontsize-up'})
    largerFontButton.element.setAttribute('data-property', 'fontSize')
    largerFontButton.element.setAttribute('data-value', 'x++')
    largerFontButton.element.setAttribute('data-action', 'update')

    var smallerFontButton = this.textToolsButtonGroup.createButton({image: 'fontsize-down'})
    smallerFontButton.element.setAttribute('data-property', 'fontSize')
    smallerFontButton.element.setAttribute('data-value', 'x--')
    smallerFontButton.element.setAttribute('data-action', 'update')

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

  initColorPicker: function () {
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

      debugger;
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
