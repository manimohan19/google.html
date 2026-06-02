import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Login from './Login'
import Dashboard from './Dashboard'
import Cart from './Cart'
import Home from './Home'
import { createContext, useState } from 'react'
import Profile from './Profile'
export const nameContext = createContext()
export const cartContext = createContext()
function App() {
  const [name, setName] = useState("")
  const [cartcount, setCartcount ] = useState(0)
  return (
    <div>
      
      {/* <BrowserRouter>

        <Link to={"/"}>Home</Link>
        <Link to={"/About"}>About</Link>
        <Link to={"/Contact"}>Contact</Link>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>

      </BrowserRouter> */}
      <nameContext.Provider value={{ name, setName ,cartcount,setCartcount}}>
       <BrowserRouter>
       <Link to={"/Home"}>Home</Link>
        <Link to={"/"}>Login</Link>
        <Link to={"/dashboard"}>Dashboard</Link>
        <Link to={"/profile"}>Profile</Link>
        <Link to={"/Cart"}>Cart</Link>

        <Routes>
          <Route path='/Home' element={<Home/>}/>
          <Route path='/' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/Cart' element={<Cart/>}/>
        </Routes>

      </BrowserRouter>
      </nameContext.Provider>
      
    </div>
  )
}

export default App