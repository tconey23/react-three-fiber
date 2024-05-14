import React, { useRef, useEffect, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Cylinder } from '@react-three/drei';
import Leaf from './Leaf';

function ThreeFlower(props) {
  const stemRef = useRef();
  const bloomRef = useRef();
  const pedalsRef = useRef();

  console.log(props.geoParams)

  const [isAnimating, setIsAnimating] = useState(true);
  useFrame(() => {
    if (isAnimating) {
      // bloom.current.children[1].geometry.parameters.radiusTop -= 0.1
    }
  });

  const [flowerPedals, setFlowerPedals] = useState([]);
  const colorArray = ['red', 'blue', 'green', 'purple'];

  useEffect(() => {
    const pedalArray = [];
    let c = 0;

    for (let i = 0; i < 1; i += 1) {
      pedalArray.push(
        <Leaf
          key={i}
          positionX={0}
          positionY={0}
          positionZ={0}
          rotationX={0}
          rotationY={0}
          rotationZ={0}
          color={colorArray[c]}
          geoParams={props.geoParams}
        />
      );
      c = (c + 1) % colorArray.length;
    }

    setFlowerPedals(pedalArray);
  }, [props.geoParams]);

  const recepticle = () => {
    return (
      <Sphere position={[0, 0, 0]} args={[props.geoParams.recRadius]}>
        <meshStandardMaterial color="yellow" />
      </Sphere>
    );
  };

  console.log(bloomRef)

  return (
    <mesh position={props.position}>
      <group>
        {/* The stem */}
        <Cylinder
          ref={stemRef}
          position={[0, 0, 0]}
          args={[props.geoParams.stemWidth, props.geoParams.stemWidth, props.geoParams.stemHeight]}
        >
          <meshStandardMaterial color="green" />
        </Cylinder>
        
        {/* The bloom, attached to the top of the stem */}
        <group ref={bloomRef} rotation={[props.geoParams.bloomRotationX, props.geoParams.bloomRotationY, props.geoParams.bloomRotationZ]} position={[0, props.geoParams.stemHeight / 2, 0]}>
          <Sphere position={[0, 0, 0]} args={[props.geoParams.recRadius]}>
            <meshStandardMaterial color="yellow" />
          </Sphere>
          {flowerPedals}
        </group>
      </group>
    </mesh>
  );
}

export default ThreeFlower;
