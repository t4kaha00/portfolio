const mongoose = require('mongoose')

const DataTemplate = new mongoose.Schema({
    clickedData:{
        type:Boolean,
        required:true
    },
    ip:{
        type:String
    },
    ipcountry:{
        type:String
    },
    ipcity:{
        type:String
    },
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('CLickedDataTable', DataTemplate)