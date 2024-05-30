import React, { useRef, useEffect, useState, useMemo } from 'react';
import * as THREE from 'three';
import { TubeGeometry, CatmullRomCurve3, Vector3 } from 'three';
import { useFrame } from '@react-three/fiber';
import { useSphere, useCylinder, useBox, usePointToPointConstraint, useLockConstraint, useDistanceConstraint, useSpring, useConeTwistConstraint } from '@react-three/cannon';
import { Noise } from 'noisejs';
import { Quaternion } from 'three';
import { useGLTF } from '@react-three/drei';
import { clone } from 'three/examples/jsm/utils/SkeletonUtils.js';
import { Physics } from '@react-three/cannon';

const lerp = (start, end, t) => start + (end - start) * t;

const interpolatePath = (startPath, endPath, t) => {
  const interpolatedPathArray = [];
  for (let i = 0; i < startPath.length; i++) {
    interpolatedPathArray.push(lerp(startPath[i], endPath[i], t));
  }
  return interpolatedPathArray;
};

const Stem = ({ stage, flower, nextStage, stageDurations }) => {

  const springRestLength = 1;
  const springStiffness = 100;
  const springDamping = 10;

  const mound = useGLTF('/tree_stump_02_4k/tree_stump_02_4k.gltf')
  const clonedScene = useMemo(() => clone(mound.scene), [mound.scene]);

  const GROUP1 = 1 << 0
  const GROUP2 = 1 << 1


  const tubeRef = useRef();
  const colliderRef = useRef();
  const transitionProgressRef = useRef(0);
  const elapsedTimeRef = useRef(0);
  const targetDuration = stageDurations;
  const [topPoint, setTopPoint] = useState([0, 0, 0]);
  const [currentPath, setCurrentPath] = useState(flower.path.flat());
  const [startPath, setStartPath] = useState(flower.path.flat());
  const [currentFlower, setCurrentFlower] = useState(flower);
  const [startFlower, setStartFlower] = useState(flower);
  const [petalRadius, setPetalRadius] = useState(0.4)
  const [petalHeight, setPetalHeight] = useState(0.1)

  const noise = useMemo(() => new Noise(123456), []);

  const [recPoint, recPointApi] = useBox(() => ({
    args: [0.1, 0.1, 0.1],
    type: 'Dynamic',
    mass: 0,
    collisionFilterGroup: GROUP1,
    collisionFilterMask: GROUP2,
  }), [topPoint])

  const [stemColl1, stemCollApi1] = useSphere(() => ({
    args: [0.15, 32,64],
    rotation: [Math.PI / 2,0,Math.PI / 1],
    type: 'Dynamic',
    mass: 2,
    collisionFilterGroup: GROUP1,
    collisionFilterMask: GROUP2,
  }), [topPoint]);

  const [stemColl2, stemCollApi2] = useCylinder(() => ({
    args: [0.2,0.2,0.2],
    type: 'Kinematic',
    mass: 1,
    collisionFilterGroup: GROUP2,
    collisionFilterMask: GROUP1,
  }), [topPoint]);

  const [stemColl3, stemCollApi3] = useSphere(() => ({
    args: [0.2,0.2,0.2],
    type: 'Kinematic',
    mass: 1,
    collisionFilterGroup: GROUP2,
    collisionFilterMask: GROUP1,
  }), [topPoint]);

  const [stemColl4, stemCollApi4] = useCylinder(() => ({
    args: [0.2,0.2,0.2],
    type: 'Kinematic',
    mass: 1,
    collisionFilterGroup: GROUP2,
    collisionFilterMask: GROUP1,
  }), [topPoint]);

  const [stemColl5, stemCollApi5] = useCylinder(() => ({
    args: [0.2,0.2,0.2],
    type: 'Kinematic',
    mass: 1,
    collisionFilterGroup: GROUP2,
    collisionFilterMask: GROUP1,
  }), [topPoint]);

  const [stemColl6, stemCollApi6] = useCylinder(() => ({
    args: [0.2,0.2,0.2],
    type: 'Kinematic',
    mass: 1,
    collisionFilterGroup: GROUP2,
    collisionFilterMask: GROUP1,
  }), [topPoint]);

  const [petals, petalApi] = useCylinder(() => ({
    args: [1.5, 1.5, 0.10, 100],
    rotation: [Math.PI / 2,Math.PI / 2,Math.PI / 2],
    mass: 2,
    type: 'Dynamic',
    material: {
      friction: 0.5,
      restitution: 1,
    },
    collisionFilterGroup: GROUP1,
    collisionFilterMask: GROUP2,
    angularDamping: 0.8,
  }), [petalRadius]);


  useLockConstraint(petals, stemColl1,{
    pivotA: [0, 0, 0],  
    pivotB: [0, 0, 0], 
    axisA: [0, 1, 0],     
    axisB: [0, 1, 0],     
  })

  useConeTwistConstraint(stemColl1, recPoint, {
    pivotA: [0, 0, 0],
    pivotB: [0, 0, 0],
    axisA: [0, 1, 0],
    axisB: [0, 1, 0],
    angle: Math.PI / 6,
    twistAngle: Math.PI / 10,
  })

  useEffect(() => {
    if (nextStage) { 
      setStartPath(currentPath);
      transitionProgressRef.current = 0;
      elapsedTimeRef.current = 0;
      setStartFlower(currentFlower);
    }
  }, [nextStage, currentPath, currentFlower]);

  useEffect(() => {
    const pointsArray = flower.path.map(point => new Vector3(point[0], point[1], point[2]));
    const pathCurve = new CatmullRomCurve3(pointsArray);
    const tubularSegments = 100;
    const radius = 0.14;
    const radialSegments = 8;
    const closed = false;
    const tubeGeometry = new TubeGeometry(pathCurve, tubularSegments, radius, radialSegments, closed);
    if (tubeRef.current) {
      tubeRef.current.geometry.dispose();
      tubeRef.current.geometry = tubeGeometry;
      tubeRef.current.visible = true;
    }
  }, [flower.path]);

  useFrame((state, delta) => {
    if (nextStage && transitionProgressRef.current < 1) {
      elapsedTimeRef.current += delta * 1000;
      transitionProgressRef.current = Math.min(elapsedTimeRef.current / targetDuration, 1);

      const interpolatedPath = interpolatePath(startPath, nextStage.path.flat(), transitionProgressRef.current);
      setCurrentPath(interpolatedPath);

      const pointsArray = [];
      for (let i = 0; i < interpolatedPath.length; i += 3) {
        pointsArray.push(new Vector3(interpolatedPath[i], interpolatedPath[i + 1], interpolatedPath[i + 2]));
      }
      const pathCurve = new CatmullRomCurve3(pointsArray);
      const tubularSegments = 100;
      const radius = 0.14;
      const radialSegments = 8;
      const closed = false;
      const tubeGeometry = new TubeGeometry(pathCurve, tubularSegments, radius, radialSegments, closed);

      if (recPointApi) {
        let pathNum = 8
        recPointApi.position.set(
          pathCurve.points[pathNum].x,
          pathCurve.points[pathNum].y,
          pathCurve.points[pathNum].z
        )
      }  
      
      if (stemCollApi2) {
        let pathNum = 6
        stemCollApi2.position.set(
          pathCurve.points[pathNum].x,
          pathCurve.points[pathNum].y,
          pathCurve.points[pathNum].z
        )

       const paths = pathCurve.points
        const secondToLastVertex = new Vector3(...paths[paths.length - 2]);
        const lastVertex = new Vector3(...paths[paths.length - 1]);
        const direction = new Vector3().subVectors(lastVertex, secondToLastVertex).normalize();
        const forward = new Vector3(0, 0, 1);
        const quat = new Quaternion().setFromUnitVectors(forward, direction);
        stemCollApi2.quaternion.set(...quat)
      } 

      if(stemCollApi3){
        let pathNum = 7
        stemCollApi3.position.set(
          pathCurve.points[pathNum].x,
          pathCurve.points[pathNum].y,
          pathCurve.points[pathNum].z
        )
      }

      if(stemCollApi4){
        let pathNum = 5
        stemCollApi4.position.set(
          pathCurve.points[pathNum].x,
          pathCurve.points[pathNum].y,
          pathCurve.points[pathNum].z
        )
      }

      if(stemCollApi5){
        let pathNum = 4
        stemCollApi5.position.set(
          pathCurve.points[pathNum].x,
          pathCurve.points[pathNum].y,
          pathCurve.points[pathNum].z
        )
      }

      if(stemCollApi6){
        let pathNum = 3
        stemCollApi6.position.set(
          pathCurve.points[pathNum].x,
          pathCurve.points[pathNum].y,
          pathCurve.points[pathNum].z
        )
      }

      let rotation = pathCurve.points[6].normalize()

      stemCollApi1.position.subscribe((p) =>{
        setTopPoint(p)
        petalApi.position.set(topPoint);
        recPointApi.position.set(topPoint)
      })


      if (tubeRef.current) {
        tubeRef.current.geometry.dispose();
        tubeRef.current.geometry = tubeGeometry;
      }     

      const interpolatedFlower = {
        ...currentFlower,
        noiseScale: lerp(startFlower.noiseScale, nextStage.noiseScale, transitionProgressRef.current),
        noiseImpactX: lerp(startFlower.noiseImpactX, nextStage.noiseImpactX, transitionProgressRef.current),
        noiseImpactY: lerp(startFlower.noiseImpactY, nextStage.noiseImpactY, transitionProgressRef.current),
        noiseImpactZ: lerp(startFlower.noiseImpactZ, nextStage.noiseImpactZ, transitionProgressRef.current),
        radiusTop: lerp(startFlower.radiusTop, nextStage.radiusTop, transitionProgressRef.current),
        radiusBottom: lerp(startFlower.radiusBottom, nextStage.radiusBottom, transitionProgressRef.current),
        height: lerp(startFlower.height, nextStage.height, transitionProgressRef.current),
        radialSegments: lerp(startFlower.radialSegments, nextStage.radialSegments, transitionProgressRef.current),
        bloomColor: nextStage.bloomColor,
      };
      setCurrentFlower(interpolatedFlower);

      const cylinderGeometry = new THREE.CylinderGeometry(
        interpolatedFlower.radiusTop,
        interpolatedFlower.radiusBottom,
        interpolatedFlower.height,
        interpolatedFlower.radialSegments
      );

      const receptacleGeometry = new THREE.SphereGeometry(
        interpolatedFlower.recRadius
      )

      const positions = cylinderGeometry.attributes.position.array;
      for (let i = 0; i < positions.length; i += 3) {
        const x = positions[i];
        const y = positions[i + 1];
        const z = positions[i + 2];

        const displacementX = noise.perlin3(x * interpolatedFlower.noiseScale, y * interpolatedFlower.noiseScale, z * interpolatedFlower.noiseScale) * interpolatedFlower.noiseImpactX;
        const displacementY = noise.perlin3(x * interpolatedFlower.noiseScale, y * interpolatedFlower.noiseScale, z * interpolatedFlower.noiseScale) * interpolatedFlower.noiseImpactY;
        const displacementZ = noise.perlin3(x * interpolatedFlower.noiseScale, y * interpolatedFlower.noiseScale, z * interpolatedFlower.noiseScale) * interpolatedFlower.noiseImpactZ;

        positions[i] += displacementX;
        positions[i + 1] += displacementY;
        positions[i + 2] += displacementZ;
      }

      cylinderGeometry.attributes.position.needsUpdate = true;

      if (petals.current) {
        petals.current.geometry.dispose();
        petals.current.geometry = cylinderGeometry;
        petals.current.position.set(...topPoint);
        setPetalRadius(petals.current.geometry.parameters.radiusTop)
      }

      if(stemColl1){
        stemColl1.current.geometry = receptacleGeometry
      }
      
    }
  });

  useEffect(() => {
    const cylinderGeometry = new THREE.CylinderGeometry(flower.radiusTop, flower.radiusBottom, flower.height, flower.radialSegments);

    const positions = cylinderGeometry.attributes.position.array;
    for (let i = 0; i < positions.length; i += 3) {
      const x = positions[i];
      const y = positions[i + 1];
      const z = positions[i + 2];

      const displacementX = noise.perlin3(x * flower.noiseScale, y * flower.noiseScale, z * flower.noiseScale) * flower.noiseImpactX;
      const displacementY = noise.perlin3(x * flower.noiseScale, y * flower.noiseScale, z * flower.noiseScale) * flower.noiseImpactY;
      const displacementZ = noise.perlin3(x * flower.noiseScale, y * flower.noiseScale, z * flower.noiseScale) * flower.noiseImpactZ;

      positions[i] += displacementX;
      positions[i + 1] += displacementY; 
      positions[i + 2] += displacementZ;
    }

    cylinderGeometry.attributes.position.needsUpdate = true;

    const receptacleGeometry = new THREE.SphereGeometry(
      flower.recRadius
    )

    if (petals.current) {
      petals.current.geometry.dispose();
      petals.current.geometry = cylinderGeometry;
    }

    if(stemColl1){
      stemColl1.current.geometry = receptacleGeometry
    }
    petalApi.wakeUp()
    
    petalApi.angularVelocity.set(0, 0, 0);
    setPetalRadius(petals.current.geometry.parameters.radiusTop)
    setPetalHeight(petals.current.geometry.parameters.height)
  }, [flower, noise]);

  return (
    <>
    <group rotation={[0, Math.PI /2, 0]}>
      <mesh castShadow ref={tubeRef} rotation={[0, 0, 0]}>
        <meshLambertMaterial color={'green'} />
      </mesh>
      <mesh castShadow visible={true} group={GROUP1} mask={GROUP2} ref={petals}>
        <meshLambertMaterial color={'blue'} />
      </mesh>
      <mesh castShadow visible={true} group={GROUP1} mask={GROUP2} ref={stemColl1}>
          <meshLambertMaterial color={'yellow'}/>
      </mesh>
      <primitive receiveShadow castShadow object={clonedScene} position={[0, 0, 0]} scale={[3, 2, 4]} />
    </group>
    </>
  );
};

export default Stem;
