const express = require('express')
const app = express();
const cors = require("cors")
const connectDB = require('./config/db.js')
const userRoutes = require('./routes/userRoutes.js')
const adminAuth = require('./routes/adminRoutes.js')
app.use(cors())
app.use(express.json());
// db connected
connectDB(); 
// Routes
app.use("/api",userRoutes)
// adminRoutes
app.use("/admin",adminAuth)
app.get('/',(req,resp) =>{
  resp.send("Server start")
});
app.listen(5000,() =>{
  console.log("Server start as 5000")
})