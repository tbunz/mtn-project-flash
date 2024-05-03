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

    // Handler for search input
    async function handleEnter (e)  {
        if (e.key === 'Enter' && e.target.value) { 
            fetch("http://64.23.204.175/search/" + e.target.value)
                .then((response) => {
                    return response.json()
                })
                .then(() =>{

                })
                .then((data) => {
                    console.log(data)
                })
                .catch(function(error) {
                    console.log(error);
                  });
           
        }
    }
    
    return (
    <div className="welcome slide">

        <div className="title">
            Mtn Proj Flash
        </div>

        <input onKeyDown={handleEnter} className="search" placeholder="Search Climbs">
        </input>


    </div>
    );
  
}
  
  export default WelcomeSlide;