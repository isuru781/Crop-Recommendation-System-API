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
Crop-Recommendation-System-API/
├── app.py                     # Flask app for crop prediction
├── model/
│   ├── ensemble_model.pkl     # Trained model
│   ├── scaler.pkl             # Scaler for input features
│   └── label_encoder.pkl      # Label encoder for crop labels
├── requirements.txt
├── test/
│   ├── test.py               # test api
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

## ✅ Testing the API

You can test the Crop Recommendation API using two methods:

### 🧪 1. Manual Testing (Using `curl` or Postman)

#### 🔹 Test: GET `/` (Health Check)

```bash
curl http://localhost:5000/
```

Expected Output:

```json
{ "message": "Crop Recommendation API is running." }
```

#### 🔹 Test: POST `/predict`

```bash
curl -X POST http://localhost:5000/predict \
-H "Content-Type: application/json" \
-d '{
  "N": 90,
  "P": 42,
  "K": 43,
  "temperature": 21.5,
  "humidity": 80,
  "ph": 6.5,
  "rainfall": 120
}'
```

Expected Output:

```json
{ "recommended_crop": "rice" }
```

✅ You can also use Postman or Thunder Client (VS Code extension) for sending POST requests.

### 🧪 2. Automated Testing Using Python

Create a file named `test.py` inside your project directory:

```python
import requests

API_URL = "http://localhost:5000/predict"

sample_inputs = [
    {
        "N": 90,
        "P": 42,
        "K": 43,
        "temperature": 21.5,
        "humidity": 80,
        "ph": 6.5,
        "rainfall": 120
    },
    {
        "N": 45,
        "P": 60,
        "K": 40,
        "temperature": 26,
        "humidity": 65,
        "ph": 6.0,
        "rainfall": 180
    }
]

for i, data in enumerate(sample_inputs):
    response = requests.post(API_URL, json=data)
    print(f"Test Case {i+1}:")
    print(f"Input: {data}")
    print(f"Response: {response.json()}")
    print("-" * 50)
```

▶️ Run the test:

```bash
python test_api.py
```

Expected Output Example:

```
Test Case 1:
Input: {N: 90, P: 42, K: 43, ...}
Response: {"recommended_crop": "rice"}

Test Case 2:
Input: {...}
Response: {"recommended_crop": "maize"}
```

### 🛠 Common Errors

| Error | Solution |
|-------|----------|
| `ModuleNotFoundError: requests` | Run `pip install requests` |
| `ConnectionRefusedError` | Make sure Flask server is running (`python app.py`) |
| `500 Internal Server Error` | Check if model `.pkl` files exist and paths are correct |

---


## 🐳 Docker Deployment (Recommended)

You can run the API instantly using Docker.

### 🔗 Docker Hub Image

👉 https://hub.docker.com/r/isuru225/crop-recommendation-system-api

---

### 📦 Pull Image

```bash
docker pull isuru225/crop-recommendation-system-api
```

### ▶️ Run Container

```bash
docker run -p 5000:5000 isuru225/crop-recommendation-system-api
```

---

### 🌐 Access the API

Once the container is running, the API will be available at:

📍 [http://localhost:5000](http://localhost:5000)

---

### 🧪 Quick Test

```bash
curl http://localhost:5000/
```

### 🔍 Test Prediction

```bash
curl -X POST http://localhost:5000/predict \
-H "Content-Type: application/json" \
-d '{"N":90,"P":42,"K":43,"temperature":21.5,"humidity":80,"ph":6.5,"rainfall":120}'
```

---

## ✍️ Author

* 👤 Isuru Marasinghe
* 🎓 Smart Agriculture System

---

