const express = require('express')
const router = express.Router()
const DataTemplateCopy = require('../models/RecordModel')

router.post('/submit', (request, response) =>{
    const clickedData = new DataTemplateCopy({
         clickedData:request.body.clickedData
    })
    clickedData.save()
    .then(data => {
        response.json(data)
    })
    .catch(error => {
        response.json(error)
    })
})

module.exports = router