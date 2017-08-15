(function() {
'use strict';

var ImageFilter = Darkroom.Transformation.extend({

  applyTransformation: function(canvas, image, next) {


    var filter = this.options.filter
    var type   = filter.type

    var idx = image.filters.indexOf(filter)
    console.log(idx)

    var removedFilter = false
    for (var n = 0; n < image.filters.length; n++) {
      if(image.filters[n].type === type) {
        image.filters = []  
        removedFilter = true
      }
    }

    if (!removedFilter) {
      image.filters.push(filter)
    }

    image.applyFilters(canvas.renderAll.bind(canvas))

    next()
  }
});

Darkroom.plugins['image'] = Darkroom.Plugin.extend({

  initialize: function InitDarkroomBlackAndWhitePlugin() {

    var buttonGroup = this.darkroom.toolbar.createButtonGroup();

    var grayscaleButton = buttonGroup.createButton({
      image: 'grayscale',
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
