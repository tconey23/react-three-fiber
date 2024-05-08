import React from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { TextureLoader } from 'three';
import ThreeFlower from './ThreeFlower';
import TorusStem from './TorusStem';

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
import { useRef } from 'react';

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
  const canvasRef = useRef()
  const [colorMap, displacementMap, normalMap, roughnessMap, aoMap] = useLoader(TextureLoader, [
    potCol,
    potDisp,
    potNorm,
    potRough,
    potOcc,
  ]);

  const windowback = useLoader(TextureLoader, windowBackground);

  const center = [0, 0, 0];
  const offsetX = 1.4;
  const offsetY = 0;
  const offsetZ = -1.5;
  const bloomModelPosition = [center[0] + offsetX, center[1] + offsetY, center[2] + offsetZ];
  const flowerModelPosition = [center[0], center[1], center[2]];  

  return (
    <>
    <div style={{ height: '1080px', width: '98vw', background: 'aliceblue' }}>
      <Canvas>
        <ambientLight intensity={1} />
        <directionalLight position={[10, 10, 10]} intensity={1} />
        <spotLight position={[10, 10, 10]} angle={0.25} penumbra={1} />
        <pointLight position={[10, 10, 10]} />
        <BloomModel position={bloomModelPosition} />
        <FlowerModel position={flowerModelPosition} />

        <mesh position={center}>
          <cylinderGeometry args={[1.02, .9, 1]} />
          <meshStandardMaterial
            color="white"
            aoMap={aoMap}
            normalMap={normalMap}
            displacementScale={0}
          />
        </mesh>

        <mesh position={[0, 4.6, 0]}>
          <boxGeometry args={[10, 0.2, 2.2]} />
          <meshStandardMaterial
            color="tan"
            aoMap={aoMap}
            normalMap={normalMap}
            displacementScale={0}
          />
        </mesh>

        <mesh position={[0, -0.6, 0]}>
          <boxGeometry args={[10, 0.2, 2.2]} />
          <meshStandardMaterial
            color="tan"
            aoMap={aoMap}
            normalMap={normalMap}
            displacementScale={0}
          />
        </mesh>

        <mesh position={[-4.5, 2, 0.98]}>
          <boxGeometry args={[1, 5, 0.25]} />
          <meshStandardMaterial
            color="tan"
            aoMap={aoMap}
            normalMap={normalMap}
            displacementScale={0}
          />
        </mesh>

        <mesh position={[4.5, 2, 0.98]}>
          <boxGeometry args={[1, 5, 0.25]} />
          <meshStandardMaterial
            color="tan"
            aoMap={aoMap}
            normalMap={normalMap}
            displacementScale={0}
          />
        </mesh>


        <mesh position={[0, 2, 0.98]}>
          <boxGeometry args={[10, 5, 0.1]} />
          <meshStandardMaterial map={windowback} />
        </mesh>

        <OrbitControls />
      </Canvas>
    </div>



    <div style={{ height: '1080px', width: '98vw', background: 'aliceblue' }}>
      <Canvas>
        <ambientLight intensity={1} />
        <directionalLight position={[10, 10, 10]} intensity={1} />
        <spotLight position={[10, 10, 10]} angle={0.25} penumbra={1} />
        <pointLight position={[10, 10, 10]} />
          <ThreeFlower />
        <OrbitControls />
      </Canvas>
    </div>

    <div style={{ height: '1080px', width: '98vw', background: 'aliceblue' }}>
      <Canvas ref={canvasRef}>
        <ambientLight intensity={1} />
        <directionalLight position={[10, 10, 10]} intensity={1} />
        <spotLight position={[10, 10, 10]} angle={0.25} penumbra={1} />
        <pointLight position={[10, 10, 10]} />
          
          
        <mesh position={[0,0,15]}>
            <TorusStem />
          </mesh>
          <mesh position={[0,0,12]}>
            <TorusStem />
          </mesh>
          <mesh position={[0,0,9]}>
            <TorusStem />
          </mesh>
          <mesh position={[0,0,6]}>
            <TorusStem />
          </mesh>
          <mesh position={[0,0,3]}>
            <TorusStem />
          </mesh>
          <mesh position={[0,0,0]}>
            <TorusStem />
          </mesh>
        <OrbitControls />
      </Canvas>
    </div>
    
    </>
  );
}

export default App;
