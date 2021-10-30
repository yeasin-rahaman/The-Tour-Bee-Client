import React from 'react';
import Banner from '../Banner/Banner';
import Guide from '../Guide/Guide';
import HomeServices from '../HomeServices/HomeServices';
import OurGuides from '../OurGuides/OurGuides';
import GetInTouch from '../GetInTouch/GetInTouch';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <HomeServices></HomeServices>
            <Guide></Guide>
            <OurGuides></OurGuides>
            <GetInTouch></GetInTouch>


        </div>
    );
};

export default Home;