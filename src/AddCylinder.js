import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import { Sphere, Cylinder } from '@react-three/drei';
import ProcLeaf from './ProcLeaf';

const AddCylinder = ({position, radiusTop, radiusBottom, height, radialSegments, heightSegments, openEnded, thetaLength}) => {
    
    const cylinderSettings = [radiusTop, radiusBottom, height, radialSegments, heightSegments, openEnded, thetaLength]
    
    return (
        <mesh>
            <Cylinder position={position} args={cylinderSettings}/>
        </mesh>
    )
}

export default AddCylinder