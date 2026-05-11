import { createContext, useReducer } from "react";

const WeatherContext = createContext();

const initialState = {
  weather: null,
  city: "Ankara",
  loading: false,
  error: null,
  userLocation: null, // { lat, lng }
};

function weatherReducer(state, action) {
  switch (action.type) {
    case "FETCH_START":
      return { ...state, loading: true, error: null };
    case "FETCH_SUCCESS":
      return {
        ...state,
        weather: action.payload,
        loading: false,
      };
    case "FETCH_ERROR":
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case "SET_CITY":
      return { ...state, city: action.payload };
    case "SET_USER_LOCATION":
      return { ...state, userLocation: action.payload };
    default:
      return state;
  }
}

function WeatherProvider({ children }) {
  const [state, dispatch] = useReducer(
    weatherReducer,
    initialState,
  );

  const value = {
    state,
    dispatch,
  };

  return (
    <WeatherContext.Provider value={value}>
      {children}
    </WeatherContext.Provider>
  );
}

export { WeatherContext, WeatherProvider };
