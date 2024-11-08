import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Inventorymanagement from './pages/Inventorymanagement'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Inventorymanagement/>
    </>
  )
}

export default App
