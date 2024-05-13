import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InstagramPhoto from './components/InstagramPhoto'
import Login from './components/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='instagram'>
      <InstagramPhoto />
      <Login />
    </div>
  )
}

export default App
