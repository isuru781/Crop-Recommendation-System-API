from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
import numpy as np
import os

app = Flask(__name__)
CORS(
    app,
    resources={r"/*": {"origins": ["http://localhost:5173", "http://localhost:5174"]}},
    supports_credentials=True
)  # ✅ Enable CORS for React frontend

# ✅ Correct paths to model files
with open(os.path.join('model', 'ensemble_model.pkl'), 'rb') as f:
    model = pickle.load(f)

with open(os.path.join('model', 'scaler.pkl'), 'rb') as f:
    scaler = pickle.load(f)

with open(os.path.join('model', 'label_encoder.pkl'), 'rb') as f:
    label_encoder = pickle.load(f)

    
# Test route to confirm API is live
@app.route('/', methods=['GET'])
def index():
    return jsonify({"message": "Crop Recommendation API is running."})

# Predict route
@app.route('/predict', methods=['POST'])
def predict_crop():
    data = request.get_json()
    required_keys = ['N', 'P', 'K', 'temperature', 'humidity', 'ph', 'rainfall']

    # Validate input
    for key in required_keys:
        if key not in data:
            return jsonify({"error": f"Missing input value: {key}"}), 400

    # Define valid ranges for each parameter
    validation_rules = {
        'N': {'min': 0, 'max': 140, 'name': 'Nitrogen (N)', 'unit': 'mg/kg'},
        'P': {'min': 5, 'max': 145, 'name': 'Phosphorus (P)', 'unit': 'mg/kg'},
        'K': {'min': 5, 'max': 205, 'name': 'Potassium (K)', 'unit': 'mg/kg'},
        'temperature': {'min': 8.0, 'max': 44.0, 'name': 'Temperature', 'unit': '°C'},
        'humidity': {'min': 14.0, 'max': 100.0, 'name': 'Humidity', 'unit': '%'},
        'ph': {'min': 3.5, 'max': 9.9, 'name': 'pH', 'unit': ''},
        'rainfall': {'min': 20.0, 'max': 300.0, 'name': 'Rainfall', 'unit': 'mm'}
    }

    # Validate data types and ranges
    for key in required_keys:
        value = data[key]
        rules = validation_rules[key]
        
        # Check if value is numeric
        try:
            numeric_value = float(value)
        except (ValueError, TypeError):
            return jsonify({
                "error": f"Invalid data type for {rules['name']}. Expected a numeric value, but received: '{value}'"
            }), 400
        
        # Check range validation
        if numeric_value < rules['min'] or numeric_value > rules['max']:
            unit = f" {rules['unit']}" if rules['unit'] else ""
            return jsonify({
                "error": f"{rules['name']} is out of acceptable range. Value must be between {rules['min']}{unit} and {rules['max']}{unit}. You provided: {numeric_value}{unit}"
            }), 400

    try:
        # Extract input values in order
        input_values = [float(data[key]) for key in required_keys]
        input_array = np.array(input_values).reshape(1, -1)

        # Scale input
        input_scaled = scaler.transform(input_array)

        # Predict
        prediction = model.predict(input_scaled)
        crop_name = label_encoder.inverse_transform(prediction)[0]

        return jsonify({"recommended_crop": crop_name})

    except Exception as e:
        return jsonify({"error": str(e)}), 500

# Run the app
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
