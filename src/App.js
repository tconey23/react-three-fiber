import React, { useMemo } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { TextureLoader } from 'three';

import stemObjPath from './textures/Flower.vox.obj';
import stemMtlPath from './textures/Flower.vox.mtl';
import pebblesCol from './textures/Pebbles_007_COLOR.jpg';
import pebblesDisp from './textures/Pebbles_007_DISP.PNG';
import pebblesNorm from './textures/Pebbles_007_NORM.jpg';
import pebblesOcc from './textures/Pebbles_007_OCC.jpg';
import pebblesRough from './textures/Pebbles_007_ROUGH.jpg';

function FlowerModel() {
  const materials = useLoader(MTLLoader, stemMtlPath);
  materials.preload();
  const obj = useLoader(OBJLoader, stemObjPath, (loader) => {
    loader.setMaterials(materials);
  });
  return <primitive object={obj} position={[0, 0, 0]} />;
}

function App() {
  const [colorMap, displacementMap, normalMap, roughnessMap, aoMap] = useLoader(TextureLoader, [
    pebblesCol,
    pebblesDisp,
    pebblesNorm,
    pebblesRough,
    pebblesOcc,
  ]);

  return (
    <div style={{ height: '100vh', width: '100vw', background: 'alice blue' }}>
      <Canvas>
        <ambientLight intensity={2} />
        <directionalLight position={[10, 10, 10]} intensity={1} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <FlowerModel />

        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[10, 0.1, 10]} />
          <meshStandardMaterial
            displacementScale={0.05}
            map={colorMap}
            displacementMap={displacementMap}
            normalMap={normalMap}
            roughnessMap={roughnessMap}
            aoMap={aoMap}
          />
        </mesh>
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default App;
