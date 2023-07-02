import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { Card } from 'antd';

const CardBody = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
`;

const IconWrapper = styled.div`
  width: 60px;
  height: 60px;
  font-size: 21px;
  line-height: 60px;
  border-radius: 100%;
  color: : rgb(11, 183, 175);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  ${(props) =>
    props.color &&
    css`
      background-color: ${props.color};
    `}
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const InfoHeader = styled.h6`
  color: rgb(108, 115, 127);
  font-weight: 600;
  font-size: 14px;
`;

const InfoValue = styled.h4`
  color: rgb(17, 25, 39);
  font-weight: 600;
  font-size: 24px;
`;

const InfoLink = styled.p`
  color: rgb(17, 25, 39);
  font-size: 14px;
  font-weight: 600;
`;

function CreateCard({ icon, color, header, value, linkText, path }) {
  return (
    <Card style={{ marginRight: '15px' }}>
      <CardBody>
        <IconWrapper color={color}>{icon}</IconWrapper>
        <InfoWrapper>
          <InfoHeader>{header}</InfoHeader>
          <InfoValue>{value}</InfoValue>
          <Link to={path}>
            <InfoLink>{linkText}</InfoLink>
          </Link>
        </InfoWrapper>
      </CardBody>
    </Card>
  );
}

export default CreateCard;
