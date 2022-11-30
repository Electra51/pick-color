import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Banner = () => {

    const [color, setColor] = useState("");
    return (



        
            <div className="hero min-h-screen rounded-lg overflow-x-hidden" style={{ backgroundImage: `url("https://cdn.pixabay.com/photo/2014/08/08/14/10/watercolors-413271__340.jpg")` }} >
                <div className="hero-content flex-col lg:flex-row-reverse overflow-auto">
                    
                    <div className='block' data-aos='fade-right'>
                    <input type="text" value={color} onChange={(e)=>setColor(e.target.value)} placeholder="Type correct color name or color code " className="input input-bordered input-primary w-full lg:w-full max-w-md" />
                        
                        <textarea style={{backgroundColor:color}} className="textarea textarea-primary w-full lg:w-full max-w-md mt-3" placeholder=""></textarea>
                    
                    </div>
                  
                    
                    <div className='w-full lg:w-1/2' data-aos='fade-left'>
                        <p className='font-bold my-6 text-white'>WELCOME HERE!</p>
                        <h1 className="text-4xl font-bold text-white">PICK YOUR FAVORITE <br /> COLOR HERE</h1>
                        <p className="my-6  font-semibold text-white">Color is the visual perceptual property deriving from the spectrum of light interacting with the photoreceptor cells of the eyes. </p>
                        <Link to='/login'><button className="btn ">Get Started</button></Link>

                      
                        

                    </div>
                </div>
            </div>
       

    );
};

export default Banner;