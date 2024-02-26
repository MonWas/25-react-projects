import './App.css';
import Accordion from './components/accordion';
import RandomColor from './components/random-color-generator';

function App() {
  return (
    <div className='App'>
      {/*Accordion*/}
      <Accordion/>
      {/*Random Color Generator*/}
      <RandomColor/>
    </div>
  );
}

export default App;
