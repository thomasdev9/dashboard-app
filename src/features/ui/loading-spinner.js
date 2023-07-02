import React from 'react';
import styled from 'styled-components';
import PuffLoader from 'react-spinners/PuffLoader';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50vh;
`;

const Message = styled.h6`
  font-size: 14px;
  color: rgb(28, 37, 54);
  font-weight: 500;
  padding-top: 20px;
`;

function LoadingSpinner({ message }) {
  return (
    <Container>
      <PuffLoader color="rgb(28, 37, 54)" size={100} aria-label="Loading Spinner" data-testid="loader" />
      <Message>{message}</Message>
    </Container>
  );
}

export default LoadingSpinner;
