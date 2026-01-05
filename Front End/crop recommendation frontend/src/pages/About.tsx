import './About.css';

const About = () => {
  return (
    <div className="about">
      <section className="about-hero">
        <div className="container">
          <h1>About the Crop Recommendation System</h1>
          <p className="lead">
            A cutting-edge machine learning solution for intelligent crop selection in modern agriculture
          </p>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="content-grid">
            <div className="content-section">
              <h2>🎯 Project Overview</h2>
              <p>
                The Crop Recommendation System is a Flask-based REST API that leverages advanced machine learning 
                algorithms to predict the most suitable crop for cultivation based on soil and environmental parameters. 
                This system is designed to integrate seamlessly with IoT platforms like ESP32 and sensor-based farming systems.
              </p>
              <p>
                By analyzing seven key agricultural parameters—Nitrogen (N), Phosphorus (P), Potassium (K), temperature, 
                humidity, pH levels, and rainfall—our ensemble model provides accurate, data-driven crop recommendations 
                that help farmers maximize yield and optimize resource utilization.
              </p>
            </div>

            <div className="content-section">
              <h2>🧠 Machine Learning Model</h2>
              <div className="model-info">
                <h3>Ensemble Architecture</h3>
                <p>
                  Our system uses a sophisticated <strong>Voting Classifier</strong> that combines multiple ML algorithms:
                </p>
                <ul className="algorithm-list">
                  <li>🌳 <strong>Random Forest Classifier</strong> - Robust decision tree ensemble</li>
                  <li>📈 <strong>Gradient Boosting Classifier</strong> - Sequential error correction</li>
                  <li>🎯 <strong>Decision Tree</strong> - Interpretable rule-based learning</li>
                  <li>👥 <strong>K-Nearest Neighbors</strong> - Pattern-based classification</li>
                  <li>📊 <strong>Logistic Regression</strong> - Probabilistic classification</li>
                </ul>
                <div className="accuracy-badge">
                  <span className="badge-icon">✓</span>
                  <span className="badge-text">95%+ Prediction Accuracy</span>
                </div>
              </div>
            </div>

            <div className="content-section">
              <h2>📊 Input Parameters</h2>
              <div className="parameters-grid">
                <div className="parameter-card">
                  <div className="param-icon">N</div>
                  <h4>Nitrogen</h4>
                  <p>Nitrogen content in soil (mg/kg)</p>
                </div>
                <div className="parameter-card">
                  <div className="param-icon">P</div>
                  <h4>Phosphorus</h4>
                  <p>Phosphorus content in soil (mg/kg)</p>
                </div>
                <div className="parameter-card">
                  <div className="param-icon">K</div>
                  <h4>Potassium</h4>
                  <p>Potassium content in soil (mg/kg)</p>
                </div>
                <div className="parameter-card">
                  <div className="param-icon">🌡️</div>
                  <h4>Temperature</h4>
                  <p>Ambient temperature in Celsius</p>
                </div>
                <div className="parameter-card">
                  <div className="param-icon">💧</div>
                  <h4>Humidity</h4>
                  <p>Relative humidity percentage</p>
                </div>
                <div className="parameter-card">
                  <div className="param-icon">⚗️</div>
                  <h4>pH Level</h4>
                  <p>Soil acidity/alkalinity</p>
                </div>
                <div className="parameter-card">
                  <div className="param-icon">🌧️</div>
                  <h4>Rainfall</h4>
                  <p>Precipitation in millimeters</p>
                </div>
              </div>
            </div>

            <div className="content-section">
              <h2>🔌 IoT Integration</h2>
              <p>
                This system is specifically designed for integration with IoT devices and sensor networks. 
                The RESTful API architecture allows seamless connectivity with:
              </p>
              <ul className="integration-list">
                <li>ESP32 microcontrollers with soil and environmental sensors</li>
                <li>Arduino-based agricultural monitoring systems</li>
                <li>Raspberry Pi weather stations</li>
                <li>Mobile applications for farmers</li>
                <li>Web-based agricultural dashboards</li>
              </ul>
              <div className="api-example">
                <h4>API Endpoint</h4>
                <code>POST http://localhost:5000/predict</code>
                <p className="api-note">Accepts JSON input with 7 parameters, returns recommended crop</p>
              </div>
            </div>

            <div className="content-section">
              <h2>🎓 Author & Purpose</h2>
              <div className="author-info">
                <div className="author-card">
                  <div className="author-avatar">👤</div>
                  <h3>Isuru Marasinghe</h3>
                  <p className="author-title">Developer & Agricultural Technology Enthusiast</p>
                  <div className="project-badge">
                    <span>🌾 Smart Agriculture System</span>
                  </div>
                </div>
                <div className="author-description">
                  <h4>Project Mission</h4>
                  <p>
                    This project was developed as part of a Smart Agriculture initiative to demonstrate 
                    how artificial intelligence and IoT technologies can revolutionize farming practices. 
                    While designed for ESP32 hardware integration, this demo version provides a complete 
                    web interface to showcase the system's capabilities without physical sensors.
                  </p>
                  <p>
                    The goal is to make precision agriculture accessible to farmers of all scales, enabling 
                    data-driven decisions that improve crop yields, reduce resource waste, and promote sustainable farming.
                  </p>
                </div>
              </div>
            </div>

            <div className="content-section tech-stack">
              <h2>🛠️ Technology Stack</h2>
              <div className="tech-grid">
                <div className="tech-item">
                  <span className="tech-icon">🐍</span>
                  <span className="tech-name">Python & Flask</span>
                </div>
                <div className="tech-item">
                  <span className="tech-icon">🤖</span>
                  <span className="tech-name">Scikit-learn</span>
                </div>
                <div className="tech-item">
                  <span className="tech-icon">⚛️</span>
                  <span className="tech-name">React + TypeScript</span>
                </div>
                <div className="tech-item">
                  <span className="tech-icon">📊</span>
                  <span className="tech-name">NumPy & Pandas</span>
                </div>
                <div className="tech-item">
                  <span className="tech-icon">🔌</span>
                  <span className="tech-name">REST API</span>
                </div>
                <div className="tech-item">
                  <span className="tech-icon">💾</span>
                  <span className="tech-name">Pickle (Model Serialization)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
