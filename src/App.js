// import Navbar from "./components/Navbar";

import { BrowserRouter as Main,Routes,Route } from "react-router-dom";
import Mainpage from "./components/Mainpage";
import Photode from "./components/Photode";
import Contact from "./components/Contact";
import Veer from "./components/Veer";
import Zuvira from "./components/Zuvira";
import News from "./components/News";
function App() {
  return (
    <>
    <div>
    {/* <Navbar/> */}
     {/* <Siderbar/> */}
     
    
      
    <Main> 
    
    <Routes>
      <Route path="/" element={<Mainpage/>}></Route>
      <Route path="/demo" element={<Photode/>}></Route>
      <Route path="/veer" element={<Veer/>}></Route>
      <Route path="/zuvira" element={<Zuvira/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/news" element={<News/>}></Route>
    </Routes>
    
    </Main>
   
    {/* // <Tooltip/> */}
    </div>
    </>
  );
}

export default App;
