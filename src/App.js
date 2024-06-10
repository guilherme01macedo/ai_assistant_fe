import './App.scss';
import Header from './components/Header';
import Input from './components/Form/Input';

function App() {
  return (
    <div className='app__container'>
      <div className='app__content'>
        <Header />
        <Input />
      </div>
    </div>
  );
}

export default App;
