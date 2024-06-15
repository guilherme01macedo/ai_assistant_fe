import { useState } from 'react';
import { ROUTE_URL } from '../utils/constants';
import axios from 'axios';
import { trackEvent } from '../utils/analytics';

const useSearch = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);


  const getSearchResult = (searchValue) => {
    trackEvent('search', 'User searched', searchValue);
    if (!searchValue) return;
    setLoading(true)
    setData(null)

    const fetchData = async () => {
      setLoading(true);
      try {

        const options = {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          params: { searchValue: searchValue }
        };
        const response = await axios.get(ROUTE_URL, options);
        if (response.status !== 200) {
          throw new Error(`Error: ${response.status}`);
        }
        setData(response);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  };


  return { data, loading, error, getSearchResult };
};

export default useSearch;
