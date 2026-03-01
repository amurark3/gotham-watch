# Gotham Watch: Frontend Client

The frontend of Gotham Watch is a fast, modern web application built with **React and Vite**. It provides an interactive dashboard allowing users to filter crime statistics using dropdowns to dynamically render geospatial heatmaps and animated pie charts.

## Technologies Used

- **React & Vite**: Core UI framework bound with the lightning-fast Vite bundler.
- **Ant Design (`antd`)**: A comprehensive UI design language used heavily for Layouts, Buttons, Select inputs, and Cards.
- **React Router (`react-router-dom`)**: Client-side routing to navigate seamlessly among Home, Heat Map, Crime Visualization, and Resources.
- **Data Visualization**:
  - `react-simple-maps` & `d3-scale`: Used to project county-level FIPS codes onto an `AlbersUsa` projection drawing dynamic choropleth heat maps.
  - `react-google-charts`: Used to render detailed multi-slice pie charts representing different categories of crimes.

## Project Structure

- `src/App.jsx & index.jsx`: Component roots mapping out routes and mounting context.
- `src/screens/`: Contains the primary pages shown corresponding to distinct URLs.
- `src/data/`: Houses static assets like `county.topo.json` which maps FIPS codes to US county coordinate topology strings for the heat map.

## Setup and Running

To run the project locally, ensure you have **Node.js** and **npm** installed.

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Start the Development Server:**
   ```bash
   npm run dev
   ```

This will launch exactly like a standard Vite server, typically at `http://localhost:5173/`. Ensure the python Flask backend is concurrently running on port `5000`, as the client makes direct POST calls to `http://localhost:5000/api/use-case-*`.