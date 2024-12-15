import { useState } from 'react'
import Calculat from './Components/Calculat'


import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Calculat/> 
    </>
  )
}

export default App
