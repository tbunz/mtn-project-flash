import './WelcomeSlide.css';
import {useRef} from "react";
import gsap from "gsap"; 
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

function WelcomeSlide( props ) {
    //Initial animations
    useGSAP(() => {
        gsap.from(".title", {
            opacity: 0,
            duration: 2,
            ease: "power1.in"
        })
        gsap.from(".title", {
            left: "35%",
            duration: 2,
            ease: "power1.out"
        })
        gsap.from(".search", {
            opacity: 0,
            duration: 2,
            ease: "power1.in"
        });
        gsap.from(".search", {
            top: "80%",
            duration: 2,
            ease: "power1.out"
        })
      },
    );

    return (
    <div className="welcome slide">
        <div className="title">
        {props.content}
        </div>
        <input className="search" placeholder="Search for climbs">
        </input>
    </div>
    );
  }
  
  export default WelcomeSlide;