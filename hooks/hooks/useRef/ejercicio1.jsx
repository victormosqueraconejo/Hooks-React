import React, { useRef } from 'react'

export default function ContadorUseRef() {
    let ref = useRef(0)

    function handleClick() {
        ref.current = ref.current + 1
        alert(`Hiciste click ${ref.current} veces.`)
    }
  return (
    <div className='componente'>
        <h1>Contador con useRef</h1>
        <button onClick={handleClick}>Haz click!</button>
    </div>
  )
}
