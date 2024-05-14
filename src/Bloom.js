import React, { useRef, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { createNoise3D } from 'simplex-noise';
import { OrbitControls, Cylinder, Tube, Sphere } from '@react-three/drei';
import * as THREE from 'three';
import PlantBuilder from './PlantBuilder';
import { Router, Routes, Route, Link } from 'react-router-dom';
import ThreeDNoise from './3DNoise';
import Leaf from './Leaf';

function BloomModel() {


  return (
    <>
      <SphereModel/>
    </>
  );
}

export default BloomModel;
