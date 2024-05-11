import React, { useState } from "react";

const ShapeMenu = ({ type, onAddShape }) => {
const [cylinderColor, setCylinderColor] = useState("#ffffff"); // default color white
const [sphereColor, setSphereColor] = useState("#ffffff");
const [boxColor, setBoxColor] = useState("#ffffff");

    // States for parameters, initialize based on expected input for Three.js
    const [cylinderParams, setCylinderParams] = useState({
        radiusTop: 1, radiusBottom: 1, height: 2, radialSegments: 32
    });
    const [sphereParams, setSphereParams] = useState({
        radius: 1, widthSegments: 32, heightSegments: 16
    });
    const [boxParams, setBoxParams] = useState({
        width: 1, height: 1, depth: 1
    });

    const handleInputChange = (setState) => (e) => {
        setState(prev => ({ ...prev, [e.target.name]: parseFloat(e.target.value) }));
    };

    // When adding shape, ensure to match the expected structure for `AddShape`
    const addShape = (params, type, color) => {
        const args = Object.values(params);
        onAddShape({ type, args, color, id: Date.now() });
    };

    const handleCylinderColorChange = (e) => setCylinderColor(e.target.value);
const handleSphereColorChange = (e) => setSphereColor(e.target.value);
const handleBoxColorChange = (e) => setBoxColor(e.target.value);

    const ShapeForm = ({ type, params, onChange, color, onColorChange }) => (
        <form>
            {Object.keys(params).map(key => (
                <div key={key}>
                    <label>{key.replace(/([A-Z])/g, ' $1').trim()}:</label>
                    <input name={key} value={params[key]} onChange={onChange} type="number" />
                </div>
            ))}
            <div>
                <label>Color:</label>
                <input type="color" value={color} onChange={onColorChange} />
            </div>
            <button type="button" onClick={() => addShape(params, type, color)}>Add shape</button>
        </form>
    );
    

    const renderForm = () => {
        switch (type?.shapeMenu) {
            case 'cylinder':
                return <ShapeForm type="cylinder" params={cylinderParams} onChange={handleInputChange(setCylinderParams)} color={cylinderColor} onColorChange={handleCylinderColorChange} />;
            case 'sphere':
                return <ShapeForm type="sphere" params={sphereParams} onChange={handleInputChange(setSphereParams)} color={sphereColor} onColorChange={handleSphereColorChange} />;
            case 'box':
                return <ShapeForm type="box" params={boxParams} onChange={handleInputChange(setBoxParams)} color={boxColor} onColorChange={handleBoxColorChange} />;
            default:
                return <p>Select a shape type</p>;
        }
    };

    return (
        <div style={{ zIndex: 10, color: 'black', background: 'white', width: '300px', height: '400px', position: 'absolute', padding: '20px' }}>
            {type && renderForm()}
        </div>
    );
};

export default ShapeMenu;
