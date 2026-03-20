import React from 'react'
import axios from 'axios'
import { useState } from 'react'
function UserPage() {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [score,setScore] = useState("")
  const signUp = async() =>{
    await axios.post("https://userplaycard-backend.onrender.com/api/signup",{
      email,password
    });
    alert("SignUp done")
  }
  const Login = async() =>{
    await axios.post("https://userplaycard-backend.onrender.com/api/login",{
      email,password
    });
    alert("Login done")
  }
  const AddScore = async() =>{
    await axios.post("https://userplaycard-backend.onrender.com/api/add-score",{
      email,score:Number(score)
    });
    alert("Score Added")
  }
  const draw = async() =>{
    const res = await axios.get(`https://userplaycard-backend.onrender.com/api/draw?email=${email} `)
    console.log(res.data)
    };
    
  
  return (
    <>
      <h2 className='text-2xl text-center font-bold'>User panel</h2>
      <input className='border-2 mt-2 my-2 mx-2 p-1 bg-gray-200 text-black' placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
      <input className='border-2 mt-2 my-2 mx-2 p-1 bg-gray-200 text-black' placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />

      <br /><br />

      <button className='border-2 mx-2 my-2 p-2 bg-gray-800 text-white hover:bg-gray-500 cursor-pointer' onClick={signUp}>Signup</button>
      <button className='border-2 mx-2 my-2 p-2 bg-gray-800 text-white hover:bg-gray-500 cursor-pointer' onClick={Login}>Login</button>

      <br /><br />

      <input className='border-2 mt-2 my-2 mx-2 p-1 bg-gray-200 text-black' placeholder="Score" onChange={(e)=>setScore(e.target.value)} />
      <br /><br />
      <button className='border-2 mx-2 my-2 p-2 bg-gray-800 text-white hover:bg-gray-500 cursor-pointer' onClick={AddScore}>Add Score</button>

      

      <button className='border-2 mx-2 my-2 p-2 bg-gray-800 text-white hover:bg-gray-500 cursor-pointer' onClick={draw}>Run Draw</button>

    </>
  )
}

export default UserPage
