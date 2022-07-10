const express = require('express')
const router = express.Router()
const DataTemplateCopy = require('../models/RecordModel')

router.post('/submit', (request, response) =>{
    const clickedData = new DataTemplateCopy({
         clickedData:request.body.clickedData,
         ipdata: request.body.ipdata
    })
    clickedData.save()
    .then(data => {
        response.json(data),
        console.log(data.ipcity + "posted")
    })
    .catch(error => {
        response.json(error)
    })
})

router.get('/', (request, response) => {
    DataTemplateCopy.find({}).then((data) => {response.json(data), console.log(data.length + " addresses found")}).catch(( error) => {console.log(error)})
})

module.exports = router