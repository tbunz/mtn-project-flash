import './Three.css'

import React from 'react'
import gsap from 'gsap'
import { Canvas, useLoader, useFrame } from '@react-three/fiber'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js'
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader.js";

// All Three.js rendered 3d things
function Tube( props ) {

    // ATC tube style model load and constant movements/animations
    function Scene() {
        const materials = useLoader(MTLLoader, "belay_devicev3.mtl");
        const tubeObj = useLoader(OBJLoader, "belay_devicev3.obj", (loader) => {
            materials.preload();
            loader.setMaterials(materials);
        });
        
        const TubeRef = React.useRef();

        //Constant movement rotations
        useFrame(({ clock }) => {
            TubeRef.current.rotation.y = clock.getElapsedTime() * 0.7
            TubeRef.current.position.y = (Math.sin(clock.getElapsedTime()) * 0.6) + 1
        })

    // Animation Handlers on Event 
    let tl = gsap.timeline()
    // If loading from Welcome to Display
    if (props.pageFamily.includes("load")){
        tl.to(".canvas-container", { right: "0%", duration: 1})
    }
    // If not loading, then going back to Welcome
    else if (!(props.pageFamily.includes("search-display"))) {
        tl.to(".canvas-container", { right: "25%", duration: 1})
    }
        
    
        return(
        <>
        <primitive object={tubeObj} ref={TubeRef} scale={5} rotation={[0, 0, -1.1]}/>
        </>
                )
      }


    return(
        <div className='canvas-container'>
            <Canvas>
                <Scene/>
                <ambientLight intensity={Math.PI / 2} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
                <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />       
            </Canvas>
        </div>
    );

}
export default Tube;
