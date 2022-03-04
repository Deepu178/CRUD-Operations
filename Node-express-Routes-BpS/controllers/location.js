
const Locations=require('../models/location')

exports.getAllLocations=(req, res)=>{
Locations.find().then(
    result=>{
        res.status(200).json({
            message:"locations fetched successfully",
            list:result
        })
    }
).catch(
    error=>{
        res.status(500).json({
            message:"errror in database",
            list:error
        })
    }
)
}