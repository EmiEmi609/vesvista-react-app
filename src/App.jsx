import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [popupVisible, setPopupVisible] = useState(false);

  return (
    <div className="app">
      <section className="hero">
        <div className="hero-text">
          <h1>Ves-Vista</h1>
          <p>Prestige in Detail</p>
        </div>
      </section>
      <section className="product product-1">
        <div className="product-main">
          <img src="/images/sunglasses.jpg" alt="Sunglasses" className="main-img" />
        </div>
        <div className="product-models">
          <img src="/images/model1.jpg" alt="Model 1" />
          <img src="/images/model2.jpg" alt="Model 2" />
          <img src="/images/model3.jpg" alt="Model 3" />
        </div>
      </section>
      <section className="product product-2">
        <div className="product-main">
          <img src="/images/sweater.jpg" alt="Sweater" className="main-img" />
          <button onClick={() => setPopupVisible(true)}>Join the Movement</button>
        </div>
        <div className="product-models">
          <img src="/images/model4.jpg" alt="Model 4" />
          <img src="/images/model5.jpg" alt="Model 5" />
          <img src="/images/model6.jpg" alt="Model 6" />
        </div>
      </section>
      {popupVisible && (
        <div className="popup">
          <div className="popup-content">
            <h2>Own the Vision.</h2>
            <p>Be first to know when we drop.</p>
            <input type="email" placeholder="Enter your email" />
            <button onClick={() => setPopupVisible(false)}>Submit</button>
          </div>
        </div>
      )}
    </div>
  );
}