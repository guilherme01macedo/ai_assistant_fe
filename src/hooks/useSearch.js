import { useState, useEffect } from 'react';
import { ROUTE_URL } from '../utils/constants';
import axios from 'axios';

const useSearch = (search) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!search) return;

    const fetchData = async () => {
      setLoading(true);
      try {

        const options = {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          params: {searchValue: search}
        };
      
      
        const response = await axios.get(ROUTE_URL, options);
        console.log("here", response);
        if (response.status!==200) {
          throw new Error(`Error: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [search]);

  return { data, loading, error };
};

export default useSearch;
