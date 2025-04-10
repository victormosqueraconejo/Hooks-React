import React, { useLayoutEffect, useRef } from "react";

const CambiarEstilosBox = () => {
  const boxRef = useRef(null);

  useLayoutEffect(() => {
    if (boxRef.current) {
      boxRef.current.style.width = "300px";
      boxRef.current.style.height = "300px";
      boxRef.current.style.backgroundColor = "skyblue";
      boxRef.current.style.border = "1px solid black"
      boxRef.current.style.margin = "auto"

    }
  }, []);

  return (
    <div className="componente">
        <h1>Cambiar Estilos useLayoutEffect</h1>
        <div ref={boxRef}>Este div cambia tamaño antes de renderizar</div>

    </div>
  );
};

export default CambiarEstilosBox;