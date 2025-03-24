import React, { useState } from "react";
import pizzaCart from "./pizzas";

function Cart() {
  const [cart, setCart] = useState(pizzaCart);

  const increaseQuantity = (id) => {
    const updatedCart = cart.map((pizza) =>
      pizza.id === id ? { ...pizza, quantity: pizza.quantity + 1 } : pizza
    );
    setCart(updatedCart);
  };

  const decreaseQuantity = (id) => {
    const updatedCart = cart.map((pizza) =>
      pizza.id === id
        ? { ...pizza, quantity: Math.max(0, pizza.quantity - 1) }
        : pizza
    );
    setCart(updatedCart.filter((pizza) => pizza.quantity > 0));
  };

  const calculateTotal = () => {
    return cart.reduce(
      (total, pizza) => total + pizza.price * pizza.quantity,
      0
    );
  };

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2 style={{ marginBottom: "20px" }}>Detalles del pedido:</h2>
      <div style={{ marginBottom: "20px" }}>
        {cart.map((pizza) => (
          <div
            key={pizza.id}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <img
              src={pizza.img}
              alt={pizza.name}
              style={{ width: "60px", marginRight: "10px" }}
            />
            <div style={{ flex: 1 }}>{pizza.name}</div>
            <div style={{ width: "80px", textAlign: "right" }}>
              ${pizza.price}
            </div>
            <button
              onClick={() => decreaseQuantity(pizza.id)}
              style={{
                backgroundColor: "#f00",
                color: "white",
                border: "none",
                padding: "5px 10px",
                margin: "0 5px",
                cursor: "pointer",
              }}
            >
              -
            </button>
            <div style={{ width: "30px", textAlign: "center" }}>
              {pizza.quantity}
            </div>
            <button
              onClick={() => increaseQuantity(pizza.id)}
              style={{
                backgroundColor: "#00f",
                color: "white",
                border: "none",
                padding: "5px 10px",
                margin: "0 5px",
                cursor: "pointer",
              }}
            >
              +
            </button>
          </div>
        ))}
      </div>
      <div style={{ marginBottom: "20px", fontWeight: "bold" }}>
        Total: ${calculateTotal()}
      </div>
      <button
        style={{
          backgroundColor: "#333",
          color: "white",
          border: "none",
          padding: "10px 20px",
          cursor: "pointer",
        }}
      >
        Pagar
      </button>
    </div>
  );
}

export default Cart;
