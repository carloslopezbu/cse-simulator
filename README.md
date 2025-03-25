# CSE Simulator

CSE Simulator is a web-based application designed to simulate circuit components and their interactions. Users can place components on a map, configure their properties, and visualize their behavior.

## Features

- Interactive map for placing circuit components.
- Configurable component properties (e.g., resistance, voltage).
- Real-time updates to component values.

## Technologies Used

- **Frontend**: React.js
- **Styling**: Tailwind CSS
- **Build Tool**: Vite

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/cse-simulator.git
   cd cse-simulator
   ```

2. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:5173`.

## Project Structure

```
cse-simulator/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Simulator.jsx
│   │   │   ├── Select.jsx
│   │   │   └── Map.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   └── package.json
└── README.md
```

## Usage

1. Select a component type using the `Select` menu.
2. Click on the map to place the selected component.
3. Adjust component values directly on the map.

## License

This project is licensed under the MIT License.