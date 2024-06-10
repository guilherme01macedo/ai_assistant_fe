import './App.scss';
import Header from './components/Header';
import Form from './components/Form';

function App() {
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
