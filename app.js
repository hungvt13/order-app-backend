import express from 'express'
import cors from 'cors'

const app = express()
const port = process.env.PORT || 3000

app.use(express.urlencoded({ extended: true }))
app.use(express.json()) // To parse the incoming requests with JSON payloads
app.use(cors())

const storeInfo1 = {
  name: 'Tequeria Restaurant',
  address: '405 Howard St, San Francisco, CA 94105, United States',
  open: true,
  default_language: 'vn',
  hours: '9 am - 11 pm',
  store_image: 'https://www.relayrestaurantgroup.com/wp-content/uploads/2022/12/joule-website.png',
  food_tags: ['Mexican', 'Vietnamese'],
  menu_list: [{
    id: 1,
    category_name: 'Taco',
    menu_items: [
      {
        id: 1,
        image_source: 'https://www.tacobueno.com/assets/food/tacos/Taco_Crispy_Beef_990x725.jpg',
        name: 'Grounded Beef Taco',
        description: 'These Ground Beef Tacos are filled with juicy flavorful taco meat made with my homemade taco seasoning - it\'s an easy weeknight recipe for the whole family!',
        price: 100000,
        options: [
          {
            id: 1,
            name: 'Rice Options',
            max_choice: 1,
            required: true,
            option_list: [
              {
                id: 1,
                name: 'White Rice',
                price: 0
              },
              {
                id: 2,
                name: 'Brown Rice',
                price: 20000
              }
            ]
          },
          {
            id: 2,
            name: 'Steak Options',
            max_choice: 1,
            required: true,
            option_list: [
              {
                id: 1,
                name: 'Normal Steak',
                price: 0
              },
              {
                id: 2,
                name: 'Extra Steak',
                price: 50000
              }
            ]
          },
          {
            id: 3,
            name: 'Sauces',
            max_choice: 3,
            required: true,
            option_list: [
              {
                id: 1,
                name: 'Salsa',
                price: 0
              },
              {
                id: 2,
                name: 'Cilantro Salsa',
                price: 10000
              },
              {
                id: 3,
                name: 'Secret Salsa',
                price: 30000
              },
              {
                id: 4,
                name: 'Hot Chilli',
                price: 25000
              }
            ]
          },
          {
            id: 4,
            name: 'Test 1',
            max_choice: 3,
            required: true,
            option_list: [
              {
                id: 1,
                name: '1',
                price: 0
              },
              {
                id: 2,
                name: '2',
                price: 10000
              },
              {
                id: 3,
                name: '3',
                price: 30000
              },
              {
                id: 4,
                name: '4',
                price: 25000
              },
              {
                id: 5,
                name: '5',
                price: 25000
              },
              {
                id: 6,
                name: '6',
                price: 25000
              },
              {
                id: 7,
                name: '7',
                price: 25000
              },
              {
                id: 8,
                name: '8',
                price: 25000
              }
            ]
          },
          {
            id: 5,
            name: 'Test 2',
            max_choice: 3,
            required: true,
            option_list: [
              {
                id: 1,
                name: '1',
                price: 0
              },
              {
                id: 2,
                name: '2',
                price: 10000
              },
              {
                id: 3,
                name: '3',
                price: 30000
              },
              {
                id: 4,
                name: '4',
                price: 25000
              },
              {
                id: 5,
                name: '5',
                price: 25000
              },
              {
                id: 6,
                name: '6',
                price: 25000
              },
              {
                id: 7,
                name: '7',
                price: 25000
              },
              {
                id: 8,
                name: '8',
                price: 25000
              }
            ]
          }
        ]
      },
      {
        id: 2,
        image_source: 'https://www.foodandwine.com/thmb/BbW81ajBdC3_XctfLHaJYZchTh4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/fried-yuba-tacos-with-sweet-corn-relish-FT-RECIPE0721-69b4e0932a9e440fb1415eda1aad58ce.jpg',
        name: 'Fried Yuba Tacos with Sweet Corn Relish',
        description: 'Fries rolled yuba, or thin sheets of tofu skin, in avocado oil until crispy, yielding a hearty vegan taco filling. A spoonful of "green cream" — sautéed spinach stirred together with mashed avocado — holds all of the delicious components in place.',
        price: 200000,
        options: []
      }
    ]
  },
  {
    id: 2,
    category_name: 'Burrito',
    menu_items: [
      {
        id: 3,
        image_source: 'https://tb-static.uber.com/prod/image-proc/processed_images/0cde63ca211e1b6235332e7a41088d1e/5954bcb006b10dbfd0bc160f6370faf3.jpeg',
        name: 'Boss Burrito',
        description: 'Loaded with your choice of filling, guacamole, cheese, fiesta salsa, black beans, Mexican seasoned rice, sour cream and a zesty ranch dressing!',
        price: 150000,
        options: []
      },
      {
        id: 4,
        image_source: 'https://tb-static.uber.com/prod/image-proc/processed_images/7c02bf2eed93964f3f8fdeda0e531edc/5954bcb006b10dbfd0bc160f6370faf3.jpeg',
        name: 'Grilled Stuft Burrito',
        description: 'Packed with your choice of filling, cheese, fiesta salsa, black beans, Mexican seasoned rice and chipotle mayo wrapped inside a toasted tortilla.',
        price: 230000,
        options: []
      }
    ]
  },
  {
    id: 3,
    category_name: 'Drinks',
    menu_items: [
      {
        id: 5,
        image_source: '',
        name: 'Sprite',
        description: '',
        price: 20000,
        options: []
      },
      {
        id: 6,
        image_source: '',
        name: 'Coke',
        description: '',
        price: 20000,
        options: []
      }
    ]
  }
  ]
}

const orders1 = {
  customer_id: 'c1',
  phone_no: '+848103549637',
  current_orders: [
    {
      order_id: 'C32',
      order_date: '2023-12-31T14:59:28.685Z',
      order_total: 360000,
      order_status: 0, // processing
      payment_status: 1, // paid
      order_items_quantity: 2,
      order_items: [
        {
          id: 1,
          image_source: 'https://www.tacobueno.com/assets/food/tacos/Taco_Crispy_Beef_990x725.jpg',
          name: 'Grounded Beef Taco',
          price: 100000,
          quantity: 2,
          option_list: [
            {
              id: 1,
              name: 'Rice Options',
              option: [
                {
                  id: 1,
                  name: 'White Rice',
                  price: 0
                }
              ]
            },
            {
              id: 2,
              name: 'Steak Options',
              option_list: [
                {
                  id: 2,
                  name: 'Extra Steak',
                  price: 50000
                }
              ]
            },
            {
              id: 3,
              name: 'Sauces',
              max_choice: 3,
              required: true,
              option_list: [
                {
                  id: 1,
                  name: 'Salsa',
                  price: 0
                },
                {
                  id: 2,
                  name: 'Cilantro Salsa',
                  price: 10000
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  past_orders: [
    {
      order_id: 'C13',
      order_date: '2023-12-29T14:59:28.685Z',
      order_total: 360000,
      order_status: 1, // completed
      payment_status: 1, // paid
      order_items_quantity: 2,
      order_items: [
        {
          id: 1,
          image_source: 'https://www.tacobueno.com/assets/food/tacos/Taco_Crispy_Beef_990x725.jpg',
          name: 'Grounded Beef Taco',
          price: 100000,
          quantity: 2,
          option_list: [
            {
              id: 1,
              name: 'Rice Options',
              option: [
                {
                  id: 1,
                  name: 'White Rice',
                  price: 0
                }
              ]
            },
            {
              id: 2,
              name: 'Steak Options',
              option_list: [
                {
                  id: 2,
                  name: 'Extra Steak',
                  price: 50000
                }
              ]
            },
            {
              id: 3,
              name: 'Sauces',
              max_choice: 3,
              required: true,
              option_list: [
                {
                  id: 1,
                  name: 'Salsa',
                  price: 0
                },
                {
                  id: 2,
                  name: 'Cilantro Salsa',
                  price: 10000
                }
              ]
            }
          ]
        }
      ]
    },
    {
      order_id: 'C14',
      order_date: '2023-12-20T14:59:28.685Z',
      order_total: 120000,
      order_status: 1, // completed
      order_items_quantity: 1,
      payment_status: 1, // paid
      order_items: [
        {
          id: 1,
          image_source: 'https://www.tacobueno.com/assets/food/tacos/Taco_Crispy_Beef_990x725.jpg',
          name: 'Grounded Beef Taco',
          price: 100000,
          quantity: 1,
          option_list: [
            {
              id: 1,
              name: 'Rice Options',
              option: [
                {
                  id: 1,
                  name: 'White Rice',
                  price: 0
                }
              ]
            },
            {
              id: 2,
              name: 'Steak Options',
              option_list: [
                {
                  id: 2,
                  name: 'Extra Steak',
                  price: 50000
                }
              ]
            },
            {
              id: 3,
              name: 'Sauces',
              max_choice: 3,
              required: true,
              option_list: [
                {
                  id: 1,
                  name: 'Salsa',
                  price: 0
                },
                {
                  id: 2,
                  name: 'Cilantro Salsa',
                  price: 10000
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

app.get('/merchant/:id', async (req, res) => {
  try {
    const { id } = req.params

    const data = {
      id,
      ...storeInfo1
    }

    return res.status(200).json(data)
  } catch (error) {
    return res.status(400).json(error.response)
  }
})

app.get('/merchant/:id/orders', async (req, res) => {
  try {
    const { id } = req.params

    const data = {
      id,
      ...orders1
    }

    return res.status(200).json(data)
  } catch (error) {
    return res.status(400).json(error.response)
  }
})

app.listen(port, () => {
  console.log('App is running...')
})
