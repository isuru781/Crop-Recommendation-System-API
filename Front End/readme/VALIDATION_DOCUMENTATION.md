# 📋 Input Validation Documentation - `/predict` Endpoint

## Overview
The `/predict` endpoint now includes comprehensive input validation for all agricultural parameters to ensure data integrity and prevent invalid predictions.

---

## ✅ Validation Rules

### Parameter Ranges

| Parameter | Min Value | Max Value | Unit | Description |
|-----------|-----------|-----------|------|-------------|
| **N** (Nitrogen) | 0 | 140 | mg/kg | Nitrogen content in soil |
| **P** (Phosphorus) | 5 | 145 | mg/kg | Phosphorus content in soil |
| **K** (Potassium) | 5 | 205 | mg/kg | Potassium content in soil |
| **temperature** | 8.0 | 44.0 | °C | Temperature in Celsius |
| **humidity** | 14.0 | 100.0 | % | Relative humidity percentage |
| **ph** | 3.5 | 9.9 | - | Soil pH value |
| **rainfall** | 20.0 | 300.0 | mm | Rainfall in millimeters |

---

## 🔍 Validation Checks

### 1. **Required Field Validation**
- All 7 parameters must be present in the JSON request
- Missing fields return `400 Bad Request` with error message

### 2. **Data Type Validation**
- All values must be numeric (int or float)
- Non-numeric values return `400 Bad Request` with error message

### 3. **Range Validation**
- Each parameter is validated against its min/max range
- Out-of-range values return `400 Bad Request` with descriptive error

---

## 📝 Examples

### ✅ Valid Request
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

**Response:**
```json
{
  "recommended_crop": "rice"
}
```

---

### ❌ Invalid Request - Out of Range (Temperature)
```json
{
  "N": 90,
  "P": 42,
  "K": 43,
  "temperature": 50.0,
  "humidity": 80,
  "ph": 6.5,
  "rainfall": 120
}
```

**Response (400):**
```json
{
  "error": "Temperature must be between 8.0 and 44.0. Received: 50.0"
}
```

---

### ❌ Invalid Request - Invalid Data Type
```json
{
  "N": "ninety",
  "P": 42,
  "K": 43,
  "temperature": 21.5,
  "humidity": 80,
  "ph": 6.5,
  "rainfall": 120
}
```

**Response (400):**
```json
{
  "error": "Nitrogen (N) must be a numeric value. Received: ninety"
}
```

---

### ❌ Invalid Request - Missing Field
```json
{
  "N": 90,
  "P": 42,
  "K": 43,
  "temperature": 21.5,
  "humidity": 80,
  "ph": 6.5
}
```

**Response (400):**
```json
{
  "error": "Missing input value: rainfall"
}
```

---

### ❌ Invalid Request - Negative Nitrogen
```json
{
  "N": -10,
  "P": 42,
  "K": 43,
  "temperature": 21.5,
  "humidity": 80,
  "ph": 6.5,
  "rainfall": 120
}
```

**Response (400):**
```json
{
  "error": "Nitrogen (N) must be between 0 and 140. Received: -10"
}
```

---

### ❌ Invalid Request - Humidity over 100%
```json
{
  "N": 90,
  "P": 42,
  "K": 43,
  "temperature": 21.5,
  "humidity": 150,
  "ph": 6.5,
  "rainfall": 120
}
```

**Response (400):**
```json
{
  "error": "Humidity must be between 14.0 and 100.0. Received: 150"
}
```

---

## 🧪 Testing Validation

### Test Invalid Temperature (too high)
```bash
curl -X POST http://localhost:5000/predict \
-H "Content-Type: application/json" \
-d '{"N":90, "P":42, "K":43, "temperature":50, "humidity":80, "ph":6.5, "rainfall":120}'
```

### Test Invalid pH (too low)
```bash
curl -X POST http://localhost:5000/predict \
-H "Content-Type: application/json" \
-d '{"N":90, "P":42, "K":43, "temperature":21.5, "humidity":80, "ph":2.0, "rainfall":120}'
```

### Test Invalid Rainfall (too high)
```bash
curl -X POST http://localhost:5000/predict \
-H "Content-Type: application/json" \
-d '{"N":90, "P":42, "K":43, "temperature":21.5, "humidity":80, "ph":6.5, "rainfall":400}'
```

### Test Missing Field
```bash
curl -X POST http://localhost:5000/predict \
-H "Content-Type: application/json" \
-d '{"N":90, "P":42, "K":43, "temperature":21.5, "humidity":80, "ph":6.5}'
```

### Test Non-numeric Value
```bash
curl -X POST http://localhost:5000/predict \
-H "Content-Type: application/json" \
-d '{"N":"high", "P":42, "K":43, "temperature":21.5, "humidity":80, "ph":6.5, "rainfall":120}'
```

---

## 📊 Error Response Format

All validation errors return:
- **HTTP Status Code:** `400 Bad Request`
- **Response Body:** JSON object with `error` field containing descriptive message

---

## 🔐 Benefits of Validation

1. **Data Integrity:** Ensures only realistic agricultural values are processed
2. **Error Prevention:** Catches invalid data before model prediction
3. **Better UX:** Provides clear, actionable error messages
4. **API Reliability:** Prevents crashes from unexpected input
5. **Agricultural Accuracy:** Validation ranges based on real-world crop data

---

## 📌 Notes

- Validation ranges are based on typical agricultural data
- Values outside these ranges are unlikely to produce meaningful crop recommendations
- The API uses StandardScaler, so extreme values could skew predictions
- All numeric values are automatically converted to float for consistency
