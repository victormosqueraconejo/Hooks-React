import React, { useState, useMemo } from 'react';

export default function ParImpar() {
  const [numero, setNumero] = useState(2);
  
  const esPar = useMemo(() => {
    console.log('Verificando si el número es par...');
    return numero % 2 === 0;
  }, [numero]);

  return (
    <div className='componente'>
        <h1>Saber si es par</h1>
      <p><strong>Número:</strong> {numero}</p>
      <p><strong>Es par:</strong> {esPar ? ' Sí' : ' No'}</p>
      <button onClick={() => setNumero(prev => prev + 1)}>
        Cambiar número
      </button>
    </div>
  );
}
