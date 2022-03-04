const mongoose=require("mongoose")

const restaurantSchema= new mongoose.Schema({
    name:{
        type:String,
    required:true
},
city_id:{
    type:String,
    required:true
}, 
location:{
    type:String,
    required:true
},
country_name:{
    type:String,
    required:true
}
})



module.exports=mongoose.model("Locations",restaurantSchema, "location")