import { useLayoutEffect, useRef } from 'react';

function CambiarColorConUseLayoutEffect() {
  const divRef = useRef(null);

  // Esto se ejecuta ANTES de que el navegador muestre el elemento
  useLayoutEffect(() => {
    if (divRef.current) {
      divRef.current.style.backgroundColor = 'lightblue';
      console.log('Color cambiado ANTES de mostrarse');
    }
  }, []);

  return (
    <div className='componente' >
        <h1>Cambiar Color con useLayoutEffect</h1>
    <div ref={divRef} style={{ padding: '20px', margin: '20px' }}>
      Este div aparecerá directamente con fondo azul claro (sin parpadeo)
    </div>
    </div>
  );
}

export default CambiarColorConUseLayoutEffect;