import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

function ProcLeaf({ rotationX = 0, rotationY = 0, rotationZ = 0, scale = [0.25, 0.25, 0.25], heartShape, onLeafProps, extrudeSettings }) {
  const heartRef = useRef();

  useEffect(() => {
    const heartGeometry = new THREE.ExtrudeGeometry(heartShape, extrudeSettings);
    if (heartRef.current) {
      heartRef.current.geometry.dispose(); // Clean up old geometry
      heartRef.current.geometry = heartGeometry; // Set new geometry
    }

    return () => {
      heartGeometry.dispose(); // Properly dispose of the geometry when component unmounts or dependencies change
    };
  }, [heartShape, extrudeSettings]);

  useEffect(() => {
    if (typeof onLeafProps === 'function') {
      onLeafProps({ rotationX, rotationY, rotationZ, scale, heartShape, extrudeSettings });
    }
  }, [onLeafProps, rotationX, rotationY, rotationZ, scale, heartShape, extrudeSettings]);

  return (
    <mesh ref={heartRef} rotation={[rotationX, rotationY, rotationZ]} scale={scale}>
      <meshPhongMaterial color="green" />
    </mesh>
  );
}

export default ProcLeaf;
