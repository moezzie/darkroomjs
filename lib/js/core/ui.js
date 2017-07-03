(function() {
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
