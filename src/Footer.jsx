import React from 'react';

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: 'black',
        color: 'white',
        padding: '20px',
        textAlign: 'center',
        width: '100%',
        boxSizing: 'border-box',
        marginTop: '100vh', 
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <p style={{ marginBottom: '10px' }}>
          © {new Date().getFullYear()} Pizzería Il Nino Totoli. Todos los derechos reservados.
        </p>
        <nav>
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <li style={{ margin: '10px' }}>
              <a
                href="/terminos"
                style={{ color: 'white', textDecoration: 'none' }}
              >
                Términos de Servicio
              </a>
            </li>
            <li style={{ margin: '10px' }}>
              <a
                href="/privacidad"
                style={{ color: 'white', textDecoration: 'none' }}
              >
                Política de Privacidad
              </a>
            </li>
            <li style={{ margin: '10px' }}>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'white', textDecoration: 'none' }}
              >
                Instagram
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <style>
        {`
          @media (max-width: 600px) {
            footer {
              padding: 10px;
            }
            nav ul {
              flex-direction: column;
              align-items: center;
            }
            nav li {
              margin: 5px 0;
            }
          }
        `}
      </style>
    </footer>
  );
}

export default Footer;