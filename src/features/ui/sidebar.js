import React from 'react';
import { Layout, Divider } from 'antd';
import styled from 'styled-components';

const LogoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`;

const Logo = styled.a`
  width: 40px;
  height: 40px;
`;

const BrandWrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.04);
  padding: 12px;
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 80%;
  border-radius: 10px;
`;

const BrandName = styled.h6`
  font-size: 16px;
  font-weight: 500;
  color: rgb(255, 255, 255);
`;

const BrandText = styled.p`
  color: rgb(157, 164, 174);
  font-weight: 400;
  font-size: 14px;
`;

const { Sider } = Layout;

function Sidebar({ menu }) {
  return (
    <Sider className="sidebar" breakpoint={'lg'} theme="light" collapsedWidth={0} trigger={null} width={250}>
      <LogoWrapper>
        <Logo>
          <img alt="logo" />
        </Logo>
        <BrandWrapper>
          <BrandName>Elegent</BrandName>
          <BrandText>Dashboard</BrandText>
        </BrandWrapper>
      </LogoWrapper>
      <Divider />
      {menu}
    </Sider>
  );
}

export default Sidebar;
