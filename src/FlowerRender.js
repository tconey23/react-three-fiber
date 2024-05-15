import React, { useRef, useEffect, useState } from 'react'
import { Cylinder } from '@react-three/drei'
import * as THREE from 'three'
import { Noise } from 'noisejs'

function FlowerRender({ color, positionX, positionY, positionZ, rotationX, rotationY, rotationZ, flower, currentStage}) {
  const currentPhase = flower.phases[currentStage]
  console.log('currentPhase', currentPhase)
  const { noiseScale,
        noiseImpactX,
        noiseImpactY,
        noiseImpactZ,
        radiusTop,
        radiusBottom,
        shape_Height,
        radialSegments,
        bloomRotationX,
        bloomRotationY,
        bloomRotationZ,
        recRadius,
        recPositionY,
        stemHeight,
        stemWidth
  } = currentPhase


  const meshRef = useRef()
  const noise = new Noise(123456)


  useEffect(() => {
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
  }, [flower])

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

export default FlowerRender
