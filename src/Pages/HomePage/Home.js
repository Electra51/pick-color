import React from 'react';
import Banner from './Banner';

import PopularColor from './PopularColor';
import SecondSection from './SecondSection';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
           <SecondSection></SecondSection>
            <PopularColor></PopularColor>
        </div>
    );
};

export default Home;