import React, { Suspense } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { TextureLoader } from 'three';
import ThreeFlower from './ThreeFlower';
import TorusStem from './TorusStem';
import ProcLeaf2 from './ProcLeaf2';
import ABLeaf from './ABLeaf';
import StrangeAttractor from './StrangeAttractor';
import ABLeafShade from './ABLeafShade';
import ProcLeaf from './ProcLeaf';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';

import stemObjPath from './textures/Flower.vox.obj';
import stemMtlPath from './textures/Flower.vox.mtl';
import bloomObjPath from './textures/bloom.vox.obj';
import bloomMtlPath from './textures/bloom.vox.mtl';
import potCol from './textures/Wall_Plaster_001_basecolor.jpg';
import potDisp from './textures/Wall_Plaster_001_height.png';
import potNorm from './textures/Wall_Plaster_001_normal.jpg';
import potOcc from './textures/Wall_Plaster_001_ambientOcclusion.jpg';
import potRough from './textures/Wall_Plaster_001_roughness.jpg';
import windowBackground from './textures/window-background.jpg';
import { useRef, useState } from 'react';
import scene1 from './assets/flower.gltf'
import Sliders from './Sliders'
import './App.css'

function GLTFModel() {
  const gltf = useLoader(GLTFLoader, scene1);

  return (
    <group>
      <primitive object={gltf.scene} scale={0.1} position={[0,5,0.5]}/>
    </group>
  );
}

function FlowerModel({ position }) {
  const materials = useLoader(MTLLoader, stemMtlPath);
  materials.preload();
  const obj = useLoader(OBJLoader, stemObjPath, (loader) => {
    loader.setMaterials(materials);
  });
  return <primitive object={obj} position={position} />;
}

function BloomModel({ position }) {
  const bloomMaterials = useLoader(MTLLoader, bloomMtlPath);
  bloomMaterials.preload();
  const bloom = useLoader(OBJLoader, bloomObjPath, (loader) => {
    loader.setMaterials(bloomMaterials);
  });
  return <primitive object={bloom} position={position} />;
}

function App() {
  const [leafDimensions, setLeafDimensions] = useState({d1: 9, d2: 18, d3: 0, d4: 9, d5: 0, d6: 0, d7: 0, d8: 0, d9: 0, d10: 0, d11: 0, d12: 0, d13: 2})
  const [numStored, setNumStored] = useState(1)
  const [storedFlowers, setStoredFlowers] = useState([])


function storeFlower() {
  setStoredFlowers((prev) => {
    return [...prev, {[`flower${numStored}`]: leafDimensions}]
  })
  setNumStored((prev) => prev += 1)
}

  function handleChange(event) {
    setLeafDimensions(prev => {
      console.log('prev', prev)
        const updatedFormData = {
            ...prev,
            [event.target.id]: event.target.value
        };
        return updatedFormData
    });
}

console.log('storedFlowers', storedFlowers)

  return (
    <main>
      <div style={{ height: '768px', width: '80vw', background: 'aliceblue' }}>
        <Canvas>
          <ABLeaf leafDimensions={leafDimensions}></ABLeaf>
          {/* <StrangeAttractor leafDimensions={leafDimensions}></StrangeAttractor> */}
        </Canvas>
      </div>
      <div className="slide-container">
        <label htmlFor="d1">QuadCurve 1: {leafDimensions.d1}
          <input onChange={event => handleChange(event)} type="range" step=".1" min="-50" max="50" value={leafDimensions.d1} className="slider" id="d1" />
        </label>
        <label htmlFor="d2">QuadCurve 2: {leafDimensions.d2}
            <input onChange={event => handleChange(event)} type="range" step=".1" min="-50" max="50" value={leafDimensions.d2} className="slider" id="d2" />
        </label>
        <label htmlFor="d3">QuadCurve 3: {leafDimensions.d3}
            <input onChange={event => handleChange(event)} type="range" step=".1" min="-50" max="50" value={leafDimensions.d3} className="slider" id="d3" />
        </label>
        <label htmlFor="d4">QuadCurve 4: {leafDimensions.d4}
            <input onChange={event => handleChange(event)} type="range" step=".1" min="-50" max="50" value={leafDimensions.d4} className="slider" id="d4" />
        </label>
        <label htmlFor="d5">Noise Scale: {leafDimensions.d5}
            <input onChange={event => handleChange(event)} type="range" step="0.01" min="-10" max="10" value={leafDimensions.d5} className="slider" id="d5" />
        </label>
        <label htmlFor="d6">Noise X: {leafDimensions.d6}
            <input onChange={event => handleChange(event)} type="range" min="-50" max="50" value={leafDimensions.d6} className="slider" id="d6" />
        </label>
        <label htmlFor="d7">Noise Y: {leafDimensions.d7}
            <input onChange={event => handleChange(event)} type="range" min="-50" max="50" value={leafDimensions.d7} className="slider" id="d7" />
        </label>
        <label htmlFor="d8">Noise Z: {leafDimensions.d8}
            <input onChange={event => handleChange(event)} type="range" min="-50" max="50" value={leafDimensions.d8} className="slider" id="d8" />
        </label>
        <label htmlFor="d9">xRotInc: {leafDimensions.d9}
            <input onChange={event => handleChange(event)} type="range" step="0.001" min="0" max="1" value={leafDimensions.d9} className="slider" id="d9" />
        </label>
        <label htmlFor="d10">yRotInc: {leafDimensions.d10}
            <input onChange={event => handleChange(event)} type="range" step="0.001" min="0" max="1" value={leafDimensions.d10} className="slider" id="d10" />
        </label>
        <label htmlFor="d11">zRotInc: {leafDimensions.d11}
            <input onChange={event => handleChange(event)} type="range" step="0.001" min="0" max="1" value={leafDimensions.d11} className="slider" id="d11" />
        </label>
        <label htmlFor="d12">Depth: {leafDimensions.d12}
            <input onChange={event => handleChange(event)} type="range" step="0.05" min="0.01" max="5" value={leafDimensions.d12} className="slider" id="d12" />
        </label>
        <label htmlFor="d13">numLeaves: {leafDimensions.d13}
            <input onChange={event => handleChange(event)} type="range" step="1" min="2" max="100" value={leafDimensions.d13} className="slider" id="d13" />
        </label>
        <button onClick={storeFlower}>sTOREfLOWER</button>
      </div>
    </main>
  );
}

export default App;
