import { useState,createContext } from "react";

const counter=counter()

function counterProvider(props){
    const [count,setcount]=useState(0);
    function increase (){
        setcount(count +1);
    }
    function decrease(){
        setcount(count -1);
    }
    return(
        <counter.Provider value={{count,increase,decrease}}>
 {props.children}


        </counter.Provider>
    )
}
export default counterProvider