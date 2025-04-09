import React, { useCallback, useState } from 'react'

export default function ListaCallback2() {
    const [tareas, setTareas] = useState([])

    const agregarTarea =useCallback(() => {
        const nuevaTarea = `Tarea ${tareas.length + 1}`
        setTareas([...tareas, nuevaTarea])
    }, [tareas])

    const eliminarTarea = useCallback((index) => {
        setTareas(tareas.filter((_, i) => i !== index))
    }, [tareas])

  return (
    <div className='componente'>
        <h1>Lista de Tareas con Callback</h1>
        <button className='text-2x1 rounded mt-5 bg-amber-200 px-4' onClick={agregarTarea}> Nueva Tarea</button>
        <ul>
            {tareas.map((tarea, index) => (
                <li className='flex justify-around' key={index}>{tarea}
                <button className='rounded mt-5 bg-amber-600 px-4' onClick={() => eliminarTarea(index)}> Borrar</button>
                </li>
                
            ))}
        </ul>
    </div>
  )
}
