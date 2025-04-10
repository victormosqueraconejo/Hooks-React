import React, { useState } from 'react'

export const Contador = () => {
    const [contador, setContador] = useState(0)

    function handleClick() {
        setContador( contador + 1)
    }
  return (
    <div className='componente'>
        <h1>Contador</h1>
        <div className='contenido'>
          <button onClick={handleClick}>
              Hiciste clic {contador} veces
          </button>
        </div>
    </div>
  )
}
