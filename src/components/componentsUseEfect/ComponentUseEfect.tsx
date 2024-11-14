import { useEffect, useState } from "react"


export const ComponentUseEfect = () => {
   const[state,setState]=useState(false);
     useEffect(()=>{
        console.log(state);

     },[state])
  
  
    return (

    <div>
      <p>{state ? "Es true" : "Es false"}</p>
      <button 
      onClick={()=>{
        setState(!state);
      }}
      >Cambiar State</button>
    </div>
  )
}
