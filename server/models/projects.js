const mongoose = require("mongoose")

const projectsSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    technologies:{
        type:Array,
        required:true
    },
    description:{
        type:Object,
        required:true
    },
    link:{
        type:String,
    },
    github:{
        type:String,
        required:true
    },
    thumbnail:{
        type: String,
        required:true
    },
    longDesc:{
        type:Object,
        required:true
    },
    images:{
        type:Array,
    },
    moreContent:{
        type:Object,
    }

})


module.exports = mongoose.model("Project", projectsSchema)