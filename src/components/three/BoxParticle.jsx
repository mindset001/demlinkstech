/* eslint-disable react/no-unknown-property */
import { Float } from '@react-three/drei'
import { useMemo } from 'react'

const BoxParticle = () => {
  const particles = useMemo(() =>
    Array.from({ length: 100 }, (_, index) => {
      const angle = Math.random() * Math.PI * 2
      const radius = 3 + Math.random() * 5
      return {
        index,
        rotationIntensity: Math.random() * 7,
        position: [Math.cos(angle) * radius, Math.sin(angle) * radius, 0],
      }
    }), []
  )

  return (
    <>
      {particles.map(({ index, rotationIntensity, position }) => (
        <Float key={index} rotationIntensity={rotationIntensity}>
          <mesh scale={0.3} position={position}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="#F68A44" emissive="#EC500B" emissiveIntensity={0.4} />
          </mesh>
        </Float>
      ))}
      <directionalLight intensity={1} />
      <ambientLight intensity={0.5} />
    </>
  )
}

export default BoxParticle
