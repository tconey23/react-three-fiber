import React, { useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Cylinder } from '@react-three/drei';
import * as THREE from 'three';
import '../App.css'

const TCFlower2 = () => {
  const latheRef = useRef();
  const [latheParams, setLatheParams] = useState([{
    x: 0,
    y: 0,
    xOffset: 0.62,
    yOffset: 0.5,
    xInt: 0,
    yInt: 0.18,
    segments: 100,
    phiStart: 0,
    phiLength: Math.PI * 2,
    position: { x: 0, y: 0, z: 0 },
    rotation: { x: 0, y: 0, z: 0 },
  }]);
  const [layers, setLayers] = useState(1);
  const [collapsed, setCollapsed] = useState([false]); // Manage collapsed state for each form

  const handleChange = (e, index, key, subKey) => {
    const value = parseFloat(e.target.value);
    setLatheParams((prevParams) => {
      const newParams = [...prevParams];
      if (subKey) {
        newParams[index] = {
          ...newParams[index],
          [key]: { ...newParams[index][key], [subKey]: isNaN(value) ? 0 : value }
        };
      } else {
        newParams[index] = { ...newParams[index], [key]: isNaN(value) ? 0 : value };
      }
      return newParams;
    });
  };

  const generateLatheLayers = () => {
    const geoArray = [];
    latheParams.forEach((lathe, index) => {
      // Define more points to create a rounded shape
      const points = [
        new THREE.Vector2(lathe.x, lathe.y),
        new THREE.Vector2(lathe.x + lathe.xOffset * 0.25, lathe.y + lathe.yOffset * 0.25),
        new THREE.Vector2(lathe.x + lathe.xOffset * 0.5, lathe.y + lathe.yOffset * 0.5),
        new THREE.Vector2(lathe.x + lathe.xOffset * 0.75, lathe.y + lathe.yOffset * 0.75),
        new THREE.Vector2(lathe.x + lathe.xOffset, lathe.y + lathe.yOffset),
        new THREE.Vector2(lathe.xInt, lathe.yInt)
      ];

      geoArray.push(
        <mesh
          key={index}
          ref={latheRef}
          position={[lathe.position.x, lathe.position.y, lathe.position.z]}
          rotation={[lathe.rotation.x, lathe.rotation.y, lathe.rotation.z]}
        >
          <latheGeometry args={[points, lathe.segments, lathe.phiStart, lathe.phiLength]} />
          <meshLambertMaterial color={'green'} />
        </mesh>
      );
    });
    return geoArray;
  };

  const addLayer = () => {
    setLatheParams((prevParams) => [
      ...prevParams,
      {
        x: 0,
        y: 0,
        xOffset: 0.62,
        yOffset: 0.5,
        xInt: 0,
        yInt: 0.14,
        segments: 100,
        phiStart: 0,
        phiLength: Math.PI * 2,
        position: { x: 0, y: 0, z: 0 },
        rotation: { x: 0, y: 0, z: 0 },
      }
    ]);
    setLayers((prevLayers) => prevLayers + 1);
    setCollapsed((prevCollapsed) => [...prevCollapsed, false]);
  };

  const toggleCollapse = (index) => {
    setCollapsed((prevCollapsed) => {
      const newCollapsed = [...prevCollapsed];
      newCollapsed[index] = !newCollapsed[index];
      return newCollapsed;
    });
  };

  return (
    <>
      <div style={{ position: 'absolute', top: 15, left: 0, padding: '10px', zIndex: 1 }}>
        <div id='addLayer'>
          <label>Layers: </label>
          <input type='number' min={1} max={10} step={1} value={layers} readOnly />
          <button onClick={addLayer}>Add Layer</button>
        </div>
        {latheParams.map((params, index) => (
          <div id='collCont' key={index} style={{ marginBottom: '10px' }}>
            <button onClick={() => toggleCollapse(index)}>
              {collapsed[index] ? 'Expand' : 'Collapse'} Layer {index + 1}
            </button>
            {!collapsed[index] && (
              <form>
                <label>Layer {index + 1} - X: </label>
                <input
                  type='number'
                  min={-10}
                  max={10}
                  step={0.01}
                  value={params.x}
                  onChange={(e) => handleChange(e, index, 'x')}
                />
                <label> Y: </label>
                <input
                  type='number'
                  min={-10}
                  max={10}
                  step={0.01}
                  value={params.y}
                  onChange={(e) => handleChange(e, index, 'y')}
                />
                <label> X Offset: </label>
                <input
                  type='number'
                  min={-10}
                  max={10}
                  step={0.01}
                  value={params.xOffset}
                  onChange={(e) => handleChange(e, index, 'xOffset')}
                />
                <label> Y Offset: </label>
                <input
                  type='number'
                  min={-10}
                  max={10}
                  step={0.01}
                  value={params.yOffset}
                  onChange={(e) => handleChange(e, index, 'yOffset')}
                />
                <label> Segments: </label>
                <input
                  type='number'
                  min={1}
                  max={100}
                  step={1}
                  value={params.segments}
                  onChange={(e) => handleChange(e, index, 'segments')}
                />
                <label> Phi Start: </label>
                <input
                  type='number'
                  min={0}
                  max={Math.PI * 2}
                  step={0.01}
                  value={params.phiStart}
                  onChange={(e) => handleChange(e, index, 'phiStart')}
                />
                <label> Phi Length: </label>
                <input
                  type='number'
                  min={0}
                  max={Math.PI * 2}
                  step={0.01}
                  value={params.phiLength}
                  onChange={(e) => handleChange(e, index, 'phiLength')}
                />
                <label> X Int: </label>
                <input
                  type='number'
                  min={-10}
                  max={10}
                  step={0.01}
                  value={params.xInt}
                  onChange={(e) => handleChange(e, index, 'xInt')}
                />
                <label> Y Int: </label>
                <input
                  type='number'
                  min={-10}
                  max={10}
                  step={0.01}
                  value={params.yInt}
                  onChange={(e) => handleChange(e, index, 'yInt')}
                />
                <label> Position X: </label>
                <input
                  type='number'
                  min={-10}
                  max={10}
                  step={0.01}
                  value={params.position.x}
                  onChange={(e) => handleChange(e, index, 'position', 'x')}
                />
                <label> Position Y: </label>
                <input
                  type='number'
                  min={-10}
                  max={10}
                  step={0.01}
                  value={params.position.y}
                  onChange={(e) => handleChange(e, index, 'position', 'y')}
                />
                <label> Position Z: </label>
                <input
                  type='number'
                  min={-10}
                  max={10}
                  step={0.01}
                  value={params.position.z}
                  onChange={(e) => handleChange(e, index, 'position', 'z')}
                />
                <label> Rotation X: </label>
                <input
                  type='number'
                  min={-Math.PI}
                  max={Math.PI}
                  step={0.01}
                  value={params.rotation.x}
                  onChange={(e) => handleChange(e, index, 'rotation', 'x')}
                />
                <label> Rotation Y: </label>
                <input
                  type='number'
                  min={-Math.PI}
                  max={Math.PI}
                  step={0.01}
                  value={params.rotation.y}
                  onChange={(e) => handleChange(e, index, 'rotation', 'y')}
                />
                <label> Rotation Z: </label>
                <input
                  type='number'
                  min={-Math.PI}
                  max={Math.PI}
                  step={0.01}
                  value={params.rotation.z}
                  onChange={(e) => handleChange(e, index, 'rotation', 'z')}
                />
              </form>
            )}
          </div>
        ))}
      </div>
      <Canvas style={{ width: '100vw', height: '95vh', backgroundColor: 'black' }}>
        <ambientLight intensity={1} />
        <directionalLight intensity={10} castShadow position={[2, 1, 5]} shadow-mapSize={[1024, 1024]} />
        {generateLatheLayers()}
        <Cylinder position={[0, 0.1, 0]} args={[0.7, 0.7, 0.01]}>
          <meshLambertMaterial color={'green'} />
        </Cylinder>
        <OrbitControls />
      </Canvas>
    </>
  );
};

export default TCFlower2;
