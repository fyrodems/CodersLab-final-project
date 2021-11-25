import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import Home from "./components/pages/Home"
import Contact from "./components/pages/Contact"
import About from "./components/pages/About"
import Menu from "./components/common/Menu"
import "./scss/main.scss"
import Footer from "./components/common/Footer"

function App() {
  return (
   <BrowserRouter>
       <Menu/>
     <Routes>
       <Route exact path="/" element={<Home/>}/>
       <Route exact path="/contact" element={<Contact/>}/>
       <Route exact path="/about" element={<About/>}/>
       <Route exact path="/get-started" element={<About/>}/>
     </Routes>
       <Footer/>
     </BrowserRouter>
  );
}

export default App;