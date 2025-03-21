const items=require('../model/itemModel')
const menus=require('../model/menuModel')

exports.addItemController=async(req,res)=>{
    console.log("Inside addItemController");
    const{itemname,itemdesc,itemprice,menuname}=req.body
    try
    {
        const existingMenu=await menus.findOne({menuname:menuname})
        if(!existingMenu)
            {
                res.status(406).json("Menu Not found")
            }
        const existingItem=await items.findOne({itemname:itemname})
        if(existingItem)
        {
            res.status(406).json("Item Already exists")
        }
        else
        {
            const newItem= new items({
                itemname,itemdesc,itemprice,menuname,itemmenu:existingMenu._id
            })
            await newItem.save()
            res.status(200).json(newItem)
        }
    }
    catch(err)
    {
        res.status(401).json(err)
    } 
    
}

exports.getItemController=async(req,res)=>{
    console.log("Inside getItemController");
    const menu=req.query.menuname
    console.log(menu);
    const query={}
    if(menu)
    {
        query.menuname=menu
    }
    try
    {
        const allItems=await items.find(query)
        res.status(200).json(allItems)
    }
    catch(err)
    {
        res.status(401).json(err)
    }  
}