const express = require('express')
const router = express.Router()
const https = require('https')
const DataTemplateCopy = require('../models/RecordModel')

const GEOLOCATION_TIMEOUT_MS = 5000

// Fire-and-forget visit logging. Always answers { ok: true } so analytics
// can never break or leak anything to the client.
router.get('/visit', (request, response) => {
  const ip =
    (request.headers['x-forwarded-for'] || '').split(',')[0].trim() ||
    request.socket.remoteAddress

  const respondOk = () => {
    if (!response.headersSent) {
      response.json({ ok: true })
    }
  }

  const geoRequest = https.get(
    `https://geolocation-db.com/json/${ip}`,
    { timeout: GEOLOCATION_TIMEOUT_MS },
    (res) => {
      let data = ''
      res.on('data', (chunk) => {
        data += chunk
      })
      res.on('end', () => {
        respondOk()
        try {
          const ipdata = JSON.parse(data)
          DataTemplateCopy.create({ clickedData: true, ipdata }).catch(
            () => {} // Logging failures must never affect the client
          )
        } catch (err) {
          // Malformed geolocation response — ignore
        }
      })
    }
  )

  geoRequest.on('timeout', () => geoRequest.destroy())
  geoRequest.on('error', respondOk)
})

module.exports = router
