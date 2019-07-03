import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./Container/Home";
import './App.css'
import Header from "./Container/Header";

const App: React.FC = () => {
  return (<React.Fragment>
    <Header />
    <Home/>
  </React.Fragment>);
};

export default App;
