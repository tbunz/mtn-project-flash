import './WelcomeSlide.css';
import {useRef} from "react";
import gsap from "gsap"; 
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

//Individual slide contained in SlideContainer
// pageFamily decides between X Slide styles to display: X X X 
function Slide( props ) {
  const title = useRef();

  useGSAP(() => {
      gsap.to(title.current, { x: "250", duration: 3 });
    },
  );

  if (props.pageFamily == "welcomeSlide"){
    return (
      <div className="welcomeSlide">
        <div className="welcomeTitle" ref={title}>
        {props.content}
        </div>
      </div>
    );
  }
}

export default Slide;