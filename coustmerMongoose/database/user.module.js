const mongoose = require("mongoose");
const validator = require("validator");
const User = mongoose.model("User", {
  name: {
    type: String,
    tirm: true,
    maxLegth: 20,
    minLength: 3,
    requierd: true,
  },
  email: {
    type: String,
    tirm: true,
    requierd: true,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value)) throw new Error("invalid Email");
    },
  },
  password: {
    type:String,
    trim:true,
    required:true,
    validate(value){
        if(value.includes('password')) throw new Error("week pass")
    }
  },
  gender: {
    enum: ["male", "female"],
    type: String,
    trim: true,
    required: true,
    lowercase: true,
  },
  age: {
    type: Number,
    min: 21,
    max: 60,
  },
  tran: {
    
  },
  status: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

module.exports = User;
