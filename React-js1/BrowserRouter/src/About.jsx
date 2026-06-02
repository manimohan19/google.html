import { Navigate, useNavigate } from "react-router-dom"

 function About() {
  const navigate = useNavigate()
  function HomePage() {
    navigate("/")
  }
  return (
    <div>About
    <button onClick={HomePage}>Home</button>
    </div>
  )
}

export default About