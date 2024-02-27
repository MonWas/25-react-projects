import './App.css';
import Accordion from './components/accordion';
import RandomColor from './components/random-color-generator';
import StarRating from './components/star-rating';

function App() {
  return (
    <div className='App'>
      {/*Accordion*/}
      <Accordion/>
      {/*Random Color Generator*/}
      <RandomColor/>
      {/*Star Rating*/}
      <StarRating noOfStars={10}/>
    </div>
  );
}

export default App;
