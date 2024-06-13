import React from 'react';
import styled from 'styled-components';

const LoadingWrapper = styled.div`
  text-align: center;
  padding: 20px;
`;

const Loading: React.FC = () => {
  return <LoadingWrapper>Loading...</LoadingWrapper>;
};

export default Loading;
