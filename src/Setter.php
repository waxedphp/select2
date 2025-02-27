<?php
namespace Waxedphp\Select2;

class Setter extends \Waxedphp\Waxedphp\Php\Setters\AbstractSetter {

  protected ?string $searchUrl = null;
  //string 	null 	Provides support for ajax data sources.

  protected ?bool $allowClear = null;
  //boolean 	false 	Provides support for clearable selections.
  
  protected ?string $amdLanguageBase = null;
  //string 	./i18n/ 	See Using Select2 with AMD or CommonJS loaders.
  
  protected ?bool $closeOnSelect = null;
  //boolean 	true 	Controls whether the dropdown is closed after a selection is made.
  
  protected ?array $data = null;
  //array of objects 	null 	Allows rendering dropdown options from an array.
  
  //dataAdapter = null;//SelectAdapter 	Used to override the built-in DataAdapter.
  
  protected ?bool $debug = null;
  //boolean 	false 	Enable debugging messages in the browser console.
  
  protected ?string $dir = null;
  //string 	ltr 	Sets the dir attribute on the selection and dropdown containers to indicate the direction of the text.
  
  protected ?bool $disabled = null;
  //boolean 	false 	When set to true, the select control will be disabled.
  
  //dropdownAdapter 		DropdownAdapter 	Used to override the built-in DropdownAdapter
  
  protected ?bool $dropdownAutoWidth = null;
  //boolean 	false 	
  
  protected ?string $dropdownCssClass = null;
  //string 	'' 	Adds additional CSS classes to the dropdown container. The helper :all: can be used to add all CSS classes present on the original <select> element.
  
  protected ?string $dropdownParent = null;
  //jQuery selector or DOM node 	$(document.body) 	Allows you to customize placement of the dropdown.
  
  //escapeMarkup 	callback 	Utils.escapeMarkup 	Handles automatic escaping of content rendered by custom templates.
  
  protected ?string $language = null;
  //string or object 	EnglishTranslation 	Specify the language used for Select2 messages.

  //matcher 	A callback taking search params and the data object. 		Handles custom search matching.
  
  protected ?int $maximumInputLength = null;
  //integer 	0 	Maximum number of characters that may be provided for a search term.
  
  protected ?int $maximumSelectionLength = null;
  //integer 	0 	The maximum number of items that may be selected in a multi-select control. If the value of this option is less than 1, the number of selected items will not be limited.
  
  protected ?int $minimumInputLength = null;
  //integer 	0 	Minimum number of characters required to start a search.
  
  protected ?int $minimumResultsForSearch = null;
  //integer 	0 	The minimum number of results required to display the search box.
  
  protected ?bool $multiple = null;
  //boolean 	false 	This option enables multi-select (pillbox) mode. Select2 will automatically map the value of the multiple HTML attribute to this option during initialization.
  
  protected ?string $placeholder = null;
  //string or object 	null 	Specifies the placeholder for the control.
  
  //resultsAdapter 		ResultsAdapter 	Used to override the built-in ResultsAdapter.
  //selectionAdapter 		SingleSelection or MultipleSelection, depending on the value of multiple. 	Used to override the built-in SelectionAdapter.
  
  protected ?string $selectionCssClass = null;
  //string 	'' 	Adds additional CSS classes to the selection container. The helper :all: can be used to add all CSS classes present on the original <select> element.
  
  protected ?bool $selectOnClose = null;
  //boolean 	false 	Implements automatic selection when the dropdown is closed.
  
  //sorter 	callback 		
  
  protected ?bool $tags = null;
  //boolean / array of objects 	false 	Used to enable free text responses.
  
  //templateResult 	callback 		Customizes the way that search results are rendered.
  //templateSelection 	callback 		Customizes the way that selections are rendered.
  //theme 	string 	default 	Allows you to set the theme.
  //tokenizer 	callback 		A callback that handles automatic tokenization of free-text entry.

  protected ?array $tokenSeparators = null;
  //array 	null 	The list of characters that should be used as token separators.
  
  protected ?string $width = null;
  //string 	resolve 	Supports customization of the container width.
  
  protected ?bool $scrollAfterSelect = null;
  //boolean 	false 	If true, resolves issue for multiselects using closeOnSelect: false that caused the list of results to scroll to the first selection after each select/unselect (see https://github.com/select2/select2/pull/5150). This behaviour was intentional to deal with infinite scroll UI issues (if you need this behavior, set false) but it created an issue with multiselect dropdown boxes of fixed length. This pull request adds a configurable option to toggle between these two desirable behaviours.


  private array $items = [
  ];
  /**
   * @var array<mixed> $setup
   */
  private array $setup = [
  ];

  private array $commands = [
  ];
  
  /**
   * allowed options
   *
   * @var array<mixed> $_allowedOptions
   */
  protected array $_allowedOptions = [
          'searchUrl',//string - search url
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

  function setValue($value) {
    $this->setup['value'] = $value;
    return $this;
  }

  function setMode($mode) {
    $this->setup['mode'] = $mode;
    return $this;
  }

  function setTheme($theme) {
    $this->setup['theme'] = $theme;
    return $this;
  }
  
  function clear() {
    $this->commands['clear'] = 1;
    return $this;
  }

  function clearOptions() {
    $this->commands['clearOptions'] = 1;
    return $this;
  }

  function open() {
    $this->commands['open'] = 1;
    return $this;
  }

  function close() {
    $this->commands['close'] = 1;
    return $this;
  }
  
  function resetOptions() {
    $this->items = [];
  }

  function addOption($id, $text, $selected = false, $disabled = false) {
    $a = [
      'id' => $id,
      'text' => $text,
    ];
    if ($selected) $a['selected'] = true;
    if ($disabled) $a['disabled'] = true;
    $this->items[] = $a;
    return $this;
  }

  /**
  * value
  *
  * @param mixed $value
  * @return array<mixed>
  */
  public function value(mixed $value = null): array {
    $a = [];
    $b = $this->getArrayOfAllowedOptions();
    foreach ($this->commands as $k => $v) {
      $a[$k] = true;
    }
    $this->commands = [];
    if (!empty($b)) {
      $a['config'] = $b;
    }
    if (!empty($this->items)) {
      $a['options'] = $this->items;
      $this->resetOptions();
    }
    if(!is_null($value)) {
      $a['value'] = $value;
    };
    return $a;
  }

}
