import { Button, Select } from 'antd';
import React, { useState } from 'react';
import { Chart } from 'react-google-charts';

const CrimeVisulization = () => {
  const [stateList, setStateList] = useState([
    { value: 'Arizona', label: 'Arizona' },
  ]);
  const [countyList, setCountyList] = useState([
    { value: '04013', label: 'Maricopa County' },
  ]);
  const [stateSelected, setStateSelected] = useState('');
  const [countySelected, setCountySelected] = useState('');
  const [crimeData, setCrimeData] = useState([
    ['Crime Name', 'Number of crimes'],
    ['Murder', 10],
    ['Rape', 10],
    ['Robbery', 100],
    ['Aggravated Assault', 120],
    ['Fraud', 170],
    ['Weapons', 80],
    ['DUI', 840],
  ]);

  const handleStateSelect = (e) => {
    setStateSelected(e);
  };

  const handleCountySelect = (e) => {
    setCountySelected(e);
  };

  const handleFilterClick = () => {
    //Filter API
  };

  const options = {
    pieHole: 0.4,
    is3D: false,
    backgroundColor: 'transparent',
    legend: {
      textStyle: {
        color: '#bf4250',
        fontSize: 20,
      },
    },
  };

  return (
    <div>
      <div
        style={{
          textAlign: 'center',
          fontSize: '34px',
          color: '#bf4250',
          marginBottom: '20px',
        }}
      >
        <b>Crime Visualization</b>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        <div>
          <Select
            style={{
              width: 150,
            }}
            onSelect={handleStateSelect}
            options={stateList}
          />
        </div>
        <div>
          <Select
            style={{
              width: 250,
            }}
            onSelect={handleCountySelect}
            options={countyList}
          />
        </div>
        <div>
          <Button color="default" onClick={handleFilterClick}>
            Show results
          </Button>
        </div>
      </div>
      <div style={{ marginTop: '20px' }}>
        <Chart
          chartType="PieChart"
          height="700px"
          data={crimeData}
          options={options}
          style={{
            background: '#282e3c',
          }}
        />
      </div>
    </div>
  );
};

export default CrimeVisulization;
