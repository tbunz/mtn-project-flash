import './WelcomeSlide.css';
import Header from '../Header/Header'
import { MountAnimationWelcome } from '../gAnimations/gAnimations'

function WelcomeSlide( props ) {

    MountAnimationWelcome()     
    // Handler for search input
    async function handleEnter (e)  {
        if (e.key === 'Enter' && e.target.value) { 
            
            let pf = props.pageFamily
            let cont = props.content
            // pageFamily state become welcome + loading (mount Loading, animate out welcome)
            pf.push("load")
            props.updateState({
                pageFamily: pf, 
                 content: cont
                })

            fetch("https://climbingapi.com/search/" + e.target.value)
                .then((response) => {
                    return response.json()
                })
                .then((data) => {
                    // When data received, unmount Load + Welcome, render results
                    pf = ["search-display"]
                    props.updateState({
                        pageFamily: pf, 
                        content: data
                        })
                    console.log("searched")
                })
                .catch(function(error) {
                    console.log(error);
                  });
           
        }
    }
    
    return (
    <>
        <div className="title">
            {props.content}
        </div>

        <input onKeyDown={handleEnter} className="search" placeholder="Search Climbs">
        </input>
    </>
    );
  
}
  
  export default WelcomeSlide;