const moongoose = require('mongoose')
const connectDB = async() =>{
 await moongoose.connect("mongodb+srv://sidhartbindal_db_user:mongo1234@cluster0.yxemsaa.mongodb.net/game");
 console.log("db connected")
}
module.exports = connectDB