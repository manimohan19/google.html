import React, { useContext, useEffect } from 'react'
import { nameContext } from './App'
import { useNavigate } from 'react-router-dom'

function Login() {

  const { setName } = useContext(nameContext)

  const navigate = useNavigate()

//   useEffect(() => {

//     console.log("Component Rendered")

//   }, [])

  function handleLogin() {

    navigate("/dashboard")

  }

  return (
    <div>

      <h1>Login Page</h1>

      <input
        type='text'
        placeholder='enter name'
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={handleLogin}>
       Login
      </button>
     
      

    </div>
  )
}

export default Login