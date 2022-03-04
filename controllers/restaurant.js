const { resetWatchers } = require('nodemon/lib/monitor/watch')
const restaurants=require('../models/restaurant.json')

exports.getAllRestaurants=(req, res)=>{
    res.status(200).json({
        message:"GET ALL RESTAURANTS",
        list:restaurants
    })
}

exports.getRestaurantByName=(req,res)=>{
    const filteredRestaurants=restaurants.filter((item)=>item.name==req.params.name)
    restaurants.length ?
    res.status(200).json({
        message:"Restaurant name with specific name",
        list:filteredRestaurants
    }):
    res.status(200).json({
        message:"Restaurant found with zero records",
    
    })
}


exports.addRestaurant=(req, res)=>{
    restaurants.push(req.body)
    res.status(200).json({
        message:"Restaurant added successfully",
        list:restaurants
    })
}


exports.updateRestaurant=(req, res)=>{
    const index=restaurants.findIndex((item)=>item.name==req.body.name)
    restaurants[index].city=req.body.city
    res.status(200).json({
        message:"Restaurant data updated successfully",
        list:restaurants
    })
}


exports.deleterRestaurant=(req, res)=>{
    const index=restaurants.findIndex((item)=>item.id==req.params.id)
    restaurants.splice(index, 2)
    res.status(200).json({
        message:"Restaurant deleted successfully",
        list:restaurants
    })
}