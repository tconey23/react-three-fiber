import React, { useRef, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { createNoise3D } from 'simplex-noise';
import { OrbitControls, Cylinder, Tube, Sphere, Stars } from '@react-three/drei';
import * as THREE from 'three';
import PlantBuilder from './PlantBuilder';
import { Routes, Route, Link } from 'react-router-dom';
import Sandbox from './Sandbox';
import TCFlower2 from './TCFlower2/TCFlower2';
import flowers from './assets/flowerData'
import FlowerDaddy from './FlowerDaddy';

const FlowerDataTest = () => {
    const lifeStages = []
    const [currentStage, setCurrentStage] = useState('thriving')
    // const [currentStage, setCurrentStage] = useState('0')
    // const [flowerData, setFlowerData] = useState(flowers)
    const [renderFlowers, setRenderFlowers] = useState(null)

    useEffect(() => {
        const preppedFlowers = flowers.map((flower, index) => {
            return (
                <FlowerDaddy 
                    flower={flower}
                    currentStage={currentStage}
                    key={flower.id}
                    position={[0,0,index + 5]}
                    rotation={[1,0,0]}
                ></FlowerDaddy>
            )
        })

        setRenderFlowers(preppedFlowers)
        
    }, [])


    

    // console.log(renderFlowers)

    return (
        <>
            <Canvas style={{ width: '100vw', height: '95vh', backgroundColor: 'black' }}>
                <directionalLight intensity={10} castShadow position={[2, 1, 5]} shadow-mapSize={[1024, 1024]} />
                <ambientLight intensity={1} />
                <Stars />
                {renderFlowers && renderFlowers}
                <OrbitControls />
            </Canvas>
        </>
    )
}

export default FlowerDataTest







