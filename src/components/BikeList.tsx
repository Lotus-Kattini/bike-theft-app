import React from 'react';
import { BikeTheft } from '../utils/types';
import styled from 'styled-components';
import BikeItem from './BikeItem';

interface BikeListProps {
  bikes: BikeTheft[];
}

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
`;

const BikeList: React.FC<BikeListProps> = ({ bikes }) => (
  <ListWrapper>
    {bikes.map((bike) => (
      <BikeItem key={bike.id} bike={bike} />
    ))}
  </ListWrapper>
);

export default BikeList;
