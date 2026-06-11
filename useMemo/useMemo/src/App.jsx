import { useState, useMemo } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [arr, setArr] = useState([7, 8, 9, 10])

  const showMax = useMemo(() => {

    return(Math.max(...arr))
  }, [arr])

  function addMax() {
    setArr([...arr,count + 5])
    console.log(arr);
    
  }
  return (
    <div>
      <h3>Count = {count}</h3>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <button onClick={addMax}>Add New</button>
      <h5> Max Value = {showMax} </h5>

    </div>
  )
}

export default App
