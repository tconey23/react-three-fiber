import React, { useState, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Cylinder, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { Noise } from 'noisejs';

const PlantBuilder = () => {
    const [shapesArray, setShapesArray] = useState([]);
    const [displayedShapes, setDisplayedShapes] = useState([]);
    const [editShape, setEditShape] = useState()
    const [shapeParams, setShapeParams] = useState(null)

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
            setEditShape(event)
      };

      useEffect(() => {
        let params

        if(editShape){
            console.log(editShape)
        params = Object.entries(editShape).map((param) => {
            return(
                <>{param}</>
            )
        })
    }

        setShapeParams(params)

        console.log(shapeParams)
      }, [editShape])

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
                <div id='shapeParams'>
                    {shapeParams && shapeParams}
                </div>
            <Canvas>
                <ambientLight intensity={1} />
                <directionalLight intensity={10} castShadow position={[2, 1, 5]} shadow-mapSize={[1024, 1024]} />
                {displayedShapes.map((shape, index) => (
                    <NoisyCylinder key={index} shape={shape}/>                  
                ))}
                <OrbitControls />
            </Canvas>
        </div>
    );
};

export default PlantBuilder;
