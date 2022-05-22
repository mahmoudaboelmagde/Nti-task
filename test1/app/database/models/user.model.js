const mongoose = require("mongoose")
const validator = require("validator")
const userSchema = mongoose.Schema({
        name:{
            type:String,
            tirm:true,
            required:true,
            
        },
        email:{
            type:String,
            tirm:true,
            requierd:true,
            validate(value){
                if(!validator.isEmail(value))throw new Error("invalid Email address")
            }
        }
        
        
    },{
        timestamps:true
    })
    const User = mongoose.model("User",userSchema)

module.exports = User