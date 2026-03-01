/**
 * Header Component
 * Provides the top navigation bar for the application using Ant Design's Menu.
 * Handles route changes and syncing the selected menu item with the current URL.
 */
import React, { useEffect, useState } from 'react';
import { Menu } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState('1'); // Default home selection

  // Sync selected menu key when the route changes (e.g., via browser navigation)
  useEffect(() => {
    const path = location.pathname;
    if (path === '/') {
      setSelectedItem('1');
    } else {
      setSelectedItem(routeKeyMapping(path));
    }
  }, [location.pathname]);

  /**
   * Maps navigation pathnames to ant-d Menu item keys, and vice versa.
   * @param {string} prop - Either a URL path or a Menu item key
   * @returns {string} The corresponding key or path
   */
  const routeKeyMapping = (prop) => {
    switch (prop) {
      case '1': return '/';
      case '2': return 'heatMap';
      case '3': return 'crimeVisualization';
      case '4': return 'resources';
      case '/': return '1';
      case '/heatMap': return '2';
      case '/crimeVisualization': return '3';
      case '/resources': return '4';
      default: return '/';
    }
  };

  // Define menu items for the Ant Design Header
  const items = [
    { key: '1', label: 'Home' },
    { key: '2', label: 'Heat Map' },
    { key: '3', label: 'Crime Visualization' },
    { key: '4', label: 'Resources' },
  ];

  /**
   * Handles user click on a menu item.
   * Updates local state and navigates to the selected route.
   */
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
