import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [mylist,setmylist] = useState( 
  [{id:1,name:"item1"}, 
  {id:2,name:"item2"},
  {id:3,name:"item3"},
  {id:4,name:"item4"}
]);

 const handelremove=(itemID)=>{
  const updatelist=mylist.filter((item)=>item.id!=itemID);
  console.log(updatelist);
  setmylist(updatelist);
 }
  return (
  
      <div>
      {console.log("resndering")}
<ol>
  {mylist.map((item, index) => (
    <li key={item.id}>
      {item.name}<button onClick={()=>handelremove(item.id)}>remove</button></li>
  ))}
</ol>


      </div>
   
  )
}

export default App
