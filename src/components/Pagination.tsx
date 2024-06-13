import React from 'react';
import styled from 'styled-components';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
`;

const PageButton = styled.button<{ isCurrent?: boolean }>`
  background-color: ${({ isCurrent }) => (isCurrent ? '#007bff' : '#fff')};
  color: ${({ isCurrent }) => (isCurrent ? '#fff' : '#007bff')};
  border: 1px solid #007bff;
  border-radius: 5px;
  margin: 0 5px;
  padding: 10px 15px;
  cursor: pointer;
  &:disabled {
    background-color: #e0e0e0;
    color: #a0a0a0;
    cursor: not-allowed;
  }
`;

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 0) {
    return null;
  }

  const maxPagesToShow = 10;
  const currentPageGroup = Math.floor((currentPage - 1) / maxPagesToShow);
  const startPage = currentPageGroup * maxPagesToShow + 1;
  const endPage = Math.min(startPage + maxPagesToShow - 1, totalPages);

  const handleNextSet = () => {
    if (endPage < totalPages) {
      onPageChange(endPage + 1);
    }
  };

  const handlePrevSet = () => {
    if (startPage > 1) {
      onPageChange(startPage - maxPagesToShow);
    }
  };

  return (
    <PaginationWrapper>
      <PageButton onClick={handlePrevSet} disabled={startPage === 1}>
        Previous
      </PageButton>
      {Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index).map(page => (
        <PageButton
          key={page}
          onClick={() => onPageChange(page)}
          isCurrent={page === currentPage}
          disabled={page === currentPage}
        >
          {page}
        </PageButton>
      ))}
      <PageButton onClick={handleNextSet} disabled={endPage === totalPages}>
        Next
      </PageButton>
    </PaginationWrapper>
  );
};

export default Pagination;
