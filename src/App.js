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
          <Route path="/en/pricing" element={<Pricing title="pricing"/>}/> 
          <Route path="/en/team" element={<Team title="team"/>}/> 
          <Route path="/en/faq" element={<Faq title="faq"/>}/>
          <Route path="/en/errorpage" element={<Errorpage title="404 error"/>}/>
          <Route path="/en/termsofservice" element={<Tos title="tos"/>}/> 
          <Route path="/en/refundpolicy" element={<Refund title="refund"/>}/> 
          <Route path="/en/privacypolicy" element={<Privacy title="privacy"/>}/>
          <Route path="/en/premium/servers" element={<Serverprem title="serverprem"/>}/>
          <Route path="/en/dashboard" element={<Dashboard title="dashboard"/>}/>  
       </Routes>
       
      </BrowserRouter>
    </>
  );
}

export default App;
