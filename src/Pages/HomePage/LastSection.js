import React from 'react';
import SocialIcon from '../../Shared/SocialIcon';

const LastSection = () => {
    return (
        <div className='border rounded-md flex justify-between items-center p-10 bg-gray-300 text-black'>
            <div> <p className=''>SHARE OUR COLOR PICKER WITH YOUR FRIENDS!</p></div>
            <div>
                <SocialIcon></SocialIcon>
            </div>
        </div>
    );
};

export default LastSection;