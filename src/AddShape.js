import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Sphere, Cylinder } from '@react-three/drei';

const AddShape = ({ shapes }) => {
    return (
        <>
            {shapes.map(shape => (
                <mesh key={shape.id} position={shape.position}>
                    {shape.type === 'cylinder' && <Cylinder args={shape.args} />}
                    {shape.type === 'sphere' && <Sphere args={shape.args} />}
                    {/* Key the material by color to force updates on color change */}
                    <meshStandardMaterial key={shape.color} color={shape.color} />
                </mesh>
            ))}
        </>
    );
};

export default AddShape;
