import './App.css';
import { BrowserRouter, Route,Routes } from "react-router-dom";

import Homepage from "./pages/homepage.jsx";
import Pricing from "./pages/premium.jsx";
import Team from "./pages/teamp.jsx";
import Faq from "./pages/faqp.jsx";
import Errorpage from "./pages/404.jsx";
import Tos from "./pages/tosp.jsx";
import Refund from "./pages/rpp.jsx";
import Privacy from "./pages/ppp.jsx";
import Dashboard from "./pages/dashboard.jsx";
import Serverprem from "./pages/serversprem.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
       <Routes>
          <Route path="/" element={<Homepage title="home"/>}/> 
          <Route path="/pricing" element={<Pricing title="pricing"/>}/> 
          <Route path="/team" element={<Team title="team"/>}/> 
          <Route path="/faq" element={<Faq title="faq"/>}/>
          <Route path="/errorpage" element={<Errorpage title="404 error"/>}/>
          <Route path="/termsofservice" element={<Tos title="tos"/>}/> 
          <Route path="/refundpolicy" element={<Refund title="refund"/>}/> 
          <Route path="/privacypolicy" element={<Privacy title="privacy"/>}/>
          <Route path="/premium/servers" element={<Serverprem title="serverprem"/>}/>
          <Route path="/dashboard" element={<Dashboard title="dashboard"/>}/>  
       </Routes>
       
      </BrowserRouter>
    </>
  );
}

export default App;
