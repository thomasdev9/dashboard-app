import React from 'react';
import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';
import MenuComponent from './menu-component';
import Sidebar from './sidebar';
import Topbar from './topbar';

const { Content } = Layout;

const Menu = <MenuComponent />;

function LayoutComponent() {
  return (
    <Layout>
      <Sidebar menu={Menu} />
      <Layout className="main-container">
        <Topbar />
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}

export default LayoutComponent;
