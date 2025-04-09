import React, { useCallback, useState } from 'react'

export default function ContadorCallback() {
    const [contador, setContador] = useState(0)
    const incrementar = useCallback(() => {
        setContador((prev) => prev + 1)
    }, [])
  return (
    <div className='componente'>
        <h1>Contador con useCallback</h1>
        <p>Contador: {contador}</p>
        <button onClick={incrementar}> Incrementar</button>
    </div>
  )
}
