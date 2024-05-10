import "./ClimbDisplay.css"
import { MountAnimationClimbDisplay } from "../gAnimations/gAnimations"

function ClimbDisplay( props ) {
    MountAnimationClimbDisplay()
    let display = props.c_display
    return(
      <>{
        !(Object.keys(display).length === 0) ? 
        <div id="climbDisplay">
            <div id="climbName" className="cdInfo">
            {display.name}
            </div>
            {display.grade && <div id="climbFacts" className="cdInfo">
            {display.grade} | {display.type}
            </div>}
            {display.fa && <div id="climbFA" className="cdInfo">
            FA: {display.fa}
            </div>}
            <div id="climbDescription" className="cdInfo">
            {display.description}
            </div>
            <div id="climbPro" className="cdInfo">
            {display.protection}
            </div>
            {(!display.fa) && <div>Some elements were not found... under construction</div>}
        </div>
        : <div id="climbDisplay">loading</div>
      } </>
    )
}
export default ClimbDisplay