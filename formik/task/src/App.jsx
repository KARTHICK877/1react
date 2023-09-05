import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import { List } from './List';
import { AddEdit } from './AddEdit';
function App() {
  const [count, setCount] = useState(0)

  return (
    <Switch>
    <Route exact path={path} component={List} />
    <Route path={`${path}/add`} component={AddEdit} />
    <Route path={`${path}/edit/:id`} component={AddEdit} />
</Switch>
  )
}

export default App
