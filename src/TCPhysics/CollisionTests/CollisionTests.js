import React from 'react';
import { useCylinder, Physics, Debug } from '@react-three/cannon';
import { Cylinder } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, OrthographicCamera } from '@react-three/drei';
import FlowerComp from './FlowerComp';


const CollisionTest = () => {
    return (
        <Canvas style={{ width: '100vw', height: '100vh' }}>
            <ambientLight intensity={1} />
            <directionalLight intensity={10} castShadow position={[2, 1, 5]} shadow-mapSize={[1024, 1024]} />
            <OrthographicCamera makeDefault position={[100, 10, 10]} zoom={30} />
            <Physics gravity={[0, -0.5, 0]}>
                <Debug >
                    <FlowerComp />
                </Debug>
            </Physics>
            <OrbitControls />
        </Canvas>
    );
}

export default CollisionTest;
