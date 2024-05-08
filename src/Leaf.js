import React, { useRef } from 'react';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function Leaf({ rotationX = 45, rotationY = 0, rotationZ = 0, scale = [0.25, 0.25, 0.25], ...props }) {
  const leafRef = useRef();

  useFrame(() => {
    // leafRef.current.rotation.y += 0.01;
  });

  // Define leaf shape
  const leafShape = new THREE.Shape();
  leafShape.moveTo(0, 0);
  leafShape.quadraticCurveTo(2, 5, 2, -10);
  leafShape.quadraticCurveTo(-10, 5, 0, 0);

  // Define leaf geometry
  const leafGeometry = new THREE.ExtrudeGeometry(leafShape, {
    steps: 2,
    depth: 0.10,
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
          <meshPhongMaterial color="green"/>
        </mesh>
        <mesh {...props} rotation={[rotationX, rotationY, rotationZ]} scale={scale}>
        <bufferGeometry attach="geometry" {...leafGeometry} />
        <meshPhongMaterial color="green" />
      </mesh>
    </>
  );
}

export default Leaf;
