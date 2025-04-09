import React, { useReducer, useState } from 'react'

const initialState = {count : 0}

function reducer (state, action ) {
    switch (action.type) {
        case "increment":
            return {count: state.count + 1}
        case "decrement":
            return {count: state.count - 1}
        case "reset":
            return {count: 0}
        default :
            return state
    }
}

export default function ContadorConUseReduce() {

    const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div className='componente'>
        <h1>Contador con useReduce</h1>
         <p>Contador: {state.count}</p>
        <button onClick={() => dispatch({ type: 'increment' })}>Incrementar</button>
        <button onClick={() => dispatch({ type: 'decrement' })}>Decrementar</button>
        <button onClick={() => dispatch({ type: 'reset' })}>Resetear</button>
    </div>
  )
}

