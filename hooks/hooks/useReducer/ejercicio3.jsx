import React, { useReducer } from 'react';

const initialState = {
  cart: [], // Creamos el array que va a contener los productos
};

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      return { cart: [...state.cart, action.productId] };
    case 'REMOVE_FROM_CART':
      return { cart: state.cart.filter(id => id !== action.productId) };
    default:
      return state;
  }
}

function SimpleShoppingCart() {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const products = [
    { id: 1, name: 'Producto A' },
    { id: 2, name: 'Producto B' },
    { id: 3, name: 'Producto C' },
  ];

  const handleAddToCart = (productId) => {
    dispatch({ type: 'ADD_TO_CART', productId });
  };

  const handleRemoveFromCart = (productId) => {
    dispatch({ type: 'REMOVE_FROM_CART', productId });
  };

  return (
    <div className='componente'>
      <h1>Carrito de Compras</h1>
      <p>Carrito: {state.cart.join(', ')}</p>
      {products.map(product => (
        <div key={product.id}>
          {product.name}
          <button onClick={() => handleAddToCart(product.id)}>Agregar</button>
          <button onClick={() => handleRemoveFromCart(product.id)}>Eliminar</button>
        </div>
      ))}
    </div>
  );
}

export default SimpleShoppingCart;