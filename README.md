# 🌾 Crop Recommendation System API

This is a Flask-based REST API that predicts the most suitable crop to cultivate based on soil and environmental parameters. It's built using an ensemble machine learning model trained on agricultural data. Ideal for integration with IoT platforms like ESP32 and sensor-based farming systems.

---

## 🚀 Features

- Predicts optimal crop using multiple features: N, P, K, temperature, humidity, pH, rainfall.
- Trained ensemble model (Voting Classifier using Random Forest, Gradient Boosting, etc.)
- Scalable Flask API endpoint for integration with IoT or frontend apps.
- Accepts real-time JSON input for predictions.

---

## 🧠 ML Model Details

### Input Features

| Feature     | Description                         |
|------------|-------------------------------------|
| `N`        | Nitrogen content in soil (mg/kg)    |
| `P`        | Phosphorus content in soil (mg/kg)  |
| `K`        | Potassium content in soil (mg/kg)   |
| `temperature` | Temperature in Celsius           |
| `humidity` | Relative humidity (%)               |
| `ph`       | Soil pH value                       |
| `rainfall` | Rainfall in mm                      |

### Output
- A crop name (e.g., `rice`, `wheat`, `mung bean`, etc.)

### Algorithms Used
- Random Forest
- Decision Tree
- K-Nearest Neighbors
- Logistic Regression
- Linear Regression
- VotingClassifier (Ensemble)

---

## 📁 Project Structure

```
crop_flask_api/
├── app.py                     # Flask app for crop prediction
├── model/
│   ├── ensemble_model.pkl     # Trained model
│   ├── scaler.pkl             # Scaler for input features
│   └── label_encoder.pkl      # Label encoder for crop labels
├── requirements.txt
└── README.md
```

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/crop-flask-api.git
cd crop-flask-api
```

### 2. Install Dependencies

```bash
pip install -r requirements.txt
```

### 3. Run Flask App

```bash
python app.py
```

App will be available at:
📍 `http://localhost:5000`

---

## 🧪 API Endpoints

### ✅ `GET /`

Simple health check.

**Response:**

```json
{ "message": "Crop Recommendation API is running." }
```

---

### 🔍 `POST /predict`

Send environmental values in JSON format.

#### ✅ Example Request

```json
{
  "N": 90,
  "P": 42,
  "K": 43,
  "temperature": 21.5,
  "humidity": 80,
  "ph": 6.5,
  "rainfall": 120
}
```

#### ✅ Example Response

```json
{
  "recommended_crop": "rice"
}
```

Use `curl` to test:

```bash
curl -X POST http://localhost:5000/predict \
-H "Content-Type: application/json" \
-d '{"N":90, "P":42, "K":43, "temperature":21.5, "humidity":80, "ph":6.5, "rainfall":120}'
```

---

## 🧠 Training the Model (Optional)

```python
import pandas as pd
from sklearn.preprocessing import StandardScaler, LabelEncoder
from sklearn.ensemble import RandomForestClassifier, GradientBoostingClassifier, VotingClassifier
import pickle

# Load and preprocess data
df = pd.read_csv('Crop_recommendation.csv')
X = df.drop('label', axis=1)
y = df['label']

le = LabelEncoder()
y_encoded = le.fit_transform(y)

scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# Ensemble model
model = VotingClassifier(estimators=[
    ('rf', RandomForestClassifier()),
    ('gb', GradientBoostingClassifier())
], voting='soft')
model.fit(X_scaled, y_encoded)

# Save model, scaler, and encoder
with open('model/ensemble_model.pkl', 'wb') as f:
    pickle.dump(model, f)
with open('model/scaler.pkl', 'wb') as f:
    pickle.dump(scaler, f)
with open('model/label_encoder.pkl', 'wb') as f:
    pickle.dump(le, f)
```

---

## 🧩 requirements.txt

```txt
flask
numpy
scikit-learn
```

Install with:

```bash
pip install -r requirements.txt
```

---

## 🌐 IoT & ESP32 Integration

Use an ESP32 or other microcontroller to gather soil and climate data from sensors and send a POST request to the API. Tools like `WiFiClient`, `HTTPClient`, or `ESPAsyncWebServer` are recommended in Arduino IDE.

---

## ✍️ Author

* 👤 Your Name : Isuru Marasinghe
* 🎓 Smart Agriculture System

---

## 📄 License

This project is open source under the [MIT License](https://opensource.org/licenses/MIT).
