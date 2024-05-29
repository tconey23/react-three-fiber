import React, { useRef, useEffect } from 'react';
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { Physics, useConvexPolyhedron, Debug } from '@react-three/cannon';
import * as THREE from 'three';
import { Cylinder, OrbitControls } from '@react-three/drei';
import { ConvexGeometry } from 'three/examples/jsm/geometries/ConvexGeometry.js';

// Define the vertices array (ensure they are unique)
const verticesArray = [
  [0.5, 0, 0], [0.5, 0, 0.5],
  [0.1, 2, 0.8], [0.1, 5, 1.3], [0.1, 6, 1],
  [0.1, 5.5, -0.5], [0.5, 4, -1], [0.72, 3, -1]
];

// Convert the array to THREE.Vector3 objects
const vertices = verticesArray.map(coord => new THREE.Vector3(...coord));

// Generate the convex hull geometry using the vertices
const generateConvexHull = (vertices) => {
  const geometry = new ConvexGeometry(vertices);

  // Handle cases where geometry.index might be null
  if (!geometry.index) {
    console.error('Geometry index is null. Check vertices and ensure they form a valid convex hull.');
    return [];
  }

  // Extract faces from the geometry
  const faces = [];
  for (let i = 0; i < geometry.index.count; i += 3) {
    faces.push([
      geometry.index.array[i],
      geometry.index.array[i + 1],
      geometry.index.array[i + 2]
    ]);
  }
  return faces;
};

const faces = generateConvexHull(vertices);

const ConvexHullMesh = () => {
  const { scene } = useThree();
  const [ref] = useConvexPolyhedron(() => ({
    vertices: vertices.map(v => v.toArray()),
    faces,
    mass: 0,
  }));

  useEffect(() => {
    // Optionally, log geometries only once when the component mounts
    scene.traverse((object) => {
      if (object.isMesh) {
        console.log('Initial Geometry:', object.geometry);
      }
    });
  }, [scene]);

  return (
    <mesh ref={ref} position={[0, 0, 0]}>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          attach="attributes-position"
          array={new Float32Array(vertices.flatMap(v => v.toArray()))}
          itemSize={3}
          count={vertices.length}
        />
        <bufferAttribute
          attach="index"
          array={new Uint16Array(faces.flat())}
          itemSize={1}
          count={faces.flat().length}
        />
      </bufferGeometry>
      <meshStandardMaterial color="orange" />
    </mesh>
  );
};

const ConvexHull = () => {
  return (
    <Canvas style={{ width: '100vw', height: '100vh' }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Physics>
        <Debug>
          <ConvexHullMesh />
          <Cylinder />
        </Debug>
      </Physics>
      <OrbitControls />
    </Canvas>
  );
};

export default ConvexHull;
