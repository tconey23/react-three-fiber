import { useFrame, useThree } from '@react-three/fiber';
import { useSpring, animated } from '@react-spring/three';
import { useRef } from 'react';


function CameraButton() {
    const { camera } = useThree();
    const cameraRef = useRef(camera);
  
    const [{ zoom, position }, set] = useSpring(() => ({
      zoom: 60,
      position: [-90, 45, 100],
      config: { mass: 1, tension: 170, friction: 26 },
    }));
  
    useFrame(() => {
      cameraRef.current.zoom = zoom.get();
      cameraRef.current.position.set(...position.get());
      cameraRef.current.updateProjectionMatrix();
    });
  
    const animateCamera = () => {
      set({
        zoom: 70,
        position: [0, 45, 100],
      });
    };
  
    return <button onClick={animateCamera} style={{ position: 'absolute', top: '20px', left: '20px', zIndex: 1 }}>Animate Camera</button>;
  }

  export default CameraButton