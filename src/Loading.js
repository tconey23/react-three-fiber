import React, { useState, lazy, Suspense, useMemo, useCallback, useEffect } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { MeshWobbleMaterial, OrbitControls, PerformanceMonitor, PerspectiveCamera, Sphere} from '@react-three/drei';
import { Physics } from '@react-three/cannon';
import { DoubleSide } from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { useGLTF } from '@react-three/drei';
import Sky from './models/Sky';
import { TextureLoader, SpriteMaterial, Sprite } from 'three';
import spriteTexture from '../src/assets/billboardgrass0002.png'
import { Cylinder, Text3D } from '@react-three/drei';
import Stem from './TCComp/Stem';

const Loading = ({ flower }) => {

    console.log(flower)

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


    return (
        <>
          <group>
            <Stem castShadow  stage={stage} flower={flower.phases[stage]} nextStage={nextStage} stageDurations={stageDurations} />
          </group>
        </>
    )
}

export default Loading