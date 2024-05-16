import React, { useRef, useState, useEffect } from 'react';
import { Box, Cylinder, Sphere } from '@react-three/drei';
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'
import woodColor from './textures/Wood_027_basecolor.jpg'
import woodOcc from './textures/Wood_027_ambientOcclusion.jpg'
import woodHeight from './textures/Wood_027_height.png'
import woodRough from './textures/Wood_027_roughness.jpg'
import woodNorm from './textures/Wood_027_normal.jpg'
import groundColor from './textures/Ground_Wet_002_basecolor.jpg'
import groundOcc from './textures/Ground_Wet_002_ambientOcclusion.jpg'
import groundHeight from './textures/Ground_Wet_002_height.png'
import groundRough from './textures//Ground_Wet_002_roughness.jpg'
import groundNorm from './textures/Ground_Wet_002_normal.jpg'

const GardenBox = () => {
    const [colorMap, aoMap, normalMap, roughnessMap, displacementMap] = useLoader(TextureLoader, [
        woodColor,         // Albedo / Color Map
        woodOcc,           // Ambient Occlusion Map
        woodNorm,       // Normal Map
        woodRough,    // Roughness Map
        woodHeight  // Height / Displacement Map
      ])
      const [colorGround, aoGround, normalGround, roughnessGround, displacementGround] = useLoader(TextureLoader, [
        groundColor,         // Albedo / Color Map
        groundOcc,           // Ambient Occlusion Map
        groundNorm,       // Normal Map
        groundRough,    // Roughness Map
        groundHeight  // Height / Displacement Map
      ])
    return(
        <>
        <group position={[-8.5,-1,0]}>
                <Box position={[0,0,0]} args={[1,2,30]}>
                    <meshStandardMaterial 
                        map={colorMap}
                        aoMap={aoMap}
                        normalMap={normalMap}
                        roughnessMap={roughnessMap}
                        displacementMap={displacementMap}
                        displacementScale={0.1}
                    />
                </Box>

                <Box position={[20,0,0]} args={[1,2,30]}>
                <meshStandardMaterial 
                        map={colorMap}
                        aoMap={aoMap}
                        normalMap={normalMap}
                        roughnessMap={roughnessMap}
                        displacementMap={displacementMap}
                        displacementScale={0.1}
                    />
                </Box>
                <Box position={[10,0,14.5]} args={[20,2,1]}>
                <meshStandardMaterial 
                        map={colorMap}
                        aoMap={aoMap}
                        normalMap={normalMap}
                        roughnessMap={roughnessMap}
                        displacementMap={displacementMap}
                        displacementScale={0.1}
                    />
                </Box>
                <Box position={[10,0,-14.5]} args={[20,2,1]}>
                <meshStandardMaterial 
                        map={colorMap}
                        aoMap={aoMap}
                        normalMap={normalMap}
                        roughnessMap={roughnessMap}
                        displacementMap={displacementMap}
                        displacementScale={0.1}
                    />
                </Box>
                <Box position={[10,0.75,0]} args={[20,0.1,30]}>
                <meshStandardMaterial 
                        map={colorGround}
                        aoMap={aoGround}
                        normalMap={normalGround}
                        roughnessMap={roughnessGround}
                        displacementMap={displacementGround}
                        displacementScale={0.1}
                    />
                </Box>
                {/* <Cylinder position={[10,0.75,0]} args={[1,2,1]}>
                <meshStandardMaterial 
                        map={colorGround}
                        aoMap={aoGround}
                        normalMap={normalGround}
                        roughnessMap={roughnessGround}
                        displacementMap={displacementGround}
                        displacementScale={0.1}
                    />
                </Cylinder> */}
                <Sphere position={[10,0.75,1]} args={[1,2,1]}>
                <meshStandardMaterial 
                        map={colorGround}
                        aoMap={aoGround}
                        normalMap={normalGround}
                        roughnessMap={roughnessGround}
                        displacementMap={displacementGround}
                        displacementScale={1}
                    />
                </Sphere>
        </group>

        </>
    )
}

export default GardenBox