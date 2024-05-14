import "./SearchDisplay.css"
import Header from "../Header/Header"
import ClimbDisplay from "./ClimbDisplay"

import { useRef, useState } from "react";
import gsap from "gsap"; 
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

function SearchDisplay( props ) {  
    const [display_Active, setDisplay_Active] = useState(false);
    const [active_Climb, setActive_Climb] = useState("")

    // On Event animations
    const container = useRef();
    const { contextSafe } = useGSAP({scope: container}); 
    
    const hoverHandlerIn = contextSafe((e) => {
    gsap.to("#" + e.target.id, {fontSize: "2.2vw", duration: 0.5});});
    const hoverHandlerOut = contextSafe((e) => {
    gsap.to("#" + e.target.id, {fontSize: "2vw",duration: 0.5});});
    
    // Clicking an individual climb handler
    const onClickHandler = contextSafe((e) => {
        gsap.to(".oneClimb", {opacity: "0.3", duration: "0.25"});
       
        //render in climb viewer, whether or not content has been fetched for individual climb
        setDisplay_Active(true)
        setActive_Climb((e.target.id).slice(1))
      });

    // handler for back button
    function backHandler() {
      let pf = ["welcome"]
      let cont = "Mtn Proj Flash"
        props.updateState({
            pageFamily: pf, 
            content: cont
            })
    }

    let data = props.content["climbs"]

    return(
      <>
        <div className="display" ref={container}>
          <Header link={false} onClickHandler={backHandler}/>
            {
                (data.length !== 0) ? 
                  data.map((climb, index) =>
                      
                      <div key={"climb" + String(index)} className="oneClimb" id={"c" + String(((climb["link"]).split("/"))[4])} 
                            onMouseEnter={hoverHandlerIn} onMouseLeave={hoverHandlerOut} onClick={onClickHandler}>
                      
                      {climb["name"] + " | " + climb["location"] + " | " + climb["rating"]}
                      
                      </div>
                    
                ) 
                :<><div className="empty">No relevant climbs found. Additionally, the server on which I am hosting the API is short on resources aka money, which can cause a false empty response.</div> <div className="empty"> Try again. Consider making your query more specific to encourage the API to respond smaller. Or wait a few seconds</div></>
            }    
        </div>
        <ClimbDisplay content={props.content} display_Active={display_Active} active_Climb={active_Climb}/>
      </>
    );
}

export default SearchDisplay