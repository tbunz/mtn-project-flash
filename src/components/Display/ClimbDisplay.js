import "./ClimbDisplay.css"
import { useState, useEffect } from "react"


function ClimbDisplay( props ) {   
    const [climb_info, setClimb_Info] = useState({});
  
    useEffect(() => {
      // API IS SLOW ... get info for each climb main page right when this page loads
      let data = props.content["climbs"]
      let count = 0
      for (let climb in data){
        count += 1
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

    return(
    <>
      {props.display_Active && 
      
        <div id="climbDisplay">
      
          {(props.active_Climb in climb_info) ? 
            <>
            <div className="cdInfo"> 
              {climb_info[props.active_Climb][0]["name"]}
            </div>
            <div className="cdInfo"> 
              {climb_info[props.active_Climb][0]["grade"]}
            </div>
            <div className="cdInfo"> 
              {climb_info[props.active_Climb][0]["type"]}
            </div>
            <div className="cdInfo"> 
              {climb_info[props.active_Climb][0]["fa"]}
            </div>
            <div className="cdInfo"> 
              {climb_info[props.active_Climb][0]["description"]}
            </div>
            <div className="cdInfo"> 
              {climb_info[props.active_Climb][0]["protection"]}
            </div>
            <div className="cdInfo"> 
              {climb_info[props.active_Climb][0]["under_construction"]}
            </div>
            </>

           :<div className="cdInfo">Loading</div>}
        
        </div>}
    
    </>
    )
}
export default ClimbDisplay