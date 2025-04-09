import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Contador } from '../hooks/useState/ejemplo1.jsx'
import CambiarColor from '../hooks/useState/ejemplo2.jsx'
import MostrarOculto from '../hooks/useState/ejemplo3.jsx'
import ContadorCallback from '../hooks/useCallback/ejemplo1.jsx'
import ListaCallback from '../hooks/useCallback/ejemplo2.jsx'
import ListaCallback2 from '../hooks/useCallback/ejemplo3.jsx'
import Ejemplo1UseEffect from '../hooks/useEffect/ejercicio1.jsx'
import PeticionAPI from '../hooks/useEffect/ejercicio2.jsx'
import TemporizadorEffect from '../hooks/useEffect/ejercicio3.jsx'
import CambiarTema from '../hooks/useContext/ejercicio1.jsx'
import InicioSesionUseContext from '../hooks/useContext/ejercicio2.jsx'
import InicioDeSesionConTema from '../hooks/useContext/ejercicio3.jsx'
import ContadorUseRef from '../hooks/useRef/ejercicio1.jsx'
import DesplazamientoImagenes from '../hooks/useRef/ejercicio2.jsx'
import CronometroUseRef from '../hooks/useRef/ejercicio3.jsx'
import CambiarEstilosBox from '../hooks/useLayoutEffect/ejercicio1.jsx'
import CambiarColorConUseLayoutEffect from '../hooks/useLayoutEffect/ejercicio2.jsx'
import Ejemplo3UseLayoutEffect from '../hooks/useLayoutEffect/ejercicio3.jsx'
import SumaSimple from '../hooks/useMemo/ejercicio1.jsx'
import ConUseMemo from '../hooks/useMemo/ejercicio2.jsx'
import ParImpar from '../hooks/useMemo/ejercicio3.jsx'
import ContadorConUseReduce from '../hooks/useReducer/ejercicio1.jsx'
import Formulario from '../hooks/useReducer/ejercicio2.jsx'
import SimpleShoppingCart from '../hooks/useReducer/ejercicio3.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <Contador />
    <CambiarColor />
    <MostrarOculto />
    
    <ContadorCallback />
    <ListaCallback />
    <ListaCallback2 />

    <Ejemplo1UseEffect />
    <PeticionAPI />
    <TemporizadorEffect /> 

    <CambiarTema />
    <InicioSesionUseContext />
    <InicioDeSesionConTema />

    <ContadorUseRef /> 
    <DesplazamientoImagenes />
    <CronometroUseRef />

    <CambiarEstilosBox />
    <CambiarColorConUseLayoutEffect /> 
    <Ejemplo3UseLayoutEffect />

    <SumaSimple />
    <ConUseMemo />
    <ParImpar />

    <ContadorConUseReduce />    
    <Formulario />
    <SimpleShoppingCart />

  </StrictMode>,
)
