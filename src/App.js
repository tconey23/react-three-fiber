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
import FlowerDataTest from './FlowerDataTest';
import Home from './TCPhysics/Home/Home'
import CollisionTest from './TCPhysics/CollisionTests/CollisionTests';
import userFlowers from './TCPhysics/userFlowers-dummy';
import ConvexHull from './TCPhysics/ConvexHull/ConvexHull';
import Loading from './Loading';

function App() {

  return (
    <>
    <nav>
      <Link to={'/'}> | Home | </Link>
      <Link to={'/TCFlower2'}> | TCFlower2 | </Link>
      <Link to={'/3dNoise'}> | 3d Noise Editor | </Link>
      <Link to={'/Builder'}> | Plant Builder | </Link>
      <Link to={'/FlowerDataTest'}> | Flower Data Test | </Link>
      <Link to={'/Physics'}> | Physics | </Link>
      <Link to={'/Collisions'}> | Collision | </Link>
      <Link to={'/Loading'}> |  Loading  | </Link>
    </nav>
    <Routes>
      <Route path={'/'} element={<Home flowers={userFlowers}/>}/>
      <Route path={'/TCFlower2'} element={<TCFlower2 />}/>
      {/* <Route path={'/2DNoise'} element={<TwoDNoise />}/> */}
      <Route path={'/3DNoise'} element={<ThreeDNoise />}/>
      <Route path={'/Builder'} element={<PlantBuilder />}/>
      <Route path={'/FlowerDataTest'} element={<FlowerDataTest />}/>
      <Route path={'/Physics'} element={<Home flowers={userFlowers}/>}/>
      <Route path={'/Collisions'} element={<CollisionTest />}/>
    </Routes>
 
    </>
  );
}

export default App;
