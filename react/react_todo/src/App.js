/** @jsxImportSource @emotion/react*/
import './App.css';
import TodoList from "./pages/TodoList/Main/TodoList";
import React from "react";
import {Global} from "@emotion/react";
import {reset} from "./styles/Global/reset";
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import {Route, Routes} from "react-router-dom";
import UserInfo from "./pages/TodoList/Main/UserInfo";

function App() {
  return (
      <>
        <Global styles={reset}/>

        <Routes>
            <Route path="/todoList" Component={TodoList}/>
            <Route path="/UserInformation" Component={UserInfo}/>
        </Routes>
      </>
  );
}

export default App;
