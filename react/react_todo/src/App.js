/** @jsxImportSource @emotion/react*/
import './App.css';
import React from "react";
import {css, Global} from "@emotion/react";
import {reset} from "./styles/Global/reset";
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import {Route, Routes} from "react-router-dom";
import Aside from "./components/Aside/Aside";
import TodoHome from "./components/TodoList/home/TodoHome";
import UnifiedPage from "./pages/TodoList/Main/UnifiedPage";

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
                  <Route path="/home"  element={<TodoHome/>}/>
                  <Route path="/todoList" element={<UnifiedPage pageType={'todo'}/>}/>
                  <Route path="/UserInformation" element={<UnifiedPage pageType={'userInfo'}/>}/>
              </Routes>
          </div>

      </>
  );
}

export default App;
