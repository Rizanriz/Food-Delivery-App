import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRouter.js"
import 'dotenv/config.js'
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRouter.js"

//app config
const app = express()
const port = process.env.PORT || 4000

//middleware
app.use(express.json())
app.use(cors())

//db connection
connectDB()

//api endpoints
app.use("/api/food",foodRouter) 
app.use("/images",express.static('uploads')) //displays on browser
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)


app.get("/",(req,res)=>{
    res.send("API working")
})

app.listen(port,()=>{
    console.log(`Server started at http://localhost:${port}`);
})

//mongodb+srv://rizanr7118:2000@cluster0.3uusfpk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0