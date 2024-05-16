import React, { useRef, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Sky } from '@react-three/drei';
import ThreeFlower from './ThreeFlower';
import GardenBox from './TCComp/GardenBox';
import { lifecycleParams } from './assets/flowerParams';
import './App.css';

const Sandbox = () => {
  const flower = useRef();

  const range = 0.05

  const initialGeoParams = {
    noiseScale: 1,
    noiseImpactX: 0.5,
    noiseImpactY: 1,
    noiseImpactZ: 0,
    radiusTop: 1.3,
    radiusBottom: 1.3,
    shape_Height: 0.01,
    radialSegments: 100,
    bloomRotationX: 0,
    bloomRotationY: 1,
    bloomRotationZ: 0,
    recRadius: 0.26,
    recPositionY: 5,
    stemHeight: 10,
    stemWidth: 0.1,
  };

  const [flowerStages, setFlowerStages] = useState({
    seedling: initialGeoParams,
    blooming: initialGeoParams,
    thriving: initialGeoParams,
    wilting: initialGeoParams,
    dead: initialGeoParams,
  });

  const [geoParams, setGeoParams] = useState(initialGeoParams);
  const [currentStage, setCurrentStage] = useState('seedling');
  const [isShiftPressed, setIsShiftPressed] = useState(false);
  const [focusedInput, setFocusedInput] = useState(null);
  const [rangeValue, setRangeValue] = useState(0);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Shift') {
        setIsShiftPressed(true);
      }

      if (isShiftPressed && focusedInput) {
        const increment = 1;
        if (event.key === 'ArrowUp') {
          setGeoParams((prevState) => ({
            ...prevState,
            [focusedInput]: parseFloat(prevState[focusedInput]) + increment,
          }));
        } else if (event.key === 'ArrowDown') {
          setGeoParams((prevState) => ({
            ...prevState,
            [focusedInput]: parseFloat(prevState[focusedInput]) - increment,
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

  const handleChange = (event) => {
    const sliderValue = parseFloat(event.target.value);
    setGeoParams((prevState) => ({
      ...prevState,
      [event.target.id]: sliderValue,
    }));
  };

  const handleRange = (e) => {
    const value = parseFloat(e.target.value);
    setRangeValue(value);
    setGeoParams((prevState) => {
      const newParams = {};
      for (let key in prevState) {
        if (typeof prevState[key] === 'number') {
          newParams[key] = prevState[key] + value;
        }
      }
      return {
        ...prevState,
        ...newParams,
      };
    });
  };

  const handleSaveStage = (stage) => {
    setFlowerStages({
      ...flowerStages,
      [stage]: { ...geoParams },
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

  return (
    <>
      <div id="formContainer">
        {/* <label>Adjust All:</label>
        <input type="range" min={-range} max={range} step={0.01} value={rangeValue} onChange={handleRange} /> */}
        {/* <form>
          <label>RadiusTop</label>
          <input type="number" min={-100} max={100} value={geoParams.radiusTop} step={0.01} onChange={handleChange} onFocus={handleFocus} id="radiusTop" />
          <label>RadiusBottom</label>
          <input type="number" min={-100} max={100} value={geoParams.radiusBottom} step={0.01} onChange={handleChange} onFocus={handleFocus} id="radiusBottom" />
          <label>NoiseScale</label>
          <input type="number" min={-100} max={100} value={geoParams.noiseScale} step={0.01} onChange={handleChange} onFocus={handleFocus} id="noiseScale" />
          <label>NoiseImpactX</label>
          <input type="number" min={-100} max={100} value={geoParams.noiseImpactX} step={0.01} onChange={handleChange} onFocus={handleFocus} id="noiseImpactX" />
          <label>NoiseImpactY</label>
          <input type="number" min={-100} max={100} value={geoParams.noiseImpactY} step={0.01} onChange={handleChange} onFocus={handleFocus} id="noiseImpactY" />
          <label>NoiseImpactZ</label>
          <input type="number" min={-100} max={100} value={geoParams.noiseImpactZ} step={0.01} onChange={handleChange} onFocus={handleFocus} id="noiseImpactZ" />
          <label>Shape Height</label>
          <input type="number" min={-100} max={100} value={geoParams.shape_Height} step={0.01} onChange={handleChange} onFocus={handleFocus} id="shape_Height" />
          <label>Radial Segments</label>
          <input type="number" min={-100} max={100} value={geoParams.radialSegments} step={0.01} onChange={handleChange} onFocus={handleFocus} id="radialSegments" />
          <label>bloomRotationX</label>
          <input type="number" min={-100} max={100} value={geoParams.bloomRotationX} step={0.01} onChange={handleChange} onFocus={handleFocus} id="bloomRotationX" />
          <label>bloomRotationY</label>
          <input type="number" min={-100} max={100} value={geoParams.bloomRotationY} step={0.01} onChange={handleChange} onFocus={handleFocus} id="bloomRotationY" />
          <label>bloomRotationZ</label>
          <input type="number" min={-100} max={100} value={geoParams.bloomRotationZ} step={0.01} onChange={handleChange} onFocus={handleFocus} id="bloomRotationZ" />
          <label>RecRadius</label>
          <input type="number" min={-100} max={100} value={geoParams.recRadius} step={0.01} onChange={handleChange} onFocus={handleFocus} id="recRadius" />
          <label>recPositionY</label>
          <input type="number" min={-100} max={100} value={geoParams.recPositionY} step={0.01} onChange={handleChange} onFocus={handleFocus} id="recPositionY" />
          <label>stemHeight</label>
          <input type="number" min={-100} max={100} value={geoParams.stemHeight} step={0.01} onChange={handleChange} onFocus={handleFocus} id="stemHeight" />
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
        </form> */}
      </div>
      <Canvas style={{ width: '100vw', height: '300px', backgroundColor: 'black' }}>
        <directionalLight intensity={10} castShadow position={[2, 1, 5]} shadow-mapSize={[1024, 1024]} />
        <ambientLight intensity={0.5} />
        <Sky />
        {geoParams && <ThreeFlower ref={flower} geoParams={geoParams} position={[1, 0, 0]} rotation={[0, 0, 0]} />}
        <GardenBox />
        <OrbitControls />
      </Canvas>
    </>
  );
};

export default Sandbox;
