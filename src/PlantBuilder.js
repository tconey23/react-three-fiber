import React, { useState, useEffect, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Cylinder, OrbitControls, Stars, PerspectiveCamera } from '@react-three/drei';
import { Sky } from '@react-three/drei';
import * as THREE from 'three';
import { Noise } from 'noisejs';
import FlowerAssembly from './TCComp/FlowerAssembly';

const PlantBuilder = () => {
    const [shapesArray, setShapesArray] = useState([]);
    const [displayedShapes, setDisplayedShapes] = useState([]);
    const [editShape, setEditShape] = useState(null);
    const [shapeParams, setShapeParams] = useState(null);

    useEffect(() => {
        const savedShapes = localStorage.getItem('shapeSettings');
        if (savedShapes) {
            const shapes = JSON.parse(savedShapes);
            setShapesArray(shapes);
        }
    }, []);

    const handleShapeSelection = (event) => {
        const shapeIndex = parseInt(event.target.value, 10);
        const shapeToAdd = shapesArray[shapeIndex];

        if (!displayedShapes.find(shape => shape === shapeToAdd)) {
            setDisplayedShapes([...displayedShapes, shapeToAdd]);
        }
    };

    const NoisyCylinder = ({ shape }) => {
        const meshRef = useRef();
        const noise = new Noise(shape.seed);

        useEffect(() => {
            if (!meshRef.current) return;

            const geometry = new THREE.CylinderGeometry(
                shape.radiusTop,
                shape.radiusBottom,
                shape.height,
                shape.radialSegments
            );
            const positions = geometry.attributes.position.array;
            for (let i = 0; i < positions.length; i += 3) {
                const x = positions[i];
                const y = positions[i + 1];
                const z = positions[i + 2];
                positions[i + 2] += noise.perlin3(x * shape.noiseScale, y * shape.noiseScale, z * shape.noiseScale) * shape.noiseImpactZ;
            }
            geometry.attributes.position.needsUpdate = true;
            geometry.computeVertexNormals();

            // Store custom parameters in userData
            meshRef.current.userData.noiseParams = {
                noiseScale: shape.noiseScale,
                noiseImpactX: shape.noiseImpactX,
                noiseImpactY: shape.noiseImpactY,
                noiseImpactZ: shape.noiseImpactZ
            };

            meshRef.current.geometry.dispose();
            meshRef.current.geometry = geometry;
        }, [shape]);

        return (
            <Cylinder
                onClick={handleClick}
                ref={meshRef}
                args={[
                    shape.radiusTop,
                    shape.radiusBottom,
                    shape.height,
                    shape.radialSegments
                ]}
                position={[0, 0, 0]}
            >
                <meshStandardMaterial attach="material" color="green" />
            </Cylinder>
        );
    };

    const handleClick = (event) => {
        const noiseData = event.object.userData.noiseParams;
        if (noiseData) {
            console.log(noiseData.noiseScale);
            console.log(noiseData.noiseImpactX);
            console.log(noiseData.noiseImpactY);
            console.log(noiseData.noiseImpactZ);
        }
        const { position, rotation, scale } = event.object;
        setEditShape({
            position: position.toArray(),
            rotation: rotation.toArray(),
            scale: scale.toArray(),
            noiseScale: noiseData.noiseScale,
            NoiseImpactX: noiseData.noiseImpactX,
            NoiseImpactY: noiseData.noiseImpactY,
            NoiseImpactZ: noiseData.noiseImpactZ,
        });
    };

    useEffect(() => {
        let params;
        if (editShape) {
            params = Object.entries(editShape).map(([key, value]) => {
                return <p key={key}>{`${key}: [${value}]`}</p>;
            });
            setShapeParams(params);
        }
    }, [editShape]);

    return (
        <div style={{ display: 'flex', height: '97vh', width: '98vw', background: 'black' }}>
            <div id='savedShapes' style={{ margin: '20px' }}>
                <select onChange={handleShapeSelection} value="">
                    <option>Select a shape</option>
                    {shapesArray.map((shape, index) => (
                        <option key={index} value={index}>{`Cylinder ${index + 1}`}</option>
                    ))}
                </select>
            </div>
            <div id='shapeParams' style={{ background: 'white' }}>
                {shapeParams && shapeParams}
            </div>
            <Canvas>
                <ambientLight intensity={1} />
                <directionalLight intensity={10} castShadow position={[2, 1, 5]} shadow-mapSize={[1024, 1024]} />
                <PerspectiveCamera makeDefault position={[10, 15, 0]} fov={75} near={0.1} far={1000} />
                <OrbitControls />
                <Sky />
                <FlowerAssembly />
                {displayedShapes.map((shape, index) => (
                    <NoisyCylinder key={index} shape={shape} />
                ))}
            </Canvas>
        </div>
    );
};

export default PlantBuilder;
