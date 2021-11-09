const mongoose = require("mongoose")
const animeScheme = new mongoose.Schema({
    
    title :{
        type : String,
        required : true
    },
    desc :{
        type : String,
    },
    releaseDate :{
        type : Date,
        required : true
    },
    epCount :{
        type : Number,
        required : true
    },
    addedAt : {
        type: Date,
        required: true,
        default : Date.now
    },
    studio: {
        type  : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : "Studio"
    }

})
module.exports = mongoose.model("Anime", animeScheme)
