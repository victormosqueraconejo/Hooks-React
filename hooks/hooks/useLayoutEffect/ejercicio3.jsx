import React, { useLayoutEffect, useRef, useState } from "react";

const Ejemplo3UseLayoutEffect = () => {
  const ref = useRef(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setSize({ width: rect.width, height: rect.height });
    }
  }, []);

  return (
    <div className="componente">
        <h1>Cambiar Medidas</h1>
        <div style={{ padding: "20px" }}>
      <div
        ref={ref}
        style={{
          width: "200px",
          height: "150px",
          background: "#A78BFA",
          marginBottom: "10px",
        }}
      />
      <p>Medidas del div: {size.width}px x {size.height}px</p>
    </div>

    </div>
  );
};

export default Ejemplo3UseLayoutEffect;