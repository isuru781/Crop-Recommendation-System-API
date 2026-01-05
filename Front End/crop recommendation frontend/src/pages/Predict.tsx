import { useState } from 'react';
import axios from 'axios';
import './Predict.css';

interface PredictionInput {
  N: number;
  P: number;
  K: number;
  temperature: number;
  humidity: number;
  ph: number;
  rainfall: number;
}

interface PredictionResponse {
  recommended_crop: string;
}

const Predict = () => {
  const [formData, setFormData] = useState<PredictionInput>({
    N: 90,
    P: 42,
    K: 43,
    temperature: 21.5,
    humidity: 80,
    ph: 6.5,
    rainfall: 120,
  });

  const [prediction, setPrediction] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Validation rules matching backend
  const validationRules = {
    N: { min: 0, max: 140, name: 'Nitrogen (N)', unit: 'mg/kg' },
    P: { min: 5, max: 145, name: 'Phosphorus (P)', unit: 'mg/kg' },
    K: { min: 5, max: 205, name: 'Potassium (K)', unit: 'mg/kg' },
    temperature: { min: 8.0, max: 44.0, name: 'Temperature', unit: '°C' },
    humidity: { min: 14.0, max: 100.0, name: 'Humidity', unit: '%' },
    ph: { min: 3.5, max: 9.9, name: 'pH', unit: '' },
    rainfall: { min: 20.0, max: 300.0, name: 'Rainfall', unit: 'mm' }
  };

  const validateInput = (): string | null => {
    for (const [key, value] of Object.entries(formData)) {
      const rules = validationRules[key as keyof typeof validationRules];
      
      // Check if value is numeric
      if (isNaN(value) || value === null) {
        return `Invalid data type for ${rules.name}. Please enter a valid numeric value.`;
      }
      
      // Check range validation
      if (value < rules.min || value > rules.max) {
        const unit = rules.unit ? ` ${rules.unit}` : '';
        return `${rules.name} is out of acceptable range.\n\nAcceptable range: ${rules.min}${unit} to ${rules.max}${unit}\nYou entered: ${value}${unit}\n\nPlease adjust the value to be within the valid range.`;
      }
    }
    return null;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: parseFloat(value) || 0,
    }));
    // Clear error when user starts typing
    if (error) setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Client-side validation before sending to server
    const validationError = validateInput();
    if (validationError) {
      setError(validationError);
      return; // Don't send request if validation fails
    }

    setLoading(true);
    setError(null);
    setPrediction(null);

    try {
      const response = await axios.post<PredictionResponse>(
        'http://localhost:5000/predict',
        formData
      );
      setPrediction(response.data.recommended_crop);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(
          err.response?.data?.error || 
          'Failed to connect to the API. Please ensure the Flask server is running on http://localhost:5000'
        );
      } else {
        setError('An unexpected error occurred');
      }
    } finally {
      setLoading(false);
    }
  };

  const sampleData = [
    { name: 'Rice', data: { N: 90, P: 42, K: 43, temperature: 21.5, humidity: 80, ph: 6.5, rainfall: 120 } },
    { name: 'Maize', data: { N: 45, P: 60, K: 40, temperature: 26, humidity: 65, ph: 6.0, rainfall: 180 } },
    { name: 'Wheat', data: { N: 50, P: 30, K: 25, temperature: 18, humidity: 55, ph: 6.8, rainfall: 90 } },
    { name: 'Cotton', data: { N: 120, P: 40, K: 50, temperature: 28, humidity: 70, ph: 7.0, rainfall: 100 } },
  ];

  const loadSampleData = (sample: typeof sampleData[0]) => {
    setFormData(sample.data);
    setPrediction(null);
    setError(null);
  };

  return (
    <div className="predict">
      <section className="predict-hero">
        <div className="container">
          <h1>🌾 Crop Prediction Demo</h1>
          <p className="subtitle">
            Enter soil and environmental parameters to get AI-powered crop recommendations
          </p>
        </div>
      </section>

      <section className="predict-content">
        <div className="container">
          <div className="predict-grid">
            {/* Left Side - Form */}
            <div className="form-section">
              <div className="card">
                <h2>Enter Parameters</h2>
                <form onSubmit={handleSubmit} className="prediction-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="N">
                        <span className="label-icon">N</span>
                        Nitrogen (mg/kg)
                      </label>
                      <input
                        type="number"
                        id="N"
                        name="N"
                        value={formData.N}
                        onChange={handleInputChange}
                        step="0.1"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="P">
                        <span className="label-icon">P</span>
                        Phosphorus (mg/kg)
                      </label>
                      <input
                        type="number"
                        id="P"
                        name="P"
                        value={formData.P}
                        onChange={handleInputChange}
                        step="0.1"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="K">
                        <span className="label-icon">K</span>
                        Potassium (mg/kg)
                      </label>
                      <input
                        type="number"
                        id="K"
                        name="K"
                        value={formData.K}
                        onChange={handleInputChange}
                        step="0.1"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="temperature">
                        <span className="label-icon">🌡️</span>
                        Temperature (°C)
                      </label>
                      <input
                        type="number"
                        id="temperature"
                        name="temperature"
                        value={formData.temperature}
                        onChange={handleInputChange}
                        step="0.1"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="humidity">
                        <span className="label-icon">💧</span>
                        Humidity (%)
                      </label>
                      <input
                        type="number"
                        id="humidity"
                        name="humidity"
                        value={formData.humidity}
                        onChange={handleInputChange}
                        step="0.1"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="ph">
                        <span className="label-icon">⚗️</span>
                        pH Level
                      </label>
                      <input
                        type="number"
                        id="ph"
                        name="ph"
                        value={formData.ph}
                        onChange={handleInputChange}
                        step="0.1"
                        min="0"
                        max="14"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="rainfall">
                      <span className="label-icon">🌧️</span>
                      Rainfall (mm)
                    </label>
                    <input
                      type="number"
                      id="rainfall"
                      name="rainfall"
                      value={formData.rainfall}
                      onChange={handleInputChange}
                      step="0.1"
                      required
                    />
                  </div>

                  <button type="submit" className="btn btn-predict" disabled={loading}>
                    {loading ? '🔄 Analyzing...' : '🌾 Predict Best Crop'}
                  </button>
                </form>

                {/* Sample Data */}
                <div className="sample-data">
                  <h3>Try Sample Data:</h3>
                  <div className="sample-buttons">
                    {sampleData.map((sample) => (
                      <button
                        key={sample.name}
                        onClick={() => loadSampleData(sample)}
                        className="btn btn-sample"
                      >
                        {sample.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Results */}
            <div className="results-section">
              {prediction && (
                <div className="card result-card success">
                  <div className="result-icon">✅</div>
                  <h2>Recommended Crop</h2>
                  <div className="crop-result">{prediction.toUpperCase()}</div>
                  <p className="result-description">
                    Based on the provided soil and environmental parameters, 
                    <strong> {prediction}</strong> is the optimal crop for cultivation.
                  </p>
                  <div className="confidence-badge">
                    High Confidence Prediction
                  </div>
                </div>
              )}

              {error && (
                <div className="card result-card error">
                  <div className="result-icon">❌</div>
                  <h2>Error</h2>
                  <p className="error-message">{error}</p>
                  <div className="error-help">
                    <h4>Troubleshooting:</h4>
                    <ul>
                      <li>Ensure the Flask API is running on <code>http://localhost:5000</code></li>
                      <li>Run <code>python app.py</code> in your backend directory</li>
                      <li>Check that all model files (.pkl) are present in the model folder</li>
                    </ul>
                  </div>
                </div>
              )}

              {!prediction && !error && !loading && (
                <div className="card result-card info">
                  <div className="result-icon">📊</div>
                  <h2>How It Works</h2>
                  <div className="info-content">
                    <ol className="steps-list">
                      <li>
                        <strong>Input Data:</strong> Enter 7 key agricultural parameters
                      </li>
                      <li>
                        <strong>Preprocessing:</strong> Values are normalized using StandardScaler
                      </li>
                      <li>
                        <strong>ML Processing:</strong> Ensemble model analyzes the data
                      </li>
                      <li>
                        <strong>Prediction:</strong> Get the optimal crop recommendation
                      </li>
                    </ol>
                    <div className="demo-note">
                      <p>
                        💡 <strong>Demo Mode:</strong> This interface simulates ESP32 sensor input. 
                        In production, these values would come from real IoT devices measuring soil and weather conditions.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {loading && (
                <div className="card result-card loading">
                  <div className="loader"></div>
                  <h2>Analyzing Parameters...</h2>
                  <p>Our AI model is processing your data</p>
                </div>
              )}

              {/* Additional Info */}
              <div className="card info-card">
                <h3>📌 Parameter Guidelines</h3>
                <ul className="guidelines">
                  <li><strong>Nitrogen (N):</strong> 0-140 mg/kg</li>
                  <li><strong>Phosphorus (P):</strong> 5-145 mg/kg</li>
                  <li><strong>Potassium (K):</strong> 5-205 mg/kg</li>
                  <li><strong>Temperature:</strong> 8.0-44.0°C</li>
                  <li><strong>Humidity:</strong> 14.0-100.0%</li>
                  <li><strong>pH:</strong> 3.5-9.9 (neutral is ~7)</li>
                  <li><strong>Rainfall:</strong> 20.0-300.0 mm</li>
                </ul>
                <p className="info-note">
                  ⚠️ Values outside these ranges will be rejected before sending to the server.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Predict;
