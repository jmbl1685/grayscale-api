'use strict'

const express         = require('express')
const ImageProccesing = require('./ImageProccesing')

const app = express()
app.use(express.static('processed_images'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.set('port', process.env.PORT || 3000)

app.post('/', ImageProccesing)

app.listen(app.get('port'), () => {
  console.log(`Server running`)
})