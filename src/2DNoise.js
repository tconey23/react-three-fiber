import React, { useState, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import Perlin from 'perlin';
import Noise from 'noisejs';

function NoisyShape2({
  radiusTop,
  radiusBottom,
  shape_Length,
  shape_Width,
  shape_Height,
  radialSegments,
  noiseScale,
  noiseImpactX,
  noiseImpactY,
  noiseImpactZ,
  seed,
  shapeType
}) {
  const meshRef = useRef();
  const perlin = new Perlin(seed); // Create a Perlin noise instance
  console.log(perlin.noise)

  useEffect(() => {
    let geometry;

    switch (shapeType) {
      case 'cube':
        geometry = new THREE.BoxGeometry(shape_Length, shape_Width, shape_Height);
        break;
      case 'sphere':
        geometry = new THREE.SphereGeometry(radiusTop, radialSegments, radialSegments);
        break;
      case 'cylinder':
      default:
        geometry = new THREE.CylinderGeometry(radiusTop, radiusBottom, shape_Height, radialSegments);
    }

    const positions = geometry.attributes.position.array;

    for (let i = 0; i < positions.length; i += 3) {
      const x = positions[i];
      const y = positions[i + 1];
      const z = positions[i + 2];

      // Generate Perlin noise for each vertex
      const noiseValue = perlin.noise(x * noiseScale, y * noiseScale, z * noiseScale);

      positions[i] += noiseValue * noiseImpactX;
      positions[i + 1] += noiseValue * noiseImpactY;
      positions[i + 2] += noiseValue * noiseImpactZ;
    }

    geometry.attributes.position.needsUpdate = true;
    geometry.computeVertexNormals();

    if (meshRef.current) {
      meshRef.current.geometry.dispose();
      meshRef.current.geometry = geometry;
    }
  }, [radiusTop, radiusBottom, shape_Length, shape_Width, shape_Height, radialSegments, noiseScale, noiseImpactX, noiseImpactY, noiseImpactZ, seed, shapeType]);

  return (
    <mesh ref={meshRef}>
      <meshStandardMaterial attach="material" color="green" />
    </mesh>
  );
}

function TwoDNoise() {
  const [shapeType, setShapeType] = useState("cylinder");
  const [settings, setSettings] = useState({
    radiusTop: 1,
    radiusBottom: 1,
    shape_Length: 5,
    shape_Width: 5,
    shape_Height: 5,
    radialSegments: 100,
    noiseScale: 0.1, // Adjusted noise scale for better visualization
    noiseImpactX: 0.1, // Adjusted noise impact for better visualization
    noiseImpactY: 0.1, // Adjusted noise impact for better visualization
    noiseImpactZ: 0.1, // Adjusted noise impact for better visualization
    seed: 12345
  });

  useEffect(() => {
    const savedShapes = localStorage.getItem('shapeSettings');
    let maxSeed = 0;
    if (savedShapes) {
      const shapes = JSON.parse(savedShapes);
      shapes.forEach(shape => {
        if (shape.seed > maxSeed) {
          maxSeed = shape.seed;
        }
      });
      setSettings(s => ({ ...s, seed: maxSeed + 1 }));
    }
  }, []);

  useEffect(() => {
    switch(shapeType){
      case 'cylinder':
        setSettings({
          radiusTop: 1,
          radiusBottom: 1,
          shape_Height: 5,
          radialSegments: 100,
          noiseScale: 0.1,
          noiseImpactX: 0.1,
          noiseImpactY: 0.1,
          noiseImpactZ: 0.1,
          seed: 12345
        });
        break;
      case 'cube':
        setSettings({
          shape_Length: 5,
          shape_Width: 5,
          shape_Height: 5,
          noiseScale: 0.1,
          noiseImpactX: 0.1,
          noiseImpactY: 0.1,
          noiseImpactZ: 0.1,
          seed: 12345
        });
        break;
      case 'sphere':
        setSettings({
          radiusTop: 1,
          radialSegments: 100,
          noiseScale: 0.1,
          noiseImpactX: 0.1,
          noiseImpactY: 0.1,
          noiseImpactZ: 0.1,
          seed: 12345
        });
        break;
    }
  }, [shapeType]);

  const saveSettings = () => {
    const savedShapes = localStorage.getItem('shapeSettings');
    let shapesArray = savedShapes ? JSON.parse(savedShapes) : [];
    shapesArray.push(settings);
    localStorage.setItem('shapeSettings', JSON.stringify(shapesArray));
  };

  const updateSetting = (key, value) => {
    setSettings(prev => ({ ...prev, [key]: parseFloat(value) }));
  };

  const handleShapeTypeChange = (event) => {
    setShapeType(event.target.value);
  };

  return (
    <div style={{ display: 'flex', height: '97vh', width: '98vw', background: 'black' }}>
      <div style={{ width: '20vw', padding: '1em', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', background: 'lightgray' }}>
        <select value={shapeType} onChange={handleShapeTypeChange}>
          <option value="cylinder">Cylinder</option>
          <option value="cube">Cube</option>
          <option value="sphere">Sphere</option>
        </select>
        {Object.entries(settings).map(([key, value]) => (
          <label key={key}>
            {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}: 
            <input type="number" min="0" max="100" step="0.01" value={value} onChange={(e) => updateSetting(key, e.target.value)} />
          </label>
        ))}
        <button onClick={saveSettings}>Save Settings</button>
      </div>
      <Canvas>
        <ambientLight intensity={1} />
        <directionalLight intensity={10} castShadow position={[2, 1, 5]} shadow-mapSize={[1024, 1024]} />
        <NoisyShape2
          key={settings.seed + shapeType} 
          {...settings}
          shapeType={shapeType}
        />
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default TwoDNoise;
