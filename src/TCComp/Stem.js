import React, { useRef, useEffect } from 'react';
import { TubeGeometry, CatmullRomCurve3, Vector3 } from 'three';

const Stem = ({ onTopPointComputed, flower }) => {
    const tubeRef = useRef();
    let topPoint;
    console.log(flower)

    useEffect(() => {
        const wiltPath = new CatmullRomCurve3([
            new Vector3(0.5, 0, 0), 
            new Vector3(0.5, 0, 0),
            new Vector3(0.5, 0, 0.56),
            new Vector3(0.1, 4.5, 0.88),
            new Vector3(0.1, 7.46, 1.42),
            new Vector3(0.1, 8.34, 1.08),
            new Vector3(0.1, 8.42, 0),
            new Vector3(0.1, 7.08, -0.26)
        ]);
    }, [])


//     const getPathPoints = () => {
//         const pathPoints = flower.path.reduce((vector, acc)=> {
//             acc.push(new Vector3(vector[0],vector[1], vector[2]))
//             return acc
//         }, [])
//         console.log(new CatmullRomCurve3(pathPoints))
// }


let pointsArray = []

    useEffect(() => {


        const pathPoints = new CatmullRomCurve3(pointsArray);

        flower.path.forEach((path)=> {
            pointsArray.push(new Vector3(path[0],path[1], path[2]))
        })


        const tubularSegments = 100;
        const radius = 0.14;
        const radialSegments = 8;
        const closed = false;
        topPoint = pathPoints.getPointAt(1);
        const tubeGeometry = new TubeGeometry(pathPoints, tubularSegments, radius, radialSegments, closed);
        
        if (tubeRef.current) {
            tubeRef.current.geometry = tubeGeometry;
        }

        if (topPoint) {
            onTopPointComputed(topPoint);
        }
    }, [topPoint]);

    return (
        <mesh ref={tubeRef} position={[0, 0, 0]} rotation={[0, 0, 0]}>
            <meshStandardMaterial color="green" />
        </mesh>
    );
};

export default Stem;
