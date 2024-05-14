import React, { useRef, useEffect, useState } from 'react'
import { Cylinder } from '@react-three/drei'
import * as THREE from 'three'
import { Noise } from 'noisejs'

function Leaf({ color, positionX, positionY, positionZ, rotationX, rotationY, rotationZ, geoParams }) {
  const meshRef = useRef()
  const noise = new Noise(123456)

  useEffect(() => {
    const { radiusTop, radiusBottom, shape_Height, radialSegments, noiseScale, noiseImpactX, noiseImpactY, noiseImpactZ } = geoParams

    const geometry = new THREE.CylinderGeometry(radiusTop, radiusBottom, shape_Height, radialSegments)

    const positions = geometry.attributes.position.array
    for (let i = 0; i < positions.length; i += 3) {
      const x = positions[i]
      const y = positions[i + 1]
      const z = positions[i + 2]

      const displacementX = noise.perlin3(x * noiseScale, y * noiseScale, z * noiseScale) * noiseImpactX
      const displacementY = noise.perlin3(x * noiseScale, y * noiseScale, z * noiseScale) * noiseImpactY
      const displacementZ = noise.perlin3(x * noiseScale, y * noiseScale, z * noiseScale) * noiseImpactZ

      positions[i] += displacementX
      positions[i + 1] += displacementY
      positions[i + 2] += displacementZ
    }

    geometry.attributes.position.needsUpdate = true
    geometry.computeVertexNormals()
    geometry.computeBoundingSphere()

    if (meshRef.current) {
      meshRef.current.geometry = geometry
    }
  }, [geoParams])

  return (
    <mesh
      ref={meshRef}
      rotation={[rotationX, rotationY, rotationZ]}
      position={[positionX, positionY, positionZ]}
    >
      <meshLambertMaterial attach="material" color={color} />
    </mesh>
  )
}

export default Leaf
