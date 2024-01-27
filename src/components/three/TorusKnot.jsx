import { useFrame, useLoader } from '@react-three/fiber'
import React, { useRef } from 'react'
import * as THREE from 'three'
import MatCap1 from '../../images/matcap.jpeg' 

const TorusKnot = () => {

    const [ TexttureMap ] = useLoader(THREE.TextureLoader, [MatCap1])
    const torus = useRef(null)

    useFrame(state => {
        const elapsetime = state.clock.getElapsedTime()
        // torus.current.rotation.x = elapsetime * 0.01
        torus.current.rotation.y = elapsetime * 0.1
        
    })

  return (
   <>
    <group 
    scale={0.18}
    ref={torus}
    position={[0, -0.5, 0]}
    >
    <mesh
    rotation={[Math.PI / -3, 0, 0]}
    position={[4.2, 0, 0]}
    >
        <torusGeometry 
        args={[8.55, 4, 14, 69]}
        />
        <meshMatcapMaterial
        matcap={TexttureMap}
        wireframe 
        />
    </mesh>

    <mesh
    rotation={[Math.PI / 4, 0, 0]}
    position={[-4.2, 0, 0]}
    >
        <torusGeometry 
        args={[8.55, 4, 14, 69]}
        />
        <meshMatcapMaterial
        matcap={TexttureMap}
        wireframe 
        />
    </mesh>

    </group>
   </>
  )
}

export default TorusKnot
