import React from 'react';
import styled from 'styled-components';

const EmptyWrapper = styled.div`
  text-align: center;
  padding: 20px;
`;

const Empty: React.FC = () => {
  return <EmptyWrapper>No results found.</EmptyWrapper>;
};

export default Empty;
