import { useState } from "react"



export const ComponentCounter = () => {
    //Hook UseState, renderiza solo el componente modificado
    const[counter,setCounter]=useState<number>(0)

    const incrementCounter=() =>{
        setCounter((prev)=> prev+1)
    }
    const decrementCounter=() =>{
        if(counter>0)
        setCounter((prev)=> prev-1)
    }

  return (
    <div>
        <h2> valor de conunter: {counter} </h2>

        <button onClick={incrementCounter}> Incrementar</button>
        <button onClick={decrementCounter}> Decrementar</button>

    </div>
  )
}
