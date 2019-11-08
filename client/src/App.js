import React from "react";
import "./Reset.css";
import "./App.css";

import Anuncio from "./components/Anuncio";
import AdicionarAnuncio from "./components/AdicionarAnuncio";

function App() {
  return (
    <div className="App">
      <Anuncio />
      <AdicionarAnuncio />
    </div>
  );
}

export default App;
