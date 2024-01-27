import About from './components/About'
import Feedback from './components/Feedback'
import Navbar from './components/Navbar'
import Services from './components/Services'
import Works from './components/Works'
import {Slides} from './data/db.json'
import {Work} from './data/db.json'
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './css/App.css'
import Footer from './components/Footer'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import Home from './components/Home'
import * as THREE from 'three'
// eslint-disable-next-line no-unused-vars
import { OrbitControls } from '@react-three/drei'

function App() {

  return (
    <div className="App relative">
      <div className='md:px-6 lg:px-12 relative'>
      <Navbar/>
      </div>
      <Canvas id='webgl' 
      onCreated={(state) => {
        state.gl.setClearColor(new THREE.Color('#121212'))
      }}
      //  gl={}
      // scene={}
      >
         <Suspense fallback={null}>
             <Home />
         </Suspense>
         {/* <OrbitControls /> */}
      </Canvas>
      <div className='md:px-6 lg:px-12'>
        <About/>
        <Services/>
        <Works works={Work}/>
        <Feedback data={Slides}/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
