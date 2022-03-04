const Restaurants=require('../models/restaurant')

exports.getAllRestaurants=(req, res)=>{
    Restaurants.find().then(
      result=>{res.status(200).json({
            message:"get all list of restaurants",
            list:result
        })
    }
    ).catch(
error=>{
    res.status(500).json({
        message:"error in database",
        error:error
    })
}
    )
}


exports.getRestaurantByName=(req, res)=>{
const filter={name:req.params.name}

Restaurants.find(filter).then(
    result=>{res.status(200).json({
          message:"get all list of restaurants",
          list:result
      })
  }
  ).catch(
error=>{
  res.status(500).json({
      message:"error in database",
      error:error
  })
}
  )

}



exports.getRestaurantByFilter=(req,res)=>{
    const filter={ }

if(req.body.city_id){
    filter.city=req.body.city_id
    console.log('filter: ', filter)
}

if(req.body.lcost && req.body.hcost){
    if(req.body.locst == 0){
        filter.cost={
            $lte:req.body.locst
        }
    }
    else{
        filter.cost={
            $lt:req.body.hcost,
            $gt:req.body.lcost
        }
    }
    console.log('filter: ', filter)
}



if(req.body.cuisine && req.body.cuisine.length>0){
    filter['Cuisine.name']={ $in : req.body.cuisine }
}
Restaurants.find().then(
    result=>{res.status(200).json({
          message:"get all list of restaurants",
          list:result
      })
  }
  ).catch(
error=>{
  res.status(500).json({
      message:"error in database",
      error:error
  })
}
  )


}