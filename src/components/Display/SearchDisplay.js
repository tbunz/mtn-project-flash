import "./SearchDisplay.css"
import Header from "../Header/Header"

import { useRef } from "react";
import gsap from "gsap"; 
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

function SearchDisplay( props ) {    
    // On Event animations
    const container = useRef();
    const { contextSafe } = useGSAP({scope: container}); 
    
    const hoverHandlerIn = contextSafe((e) => {
    gsap.to("#" + e.target.id, {width: "80%", fontSize: "3vw", 
      duration: 0.5});
    });
    const hoverHandlerOut = contextSafe((e) => {
    gsap.to("#" + e.target.id, {width: "70%", fontSize: "2vw",
      duration: 0.5});
    });
    const onClickHandler = contextSafe((e) => {
        gsap.to(".oneClimb", {opacity: "0.3", duration: "0.25"});
        let pf = props.pageFamily
        let cont = props.content
       
        // If individiual climb NOT already being viewed, then render ClimbDisplay
        if (!(pf.includes("climb-display"))){
            pf.push("climb-display")
            props.updateState({
                pageFamily: pf, 
                content: cont
                })
            }
    });

    // State handler for back button
    function backHandler() {
      let pf = ["welcome"]
      let cont = "Mtn Proj Flash"
        props.updateState({
            pageFamily: pf, 
            content: cont
            })
    }


    let data = props.content["climbs"]
    //  Uncomment below for testing input
    //  let data = fake_testing_input

    return(
        <div className="display" ref={container}>
          <Header link={false} onClickHandler={backHandler}/>
            {
                data.map((climb, index) =>
                    <div key={"climb" + String(index)} className="oneClimb" id={"climb" + String(index)} 
                          onMouseEnter={hoverHandlerIn} onMouseLeave={hoverHandlerOut} onClick={onClickHandler}>
                    
                    {climb["name"] + " | " + climb["location"] + " | " + climb["rating"]}
                
                    </div>
                ) 
            }    
        </div>
    );
}

const fake_testing_input = [
                  {
                      "link": "htpp-mtn-proj",
                      "location": "utah > lcc > bss",
                      "name": "coffisfsfsfsffsn",
                      "rating": "5.10"
                  },
                  {
                    "link": "htppmtnpro12124324j",
                    "location": "colorado > boulder s",
                    "name": "the eggggggggggg",
                    "rating": "5.16"
                  },
                  {
                    "link": "hto121243eafews24j",
                    "location": "utah > boulder s",
                    "name": "the really sadsdfsdfsreally hard crackg",
                    "rating": "5.4"
                  },
                  {
                    "link": "htppmtnpro12sadfsaf1243eafews24j",
                    "location": "utah > boulsafasfdder s",
                    "name": "the really rsadfsaeally hard crackg",
                    "rating": "5.4"
                  },
                  {
                    "link": "haf1243eafews24j",
                    "location": "utah > boulsfsfddsfsdfdsfsafasfdder s",
                    "name": "the really rsadfssdfsdfddsaeally hard crackg",
                    "rating": "5.4sdfsdfdd"
                  },
                  {
                    "link": "htpp-1mtn-proj",
                    "location": "utah > lcc > bss",
                    "name": "coffisfsfsfsffsn",
                    "rating": "5.10"
                },
                {
                  "link": "htppmtnpro212124324j",
                  "location": "colorado > boulder s",
                  "name": "the eggggggggggg",
                  "rating": "5.16"
                },
                {
                  "link": "hto121243e6afews24j",
                  "location": "utah >6 boulder s",
                  "name": "the really sadsdfsdfsreally hard crackg",
                  "rating": "5.4"
                },
                {
                  "link": "htppmtnp4ro12sadfsaf1243eafews24j",
                  "location": "utah > boulsafasfdder s",
                  "name": "the really rsadfsaeally hard crackg",
                  "rating": "5.4"
                },
                {
                  "link": "haf12433eafews24j",
                  "location": "utah > boulsfsfddsfsdfdsfsafasfdder s",
                  "name": "the really rsadfssdfsdfddsaeally hard crackg",
                  "rating": "5.4sdfsdfdd"
                }

    ]
export default SearchDisplay