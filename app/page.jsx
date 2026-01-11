"use client";
import { useState } from "react";

const products = [
  { id: 1, name: "T-shirt LUNA FOR ALL", price: 10 },
  { id: 2, name: "Sweat LUNA FOR ALL", price: 15 },
  { id: 3, name: "Brassière LUNA FOR ALL", price: 10 },
  { id: 4, name: "Leggings LUNA FOR ALL", price: 20 },
  { id: 5, name: "Jogging LUNA FOR ALL", price: 20 },
  { id: 6, name: "Short LUNA FOR ALL", price: 15 },
];

export default function Home() {
  const [product, setProduct] = useState(products[0]);
  const [size, setSize] = useState("M");

  return (
    <main style={{ padding: 30, fontFamily: "Arial" }}>
      <h1>LUNA FOR ALL</h1>
      <p>Livraison Europe – Paiement sécurisé</p>

      <select onChange={(e) => setProduct(products[e.target.value])}>
        {products.map((p, i) => (
          <option key={p.id} value={i}>
            {p.name} – {p.price}€
          </option>
        ))}
      </select>

      <br /><br />

      <select onChange={(e) => setSize(e.target.value)}>
        <option>S</option>
        <option>M</option>
        <option>L</option>
        <option>XL</option>
      </select>

      <br /><br />

      <button>Payer par carte</button>
    </main>
  );
}
