import React, { useEffect, useState } from 'react'

export default function PeticionAPI() {
  const [datos, setDatos] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  const url = "https://jsonplaceholder.typicode.com/users"
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responde = await fetch(url)
        if (!responde.ok) throw new Error("Error al obtener los datos")
        const data = await responde.json()
        setDatos(data)

      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])
  
   if (loading) return <p>Cargando datos ...</p>
   if (error) return <p>Error: {Error}</p>

  return (
    <div className='componente'>
        <h1>Peticion API</h1>
        <ul>
          {datos.map((dato) => (
            <li key={dato.id}>{dato.name} </li>
          ))}

        </ul>
        
    </div>
  )
}
