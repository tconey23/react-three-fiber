import React, { useEffect, useState, useRef, useCallback } from 'react';
import { Sphere } from "@react-three/drei";
import { useFrame } from '@react-three/fiber';
import { useSphere, useHingeConstraint } from '@react-three/cannon';
import Petals from "./Petals";
import { CustomShaderMaterial } from '../../functions/CustomShaderMaterial';

const lerp = (start, end, t) => start + (end - start) * t;

const Receptacle = ({ flower, topPoint, bloomAngle, nextStage, stageDurations }) => {
    const [receptRadius, setReceptRadius] = useState(flower.recRadius);
    const [flowerPetals, setFlowerPetals] = useState([]);
    const [attachPoint, setAttachPoint] = useState({ x: 0, y: 0, z: 0 });
    const materialRef = useRef();
    const transitionProgressRef = useRef(0);
    const elapsedTimeRef = useRef(0);
    const targetDuration = stageDurations;

    const [currentFlower, setCurrentFlower] = useState(flower);
    const [startFlower, setStartFlower] = useState(flower);

    const sphereRef = useRef()



    useFrame((state, delta) => {
        if (materialRef.current) {
            materialRef.current.uniforms.uTime.value += delta;
        }



    });


    return (
       <>
            {attachPoint && flowerPetals}
       </>
 
    );
};

export default Receptacle;
