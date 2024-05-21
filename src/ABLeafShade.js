import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import { OrbitControls, Cylinder } from '@react-three/drei';
import { Noise } from 'noisejs';

function ABLeaf({ rotationX = 0, rotationY = 0, rotationZ = 0, scale = [0.25, 0.25, 0.25], leafDimensions, ...props }) {
    const leafRef = useRef(null);

  return (
    <>
      <ambientLight intensity={1} />
      <directionalLight position={[10, 10, 10]} intensity={1} />
      <spotLight position={[10, 10, 10]} angle={0.25} penumbra={1} />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls />
      <group>
          <mesh>
            <Cylinder 
                ref={leafRef}
                position={[0, 0, 0]}
                rotation={[rotationX, rotationY, rotationZ]}
                scale={scale}
                args={[4, 4, .01, 32]}
                // material={leafShaderMaterial}
            >
            </Cylinder>

          </mesh>
      </group>
    </>
  );
}

export default ABLeaf;


//     const leafShape =  new THREE.Shape();
//     leafShape.quadraticCurveTo(9,9,0,9)

//   const leafGeometry = 
//     new THREE.ExtrudeGeometry(leafShape, {
//       steps: 15,
//       depth: 0.2,
//       bevelEnabled: true,
//       bevelSize: 0,
//       bevelOffset: 0,
//       bevelSegments: 0,
//       bevelThickness: 0
//     })


//     const basicGreen = `
//     varying vec2 vUv;

//     void main() {
//         gl_FragColor = vec4(0.0, 1.0, 0.0, 1.0); // Green color
//     }
// `

    // const leafShaderMaterial = new THREE.ShaderMaterial({
    //     vertexShader: `
    //         varying vec2 vUv;

    //         void main() {
    //             vUv = uv;
    //             gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    //         }
    //     `,
    //     fragmentShader: `
    //         varying vec2 vUv;

    //         void main() {
    //             // Calculate distance from the center of the disc
    //             float dist = distance(vUv, vec2(0.5, 0.5)); // Assuming UV center is at (0.5, 0.5)

    //             // Interpolate color between white and red based on distance
    //             vec3 white = vec3(1.0, 1.0, 1.0);
    //             vec3 red = vec3(1.0, 0.0, 0.0);
    //             vec3 finalColor = mix(white, red, dist);

    //             gl_FragColor = vec4(finalColor, 1);
    //         }
    //     `
    // })