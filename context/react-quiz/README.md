# React Quiz App

A dynamic quiz application demonstrating **Context API** state management in React.

## Features

- ✅ Quiz questions loaded from JSON server
- ✅ Global state management with Context API
- ✅ Quiz progress tracking
- ✅ Score calculation
- ✅ Question navigation
- ✅ Responsive UI

## Learning Outcomes

- Context API for global state
- useContext hook implementation
- JSON Server for data management
- Component composition patterns
- Quiz logic implementation

## Tech Stack

- React 19.2.5
- Context API
- JSON Server
- CSS3

## Setup & Running

```bash
# Install dependencies
npm install

# Terminal 1: Start React app
npm start

# Terminal 2: Start JSON Server (in project root)
npm run server
```

- App runs on: `http://localhost:3000`
- JSON Server on: `http://localhost:8000`

## Project Structure

```
src/
├── components/          # Reusable components
├── contexts/           # Context definitions
├── App.js             # Main app component
└── index.js           # Entry point
```

## Key Concepts Demonstrated

1. **Context API** - Managing quiz state globally
2. **useContext Hook** - Accessing context in components
3. **State Management** - Question tracking, scoring
4. **Component Structure** - Parent-child communication

## Author Notes

This project focuses on practicing Context API patterns for state management across component trees without prop drilling.

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
