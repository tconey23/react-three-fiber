import React, { useRef, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import ThreeFlower from './ThreeFlower';
import { useFrame } from '@react-three/fiber';
import './App.css'

const Sandbox = () => {

    const flower = useRef()

    const initialGeoParams = {
        noiseScale: 1,
        noiseImpactX: 0.5,
        noiseImpactY: 1,
        noiseImpactZ: 0,
        radiusTop: 2,
        radiusBottom: 2,
        shape_Height: 0.01,
        radialSegments: 100,
        bloomRotationX: 0,
        bloomRotationY: 0,
        bloomRotationZ: 0,
        recRadius: 0.4,
        recPositionY: 5,
        stemHeight: 10,
        stemWidth: 0.1,

    };

    const [flowerStages, setFlowerStages] = useState({
        seedling: initialGeoParams,
        blooming: initialGeoParams,
        thriving: initialGeoParams,
        wilting: initialGeoParams,
        dead: initialGeoParams
    });

    const [geoParams, setGeoParams] = useState(initialGeoParams);
    const [currentStage, setCurrentStage] = useState('seedling');
    const [isShiftPressed, setIsShiftPressed] = useState(false);
    const [focusedInput, setFocusedInput] = useState(null);

    useEffect(() => {
        if (!geoParams) {
            setGeoParams(initialGeoParams);
        }

        const handleKeyDown = (event) => {
            if (event.key === 'Shift') {
                setIsShiftPressed(true);
            }

            if (isShiftPressed && focusedInput) {
                const increment = 1;
                if (event.key === 'ArrowUp') {
                    setGeoParams(prevState => ({
                        ...prevState,
                        [focusedInput]: parseFloat(prevState[focusedInput]) + increment
                    }));
                } else if (event.key === 'ArrowDown') {
                    setGeoParams(prevState => ({
                        ...prevState,
                        [focusedInput]: parseFloat(prevState[focusedInput]) - increment
                    }));
                }
            }
        };

        const handleKeyUp = (event) => {
            if (event.key === 'Shift') {
                setIsShiftPressed(false);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
        };
    }, [isShiftPressed, focusedInput]);

    const handleChange = async (event) => {
        const sliderValue = parseFloat(event.target.value);
        const updatedState = {
            ...geoParams,
            [event.target.id]: sliderValue
        };
        await setGeoParams(updatedState);
    };

    const handleSaveStage = (stage) => {
        setFlowerStages({
            ...flowerStages,
            [stage]: { ...geoParams }
        });
        console.log(`${stage} saved:`, geoParams);
    };

    const handleLoadStage = (stage) => {
        setGeoParams({ ...flowerStages[stage] });
        setCurrentStage(stage);
        console.log(`${stage} loaded:`, flowerStages[stage]);
    };

    const handleFocus = (event) => {
        setFocusedInput(event.target.id);
    };

    const lifecycleParams = {
        radiusTop: { range: 0.5, lifecycle: [0.3, 0.52, 1.09, 1.09, 0.2] },
        radiusBottom: { range: 0.5, lifecycle: [0.3, 0.52, 1.09, 1.09, 0.2] },
        noiseScale: { range: 0.5, lifecycle: [0.46, 1.95, 1.03, 1.31, 0.01] },
        noiseImpactX: { range: 0.5, lifecycle: [0.46, 0.5, 0.5, 0.5, 0.39] },
        noiseImpactY: { range: 0.5, lifecycle: [0.34, 0.5, 0.94, 2.63, 2.63] },
        noiseImpactZ: { range: 0.5, lifecycle: [0, 0, 1, 0.94, 0.94] },
        shape_Height: { range: 0.5, lifecycle: [0.16, 0.04, 0.04, 0.04, 0.01] },
        radialSegments: { range: 0.5, lifecycle: [100, 100, 100, 11.88, 11.88] },
        bloomRotationX: { range: 0.5, lifecycle: [0, 0.03, -0.38, -0.38, -0.71] },
        bloomRotationY: { range: 0.5, lifecycle: [0, 0, 0.07, 0.07, 0.07] },
        bloomRotationZ: { range: 0.5, lifecycle: [0, 0, -0.43, -0.43, -0.43] },
        recRadius: { range: 0.5, lifecycle: [0.16, 0.17, 0.2, 0.2, 0.11] },
        recPositionY: { range: 0.5, lifecycle: [5, 5, 5, 5, 5] },
        stemHeight: { range: 0.5, lifecycle: [0.7, 1.76, 7, 5.47, 2.39] },
        stemWidth: { range: 0.5, lifecycle: [0.4, 0.4, 0.4, 0.4, 0.4] },
        lifetime: 3600000,
      };


    return (
        <>
            <div id="formContainer">
            <form>
                <label>RadiusTop</label>
                <input type='number' min={-100} max={100} value={geoParams?.radiusTop || 2} step={0.01} onChange={handleChange} onFocus={handleFocus} id='radiusTop'/>
                <label>RadiusBottom</label>
                <input type='number' min={-100} max={100} value={geoParams?.radiusTop || 2} step={0.01} onChange={handleChange} onFocus={handleFocus} id='radiusBottom'/>
                <label>NoiseScale</label>
                <input type='number' min={-100} max={100} value={geoParams?.noiseScale || 1} step={0.01} onChange={handleChange} onFocus={handleFocus} id='noiseScale'/>
                <label>NoiseImpactX</label>
                <input type='number' min={-100} max={100} value={geoParams?.noiseImpactX || 0.5} step={0.01} onChange={handleChange} onFocus={handleFocus} id='noiseImpactX'/>
                <label>NoiseImpactY</label>
                <input type='number' min={-100} max={100} value={geoParams?.noiseImpactY || 1} step={0.01} onChange={handleChange} onFocus={handleFocus} id='noiseImpactY'/>
                <label>NoiseImpactZ</label>
                <input type='number' min={-100} max={100} value={geoParams?.noiseImpactZ || 0} step={0.01} onChange={handleChange} onFocus={handleFocus} id='noiseImpactZ'/>
                <label>Shape Height</label>
                <input type='number' min={-100} max={100} value={geoParams?.shape_Height || 0.01} step={0.01} onChange={handleChange} onFocus={handleFocus} id='shape_Height'/>
                <label>Radial Segments</label>
                <input type='number' min={-100} max={100} value={geoParams?.radialSegments || 100} step={0.01} onChange={handleChange} onFocus={handleFocus} id='radialSegments'/>
                <label>bloomRotationX</label>
                <input type='number' min={-100} max={100} value={geoParams?.bloomRotationX || 0} step={0.01} onChange={handleChange} onFocus={handleFocus} id='bloomRotationX'/>
                <label>bloomRotationY</label>
                <input type='number' min={-100} max={100} value={geoParams?.bloomRotationY || 0} step={0.01} onChange={handleChange} onFocus={handleFocus} id='bloomRotationY'/>
                <label>bloomRotationZ</label>
                <input type='number' min={-100} max={100} value={geoParams?.bloomRotationZ || 0} step={0.01} onChange={handleChange} onFocus={handleFocus} id='bloomRotationZ'/>
                <label>RecRadius</label>
                <input type='number' min={-100} max={100} value={geoParams?.recRadius || 0.4} step={0.01} onChange={handleChange} onFocus={handleFocus} id='recRadius'/>
                <label>recPositionY</label>
                <input type='number' min={-100} max={100} value={geoParams?.recPositionY || 0.4} step={0.01} onChange={handleChange} onFocus={handleFocus} id='recPositionY'/>
                <label>stemHeight</label>
                <input type='number' min={-100} max={100} value={geoParams?.stemHeight || 0.4} step={0.01} onChange={handleChange} onFocus={handleFocus} id='stemHeight'/>
                <button type="button" onClick={() => handleSaveStage('seedling')}>Save Seedling</button>
                <button type="button" onClick={() => handleSaveStage('blooming')}>Save Blooming</button>
                <button type="button" onClick={() => handleSaveStage('thriving')}>Save Thriving</button>
                <button type="button" onClick={() => handleSaveStage('wilting')}>Save Wilting</button>
                <button type="button" onClick={() => handleSaveStage('dead')}>Save Dead</button>
                <button type="button" onClick={() => handleLoadStage('seedling')}>Load Seedling</button>
                <button type="button" onClick={() => handleLoadStage('blooming')}>Load Blooming</button>
                <button type="button" onClick={() => handleLoadStage('thriving')}>Load Thriving</button>
                <button type="button" onClick={() => handleLoadStage('wilting')}>Load Wilting</button>
                <button type="button" onClick={() => handleLoadStage('dead')}>Load Dead</button>
            </form>
            </div>
            <Canvas style={{ width: '100vw', height: '95vh', backgroundColor: 'black' }}>
                <directionalLight intensity={10} castShadow position={[2, 1, 5]} shadow-mapSize={[1024, 1024]} />
                <ambientLight intensity={1} />
                {geoParams && <ThreeFlower ref={flower} geoParams={geoParams} position={[1, 0, 0]} rotation={[0, 0, 0]} />}
                <OrbitControls />
            </Canvas>
        </>
    );
};

export default Sandbox;
