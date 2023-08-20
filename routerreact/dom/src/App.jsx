
import './App.css'
import{BrowserRouter as Router,Route,Link, Routes} from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'
import House from './House'
import Animals from './Animals'

function App() {
 

  return (
  <Router>
    <div>
      <nav>
        <ul>
          {/* <li><Link to='/'>home</Link></li>
          <li><Link to='/contact'>contact</Link></li>
          <li><Link to='/house'>house</Link></li> */}
          <li><Link to='/animal/dog'>dog</Link></li>
          <li><Link to='/animal/cat'>cat</Link></li>
          <li><Link to='/animal/fish'>fish</Link></li>
        </ul>
      </nav>
      <Routes>
      {/* <Route path='/' exact Component={Home}> </Route>
      <Route path='/contact' exact Component={Contact}> </Route>
      <Route path='/house' exact Component={House}> </Route> */}
       <Route path='/animal/:name' Component={Animals}> </Route>
      </Routes>
    </div>
  </Router>
  )
}

export default App
