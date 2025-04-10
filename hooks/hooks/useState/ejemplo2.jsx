import React, { useState } from 'react'

export default function CambiarColor() {
    const [color, setColor] = useState("red")
  return (
    <div className='componente'>
        <h1>CambiarColor</h1>
        <div className='contenido'>
        <div style={{backgroundColor : color, padding: "20px", textAlign : "center",  borderRadius: "50px"}}>
        <p>Color de Fondo: {color}</p>
        <button onClick={() => setColor(color === "red" ? "blue" : "red")}>
            Cambiar Color
        </button>
        </div>
        </div>
    </div>
  )
}
