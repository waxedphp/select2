# Select2

Select2 gives you a customizable select box with support for searching, tagging, remote data sets, infinite scrolling, and many other highly used options.

[https://select2.org/](https://select2.org/)

MIT license

---
### PHP:

```php
  use \Waxedphp\Select2\Setter as Select2;
  
  $obj = new Select2($this->waxed);
  $obj->addOption('ut', 'Utah');
  $obj->addOption('wa', 'Washington');
  $this->waxed->pick('section1')->display([
    'data' => [
      'payload1' => $obj->value(),
      'payload2' => $obj->value('TX'),
    ],
  ],$this->tpl.'/select2');

$this->waxed->display([
  'payload1' =>
  [
    'clear' => true,
    'clearOptions' => true,
    'open' => true,
    'options' => [
      ['id' => 1, 'text' => 'Alpha',],
      ['id' => 2, 'text' => 'Beta',],
      ['id' => 3, 'text' => 'Gamma',],
    ],
    'value' => [1,3,'TX']
  ],
], 'template');

```

---
### HTML:

```html

<select class="waxed-select2" 
  name="states[]" multiple="multiple"
  data-name="payload1"
  >
  <option value="AL">Alabama</option>
  <option value="TX">Texas</option>
  <option value="WY">Wyoming</option>
</select>

```


---
### CSS:

```css
.select2-container--neutral 
  .select2-selection{
  background-color:#1e1e1e;
  border-color:#505050;
}

.select2-container--neutral 
  .select2-results__options{
  background-color:#1e1e1e;
}

.select2-container--neutral 
  .select2-dropdown {
  border-color:#505050;
}
.select2-container .select2-search--inline 
  .select2-search__field {
  height: 30px;
}  

.select2-container 
  .select2-selection--single  {
  height: 50px;

}

.select2-container--neutral 
  .select2-selection--single 
  .select2-selection__rendered {
  line-height: 48px;  
}

.select2-container--neutral 
  .select2-selection--single {
  text-align:right;
}

.select2-container--neutral 
  .select2-selection__rendered {
  text-align:left;
}

.select2-container--neutral 
  .select2-selection--single 
  .select2-selection__arrow {
  height: 50px;
  top:-16px;
  right:20px;
  width:30px;
  position: relative;
}

```
---

### PHP methods

```php

  $obj->setAllowClear(true);
  //boolean 	false 	Provides support for clearable selections.
  
  $obj->setAmdLanguageBase('en');
  //string 	./i18n/ 	See Using Select2 with AMD or CommonJS loaders.
  
  $obj->setCloseOnSelect(true);
  //boolean 	true 	Controls whether the dropdown is closed after a selection is made.
  
  $obj->setData($dataArray);
  //array of objects 	null 	Allows rendering dropdown options from an array.
  
  $obj->setDebug(true);
  //boolean 	false 	Enable debugging messages in the browser console.
  
  $obj->setDir('ltr');
  //Sets the dir attribute on the selection and dropdown containers to indicate the direction of the text.
  
  $obj->setDisabled(true);
  //boolean 	false 	When set to true, the select control will be disabled.
  
  $obj->setDropdownAutoWidth(true);
  //boolean 	false 	
  
  $obj->setDropdownCssClass('');
  //Adds additional CSS classes to the dropdown container.
  //The helper :all: can be used to add all CSS classes present on the original <select> element.
  
  $obj->setDropdownParent('document.body');
  //jQuery selector or DOM node 	$(document.body) 	Allows you to customize placement of the dropdown.
  
  $obj->setLanguage('en');
  //string or object 	EnglishTranslation 	Specify the language used for Select2 messages.

  $obj->setMaximumInputLength(20);
  //integer 	0 	Maximum number of characters that may be provided for a search term.
  
  $obj->setMaximumSelectionLength(5);
  //The maximum number of items that may be selected in a multi-select control.
  //If the value of this option is less than 1, the number of selected items will not be limited.
  
  $obj->setMinimumInputLength(4);
  //integer 	0 	Minimum number of characters required to start a search.
  
  $obj->setMinimumResultsForSearch(5);
  //integer 	0 	The minimum number of results required to display the search box.
  
  $obj->setMultiple(true);
  //This option enables multi-select (pillbox) mode.
  //Select2 will automatically map the value of the multiple HTML attribute to this option during initialization.
  
  $obj->setPlaceholder('Select this!');
  //string or object 	null 	Specifies the placeholder for the control.
  
  $obj->setSelectionCssClass('');
  //Adds additional CSS classes to the selection container.
  //The helper :all: can be used to add all CSS classes present on the original <select> element.
  
  $obj->setSelectOnClose(true);
  //boolean 	false 	Implements automatic selection when the dropdown is closed.
  
  $obj->setTags(true);
  //boolean / array of objects 	false 	Used to enable free text responses.
  
  $obj->setTokenSeparators([',', ' ', '-', '/']);
  //array 	null 	The list of characters that should be used as token separators.
  
  $obj->setWidth($x);
  //string 	resolve 	Supports customization of the container width.
  
  $obj->setScrollAfterSelect(true);
  //If true, resolves issue for multiselects using closeOnSelect: false
  //that caused the list of results to scroll to the first selection
  //after each select/unselect
  //(see https://github.com/select2/select2/pull/5150).
  //This behaviour was intentional to deal with infinite scroll UI issues
  //(if you need this behavior, set false) 
  //but it created an issue with multiselect dropdown boxes of fixed length.
  //This pull request adds a configurable option to toggle between these two desirable behaviours.

  $obj->setSearchUrl('/ajax/?q=');

  $obj->resetOptions();
  
  $obj->addOption('ut', 'Utah');
  
  $obj->clear();
 
  $obj->clearOptions();
  
  $obj->open();
  
  $obj->close();
  
  $obj->value('TX');

```
