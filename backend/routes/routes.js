const express = require('express')
const router = express.Router()
const https = require('https')
const DataTemplateCopy = require('../models/RecordModel')

router.get('/visit', async (request, response) => {
  const ip =
    (request.headers['x-forwarded-for'] || '').split(',')[0].trim() ||
    request.socket.remoteAddress

  https
    .get(`https://geolocation-db.com/json/${ip}`, (res) => {
      let data = ''
      res.on('data', (chunk) => (data += chunk))
      res.on('end', async () => {
        try {
          const ipdata = JSON.parse(data)
          const record = new DataTemplateCopy({
            clickedData: true,
            ipdata
          })
          await record.save()
          response.json({ ok: true }) // Return nothing revealing
        } catch (err) {
          response.json({ ok: true }) // Fail silently to client
        }
      })
    })
    .on('error', () => response.json({ ok: true }))
})

router.post('/submit', (request, response) => {
  const clickedData = new DataTemplateCopy({
    clickedData: request.body.clickedData,
    ipdata: request.body.ipdata
  })
  clickedData
    .save()
    .then((data) => {
      response.json(data), console.log(data.ipcity + 'posted')
    })
    .catch((error) => {
      response.json(error)
    })
})

router.get('/', (request, response) => {
  DataTemplateCopy.find({})
    .then((data) => {
      response.json(data), console.log(data.length + ' addresses found')
    })
    .catch((error) => {
      console.log(error)
    })
})

module.exports = router
