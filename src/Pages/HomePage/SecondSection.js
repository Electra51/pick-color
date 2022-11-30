import React from 'react';
import PopularColor from './PopularColor';

const SecondSection = () => {
    return (



        <div className='block mt-20 lg:flex' >
            <div className="col-span-2" data-aos='fade-right'>
                <p className='text-center lg:text-3xl lg:text-start font-bold '>
                    Color Picker
                </p>

                <p className='text-center  lg:text-start mb-10'>
                    Use the color picker by clicking and dragging your cursor inside the picker area to highlight a color on the right. Input Hex, RGB, HSL or CMYK values to search for a particular color in the fields below the color swatch; click the swatch to add it to palette. After selecting a color, experiment with different harmonies by using the dropdown below the color picker.
                </p>
            </div>
            <div className="text-center w-full border rounded-md" data-aos='fade-left'>

                <div className='mt-5'>
                    <PopularColor></PopularColor>
                </div>
                <p className='mt-3'>Pick color</p>
            </div>

        </div>







    );
};

export default SecondSection;