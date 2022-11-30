import React from 'react';
import img from '../../Assets/images/new.png';
const ThirdSection = () => {
    return (
        <div>
             <div className='block my-20 lg:flex ' >
            <div className="text-center w-full  lg:w-1/2 m-0" data-aos='fade-left'>
                    <img src={img} alt="" className='border rounded-md'/>
                 </div>
             <div className="w-full lg:w-1/2" data-aos='fade-right'>
                <p className='text-center lg:text-3xl lg:text-start font-bold'>
                Color Theory
                </p>
           
                <p className='text-center lg:text-start mb-3'>
                Color theory is both the science and art of using color. It explains how humans perceive color; and the visual effects of how colors mix, match or contrast with each other. Color theory also involves the messages colors communicate; and the methods used to replicate color.Color theory is the basis for the primary rules and guidelines that surround color and its use in creating aesthetically pleasing visuals. By understanding color theory basics, you can begin to parse the logical structure of color for yourself to create and use color palettes more strategically. The result means evoking a particular emotion, vibe, or aesthetic. Color is an important aspect, if not the most important aspect of design, and can influence the meaning of text, how users move around a particular layout, and what they feel as they do so. By understanding color theory, you can be more intentional in creating visuals that make an impact Understanding how colors work together, the impact they can have on mood and emotion, and how they change the look and feel of your website is critical to help you stand out from the crowd — for the right reasons.
            </p>
                       </div>
              
                  
          </div>
        </div>
    );
};

export default ThirdSection;