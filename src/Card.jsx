// Card.jsx
import React, { useState } from 'react';
import './App.css';

function Card({ imgSrc, title, description }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="card">
      <img src={imgSrc} alt={title} className="card-img" />
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-desc">
          {showDetails ? description : "Discover more about this premium product."}
        </p>
        <button className="card-btn" onClick={() => setShowDetails(!showDetails)}>
          {showDetails ? "Hide Info" : "Learn More"}
        </button>
      </div>
    </div>
  );
}

export default Card;
