/**
 * USCountyChoroplethMap Component
 * Renders an interactive heat map of US counties based on aggregate crime statistics.
 * Uses `react-simple-maps` for geography and `d3-scale` for color coding.
 */
import React, { useEffect, useState } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import usCounties from '../data/county.topo.json';
import { scaleQuantize } from 'd3-scale';
import { Button, Select } from 'antd';

// Color scale mapping crime frequency (0-100 placeholder) to shades of red
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

  /**
   * Fetches the county-level aggregated crime frequencies for the selected years.
   * Calls the backend API `use-case-4`.
   */
  const handleFilterClick = async () => {
    if (!yearSelected || yearSelected.length === 0) return;
    try {
      const response = await fetch('http://localhost:5000/api/use-case-4', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ years: yearSelected }),
      });

      if (response.ok) {
        const data = await response.json();
        setCrimeData([...data]);
      } else {
        console.error("Failed to fetch heatmap data");
      }
    } catch (error) {
      console.error("Error fetching map statistics:", error);
    }
  };

  // Fetch initial data on component mount
  useEffect(() => {
    handleFilterClick();
  }, []);

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
          {/* Renders the map topology and maps data IDs (FIPS codes) to geographic regions */}
          <Geographies geography={usCounties}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const countyData = crimeData.find(
                  (county) => county.id === geo.id
                );
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    // Determine fill color by comparing FIPS code with returned crime stats
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
