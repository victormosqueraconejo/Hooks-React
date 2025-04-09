import React, { useRef } from 'react'

export default function DesplazamientoImagenes() {
    const listRef = useRef(null)

    function scrollToIndex (index) {
        const listNode = listRef.current
        const imgNode = listNode.querySelectorAll("li > img")[index]
        imgNode.scrollIntoTheView({
            behavior: "smooth",
            block: "nearest",
            inline: "center"
        })
    }
  return (
    <div className='componente'>
        <h1>Desplazamiento de Imagenes</h1>
        <nav>
        <button onClick={() => scrollToIndex(0)}>
            Neo
        </button>
        <button onClick={() => scrollToIndex(1)}>
            Millie
        </button>
        </nav>
        <div>
        <ul ref={listRef}>
            <li>
            <img
                src="https://placecats.com/neo/300/200"
                alt="Neo"
            />
            </li>
            <li>
            <img
                src="https://placecats.com/millie/200/200"
                alt="Millie"
            />
            </li>
        </ul>
        </div>

    </div>
  )
}
