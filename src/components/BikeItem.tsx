import React from 'react';
import { BikeTheft } from '../utils/types';
import styled from 'styled-components';

interface BikeItemProps {
  bike: BikeTheft;
}

const BikeCard = styled.div`
  display: flex;
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  align-items: center;
  margin-bottom: 20px;
`;

const BikeImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 15px;
`;

const BikeDetails = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const BikeTitle = styled.h3`
  margin: 0 0 10px 0;
  font-size: 1.5rem;
  color: #333;
`;

const BikeDescription = styled.p`
  margin: 0 0 10px 0;
  color: #666;
`;

const BikeDate = styled.p`
  margin: 0 0 5px 0;
  font-size: 0.9rem;
  color: #999;
`;

const BikeLocation = styled.p`
  margin: 0;
  font-size: 0.9rem;
  color: #999;
`;

const BikeItem: React.FC<BikeItemProps> = ({ bike }) => (
  <BikeCard>
    <BikeImage src={bike.thumb} alt={bike.title} />
    <BikeDetails>
      <BikeTitle>{bike.title}</BikeTitle>
      <BikeDate>Date Stolen: {new Date(bike.date_stolen * 1000).toLocaleDateString()}</BikeDate>
      {bike.description && <BikeDescription>{bike.description}</BikeDescription>}
      <BikeLocation>Location: {bike.stolen_location}</BikeLocation>
      <a href={bike.url} target="_blank" rel="noopener noreferrer">
        View Details
      </a>
    </BikeDetails>
  </BikeCard>
);

export default BikeItem;
