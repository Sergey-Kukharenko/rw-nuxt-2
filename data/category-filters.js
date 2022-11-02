export default [
  {
    title: 'Price',
    key: 'price_range',
    type: 'range',
    from: 0,
    before: 500,
    isActive: false,
  },

  {
    title: 'Flower type',
    key: 'flower_types',
    type: 'checkbox',
    isActive: false,
    isListOpened: false,
    list: [
      { name: 'Roses', value: 'roses' },
      { name: 'Daisies', value: 'daisies' },
      { name: 'Tulips', value: 'tulips' },
      { name: 'Peonies', value: 'peonies' },
      { name: 'Alstroemeria', value: 'alstroemeria' },
      { name: 'Daisies 2', value: 'daisies 2' },
      { name: 'Alstroemeria 2', value: 'alstroemeria 2' },
    ],
  },

  {
    title: 'Color',
    key: 'color',
    type: 'checkbox',
    isActive: false,
    isListOpened: false,
    list: [
      { name: 'Multicolored', value: 'multicolored' },
      { name: 'White', value: 'white' },
      { name: 'Red', value: 'red' },
      { name: 'Yellow', value: 'yellow' },
      { name: 'Pink', value: 'pink' },
      { name: 'Purple', value: 'purple' },
      { name: 'Green', value: 'green' },
    ],
  },

  {
    title: 'Occasion',
    key: 'occasion',
    type: 'radio',
    isActive: false,
    isListOpened: false,
    list: [
      { name: 'Birthday', value: 'birthday' },
      { name: 'Anniversary', value: 'anniversary' },
      { name: 'Wedding anniversary', value: 'wedding anniversary' },
      { name: 'Date', value: 'date' },
      { name: 'Extract from the hospital', value: 'extract from the hospital' },
      { name: 'Birthday 2', value: 'birthday 2' },
      { name: 'Anniversary 2', value: 'anniversary 2' },
    ],
  },

  {
    title: 'For whom',
    key: 'for_whom',
    type: 'radio',
    isActive: false,
    isListOpened: false,
    list: [
      { name: 'Mom', value: 'mom' },
      { name: 'To a friend', value: 'friend' },
      { name: 'Wife', value: 'wife' },
      { name: 'Gift', value: 'gift' },
      { name: 'Colleague', value: 'colleague' },
      { name: 'To a sister', value: 'sister' },
      { name: 'To a daughter', value: 'daughter' },
    ],
  },

  {
    title: 'Categories',
    key: 'categories',
    type: 'checkbox',
    isActive: false,
    isListOpened: false,
    list: [
      { name: 'Sale', value: 'sale' },
      { name: "Author's bouquets", value: 'author' },
      { name: 'Monobooks', value: 'monobooks' },
      { name: 'Dried flowers', value: 'dried' },
      { name: 'Wedding', value: 'wedding' },
      { name: 'Dating', value: 'dating' },
    ],
  },

  {
    title: 'Stocks',
    key: 'stocks',
    type: 'checkbox',
    isActive: false,
    isListOpened: false,
    list: [{ name: 'Discounted products', value: 'discounted' }],
  },
]
