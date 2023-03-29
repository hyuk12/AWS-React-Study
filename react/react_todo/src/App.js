/** @jsxImportSource @emotion/react*/
import './App.css';
import TodoList from "./pages/TodoList/Main/TodoList";
import React from "react";
import {css, Global} from "@emotion/react";
import {reset} from "./styles/Global/reset";
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import {Route, Routes} from "react-router-dom";
import UserInfo from "./pages/TodoList/Main/UserInfo";
import Aside from "./components/Aside/Aside";

 const Container = css`
  position: relative;
  margin: 50px auto;
  border: 2px solid #dbdbdb;
  width: 600px;
  height: 800px;
  background-color: #fff;
  overflow: hidden;
`;

function App() {
  return (
      <>
        <Global styles={reset}/>
          <div css={Container}>
              <Aside/>
              <Routes>
                  <Route path="/todoList" Component={TodoList}/>
                  <Route path="/UserInformation" Component={UserInfo}/>
              </Routes>
          </div>

      </>
  );
}

export default App;
