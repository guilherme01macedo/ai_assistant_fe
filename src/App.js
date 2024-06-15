import './App.scss';
import Header from './components/Header';
import Form from './components/Form';
import useSearch from './hooks/useSearch';
import { CircularProgress } from '@mui/material';
import Message from './components/Message';
import ErrorContainer from './components/ErrorContainer';

function App() {
  const { data, loading, error, getSearchResult } = useSearch();
  const reducedLayout = data || loading

  return (
    <div className='app__container'>
      <div className='app__content'>
      <div className={reducedLayout?'app__reduced-content':'app__header-container'}>
      <Header reducedLayout={reducedLayout}/>
        <Form disabled={loading} getSearchResult={getSearchResult} />
      </div>
        {loading && <CircularProgress classes={{root: 'app__loading-container'}}/>}
        {data && <Message data={data}/>}
        {error && <ErrorContainer />}
      </div>
    </div>
  );
}

export default App;
