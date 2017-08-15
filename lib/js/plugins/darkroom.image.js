(function() {
'use strict';

var ImageFilter = Darkroom.Transformation.extend({

  applyTransformation: function(canvas, image, next) {
    var filter = this.options.filter
    image.filters.push(filter)
    image.applyFilters()

    canvas.setWidth(width);
    canvas.setHeight(height);

    canvas.centerObject(image);
    image.setCoords();

    canvas.renderAll()

    next()
  }
});

Darkroom.plugins['image'] = Darkroom.Plugin.extend({

  initialize: function InitDarkroomBlackAndWhitePlugin() {

    var buttonGroup = this.darkroom.toolbar.createButtonGroup();

    var grayscaleButton = buttonGroup.createButton({
      image: 'text'
    });

    grayscaleButton.addEventListener('click', this.grayscale.bind(this));
  },

  grayscale: function grayscale() {
    this.darkroom.applyTransformation(
      new ImageFilter( {filter: this.getFilter('grayscale') } )
    )
  },

  getFilter: function getFilter(name) {
    var filter = null

    switch(name) {
      case 'grayscale':
        filter = new fabric.Image.filters.Grayscale()
        break
    }

    return filter
  }

});

})();
