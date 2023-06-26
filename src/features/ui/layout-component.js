import React from 'react';
import { Layout } from 'antd';
import MenuComponent from './menu-component';
import Sidebar from './sidebar';

const { Content } = Layout;

const Menu = <MenuComponent />;

function LayoutComponent() {
  return (
    <Layout>
      <Sidebar menu={Menu} />
      <Layout>
        <Topbar />
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}

export default LayoutComponent;
