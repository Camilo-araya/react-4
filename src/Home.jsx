import React, { useState, useEffect } from 'react';
import SingleCardPizza from './SingleCardPizza'; 
import Header from './Header';

function Home() {
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/pizzas')
      .then((response) => response.json())
      .then((data) => {
        if (data && data.length > 0) {
          setPizza(data[0]);
        }
      })
      .catch((error) => console.error('Error fetching pizzas:', error));
  }, []);

  if (!pizza) {
    return (
      <div style={{ width: '100vw' }}>
        <Header />
        <div>Cargando...</div>
      </div>
    );
  }

  return (
    <div style={{ width: '100vw' }}>
      <Header />
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '20px',
        padding: '20px',
      }}>
        <SingleCardPizza pizza={pizza} /> 
      </div>
    </div>
  );
}

export default Home;