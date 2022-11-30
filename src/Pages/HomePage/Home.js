import React from 'react';
import Banner from './Banner';
import LastSection from './LastSection';
import SecondSection from './SecondSection';
import ThirdSection from './ThirdSection';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SecondSection></SecondSection>
            <ThirdSection></ThirdSection>
            <LastSection></LastSection>
            
        </div>
    );
};

export default Home;