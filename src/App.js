import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppCore from "./containers/AppCore.Container";
import {BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
      <Router>
        <AppCore/>
      </Router>
  );
}

export default App;
