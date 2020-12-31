import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header/Header";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <h2>hello</h2>
    </BrowserRouter>
  );
};

export default App;
