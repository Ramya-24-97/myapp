import React from "react";
import Art from "./pages/Art";
import Faq from "./pages/Faq";
import Video from "./pages/Video";
import Contact from "./pages/Contact";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
     <Art />
     <Faq />
     <Video />
     <Contact />
    </div>
  );
}

export default App;
