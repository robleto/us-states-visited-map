// Load the SVG file
document.addEventListener("DOMContentLoaded", function () {
	fetch("us-map.svg")
		.then((response) => response.text())
		.then((svgData) => {
			document.getElementById("map-container").innerHTML = svgData;

			// Once the SVG is loaded, initialize the map functionality
			initMap();
		})
		.catch((error) => {
			console.error("Error loading the SVG file:", error);
			document.getElementById("map-container").innerHTML =
				"<p>Error loading map. Please try again later.</p>";
		});
});

function initMap() {
	// Get all state paths from the loaded SVG
	const statePaths = document.querySelectorAll("svg path");

	// Your existing map initialization code goes here
	// This includes setting up click handlers, applying initial colors, etc.

	// Generate state checkboxes
	generateStatesList();

	// Apply initial settings
	updateMapColors();
	setupEventListeners();
}

// Rest of your existing functions...
