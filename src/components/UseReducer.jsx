import React, { useReducer } from 'react'
let initialState=0;
let reducer=(state,action)=>{
    switch(action){
    case"increament":
    return state+1
    break;
    case "decrement":
        return state-1;
        break;
    case "reset":
        return 0;
     default: return state       
    }
}
const UseReducer = () => {
const[num,dispatch]=useReducer(reducer,initialState)
  return (
    <div className='box'>
    <h1>{num}</h1>
    <button onClick={()=>dispatch("increament")}>+1</button>
    <button onClick={()=>dispatch("decrement")}>-1</button>
    <button onClick={()=>dispatch("reset")}>reset</button>
    </div>
  )
}

export default UseReducer