import React, { useState, useEffect } from 'react';

function Pizza() {
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/pizzas/p001')
      .then((response) => response.json())
      .then((data) => setPizza(data))
      .catch((error) => console.error('Error fetching pizza:', error));
  }, []);

  if (!pizza) {
    return <div>Cargando...</div>;
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        border: '1px solid #ccc',
        padding: '20px',
        margin: '20px auto',
        maxWidth: '400px',
      }}
    >
      <img
        src={pizza.pizzaImage} // La imagen se muestra aquí
        alt={pizza.pizzaName}
        style={{
          width: '100%',
          marginBottom: '15px',
          borderRadius: '8px',
        }}
      />
      <h3 style={{ marginBottom: '10px' }}>{pizza.pizzaName}</h3>
      <p style={{ marginBottom: '8px' }}>Precio: {pizza.pizzaPrice}</p>
      <p style={{ marginBottom: '8px' }}>Ingredientes: {pizza.pizzaIngredients}</p>
      <p style={{ marginBottom: '15px' }}>Descripción: {pizza.pizzaDescription}</p>
      <button
        style={{
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Añadir al carrito
      </button>
    </div>
  );
}

export default Pizza;