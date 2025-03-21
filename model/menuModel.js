const mongoose=require("mongoose")

const menuSchema=new mongoose.Schema({
    menuname:{
        type:String,
        required:true
    },
    menudesc:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model("menus",menuSchema)