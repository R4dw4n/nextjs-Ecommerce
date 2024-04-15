export const checkboxes = [
  {
    title: 'Categories',
    options: [
      {
        label: 'Smartphones',
        value: 0
      },
      {
        label: 'Laptops',
        value: 1
      },
      {
        label: 'Fragrances',
        value: 2
      },
      {
        label: 'Skincare',
        value: 3
      },
      {
        label: 'Groceries',
        value: 4
      },
      {
        label: 'Home Decoration',
        value: 5
      },
      {
        label: 'Furniture',
        value: 6,
      },
      {
        label: 'Tops',
        value: 7,
      },
      {
        label: "Mens's Shirts",
        value: 8,
      },
      {
        label: "Men's Shoes",
        value: 9,
      },
      {
        label: "Men's Watches",
        value: 10,
      },
      {
        label: "Women's Dresses",
        value: '11',
      },
      {
        label: "Women's Shoes",
        value: '12',
      },
      {
        label: "Women's Watches",
        value: 13,
      },
      {
        label: "Women's Bags",
        value: 14,
      },
      {
        label: "Women's Jewellery",
        value: 15,
      },
      {
        label: 'Sungalsses',
        value: 16,
      },
      {
        label: 'Automotive',
        value: 17,
      },
      {
        label: 'Motorcycle',
        value: 18,
      },
      {
        label: 'Lighting',
        value: 19,
      },
    ]
  },
];


export const radios = {
  title: "Sort by",
  groups: [
    {
      label: 'Lowest Price',
      value: 0,
    },
    {
      label: 'Highest Price',
      value: 1,
    },
    {
      label: 'Most in Stock',
      value: 2,
    },
    {
      label: 'Highest Rate',
      value: 3,
    },
    {
      label: 'Recommended',
      value: 4,
    }
  ]
}

export const sortingFunctions = {
  //LOWEST PRICE
  0: (a, b) => a.price - b.price,
  //HIGHEST PRICE
  1: (a, b) => b.price - a.price,
  //MOST IN STOCK
  2: (a, b) => b.stock - a.stock,
  //HIGHEST RATE
  3: (a, b) => b.rating - a.rating,
  //DEFAULT / RECOMMENDED
  4: (a, b) => a.id - b.id,
}

export const categories = [
  "smartphones",
  "laptops",
  "fragrances",
  "skincare",
  "groceries",
  "home-decoration",
  "furniture",
  "tops",
  "womens-dresses",
  "womens-shoes",
  "mens-shirts",
  "mens-shoes",
  "mens-watches",
  "womens-watches",
  "womens-bags",
  "womens-jewellery",
  "sunglasses",
  "automotive",
  "motorcycle",
  "lighting"
]

export const categoriesMap = {
  "smartphones": 0,
  "laptops": 1,
  "fragrances": 2,
  "skincare": 3,
  "groceries": 4,
  "home-decoration": 5,
  "furniture": 6,
  "tops": 7,
  "womens-dresses": 8,
  "womens-shoes": 9,
  "mens-shirts": 10,
  "mens-shoes": 11,
  "mens-watches": 12,
  "womens-watches": 13,
  "womens-bags": 14,
  "womens-jewellery": 15,
  "sunglasses": 16,
  "automotive": 17,
  "motorcycle": 18,
  "lighting": 19,
}