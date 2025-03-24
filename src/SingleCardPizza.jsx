import React from "react";

function SingleCardPizza({ pizza }) { 
  return (
    <div
      style={{
        border: "1px solid #ccc",
        margin: "10px",
        padding: "10px",
        width: "300px",
        marginBottom: "10px",
      }}
    >
      <img src={pizza.img} alt={pizza.name} style={{ width: "100%" }} />
      <h3>{pizza.name}</h3>
      <p>{pizza.desc}</p>
      <p>Precio: ${pizza.price}</p>
      <div>
        <strong>Ingredientes:</strong>
        <ul>
          {pizza.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <button>Agregar al carrito</button>
      </div>
    </div>
  );
}

export default SingleCardPizza;