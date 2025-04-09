import React , {useReducer} from 'react'


const initialState = { nombre: "", email: "" };

function reducer(state, action) {
    return { ...state, [action.name]: action.value };
  }
  
export default function Formulario() {
    const [state, dispatch] = useReducer(reducer, initialState);
  
    return (
      <div className='componente'>
        <h1>Formulario</h1>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={state.nombre}
          onChange={(e) => dispatch({ name: e.target.name, value: e.target.value })}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={state.email}
          onChange={(e) => dispatch({ name: e.target.name, value: e.target.value })}
        />
        <p>Nombre: {state.nombre}</p>
        <p>Email: {state.email}</p>
      </div>
    );
  }