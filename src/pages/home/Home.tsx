//import React from 'react';

import AboutUs from './AboutUs';
import Banner from './Banner';
import Faq from './Faq';
import FeaturedProjectsSection from './Featured';
import Footer from './Footer';
import Gallery from './Gallery';
import ReliefGoodsPost from './ReliefGoodsPost';
import Testimonials from './Testimonials';
// import ReliefItemsGrid from './ReliefItemsGrid';

const Home = () => {
    return (
        <div>
          
          <Banner></Banner>
         <ReliefGoodsPost></ReliefGoodsPost>
         <Testimonials></Testimonials>
         <Gallery></Gallery>
         <AboutUs></AboutUs>
         <FeaturedProjectsSection></FeaturedProjectsSection>
         <Faq></Faq>
         <Footer></Footer>
        </div>
    );
};

export default Home;