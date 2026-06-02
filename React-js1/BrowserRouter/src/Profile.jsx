  import React, { useContext } from 'react'
  import { useNavigate } from 'react-router-dom'

  import { nameContext } from './App'

  function Profile() {
      const { name } = useContext(nameContext)
      const navigate = useNavigate()

      function handelBack(){
          navigate('/')
      }
    return (

      <div>
          <h1>{name} Profile</h1>
        <button onClick={handelBack}>Back</button>
          </div>
    )
  }
  export default Profile