import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

//import './App.css'
import HomePage from './pages/home/HomePage'
import BlogPage from './pages/blog/BlogPage'
import AboutPage from './pages/about/AboutPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/blog" element={<BlogPage/>}/>
        <Route path="/*" element={<HomePage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
