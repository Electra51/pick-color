import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const SocialIcon = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-8'>
            <Link className='hover:text-error' to='https://www.instagram.com/'><FaInstagram /></Link>
            <Link className='hover:text-error' to='https://web.facebook.com/'><FaFacebook /></Link>
            <Link className='hover:text-error' to='https://twitter.com/'><FaTwitter /></Link>
            <Link className='hover:text-error' to='https://www.linkedin.com/in/safayet-nur-electra-a17a901b0/'><FaLinkedin /></Link>
        </div>
    );
};

export default SocialIcon;