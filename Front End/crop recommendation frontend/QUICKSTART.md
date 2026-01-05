# 🌾 Crop Recommendation System - Quick Start Guide

## 🎯 Complete Setup Instructions

### Backend Setup (Flask API)

1. **Navigate to backend directory:**
   ```bash
   cd "c:\Users\isuru\Desktop\Crop-Recommendation-System-API"
   ```

2. **Install Python dependencies:**
   ```bash
   pip install flask numpy scikit-learn flask-cors
   ```

3. **Start the Flask API server:**
   ```bash
   python app.py
   ```
   
   ✅ Backend should now be running on `http://localhost:5000`

### Frontend Setup (React App)

1. **Navigate to frontend directory:**
   ```bash
   cd "c:\Users\isuru\Desktop\Crop-Recommendation-System-API\Front End\my-react-app"
   ```

2. **Dependencies are already installed!**
   - ✅ react-router-dom
   - ✅ axios

3. **Start the React development server:**
   ```bash
   npm run dev
   ```
   
   ✅ Frontend is now running on `http://localhost:5174`

## 🌐 Access the Application

Open your browser and visit: **http://localhost:5174**

## 📱 Application Pages

### 1. **Home Page** (`/`)
- Overview of the system
- Key features showcase
- "How It Works" section
- Call-to-action buttons

### 2. **Predict Page** (`/predict`)
- **Main feature!** Input soil and environmental parameters
- Get AI-powered crop recommendations
- Sample data buttons for quick testing
- Real-time results from the ML model

### 3. **Features Page** (`/features`)
- Detailed system capabilities
- ML model architecture
- IoT integration details
- Use cases and benefits

### 4. **About Page** (`/about`)
- Project information
- Author details
- Technology stack
- Model parameters

## 🧪 Testing the Prediction

### Using Sample Data:

1. Go to the **Predict** page
2. Click any sample button (Rice, Maize, Wheat, or Cotton)
3. Click "Predict Best Crop"
4. See the AI recommendation!

### Using Custom Values:

1. Enter your own values for:
   - **N** (Nitrogen): 0-150 mg/kg
   - **P** (Phosphorus): 0-150 mg/kg
   - **K** (Potassium): 0-150 mg/kg
   - **Temperature**: 10-45°C
   - **Humidity**: 20-100%
   - **pH**: 4-9
   - **Rainfall**: 50-300mm

2. Click "Predict Best Crop"
3. Get instant recommendation!

## 🔧 Important Notes

### Backend CORS Configuration

Make sure your Flask `app.py` has CORS enabled:

```python
from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
import numpy as np

app = Flask(__name__)
CORS(app)  # Enable CORS for frontend

# ... rest of your code
```

If you don't have `flask-cors` installed:
```bash
pip install flask-cors
```

### Model Files Required

Ensure these files exist in your backend directory:
- `model/ensemble_model.pkl`
- `model/scaler.pkl`
- `model/label_encoder.pkl`

## 📊 Architecture

```
┌─────────────────────────────────────────────┐
│         React Frontend (Port 5174)          │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐    │
│  │  Home   │  │ Predict │  │Features │    │
│  └─────────┘  └─────────┘  └─────────┘    │
└─────────────────┬───────────────────────────┘
                  │
                  │ Axios HTTP Request
                  │
┌─────────────────▼───────────────────────────┐
│         Flask API (Port 5000)               │
│  ┌─────────────────────────────────────┐   │
│  │  POST /predict                       │   │
│  │  → StandardScaler preprocessing     │   │
│  │  → Ensemble ML Model                │   │
│  │  → Label Decoder                    │   │
│  └─────────────────────────────────────┘   │
└─────────────────────────────────────────────┘
```

## 🎨 Features Included

✅ **Fully Responsive Design** - Works on all devices  
✅ **Interactive Prediction Form** - Real-time API integration  
✅ **Sample Data** - Quick testing with pre-filled values  
✅ **Error Handling** - Helpful error messages  
✅ **Loading States** - Visual feedback during API calls  
✅ **Modern UI** - Clean, professional design  
✅ **Navigation** - Easy routing between pages  
✅ **Information Pages** - Complete documentation  

## 🐛 Common Issues

### Issue: "Failed to connect to API"
**Solution:** Ensure Flask backend is running on port 5000

### Issue: CORS Error
**Solution:** Install and enable flask-cors in your Flask app

### Issue: Model not found
**Solution:** Verify .pkl files exist in the model/ directory

### Issue: Port already in use
**Solution:** Vite will automatically use next available port (5174, 5175, etc.)

## 🎯 Demo Flow

1. **Start Backend** → `python app.py`
2. **Start Frontend** → `npm run dev`
3. **Open Browser** → `http://localhost:5174`
4. **Explore Home** → Learn about the system
5. **Try Prediction** → Use sample data or custom values
6. **View Results** → See AI-powered crop recommendation
7. **Read About** → Understand the ML model
8. **Check Features** → Discover all capabilities

## 📝 Next Steps

- ✅ Both frontend and backend are ready!
- ✅ All pages are implemented
- ✅ API integration is complete
- ✅ Responsive design is done

**You can now demo the complete Crop Recommendation System without any hardware!**

## 💡 Production Deployment

For production deployment:

1. **Frontend:**
   ```bash
   npm run build
   # Deploy the 'dist' folder to Netlify, Vercel, or any static host
   ```

2. **Backend:**
   - Deploy Flask app to Heroku, Railway, or AWS
   - Update API URL in frontend (replace localhost:5000)

## 👤 Contact

**Isuru Marasinghe**  
Smart Agriculture System  
Crop Recommendation AI Project

---

**Enjoy your Smart Agriculture System! 🌾**
