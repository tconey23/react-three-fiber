import React, { useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Sky } from '@react-three/drei';
import * as THREE from 'three';
import FlowerAssembly from './TCComp/FlowerAssembly';
import { Physics } from "@react-three/rapier";
import GardenBox from './TCComp/GardenBox';
import { Environment, Backdrop } from '@react-three/drei';

const PlantBuilder = () => {
    const flowerRefs = useRef([]);

    return (
        <div style={{ display: 'flex', height: '97vh', width: '98vw', background: 'black' }}>
            <Canvas>
                <Environment
                background={true}
                backgroundBlurriness={0} // optional blur factor between 0 and 1 (default: 0, only works with three 0.146 and up)
                backgroundIntensity={0.5} // optional intensity factor (default: 1, only works with three 0.163 and up)
                backgroundRotation={[0, Math.PI / 2, 0]} // optional rotation (default: 0, only works with three 0.163 and up)
                environmentIntensity={0} // optional intensity factor (default: 1, only works with three 0.163 and up)
                environmentRotation={[0, Math.PI / 2, 0]} // optional rotation (default: 0, only works with three 0.163 and up)
                files={['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png']}
                path="/"
                preset={'forest'}
                scene={undefined}
                encoding={undefined}
                />
                    {/* <Sky /> */}
                    <ambientLight intensity={0.5} />
                    <directionalLight intensity={10} castShadow position={[2, 1, 5]} shadow-mapSize={[1024, 1024]} />
                    <PerspectiveCamera makeDefault position={[10, 15, 0]} fov={75} near={0.1} far={1000} />
                    <OrbitControls />
                    <FlowerAssembly />
                    <GardenBox />
            </Canvas>
        </div>
    );
};



export default PlantBuilder;
