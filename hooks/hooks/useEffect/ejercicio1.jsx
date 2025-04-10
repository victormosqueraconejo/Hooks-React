import React, { useEffect, useState } from 'react'

export default function Ejemplo1UseEffect() {
    const [contador, setContador] = useState(0)

    useEffect(() => {
        console.log("El contador ha cambiado: " + contador)
    }, [contador])

  return (
    <div className='componente'>
        <h1>Ejemplo UseEffect Contador</h1>
        <p>Contador: {contador}</p>
        <button onClick={() => setContador(contador + 1)}>Incrementar</button>
    </div>
  )
}

