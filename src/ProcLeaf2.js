import React, { useRef, useState, useEffect  } from 'react';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import Sliders from './Sliders'
import { OrbitControls } from '@react-three/drei';

function ProcLeaf2({ rotationX = 0, rotationY = 0, rotationZ = 0, scale = [0.25, 0.25, 0.25], leafDimensions, ...props }) {

  const leafRef1 = useRef();
  const leafRef2 = useRef();
  const leafRef3 = useRef();
  const leafRef4 = useRef();
  const leafRef5 = useRef();
  const leafRef6 = useRef();
  const leafRef7 = useRef();
  const leafRef8 = useRef();
  const leafRef9 = useRef();
  const leafRef10 = useRef();
  const leafRef11 = useRef();
  const leafRef12 = useRef();
  const leafRef13 = useRef();
  const leafRef14 = useRef();
  const leafRef15 = useRef();
  const leafRef16 = useRef();
  const leafRef17 = useRef();
  const leafRef18 = useRef();
  const leafRef19 = useRef();
  const leafRef20 = useRef();
  const leafRef21 = useRef();
  const leafRef22 = useRef();
  const leafRef23 = useRef();
  const leafRef24 = useRef();
  const leafRef25 = useRef();
  const leafRef26 = useRef();
  const leafRef27 = useRef();
  const leafRef28 = useRef();
  const leafRef29 = useRef();
  const leafRef30 = useRef();
  const leafRef31 = useRef();
  const leafRef32 = useRef();
  const leafRef33 = useRef();
  const leafRef34 = useRef();
  const leafRef35 = useRef();
  const leafRef36 = useRef();
  const leafRef37 = useRef();
  const leafRef38 = useRef();
  const leafRef39 = useRef();
  const leafRef40 = useRef();

  useFrame(() => {
    // leafRef1.current.rotation.y += 0.01;
    // leafRef2.current.rotation.y -= 0.01;
    // leafRef3.current.rotation.y += 0.01;
    // leafRef4.current.rotation.y -= 0.01;
    // leafRef5.current.rotation.y += 0.01;
    // leafRef6.current.rotation.y -= 0.01;
    // leafRef7.current.rotation.y += 0.01;
    // leafRef8.current.rotation.y -= 0.01;
    // leafRef9.current.rotation.y += 0.01;
    // leafRef10.current.rotation.y -= 0.01;
    // leafRef11.current.rotation.y += 0.01;
    // leafRef12.current.rotation.y -= 0.01;
    // leafRef13.current.rotation.y += 0.01;
    // leafRef14.current.rotation.y -= 0.01;
    // leafRef15.current.rotation.y += 0.01;
    // leafRef16.current.rotation.y -= 0.01;
    // leafRef17.current.rotation.y += 0.01;
    // leafRef18.current.rotation.y -= 0.01;
    // leafRef19.current.rotation.y += 0.01;
    // leafRef20.current.rotation.y -= 0.01;
  });

  const leafShape = new THREE.Shape()
  const leafShape2 = new THREE.Shape()
  const leafShape3 = new THREE.Shape()
  const leafShape4 = new THREE.Shape()
  const leafShape5 = new THREE.Shape()
  const leafShape6 = new THREE.Shape()
  const leafShape7 = new THREE.Shape()
  const leafShape8 = new THREE.Shape()
  const leafShape9 = new THREE.Shape()
  const leafShape10 = new THREE.Shape()
  const leafShape11 = new THREE.Shape()
  const leafShape12 = new THREE.Shape()
  const leafShape13 = new THREE.Shape()
  const leafShape14 = new THREE.Shape()
  const leafShape15 = new THREE.Shape()
  const leafShape16 = new THREE.Shape()
  const leafShape17 = new THREE.Shape()
  const leafShape18 = new THREE.Shape()
  const leafShape19 = new THREE.Shape()
  const leafShape20 = new THREE.Shape()
  const leafShape21 = new THREE.Shape()
  const leafShape22 = new THREE.Shape()
  const leafShape23 = new THREE.Shape()
  const leafShape24 = new THREE.Shape()
  const leafShape25 = new THREE.Shape()
  const leafShape26 = new THREE.Shape()
  const leafShape27 = new THREE.Shape()
  const leafShape28 = new THREE.Shape()
  const leafShape29 = new THREE.Shape()
  const leafShape30 = new THREE.Shape()
  const leafShape31 = new THREE.Shape()
  const leafShape32 = new THREE.Shape()
  const leafShape33 = new THREE.Shape()
  const leafShape34 = new THREE.Shape()
  const leafShape35 = new THREE.Shape()
  const leafShape36 = new THREE.Shape()
  const leafShape37 = new THREE.Shape()
  const leafShape38 = new THREE.Shape()
  const leafShape39 = new THREE.Shape()
  const leafShape40 = new THREE.Shape()
  // leafShape.moveTo(0, 0);
  // leafShape2.moveTo(0, 0);
  // leafShape3.moveTo(0, 0);
  // leafShape4.moveTo(0, 0);
  // leafShape5.moveTo(0, 0);
  // leafShape6.moveTo(0, 0);
  // leafShape7.moveTo(0, 0);
  // leafShape8.moveTo(0, 0);
  // leafShape9.moveTo(0, 0);
  // leafShape10.moveTo(0, 0);
  leafShape.quadraticCurveTo(leafDimensions.d1,leafDimensions.d2,leafDimensions.d3,leafDimensions.d4)
  leafShape2.quadraticCurveTo(leafDimensions.d1,leafDimensions.d2,leafDimensions.d3,leafDimensions.d4)
  leafShape3.quadraticCurveTo(leafDimensions.d1,leafDimensions.d2,leafDimensions.d3,leafDimensions.d4)
  leafShape4.quadraticCurveTo(leafDimensions.d1,leafDimensions.d2,leafDimensions.d3,leafDimensions.d4)
  leafShape5.quadraticCurveTo(leafDimensions.d1,leafDimensions.d2,leafDimensions.d3,leafDimensions.d4)
  leafShape6.quadraticCurveTo(leafDimensions.d1,leafDimensions.d2,leafDimensions.d3,leafDimensions.d4)
  leafShape7.quadraticCurveTo(leafDimensions.d1,leafDimensions.d2,leafDimensions.d3,leafDimensions.d4)
  leafShape8.quadraticCurveTo(leafDimensions.d1,leafDimensions.d2,leafDimensions.d3,leafDimensions.d4)
  leafShape9.quadraticCurveTo(leafDimensions.d1,leafDimensions.d2,leafDimensions.d3,leafDimensions.d4)
  leafShape10.quadraticCurveTo(leafDimensions.d1,leafDimensions.d2,leafDimensions.d3,leafDimensions.d4)
  leafShape11.quadraticCurveTo(leafDimensions.d1,leafDimensions.d2,leafDimensions.d3,leafDimensions.d4)
  leafShape12.quadraticCurveTo(leafDimensions.d1,leafDimensions.d2,leafDimensions.d3,leafDimensions.d4)
  leafShape13.quadraticCurveTo(leafDimensions.d1,leafDimensions.d2,leafDimensions.d3,leafDimensions.d4)
  leafShape14.quadraticCurveTo(leafDimensions.d1,leafDimensions.d2,leafDimensions.d3,leafDimensions.d4)
  leafShape15.quadraticCurveTo(leafDimensions.d1,leafDimensions.d2,leafDimensions.d3,leafDimensions.d4)
  leafShape16.quadraticCurveTo(leafDimensions.d1,leafDimensions.d2,leafDimensions.d3,leafDimensions.d4)
  leafShape17.quadraticCurveTo(leafDimensions.d1,leafDimensions.d2,leafDimensions.d3,leafDimensions.d4)
  leafShape18.quadraticCurveTo(leafDimensions.d1,leafDimensions.d2,leafDimensions.d3,leafDimensions.d4)
  leafShape19.quadraticCurveTo(leafDimensions.d1,leafDimensions.d2,leafDimensions.d3,leafDimensions.d4)
  leafShape20.quadraticCurveTo(leafDimensions.d1,leafDimensions.d2,leafDimensions.d3,leafDimensions.d4)
  leafShape21.quadraticCurveTo(leafDimensions.d1,leafDimensions.d2,leafDimensions.d3,leafDimensions.d4)
  leafShape22.quadraticCurveTo(leafDimensions.d1,leafDimensions.d2,leafDimensions.d3,leafDimensions.d4)
  leafShape23.quadraticCurveTo(leafDimensions.d1,leafDimensions.d2,leafDimensions.d3,leafDimensions.d4)
  leafShape24.quadraticCurveTo(leafDimensions.d1,leafDimensions.d2,leafDimensions.d3,leafDimensions.d4)
  leafShape25.quadraticCurveTo(leafDimensions.d1,leafDimensions.d2,leafDimensions.d3,leafDimensions.d4)
  leafShape26.quadraticCurveTo(leafDimensions.d1,leafDimensions.d2,leafDimensions.d3,leafDimensions.d4)
  leafShape27.quadraticCurveTo(leafDimensions.d1,leafDimensions.d2,leafDimensions.d3,leafDimensions.d4)
  leafShape28.quadraticCurveTo(leafDimensions.d1,leafDimensions.d2,leafDimensions.d3,leafDimensions.d4)
  leafShape29.quadraticCurveTo(leafDimensions.d1,leafDimensions.d2,leafDimensions.d3,leafDimensions.d4)
  leafShape30.quadraticCurveTo(leafDimensions.d1,leafDimensions.d2,leafDimensions.d3,leafDimensions.d4)
  leafShape31.quadraticCurveTo(leafDimensions.d1,leafDimensions.d2,leafDimensions.d3,leafDimensions.d4)
  leafShape32.quadraticCurveTo(leafDimensions.d1,leafDimensions.d2,leafDimensions.d3,leafDimensions.d4)
  leafShape33.quadraticCurveTo(leafDimensions.d1,leafDimensions.d2,leafDimensions.d3,leafDimensions.d4)
  leafShape34.quadraticCurveTo(leafDimensions.d1,leafDimensions.d2,leafDimensions.d3,leafDimensions.d4)
  leafShape35.quadraticCurveTo(leafDimensions.d1,leafDimensions.d2,leafDimensions.d3,leafDimensions.d4)
  leafShape36.quadraticCurveTo(leafDimensions.d1,leafDimensions.d2,leafDimensions.d3,leafDimensions.d4)
  leafShape37.quadraticCurveTo(leafDimensions.d1,leafDimensions.d2,leafDimensions.d3,leafDimensions.d4)
  leafShape38.quadraticCurveTo(leafDimensions.d1,leafDimensions.d2,leafDimensions.d3,leafDimensions.d4)
  leafShape39.quadraticCurveTo(leafDimensions.d1,leafDimensions.d2,leafDimensions.d3,leafDimensions.d4)
  leafShape40.quadraticCurveTo(leafDimensions.d1,leafDimensions.d2,leafDimensions.d3,leafDimensions.d4)

  const leafGeometry = new THREE.ExtrudeGeometry(leafShape, {
    steps: 15,
    depth: .2,
    bevelEnabled: true,
    bevelSize: 0,
    bevelOffset: 0,
    bevelSegments: 0,
    bevelThickness: 0
  });

  const leafGeometry2 = new THREE.ExtrudeGeometry(leafShape2, {
      steps: 15,
      depth: .2,
      bevelEnabled: true,
      bevelSize: 0,
      bevelOffset: 0,
      bevelSegments: 0,
      bevelThickness: 0
  });
  const leafGeometry3 = new THREE.ExtrudeGeometry(leafShape2, {
      steps: 15,
      depth: .2,
      bevelEnabled: true,
      bevelSize: 0,
      bevelOffset: 0,
      bevelSegments: 0,
      bevelThickness: 0
  });
  const leafGeometry4 = new THREE.ExtrudeGeometry(leafShape2, {
      steps: 15,
      depth: .2,
      bevelEnabled: true,
      bevelSize: 0,
      bevelOffset: 0,
      bevelSegments: 0,
      bevelThickness: 0
  });

  const leafGeometry5 = new THREE.ExtrudeGeometry(leafShape, {
    steps: 15,
    depth: .2,
    bevelEnabled: true,
    bevelSize: 0,
    bevelOffset: 0,
    bevelSegments: 0,
    bevelThickness: 0
  });

  const leafGeometry6 = new THREE.ExtrudeGeometry(leafShape2, {
      steps: 15,
      depth: .2,
      bevelEnabled: true,
      bevelSize: 0,
      bevelOffset: 0,
      bevelSegments: 0,
      bevelThickness: 0
  });
  const leafGeometry7 = new THREE.ExtrudeGeometry(leafShape2, {
      steps: 15,
      depth: .2,
      bevelEnabled: true,
      bevelSize: 0,
      bevelOffset: 0,
      bevelSegments: 0,
      bevelThickness: 0
  });
  const leafGeometry8 = new THREE.ExtrudeGeometry(leafShape2, {
      steps: 15,
      depth: .2,
      bevelEnabled: true,
      bevelSize: 0,
      bevelOffset: 0,
      bevelSegments: 0,
      bevelThickness: 0
  });
  const leafGeometry9 = new THREE.ExtrudeGeometry(leafShape2, {
    steps: 15,
    depth: .2,
    bevelEnabled: true,
    bevelSize: 0,
    bevelOffset: 0,
    bevelSegments: 0,
    bevelThickness: 0
});
const leafGeometry10 = new THREE.ExtrudeGeometry(leafShape2, {
    steps: 15,
    depth: .2,
    bevelEnabled: true,
    bevelSize: 0,
    bevelOffset: 0,
    bevelSegments: 0,
    bevelThickness: 0
});
const leafGeometry11 = new THREE.ExtrudeGeometry(leafShape, {
  steps: 15,
  depth: .2,
  bevelEnabled: true,
  bevelSize: 0,
  bevelOffset: 0,
  bevelSegments: 0,
  bevelThickness: 0
});

const leafGeometry12 = new THREE.ExtrudeGeometry(leafShape2, {
    steps: 15,
    depth: .2,
    bevelEnabled: true,
    bevelSize: 0,
    bevelOffset: 0,
    bevelSegments: 0,
    bevelThickness: 0
});
const leafGeometry13 = new THREE.ExtrudeGeometry(leafShape2, {
    steps: 15,
    depth: .2,
    bevelEnabled: true,
    bevelSize: 0,
    bevelOffset: 0,
    bevelSegments: 0,
    bevelThickness: 0
});
const leafGeometry14 = new THREE.ExtrudeGeometry(leafShape2, {
    steps: 15,
    depth: .2,
    bevelEnabled: true,
    bevelSize: 0,
    bevelOffset: 0,
    bevelSegments: 0,
    bevelThickness: 0
});

const leafGeometry15 = new THREE.ExtrudeGeometry(leafShape, {
  steps: 15,
  depth: .2,
  bevelEnabled: true,
  bevelSize: 0,
  bevelOffset: 0,
  bevelSegments: 0,
  bevelThickness: 0
});

const leafGeometry16 = new THREE.ExtrudeGeometry(leafShape2, {
    steps: 15,
    depth: .2,
    bevelEnabled: true,
    bevelSize: 0,
    bevelOffset: 0,
    bevelSegments: 0,
    bevelThickness: 0
});
const leafGeometry17 = new THREE.ExtrudeGeometry(leafShape2, {
    steps: 15,
    depth: .2,
    bevelEnabled: true,
    bevelSize: 0,
    bevelOffset: 0,
    bevelSegments: 0,
    bevelThickness: 0
});
const leafGeometry18 = new THREE.ExtrudeGeometry(leafShape2, {
    steps: 15,
    depth: .2,
    bevelEnabled: true,
    bevelSize: 0,
    bevelOffset: 0,
    bevelSegments: 0,
    bevelThickness: 0
});
const leafGeometry19 = new THREE.ExtrudeGeometry(leafShape2, {
  steps: 15,
  depth: .2,
  bevelEnabled: true,
  bevelSize: 0,
  bevelOffset: 0,
  bevelSegments: 0,
  bevelThickness: 0
});
const leafGeometry20 = new THREE.ExtrudeGeometry(leafShape2, {
  steps: 15,
  depth: .2,
  bevelEnabled: true,
  bevelSize: 0,
  bevelOffset: 0,
  bevelSegments: 0,
  bevelThickness: 0
});
const leafGeometry21 = new THREE.ExtrudeGeometry(leafShape, {
  steps: 15,
  depth: .2,
  bevelEnabled: true,
  bevelSize: 0,
  bevelOffset: 0,
  bevelSegments: 0,
  bevelThickness: 0
});

const leafGeometry22 = new THREE.ExtrudeGeometry(leafShape2, {
    steps: 15,
    depth: .2,
    bevelEnabled: true,
    bevelSize: 0,
    bevelOffset: 0,
    bevelSegments: 0,
    bevelThickness: 0
});
const leafGeometry23 = new THREE.ExtrudeGeometry(leafShape2, {
    steps: 15,
    depth: .2,
    bevelEnabled: true,
    bevelSize: 0,
    bevelOffset: 0,
    bevelSegments: 0,
    bevelThickness: 0
});
const leafGeometry24 = new THREE.ExtrudeGeometry(leafShape2, {
    steps: 15,
    depth: .2,
    bevelEnabled: true,
    bevelSize: 0,
    bevelOffset: 0,
    bevelSegments: 0,
    bevelThickness: 0
});

const leafGeometry25 = new THREE.ExtrudeGeometry(leafShape, {
  steps: 15,
  depth: .2,
  bevelEnabled: true,
  bevelSize: 0,
  bevelOffset: 0,
  bevelSegments: 0,
  bevelThickness: 0
});

const leafGeometry26 = new THREE.ExtrudeGeometry(leafShape2, {
    steps: 15,
    depth: .2,
    bevelEnabled: true,
    bevelSize: 0,
    bevelOffset: 0,
    bevelSegments: 0,
    bevelThickness: 0
});
const leafGeometry27 = new THREE.ExtrudeGeometry(leafShape2, {
    steps: 15,
    depth: .2,
    bevelEnabled: true,
    bevelSize: 0,
    bevelOffset: 0,
    bevelSegments: 0,
    bevelThickness: 0
});
const leafGeometry28 = new THREE.ExtrudeGeometry(leafShape2, {
    steps: 15,
    depth: .2,
    bevelEnabled: true,
    bevelSize: 0,
    bevelOffset: 0,
    bevelSegments: 0,
    bevelThickness: 0
});
const leafGeometry29 = new THREE.ExtrudeGeometry(leafShape2, {
  steps: 15,
  depth: .2,
  bevelEnabled: true,
  bevelSize: 0,
  bevelOffset: 0,
  bevelSegments: 0,
  bevelThickness: 0
});
const leafGeometry30 = new THREE.ExtrudeGeometry(leafShape2, {
  steps: 15,
  depth: .2,
  bevelEnabled: true,
  bevelSize: 0,
  bevelOffset: 0,
  bevelSegments: 0,
  bevelThickness: 0
});
const leafGeometry31 = new THREE.ExtrudeGeometry(leafShape, {
steps: 15,
depth: .2,
bevelEnabled: true,
bevelSize: 0,
bevelOffset: 0,
bevelSegments: 0,
bevelThickness: 0
});

const leafGeometry32 = new THREE.ExtrudeGeometry(leafShape2, {
  steps: 15,
  depth: .2,
  bevelEnabled: true,
  bevelSize: 0,
  bevelOffset: 0,
  bevelSegments: 0,
  bevelThickness: 0
});
const leafGeometry33 = new THREE.ExtrudeGeometry(leafShape2, {
  steps: 15,
  depth: .2,
  bevelEnabled: true,
  bevelSize: 0,
  bevelOffset: 0,
  bevelSegments: 0,
  bevelThickness: 0
});
const leafGeometry34 = new THREE.ExtrudeGeometry(leafShape2, {
  steps: 15,
  depth: .2,
  bevelEnabled: true,
  bevelSize: 0,
  bevelOffset: 0,
  bevelSegments: 0,
  bevelThickness: 0
});

const leafGeometry35 = new THREE.ExtrudeGeometry(leafShape, {
steps: 15,
depth: .2,
bevelEnabled: true,
bevelSize: 0,
bevelOffset: 0,
bevelSegments: 0,
bevelThickness: 0
});

const leafGeometry36 = new THREE.ExtrudeGeometry(leafShape2, {
  steps: 15,
  depth: .2,
  bevelEnabled: true,
  bevelSize: 0,
  bevelOffset: 0,
  bevelSegments: 0,
  bevelThickness: 0
});
const leafGeometry37 = new THREE.ExtrudeGeometry(leafShape2, {
  steps: 15,
  depth: .2,
  bevelEnabled: true,
  bevelSize: 0,
  bevelOffset: 0,
  bevelSegments: 0,
  bevelThickness: 0
});
const leafGeometry38 = new THREE.ExtrudeGeometry(leafShape2, {
  steps: 15,
  depth: .2,
  bevelEnabled: true,
  bevelSize: 0,
  bevelOffset: 0,
  bevelSegments: 0,
  bevelThickness: 0
});
const leafGeometry39 = new THREE.ExtrudeGeometry(leafShape2, {
steps: 15,
depth: .2,
bevelEnabled: true,
bevelSize: 0,
bevelOffset: 0,
bevelSegments: 0,
bevelThickness: 0
});
const leafGeometry40 = new THREE.ExtrudeGeometry(leafShape2, {
steps: 15,
depth: .2,
bevelEnabled: true,
bevelSize: 0,
bevelOffset: 0,
bevelSegments: 0,
bevelThickness: 0
});

//   const leafGeometry2 = new THREE.ExtrudeGeometry(leafShape2, {
//     steps: leafDimensions.d5,
//       depth: leafDimensions.d6,
//       bevelEnabled: true,
//       bevelSize: leafDimensions.d7,
//       bevelOffset: leafDimensions.d8,
//       bevelSegments: leafDimensions.d9,
//       bevelThickness: leafDimensions.d10
// });

  return (
    <>         
        <ambientLight intensity={1} />
        <directionalLight position={[10, 10, 10]} intensity={1} />
        <spotLight position={[10, 10, 10]} angle={0.25} penumbra={1} />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls />
          <group>
          <mesh ref={leafRef1} {...props} rotation={[rotationX, rotationY, rotationZ]} scale={scale}>
            <bufferGeometry attach="geometry" {...leafGeometry} />
            <meshStandardMaterial color="green" />
          </mesh>
          <mesh ref={leafRef2} {...props} rotation={[rotationX+10, rotationY +10, rotationZ+10]} scale={scale}>
            <bufferGeometry attach="geometry" {...leafGeometry2} />
            <meshStandardMaterial color="green" />
          </mesh>
          <mesh ref={leafRef3} {...props} rotation={[rotationX+20, rotationY +20, rotationZ+20]} scale={scale}>
            <bufferGeometry attach="geometry" {...leafGeometry3} />
            <meshStandardMaterial color="green" />
          </mesh>
          <mesh ref={leafRef4} {...props} rotation={[rotationX+30, rotationY +30, rotationZ+30]} scale={scale}>
            <bufferGeometry attach="geometry" {...leafGeometry4} />
            <meshStandardMaterial color="green" />
          </mesh>
          <mesh ref={leafRef5} {...props} rotation={[rotationX+40, rotationY +40, rotationZ+40]} scale={scale}>
            <bufferGeometry attach="geometry" {...leafGeometry5} />
            <meshStandardMaterial color="green" />
          </mesh>
          <mesh ref={leafRef6} {...props} rotation={[rotationX+50, rotationY +50, rotationZ+50]} scale={scale}>
            <bufferGeometry attach="geometry" {...leafGeometry6} />
            <meshStandardMaterial color="green" />
          </mesh>
          <mesh ref={leafRef7} {...props} rotation={[rotationX+60, rotationY +60, rotationZ+60]} scale={scale}>
            <bufferGeometry attach="geometry" {...leafGeometry7} />
            <meshStandardMaterial color="green" />
          </mesh>
          <mesh ref={leafRef8} {...props} rotation={[rotationX+70, rotationY +70, rotationZ+70]} scale={scale}>
            <bufferGeometry attach="geometry" {...leafGeometry8} />
            <meshStandardMaterial color="green" />
          </mesh>
          <mesh ref={leafRef9} {...props} rotation={[rotationX+80, rotationY +80, rotationZ+80]} scale={scale}>
            <bufferGeometry attach="geometry" {...leafGeometry9} />
            <meshStandardMaterial color="green" />
          </mesh>
          <mesh ref={leafRef10} {...props} rotation={[rotationX+90, rotationY +90, rotationZ+90]} scale={scale}>
            <bufferGeometry attach="geometry" {...leafGeometry10} />
            <meshStandardMaterial color="green" />
          </mesh>
          <mesh ref={leafRef11} {...props} rotation={[rotationX+100, rotationY +100, rotationZ+100]} scale={scale}>
            <bufferGeometry attach="geometry" {...leafGeometry11} />
            <meshStandardMaterial color="green" />
          </mesh>
          <mesh ref={leafRef12} {...props} rotation={[rotationX+110, rotationY +110, rotationZ+110]} scale={scale}>
            <bufferGeometry attach="geometry" {...leafGeometry12} />
            <meshStandardMaterial color="green" />
          </mesh>
          <mesh ref={leafRef13} {...props} rotation={[rotationX+120, rotationY +120, rotationZ+120]} scale={scale}>
            <bufferGeometry attach="geometry" {...leafGeometry13} />
            <meshStandardMaterial color="green" />
          </mesh>
          <mesh ref={leafRef14} {...props} rotation={[rotationX+130, rotationY +130, rotationZ+130]} scale={scale}>
            <bufferGeometry attach="geometry" {...leafGeometry14} />
            <meshStandardMaterial color="green" />
          </mesh>
          <mesh ref={leafRef15} {...props} rotation={[rotationX+140, rotationY +140, rotationZ+140]} scale={scale}>
            <bufferGeometry attach="geometry" {...leafGeometry15} />
            <meshStandardMaterial color="green" />
          </mesh>
          <mesh ref={leafRef16} {...props} rotation={[rotationX+150, rotationY +150, rotationZ+150]} scale={scale}>
            <bufferGeometry attach="geometry" {...leafGeometry16} />
            <meshStandardMaterial color="green" />
          </mesh>
          <mesh ref={leafRef17} {...props} rotation={[rotationX+160, rotationY +160, rotationZ+160]} scale={scale}>
            <bufferGeometry attach="geometry" {...leafGeometry17} />
            <meshStandardMaterial color="green" />
          </mesh>
          <mesh ref={leafRef18} {...props} rotation={[rotationX+170, rotationY +170, rotationZ+170]} scale={scale}>
            <bufferGeometry attach="geometry" {...leafGeometry18} />
            <meshStandardMaterial color="green" />
          </mesh>
          <mesh ref={leafRef19} {...props} rotation={[rotationX+180, rotationY +180, rotationZ+180]} scale={scale}>
            <bufferGeometry attach="geometry" {...leafGeometry19} />
            <meshStandardMaterial color="green" />
          </mesh>
          <mesh ref={leafRef20} {...props} rotation={[rotationX+190, rotationY +190, rotationZ+190]} scale={scale}>
            <bufferGeometry attach="geometry" {...leafGeometry20} />
            <meshStandardMaterial color="green" />
          </mesh>
          <mesh ref={leafRef21} {...props} rotation={[rotationX+200, rotationY +200, rotationZ+200]} scale={scale}>
            <bufferGeometry attach="geometry" {...leafGeometry} />
            <meshStandardMaterial color="green" />
          </mesh>
          <mesh ref={leafRef22} {...props} rotation={[rotationX+210, rotationY +210, rotationZ+210]} scale={scale}>
            <bufferGeometry attach="geometry" {...leafGeometry2} />
            <meshStandardMaterial color="green" />
          </mesh>
          <mesh ref={leafRef23} {...props} rotation={[rotationX+220, rotationY +220, rotationZ+220]} scale={scale}>
            <bufferGeometry attach="geometry" {...leafGeometry3} />
            <meshStandardMaterial color="green" />
          </mesh>
          <mesh ref={leafRef24} {...props} rotation={[rotationX+230, rotationY +230, rotationZ+230]} scale={scale}>
            <bufferGeometry attach="geometry" {...leafGeometry4} />
            <meshStandardMaterial color="green" />
          </mesh>
          <mesh ref={leafRef25} {...props} rotation={[rotationX+240, rotationY +240, rotationZ+240]} scale={scale}>
            <bufferGeometry attach="geometry" {...leafGeometry5} />
            <meshStandardMaterial color="green" />
          </mesh>
          <mesh ref={leafRef26} {...props} rotation={[rotationX+250, rotationY +250, rotationZ+250]} scale={scale}>
            <bufferGeometry attach="geometry" {...leafGeometry6} />
            <meshStandardMaterial color="green" />
          </mesh>
          <mesh ref={leafRef27} {...props} rotation={[rotationX+260, rotationY +260, rotationZ+260]} scale={scale}>
            <bufferGeometry attach="geometry" {...leafGeometry7} />
            <meshStandardMaterial color="green" />
          </mesh>
          <mesh ref={leafRef28} {...props} rotation={[rotationX+270, rotationY +270, rotationZ+270]} scale={scale}>
            <bufferGeometry attach="geometry" {...leafGeometry8} />
            <meshStandardMaterial color="green" />
          </mesh>
          <mesh ref={leafRef29} {...props} rotation={[rotationX+280, rotationY +280, rotationZ+280]} scale={scale}>
            <bufferGeometry attach="geometry" {...leafGeometry9} />
            <meshStandardMaterial color="green" />
          </mesh>
          <mesh ref={leafRef30} {...props} rotation={[rotationX+290, rotationY +290, rotationZ+290]} scale={scale}>
            <bufferGeometry attach="geometry" {...leafGeometry10} />
            <meshStandardMaterial color="green" />
          </mesh>
          <mesh ref={leafRef31} {...props} rotation={[rotationX+300, rotationY +300, rotationZ+300]} scale={scale}>
            <bufferGeometry attach="geometry" {...leafGeometry11} />
            <meshStandardMaterial color="green" />
          </mesh>
          <mesh ref={leafRef32} {...props} rotation={[rotationX+310, rotationY +310, rotationZ+310]} scale={scale}>
            <bufferGeometry attach="geometry" {...leafGeometry12} />
            <meshStandardMaterial color="green" />
          </mesh>
          <mesh ref={leafRef33} {...props} rotation={[rotationX+320, rotationY +320, rotationZ+320]} scale={scale}>
            <bufferGeometry attach="geometry" {...leafGeometry13} />
            <meshStandardMaterial color="green" />
          </mesh>
          <mesh ref={leafRef34} {...props} rotation={[rotationX+330, rotationY +330, rotationZ+330]} scale={scale}>
            <bufferGeometry attach="geometry" {...leafGeometry14} />
            <meshStandardMaterial color="green" />
          </mesh>
          <mesh ref={leafRef35} {...props} rotation={[rotationX+340, rotationY +340, rotationZ+340]} scale={scale}>
            <bufferGeometry attach="geometry" {...leafGeometry15} />
            <meshStandardMaterial color="green" />
          </mesh>
          <mesh ref={leafRef36} {...props} rotation={[rotationX+350, rotationY +350, rotationZ+350]} scale={scale}>
            <bufferGeometry attach="geometry" {...leafGeometry16} />
            <meshStandardMaterial color="green" />
          </mesh>
          <mesh ref={leafRef37} {...props} rotation={[rotationX+360, rotationY +360, rotationZ+360]} scale={scale}>
            <bufferGeometry attach="geometry" {...leafGeometry17} />
            <meshStandardMaterial color="green" />
          </mesh>
          <mesh ref={leafRef38} {...props} rotation={[rotationX+370, rotationY +370, rotationZ+370]} scale={scale}>
            <bufferGeometry attach="geometry" {...leafGeometry18} />
            <meshStandardMaterial color="green" />
          </mesh>
          <mesh ref={leafRef39} {...props} rotation={[rotationX+380, rotationY +380, rotationZ+380]} scale={scale}>
            <bufferGeometry attach="geometry" {...leafGeometry19} />
            <meshStandardMaterial color="green" />
          </mesh>
          <mesh ref={leafRef40} {...props} rotation={[rotationX+390, rotationY +390, rotationZ+390]} scale={scale}>
            <bufferGeometry attach="geometry" {...leafGeometry20} />
            <meshStandardMaterial color="green" />
          </mesh>
        </group>
    </>
  );
}

export default ProcLeaf2;
