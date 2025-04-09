import React, { useState, useMemo } from "react";

function ConUseMemo() {
  const [numero, setNumero] = useState(1);
  const [contador, setContador] = useState(0);

  const doble = useMemo(() => {
    console.log("Calculando el doble...");
    return numero * 2;
  }, [numero]); 

  return (
    <div className="componente">
        <h1>Operaciones con Memo</h1>
      <p>Doble: {doble}</p>
      <p>Contador: {contador}</p>
      <button onClick={() => setNumero(numero + 1)}>Incrementar número</button>
      <button onClick={() => setContador(contador + 1)}>Incrementar contador</button>
    </div>
  );
}

export default ConUseMemo;