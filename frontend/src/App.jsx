import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'

import Layout from './layout/layout';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe'
import ContactMe from './pages/ContactMe'
import Blog from './pages/Blog'
import Projects from './pages/Projects'

function App() {
  return (
   <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<AboutMe/>} />
          <Route path="/contact" element={<ContactMe />} />
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/projects' element={<Projects/>} />
         </Route>
      </Routes>
    </Router>
  )
}

export default App
