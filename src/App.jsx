import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>Welcome to our app PFA YATA</h2>
      <Button>Click me</Button>
    </>
  )
}

export default App