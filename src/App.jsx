import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
      <h1>Awal</h1>
    </div>
  )
}

export default App
