import React from 'react';
import PickColor from './PickColor';

const RgbToHex = () => {



    return (
        <div className='block my-6 gap-5 lg:flex'>
            <div className='w-full'>
                <PickColor></PickColor>
            </div>
            <div>
                <p className='text-center lg:text-start mb-3 font-bold'>Hex to RGBA</p>
                <p>A hexadecimal (hex) color code is a format for expressing colors in HTML and XML in the form of a six hexadecimal digits (6-6-6) number in the form #RRGGBB.Hexadecimal and octal color codes are used to represent colors in computer graphics. Hexadecimal is used widely in HTML to specify color values in web pages. The color code is used to specify the exact color you want. Each color in the code is specified by a pair of digits (0-9 a-f) representing the intensity of each of the red, green, and blue components of the color.

                    For example, the hexadecimal code for pure white is #FFFFFF, and the hexadecimal code for pure black is #000000.</p>

                <br />
                <div>
                    <p>Convert HEX TO RGB coming soon......</p>
                </div>
            </div>
        </div>
    );
};


export default RgbToHex;

