const express=require('express')

const menuController=require('../controller/menuController')
const itemController=require('../controller/itemController')

const router=express.Router()

router.post('/addMenu',menuController.addMenuController)
router.get('/getMenu',menuController.viewAllMenuController)

router.post('/addItem',itemController.addItemController)
router.get('/getItem',itemController.getItemController)

module.exports=router