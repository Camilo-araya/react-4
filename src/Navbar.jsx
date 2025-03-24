import React, { useState } from "react";

function Navbar() {
  const total = 25000;
  const [token, setToken] = useState(false); // Aquí puedes cambiar el valor del token, escribiendo true o false.

  const formattedTotal = total.toLocaleString("es-CL", {
    style: "currency",
    currency: "CLP",
    minimumFractionDigits: 0,
  });

  const handleToggleToken = () => {
    setToken(!token);
  };

  return (
    <nav
      style={{
        backgroundColor: "black",
        padding: "10px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <span
        style={{ color: "#ecf0f1", fontSize: "1.2rem", marginRight: "20px" }}
      >
        ¡Pizzería Il Nino Totoli!
      </span>
      <ul
        style={{
          listStyle: "none",
          margin: 0,
          padding: 0,
          display: "flex",
          alignItems: "center",
        }}
      >
        <li style={{ marginRight: "10px" }}>
          <button
            style={{
              backgroundColor: "transparent",
              border: "1px solid #34495e",
              color: "#ecf0f1",
              padding: "8px 15px",
              borderRadius: "5px",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
          >
            Home
          </button>
        </li>
        {token ? (
          <>
            <li style={{ marginRight: "10px" }}>
              <button
                style={{
                  backgroundColor: "transparent",
                  border: "1px solid #34495e",
                  color: "#ecf0f1",
                  padding: "8px 15px",
                  borderRadius: "5px",
                  cursor: "pointer",
                  transition: "background-color 0.3s ease",
                }}
              >
                Profile
              </button>
            </li>
            <li style={{ marginRight: "10px" }}>
              <button
                style={{
                  backgroundColor: "transparent",
                  border: "1px solid #34495e",
                  color: "#ecf0f1",
                  padding: "8px 15px",
                  borderRadius: "5px",
                  cursor: "pointer",
                  transition: "background-color 0.3s ease",
                }}
              >
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li style={{ marginRight: "10px" }}>
              <button
                style={{
                  backgroundColor: "transparent",
                  border: "1px solid #34495e",
                  color: "#ecf0f1",
                  padding: "8px 15px",
                  borderRadius: "5px",
                  cursor: "pointer",
                  transition: "background-color 0.3s ease",
                }}
              >
                Login
              </button>
            </li>
            <li style={{ marginRight: "10px" }}>
              <button
                style={{
                  backgroundColor: "transparent",
                  border: "1px solid #34495e",
                  color: "#ecf0f1",
                  padding: "8px 15px",
                  borderRadius: "5px",
                  cursor: "pointer",
                  transition: "background-color 0.3s ease",
                }}
              >
                Register
              </button>
            </li>
          </>
        )}
        <li style={{ marginLeft: "auto" }}>
          <button
            style={{
              backgroundColor: "transparent",
              border: "1px solid #00bcd4",
              color: "#00bcd4",
              padding: "8px 15px",
              borderRadius: "5px",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
          >
            {formattedTotal}
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
