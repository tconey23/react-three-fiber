import React, { useRef, useEffect, useState, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Cylinder } from '@react-three/drei';
import { Noise } from 'noisejs';
import { TubeGeometry, CatmullRomCurve3, Vector3 } from 'three';
import Leaf from './Leaf';


const FlowerDaddy = (props) => {

const [flowerPedals, setFlowerPedals] = useState([]);
const colorArray = ['red', 'blue', 'green', 'purple'];
const bloomRef = useRef();
const tubeRef = useRef();
const {flower, position, rotation, currentStage} = props

const pathPoints = [
    [0.5, 0, 0], 
    [0.5, 0, 0],
    [0.5, 0, 0.8],
    [0.1, flower.stemHeight.lifecycle[currentStage], 0]  
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
          flower={flower}
          currentStage={currentStage}
        />
      );
      c = (c + 3) % colorArray.length;
    }

    setFlowerPedals(pedalArray);
  }, [flower]);

    return (
        <mesh position={position}>
        <group>
          <group ref={bloomRef} rotation={[flower.bloomRotationX.lifecycle[currentStage], flower.bloomRotationY.lifecycle[currentStage], flower.bloomRotationZ.lifecycle[currentStage]]} position={[0, flower.stemHeight.lifecycle[currentStage], 0]}>
            <Sphere position={[0, 0, 0.1]} args={[flower.recRadius]}>
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
    )
}

export default FlowerDaddy