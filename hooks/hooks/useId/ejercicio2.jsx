import React, { useId } from 'react'

export default function FormUseId() {
    const id = useId()
  return (
    <div className='componente'>
        <h1>Formulario con useId</h1>
        <form>
            <label htmlFor={id + "-firstName"}>Nombre:</label>
            <input type="text" id={id + "-firstName"}/>

            <label htmlFor={id + "-firstName"}>Nombre:</label>
            <input type="text" id={id + "-firstName"}/>
        </form>

    </div>
  )
}
