import { Button, Select } from 'antd';
import React, { useEffect, useState } from 'react';
import { Chart } from 'react-google-charts';

const CrimeVisulization = () => {
  const [stateList, setStateList] = useState([]);
  const [countyList, setCountyList] = useState([]);
  const yearList = [
    {
      label: '2014',
      value: '2014',
    },
    {
      label: '2013',
      value: '2013',
    },
    {
      label: '2012',
      value: '2012',
    },
    {
      label: '2011',
      value: '2011',
    },
  ];
  const [stateSelected, setStateSelected] = useState('');
  const [countySelected, setCountySelected] = useState('');
  const [yearSelected, setYearSelected] = useState('');
  const [crimeData, setCrimeData] = useState([]);

  const handleStateSelect = (e) => {
    setStateSelected(e);
    getCountyData(e);
  };

  const handleCountySelect = (e) => {
    setCountySelected(e);
  };

  const getCountyData = async (stateCode) => {
    try {
      const response = await fetch('http://localhost:5000/api/use-case-2', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ selectedState: stateCode }), // Send the form data as JSON
      });

      if (response.ok) {
        const data = await response.json();
        setCountyList(data.results);
      } else {
        //set error
      }
    } catch (error) {
      // setError('Error : ' + error.message);
    } finally {
      // setLoading(false);
    }
  };

  const handleYearSelect = (e) => {
    setYearSelected(e);
  };

  const handleFilterClick = async () => {
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
        //set error
      }
    } catch (error) {
      // setError('Error: ' + error.message);
    } finally {
      // setLoading(false);
    }
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
        //set error
      }
    } catch (error) {
      // setError('Error form: ' + error.message);
    } finally {
      // setLoading(false);
    }
  };

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
            style={{
              width: 250,
            }}
            onSelect={handleYearSelect}
            options={yearList}
          />
        </div>
        <div>
          <Select
            style={{
              width: 250,
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
      {crimeData.length && (
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
