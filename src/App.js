import './App.css';
import Accordion from './components/accordion';
import ImageSlider from './components/image-slider';
import RandomColorGenerator from './components/random-color-generator';
import StarRating from './components/star-rating';
import LoadMoreButton from './components/load-more-button';

function App() {
  return (
    <div className='App'>
      {/*Accordion*/}
      <Accordion/>
      {/*Random Color Generator*/}
      <RandomColorGenerator/>
      {/*Star Rating*/}
      <StarRating noOfStars={10}/>
      {/*Image Slider*/}
      <ImageSlider url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}/>
      {/*Load More Button*/}
      <LoadMoreButton/>
    </div>
  );
}

export default App;
