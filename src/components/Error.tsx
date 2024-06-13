import React from 'react';
import styled from 'styled-components';

const ErrorWrapper = styled.div`
  text-align: center;
  padding: 20px;
  color: red;
`;

const Error: React.FC = () => {
  return <ErrorWrapper>Something went wrong. Please try again later.</ErrorWrapper>;
};

export default Error;
