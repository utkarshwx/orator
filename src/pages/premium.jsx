import React from 'react';
import Header from "../components/header.jsx";
import Footer from "../components/footer.jsx";
import Pricing from "../components/pricing.jsx";
import Features from "../components/premiumf.jsx";
import Curve2 from "../components/curve2.jsx";
import Curve1 from "../components/curve1.jsx";

const homepage = () => {
  return (
    <div className="animate-in fade-in ">
        <Header/>        
        <Features/>
        <Curve1/>
        <Pricing/>
        <Curve2/>
        <Footer/>
        
    </div>
  )
}

export default homepage