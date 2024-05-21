import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from '@react-three/drei';
import { Canvas, useLoader } from '@react-three/fiber';

function StrangeAttractor() {
    const rendererRef = useRef(null);

    useEffect(() => {
        // Define the strange attractor equations
        function strangeAttractor(x, y, z, a, b, c) {
            const dx = Math.sin(a * y) - z * Math.cos(b * x);
            const dy = z * Math.sin(c * x) - Math.cos(a * y);
            const dz = Math.sin(x);

            return { x: dx, y: dy, z: dz };
        }

        // Set up Three.js scene
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ canvas: rendererRef.current });
        renderer.setSize(window.innerWidth, window.innerHeight);

        // Create points for visualization
        const points = [];
        const numPoints = 100000; // Number of points to generate
        const pointGeometry = new THREE.BufferGeometry();
        const material = new THREE.PointsMaterial({ color: 0xffffff, size: 0.05 });

        // Parameters for the strange attractor
        const a = 2.0;
        const b = 1.2;
        const c = 2.2;

        // Generate points
        const positions = new Float32Array(numPoints * 3);
        let x = 0.1, y = 0.1, z = 0.1; // Initial values
        for (let i = 0; i < numPoints; i++) {
            const point = strangeAttractor(x, y, z, a, b, c);
            x = point.x;
            y = point.y;
            z = point.z;
            positions[i * 3] = x;
            positions[i * 3 + 1] = y;
            positions[i * 3 + 2] = z;
        }

        pointGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        const pointCloud = new THREE.Points(pointGeometry, material);
        scene.add(pointCloud);

        camera.position.z = 5;

        // Render loop
        function animate() {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        }
        animate();

        // Clean up function
        return () => {
            scene.remove(pointCloud);
            renderer.dispose();
        };
    }, []); // Run effect only once on component mount

    return (
 
            <mesh ref={rendererRef} >
                <ambientLight intensity={1} />
                <directionalLight position={[10, 10, 10]} intensity={1} />
                <spotLight position={[10, 10, 10]} angle={0.25} penumbra={1} />
                <pointLight position={[10, 10, 10]} />
                <OrbitControls />
            </mesh >

    )
}

export default StrangeAttractor;
