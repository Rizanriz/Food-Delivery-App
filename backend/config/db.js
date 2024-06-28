import mongoose from "mongoose"

export const connectDB = async ()=>{
    await mongoose.connect("mongodb+srv://rizanr7118:2000@cluster0.3uusfpk.mongodb.net/food-delivery")
    .then(()=>console.log("DB Connected"))
}

//mongodb+srv://rizanr7118:2000@cluster0.3uusfpk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0