import React from 'react';

const Homepage = () => {
  return (
    <div>
      <div
        style={{
          marginTop: '200px',
          fontSize: '54px',
          color: '#bf4250',
          textAlign: 'center',
        }}
      >
        <b>GOTHAM WATCH</b>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div
          style={{
            textAlign: 'center',
            fontSize: '18px',
            marginTop: '50px',
            width: '700px',
            color: '#d3d4cf',
          }}
        >
          GothamWatch offers an interactive dashboard with various
          visualizations, such as crime heatmaps and customizable reports,
          allowing users to identify patterns and trends in different crime
          areas. This application illustrates how semantic web engineering
          concepts can enhance data interoperability, streamline crime analysis
          processes, and strengthen evidence-based public safety management
          strategies.
        </div>
      </div>
    </div>
  );
};

export default Homepage;
