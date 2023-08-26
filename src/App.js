import React from "react";
import Art from "./pages/Art";
import Faq from "./pages/Faq";
import Video from "./pages/Video";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
     <Art />
     <Faq />
     <Video />
    </div>
  );
}

export default App;
