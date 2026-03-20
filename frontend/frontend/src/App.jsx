import { useState } from 'react'

import './App.css'
import UserPage from './UserPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UserPage/>
    </>
  )
}

export default App
