import React from 'react';
import { Layout, Divider } from 'antd';
import styled from 'styled-components';

const LogoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`;

const Logo = styled.a`
  width: 40px;
  height: 40px;
`;

const BrandName = styled.span`
  font-size: 14px;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.88);
  margin-left: 10px;
`;

const { Sider } = Layout;

function Sidebar({ menu }) {
  return (
    <Sider className="sidebar" breakpoint={'lg'} theme="light" collapsedWidth={0} trigger={null} width={250}>
      <LogoWrapper>
        <Logo>
          <img />
        </Logo>
        <BrandName>Elegent</BrandName>
      </LogoWrapper>
      <Divider />
      {menu}
    </Sider>
  );
}

export default Sidebar;
