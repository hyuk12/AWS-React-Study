/** @jsxImportSource @emotion/react*/
import './App.css';
import Home from "./pages/TodoList/Main/Home";
import React from "react";
import {Global} from "@emotion/react";
import {reset} from "./styles/Global/reset";
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import {Route, Routes} from "react-router-dom";
import Aside from "./components/Aside/Aside";

function App() {
  return (
      <>
        <Global styles={reset}/>

        <Routes>
            <Route path="/" Component={Home}/>
        </Routes>
      </>
  );
}

export default App;
