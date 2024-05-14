
import { Canvas } from '@react-three/fiber';
import { Cylinder, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { Noise } from 'noisejs';
import React, { useRef, useEffect, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import Leaf from './Leaf';

function Shader1() {
    const cylRef = useRef(null)

 
    
    return (
        <mesh>
            <Cylinder
                ref={cylRef}
                position={[0, 0, 0]}
            >
                <meshStandardMaterial color="green" />
            </Cylinder>
        </mesh>
    )

}

export default Shader1