# Select2

MIT license

Select2 gives you a customizable select box with support for searching, tagging, remote data sets, infinite scrolling, and many other highly used options.

[https://select2.org/](https://select2.org/)


### HTML:

```

<select class="waxed-select2" name="states[]" multiple="multiple"
  data-name="payload1"
  >
  <option value="AL">Alabama</option>
  <option value="TX">Texas</option>
  <option value="WY">Wyoming</option>
</select>

```

### PHP:

```

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


