import React, { useRef } from 'react';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function ProcLeaf({ rotationX = 0, rotationY = 0, rotationZ = 0, scale = [0.25, 0.25, 0.25], ...props }) {
  const leafRef = useRef();

  useFrame(() => {
    // leafRef.current.rotation.y += 0.01;
  });

  const randomNumber = (max, min) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }


  const cpX = randomNumber(-10, 10)
  const cpY = randomNumber(-10, 10)
  const rX = randomNumber(-10, 10)
  const rY = randomNumber(-10, 10)

  const leafShape = new THREE.Shape();
  leafShape.moveTo(0, 0);
  console.log(cpX, cpY, rX, rY)
  // leafShape.quadraticCurveTo(cpX, cpY, rX, rY);
  // leafShape.quadraticCurveTo(cpX, -cpY, rX, -rY);
  // leafShape.quadraticCurveTo(2,2,10,8)
  leafShape.quadraticCurveTo(1,1,9,7)

  const leafShapes = [
    leafShape.quadraticCurveTo(1,1,9,7),
    leafShape.quadraticCurveTo(9,2,9,2),
    leafShape.quadraticCurveTo(1,2,4,8),
    leafShape.quadraticCurveTo(8,2,9,1)
  ]
  // Define leaf geometry
  const leafGeometry = new THREE.ExtrudeGeometry(leafShape, {
    steps: 10,
    depth: 0.10,
    bevelEnabled: false,
  });

  const center = [0, 0, 0];
  const offsetX = 1.4;
  const offsetY = 0;
  const offsetZ = -1.5;

  return (
    <>
      <mesh {...props} rotation={[rotationX, rotationY, rotationZ]} scale={scale}>
        <bufferGeometry attach="geometry" {...leafGeometry} />
        <meshPhongMaterial color="green" />
      </mesh>
    </>
  );
}

export default ProcLeaf;
