import foodModel from "../models/foodModel.js";
import fs, { unlink } from 'fs'


//Add food item
const addFood = async (req,res) =>{
//to store the filename of uploaded image
    let image_filename = `${req.file.filename}`

    const food = new foodModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_filename
    }) 
    try {
        await food.save()
        res.json({success:true,message:"Food added"})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

// list all food
const listFood = async (req,res)=>{
    try {
        const foods = await foodModel.find({})
        res.json({success:true,data:foods})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:Error})
    }
}

//remove food item
const removeFood = async (req,res)=>{
    try {
        const food = await foodModel.findById(req.body.id)
        fs.unlink(`uploads/${food.image}`,()=>{}) //to remove from uploads

        await foodModel.findByIdAndDelete(req.body.id) //to remove from mongoDB
        res.json({success:true,message:"Food removed"})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:Error})
    }   
}   

export {addFood,listFood,removeFood}