const mongoose = require("mongoose")

const studioScheme = new mongoose.Schema({
    name :{
        type : String,
        required : true
    }

})
module.exports = mongoose.model("Studio", studioScheme)