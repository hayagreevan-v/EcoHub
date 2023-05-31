const mongoose = require("mongoose")

//mongoose.connect('mongodb+srv://210701118:keerthi@cluster0.ocrpsfa.mongodb.net/dbmsProject?retryWrites=true&w=majority',{useNewUrlParser: true}).catch(e =>
mongoose.connect('mongodb+srv://hayagreevan:hayagreevan@cluster0.sjx3gfu.mongodb.net/ecohub?retryWrites=true&w=majority',{useNewUrlParser: true}).catch(e =>
{
    console.error('Connection Error',e.message)
})

const db = mongoose.connection
module.exports =db
