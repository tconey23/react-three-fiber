import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { OrbitControls, MeshWobbleMaterial } from '@react-three/drei';
import { Noise } from 'noisejs';

function ABLeaf({ rotationX = 0, rotationY = 0, rotationZ = 0, scale = [0.25, 0.25, 0.25], leafDimensions, ...props }) {
    const leafRefs = useRef([]);
    const groupRef = useRef(null);

    useFrame(() => {
        // groupRef.current.rotation.y += 0.01;
    })

    const leafShapes = Array.from({ length: leafDimensions.d13 }, () => new THREE.Shape());

    let xRotInc = leafDimensions.d9
    let yRotInc = Math.PI / (leafShapes.length / 2) + leafDimensions.d11
    let zRotInc = leafDimensions.d10

    for(var i = 0; i < leafDimensions.d13; i++) {
      if(i%2 === 0) {
          // Define control points for the quadratic curve
          const controlPointX = leafDimensions.d1;
          const controlPointY = leafDimensions.d2;
          const endPointX = leafDimensions.d3;
          const endPointY = leafDimensions.d4;
  
          // Generate points along the quadratic curve
          const curve = new THREE.QuadraticBezierCurve(
              new THREE.Vector2(0, 0), // Starting point
              new THREE.Vector2(controlPointX, controlPointY), // Control point
              new THREE.Vector2(endPointX, endPointY) // Ending point
          );
  
          const points = curve.getPoints(100); // Increase the number of points for smoother curve
  
          // Create a new shape and set its quadratic curve with the generated points
          leafShapes[i] = new THREE.Shape().setFromPoints(points);
      } else {
        leafShapes[i].quadraticCurveTo(0-leafDimensions.d1, leafDimensions.d2, leafDimensions.d3, leafDimensions.d4)
      }
    }


  const leafGeometry1 = new THREE.ExtrudeGeometry(leafShapes[0], {
      steps: 35,
      depth: leafDimensions.d12,
      bevelEnabled: false,
      // bevelSize: 0.5,
      // bevelOffset: 0.5,
      // bevelSegments: 5,
      // bevelThickness: 5
    })

    // const leafGeometry2 = new THREE.ExtrudeGeometry(leafShapes[1], {
    //   steps: 35,
    //   depth: leafDimensions.d12,
    //   bevelEnabled: true,
    //   bevelSize: 0,
    //   bevelOffset: 0,
    //   bevelSegments: 5,
    //   bevelThickness: 0
    // })

  //   const leafGeometries = []
  // for(var i = 0; i < leafDimensions.d13; i++) {
  //   leafGeometries.push(new THREE.ExtrudeGeometry(leafShapes[], {
  //     steps: 35,
  //     depth: leafDimensions.d12,
  //     bevelEnabled: true,
  //     bevelSize: 0,
  //     bevelOffset: 0,
  //     bevelSegments: 5,
  //     bevelThickness: 0
  //   }))
  // }

    // const leafGeometry = 
    // new THREE.CylinderGeometry(leafShapes[0], {
    //   radius: 5,
    //   height: 0.1,
    //   radialSegments: 32,
    //   heightSegments: 1
    // })

  
  
  
    function euclideanDistance(x1, y1, z1, x2, y2, z2) {
      const dx = x2 - x1;
      const dy = y2 - y1;
      const dz = z2 - z1;
      return Math.sqrt(dx * dx + dy * dy + dz * dz);
  }
  
  function getNearestPoint(x, y, z, points) {
      let minDistance = Infinity;
      for (let i = 0; i < points.length; i++) {
          const [px, py, pz] = points[i];
          const distance = euclideanDistance(x, y, z, px, py, pz);
          minDistance = Math.min(minDistance, distance);
      }
      return minDistance;
  }
  
  function worleyNoise3D(x, y, z, numPoints) {
      // Generate random points in 3D space
      const points = [];
      for (let i = 0; i < numPoints; i++) {
          points.push([Math.random(), Math.random(), Math.random()]);
      }
  
      // Calculate distance to nearest point
      return getNearestPoint(x, y, z, points);
  }




     // Create Perlin noise object
     const noise = new Noise();
// Modify vertex positions with Perlin noise
const positions = leafGeometry1.getAttribute('position');

    let noiseScale = leafDimensions.d5
    let xNoise = leafDimensions.d6
    let yNoise = leafDimensions.d7
    let zNoise = leafDimensions.d8

for (let i = 0; i < positions.count; i++) {
    const vertex = new THREE.Vector3();
    vertex.fromBufferAttribute(positions, i);

    // You can adjust these parameters to control the amount and scale of the noise
    const noiseValue = noise.simplex3(vertex.x * 0.1, vertex.y * 0.1, vertex.z * 0.1);
    // const noiseValue = worleyNoise3D(vertex.x * 0.1, vertex.y * 0.1, vertex.z * 0.1, 10);
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
      <group ref={groupRef}>
        {Array.from({ length: leafDimensions.d13 }, (_, index) => (
          <mesh castShadow receiveShadow
            key={index}
            ref={(ref) => (leafRefs.current[index] = ref)}
            {...props}
            rotation={[rotationX + index * xRotInc, rotationY + index * yRotInc, rotationZ + index * zRotInc]}
            scale={scale}
          >
            <bufferGeometry attach="geometry" {...leafGeometry1} />
            <MeshWobbleMaterial
              color={index%2 === 0 ? "orange" : "yellow"}
                roughness='0.9'
                // wireframe={true}
                // wireframeLinewidth={.5}
                wireframeLinecap='butt'
              // opacity='.9'
              // transparent='true'
              // side='THREE.FrontSide'
              // wireframe='true'
              // metalness='.5'
              // shininess='100'
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