import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import { OrbitControls } from '@react-three/drei';
import { Noise } from 'noisejs';

function ABLeaf({ rotationX = 0, rotationY = 0, rotationZ = 0, scale = [0.25, 0.25, 0.25], leafDimensions, ...props }) {
    const leafRefs = useRef([]);

    const leafShapes = Array.from({ length: 40 }, () => new THREE.Shape());

    let xRotInc = leafDimensions.d9
    let yRotInc = 10 + leafDimensions.d11
    let zRotInc = leafDimensions.d10

    for(var i = 0; i < 40; i++) {
      if(i%2 === 0) {
        leafShapes[i].quadraticCurveTo(leafDimensions.d1,leafDimensions.d2,leafDimensions.d3,leafDimensions.d4)
        yRotInc += 5

      } else {
        leafShapes[i].quadraticCurveTo(leafDimensions.d1,leafDimensions.d2,leafDimensions.d3,leafDimensions.d4)
        yRotInc += 5
      }
    }

  const leafGeometry = new THREE.ExtrudeGeometry(leafShapes[0], {
      steps: 35,
      depth: leafDimensions.d12,
      bevelEnabled: true,
      bevelSize: 0,
      bevelOffset: 0,
      bevelSegments: 0,
      bevelThickness: 0
    })

    // const leafGeometry = 
    // new THREE.CylinderGeometry(leafShapes[0], {
    //   radius: 5,
    //   height: 0.1,
    //   radialSegments: 32,
    //   heightSegments: 1
    // })

     // Create Perlin noise object
     const noise = new Noise();
// Modify vertex positions with Perlin noise
const positions = leafGeometry.getAttribute('position');

    let noiseScale = leafDimensions.d5
    let xNoise = leafDimensions.d6
    let yNoise = leafDimensions.d7
    let zNoise = leafDimensions.d8

for (let i = 0; i < positions.count; i++) {
    const vertex = new THREE.Vector3();
    vertex.fromBufferAttribute(positions, i);

    // You can adjust these parameters to control the amount and scale of the noise
    const noiseValue = noise.simplex3(vertex.x * 0.1, vertex.y * 0.1, vertex.z * 0.1);
    vertex.x += noiseValue * xNoise * noiseScale; // Adjust the amplitude of the noise here
    vertex.y += noiseValue * yNoise * noiseScale;
    vertex.z += noiseValue * zNoise * noiseScale;

    positions.setXYZ(i, vertex.x, vertex.y, vertex.z);
}

positions.needsUpdate = true;


  const leafShaderMaterial = new THREE.ShaderMaterial({
        vertexShader: `
            varying vec2 vUv;

            void main() {
                vUv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `,
        fragmentShader: `
            varying vec2 vUv;

            void main() {
                // Calculate distance from the center of the disc
                float dist = distance(vUv, vec2(0.5, 0.5)); // Assuming UV center is at (0.5, 0.5)

                // Interpolate color between white and red based on distance
                vec3 white = vec3(1.0, 1.0, 1.0);
                vec3 red = vec3(1.0, 0.0, 0.0);
                vec3 finalColor = mix(white, red, dist);

                gl_FragColor = vec4(finalColor, 1);
            }
        `
    })


  return (
    <>
      <ambientLight intensity={1} />
      <directionalLight position={[10, 10, 10]} intensity={1} />
      <spotLight position={[10, 10, 10]} angle={0.25} penumbra={1} />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls />
      <group>
        {Array.from({ length: 26 }, (_, index) => (
          <mesh
            key={index}
            ref={(ref) => (leafRefs.current[index] = ref)}
            {...props}
            rotation={[rotationX + index * xRotInc, rotationY + index * yRotInc, rotationZ + index * zRotInc]}
            scale={scale}
          >
            <bufferGeometry attach="geometry" {...leafGeometry} />
            <meshStandardMaterial
              color={index%2 === 0 ? "orange" : "blue"}
              opacity='.9'
              transparent='true'
              side='THREE.FrontSide'
              // wireframe='true'
              // metalness='1'
              shininess='100'
              // emissive='blue'
              // emissiveIntensity='.5'
              // fog='true'
              />
          </mesh>
        ))}
      </group>
    </>
  );
}

export default ABLeaf;