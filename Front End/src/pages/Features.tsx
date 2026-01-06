import './Features.css';

const Features = () => {
  return (
    <div className="features">
      <section className="features-hero">
        <div className="container">
          <h1>System Features</h1>
          <p className="lead">
            Comprehensive agricultural intelligence powered by advanced machine learning
          </p>
        </div>
      </section>

      <section className="features-content">
        <div className="container">
          {/* Main Features */}
          <div className="main-features">
            <div className="feature-block">
              <div className="feature-header">
                <div className="feature-icon-big">🤖</div>
                <h2>Advanced Machine Learning</h2>
              </div>
              <div className="feature-details">
                <p>
                  Our system employs a sophisticated ensemble model combining multiple state-of-the-art 
                  machine learning algorithms for maximum accuracy and reliability.
                </p>
                <ul className="feature-list">
                  <li>✓ <strong>Random Forest Classifier</strong> - Robust ensemble decision trees</li>
                  <li>✓ <strong>Gradient Boosting</strong> - Sequential error minimization</li>
                  <li>✓ <strong>K-Nearest Neighbors</strong> - Pattern-based predictions</li>
                  <li>✓ <strong>Voting Classifier</strong> - Combined model consensus</li>
                  <li>✓ <strong>95%+ Accuracy</strong> - Validated on extensive datasets</li>
                </ul>
              </div>
            </div>

            <div className="feature-block">
              <div className="feature-header">
                <div className="feature-icon-big">📊</div>
                <h2>Multi-Parameter Analysis</h2>
              </div>
              <div className="feature-details">
                <p>
                  Analyzes seven critical agricultural parameters to provide comprehensive crop recommendations 
                  tailored to your specific conditions.
                </p>
                <div className="parameters-showcase">
                  <div className="param-item">
                    <span className="param-badge">N</span>
                    <span className="param-name">Nitrogen</span>
                  </div>
                  <div className="param-item">
                    <span className="param-badge">P</span>
                    <span className="param-name">Phosphorus</span>
                  </div>
                  <div className="param-item">
                    <span className="param-badge">K</span>
                    <span className="param-name">Potassium</span>
                  </div>
                  <div className="param-item">
                    <span className="param-badge">🌡️</span>
                    <span className="param-name">Temperature</span>
                  </div>
                  <div className="param-item">
                    <span className="param-badge">💧</span>
                    <span className="param-name">Humidity</span>
                  </div>
                  <div className="param-item">
                    <span className="param-badge">⚗️</span>
                    <span className="param-name">pH Level</span>
                  </div>
                  <div className="param-item">
                    <span className="param-badge">🌧️</span>
                    <span className="param-name">Rainfall</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="feature-block">
              <div className="feature-header">
                <div className="feature-icon-big">🔌</div>
                <h2>IoT Integration Ready</h2>
              </div>
              <div className="feature-details">
                <p>
                  Designed for seamless integration with IoT devices and sensor networks. 
                  Perfect for ESP32, Arduino, and Raspberry Pi-based agricultural systems.
                </p>
                <div className="iot-grid">
                  <div className="iot-card">
                    <div className="iot-icon">📡</div>
                    <h4>ESP32 Compatible</h4>
                    <p>Direct integration with ESP32 microcontrollers and sensor arrays</p>
                  </div>
                  <div className="iot-card">
                    <div className="iot-icon">🌐</div>
                    <h4>RESTful API</h4>
                    <p>Simple JSON-based API for easy integration with any platform</p>
                  </div>
                  <div className="iot-card">
                    <div className="iot-icon">⚡</div>
                    <h4>Real-time Processing</h4>
                    <p>Instant predictions from live sensor data streams</p>
                  </div>
                  <div className="iot-card">
                    <div className="iot-icon">🔒</div>
                    <h4>Reliable & Scalable</h4>
                    <p>Built on Flask for production-ready deployments</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="feature-block">
              <div className="feature-header">
                <div className="feature-icon-big">🎯</div>
                <h2>Intelligent Crop Selection</h2>
              </div>
              <div className="feature-details">
                <p>
                  Get precise crop recommendations from a wide variety of agricultural crops, 
                  each optimized for specific soil and climate conditions.
                </p>
                <div className="crops-showcase">
                  <span className="crop-tag">🌾 Rice</span>
                  <span className="crop-tag">🌽 Maize</span>
                  <span className="crop-tag">🌾 Wheat</span>
                  <span className="crop-tag">🫘 Mung Bean</span>
                  <span className="crop-tag">☕ Coffee</span>
                  <span className="crop-tag">🥔 Potato</span>
                  <span className="crop-tag">🍇 Grapes</span>
                  <span className="crop-tag">🥥 Coconut</span>
                  <span className="crop-tag">🍌 Banana</span>
                  <span className="crop-tag">🍎 Apple</span>
                  <span className="crop-tag">🥜 Groundnut</span>
                  <span className="crop-tag">🫛 Chickpea</span>
                  <span className="crop-tag">🫘 Lentil</span>
                  <span className="crop-tag">🌱 Cotton</span>
                  <span className="crop-tag">🌿 Jute</span>
                  <span className="crop-tag">And More...</span>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="benefits-section">
            <h2 className="section-title">Key Benefits</h2>
            <div className="benefits-grid">
              <div className="benefit-card">
                <div className="benefit-icon">🌱</div>
                <h3>Increased Yield</h3>
                <p>Choose the right crop for your soil conditions to maximize harvest</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">💰</div>
                <h3>Cost Effective</h3>
                <p>Reduce waste by planting crops optimized for your environment</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">🌍</div>
                <h3>Sustainable Farming</h3>
                <p>Make eco-friendly decisions based on scientific data</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">📈</div>
                <h3>Data-Driven</h3>
                <p>Eliminate guesswork with AI-powered recommendations</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">⏱️</div>
                <h3>Time Saving</h3>
                <p>Get instant predictions in milliseconds</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">🔧</div>
                <h3>Easy Integration</h3>
                <p>Simple API works with existing farm management systems</p>
              </div>
            </div>
          </div>

          {/* Use Cases */}
          <div className="use-cases-section">
            <h2 className="section-title">Use Cases</h2>
            <div className="use-cases-grid">
              <div className="use-case-card">
                <div className="use-case-number">01</div>
                <h3>Smart Farms</h3>
                <p>
                  Integrate with IoT sensor networks to continuously monitor soil and weather 
                  conditions, automatically suggesting optimal crops for each season.
                </p>
              </div>
              <div className="use-case-card">
                <div className="use-case-number">02</div>
                <h3>Agricultural Consulting</h3>
                <p>
                  Provide professional recommendations to farmers based on soil test results 
                  and local climate data for improved agricultural outcomes.
                </p>
              </div>
              <div className="use-case-card">
                <div className="use-case-number">03</div>
                <h3>Research & Development</h3>
                <p>
                  Analyze crop suitability across different regions and conditions to support 
                  agricultural research and policy making.
                </p>
              </div>
              <div className="use-case-card">
                <div className="use-case-number">04</div>
                <h3>Mobile Apps</h3>
                <p>
                  Power farmer-facing mobile applications that provide on-the-go crop 
                  recommendations using smartphone cameras and manual input.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
