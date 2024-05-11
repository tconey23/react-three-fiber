import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { CycleRaycast, OrbitControls, Sphere, Cylinder, OrthographicCamera } from '@react-three/drei';
import * as THREE from 'three';
import ProcLeaf from './ProcLeaf';
import './App.css';
import AddShape from './AddShape';
import ShapeMenu from './ShapeMenu';



function App() {
  const [shapes, setShapes] = useState([]);
  const [shapeMenu, setShapeMenu] = useState('')


  useEffect(() => {
    setShapeMenu('')
    console.log(shapes)
  }, [shapes])

  const showShapeMenu = (type) => {
    setShapeMenu(type)
  }

  const handleAddShape = (shape) => {
    setShapes(prevShapes => [...prevShapes, shape]);
};


  const addShape = (type, size, position) => {

      const newShape = {
          id: shapes.length, // Simple ID based on length (not ideal for production)
          type,
          size,
          position
      };
      setShapes([...shapes, newShape]);
  };

  return (
    <div style={{ height: '97vh', width: '98vw', background: 'black' }}>
      <div>
        <button onClick={() => showShapeMenu('cylinder')}>Add Cylinder</button>
        <button onClick={() => addShape('sphere', 1, [2, 0, 0])}>Add Sphere</button>
        <button onClick={() => addShape('cone', 1, [-2, 0, 0])}>Add Cone</button>
      </div>
      {shapeMenu && <ShapeMenu type={{ shapeMenu: shapeMenu }} onAddShape={handleAddShape} />}
      <Canvas>
       <OrthographicCamera />
        <ambientLight intensity={1} />
        <directionalLight intensity={10} castShadow position={[0, 5, 0]} shadow-mapSize={[1024, 1024]}></directionalLight>
        {/* <ProcLeaf extrudeSettings={extrudeSettings} heartShape={heartShape} scale={scale}/> */}
        <AddShape shapes={shapes}/>
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default App;
