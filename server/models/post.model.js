//const mongoose = require('mongoose')

const postSchema = new require('mongoose').Schema({
    name: {type:String, required:true},
    review: {type:String, required:true},
    price: {type:String, required:true},
    myfile: {type:String, required:true}
})

module.exports= require('mongoose').models.posts || require('mongoose').model('post',postSchema)

