/**
 * CrimeVisualization Component
 * Allows users to filter crime statistics by Year, State, and County,
 * and renders a React Google Charts pie chart showing the proportion of crime categories.
 */
import { Button, Select } from 'antd';
import React, { useEffect, useState } from 'react';
import { Chart } from 'react-google-charts';

const CrimeVisulization = () => {
  // Option lists for dropdowns
  const [stateList, setStateList] = useState([]);
  const [countyList, setCountyList] = useState([]);
  const yearList = [
    { label: '2014', value: '2014' },
    { label: '2013', value: '2013' },
    { label: '2012', value: '2012' },
    { label: '2011', value: '2011' },
  ];

  // Currently selected values
  const [stateSelected, setStateSelected] = useState('');
  const [countySelected, setCountySelected] = useState('');
  const [yearSelected, setYearSelected] = useState('');

  // Data for the pie chart
  const [crimeData, setCrimeData] = useState([]);

  /**
   * Updates selected state and triggers county fetch.
   */
  const handleStateSelect = (e) => {
    setStateSelected(e);
    getCountyData(e); // Fetch counties for the newly selected state
  };

  const handleCountySelect = (e) => {
    setCountySelected(e);
  };

  /**
   * Fetches county options associated with a specific state code.
   * Calls the backend API `use-case-2`.
   * @param {string} stateCode - Selected state identifier
   */
  const getCountyData = async (stateCode) => {
    try {
      const response = await fetch('http://localhost:5000/api/use-case-2', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ selectedState: stateCode }),
      });

      if (response.ok) {
        const data = await response.json();
        setCountyList(data.results);
      } else {
        console.error("Failed to fetch counties");
      }
    } catch (error) {
      console.error("Error fetching counties:", error);
    }
  };

  const handleYearSelect = (e) => {
    setYearSelected(e);
  };

  /**
   * Fetches category frequency data for the Pie chart based on filters.
   * Calls the backend API `use-case-3`.
   */
  const handleFilterClick = async () => {
    if (!stateSelected || !countySelected || !yearSelected) return; // Prevent empty queries

    try {
      const response = await fetch('http://localhost:5000/api/use-case-3', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          selectedState: stateSelected,
          selectedCounty: countySelected,
          selectedYear: yearSelected,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setCrimeData(data.results);
      } else {
        console.error("Failed to fetch crime data");
      }
    } catch (error) {
      console.error("Error fetching crime data:", error);
    }
  };

  // Google Charts styling options
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

  /**
   * Initialization: Fetches the primary list of states to populate the first dropdown.
   * Calls the backend API `use-case-1`.
   */
  const fetchStateData = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/use-case-1', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({}),
      });

      if (response.ok) {
        const data = await response.json();
        setStateList(data);
      } else {
        console.error("Failed to fetch initial state options");
      }
    } catch (error) {
      console.error("Error fetching states:", error);
    }
  };

  // Load state list on mount
  useEffect(() => {
    fetchStateData();
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
            style={{ width: 250 }}
            placeholder="Select Year"
            onSelect={handleYearSelect}
            options={yearList}
          />
        </div>
        <div>
          <Select
            style={{ width: 250 }}
            placeholder="Select State"
            onSelect={handleStateSelect}
            options={stateList}
          />
        </div>
        <div>
          <Select
            style={{ width: 250 }}
            placeholder="Select county"
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

      {/* Container for conditionally rendered pie chart */}
      {crimeData.length > 0 && (
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
      )}
    </div>
  );
};

export default CrimeVisulization;
