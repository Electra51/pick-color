import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const SocialIcon = () => {
    return (
        <div>
            <Link className='hover:text-warning' to='https://www.instagram.com/'><FaInstagram/></Link>
            <Link className='hover:text-warning' to='https://web.facebook.com/'><FaFacebook /></Link>
            <Link className='hover:text-warning' to='https://twitter.com/'><FaTwitter /></Link>
            <Link className='hover:text-warning' to='https://web.whatsapp.com/'><FaWhatsapp /></Link>
        </div>
    );
};

export default SocialIcon;