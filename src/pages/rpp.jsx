import React from 'react';
import Header from "../components/header.jsx";
import Footer from "../components/footer.jsx";
import Refund from "../components/refund.jsx";
import Curves from "../components/curve2.jsx";

const rpp = () => {
  return (
    <div>
        <Header/>
        <Refund/>
        <Curves/>
        <Footer/>
    </div>
  )
}

export default rpp