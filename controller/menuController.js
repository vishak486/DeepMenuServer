const menus=require('../model/menuModel')

exports.addMenuController=async(req,res)=>{
    console.log("Inside addMenuController");
    const {menuname,menudesc}=req.body
    try
    {
        const existingMenu=await menus.findOne({menuname})
        if(existingMenu)
        {
            res.status(406).json("Menu Already Exist!!!Please try another one")
        }
        else
        {
            const newMenu=new menus({
                menuname,menudesc
            })
            await newMenu.save()
            res.status(200).json(newMenu)
        }
    }
    catch(err)
    {
        res.status(401).json(err)
    }
    
}

exports.viewAllMenuController=async(req,res)=>{
    console.log("Inside viewAllMenuController");
    try
    {
        const allMenu=await menus.find()
        res.status(200).json(allMenu)
    }
    catch(err)
    {
        res.status(401).json(err)
    }
    
}