import React, { useRef, useState } from 'react';
import { Canvas, useThree, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, Float, Plane } from '@react-three/drei';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import ThreeFlower from './ThreeFlower';
import TorusStem from './TorusStem';
import ProcLeaf2 from './ProcLeaf2';
import ABLeaf from './ABLeaf';
import CameraLeaf from './CameraLeaf';
import CameraButton from './CameraButton';
import Text from './Text';
import Text2 from './Text2';
import Text3 from './Text3';
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
import scene1 from './assets/flower.gltf';
import Sliders from './Sliders';
import './App.css';
import Sky from './models/Sky';


// const loader = new FontLoader();

// loader.load( 'fonts/helvetiker_regular.typeface.json', function ( font ) {

// 	const tGeometry = new TextGeometry( 'Hello three.js!', {
// 		font: font,
// 		size: 80,
// 		depth: 5,
// 		curveSegments: 12,
// 		bevelEnabled: true,
// 		bevelThickness: 10,
// 		bevelSize: 8,
// 		bevelOffset: 0,
// 		bevelSegments: 5
// 	} );
// } );

function GLTFModel() {
  const gltf = useLoader(GLTFLoader, scene1);

  return (
    <group>
      <primitive object={gltf.scene} scale={0.1} position={[0, 5, 0.5]} />
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


function CameraAnimation() {
  const { camera } = useThree();
  const targetPosition = useRef([0, 20, 100]);
  const targetZoom = useRef(80);
  const progress = useRef(0);

  useFrame(() => {
    if (progress.current < 1) {
      progress.current += 0.0001; // Adjust the speed of the animation
      camera.position.lerp({ x: targetPosition.current[0], y: targetPosition.current[1], z: targetPosition.current[2] }, progress.current);
      camera.zoom = camera.zoom + (targetZoom.current - camera.zoom) * 0.01;
      camera.lookAt(0, 0, 0);
      camera.updateProjectionMatrix();
    }
  });

  return null;
}


function App() {
  const [leafDimensions, setLeafDimensions] = useState({ d1: 9, d2: 18, d3: 0, d4: 9, d5: 0, d6: 0, d7: 0, d8: 0, d9: 0, d10: 0, d11: 0, d12: 0, d13: 2, d14: 0 })
  const [numStored, setNumStored] = useState(1)
  const [storedFlowers, setStoredFlowers] = useState([])
  const [animate, setAnimate] = useState(false)
  const cameraLeafRef = useRef();

  function storeFlower() {
    setStoredFlowers((prev) => {
      return [...prev, { [`flower${numStored}`]: leafDimensions }]
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

  function handleAnimate() {
    setAnimate('true')
  }






  
  return (
    <main>
      <div style={{ height: '100vh', width: '90vw', background: 'aliceblue' }}>
        {/* <Canvas>
          <OrbitControls />
          <Text />
        </Canvas> */}

        <Canvas style={{ background: 'skyblue' }} shadows orthographic camera={{ zoom: 60, position: [-90, 45, 100] }}>
          
        {animate && <CameraAnimation targetRef={cameraLeafRef} />}


          {/* <OrbitControls /> */}
          {/* <Shadow
          color="black"
          colorStop={0}
          opacity={0.5}
          fog={false} // Reacts to fog (default=false)
        /> */}

          <ambientLight castShadow intensity={.2} />
          <directionalLight castShadow position={[-5, 10, 20]} intensity={1} />
          <pointLight castShadow position={[30, 30, 30]} />
          <group position={[0, -2, 0]}>
          
            {/* <axesHelper args={[25]} /> */}
            {/* <ABLeaf leafDimensions={leafDimensions}></ABLeaf> */}
            <CameraLeaf ref={cameraLeafRef} leafDimensions={leafDimensions} position={[0, 0, 0]}></CameraLeaf>
              <Float
              speed={10} // Animation speed, defaults to 1
              rotationIntensity={.04} // XYZ rotation intensity, defaults to 1
              floatIntensity={.06} // Up/down float intensity, defaults to 1
              >
                {
                  !animate ?
                  <>
                    <mesh rotation={[0, ((-Math.PI / 2) - (-Math.PI / 2) * .02), 0]} position={[4, 4, 4]}>
                      <Text />
                    </mesh>
                    <mesh rotation={[0, ((-Math.PI / 2) * .02), 0]} position={[-4, 4, -4]}>
                      <Text2 />
                    </mesh>
                  </>
                  :
                  <mesh rotation={[0, ((-Math.PI / 2) * .02), 0]} position={[0, 3, -4]}>
                    <Text3 />
                  </mesh>
                }
            </Float>
            <mesh rotation={[(-Math.PI / 2), 0, 0]} position={[0, 0, 0]}>
              {/* <Circle receiveShadow args={[6.4, 128]}>
                <meshStandardMaterial color="skyblue" />
              </Circle> */}
              <Plane receiveShadow args={[10, 10]}>
                <meshPhongMaterial color="skyblue" />
              </Plane>
            </mesh>
            {/* <Sky scale={.2} rotation={[-110, -150, 0]}/> */}
          </group>
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
          <input onChange={event => handleChange(event)} type="range" step="1" min="2" max="1000" value={leafDimensions.d13} className="slider" id="d13" />
        </label>
        {/* <label htmlFor="d14">camera: {leafDimensions.d14}
            <input onChange={event => handleChange(event)} type="range" step="1" min="2" max="1000" value={leafDimensions.d14} className="slider" id="d14" />
        </label> */}
        <button onClick={storeFlower}>sTOREfLOWER</button>
        <button onClick={handleAnimate}>aNIMATEcAMERA</button>
      </div>
    </main>
  );
}

export default App;
