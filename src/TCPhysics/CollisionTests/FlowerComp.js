import React from 'react';
import { useCylinder, useSphere, Physics, Debug } from '@react-three/cannon';
import { Cylinder, Sphere } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, OrthographicCamera } from '@react-three/drei';
import { useEffect, useState } from 'react';
import { useSpring, usePointToPointConstraint } from '@react-three/cannon';
import Petals from '../FlowerAssembly/Petals';
import flower from './flower'

const FlowerComp = () => {
    const stemArgs = [0.14, 0.14, 10];
    const recArgs = [0.2, 32, 64]
    const petalArgs = [1,1,0.1, 100]

    const [nextStage, setNextStage] = useState()
    const stageDurations = 60000

    const springStiffness = 0
    const springDamping = 1000
    const sphereArgs = [0.1, 32, 32];
    const springRestLength = sphereArgs[0]
    const sphereMass = 0.5
    const sphereRestitution = 0

    const [stem, stemApi] = useCylinder(() => ({
        args: [0.5, 0.14, 10],
        position: [0,0,0],
        mass: 1,
        type: 'Static',
    }));

    const [petal, petalApi] = useCylinder(() =>({
        args: petalArgs,
        mass: 0.000000000000000000000001,
        position: [0,5,0],
        type: 'Dynamic',
        restitution: 0,
        friction: 10
    }))

    const [recep, recepApi] = useSphere(() => ({
        args: recArgs,
        position: [0,0,0],
        type: 'Static',
    }));

    useSpring(stem, recep, { restLength: springRestLength, stiffness: springStiffness, damping: springDamping });

    usePointToPointConstraint(petal, recep, {
        pivotA: [0,0,0],
        pivotB: [0, 0, 0]
      });


    return(
        <group>
            <Cylinder ref={stem} args={stemArgs}>
                <meshLambertMaterial color={'green'}/>
            </Cylinder>
            <Sphere ref={recep} args={recArgs}>
                <meshLambertMaterial color={'yellow'}/>
            </Sphere>
            <Petals
                ref={petal}
                topPoint={[0,5,0]}
                flower={flower}
                nextStage={nextStage}
                stageDurations={stageDurations}
        />
            {/* <Cylinder ref={petal} args={petalArgs}>
                <meshLambertMaterial color={'blue'}/>
            </Cylinder> */}
        </group>
    )
}

export default FlowerComp