// main.js - Vanilla JavaScript implementation for CodePen
class USStatesMap {
	constructor(containerId, statesData) {
		this.containerId = containerId;
		this.statesData = statesData;
		this.container = document.getElementById(containerId);
	}

	initialize() {
		// Create the container for the map and date display
		this.container.innerHTML = `
      <div class="us-map-container">
        ${this.getSVG()}
        <div id="dateDisplay" class="date-display">1976</div>
      </div>
    `;

		// Start the animation after a small delay
		setTimeout(() => {
			this.animateStates();
		}, 500);
	}

	animateStates() {
		this.statesData.forEach((stateData, index) => {
			const stateElement = document.getElementById(stateData.state);

			if (stateElement) {
				// Using GSAP for animation
				gsap.to(stateElement, {
					fill: "#3E7075",
					duration: 1,
					delay: index * 0.5,
				});

				// Update the date display
				const dateElement = document.getElementById("dateDisplay");
				setTimeout(() => {
					if (dateElement) {
						dateElement.textContent = stateData.date;
					}
				}, index * 500); // Delay in milliseconds (index * 0.5 seconds)
			}
		});
	}

	// The SVG content goes here
	getSVG() {
		return `
      <svg id="us-map" xmlns="http://www.w3.org/2000/svg" xmlns:amcharts="http://amcharts.com/ammap" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 1000 600">
        <!-- SVG content from your USMapSVG.tsx file goes here -->
        <!-- This is a placeholder. You'll need to replace this with your actual SVG content -->
        <g>
          <path id="AL" fill="#D3D3D3" d="M..."></path>
          <path id="AK" fill="#D3D3D3" d="M..."></path>
          <!-- ... all other state paths ... -->
        </g>
      </svg>
    `;
	}
}

// Example usage
document.addEventListener("DOMContentLoaded", () => {
	const visitedStates = [
		{ state: "DE", date: "1976" },
		{ state: "PA", date: "1976" },
		{ state: "MD", date: "1976" },
		// ... copy all your states from statesVisited.json
	];

	const map = new USStatesMap("map-container", visitedStates);
	map.initialize();
});



// Load the SVG file
document.addEventListener('DOMContentLoaded', function() {
    fetch('us-map.svg')
        .then(response => response.text())
        .then(svgData => {
            document.getElementById('map-container').innerHTML = svgData;
            
            // Once the SVG is loaded, initialize the map functionality
            initMap();
        })
        .catch(error => {
            console.error('Error loading the SVG file:', error);
            document.getElementById('map-container').innerHTML = '<p>Error loading map. Please try again later.</p>';
        });
});
