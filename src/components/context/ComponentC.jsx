import React, { use } from 'react'
import { useContext } from 'react'
import { userDetailsContext } from './ComponentA'
const ComponentC = () => {
const contextData=useContext(userDetailsContext)
console.log("context value",contextData)
    return (
        <div>
            <h1>Hi i am c</h1>
            <h3>Name:{contextData.userDetails.name}</h3>
        </div>
    )
}

export default ComponentC