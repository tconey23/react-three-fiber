import React, { useRef, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { createNoise3D } from 'simplex-noise';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import PlantBuilder from './PlantBuilder';
import { Router, Routes, Route, Link } from 'react-router-dom';
import ThreeDNoise from './3DNoise';

function App() {
  

  return (
    <>
    <nav>
      <Link to={'/App'}> | Home | </Link>
      <Link to={'/3dNoise'}> | 3d Noise Editor | </Link>
      <Link to={'/Builder'}> | Plant Builder | </Link>
    </nav>
    <Routes>
      <Route path={'/3DNoise'} element={<ThreeDNoise />}/>
      <Route path={'/Builder'} element={<PlantBuilder />}/>
    </Routes>
    </>
  );
}

export default App;
