import React from 'react'
import axios from 'axios'
import { useState } from 'react'
function UserPage() {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [score,setScore] = useState("")
  const [result,setResult] = useState("")
  const signUp = async() =>{
    await axios.post("http://localhost:5000/api/signup",{
      email,password
    });
    alert("SignUp done")
    setEmail("");
    setPassword("");
  }
  const Login = async() =>{
    await axios.post("http://localhost:5000/api/login",{
      email,password
    });
    alert("Login done")
    setEmail("");
    setPassword("");
  }
  const AddScore = async() =>{
    await axios.post("http://localhost:5000/api/add-score",{
      email,score:Number(score)
    });
    alert("Score Added")
    setScore("");
  }
  const draw = async() =>{
    const res = await axios.get(`http://localhost:5000/api/draw?email=${email} `)
    console.log(res.data)
    setResult(res.data);
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
      {
  result && (
    <div className="border-2 p-3 mt-4 bg-gray-100 text-black">

      <h3>Your Scores: {result.yourScores.join(", ")}</h3>

      <h3>Draw Numbers: {result.draw.join(", ")}</h3>

      <h2 className="font-bold">Match: {result.match}</h2>

      {result.match === 0 ? (
        <h2 className="text-red-600 font-bold">❌ You Lost</h2>
      ) : (
        <h2 className="text-green-600 font-bold">
          🎉 You Won {result.match}
        </h2>
      )}

    </div>
  )
}
    </>
  )
}

export default UserPage
