import React from 'react';
import headerImage from '../assets/img/header.jpg';

function Header() {
  return (
    <div style={{
      backgroundImage: `url(${headerImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '400px',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
    }}>
      <h1 style={{
        color: 'white',
        fontSize: '3rem',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        padding: '20px',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: '10px'
      }}>
        ¡Pizzería Il Nino Totoli!
      </h1>
      <p style={{
        color: 'white',
        fontSize: '2rem',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        padding: '10px',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: '10px'
      }}>Calidad en la Preparación</p>
    </div>
  );
}

export default Header;