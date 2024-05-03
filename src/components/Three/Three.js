import './Three.css'
import React, { useRef} from 'react'
import { Canvas, useLoader } from '@react-three/fiber'

// All Three.js rendered 3d things

export default function ThreeWelcome( props ) {

    function Cam() {
        
        return (
            <>
            <mesh >
              
            </mesh> 
            </>
        )
      }


    return(
        <div className="canvas-container slide">
            <Canvas>
                <ambientLight intensity={Math.PI / 2} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
                <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
                <Cam />         
            </Canvas>
        </div>
    );

}
