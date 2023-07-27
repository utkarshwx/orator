import React from 'react';
import Header from "../components/header.jsx";
import Droppage from "../components/droppage.jsx";
import Footer from "../components/footer.jsx";
import Features from "../components/features.jsx";
import Premium from "../components/premium.jsx";
import Curves from "../components/curve1.jsx";
import Curve3 from "../components/curve3.jsx";
import Toastp from "../components/toastp.jsx";
import Toastl from "../components/toastl.jsx";

const homepage = () => {
  return (
    <div className='animate-in fade-in'>
        <Header/>
        <Droppage/>
        <Curves/>
        <Features/>
        <Curve3/>
        <Premium/>   
        {/* testing toasts you can add dynamically when ever required */}
        <Toastl/> 
        <Toastp/>
        <Footer/>
    </div>
  )
}

export default homepage