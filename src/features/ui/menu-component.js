import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import {
  HomeOutlined,
  UserOutlined,
  ShoppingOutlined,
  SkinOutlined,
  PlusCircleOutlined,
  SettingOutlined,
} from '@ant-design/icons';

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
    <Link to="/products">Products</Link>,
    'products',
    <SkinOutlined style={{ fontSize: '16px', fontWeight: '400' }} />,
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
    <Link to="/add-product">Add Product</Link>,
    'add-product',
    <PlusCircleOutlined style={{ fontSize: '16px', fontWeight: '400' }} />,
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
