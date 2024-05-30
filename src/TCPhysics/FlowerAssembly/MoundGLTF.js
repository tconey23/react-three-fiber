import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';
import { Clone } from 'three/examples/jsm/utils/SkeletonUtils';

const GLTFModel = ({ position }) => {
  const { scene } = useGLTF('/tree_stump_02_4k/tree_stump_02_4k.gltf');
  const modelRef = useRef();
  const clonedScene = Clone(scene);

  return (
    <primitive
      ref={modelRef}
      object={clonedScene}
      position={position}
    />
  );
};

const MoundGLTF = () => {
  return (
    <group>
      <ambientLight />
      <GLTFModel position={[0, 0, 0]} />
      <GLTFModel position={[2, 0, 0]} />
      <GLTFModel position={[-2, 0, 0]} />
      <OrbitControls />
    </group>
  );
};

export default MoundGLTF;