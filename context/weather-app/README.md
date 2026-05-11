# 🌤️ Weather

A modern weather forecast application demonstrating **Context API + useReducer** pattern combined with **Leaflet Maps** for interactive location visualization.

## ✨ Features

- ✅ **Real-time weather data** from OpenWeatherMap API
- ✅ **5-day forecast** with day/night temperatures
- ✅ **Interactive map** with Leaflet & OpenStreetMap
- ✅ **Geolocation detection** - auto-detect user location
- ✅ **Auto-zoom to city** - map flyTo animation
- ✅ **Search cities** by name with instant map update
- ✅ **Minimal design** - clean, modern aesthetic
- ✅ **Loading states** with smooth animations
- ✅ **Error handling** with user feedback
- ✅ **Responsive layout** - works on all devices

## 🎓 Learning Outcomes

- Context API for global state management
- useReducer hook for complex state logic
- Map integration with react-leaflet
- Browser Geolocation API
- Async data fetching patterns
- Loading & error state handling
- Component composition & reusability
- CSS minimal design patterns

## 🛠️ Tech Stack

- **React** 19.2.5 with Hooks
- **State Management**: Context API + useReducer
- **Mapping**: Leaflet + react-leaflet
- **Weather Data**: OpenWeatherMap API (free tier)
- **Styling**: CSS3 with minimal design
- **Build Tool**: Create React App

## 📋 Setup & Running

```bash
# 1. Install dependencies
npm install

# 2. Install mapping libraries (if not already included)
npm install leaflet react-leaflet

# 3. Create .env.local file
cp .env.example .env.local

# 4. Add your OpenWeatherMap API key
# Get free API key from: https://openweathermap.org/api

# 5. Start development server
npm start
```

App runs on: `http://localhost:3000`

## 🔐 Environment Variables

```bash
# .env.local (create this file, add your API key)
REACT_APP_OPENWEATHER_API_KEY=your_api_key_here

# .env.example (tracked in git - shows structure)
REACT_APP_OPENWEATHER_API_KEY=your_api_key_here
```

**Security Note**: `.env.local` is ignored by git - never commit API keys!

## 📂 Project Structure

```
src/
├── components/
│   ├── SearchBar.js      # City search with input
│   ├── SearchBar.css     # Search styling
│   ├── Main.js           # Main content coordinator
│   ├── Main.css          # Main container
│   ├── Loading.js        # Spinner component
│   ├── Loading.css       # Loading animation
│   ├── WeatherHeader.js  # City name with location pin
│   ├── WeatherHeader.css # Header styling
│   ├── WeatherMap.js     # Interactive Leaflet map
│   ├── WeatherMap.css    # Map container styling
│   ├── WeatherGrid.js    # 5-day forecast grid
│   ├── WeatherGrid.css   # Grid layout
│   ├── DayCard.js        # Individual day card
│   └── DayCard.css       # Card styling
├── contexts/
│   └── WeatherContext.js # Global state (reducer + actions)
├── App.js                # Root component with API integration
├── App.css               # App-level styles
└── index.js              # React entry point
```

## 🎨 Design Philosophy

- **Minimal aesthetic**: Clean white cards, light backgrounds
- **Clear hierarchy**: Size, weight, and spacing guide user focus
- **Subtle interactions**: Smooth hover effects, gentle animations
- **Emoji integration**: Visual enhancement without clutter
- **Consistent palette**:
  - Primary blue: `#2196F3`
  - Text: `#333` / `#555`
  - Background: `#f5f5f5`
  - Accent (temp): `#FF9800`

## 🏗️ Core Architecture

### State Management with useReducer

```javascript
const initialState = {
  weather: null,
  city: "Ankara",
  loading: false,
  error: null,
  userLocation: null,
};

// Actions:
// - FETCH_START: Begin API call
// - FETCH_SUCCESS: Store weather data
// - FETCH_ERROR: Handle errors
// - SET_CITY: Update search city
// - SET_USER_LOCATION: Store geolocation coords
```

### Component Flow

```
App (API integration + geolocation)
  ↓
WeatherProvider (Context wrapper)
  ↓
AppContent (Renders layout)
  ├── SearchBar (City input)
  ├── Loading (Spinner)
  └── Main
      ├── WeatherHeader (City name 📍)
      ├── WeatherMap (Interactive map)
      └── WeatherGrid
          └── DayCard × 5 (Forecast cards)
```

### Map Features

- **Markers**:
  - Blue pin: User's current location (from geolocation)
  - City pin: Selected city location
  - Popups: Click for coordinates info

- **Animation**:
  - `map.flyTo()` with 2-second duration
  - Zoom level 10 for city view
  - Smooth transition between cities

## 🚀 Features in Action

### Search Flow

1. User enters city name
2. Click "Search" or press Enter
3. App fetches weather data
4. Map auto-zooms to city
5. Forecast displays below

### Geolocation

1. App requests browser permission
2. Captures user coordinates
3. Blue marker shows on map
4. Graceful fallback if denied

### Data Display

- **Header**: City name with location emoji
- **Map**: 350px interactive Leaflet map
- **Cards**: Day temp (orange), Night temp (gray)
- **Status**: Weather condition text

## 📱 Responsive Breakpoints

```css
/* Tablets: 768px and below */
/* Phones: 480px and below */
- Grid adjusts column count
- Font sizes scale down
- Touch-friendly touch targets
```

## 🔗 API Integration

- **Endpoint**: `https://api.openweathermap.org/data/2.5/forecast`
- **Data**: 5-day forecast with 3-hour intervals
- **Processing**:
  - Filters afternoon (15:00) data
  - Filters night (03:00) data
  - Pairs into daily records

## 💡 Learning Patterns

1. **Global State**: Avoid prop-drilling with Context
2. **Complex State**: useReducer for multiple related values
3. **API Patterns**: Loading → Success/Error flows
4. **Map Integration**: React hooks with third-party libraries
5. **Error Handling**: Graceful degradation (geolocation, API)

## 📝 Author Notes

This project showcases professional React patterns used in production apps. It combines state management, external APIs, interactive maps, and clean design - perfect for portfolio demonstration.

**Key Takeaways**:

- Context + useReducer scales better than useState for complex apps
- Map libraries integrate well with React through refs and hooks
- Minimal design with emoji accents feels modern and professional
- Geolocation adds real-world functionality with graceful fallbacks
