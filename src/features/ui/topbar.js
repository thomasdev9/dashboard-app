import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Layout, Space, Avatar, Drawer } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import MenuComponent from '../ui/menu-component';
import { fetchSettings } from '../../redux/slices/settings';

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

const UserInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  @media only screen and (max-width: 850px) {
    display: none;
  }
`;

const Username = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: rgb(17, 25, 39);
  line-height: 22px;
`;

const UserEmail = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: rgb(108, 115, 127);
  line-height: 22px;
`;

const { Header } = Layout;

function Topbar() {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const image = useSelector((state) => state.settings.data.image);
  const email = useSelector((state) => state.settings.data.email);
  const username = useSelector((state) => state.settings.data.username);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    dispatch(fetchSettings());
  }, []);

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
          <Avatar src={image} />
          <UserInfoWrapper>
            <Username>{username}</Username>
            <UserEmail>{email}</UserEmail>
          </UserInfoWrapper>
        </Space>
      </HeaderWrapper>
    </Header>
  );
}

export default Topbar;
