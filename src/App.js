import './App.scss';
import Header from './components/Header';
import Form from './components/Form';
import useSearch from './hooks/useSearch';
import { Skeleton } from '@mui/material';

function App() {
  const { data, loading, error, getSearchResult } = useSearch();

  return (
    <div className='app__container'>
      <div className='app__content'>
        <Header />
        <Form disabled={loading} getSearchResult={getSearchResult}/>
        {loading && <Skeleton variant="rounded" height={118} />}
        {error && <p>error...</p>}
      </div>
    </div>
  );
}

export default App;
