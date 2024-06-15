import { useState, useEffect } from 'react';
import { ROUTE_URL } from '../utils/constants';
import axios from 'axios';

const useSearch = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchValue, setSearchValue] = useState(false);

  useEffect(() => {
    if (!searchValue) return;

    const fetchData = async () => {
      setLoading(true);
      try {

        const options = {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          params: {searchValue: searchValue}
        };
      
      
        const response = await axios.get(ROUTE_URL, options);

        if (response.status!==200) {
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
  }, [searchValue]);

  const getSearchResult = (searchValue) => {
    setSearchValue(searchValue)
    setData(null)
  };

  const resetData = () => {
    setData(null)
  };

  return { data, loading, error, getSearchResult, resetData};
};

export default useSearch;
