import React, { useCallback, useState } from 'react'

export default function ListaCallback() {
    const [items, setItems] = useState(["Elemento 1", "Elemento 2"])

    const handleAgregar = useCallback(() => {
        setItems((prevItems) => [...prevItems, `Elemento ${prevItems.length + 1}`])
    }, [items])

  return (
    <div className='componente'>
        <h1>Agregar Elementos</h1>
        <ul>
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
        <button onClick={handleAgregar}>Agregar elemento</button>
    </div>
  )
}
