// import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
// import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
// import { extend } from '@react-three/fiber';
// import { useFrame } from "@react-three/fiber"
// import { useRef } from 'react';

// import abril from './assets/Abril Fatface_Regular.json'

// extend({ TextGeometry })



// export default function Text() {
// const textRef = useRef(null);
// const textRef2 = useRef(null);
// const textRef3 = useRef(null);
// const textRef4 = useRef(null);
// const textRef5 = useRef(null);
// const textRef6 = useRef(null);
// const textRef7 = useRef(null);
// const textRef8 = useRef(null);
// const textRef9 = useRef(null);

// // console.log(textRef.current.getAzimuthalAngle())

// useFrame(() => {
//     textRef.current.rotation.y += 0.01;
//     textRef.current.rotation.x += 0.01;
//     textRef.current.rotation.z += 0.01;
//     textRef2.current.rotation.y -= 0.01;
//     textRef2.current.rotation.x += 0.01;
//     textRef2.current.rotation.z += 0.01;
//     textRef3.current.rotation.y += 0.01;
//     textRef3.current.rotation.x -= 0.01;
//     textRef3.current.rotation.z += 0.01;
//     textRef4.current.rotation.y += 0.01;
//     textRef4.current.rotation.x += 0.01;
//     textRef4.current.rotation.z -= 0.01;
//     textRef5.current.rotation.y += 0.01;
//     textRef5.current.rotation.x += 0.01;
//     textRef5.current.rotation.z += 0.01;
//     textRef6.current.rotation.y += 0.01;
//     textRef6.current.rotation.x += 0.01;
//     textRef6.current.rotation.z += 0.01;
//     textRef7.current.rotation.y -= 0.01;
//     textRef7.current.rotation.x += 0.01;
//     textRef7.current.rotation.z += 0.01;
//     textRef8.current.rotation.y += 0.01;
//     textRef8.current.rotation.x -= 0.01;
//     textRef8.current.rotation.z += 0.01;
//     textRef9.current.rotation.y += 0.01;
//     textRef9.current.rotation.x += 0.01;
//     textRef9.current.rotation.z -= 0.01;
// })

//   const font = new FontLoader().parse(abril)

//   return (
//     <group>
//     <mesh position={[-4, 0, 0]} ref={textRef}>
//         {/* <TransformControls /> */}
//       <textGeometry args={['b', {font, size: 1, height: 1}]} />
//       <meshNormalMaterial />
//     </mesh>
//     <mesh position={[-3, 0, 0]} ref={textRef2}>
//         {/* <TransformControls /> */}
//         <textGeometry args={['L', {font, size: 1, height: 1}]} />
//         <meshNormalMaterial />
//     </mesh>
//     <mesh position={[-2, 0, 0]} ref={textRef3}>
//         {/* <TransformControls /> */}
//         <textGeometry args={['O', {font, size: 1, height: 1}]} />
//         <meshNormalMaterial />
//     </mesh>
//     <mesh position={[-1, 0, 0]} ref={textRef4}>
//         {/* <TransformControls /> */}
//         <textGeometry args={['O', {font, size: 1, height: 1}]} />
//         <meshNormalMaterial />
//     </mesh>
//     <mesh position={[0, 0, 0]} ref={textRef5}>
//         {/* <TransformControls /> */}
//         <textGeometry args={['M', {font, size: 1, height: 1, }]} />
//         <meshNormalMaterial />
//     </mesh>
//     <mesh position={[1, 0, 0]} ref={textRef6}>
//         {/* <TransformControls /> */}
//       <textGeometry args={['b', {font, size: 1, height: 1}]} />
//       <meshNormalMaterial />
//     </mesh>
//     <mesh position={[2, 0, 0]} ref={textRef7}>
//         {/* <TransformControls /> */}
//         <textGeometry args={['A', {font, size: 1, height: 1}]} />
//         <meshNormalMaterial />
//     </mesh>
//     <mesh position={[3, 0, 0]} ref={textRef8}>
//         {/* <TransformControls /> */}
//         <textGeometry args={['B', {font, size: 1, height: 1}]} />
//         <meshNormalMaterial />
//     </mesh>
//     <mesh position={[4, 0, 0]} ref={textRef9}>
//         {/* <TransformControls /> */}
//         <textGeometry args={['Y', {font, size: 1, height: 1}]} />
//         <meshNormalMaterial />
//     </mesh>
//     </group>
//   )
// }


import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { extend, useFrame } from '@react-three/fiber';
import { useRef, useEffect } from 'react';
import { Box3, Vector3 } from 'three';
import { meshTransmissionMaterial } from '@react-three/drei';

import abril from './assets/Abril Fatface_Regular.json';

extend({ TextGeometry });

export default function Text() {
    const groupRef = useRef(null);


  const textRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const font = new FontLoader().parse(abril);

  // Adjust pivot to center
  useEffect(() => {
    textRefs.forEach(ref => {
      if (ref.current) {
        const geometry = ref.current.geometry;
        geometry.computeBoundingBox();
        const boundingBox = geometry.boundingBox;
        const center = new Vector3();
        boundingBox.getCenter(center);
        geometry.translate(-center.x, -center.y, -center.z);
      }
    });
  }, [textRefs]);


    if(groupRef.current) {
        groupRef.current.rotation.y = -.6
    } 

  useFrame(() => {
    

    textRefs.forEach((ref, index) => {
      if (ref.current) {
        const rotationSpeed = 0.01;
        console.log(ref.current.rotation.y)
        if((ref.current.rotation.y < Math.PI) && (ref.current.rotation.y > -Math.PI)) {
            groupRef.current.rotation.y += .0001
            ref.current.rotation.y += (index % 2 === 0 ? 1 : -1) * rotationSpeed;
            ref.current.rotation.x += (index % 3 === 0 ? 1 : -1) * rotationSpeed;
            ref.current.rotation.z += (index % 4 === 0 ? 1 : -1) * rotationSpeed;
        }
      }
    });
  });

  const textStrings = ['b', 'L', 'O', 'O', 'M', 'b', 'A', 'B', 'Y'];

  return (
    <group ref={groupRef}>
      {textStrings.map((text, index) => (
        <mesh
          key={index}
          position={[-4 + index, 0, 0]}
          ref={textRefs[index]}
        >
          <textGeometry args={[text, { font, size: 1, height: 1 }]} />
          <meshStandardMaterial transmissiveness/>
        </mesh>
      ))}
    </group>
  );
}
