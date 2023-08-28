import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import{BrowserRouter as Router,Route,Link, Routes} from 'react-router-dom'
import Fullstack from './Fullstack'
import Datascices from './Datascices'
import Cyber from './Cyber'
import logo from './assets/Image/logo.png'

import Career from './Career'
import 'bootstrap/dist/css/bootstrap.min.css';

import All from './All'
function App() {
  

  return (
   <Router>
    <nav className='nav1'>
    <img width={121}height={50}  src= {logo} alt="" />
    <div className='item1'>Course</div>
    <div className='item2'>Live-class</div>
    <div  className='item3'>Practice</div>
    <div className='item4' >Resouse</div>
    
    </nav>
    <div><hr /></div>
    <img width={1500}height={220} src="https://www.guvi.in/blog/wp-content/uploads/2022/10/blog-header-2048x315.png" alt="" />
    <nav>
    <Link to='/' className='link'>All</Link>
    <Link to='/All-category-full-stack-developer' className='link'>Full Stack Developer</Link>
    <Link to='/All-category-data-science' className='link'>Data Science</Link>
    <Link to='/All-category-cyber-security'  className='link'>Cyber Security</Link>
    <Link to='/All-category-career'  className='link'>Career</Link>
    </nav>
    <div><hr /></div>
    <Routes>
    <Route path='/' exact Component={All}></Route>
    <Route path='/All-category-full-stack-developer' exact Component={Fullstack}></Route>
    <Route path='/All-category-data-science' exact Component={Datascices}></Route>
    <Route path='/All-category-cyber-security' exact Component={Cyber}></Route>
    <Route path='/All-category-career' exact Component={Career}></Route>
    </Routes>
   </Router>
  )
}

export default App
