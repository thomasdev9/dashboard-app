import React, { useState } from 'react';
import styled from 'styled-components';
import { Layout, Space, Avatar, Drawer } from 'antd';
import { MenuOutlined, UserOutlined } from '@ant-design/icons';
import MenuComponent from '../ui/menu-component';

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: 100%;

  @media only screen and (max-width: 992px) {
    justify-content: space-between;
  }
`;

const Logo = styled.h6`
  font-size: 18px;
  font-weight: 500;
  color: rgb(17, 25, 39);

  @media only screen and (min-width: 992px) {
    display: none;
  }
`;

const MenuButton = styled.button`
  width: 30px;
  height: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;

  @media only screen and (min-width: 992px) {
    display: none;
  }
`;

const DrawerStyle = {
  background: 'rgb(28, 37, 54)',
};

const { Header } = Layout;

function Topbar() {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <Header>
      <HeaderWrapper>
        <MenuButton onClick={showDrawer}>
          <MenuOutlined />
        </MenuButton>
        <Drawer open={open} onClose={onClose} width={280} placement="left" style={DrawerStyle}>
          <MenuComponent />
        </Drawer>
        <Logo>Elegent</Logo>
        <Space size={16} wrap>
          <Avatar icon={<UserOutlined />} />
        </Space>
      </HeaderWrapper>
    </Header>
  );
}

export default Topbar;
