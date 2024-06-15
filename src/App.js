import './App.scss';
import Header from './components/Header';
import Form from './components/Form';
import useSearch from './hooks/useSearch';
import { CircularProgress } from '@mui/material';
import Message from './components/Message';
import ErrorContainer from './components/ErrorContainer';

function App() {
  const { data, loading, error, getSearchResult, resetData } = useSearch();

  return (
    <div className='app__container'>
      <div className='app__content'>
        <Header reducedLayout={data || loading}/>
        <Form disabled={loading} getSearchResult={getSearchResult} resetData={resetData} data={data}/>
        {loading && <CircularProgress classes={{root: 'app__loading-container'}}/>}
        {data && <Message data={data}/>}
        {error && <ErrorContainer />}
      </div>
    </div>
  );
}

export default App;
