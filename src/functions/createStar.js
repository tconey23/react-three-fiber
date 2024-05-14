import React, { useRef, useEffect, useState } from 'react'
import { Cylinder } from '@react-three/drei'
import * as THREE from 'three'
import { Noise } from 'noisejs'

const geometry = new THREE.CylinderGeometry(5, 5, 20, 32);

const vertices = geometry.attributes.position.array;
const numVerts = geometry.attributes.position.count;
const starPoints = 5; // Number of points in the star shape
const frequency = starPoints * 2; // Frequency of the wave for star shape
const amplitude = 1; // Amplitude of the wave

for (let i = 0; i < numVerts; i++) {
  // Get the current vertex
  const x = vertices[i * 3];
  const y = vertices[i * 3 + 1];
  const z = vertices[i * 3 + 2];

  // Calculate the angle of the current vertex around the Y-axis
  const angle = Math.atan2(z, x);
  // Calculate the distance from the Y-axis
  const radius = Math.sqrt(x * x + z * z);
  
  // Apply a sine wave based on the angle to create the star shape
  const newRadius = radius + amplitude * Math.sin(frequency * angle);

  // Update the vertex position
  vertices[i * 3] = newRadius * Math.cos(angle);
  vertices[i * 3 + 2] = newRadius * Math.sin(angle);
}

geometry.attributes.position.needsUpdate = true;
