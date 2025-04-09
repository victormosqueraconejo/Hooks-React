import React, { useState } from 'react'

export default function MostrarOculto() {
    const [visible, setVisible] = useState(true)
  return (
    <div className='componente'>
        <h1> MostrarOculto</h1>
        <button onClick={() => setVisible(!visible)}>
        {visible ? "Ocultar" : "Mostrar"}
        </button>
        {visible && <p>¡Hola! Este es un mensaje escondido</p>}
    </div>
  )
}
