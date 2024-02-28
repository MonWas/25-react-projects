import './App.css';
import Accordion from './components/accordion';
import ImageSlider from './components/image-slider';
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
      {/*Image Slider*/}
      <ImageSlider url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}/>
    </div>
  );
}

export default App;
