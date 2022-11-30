import React, { useState } from 'react';
import { SketchPicker } from 'react-color';


const PickColor = () => {

    const [currentColor, setCurrentColor] = useState('#000')
    const handleOnChange = (color) => {
        setCurrentColor(color.hex)
       
    }
    return (
        
            <div className='w-full'>
            <SketchPicker className='w-full'
                color={currentColor}
            onChangeComplete={handleOnChange}></SketchPicker>
        </div>
        
    );
};

export default PickColor;