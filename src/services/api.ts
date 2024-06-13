import axios from 'axios';
import { useState } from 'react';

const API_URL = 'https://bikeindex.org/api/v3';

export const fetchBikeThefts = (page: number, perPage: number, title: string, startDate: string, endDate: string) => {
  return axios.get(`${API_URL}/search`, {
    params: {
      location: 'Munich',
      distance: 100,
      stolenness: 'proximity',
      page,
      per_page: perPage,
      query: title,
      occurred_after: startDate,
      occurred_before: endDate,
      
    }
  })
};


