# Shortest Path Visualizer

## Introduction

Shortest Path Visualizer is a web application designed to visually demonstrate the workings of pathfinding algorithms. This application specifically showcases Dijkstra's algorithm, a popular method for finding the shortest path between nodes in a graph.

## Features

- **Interactive Grid**: A visual grid where nodes can be added, and walls can be created to simulate barriers.
- **Pathfinding Visualization**: Watch how Dijkstra's algorithm explores nodes and finds the shortest path.
- **Wall Creation**: Click and drag to create walls, simulating obstacles for the pathfinding algorithm.

## Technology

This project is built using:

- **React**: A JavaScript library for building user interfaces.
- **JavaScript**: For implementing the pathfinding algorithms and managing the application state.

## Core Components

- **Dijkstra's Algorithm**: `dijkstra.js` - Implementation of the Dijkstra's algorithm.
- **Pathfinding Visualizer**: `PathFindingVisualizer.js` - The main component that renders the grid and visualizes the algorithm.
- **Node Component**: `Node.js` - Represents each cell in the grid.

## Installation and Setup
- Clone the repository.
- Navigate to the client directory.
- Install dependencies: npm install.
- Run the application: npm start.
- Open http://localhost:3000 to view it in the browser.

## Usage
- Click to add or remove walls.
- Drag to move the start and end nodes.
- Click the "Visualize" button to start the pathfinding animation.
## Contributing
- Contributions to the Shortest Path Visualizer are welcome. Please read the contributing guidelines before making a pull request.
## License
- This project is licensed under the MIT License - see the LICENSE file for details.
