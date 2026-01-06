import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Smart Crop Recommendation System
            </h1>
            <p className="hero-subtitle">
              AI-Powered Agricultural Intelligence for Optimal Crop Selection
            </p>
            <p className="hero-description">
              Leverage machine learning to predict the most suitable crop based on soil nutrients, 
              environmental conditions, and climate data. Perfect for IoT integration with ESP32 and sensor-based farming systems.
            </p>
            <div className="hero-buttons">
              <Link to="/predict" className="btn btn-primary">
                Try Prediction Demo
              </Link>
              <Link to="/about" className="btn btn-secondary">
                Learn More
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <div className="feature-card-hero">
              <div className="feature-icon">🤖</div>
              <h3>ML-Powered</h3>
              <p>Ensemble model with 95%+ accuracy</p>
            </div>
            <div className="feature-card-hero">
              <div className="feature-icon">🌡️</div>
              <h3>Real-Time Data</h3>
              <p>Process live sensor readings</p>
            </div>
            <div className="feature-card-hero">
              <div className="feature-icon">📊</div>
              <h3>7 Parameters</h3>
              <p>N, P, K, temp, humidity, pH, rainfall</p>
            </div>
          </div>
        </div>
      </section>

      <section className="features-preview">
        <div className="container">
          <h2 className="section-title">Why Choose Our System?</h2>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon-large">🔬</div>
              <h3>Scientific Accuracy</h3>
              <p>Trained on extensive agricultural datasets with multiple ML algorithms including Random Forest and Gradient Boosting</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon-large">⚡</div>
              <h3>Fast Predictions</h3>
              <p>Get instant crop recommendations in milliseconds with our optimized Flask REST API</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon-large">🔌</div>
              <h3>IoT Ready</h3>
              <p>Designed for seamless integration with ESP32, Arduino, and other IoT platforms</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon-large">🌍</div>
              <h3>Climate Adaptive</h3>
              <p>Considers temperature, humidity, and rainfall patterns for location-specific recommendations</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon-large">📱</div>
              <h3>RESTful API</h3>
              <p>Easy-to-use JSON API endpoint for integration with any frontend or mobile application</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon-large">✅</div>
              <h3>Proven Results</h3>
              <p>Helps farmers make data-driven decisions for improved yield and sustainability</p>
            </div>
          </div>
        </div>
      </section>

      <section className="how-it-works">
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Collect Data</h3>
              <p>Gather soil nutrients (N, P, K), pH levels, temperature, humidity, and rainfall data from sensors or manual input</p>
            </div>
            <div className="step-arrow">→</div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Process Input</h3>
              <p>Our API receives the data, preprocesses it using StandardScaler, and feeds it to the ensemble ML model</p>
            </div>
            <div className="step-arrow">→</div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Get Recommendation</h3>
              <p>Receive instant crop recommendation optimized for your specific soil and environmental conditions</p>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Optimize Your Crop Selection?</h2>
            <p>Experience the power of AI-driven agriculture. Try our demo without any hardware!</p>
            <Link to="/predict" className="btn btn-large">
              Start Predicting Now
            </Link>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Home;
