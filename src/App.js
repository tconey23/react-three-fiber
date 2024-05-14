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
  const [leafDimensions, setLeafDimensions] = useState({d1: 9, d2: 18, d3: 0, d4: 9, d5: 0, d6: 0, d7: 0, d8: 0, d9: 0, d10: 0, d11: 0, d12: 0})
  // const canvasRef = useRef()
  // const [colorMap, displacementMap, normalMap, roughnessMap, aoMap] = useLoader(TextureLoader, [
  //   potCol,
  //   potDisp,
  //   potNorm,
  //   potRough,
  //   potOcc,
  // ]);

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

console.log('leafDimensions', leafDimensions)

  return (
    <>
    <div style={{ height: '768px', width: '98vw', background: 'aliceblue' }}>
      <Canvas>
        <ABLeaf leafDimensions={leafDimensions}></ABLeaf>
      </Canvas>
    </div>
    <div className="slidecontainer">
          <input onChange={event => handleChange(event)} type="range" min="-50" max="50" value={leafDimensions.d1} className="slider" id="d1" />
          <input onChange={event => handleChange(event)} type="range" min="-50" max="50" value={leafDimensions.d2} className="slider" id="d2" />
          <input onChange={event => handleChange(event)} type="range" min="-50" max="50" value={leafDimensions.d3} className="slider" id="d3" />
          <input onChange={event => handleChange(event)} type="range" min="-50" max="50" value={leafDimensions.d4} className="slider" id="d4" />
          <input onChange={event => handleChange(event)} type="range" min="-50" max="50" value={leafDimensions.d5} className="slider" id="d5" />
          <input onChange={event => handleChange(event)} type="range" min="0.00" max="1.00" value={leafDimensions.d6} className="slider" id="d6" />
          <input onChange={event => handleChange(event)} type="range" min="-50" max="50" value={leafDimensions.d7} className="slider" id="d7" />
          <input onChange={event => handleChange(event)} type="range" min="-50" max="50" value={leafDimensions.d8} className="slider" id="d8" />
          <input onChange={event => handleChange(event)} type="range" min="-50" max="50" value={leafDimensions.d9} className="slider" id="d9" />
          <input onChange={event => handleChange(event)} type="range" min="-50" max="50" value={leafDimensions.d10} className="slider" id="d10" />
          <input onChange={event => handleChange(event)} type="range" min="-50" max="50" value={leafDimensions.d11} className="slider" id="d11" />
          <input onChange={event => handleChange(event)} type="range" min="-50" max="50" value={leafDimensions.d12} className="slider" id="d12" />
      </div>
    
    </>
  );
}

export default App;
