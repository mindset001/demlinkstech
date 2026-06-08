import { memo } from 'react'
import TorusKnot from './three/TorusKnot'
import BoxParticle from './three/BoxParticle'
import { Html } from '@react-three/drei'
import Button from './utils/Button'
import { useFrame } from '@react-three/fiber'

const Home = () => {


    useFrame(state => {
        state.camera.position.x = state.mouse.x * 0.5
        state.camera.position.y = state.mouse.y  * 0.5
        // htmlRef.current.position.x = state.mouse.x * 0.9
        // htmlRef.current.position.y = state.mouse.y * 0.9
        state.camera.updateMatrixWorld()
    })

  return (
    <group>
      <TorusKnot />
      <BoxParticle />
      <Html
        fullscreen
        className='pointer-events-none'
       >
        <div id="home" className="h-full flex flex-col items-center justify-center pt-20">
          <p className='text-center text-[20px] md:text-[28px] font-[400]'>we are a</p>
          <h1 className='text-center text-[42px] md:text-[80px] font-[600] leading-tight md:leading-[93px] px-4'>
            Creative digital{' '}
            <span className="bg-gradient-to-r from-[#F68A44] to-[#EC500B] bg-clip-text text-transparent">agency</span>
            <br className="hidden md:block" />{' '}for mindful brands.
          </h1>
          <p className='text-[16px] md:text-[18px] text-center font-light text-[#fff] px-6 mt-4'>
            Demlinks Technologies advocates for smart living, security consciousness, and helps{' '}
            <br className="hidden md:block" />individuals and companies drive their business to the peak of success.
          </p>
          <div className="text-center mt-5">
            <Button text="Schedule a call" size={'large'} handleClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}/>
          </div>
        </div>
      </Html>
    </group>
  )
}


export default memo(Home)
