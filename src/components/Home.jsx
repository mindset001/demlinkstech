import React, { memo } from 'react'
import TorusKnot from './three/TorusKnot'
import BoxParticle from './three/BoxParticle'
import { Html } from '@react-three/drei'
import Icon from '../images/illustration.svg'
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
        className='pt-10 pointer-events-none'
       >
        <div>
        <div className='flex text-[54px] md:text-[80px] items-center justify-center gap-5'>
            <h1 className='text-center'>We Create,</h1>
            <img src={Icon} alt='icon-arrow' className='hidden md:flex'/>
        </div>
        <div className='flex text-[54px] md:text-[80px] items-center justify-center gap-5'>
            <h1 className="">We</h1>
            <img className='hidden md:flex rotate-180 ' src={Icon} alt='icon-arrow'/>
            <h1 className="bg-gradient-to-r from-[#F68A44] to-[#EC500B] bg-clip-text text-transparent"><span>Build.</span></h1>
        </div>
        <p className='md:text-[18px] text-[24px] text-center font-light text-[#C2C2C2]'>
        Demlinks Technologies advocates for smart living, security consciousness, and help <br/> individual and company to drive business to peak of success.
        </p>
        <div className="text-center mt-5">
            <Button text="Schedule a call" size={'large'}/>
        </div>
        </div>
      </Html>
    </group>
  )
}


export default memo(Home)
