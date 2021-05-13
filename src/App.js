import React from "react";
import SearchDisplay from "./SearchDisplay";
import { Router } from "@reach/router";

import "./style.css";

const App = () => {
  return (
    <React.StrictMode>
      <div>
        <header>
          <h1>Doggies</h1>
        </header>
        <Router>
          <SearchDisplay path="/" />
        </Router>
      </div>
    </React.StrictMode>
  );
};

export default App;
