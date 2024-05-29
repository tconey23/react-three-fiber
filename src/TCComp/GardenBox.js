import React from 'react';
import { Box, Cylinder } from '@react-three/drei';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { useLoader, Canvas } from '@react-three/fiber';
import woodColor from './textures/Wood_027_basecolor.jpg';
import woodOcc from './textures/Wood_027_ambientOcclusion.jpg';
import woodHeight from './textures/Wood_027_height.png';
import woodRough from './textures/Wood_027_roughness.jpg';
import woodNorm from './textures/Wood_027_normal.jpg';
import groundColor from './textures/Ground_Wet_002_basecolor.jpg';
import groundOcc from './textures/Ground_Wet_002_ambientOcclusion.jpg';
import groundHeight from './textures/Ground_Wet_002_height.png';
import groundRough from './textures/Ground_Wet_002_roughness.jpg';
import groundNorm from './textures/Ground_Wet_002_normal.jpg';
import { useGLTF } from '@react-three/drei';
import { useRef } from 'react';

const GardenBox = () => {
  const [colorMap, aoMap, normalMap, roughnessMap, displacementMap] = useLoader(TextureLoader, [
    woodColor,
    woodOcc,
    woodNorm,
    woodRough,
    woodHeight,
  ]);

  const [colorGround, aoGround, normalGround, roughnessGround, displacementGround] = useLoader(TextureLoader, [
    groundColor,
    groundOcc,
    groundNorm,
    groundRough,
    groundHeight,
  ]);

  const gltf = useGLTF('/tree_stump_02_4k/tree_stump_02_4k.gltf')
  const grass = useGLTF('/grass_medium_01_4k/grass_medium_01_4k.gltf')
  const secondTree = useGLTF('/tree_small_02_4k/tree_small_02_4k.gltf')
  const fence = useGLTF('wood_fence/scene.gltf')

  return (
    <>
      <group position={[-9.5, -1, 0]}>
        <Box position={[-5, 0, 0]} args={[1, 2, 50]}>
          <meshStandardMaterial
            map={colorMap}
            aoMap={aoMap}
            normalMap={normalMap}
            roughnessMap={roughnessMap}
            displacementMap={displacementMap}
            displacementScale={0.1}
          />
        </Box>
        <Box position={[25, 0, 0]} args={[1, 2, 50]}>
          <meshStandardMaterial
            map={colorMap}
            aoMap={aoMap}
            normalMap={normalMap}
            roughnessMap={roughnessMap}
            displacementMap={displacementMap}
            displacementScale={0.1}
          />
        </Box>
        <Box position={[10, 0, 25]} args={[30, 2, 1]}>
          <meshStandardMaterial
            map={colorMap}
            aoMap={aoMap}
            normalMap={normalMap}
            roughnessMap={roughnessMap}
            displacementMap={displacementMap}
            displacementScale={0.1}
          />
        </Box>
        <Box position={[10, 0, -25]} args={[30, 2, 1]}>
          <meshStandardMaterial
            map={colorMap}
            aoMap={aoMap}
            normalMap={normalMap}
            roughnessMap={roughnessMap}
            displacementMap={displacementMap}
            displacementScale={0.1}
          />
        </Box>
        <Box position={[10, 0.75, 0]} args={[30, 0.1, 50]}>
          <meshStandardMaterial
            map={colorGround}
            aoMap={aoGround}
            normalMap={normalGround}
            roughnessMap={roughnessGround}
            displacementMap={displacementGround}
            displacementScale={0.1}
            roughness={10}
          />
        </Box>

        <primitive object={gltf.scene} position={[10,1,1]} scale={[3, 2, 4]} />
        <primitive object={secondTree.scene} position={[20,-2,-30]} scale={[15,15,15]} />
        <primitive object={fence.scene} position={[40,-2,-0]} rotation={[0, Math.PI /2, 0]} scale={[0.25,0.25,0.25]} />
        {/* <primitive object={grass.scene} position={[10,1,1]} scale={[30, 30, 30]} /> */}
      </group>
    </>
  );
};

export default GardenBox;
