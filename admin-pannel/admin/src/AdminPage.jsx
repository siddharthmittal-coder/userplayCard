import axios from "axios";
import { useState } from "react";

function AdminPage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Get Users
  const getUsers = async () => {
    const res = await axios.post("http://localhost:5000/admin/all-users", {
      email,
      password
    });

    console.log(res.data);
    alert("Users fetched - check console 👀");
  };

  // Run Draw
  const runDraw = async () => {
    const res = await axios.post("http://localhost:5000/admin/run-draw", {
      email,
      password
    });

    console.log(res.data);
    alert("Draw done - check console 🎯");
  };

  return (
    <div>
      <h2 className="text-2xl text-center mt-2 my-2">Admin Panel</h2>

      <input className='border-2 mt-2 my-2 mx-2 p-1 bg-gray-200 text-black' placeholder="Admin Email" onChange={(e)=>setEmail(e.target.value)} />
      <input className='border-2 mt-2 my-2 mx-2 p-1 bg-gray-200 text-black' placeholder="Admin Password" onChange={(e)=>setPassword(e.target.value)} />

      <br /><br />

      <button className='border-2 mx-2 my-2 p-2 bg-gray-800 text-white hover:bg-gray-500 cursor-pointer' onClick={getUsers}>Get All Users</button>
      <button className='border-2 mx-2 my-2 p-2 bg-gray-800 text-white hover:bg-gray-500 cursor-pointer' onClick={runDraw}>Run Draw</button>
    </div>
  );
}

export default AdminPage;