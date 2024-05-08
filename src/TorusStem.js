import React from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { TextureLoader } from 'three';

const Torus = () => {
    return(
        <>
            <mesh>
                <torusGeometry args={[5, 3, 32, 256]} />
                <meshPhongMaterial attach="material" color={"green"} />
            </mesh>
        </>
    )
}

const TorusStem = () => {

    return (
        <>
            <Torus />
        </>
    )
}

export default TorusStem