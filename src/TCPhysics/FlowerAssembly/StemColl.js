import React, { useRef, useEffect, useState } from 'react';
import { TubeGeometry, CatmullRomCurve3, Vector3 } from 'three';
import { useFrame } from '@react-three/fiber';
import { useBox, useCylinder, useSphere } from '@react-three/cannon';
import Petals from './Petals';

const StemColl = () => {
    
let stemColl1, stemCollApi1
    
    
    return [stemColl1, stemCollApi1] = useSphere(() => ({
        args: [0.2, 0.2, 1],
        type: 'Dynamic',
      }))
}

export default StemColl