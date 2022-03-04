const express=require('express')
const restaurantController=require('../controllers/restaurant')

//create router
const router=express.Router();

router.get('', restaurantController.getAllRestaurants)
router.get('/:name', restaurantController.getRestaurantByName)
router.post('', restaurantController.addRestaurant)
router.put('', restaurantController.updateRestaurant)
router.delete('', restaurantController.deleterRestaurant)



//exports statement
module.exports=router;