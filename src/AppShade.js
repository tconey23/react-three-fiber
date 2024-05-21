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

function AppShade() {
    const [leafDimensions, setLeafDimensions] = useState({d1: 9, d2: 18, d3: 0, d4: 9, d5: 0, d6: 0, d7: 0, d8: 0, d9: 0, d10: 0, d11: 0, d12: 0})

  return (
    <>
    <div style={{ height: '768px', width: '98vw', background: 'aliceblue' }}>
      <Canvas>
        <ABLeaf leafDimensions={leafDimensions}></ABLeaf>
      </Canvas>
    </div>
    </>
  );
}

export default AppShade;
