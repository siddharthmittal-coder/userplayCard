const moongose = require('mongoose')
const userSchema = new moongose.Schema({
  email:String,
  password:String,
  scores:{
    type:[Number],
    default:[]
  }
})
module.exports = moongose.model("User",userSchema)