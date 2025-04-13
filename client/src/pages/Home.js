// pages/Home.js
import React, { useEffect } from 'react';
import eidBanner from '../assets/images/eid-banner.jpg';
import cuttingImg from '../assets/images/cutting.jpg';
import packagingImg from '../assets/images/packaging.jpg';
import deliveryImg from '../assets/images/delivery.jpg';
import '../style.css';

function Home() {
  useEffect(() => {
    const cards = document.querySelectorAll('.service-card');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );
    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section className="hero-section" style={{ backgroundImage: `url(${eidBanner})` }}>
        <div className="container">
          <h1>قربانی بکنگ اینڈ ڈیلیوری</h1>
          <p>Hygienic, Fast, Reliable – Premium Halal Service</p>
          <div className="banner-buttons">
            <a href="/booking" className="btn btn-primary">Book Now</a>
            <a href="https://wa.me/+923001234567" target="_blank" rel="noopener noreferrer" className="btn btn-success">WhatsApp Us</a>
          </div>
        </div>
      </section>

      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-row">
          <div className="service-card">
            <img src={cuttingImg} alt="Expert Cutting" loading="lazy" />
            <div className="card-body">
              <h3>Expert Cutting</h3>
              <p>Skilled Qasais ensure precise, halal cuts.</p>
            </div>
          </div>
          <div className="service-card">
            <img src={packagingImg} alt="Premium Packaging" loading="lazy" />
            <div className="card-body">
              <h3>Premium Packaging</h3>
              <p>Normal, chilled, or vacuum-sealed options.</p>
            </div>
          </div>
          <div className="service-card">
            <img src={deliveryImg} alt="Same-Day Delivery" loading="lazy" />
            <div className="card-body">
              <h3>Same-Day Delivery</h3>
              <p>Delivered fresh to your doorstep.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;