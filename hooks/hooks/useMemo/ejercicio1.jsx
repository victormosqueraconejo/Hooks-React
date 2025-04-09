import React, { useMemo, useState } from 'react'

export default function SumaSimple() {
    const [numero, setNumero] = useState(0)

    const resultadoMemo = useMemo(() => {
        console.log("Calculando resultado ...")
        return numero + 100
    }, [numero])

  return (
    <div className='componente'>
        <h1>Suma Simple con useMemo</h1>
        <p><strong>Valor de numero: </strong> {numero}</p>
        <p><strong>Resultado Memoizado (numero + 100):  </strong> {resultadoMemo}</p>
        <button onClick={() => numero != 5 ? setNumero(numero + 1) : setNumero(numero)}>Aumentar Numero</button>
    </div>
  )
}
