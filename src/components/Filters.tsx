import React, { useState } from 'react';
import styled from 'styled-components';

interface FiltersProps {
  onFilter: (title: string, startDate: string, endDate: string) => void;
}

const FiltersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const FilterInput = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const FilterButton = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border-radius: 5px;
  &:hover {
    background-color: #0056b3;
  }
`;

const Filters: React.FC<FiltersProps> = ({ onFilter }) => {
  const [title, setTitle] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleFilter = () => {
    onFilter(title, startDate, endDate);
  };

  return (
    <FiltersWrapper>
      <FilterInput type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Case title" />
      <FilterInput type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
      <FilterInput type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
      <FilterButton onClick={handleFilter}>Filter</FilterButton>
    </FiltersWrapper>
  );
};

export default Filters;
