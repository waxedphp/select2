
;(function ( $, window, document, undefined ) {

    var pluginName = 'select2',
        _search = '.waxed-select2',
        _api = [],
        defaults = {
            propertyName: "value"
        },
        inited = false,
        allowedOptions = [
          'allowClear',//boolean 	false 	Provides support for clearable selections.
          'amdLanguageBase',//string 	./i18n/ 	See Using Select2 with AMD or CommonJS loaders.
          'closeOnSelect',//boolean 	true 	Controls whether the dropdown is closed after a selection is made.
          'data',//array of objects 	null 	Allows rendering dropdown options from an array.
          //dataAdapter 		SelectAdapter 	Used to override the built-in DataAdapter.
          'debug',//boolean 	false 	Enable debugging messages in the browser console.
          'dir',//string 	ltr 	Sets the dir attribute on the selection and dropdown containers to indicate the direction of the text.
          'disabled',//boolean 	false 	When set to true, the select control will be disabled.
          //'dropdownAdapter',//DropdownAdapter 	Used to override the built-in DropdownAdapter
          'dropdownAutoWidth',//boolean 	false 	
          'dropdownCssClass',//string 	'' 	Adds additional CSS classes to the dropdown container. The helper :all: can be used to add all CSS classes present on the original <select> element.
          'dropdownParent',//jQuery selector or DOM node 	$(document.body) 	Allows you to customize placement of the dropdown.
          //'escapeMarkup',//callback 	Utils.escapeMarkup 	Handles automatic escaping of content rendered by custom templates.
          'language',//string or object 	EnglishTranslation 	Specify the language used for Select2 messages.
          //'matcher',//A callback taking search params and the data object. 		Handles custom search matching.
          'maximumInputLength',//integer 	0 	Maximum number of characters that may be provided for a search term.
          'maximumSelectionLength',//integer 	0 	The maximum number of items that may be selected in a multi-select control. If the value of this option is less than 1, the number of selected items will not be limited.
          'minimumInputLength',//integer 	0 	Minimum number of characters required to start a search.
          'minimumResultsForSearch',//integer 	0 	The minimum number of results required to display the search box.
          'multiple',//boolean 	false 	This option enables multi-select (pillbox) mode. Select2 will automatically map the value of the multiple HTML attribute to this option during initialization.
          'placeholder',//string or object 	null 	Specifies the placeholder for the control.
          //'resultsAdapter',//ResultsAdapter 	Used to override the built-in ResultsAdapter.
          //'selectionAdapter',//SingleSelection or MultipleSelection, depending on the value of multiple. 	Used to override the built-in SelectionAdapter.
          'selectionCssClass',//string 	'' 	Adds additional CSS classes to the selection container. The helper :all: can be used to add all CSS classes present on the original <select> element.
          'selectOnClose',//boolean 	false 	Implements automatic selection when the dropdown is closed.
           //'sorter',//callback 		
          'tags',//boolean / array of objects 	false 	Used to enable free text responses.
          //'templateResult',//callback 		Customizes the way that search results are rendered.
          //'templateSelection',//callback 		Customizes the way that selections are rendered.
          //'theme',//string 	default 	Allows you to set the theme.
          //'tokenizer',//callback 		A callback that handles automatic tokenization of free-text entry.
          'tokenSeparators',//array 	null 	The list of characters that should be used as token separators.
          'width',//string 	resolve 	Supports customization of the container width.
          'scrollAfterSelect'//boolean 	false 	If true, resolves issue for multiselects using closeOnSelect: false that caused the list of results to scroll to the first selection after each select/unselect (see https://github.com/select2/select2/pull/5150). This behaviour was intentional to deal with infinite scroll UI issues (if you need this behavior, set false) but it created an issue with multiselect dropdown boxes of fixed length. This pull request adds a configurable option to toggle between these two desirable behaviours.
        ];

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
      this.searchUrl = false;
      this.cfg = {
      };

      this.invalidate = function(RECORD){

      },

      this.setRecord = function(RECORD){
        if (typeof that.dd.name == 'undefined') return;
        var rec = that.pluggable.getvar(that.dd.name, RECORD);
        if (typeof rec != 'object') { return; };
        
        var changed = false;
        if (typeof rec.config == 'object') {
          for(var x in rec.config) {
            if (allowedOptions.includes(x)) {
              this.cfg[x] = rec.config[x];
              changed = true;
            };
          };
          if (typeof rec.config.searchUrl == 'string') {
            this.searchUrl = rec.config.searchUrl;
          };
        };
        if (changed) {
          console.log(this.cfg);
          this.free();
          this.build();
        };

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
        if (typeof rec.close != 'undefined') {
          $(that.element).select2('close');
        }        

      },
      
      this.build = function() {
        if (this.searchUrl) {
          this.cfg.ajax = {
            url: function (params) {
              return that.searchUrl + params.term;
            },
            dataType: 'json',
            /*
            transport: function (params, success, failure) {
              params.dataType = "json";
              var request = $.ajax(params);
              request.then(function(a,b,c){console.log('succ',a,b,c);return a;});
              request.fail(function(a,b,c){console.log('fail',a,b,c);});
              return request;
            },
            */
            processResults: function (data) {
              // Transforms the top-level key of the response object from 'items' to 'results'
              //console.log(data);
              return data;
            }
          };
        } else {
          this.cfg.ajax = null;
        };
        if (this.cfg.tags) {
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
        } else {
          this.cfg.createTag = function(){};
          this.cfg.insertTag = function(){};
        };
        
        $(that.element).select2(this.cfg);
      },

      this.free = function() {
        if (!$(that.element).data('select2')) return;
        $(that.element).select2('destroy');
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
        if (typeof that.dd.tags == 'string') {
          this.cfg.tags = true;
        };
        //console.log(this.cfg);
        this.build();

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
