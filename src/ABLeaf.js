import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import { OrbitControls } from '@react-three/drei';
import { Noise } from 'noisejs';

function ABLeaf({ rotationX = 0, rotationY = 0, rotationZ = 0, scale = [0.25, 0.25, 0.25], leafDimensions, ...props }) {
    const leafRefs = useRef([]);

    const noise = new Noise(123456)

    const leafShapes = Array.from({ length: 40 }, () => new THREE.Shape());

    let xRotInc = 0
    let yRotInc = 10
    let zRotInc = 0

    for(var i = 0; i < 40; i++) {
      if(i%2 === 0) {
        console.log('here')
        leafShapes[i].quadraticCurveTo(leafDimensions.d1,leafDimensions.d2,leafDimensions.d3,leafDimensions.d4)
        yRotInc += 10
      } else {
        console.log('or here')
        leafShapes[i].quadraticCurveTo(-leafDimensions.d1,leafDimensions.d2,leafDimensions.d3,leafDimensions.d4)
      }
    }

  const leafGeometry = 
    new THREE.ExtrudeGeometry(leafShapes[0], {
      steps: 15,
      depth: 0.2,
      bevelEnabled: true,
      bevelSize: 0,
      bevelOffset: 0,
      bevelSegments: 0,
      bevelThickness: 0
    })

    const positions = leafGeometry.attributes.position.array;
      for (let i = 0; i < positions.length; i += 3) {
        const x = positions[i];
        const y = positions[i + 1];
        const z = positions[i + 2];
        positions[i] += noise.perlin3(1, 5, 1) * 3;
        positions[i + 1] += noise.perlin3(1, 5, 1) * 2;
        positions[i + 2] += noise.perlin3(1, 5, 1) * 5;
      }

  return (
    <>
      <ambientLight intensity={1} />
      <directionalLight position={[10, 10, 10]} intensity={1} />
      <spotLight position={[10, 10, 10]} angle={0.25} penumbra={1} />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls />
      <group>
        {Array.from({ length: 40 }, (_, index) => (
          <mesh
            key={index}
            ref={(ref) => (leafRefs.current[index] = ref)}
            {...props}
            rotation={[rotationX + index * xRotInc, rotationY + index * yRotInc, rotationZ + index * zRotInc]}
            scale={scale}
          >
            <bufferGeometry attach="geometry" {...leafGeometry} />
            <meshStandardMaterial color="green" />
          </mesh>
        ))}
      </group>
    </>
  );
}

export default ABLeaf;