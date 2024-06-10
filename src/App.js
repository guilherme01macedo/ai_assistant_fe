import './App.scss';
import Header from './components/Header';
import Form from './components/Form';
import useSearch from './hooks/useSearch';

function App() {
  const { data, loading, error } = useSearch(`teste`);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className='app__container'>
      <div className='app__content'>
        <Header />
        <Form />
      </div>
    </div>
  );
}

export default App;
