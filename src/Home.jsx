// Home.jsx
import React from 'react';
import Card from './Card';
import './App.css';

import chair from './assets/chair.png';
import charger from './assets/charger.png';
import lamp from './assets/lamp.png';

function Home() {
  const products = [
    {
      id: 1,
      imgSrc: chair,
      title: "Comfort Chair",
      description: "Soft, ergonomic, and perfect for long hours."
    },
    {
      id: 2,
      imgSrc: charger,
      title: "Fast Charger",
      description: "Charge your phone to 100% in under an hour."
    },
    {
      id: 3,
      imgSrc: lamp,
      title: "LED Lamp",
      description: "Brighten up your room with adjustable LED lighting."
    }
  ];

  return (
    <div style={{ padding: '2rem' }}>
      <h2 style={{ textAlign: 'center' }}>Our Featured Products 🛍️</h2>
      <div className="card-grid">
        {products.map((product) => (
          <Card
            key={product.id}
            imgSrc={product.imgSrc}
            title={product.title}
            description={product.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
