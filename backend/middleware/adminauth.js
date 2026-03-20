const adminAuth = (req,resp,next) =>{
  const {email,password} = req.body
  if(email == 'admin@gmail.com' && password == '12345'){
    next()
  } else{
    resp.send("Access denies")
  }
}
module.exports = adminAuth