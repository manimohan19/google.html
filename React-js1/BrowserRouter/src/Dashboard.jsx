import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { nameContext } from './App'

const Dashboard = () => {

  const { name } = useContext(nameContext)

  const navigate = useNavigate()

  function handleLogout() {

    navigate("/")

  }

   function handleNext() {

    navigate("/profile")

  }

  return (
    <div>

      <h1>Welcome {name}</h1>

      <button onClick={handleLogout}>
        Logout  
      </button>
      <button onClick={handleNext}>Go To Profile</button>

    </div>
  )
}

export default Dashboard