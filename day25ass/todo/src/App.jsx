import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const[iscompleteScreen,setiscompletescreen] = useState(false);
 const[alltodos,setalltodos]=useState([''])
 const[newtitle,setNewtitle] = useState("");
 const[newdescription,setNewdescription] = useState("");
 const[completedtodos,setCompletedtodos] = useState([]);

 
const handleAddTodo=(event) =>{
  let newtodoitem={
    title:newtitle,
    description:newdescription,
    
  }
  let updatedtodoarr=[...alltodos];
  updatedtodoarr.push(newtodoitem);
  
  setalltodos(updatedtodoarr);
  localStorage.setItem('todolist', JSON.stringify( updatedtodoarr));
};

const handledeletodo =(index,)=>{
  let reducedtodo =[...alltodos];
  reducedtodo.splice(index ,1);
  localStorage.setItem ('todolist',JSON.stringify(reducedtodo));
  setalltodos(reducedtodo);
}
const handlecomplet=(index)=>{
  let now =new Date();
  let dd=now.getDate();
  let mm=now.getMonth()+1;
  let yyyy=now.getFullYear();
  let h=now.getHours();
  let m=now.getMinutes();
  let s=now.getSeconds();
  let completedon=dd+'-'+mm+'-'+yyyy+ ' '+'at'+' '+h+':'+m+':'+s;
  let filtereditem={
    ...alltodos[index],
    completedon:completedon

  }
  let updatedcompletedtodoarr=[...completedtodos];
  updatedcompletedtodoarr.push(filtereditem);
  setCompletedtodos(updatedcompletedtodoarr);
  handledeletodo(index);
  localStorage.setItem('completedtodos', JSON.stringify( updatedcompletedtodoarr));
}

const handledelecompletedtodo = (index)=>{
  let reducedtodo =[...completedtodos];
  reducedtodo.splice(index,1);
  localStorage.setItem ('completedtodos',JSON.stringify(reducedtodo));
  setCompletedtodos(reducedtodo);
}


useEffect(()=>{
  let savedtodo=JSON.parse (localStorage.getItem('todolist'));
  let Savecompletedtodo=JSON.parse (localStorage.getItem('completedtodos' ));
  if(savedtodo){
    setalltodos(savedtodo);
  }
  if(Savecompletedtodo){
    setCompletedtodos(Savecompletedtodo);
  }
},[])








  return (
    <>
      <h1>My todo</h1>
      <div className="todo-wrapper">
        <div className="todo-input">
          <div className="todo-input-item">       
            <label htmlFor="">Name</label>
            <form action=""></form>
            <input type="text" className="inputname" value={newtitle} onChange={(Event)=>setNewtitle(Event.target.value.trim())}placeholder="Todo Name:" />
          </div>   
          <div className="todo-input-item">
            <label htmlFor="">Description</label>
            <input type="text" value={newdescription} onChange={(Event)=>setNewdescription(Event.target.value.trim())} placeholder="Todo Description:"/>
          </div>
          <div className="todo-input-item">
            <button type="button" onClick={handleAddTodo} className="primarybtn">
              Add Todo
            </button>
          </div>
       
        </div>
        <div className="btn-area">
          <button className={`secondarybtn iscompleteScreen ${iscompleteScreen===false  && 'active'}`}onClick={()=>setiscompletescreen(false)} >Todo</button>
          <button className={` secondarybtn iscompleteScreen ${iscompleteScreen===true   && 'active'}`}onClick={()=>setiscompletescreen(true)} >Status </button>
        </div>
        <div className="todo-list">
        {iscompleteScreen===false&& alltodos.map((item,index)=>{
          return(
            <div className="todo-list-item" key={index}>
            <h2>{item.title}</h2>
            <p>{item. description}</p>
            <div>
            <button className="icon" onClick={()=>handledeletodo(index)}>delete</button>
            <button className="check-icon" onClick={()=>handlecomplet(index)}>check</button>
          </div>
          </div>
          )
         })}
         {iscompleteScreen===true && completedtodos.map((item,index)=>{
          return(
            <div className="todo-list-item" key={index}>
            <h2>{item.title}</h2>
            <p>{item. description}</p>
            <p><small>completed on: {item. completedon}</small></p>
            <div>
            <button className="icon" onClick={()=>handledelecompletedtodo(index)}>delete</button>
          
          </div>
          </div>
          );
         })}
           
        </div>
      </div>
    </>
  );
}

export default App;
