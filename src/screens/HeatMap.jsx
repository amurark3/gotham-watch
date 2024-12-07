import React, { useEffect, useState } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import usCounties from '../data/county.topo.json';
import { scaleQuantize } from 'd3-scale';
import { Button, Select } from 'antd';

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

  const handleFilterClick = async () => {
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
        //set error
      }
    } catch (error) {
      // setError('Error: ' + error.message);
    } finally {
      // setLoading(false);
    }
  };

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
