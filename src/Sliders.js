import React from 'react';
import { useState } from 'react';

export default function Sliders({leafDimensions, updateLeafDimensions}) {
    const [ formData, setFormData ] = useState({ r1: 0, r2: 0, r3: 0, r4: 0 })

    function handleChange(event) {
        setFormData(prev => {
            const updatedFormData = {
                ...leafDimensions,
                [event.target.id]: event.target.value
            };
            updateLeafDimensions(updatedFormData);
            return updatedFormData;
        });
    }

    return (
        <div className="slidecontainer">
            <input onChange={event => handleChange(event)} type="range" min="-50" max="50" value={formData.r1} className="slider" id="r1" />
            <input onChange={event => handleChange(event)} type="range" min="-50" max="50" value={formData.r2} className="slider" id="r2" />
            <input onChange={event => handleChange(event)} type="range" min="-50" max="50" value={formData.r3} className="slider" id="r3" />
            <input onChange={event => handleChange(event)} type="range" min="-50" max="50" value={formData.r4} className="slider" id="r4" />
        </div>
    )
}