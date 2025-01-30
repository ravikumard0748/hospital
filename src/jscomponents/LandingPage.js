import React from 'react';
import '../csscomponents/LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-container">
      <div className="hero-section">
        <img 
          src="/hospital-building.jpg" 
          alt="DisSol Hospital" 
          className="hero-image"
        />
        <div className="hero-text">
          <h1>Welcome to DisSol Hospital</h1>
          <p>Providing Exceptional Healthcare Since 2000</p>
        </div>
      </div>

      <div className="features-section">
        <div className="feature-card">
          <h3>24/7 Emergency Care</h3>
          <p>Our emergency department is staffed round-the-clock with experienced medical professionals ready to provide immediate care.</p>
        </div>
        <div className="feature-card">
          <h3>Specialized Departments</h3>
          <p>From cardiology to pediatrics, our specialized departments offer comprehensive care for all your medical needs.</p>
        </div>
        <div className="feature-card">
          <h3>Expert Medical Team</h3>
          <p>Our team of highly qualified doctors and nurses are committed to providing the best possible care to our patients.</p>
        </div>
      </div>

      <div className="about-section">
        <h2>About DisSol Hospital</h2>
        <p>DisSol Hospital is a state-of-the-art medical facility dedicated to providing exceptional healthcare services to our community. With over two decades of experience, we combine advanced medical technology with compassionate care to ensure the best possible outcomes for our patients.</p>
        
        <div className="stats-container">
          <div className="stat-item">
            <h3>50+</h3>
            <p>Specialized Doctors</p>
          </div>
          <div className="stat-item">
            <h3>100+</h3>
            <p>Dedicated Staff</p>
          </div>
          <div className="stat-item">
            <h3>20+</h3>
            <p>Years of Service</p>
          </div>
          <div className="stat-item">
            <h3>24/7</h3>
            <p>Emergency Care</p>
          </div>
        </div>
      </div>

      <div className="services-section">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-item">
            <h4>Emergency Care</h4>
            <p>24/7 emergency medical services</p>
          </div>
          <div className="service-item">
            <h4>Surgery</h4>
            <p>Advanced surgical procedures</p>
          </div>
          <div className="service-item">
            <h4>Pediatrics</h4>
            <p>Specialized care for children</p>
          </div>
          <div className="service-item">
            <h4>Cardiology</h4>
            <p>Heart and cardiovascular care</p>
          </div>
          <div className="service-item">
            <h4>Orthopedics</h4>
            <p>Bone and joint treatments</p>
          </div>
          <div className="service-item">
            <h4>Neurology</h4>
            <p>Brain and nervous system care</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
