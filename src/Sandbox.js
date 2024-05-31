import React, { useState, lazy, Suspense, useMemo, useCallback, useEffect } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls, PerformanceMonitor, PerspectiveCamera } from '@react-three/drei';
import { Physics } from '@react-three/cannon';
import { DoubleSide, TextureLoader } from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import grassColor from './TCComp/textures/Stylized_Grass_003_basecolor.jpg';
import grassOcc from './TCComp/textures/Stylized_Grass_003_ambientOcclusion.jpg';
import grassNorm from './TCComp/textures/Stylized_Grass_003_normal.jpg';
import grassRough from './TCComp/textures/Stylized_Grass_003_roughness.jpg';
import grassHeight from './TCComp/textures/Stylized_Grass_003_height.png';
import { useGLTF } from '@react-three/drei';
import Sky from './models/Sky';
import spriteTexture from '../src/assets/billboardgrass0002.png'
import { Cylinder, Text3D } from '@react-three/drei';
import Loading from './Loading';
import { EffectComposer, Selection, SelectiveBloom } from '@react-three/postprocessing';
import './App.css';
import { Sphere } from '@react-three/drei';

const LazyStem = lazy(() => import('./TCPhysics/FlowerAssembly/Stem'));

const Sandbox = ({ flower }) => {
  const [dpr, setDpr] = useState(2);

  const [colorMap, aoMap, normalMap, roughnessMap, displacementMap] = useLoader(TextureLoader, [
    grassColor,
    grassOcc,
    grassNorm,
    grassRough,
    grassHeight,
  ]);
  const grass = useGLTF('/10438_Circular_Grass_Patch_v1/10438_Circular_Grass_Patch_v1_iterations-2.gltf')
  const texture = useLoader(TextureLoader, spriteTexture)

  const lifeMin = 0.5;
  const lifeSec = lifeMin * 60000;
  const [planted, setPlanted] = useState(Date.now());
  const [lifeCycle, setLifeCycle] = useState(lifeSec);
  const [stage, setStage] = useState('seedling');
  const [nextStage, setNextStage] = useState();
  const [plantAge, setPlantAge] = useState(0);
  const [currentTime, setCurrentTime] = useState(Date.now());

  const stages = useMemo(() => ['seedling', 'blooming', 'thriving', 'wilting', 'dead'], []);
  const stageDurations = useMemo(() => lifeCycle / stages.length, [lifeCycle, stages.length]);

  const getCurrentStage = useCallback(() => {
    const timeElapsed = Date.now() - planted;
    const stageIndex = Math.floor(timeElapsed / stageDurations);
    if (stageIndex >= stages.length) {
      setPlanted(Date.now());
      setPlantAge(0);
      return 'seedling';
    }
    return stages[stageIndex];
  }, [planted, stageDurations, stages]);

  useEffect(() => {
    if (flower) {
      const getNextStage = stages[stages.indexOf(stage) + 1];
      setNextStage(getNextStage ? flower.phases[getNextStage] : flower.phases['seedling']);
    }

    if (flower) {
      const interval = setInterval(() => {
        const timeElapsed = Date.now() - planted;
        const stageIndex = Math.floor(timeElapsed / stageDurations);
        setCurrentTime(Date.now());
        setStage(getCurrentStage());
        if (stageIndex >= stages.length) {
          setPlanted(Date.now());
          setCurrentTime(Date.now());
          setStage('seedling');
          setPlantAge(0);
        }
      }, stageDurations);

      return () => clearInterval(interval);
    }
  }, [planted, getCurrentStage, stageDurations, stages.length, flower]);

  useEffect(() => {
    if (flower) {
      const interval = setInterval(() => {
        const age = Date.now() - planted;
        setPlantAge(age / 1000);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [flower, planted]);

  const flowerArray = useMemo(() => {
    const array = [];
    const frows = 2;
    const fcolumns = 3;
    const fspacing = 8;
    const frowOffset = (frows - 1) / 2;
    const fcolOffset = (fcolumns - 1) / 2;
    for (let row = -frowOffset; row <= frowOffset; row++) {
      for (let col = -fcolOffset; col <= fcolOffset; col++) {
        array.push(
          <group rotation={[0, Math.PI / row, 0]} position={[col * fspacing, 0, row * fspacing]} key={`${row}-${col}`}>
            <LazyStem castShadow stage={stage} flower={flower.phases[stage]} nextStage={nextStage} stageDurations={stageDurations} />
          </group>
        );
      }
    }
    return array;
  }, [flower.phases]);

  const spriteArray = useMemo(() => {
    const array = [];
    const frows = 60;
    const fcolumns = 60;
    const radius = 45;
    const baseSpacing = 1.7;

    for (let row = -frows / 2; row <= frows / 2; row++) {
      for (let col = -fcolumns / 2; col <= fcolumns / 2; col++) {
        let xPosition = col * baseSpacing + (Math.random() - 0.5) * baseSpacing * 0.5;
        let zPosition = row * baseSpacing + (Math.random() - 0.5) * baseSpacing * 0.5;

        if (Math.sqrt(xPosition * xPosition + zPosition * zPosition) <= radius) {
          let scale = Math.random() * (1 - 0.2) + 0.2;

          array.push(
            <group rotation={[0, Math.random() * Math.PI * 2, 0]} position={[xPosition, 0, zPosition]} key={`${row}-${col}`}>
              <sprite receiveShadow castShadow scale={[scale, scale, scale]}>
                <spriteMaterial
                  receiveShadow
                  castShadow
                  attach="material"
                  map={texture}
                  transparent={true}
                  depthWrite={false}
                  alphaTest={0.5}
                />
              </sprite>
            </group>
          );
        }
      }
    }
    return array;
  }, [flower.phases, texture]);

  const textOptions = {
    size: 8,
    height: 0.2,
    curveSegments: 12,
    bevelEnabled: true,
    bevelThickness: 0.1,
    bevelSize: 0.05,
    bevelOffset: 0,
    bevelSegments: 5,
  };

  const LoadingScreen = <Loading />;

  return (
    <>
      <Suspense fallback={null}>
        <Canvas
          pixelratio={window.devicePixelRatio}
          style={{ width: '100vw', height: '100vh' }}
          shadows
          gl={{ antialias: false }}
          dpr={dpr}
        >
          <PerformanceMonitor factor={1} onChange={({ factor }) => setDpr(Math.floor(0.5 + 1.5 * factor, 1))} />
          <pointLight color={'orange'} position={[10, 2, 0]} castShadow intensity={9} distance={35} decay={0} />
          <pointLight color={'white'} position={[0, 10, 0]} castShadow intensity={9} distance={35} decay={0.2} />
          <pointLight color={'lightblue'} position={[5, 2, 5]} castShadow intensity={9} distance={35} decay={0} />

          <Physics>
            {flowerArray}
            {spriteArray}
            <Cylinder receiveShadow castShadow position={[0, -1, 0]} args={[50, 50, 1, 100]}>
              <meshStandardMaterial opacity={1} color="lightgreen" />
            </Cylinder>
            <Sphere receiveShadow args={[50, 100, 100]}>
              <meshLambertMaterial transparent opacity={0.2} side={DoubleSide} color="lightblue" />
            </Sphere>
          </Physics>
          <Sky />
          <PerspectiveCamera />
          <OrbitControls />
              <Text3D castShadow position={[-27, 10, -20]} font={'/Bubblegum_Sans_Regular.json'} {...textOptions}>
                bLOOMbABY
                <meshNormalMaterial castShadow />
              </Text3D>

        </Canvas>
      </Suspense>
    </>
  );
};

export default Sandbox;
