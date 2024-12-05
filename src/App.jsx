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

const App = () => {
  return (
    <div className="App">
      <Layout>
        <Header />
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

        {/* Footer */}
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
