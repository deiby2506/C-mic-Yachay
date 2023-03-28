import { Routes, Route } from "react-router-dom";
import  Home  from "../pages/Home";
import Header from "./Header";
import Quienes from "../components/Somos";
import Instruccion from "../pages/Instruccion";
import Escena2 from "../pages/Escena2";
import Escena3 from "../pages/Escena3";
import Escena4 from "../pages/Escena4";
import Escena5 from "../pages/Escena5";
import Escena6 from "../pages/Escena6";
import Escena7 from "../pages/Escena7";
import Escena8 from "../pages/Escena8";
import Escena9 from "../pages/Escena9";
import Escena10 from "../pages/Escena10";
import Escena11 from "../pages/Escena11";
import Escena12 from "../pages/Escena12";
import Comic from "../pages/Comic";
import Footer from "../components/Footer";


function App() {
    return(
        <>
        <Header />
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/quienes"  element={<Quienes />}/>
            <Route path="/comic" element={<Comic/>}/>
            <Route path="/escena2" element={<Escena2 />}/>
            <Route path="/escena3" element={<Escena3 />}/>
            <Route path="/escena4" element={<Escena4 />}/>
            <Route path="/escena5" element={<Escena5 />}/>
            <Route path="/escena6" element={<Escena6 />}/>
            <Route path="/escena7" element={<Escena7 />}/>
            <Route path="/escena8" element={<Escena8 />}/>
            <Route path="/escena9" element={<Escena9 />}/>
            <Route path="/escena10" element={<Escena10 />}/>
            <Route path="/escena11" element={<Escena11 />}/>
            <Route path="/escena12" element={<Escena12 />}/>
            <Route path="/instruccion" element={<Instruccion />}/>
        </Routes>
        <Footer />
        </>
    );
}

export default App;
