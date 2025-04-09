import React, { useState , useRef} from 'react'

export default function CronometroUseRef() {
    const [startTime, setStartTime] = useState(null)
    const [now , setNow] = useState(null)
    const intervalRef = useRef(null)
    
    function handleStart () {
        setStartTime(Date.now())
        setNow(Date.now)
        
        clearInterval(intervalRef.current)
        intervalRef.current = setInterval(() => {
            setNow(Date.now())
        }, 10)
    }

    function handleStop () {
        clearInterval(intervalRef.current)
    }

    let secondsPassed = 0
    if (startTime != null && now != null) {
        secondsPassed = ((now - secondsPassed) / 1000) 
    }

  return (
    <div className='componente'>
        <h1>Cronometro con useRef</h1>
        <h3>Time trancurrido: {secondsPassed.toFixed(3)}</h3>
        <button onClick={handleStart}>Iniciar</button> 
        <button onClick={handleStop}>Parar</button>
    </div>
  )
}

