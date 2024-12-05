import React, { useEffect, useState } from 'react';
import { Menu } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState('1');

  useEffect(() => {
    const path = location.pathname;
    if (path === '/') {
      setSelectedItem('1');
    } else {
      setSelectedItem(routeKeyMapping(path));
    }
  }, [location.pathname]);

  const routeKeyMapping = (prop) => {
    switch (prop) {
      case '1':
        return '/';
      case '2':
        return 'heatMap';
      case '3':
        return 'crimeVisualization';
      case '4':
        return 'resources';
      case '/':
        return '1';
      case '/heatMap':
        return '2';
      case '/crimeVisualization':
        return '3';
      case '/resources':
        return '4';
      default:
        return '/';
    }
  };

  const items = [
    {
      key: '1',
      label: 'Home',
    },
    {
      key: '2',
      label: 'Heat Map',
    },
    {
      key: '3',
      label: 'Crime Visualization',
    },
    {
      key: '4',
      label: 'Resources',
    },
  ];

  const onClick = (e) => {
    setSelectedItem(e.key);
    navigate(routeKeyMapping(e.key));
  };

  return (
    <>
      <Menu
        theme="dark"
        mode="horizontal"
        selectedKeys={[selectedItem]}
        onClick={onClick}
        items={items}
        style={{ flex: 1, minWidth: 0, background: '#242424' }}
      />
    </>
  );
};

export default Header;
