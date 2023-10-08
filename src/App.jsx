import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Layouts/Home'
import About from './Layouts/About'
import Layouts from './Layouts/Layouts'
import AboutDetail from './components/AboutDetail'

import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {


  useEffect(() => {
    AOS.init({
      duration: 1000
    });
  }, [])

  return (

    <Router>
      <Routes>
        <Route path='/' element={<Layouts />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='about/:name' element={<AboutDetail />} />
        </Route>
        <Route path='login' element={<div>this is login page</div>} />
      </Routes>
    </Router>
  )
}

export default App
