import "./SearchDisplay.css"
import Header from "../Header/Header"
import ClimbDisplay from "./ClimbDisplay"

import { useState, useRef, useEffect } from "react";
import gsap from "gsap"; 
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

function SearchDisplay( props ) {  
  const [climb_info, setClimb_Info] = useState({});
  const [c_display, setC_Display] = useState({});
  const [display_Active, setDisplay_Active] = useState(false);

    useEffect(() => {
      // API IS SLOW ... get info for each climb main page right when this page loads
      // Pass up to this component usestate as available for later reference
      let data = props.content["climbs"]
    
      for (let climb in data){
        let id = ((data[climb]["link"]).split("/"))[4]
        let name = data[climb]["name"]
        let climbs = {}
        climbs[id] = name
        
        fetch("https://climbingapi.com/climb_info/" + encodeURIComponent(JSON.stringify(climbs)))
            .then((response) =>
              response.json()
            )
            .then((c_resp) => {
              let key = c_resp[0]["uid"]
              setClimb_Info(climb_info => ({ ...climb_info, [key]: c_resp}));
            })
          }
    }, []);

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
       
        //render in climb viewer
        setDisplay_Active(true)

        // Check if climb from our state has its corresponding fetch for its main page returned
       // If it has returned, then put it into active 
        let uid = props["content"]["climbs"][parseInt(e.target.id.replace(/[^0-9]/g, ''))]["link"].split("/")[4] 
        
        if (uid in climb_info){
          setC_Display(climb_info[uid][0])
        }
        else {
          setC_Display({})
        }
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
                      
                      <div key={"climb" + String(index)} className="oneClimb" id={"climb" + String(index)} 
                            onMouseEnter={hoverHandlerIn} onMouseLeave={hoverHandlerOut} onClick={onClickHandler}>
                      
                      {climb["name"] + " | " + climb["location"] + " | " + climb["rating"]}
                      
                      </div>
                    
                ) 
                :<><div className="empty">No relevant climbs found. Additionally, the server on which I am hosting the API is short on resources aka money, which can cause a false empty response.</div> <div className="empty"> Try again. Consider making your query more specific to encourage the API to respond smaller</div></>
            }    
        </div>
        {display_Active && <ClimbDisplay c_display={c_display}/>}
      </>
    );
}

export default SearchDisplay