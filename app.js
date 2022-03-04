const express=require('express')
const restaurantRoutes=require('./routes/restaurant')
const bodyParser=require('body-parser')

//create server
const app=express()

//const
const log=console.log
const PORT=7575


//Add middleware
app.use(bodyParser.json())
app.use('/restaurant', restaurantRoutes)


//listen
app.listen(PORT,(req, res)=>{
    log('this app is running on port ${PORT}')
})