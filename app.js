import express from 'express'
import cors from 'cors'

const app = express()
const port = process.env.PORT || 3000

app.use(express.urlencoded({ extended: true }))
app.use(express.json()) // To parse the incoming requests with JSON payloads
app.use(cors())

const storeInfo = {
  name: 'Tequeria',
  address: '27 Tong Huu Dinh, Thao Dien, Ho Chi Minh city',
  open: true,
  default_language: 'vn',
  hours: '9 am - 11 pm',
  store_image: 'https://img.taste.com.au/R_dRdL7V/taste/2022/09/healthy-tacos-recipe-181113-1.jpg',
  food_tags: ['Mexican', 'Vietnamese'],
  menu_list: []
}

app.get('/store/:id', async (req, res) => {
  try {
    const { id } = req.params

    const data = {
      id,
      ...storeInfo
    }

    return res.status(200).json(data)
  } catch (error) {
    return res.status(400).json(error.response)
  }
})

app.listen(port, () => {
  console.log('App is running...')
})
