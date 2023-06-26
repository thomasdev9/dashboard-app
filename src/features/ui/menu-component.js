import React from 'react';
import { Menu } from 'antd';
import {
  HomeOutlined,
  UserOutlined,
  ShoppingOutlined,
  LineChartOutlined,
  SettingOutlined,
  SkinOutlined,
} from '@ant-design-icons';

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
  getItem(<a to="/">Αρχική</a>, 'home', <HomeOutlined style={{ fontSize: '14px', fontWeight: '400' }} />, null, null),
  getItem(
    <a to="/customers">Πελάτες</a>,
    'customers',
    <UserOutlined style={{ fontSize: '14px', fontWeight: '400' }} />,
    null,
    null
  ),
  getItem(
    <a to="/orders">Παραγγελίες</a>,
    'orders',
    <ShoppingOutlined style={{ fontSize: '14px', fontWeight: '400' }} />,
    null,
    null
  ),
  getItem(
    <a to="/products">Προϊόντα</a>,
    'products',
    <SkinOutlined style={{ fontSize: '14px', fontWeight: '400' }} />,
    null,
    null
  ),
  getItem(
    <a to="/analytics">Αναλυτικά</a>,
    'analytics',
    <LineChartOutlined style={{ fontSize: '14px', fontWeight: '400' }} />,
    null,
    null
  ),
  getItem(
    <a to="/settings">Ρυθμίσεις</a>,
    'settings',
    <SettingOutlined style={{ fontSize: '14px', fontWeight: '400' }} />,
    null,
    null
  ),
];

function MenuComponent() {
  return <Menu mode="inline" items={items} className="sidebar-menu" />;
}

export default MenuComponent;
