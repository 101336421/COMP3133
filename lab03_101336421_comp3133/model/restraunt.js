const mongoose = require('mongoose')

const RestaurantSchema = new mongoose.Schema({
    address:{
        buidling:{
            type: Number
        },
        street:{
            type:String
        },
        zipcode:{
            type:Number
        }
    },
    city:{
        type:String,
        required:true
    },
    cuisine:{
        type:String,
        required:true
    },
    name:{
        type:String, 
        required:true
    },
    restraunt_id:{
        type:Number,
        required:true
    }

})

const Restaurant = mongoose.model('Restaurant',RestaurantSchema)
module.exports = Restaurant