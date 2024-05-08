import React, { useRef } from 'react';
import * as THREE from 'three';
import Leaf from './Leaf';


const SphereModel = () => {
  return (
    <mesh>
      <sphereGeometry args={[2, 20, 100]} />
      <meshStandardMaterial color={"blue"} />
    </mesh>
  );
};

function BloomModel({ rotationX = 55, rotationY = 0, rotationZ = 0, scale = [0.25, 0.25, 0.25], ...props }) {
  const petalGeometry = new THREE.ConeGeometry(0.5, 1, 5);
  const petalMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });

  const petals = [];
  for (let i = 0; i < 10; i++) {
    const angle = (i / 10) * Math.PI * 2;
    const petal = (
      <mesh key={i} position={[Math.sin(angle) * 2, 0, Math.cos(angle) * 2]} rotation={[0, angle, 0]}>
        <primitive object={petalGeometry} attach="geometry" />
        <meshStandardMaterial color={0xffff00} />
      </mesh>
    );
    petals.push(petal);
  }

  return (
    <>
      <SphereModel/>
    </>
  );
}

export default BloomModel;
