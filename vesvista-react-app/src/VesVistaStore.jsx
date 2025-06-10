import { useEffect, useState } from 'react';
import './App.css';

export default function VesVistaStore() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    fetch("https://api.vespucci-vista.ca/products")
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error("Failed to fetch products:", err));
  }, []);

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    fetch("https://api.vespucci-vista.ca/waitlist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email })
    })
    .then(() => setSubmitted(true))
    .catch(err => console.error("Failed to submit email:", err));
  };

  return (
    <div className="App">
      <header>
        <h1>Vespuchi Vista</h1>
        <p>Luxury. Legacy. Vista.</p>
      </header>

      <div className="product-grid">
        {products.map(product => (
          <div key={product.id} className="product-card" onClick={() => setSelectedProduct(product)}>
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <strong>{product.price}</strong>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <div className="modal">
          <div className="modal-content">
            <button onClick={() => setSelectedProduct(null)}>×</button>
            <img src={selectedProduct.image} alt={selectedProduct.name} />
            <h2>{selectedProduct.name}</h2>
            <p>{selectedProduct.description}</p>
            <strong>{selectedProduct.price}</strong>
            <button disabled>Showcased Item — Not for Sale Yet</button>
          </div>
        </div>
      )}

      <section className="waitlist">
        <h3>Join the Ves-Vista Waitlist</h3>
        {submitted ? (
          <p>Thank you for signing up!</p>
        ) : (
          <form onSubmit={handleEmailSubmit}>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
            <button type="submit">Join Waitlist</button>
          </form>
        )}
      </section>

      <footer>
        © {new Date().getFullYear()} Ves-Vista. All rights reserved.
      </footer>
    </div>
  );
}