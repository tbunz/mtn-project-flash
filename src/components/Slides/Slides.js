import './Slides.css';
import WelcomeSlide from '../WelcomeSlide/WelcomeSlide'

//Individual slide that makes up a page of slides
// props.pageFamily decides between X Slide styles to display: welcome, X X 
function Slides( props ) {
  if (props.pageFamily == "welcome"){
    return (
        <WelcomeSlide/>
    );
  }
}

export default Slides;