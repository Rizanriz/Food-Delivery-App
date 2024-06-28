import mongoose from 'mongoose' 

const userShema = new mongoose.Schema({
    name:{
    type:String,
    required:true
    },
    email:{
    type:String,
    required:true,
    unique:true
    },
    password:{
    type:String,
    required:true
    },
    cartData:{
    type:Object,
    default:{}
    }
},{minimize:false})//to add an empty cart without any data


const userModel = mongoose.model.user || mongoose.model("user",userShema)

export default userModel    