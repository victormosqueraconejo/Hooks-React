import React, { useEffect, useState } from 'react'

export default function TemporizadorEffect() {
    const [segundos, setSegundos] = useState(0)

    useEffect(() => {
        const intercvalo = setInterval(() => {
            setSegundos(prevSegundo => prevSegundo + 1)
        }, 1000)

        return () => clearInterval(intercvalo)

    }, [])


  return (
    <div className='componente'>
        <h1>Temporizador con Effect</h1>
        <div>Segundos: {segundos}</div>
    </div>
  )
}
