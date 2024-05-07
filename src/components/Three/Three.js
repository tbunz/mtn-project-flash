import './Three.css'
import React from 'react'
import { Canvas, useLoader, useFrame } from '@react-three/fiber'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";



// All Three.js rendered 3d things
function Tube( props ) {

    // ATC tube style model load
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