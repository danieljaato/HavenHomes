import { BrowserRouter, Routes,Route } from "react-router-dom";
import  Navbar from "./layout/Navbar.jsx";
import Hero from "./section/Hero.jsx";
import About from"./section/About.jsx";
import Service from "./section/Services.jsx";
import  Contact from "./section/Contact.jsx";
function App(){
  return (
  <BrowserRouter>
  <div className="min-h-screen overflow-x-hidden">
    <Navbar />
      <main>
        <Routes>
                <Route path ="/"element={<Hero/>}/>
                <Route path ="/about"element={<About/>}/>
                <Route path ="/service"element={<Service/>}/>
                <Route path ="/contact"element={<Contact/>}/>
        </Routes>
      </main>
    
  </div>;
  </BrowserRouter>
  );
}

export default App;
