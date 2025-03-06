# US States Visited Map

An interactive map showing US states visited over time with animations.

## Overview

This repository contains both React and vanilla JavaScript implementations of an animated US states visited map. As states are "visited" in chronological order, they're highlighted on the map with the year displayed.

## Implementations

### React Implementation

The React implementation is in the `/react` directory and includes:
- `USMap.tsx` - Main component
- `USMapSVG.tsx` - SVG map component
- `statesVisited.json` - Data file with state visit information

### Vanilla JavaScript Implementation

The vanilla JS implementation is in the `/vanilla` directory and is what's used in the CodePen example.

## Usage

### React Version

1. Install dependencies:
```bash
npm install gsap
```

2. Import and use the component:
```jsx
import USMap from './components/USMap';

function App() {
  return (
    <div className="App">
      <h1>States I've Visited</h1>
      <USMap />
    </div>
  );
}
```

### Vanilla Version

Include the required files in your HTML:
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.0/gsap.min.js"></script>
<script src="./js/us-map.js"></script>
<link rel="stylesheet" href="./css/styles.css">
<div id="map-container"></div>
```

Then initialize:
```js
document.addEventListener('DOMContentLoaded', () => {
  const visitedStates = [
    { "state": "DE", "date": "1976" },
    // ... your state data
  ];
  
  const map = new USStatesMap('map-container', visitedStates);
  map.initialize();
});
```

## Customization

You can customize:
- The fill color for visited states 
- Animation timing and effects
- Styling through CSS

## License

MIT
