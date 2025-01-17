import React,{useRef} from 'react'

const UseRef = () => {
const inputElement=useRef(null);


const handleSubmit=(event)=>{
event.preventDefault();
console.log(" current input field",inputElement.current)
console.log("Submitted Value",inputElement.current.value)
inputElement.current.style.backgroundColor="skyblue"
inputElement.current.style.color="white"
};

  return (
    <div className='box'>
        <form onSubmit={handleSubmit}>
           <input ref={inputElement} type="text"/>
           <button type="submit">Click</button>
        </form>

    </div>
  )
}

export default UseRef