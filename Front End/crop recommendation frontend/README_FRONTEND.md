# 🌾 Crop Recommendation System - Frontend

A modern, responsive React + TypeScript web application for the Crop Recommendation System. This frontend provides an intuitive interface to interact with the Flask-based ML API for intelligent crop selection.

## 🚀 Features

- **Home Page** - Landing page with system overview and key features
- **Prediction Demo** - Interactive form to input soil/environmental parameters and get crop recommendations
- **Features Page** - Detailed explanation of system capabilities and benefits
- **About Page** - Information about the ML model, technology stack, and author
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI/UX** - Clean, professional interface with smooth animations

## 🛠️ Tech Stack

- **React 18** - Modern UI library
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool
- **React Router** - Client-side routing
- **Axios** - HTTP client for API calls
- **CSS3** - Custom styling with gradients and animations

## 📦 Installation

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:5173`

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

## 🔌 Backend Connection

This frontend connects to the Flask API backend. Make sure the backend is running on `http://localhost:5000` before using the prediction feature.

### Start the Backend:

```bash
cd ../..  # Navigate to backend directory
python app.py
```

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── Header.tsx      # Navigation header
│   ├── Footer.tsx      # Footer with links
│   └── Layout.tsx      # Page layout wrapper
├── pages/              # Page components
│   ├── Home.tsx        # Landing page
│   ├── Predict.tsx     # Prediction demo page
│   ├── Features.tsx    # Features showcase
│   └── About.tsx       # About page
├── App.tsx             # Main app with routing
├── main.tsx            # App entry point
└── index.css           # Global styles
```

## 🎨 Pages Overview

### Home (`/`)
- Hero section with call-to-action
- System benefits and features preview
- "How It Works" process flow
- Call-to-action section

### Predict (`/predict`)
- Interactive 7-parameter input form
- Real-time API integration
- Sample data buttons for quick testing
- Detailed result display with recommendations
- Error handling and troubleshooting guide

### Features (`/features`)
- ML model capabilities
- IoT integration details
- Parameter analysis breakdown
- Use cases and benefits
- Supported crop varieties

### About (`/about`)
- Project overview and mission
- ML model architecture details
- Input parameter specifications
- Author information
- Technology stack

## 🌐 API Integration

The app uses Axios to communicate with the Flask backend:

**Endpoint:** `POST http://localhost:5000/predict`

**Request Body:**
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

## 🎯 Usage

1. **Navigate to Home** - Learn about the system
2. **Go to Predict** - Enter soil and environmental parameters
3. **Try Sample Data** - Use pre-filled values for quick demo
4. **Get Recommendation** - Click "Predict Best Crop" button
5. **View Results** - See the recommended crop and confidence

## 🐛 Troubleshooting

### API Connection Issues

If you see "Failed to connect to the API" error:

1. Ensure Flask backend is running: `python app.py`
2. Check backend is on `http://localhost:5000`
3. Verify CORS is enabled in Flask app
4. Check browser console for detailed errors

### Development Server Issues

If `npm run dev` fails:

1. Delete `node_modules` and `package-lock.json`
2. Run `npm install` again
3. Clear cache: `npm cache clean --force`

## 📱 Responsive Breakpoints

- **Desktop:** > 968px
- **Tablet:** 768px - 968px
- **Mobile:** < 768px

## 🎨 Color Scheme

- **Primary Green:** `#3a6b1f`
- **Dark Green:** `#2d5016`
- **Light Green:** `#5a9d2e`
- **Accent:** `#a8d08d`
- **Background:** `#f8f9fa`

## ✨ Features Highlights

- ✅ Fully responsive design
- ✅ Type-safe with TypeScript
- ✅ Modern React hooks
- ✅ Client-side routing
- ✅ Error boundaries
- ✅ Loading states
- ✅ Form validation
- ✅ Accessible UI

## 👤 Author

**Isuru Marasinghe**
- Smart Agriculture System
- Crop Recommendation AI Project

## 📄 License

This project is part of the Smart Agriculture System initiative.

---

**Note:** This is a demo frontend designed to showcase the ML API without requiring physical ESP32 hardware. In production, sensor data would be collected automatically from IoT devices.
