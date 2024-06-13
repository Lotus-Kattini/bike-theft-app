import React, { useState, useEffect } from 'react';
import { fetchBikeThefts } from '../services/api';
import BikeList from '../components/BikeList';
import Pagination from '../components/Pagination';
import Filters from '../components/Filters';
import Loading from '../components/Loading';
import Error from '../components/Error';
import Empty from '../components/Empty';
import { BikeTheft } from '../utils/types';
import styled from 'styled-components';

const HomeWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const TotalCases = styled.p`
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 20px;
`;

const Home: React.FC = () => {
  const [bikes, setBikes] = useState<BikeTheft[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState({ title: '', startDate: '', endDate: '' });



  useEffect(() => {
    const loadBikes = async () => {
      setLoading(true);
      setError(false);
      try {
        const response = await fetchBikeThefts(page, 10, filters.title, filters.startDate, filters.endDate);
        setBikes(response.data.bikes);
        setTotal(response.data.bikes.length * 10);
        console.log(response)
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    loadBikes();
  }, [page, filters]);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const handleFilterChange = (title: string, startDate: string, endDate: string) => {
    setFilters({ title, startDate, endDate });
    setPage(1); 
  };

  return (
    <HomeWrapper>
      <Filters onFilter={handleFilterChange} />
      {loading && <Loading />}
      {error && <Error />}
      {!loading && !error && bikes.length === 0 && <Empty />}
      {!loading && !error && (
        <>
          <TotalCases>Total Bike Theft Cases: {total}</TotalCases>
          <BikeList bikes={bikes} />
        </>
      )}
      <Pagination currentPage={page} totalPages={Math.ceil(total / 10)} onPageChange={handlePageChange} />
    </HomeWrapper>
  );
};

export default Home;
