import React, { useState } from 'react'

export default function CambiarColor() {
    const [color, setColor] = useState("red")
  return (
    <div className='componente'>
        <h1>CambiarColor</h1>
        <div style={{backgroundColor : color, padding: "20px", textAlign : "center",  borderRadius: "10%"}}>
        <p>Color de Fondo: {color}</p>
        <button onClick={() => setColor(color === "red" ? "blue" : "red")}>
            Cambiar Color
        </button>
        </div>
    </div>
  )
}
