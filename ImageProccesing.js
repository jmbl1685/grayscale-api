'use strict'

const Jimp = require('jimp')
const shortid = require('shortid')
const { resolve } = require('path')
const fetch = require('node-fetch')

const ImageProccesing = async (req, res) => {

  try {

    const response = await fetch(req.body.url)
    const loaded_image = await response.arrayBuffer()
    const image = await Jimp.read(loaded_image)
    const filename = `${shortid.generate()}.${image.getExtension()}`

    const _image = image
      .greyscale()
      .write(`processed_images/${filename}`)

    /* const buffer = await image.greyscale().getBufferAsync(image.getMIME()) */

    res.status(200)
      .send({
        url: `http://localhost:3000/${filename}`
      })

  } catch (err) {
    res.status(404).send({ err })
  }

}

module.exports = ImageProccesing