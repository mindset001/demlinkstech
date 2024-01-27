import { Float } from '@react-three/drei'
import React from 'react'

const BoxParticle = () => {
  return (
    <>
    {
        Array.apply(null, Array(100)).map((_, index) => {

            const angle = Math.random() * Math.PI * 2
            const radius = 3 + Math.random() * 5

            return (
                <Float
                key={index}
                rotationIntensity={Math.random() * 7}
                >
                    <mesh 
                scale={ 0.3}
                position={[
                    Math.cos(angle) * radius, 
                     Math.sin(angle) * radius,
                     0
                ]}
                >
                    <boxGeometry args={[1, 1, 1]}/>
                    <meshStandardMaterial />
                </mesh>
                </Float>
            )
        })
    }
    <directionalLight intensity={0.08} />
    <ambientLight intensity={0.01}/>
    </>
  )
}

export default BoxParticle
