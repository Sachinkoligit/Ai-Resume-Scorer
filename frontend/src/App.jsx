import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Sidebar from './components/sidebar'
import { Route, Routes } from 'react-router-dom'
import Dashboard from "./components/Dashboard/Dashboard"
import History from "./components/History/History"
import Admin from "./components/Admin/Admin"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Sidebar/>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/history' element={<History/>}/>
        <Route path='/admin' element={<Admin/>}/>
      </Routes>
    </div>
  )
}

export default App
