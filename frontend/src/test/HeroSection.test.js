import React from 'react';
import {render ,screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import HeroSection from '../landing_page/home/HeroSection';

//Test Suit(Multiple test cases)
describe('Hero Component',()=>{
    test('renders hero image',()=>{
        render(<HeroSection/>);
        const heroImage = screen.getByAltText('Hero Image');
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute('src' , 'media/images/homeHero.png')
        });
        test('renders Signup button',()=>{
        render(<HeroSection/>);
        const signupbtn = screen.getByRole('button' ,{name: /Sign up for free/i});
        expect(signupbtn).toBeInTheDocument();
        expect(signupbtn).toHaveClass('btn-primary');
        });
});

