import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import ProcLeaf from './ProcLeaf';
import './App.css';

const createInitialHeartShape = () => {
  const shape = new THREE.Shape();
  shape.moveTo(25, 25);
  shape.bezierCurveTo(25, 25, 20, 0, 0, 0);
  shape.bezierCurveTo(-30, 0, -30, 35, -30, 35);
  shape.bezierCurveTo(-30, 55, -10, 77, 25, 95);
  shape.bezierCurveTo(60, 77, 80, 55, 80, 35);
  shape.bezierCurveTo(80, 35, 80, 0, 50, 0);
  shape.bezierCurveTo(35, 0, 25, 25, 25, 25);
  return shape;
};

function Sliders() {
  const [heartShape, setHeartShape] = useState(createInitialHeartShape());
  const [extrudeSettings, setExtrudeSettings] = useState({
    depth: 0.01,
    bevelEnabled: true,
    bevelSegments: 500,
    steps: 20,
    bevelSize: 10,
    bevelThickness: 1
  });
  const [inputs, setInputs] = useState([]);

  // Function to handle changes in extrude settings
  const handleExtrudeChange = (property, value) => {
    setExtrudeSettings(prevSettings => ({
      ...prevSettings,
      [property]: parseFloat(value)
    }));
  };

  // Function to handle changes in heart shape based on input
  const handleInputChange = (event, curveIndex, controlIndex, axis) => {
    const newCurves = [...heartShape.curves];
    const curve = newCurves[curveIndex];
    if (curve && curve.isCubicBezierCurve) {
      curve['v' + controlIndex][axis] = parseFloat(event.target.value);
      const updatedShape = new THREE.Shape();
      updatedShape.moveTo(25, 25); // Ensure starting point
      newCurves.forEach(c => updatedShape.curves.push(c));
      setHeartShape(updatedShape);
    }
  };

  // Generate input controls for manipulating heart shape
  const createInputs = () => {
    const curves = heartShape.curves;
    const curveInputs = curves.map((curve, index) => (
      ['x', 'y'].map((axis, controlIndex) => (
        <form key={`${index}-${controlIndex}-${axis}`}>
          <label>{axis.toUpperCase()}:</label>
          <input
            type="range"
            step="0.1"
            min="-500"
            max="500"
            defaultValue={curve['v' + controlIndex][axis]}
            onChange={(event) => handleInputChange(event, index, controlIndex, axis)}
          />
          <span className="value-display">{curve['v' + controlIndex][axis]}</span>
        </form>
      ))
    ));
    setInputs(curveInputs.flat());
  };

  useEffect(() => {
    createInputs();
  }, [heartShape]);

  return (
    <div style={{ height: '968px', width: '98vw', background: 'black' }}>
      <div id="formContainer">
        <div id="inputContainer">
          {inputs}
          <div>
            <label>Depth:</label>
            <input type="range" min="0" max="100" step="1"
              value={extrudeSettings.depth}
              onChange={(e) => handleExtrudeChange('depth', e.target.value)} />
            {extrudeSettings.depth}
          </div>
          <div>
            <label>Bevel Size:</label>
            <input type="range" min="0" max="20" step="0.1"
              value={extrudeSettings.bevelSize}
              onChange={(e) => handleExtrudeChange('bevelSize', e.target.value)} />
            {extrudeSettings.bevelSize}
          </div>
          <div>
            <label>Bevel Thickness:</label>
            <input type="range" min="0" max="5" step="0.1"
              value={extrudeSettings.bevelThickness}
              onChange={(e) => handleExtrudeChange('bevelThickness', e.target.value)} />
            {extrudeSettings.bevelThickness}
          </div>
        </div>
      </div>
      <Canvas>
        <directionalLight intensity={10} castShadow position={[0, 5, 0]} shadow-mapSize={[1024, 1024]}></directionalLight>
        <ProcLeaf extrudeSettings={extrudeSettings} heartShape={heartShape} />
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default Sliders;
