import './WelcomeSlide.css';
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
///////////////////////////////////////////////////

    function mpdata() {
        fetch("https://www.mountainproject.com/")
        .then((response) => {
            console.log(response.json())
            return response.json();
        })
        .then((data) => {
            let authors = data;
          })
      }

    return (
    <div className="welcome slide">
        <div className="title">
            {mpdata()}
        </div>
        <input className="search" placeholder="Search for climbs">
        </input>
    </div>
    );
  }
  
  export default WelcomeSlide;