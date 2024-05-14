import React, { useRef, useState, useEffect  } from 'react';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import Sliders from './Sliders'
import { OrbitControls } from '@react-three/drei';

function ProcLeaf({ rotationX = 0, rotationY = 0, rotationZ = 0, scale = [0.25, 0.25, 0.25], leafDimensions, ...props }) {
  const [leafChange, setLeafChange] = useState(true)
  const [leafShape, setLeafShape ] = useState(new THREE.Shape())
  const [leafShape2, setLeafShape2 ] = useState(new THREE.Shape())
  const [leafGeometry, setLeafGeometry ] = useState((new THREE.ExtrudeGeometry(leafShape, {
    steps: 5,
    depth: 0.10,
    bevelEnabled: true,
  })))

  const [leafGeometry2, setLeafGeometry2 ] = useState((new THREE.ExtrudeGeometry(leafShape2, {
    steps: 5,
    depth: 0.10,
    bevelEnabled: true,
  })))

  console.log('leafDimensions', leafDimensions)
  console.log('leafChange', leafChange)
  

  useFrame(() => {
    // leafRef1.current.rotation.y += 0.01;
    // leafRef2.current.rotation.y += 0.01;
  });

  // const randomNumber = (max, min) => {
  //   return Math.floor(Math.random() * (max - min + 1)) + min
  // }

  // const cpX = randomNumber(-10, 10)
  // const cpY = randomNumber(-10, 10)
  // const rX = randomNumber(-10, 10)
  // const rY = randomNumber(-10, 10)

  
  useEffect(() => {
    setLeafShape(new THREE.Shape())
    setLeafShape2(new THREE.Shape())
    setLeafChange(prev => !prev)
  },[leafDimensions])

  useEffect(() => {
    if(leafShape) {
      console.log('in here')
      leafShape.moveTo(0, 0);
      leafShape2.moveTo(0, 0);
      leafShape.quadraticCurveTo(leafDimensions.d1,leafDimensions.d2,leafDimensions.d3,leafDimensions.d4)
      leafShape2.quadraticCurveTo(-leafDimensions.d1,leafDimensions.d2,leafDimensions.d3,leafDimensions.d4)

      setLeafGeometry((new THREE.ExtrudeGeometry(leafShape, {
        steps: 5,
        depth: 0.10,
        bevelEnabled: true,
      })))

      setLeafGeometry2((new THREE.ExtrudeGeometry(leafShape2, {
        steps: 5,
        depth: 0.10,
        bevelEnabled: true,
      })))
    }
}, [leafChange])
 

  // console.log(cpX, cpY, rX, rY)
  // leafShape.quadraticCurveTo(cpX, cpY, rX, rY);
  // leafShape.quadraticCurveTo(cpX, -cpY, rX, -rY);
  // leafShape.quadraticCurveTo(2,2,10,8)
  // leafShape.quadraticCurveTo(9,18,0,9)
  // leafShape2.quadraticCurveTo(-9,18,0,9)
  // leafShape.quadraticCurveTo(leafDimensions.d1,leafDimensions.d2,leafDimensions.d3,leafDimensions.d4)
  // leafShape2.quadraticCurveTo(-leafDimensions.d1,leafDimensions.d2,leafDimensions.d3,leafDimensions.d4)
  
  // function updateMesh() {
  //   leafShape.quadraticCurveTo(leafDimensions.d1,leafDimensions.d2,leafDimensions.d3,leafDimensions.d4)
  //   leafShape2.quadraticCurveTo(-leafDimensions.d1,leafDimensions.d2,leafDimensions.d3,leafDimensions.d4)
  //   setLeafChange(prev => !prev)
  //   requestAnimationFrame(updateMesh);
  // }

 
 

  // leafShape.quadraticCurveTo(-1,-9,9,7)

  // const leafShapes = [
  //   leafShape.quadraticCurveTo(1,1,9,7),
  //   leafShape.quadraticCurveTo(9,2,9,2),
  //   leafShape.quadraticCurveTo(1,2,4,8),
  //   leafShape.quadraticCurveTo(8,2,9,1)
  // ]
  // Define leaf geometry
  // const leafGeometry = new THREE.ExtrudeGeometry(leafShape, {
  //   steps: 5,
  //   depth: 0.10,
  //   bevelEnabled: true,
  // });

  // const leafGeometry2 = new THREE.ExtrudeGeometry(leafShape2, {
  //   steps: 5,
  //   depth: 0.10,
  //   bevelEnabled: true,
  // });

  // const center = [0, 0, 0];
  // const offsetX = 1.4;
  // const offsetY = 0;
  // const offsetZ = -1.5;

  const leafRef1 = useRef();
  const leafRef2 = useRef();



  return (
    <>     
        <group>
        <mesh ref={leafRef1} {...props} rotation={[rotationX, rotationY, rotationZ]} scale={scale}>
          <bufferGeometry attach="geometry" {...leafGeometry} />
          <meshPhongMaterial color="green" />
        </mesh>
        <mesh ref={leafRef2} {...props} rotation={[rotationX, rotationY, rotationZ]} scale={scale}>
          <bufferGeometry attach="geometry" {...leafGeometry2} />
          <meshPhongMaterial color="green" />
        </mesh>
      </group>
    </>
  );
}

export default ProcLeaf;
