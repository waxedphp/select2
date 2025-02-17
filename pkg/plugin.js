
;(function ( $, window, document, undefined ) {

    var pluginName = 'select2',
        _search = '.waxed-select2',
        _api = [],
        defaults = {
            propertyName: "value"
        },
        inited = false
        ;

$.fn.serializeControls = function() {
  var data = {};

  function buildInputObject(arr, val) {
    if (arr.length < 1)
      return val;
    var objkey = arr[0];
    if (objkey.slice(-1) == "]") {
      objkey = objkey.slice(0,-1);
    }
    var result = {};
    if (arr.length == 1){
      result[objkey] = val;
    } else {
      arr.shift();
      var nestedVal = buildInputObject(arr,val);
      result[objkey] = nestedVal;
    }
    return result;
  }

  $.each(this.serializeArray(), function() {
    var val = this.value;
    var c = this.name.split("[");
    var a = buildInputObject(c, val);
    $.extend(true, data, a);
  });

  return data;
}

function convertFormToJSON(form) {
  const array = $(form).serializeArray(); // Encodes the set of form elements as an array of names and values.
  const json = {};
  $.each(array, function () {
    json[this.name] = this.value || "";
  });
  return json;
}


    function Instance(pluggable,element,dd){
      var that = this;
      this.pluggable = pluggable;
      this.element = element;
      this.o = element;
      this.t = pluginName;
      this.dd = dd;
      this.name = '';
      this.cfg = {
      };

      this.invalidate = function(RECORD){

      },

      this.setRecord = function(RECORD){
        if (typeof that.dd.name == 'undefined') return;
        var rec = that.pluggable.getvar(that.dd.name, RECORD);
        if (typeof rec != 'object') { return; };

        if (typeof rec.clear != 'undefined') {
          $(that.element).val(null).trigger('change');
        }

        if (typeof rec.clearOptions != 'undefined') {
          $(that.element).empty().trigger('change');
        }

        if (typeof rec.options != 'undefined') {
          rec.options.forEach((data) => {
            var newOption = new Option(data.text, data.id, false, false);
            $(that.element).append(newOption).trigger('change');
          });
        }

        if (typeof rec.value != 'undefined') {
          $(that.element).val(rec.value).trigger('change');
        }

        if (typeof rec.values != 'undefined') {
          $(that.element).val(null).trigger('change');
          rec.values.forEach((data) => {
            var newOption = new Option(data.text, data.id, true, true);
            $(that.element).append(newOption).trigger('change');
          });
        };

        if (typeof rec.open != 'undefined') {
          if (rec.open) {
            $(that.element).select2('open');
          } else {
            $(that.element).select2('close');
          }
        }

      },


      this.free = function() {

      },

      this.init=function() {
        /*
        this.cfg.ajax = {
          delay:250,
          url: that.dd.url,
          dataType: 'json'
        };
        */
        this.cfg.theme = 'neutral';
        this.cfg.tags = true;
        this.cfg.createTag = function (params) {
          var term = $.trim(params.term);
          //console.log('TAG', term);
          if (term === '') {
            return null;
          }
          return {
              id: term,
              text: term,
              newTag: true // add additional parameters
          }
        };
        this.cfg.insertTag = function (data,tag) {
          //console.log('INSERT TAG', data, tag);
          data.push(tag);
        };
        //console.log(this.cfg);
        $(that.element).select2(this.cfg);

        $(that.element).on('change', function (e) {
         $(that.element).trigger("waxed-change");
        });

        if (typeof that.dd.value == 'string') {
          var values = that.dd.value.split('|');
          $(that.element).val(null).trigger('change');
          values.forEach((value) => {
            var newOption = new Option(value, value, true, true);
            $(that.element).append(newOption).trigger('change');
          });
        };

        inited = true;
      },
      this._init_();
    }

    $.waxxx(pluginName, _search, Instance, _api);


})( jQuery, window, document );
/*--*/
//# sourceURL: /js/jam/boilerplate/plugin.js
