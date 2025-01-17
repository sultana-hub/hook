import React, { useState } from 'react'
import ComponentB from './ComponentB'
export const userDetailsContext=React.createContext(null)
const ComponentA = () => {
    let[userDetails,setDetails]=useState({name:"Happy",age:23,toggle:false});
  let changeDetails=()=>{
    if(userDetails.toggle===false){
        setDetails({...userDetails,name:"John Doe",age:20,toggle:true})
    }
    else{
        setDetails({...userDetails,name:"Happy",age:23,toggle:false})
    }
  }
  return (
    <div>
         <h1>Hi i am A</h1>
       
        <hr/>
        <userDetailsContext.Provider value={{userDetails,changeDetails}}>
        <ComponentB/>
        </userDetailsContext.Provider>
    </div>
  )
}

export default ComponentA