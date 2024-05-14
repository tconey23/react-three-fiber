import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { Noise } from 'noisejs'; // Import Noise from noisejs

const TCFlower2 = () => {
    const latheRef = useRef();

    // Create a noise object
    const noise = new Noise();

    // Function to generate noise value at given coordinates
    const getNoiseValue = (x, y) => {
        return noise.simplex2(x, y);
    };

    // Function to generate lathe geometry with noise-modified positions
    const setLayers = () => {
        let x1 = 0;
        let y1 = 0;

        let x2 = 0.62;
        let y2 = 0.5;

        let x3 = 0;
        let y3 = 0.14;

        let y = 0;
        let rY = 0;

        const layers = 5;
        const geoArray = [];
        for (let i = 0; i < layers; i++) {
            x2 -= 0.1;
            y += 0.05;
            rY += 0;

            const LP1 = { x: x1, y: y1 };
            const LP2 = { x: x2, y: y2 };
            const LP3 = { x: x3, y: y3 };

            // Modify lathe points with noise
            const noiseFactor = 0.2; // Adjust this factor to control the influence of noise
            const noiseValue1 = getNoiseValue(LP1.x, LP1.y) * noiseFactor;
            const noiseValue2 = getNoiseValue(LP2.x, LP2.y) * noiseFactor;
            const noiseValue3 = getNoiseValue(LP3.x, LP3.y) * noiseFactor;

            const lathePoints = [
                { x: LP1.x + noiseValue1, y: LP1.y + noiseValue1 },
                { x: LP2.x + noiseValue2, y: LP2.y + noiseValue2 },
                { x: LP3.x + noiseValue3, y: LP3.y + noiseValue3 },
            ];

            geoArray.push(
                <mesh key={i} ref={latheRef} position={[0, y, 0]} rotation={[rY, 0, 0]}>
                    <latheGeometry args={[lathePoints, 100, 0, Math.PI * 2]} />
                    <meshLambertMaterial color={'green'} />
                </mesh>
            );
        }
        return geoArray;
    };

    return (
        <>
         {setLayers()}
        </>

    );
};

export default TCFlower2;
