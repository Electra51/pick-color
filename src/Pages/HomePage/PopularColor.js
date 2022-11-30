import React, { useState } from 'react';
import { CompactPicker } from 'react-color';
const PopularColor = () => {
    const [currentColor, setCurrentColor] = useState('#000')
    const handleOnChange = (color) => {
        setCurrentColor(color.hex)

    }
    return (
        <div className='w-full'>
            <CompactPicker className='w-full'
                color={currentColor}
                onChangeComplete={handleOnChange}></CompactPicker>
        </div>
    );
};

export default PopularColor;