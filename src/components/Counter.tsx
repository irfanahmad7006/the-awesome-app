'use client'

import { useState } from "react"
import Message from "./Message";

type CounterProps={
    intValue: number
}
function Counter(props: CounterProps){

    const [counter, setCounter]= useState(props.intValue);
    function inc(){
        console.log(".. increment")
        // setCounter(counter+1)
        // setCounter(counter+1)
        setCounter((agr)=> agr+1)
    }

    function decr(){
        console.log(".. decrement")
        setCounter(counter-1)
    }
    return(
        <div>
            <h3>Counter Components: {counter}</h3>
            <button onClick={inc}>Increment</button>
            <button onClick={decr}>Decrement</button>
            {counter >5 ? <Message text= {''+counter} color='blue'/>:null}
        </div>

    )
}

export default Counter;