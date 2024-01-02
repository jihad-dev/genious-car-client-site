import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Services from '../Services/Services';
import Contact from '../Contact/Contact';
import Products from '../../Products/Products';
import OurTeam from '../../OurTeam/OurTeam';
import Features from '../../Features/Features';
import Testimonial from '../../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <About></About>
           <Services></Services>
           <Contact></Contact>
           <Products></Products>
           <OurTeam></OurTeam>
           <Features></Features>
           <Testimonial></Testimonial>
        </div>
    );
};

export default Home;