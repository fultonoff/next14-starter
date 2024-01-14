import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true, min:3, max:20 },
  email:{
    type :String ,required:true,unique:true,lowercase:true, max:50
  },
  password: {type: String, required: true, min:6},
  image:{
    type: String,

  },
  isAdmin:{
    default: false,
    type: Boolean
  }
}, {timestamps: true});



const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description:{
    type :String ,required:true,
  },
  image:{
    type: String,

  },
  userId:{
    required: true,
    type: String
  },
  slug:{
    required: true,
    type: String,
    unique:true
  }
}, {timestamps: true});
