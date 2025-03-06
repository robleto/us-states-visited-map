// main.js - JavaScript for US States Visited Map

class USStatesMap {
	constructor(containerId, statesData) {
		this.containerId = containerId;
		this.statesData = statesData;
		this.container = document.getElementById(containerId);
	}

	initialize() {
		// Fetch and insert the SVG map
		fetch("us-map.svg")
			.then((response) => response.text())
			.then((svgData) => {
				this.container.innerHTML = svgData;
				this.applyVisitedStates();
				this.setupControls();
			})
			.catch((error) => {
				console.error("Error loading the SVG file:", error);
				this.container.innerHTML =
					"<p>Error loading map. Please try again later.</p>";
			});
	}

	applyVisitedStates() {
		this.statesData.forEach((stateData) => {
			const stateElement = document.getElementById(stateData.state);
			if (stateElement) {
				stateElement.setAttribute("fill", "#3498db"); // Default visited color
			}
		});
	}

	setupControls() {
		document
			.getElementById("visitedColor")
			.addEventListener("input", (event) => {
				const newColor = event.target.value;
				this.statesData.forEach((stateData) => {
					const stateElement = document.getElementById(
						stateData.state
					);
					if (stateElement) {
						stateElement.setAttribute("fill", newColor);
					}
				});
			});
	}
}

// Load and initialize the map when the DOM is ready
document.addEventListener("DOMContentLoaded", () => {
	fetch("states-visited.json")
		.then((response) => response.json())
		.then((statesData) => {
			const map = new USStatesMap("map-container", statesData);
			map.initialize();
		})
		.catch((error) => console.error("Error loading states data:", error));
});
