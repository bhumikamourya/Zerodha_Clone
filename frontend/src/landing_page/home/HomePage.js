import React from 'react';
import HeroSection from './HeroSection';
import AwardsSection from './AwardsSection';
import StatsSection from './StatsSection';
import PricingSection from './PricingSection';
import EducationSection from './EducationSection';
import OpenAccount from '../OpenAccount';

function HomePage() {
    return ( 
        <>
        <HeroSection/>
        <AwardsSection/>
        <StatsSection/>
        <PricingSection/>
        <EducationSection/>
        <OpenAccount/>
        </>
     );
}

export default HomePage;