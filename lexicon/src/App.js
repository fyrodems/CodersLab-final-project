import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import Home from "./components/pages/Home"
import Contact from "./components/pages/Contact"
import Menu from "./components/common/Menu"
import "./scss/main.scss"
import Footer from "./components/common/Footer"
import GetStarted from "./components/pages/GetStarted";
import Train from "./components/pages/pages-under-getstarted/Train"
import Articles from "./components/pages/pages-under-getstarted/Articles"
import Login from "./components/pages/Login"
import {databasesVocabulary} from "../../lexicon/src/data/databases-vocabulary";
import {
    Database,
    DatabaseModels,
    DBMS,
    DbmsTypes,
    IsOrAre
} from "./components/pages/pages-under-getstarted/Articles-texts";
import Flashcards from "./components/pages/pages-under-getstarted/Train-Flashcards"
import QuizDatabases from "./components/pages/pages-under-getstarted/Quiz";

function App() {
  return (
   <BrowserRouter>
       <Menu/>
     <Routes>
       {/*<Route component={NotFound} />*/}
       <Route exact path="/" element={<Home/>}/>
       <Route exact path="/login" element={<Login/>}/>
       <Route exact path="/contact" element={<Contact/>}/>


       <Route exact path="/get-started" element={<GetStarted/>}/>

       <Route exact path="/get-started/articles" element={<Articles/>}/>
         <Route exact path="/get-started/articles/database" element={<Database/>}/>
         <Route exact path="/get-started/articles/dbms" element={<DBMS/>}/>
         <Route exact path="/get-started/articles/dbms-types" element={<DbmsTypes/>}/>
         <Route exact path="/get-started/articles/database-models" element={<DatabaseModels/>}/>
         <Route exact path="/get-started/articles/is-or-are" element={<IsOrAre/>}/>

       <Route exact path="/get-started/train" element={<Train/>}/>
         <Route exact path="/get-started/train/quiz" element={<QuizDatabases/>}/>
         <Route exact path="/get-started/train/flashcards" element={<Flashcards vocabulary={databasesVocabulary}/>}/>

     </Routes>
       <Footer/>
     </BrowserRouter>
  );
}

export default App;