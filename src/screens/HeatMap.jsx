import React, { useState } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import usCounties from '../data/county.topo.json';
import { scaleQuantize } from 'd3-scale';
import { Button, Select } from 'antd';

// Mock data
const data = [
  { id: '01001', value: 30 },
  { id: '01003', value: 70 },
  { id: '01005', value: 50 },
  { id: '04013', value: 500 },
];

const colorScale = scaleQuantize()
  .domain([0, 100])
  .range(['#ffbaba', '#ff7b7b', '#ff5252', '#ff0000', '#a70000']);

const USCountyChoroplethMap = () => {
  const [crimeData, setCrimeData] = useState([]);
  const [yearSelected, setYearSelected] = useState([
    '2014',
    '2013',
    '2012',
    '2011',
  ]);

  const yearOptions = [
    { value: '2014' },
    { value: '2013' },
    { value: '2012' },
    { value: '2011' },
  ];

  const handleYearClick = (e) => {
    setYearSelected(e);
  };

  const handleFilterClick = () => {};

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
        <b>US Heatmap for Crime</b>
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
            mode="multiple"
            style={{
              width: '300px',
              minWidth: '300px',
              background: '#242424',
            }}
            placeholder="Please select"
            value={yearSelected}
            onChange={handleYearClick}
            options={yearOptions}
          />
        </div>
        <div>
          <Button color="default" onClick={handleFilterClick}>
            Show results
          </Button>
        </div>
      </div>
      <div>
        <ComposableMap projection="geoAlbersUsa">
          <Geographies geography={usCounties}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const countyData = data.find((county) => county.id === geo.id);
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={countyData ? colorScale(countyData.value) : '#EEE'}
                    style={{
                      default: { outline: 'none' },
                      hover: { outline: 'none', fill: '#ccc' },
                      pressed: { outline: 'none' },
                    }}
                  />
                );
              })
            }
          </Geographies>
        </ComposableMap>
      </div>
    </div>
  );
};

export default USCountyChoroplethMap;
