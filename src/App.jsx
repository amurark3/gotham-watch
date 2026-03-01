/**
 * Main application component that sets up routing and the primary layout.
 * Provides the overall structure of the Gotham Watch application including the Header, Content area with Routes, and the Footer.
 */
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Layout } from 'antd';
import Header from './screens/Header';
import USCountyChoroplethMap from './screens/HeatMap';
import CrimeVisulization from './screens/CrimeVisualization';
import Resources from './screens/Resources';
import Homepage from './screens/Homepage';

const { Content, Footer } = Layout;

/**
 * App Component
 * @returns {JSX.Element} The rendered React application
 */
const App = () => {
  return (
    <div className="App">
      <Layout>
        {/* Navigation header for the application */}
        <Header />
        
        {/* Main content area containing route-based views */}
        <Content
          style={{
            padding: '20px',
            background: '#282e3c',
            minHeight: 'calc(100vh - 134px)',
          }}
        >
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route exact path="/heatMap" element={<USCountyChoroplethMap />} />
            <Route
              exact
              path="/crimeVisualization"
              element={<CrimeVisulization />}
            />
            <Route exact path="/resources" element={<Resources />} />
          </Routes>
        </Content>

        {/* Global Footer */}
        <Footer
          style={{
            textAlign: 'center',
            background: '#242424',
            color: '#bf4250',
          }}
        >
          Gotham Watch © {new Date().getFullYear()}
        </Footer>
      </Layout>
    </div>
  );
};

export default App;
