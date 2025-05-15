from flask import Flask, request, jsonify
import pickle
import numpy as np
import os

app = Flask(__name__)

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

    try:
        # Extract input values in order
        input_values = [data[key] for key in required_keys]
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
