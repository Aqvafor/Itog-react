import React from 'react';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import FeatureSection from './components/feature/FeatureSection';
import Possible from './components/vozm/Possible';
import OwnSchool from './components/own_school/OwnSchool';
import Footer from './components/footer/Footer';
import './index.css'
 
const App = () => {
    return (
        <div className="app">
            <Header />
            <Hero />
            <FeatureSection />
            <Possible />
            <OwnSchool />
            <Footer />
        </div>
    );
};

export default App;
