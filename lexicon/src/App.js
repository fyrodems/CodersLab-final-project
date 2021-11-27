import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import Home from "./components/pages/Home"
import Contact from "./components/pages/Contact"
import About from "./components/pages/About"
import Menu from "./components/common/Menu"
import "./scss/main.scss"
import Footer from "./components/common/Footer"
import GetStarted from "./components/pages/GetStarted";
import Train from "./components/pages/pages-under-getstarted/Train"
import Articles from "./components/pages/pages-under-getstarted/Articles"
import {databasesVocabulary} from "../../lexicon/src/data/databases-vocabulary";

function App() {
  return (
   <BrowserRouter>
       <Menu/>
     <Routes>
       <Route exact path="/" element={<Home/>}/>
       <Route exact path="/contact" element={<Contact/>}/>
       <Route exact path="/about" element={<About/>}/>
       <Route exact path="/get-started" element={<GetStarted/>}/>
       <Route exact path="/get-started/articles" element={<Articles/>}/>
       <Route exact path="/get-started/train" element={<Train vocabulary={databasesVocabulary}/>}/>
     </Routes>
       <Footer/>
     </BrowserRouter>
  );
}

export default App;