import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import { HomeOutlined, UserOutlined, ShoppingOutlined, LineChartOutlined, SettingOutlined } from '@ant-design/icons';

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem(
    <Link to="/">Home</Link>,
    'home',
    <HomeOutlined style={{ fontSize: '16px', fontWeight: '400' }} />,
    null,
    null
  ),
  getItem(
    <Link to="/customers">Customers</Link>,
    'customers',
    <UserOutlined style={{ fontSize: '16px', fontWeight: '400' }} />,
    null,
    null
  ),
  getItem(
    <Link to="/orders">Orders</Link>,
    'orders',
    <ShoppingOutlined style={{ fontSize: '16px', fontWeight: '400' }} />,
    null,
    null
  ),
  getItem(
    <Link to="/analytics">Analytics</Link>,
    'analytics',
    <LineChartOutlined style={{ fontSize: '16px', fontWeight: '400' }} />,
    null,
    null
  ),
  getItem(
    <Link to="/settings">Settings</Link>,
    'settings',
    <SettingOutlined style={{ fontSize: '16px', fontWeight: '400' }} />,
    null,
    null
  ),
];

function MenuComponent() {
  return <Menu mode="inline" items={items} className="sidebar-menu" />;
}

export default MenuComponent;
