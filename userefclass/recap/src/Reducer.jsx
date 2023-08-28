import React,{ useReducer} from 'react'
const initialState ={totalToy:0,totalSold:0};

function toyStoreReducer(state,action) {
    switch (action.type) {
        case "buyNow":
            return{...state,totalToy: state.totalToy +1}
            case "returntoy":
                return{...state,totalToy: state.totalToy -1 ,totalSold :state.totalSold+1}
                default:
                    return state;
    }
}
function Reducer() {
    
    const [storestate,dispatch] = useReducer(toyStoreReducer,initialState)

    const handlebuy =()=>{
        // console.log(...storestate + "%%%%%%%")
        dispatch({type: 'buyNow',});
    }
    const handlereturn = () => {
        dispatch ({type: 'returntoy'});

    }
  return (
    <div><h1>toy store</h1>
    <p>totalToy {storestate.totalToy}</p>
    <p>toy sold {storestate.totalSold}</p>
    <button onClick={handlebuy}>buy</button>
    <button onClick={handlereturn}>return</button>
    
    </div>
  )
}

export default Reducer