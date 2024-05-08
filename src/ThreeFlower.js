import React, { useRef } from 'react';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import Leaf from './Leaf';
import BloomModel from './Bloom';

function ThreeFlower({ rotationX = 55, rotationY = 0, rotationZ = 0, scale = [0.1, 0.1, 0.1], ...props }) {
  const leafRef = useRef();

  useFrame(() => {
    // leafRef.current.rotation.y += 0.01;
  });

  // Define leaf shape
  const leafShape = new THREE.Shape();
  leafShape.moveTo(0, 0);
  leafShape.quadraticCurveTo(10, 5, 0, 10);
  leafShape.quadraticCurveTo(-10, 5, 0, 0);

  // Define leaf geometry
  const leafGeometry = new THREE.ExtrudeGeometry(leafShape, {
    steps: 2,
    depth: 0.1,
    bevelEnabled: false,
  });

  const center = [0, 0, 0];
  const offsetX = 1.4;
  const offsetY = 0;
  const offsetZ = -1.5;

  return (
    <>
        <mesh color="green" position={center}>
          <cylinderGeometry args={[0.1, 0.1, 10]} />          
          <meshStandardMaterial color="green"/>
        </mesh>
        <mesh>
          <Leaf position={[0, 0, 0]} rotationZ={0} rotationY={0} rotationX={2} />
        </mesh>
        <mesh>
          <Leaf position={[0, -0.5, 0]} rotationY={45} rotationZ={15} rotationX={45} /> 
        </mesh>
        <mesh>
          <Leaf position={[0, 2.5, 0]} rotationY={45} rotationZ={25} rotationX={180} />
        </mesh>
        <mesh   position={[0,5,0]}>
            <BloomModel />
        </mesh>
        
    </>
  );
}

export default ThreeFlower;
