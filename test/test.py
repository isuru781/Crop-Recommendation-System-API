import requests

# API endpoint
API_URL = "http://localhost:5000/predict"

# Sample test cases
test_inputs = [
    {
        "N": 90, "P": 42, "K": 43,
        "temperature": 21.5, "humidity": 80,
        "ph": 6.5, "rainfall": 120
    },
    {
        "N": 30, "P": 50, "K": 20,
        "temperature": 28.0, "humidity": 60,
        "ph": 5.8, "rainfall": 200
    },
    {
        "N": 110, "P": 40, "K": 40,
        "temperature": 18.0, "humidity": 75,
        "ph": 6.2, "rainfall": 90
    },
    {
        "N": 50, "P": 20, "K": 60,
        "temperature": 30.0, "humidity": 85,
        "ph": 7.0, "rainfall": 150
    }
]

# Run tests
for i, sample in enumerate(test_inputs):
    response = requests.post(API_URL, json=sample)
    if response.status_code == 200:
        crop = response.json().get("recommended_crop", "Unknown")
        print(f"Test Case {i+1}: Predicted Crop = {crop}")
    else:
        print(f"Test Case {i+1}: Failed with status {response.status_code}")
