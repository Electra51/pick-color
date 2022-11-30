import React, { useState } from 'react';


const Banner = () => {

    const [color, setColor] = useState("");
    return (



        <div>
            <div className="hero min-h-screen rounded-lg px-5" style={{ backgroundImage: `url("https://cdn.pixabay.com/photo/2014/08/08/14/10/watercolors-413271__340.jpg")` }}>
                <div className="hero-content flex-col lg:flex-row-reverse overflow-auto">
                    
                    <div className='block'>
                    <input type="text" value={color} onChange={(e)=>setColor(e.target.value)} placeholder="Type correct color name or color code " className="input input-bordered input-primary w-full lg:w-full max-w-md" />
                        
                        <textarea style={{backgroundColor:color}} className="textarea textarea-primary w-full lg:w-full max-w-md mt-3" placeholder=""></textarea>
                    
                    </div>
                  
                    
                    <div className='w-full lg:w-1/2'>
                        <p className='font-bold py-6 text-white'>WELCOME HERE!</p>
                        <h1 className="text-4xl font-bold text-white">PICK YOUR FAVORITE <br /> COLOR HERE</h1>
                        <p className="py-6  font-semibold text-white">Color is the visual perceptual property deriving from the spectrum of light interacting with the photoreceptor cells of the eyes. </p>
                        <button className="btn btn-[#0000FF] btn-outline">Get Started</button>

                      
                        

                    </div>
                </div>
            </div>
        </div>

    );
};

export default Banner;