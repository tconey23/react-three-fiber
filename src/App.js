import React, { useRef, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { createNoise3D } from 'simplex-noise';
import { OrbitControls, Cylinder, Tube, Sphere } from '@react-three/drei';
import * as THREE from 'three';
import PlantBuilder from './PlantBuilder';
import { Routes, Route, Link } from 'react-router-dom';
import ThreeDNoise from './3DNoise';
import TwoDNoise from './2DNoise';
import Sandbox from './Sandbox';
import TCFlower2 from './TCFlower2/TCFlower2';

function App() {
  

  return (
    <>
    <nav>
      <Link to={'/'}> | Home | </Link>
      <Link to={'/TCFlower2'}> | TCFlower2 | </Link>
      <Link to={'/3dNoise'}> | 3d Noise Editor | </Link>
      {/* <Link to={'/2dNoise'}> | 2d Noise Editor | </Link> */}
      <Link to={'/Builder'}> | Plant Builder | </Link>
    </nav>
    <Routes>
      <Route path={'/'} element={<Sandbox />}/>
      <Route path={'/TCFlower2'} element={<TCFlower2 />}/>
      {/* <Route path={'/2DNoise'} element={<TwoDNoise />}/> */}
      <Route path={'/3DNoise'} element={<ThreeDNoise />}/>
      <Route path={'/Builder'} element={<PlantBuilder />}/>
    </Routes>
 
    </>
  );
}

export default App;
