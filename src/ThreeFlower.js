import React, { useRef, useEffect, useState, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Cylinder } from '@react-three/drei';
import { Noise } from 'noisejs';
import { TubeGeometry, CatmullRomCurve3, Vector3 } from 'three';
import Leaf from './Leaf';

function ThreeFlower(props) {
  const stemRef = useRef();
  const bloomRef = useRef();
  const tubeRef = useRef();

  console.log(props)
  
  const pathPoints = [
    [0.5, 0, 0], 
    [0.5, 0, 0],
    [0.5, 0, 0.8],
    [0.1, props.geoParams.stemHeight, 0]  
  ]

  const tubularSegments = 100;
  const radius = 0.14;
  const radialSegments = 8;
  const closed = false;

  const geometry = useMemo(() => {
    const points = pathPoints.map(p => new Vector3(...p));
    const curve = new CatmullRomCurve3(points, closed, 'centripetal', 0.5);
    return new TubeGeometry(curve, tubularSegments, radius, radialSegments, closed);
  }, [pathPoints, tubularSegments, radius, radialSegments, closed]);

  const [isAnimating, setIsAnimating] = useState(true);
  const noise = new Noise(Math.random());

  const [flowerPedals, setFlowerPedals] = useState([]);
  const colorArray = ['red', 'blue', 'green', 'purple'];

  useEffect(() => {
    const pedalArray = [];
    let c = 0;

    for (let i = 0; i < 1; i += 0.01) {
      pedalArray.push(
        <Leaf
          key={i}
          positionX={0}
          positionY={0}
          positionZ={0}
          rotationX={0}
          rotationY={i+100}
          rotationZ={0}
          color={colorArray[c]}
          geoParams={props.geoParams}
        />
      );
      c = (c + 3) % colorArray.length;
    }

    setFlowerPedals(pedalArray);
  }, [props.geoParams]);

  return (
    <mesh position={props.position}>
      <group>
        <group ref={bloomRef} rotation={[props.geoParams.bloomRotationX, props.geoParams.bloomRotationY, props.geoParams.bloomRotationZ]} position={[0, props.geoParams.stemHeight, 0]}>
          <Sphere position={[0, 0, 0.1]} args={[props.geoParams.recRadius]}>
            <meshStandardMaterial color="yellow" />
          </Sphere>
          {/* <Cylinder position={[0, -0.5, 0.05]} args={[0.25,0.14,1]}>
            <meshStandardMaterial color="green" />
          </Cylinder> */}
          {flowerPedals}
        </group>
        <mesh ref={tubeRef} geometry={geometry} position={[0, 0, 0]}>
          <meshStandardMaterial color="green" />
        </mesh>
      </group>
    </mesh>
  );
}

export default ThreeFlower;
