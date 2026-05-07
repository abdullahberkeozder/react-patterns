# Worldwise - Travel Tracking App

A modern travel tracking application demonstrating **Context API**, **React Router**, and **Leaflet Maps** integration.

## Features

- ✅ Interactive world map with Leaflet
- ✅ Click on map to add cities
- ✅ Track visited cities with dates
- ✅ Date picker for visit dates
- ✅ City details and deletion
- ✅ Responsive map interface
- ✅ Global state management with Context

## Learning Outcomes

- Context API for global state
- React Router v6 for navigation
- Leaflet maps integration
- Geolocation API usage
- Date handling with react-datepicker
- Component communication patterns
- Managing complex nested state

## Tech Stack

- React 18.2.0
- Vite (build tool)
- React Router v6.28.2
- Leaflet + react-leaflet
- react-datepicker
- JSON Server (for data)
- ESLint

## Setup & Running

```bash
# Install dependencies
npm install

# Terminal 1: Start Vite dev server
npm run dev

# Terminal 2: Start JSON Server
npm run server
```

- App runs on: `http://localhost:5173`
- JSON Server on: `http://localhost:800`

## Project Structure

```
src/
├── components/
│   ├── Map.jsx          # Interactive Leaflet map
│   ├── CityList.jsx     # List of visited cities
│   ├── CityItem.jsx     # Individual city item
│   ├── Form.jsx         # Add new city form
│   └── *.css            # Component styles
├── contexts/
│   └── CityContext.jsx  # Global cities state
├── pages/
│   ├── AppLayout.jsx    # Main app layout
│   ├── Homepage.jsx     # Landing page
│   └── NotFound.jsx     # 404 page
├── App.jsx              # Router setup
└── main.jsx             # Entry point
```

## Key Features

### 1. **Interactive Map**

- Click to add cities
- Center on country
- Geolocation support

### 2. **City Management**

- Add cities with dates
- View city details
- Delete cities
- Persistent storage (JSON Server)

### 3. **Routing**

- Homepage
- App (Map + Cities)
- 404 page
- Dynamic city routes

### 4. **State Management**

- Context API for cities data
- Shared dispatch actions
- Global loading/error states

## Learning Focus

Advanced React patterns:

- Multi-page app with React Router
- Third-party library integration (Leaflet)
- Complex state management
- API integration with persistence
- Date/time handling
- Geolocation API

## Author Notes

This project brings together multiple React concepts into a practical travel app. Great for understanding how professional apps structure routing, state, and third-party integrations.
