const mongoose=require('mongoose')

const itemSchema=mongoose.Schema({
    itemname:{
        type:String,
        required:true
    },
    itemdesc:{
        type:String,
        required:true
    },
    itemprice:{
        type:String,
        required:true
    },
    menuname:{
        type:String,
        required:true
    },
    itemmenu:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'menus',
        required:true
    }
})

module.exports=mongoose.model("items",itemSchema)