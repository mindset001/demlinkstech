import { Routes, Route } from 'react-router-dom'
import About from './components/About'
import Feedback from './components/Feedback'
import Navbar from './components/Navbar'
import Services from './components/Services'
import Works from './components/Works'
import { Slides } from './data/db.json'
import { Work } from './data/db.json'
import { Courses } from './data/db.json'
import './css/App.css'
import Footer from './components/Footer'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import Home from './components/Home'
import * as THREE from 'three'
import Careers from './pages/Careers'

const HomePage = () => (
  <>
    <Canvas id='webgl'
      onCreated={(state) => {
        state.gl.setClearColor(new THREE.Color('#121212'))
      }}
    >
      <Suspense fallback={null}>
        <Home />
      </Suspense>
    </Canvas>
    <div className='md:px-6 lg:px-12'>
      <About />
      <Services />
      <Works works={Work} />
      <Feedback data={Slides} />
    </div>
    <Footer />
  </>
)

function App() {
  return (
    <div className="App relative">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/careers" element={<Careers courses={Courses} />} />
      </Routes>
    </div>
  )
}

export default App
