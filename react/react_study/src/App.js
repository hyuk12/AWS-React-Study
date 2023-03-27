/** @jsxImportSource @emotion/react*/
import {Link, Route, Routes, useNavigate} from "react-router-dom";
import React from 'react';
import InputSample from "./pages/InputSample/InputSample";
import InputSample2 from "./pages/InputSample/InputSample2";
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import MainAside from "./components/Aside/MainAside";
import {reset} from "./styles/Global/reset";
import {Global} from "@emotion/react";
import Sample from "./pages/InputSample/Sample";
import UserList from "./pages/UserList/UserList";
import TodoList from "./pages/TodoList/TodoList";
import Todo from "./pages/Todo/Todo";

function Test1() {
    return (<h1>test1</h1>);
}

function Test2() {
    return (<h1>test2</h1>);
}

function App() {
  return (
      <>
        <Global styles={reset} />
          <MainAside />

          <Routes>
            <Route path={"/t1"} Component={Test1}></Route>
            <Route path={"/t2"} Component={Test2}></Route>
              <Route path={"/sample/input"} Component={Sample}></Route>
              <Route path={"/sample/input/1"} Component={InputSample}></Route>
            <Route path={"/sample/input/2"} Component={InputSample2}></Route>
            <Route path={"/users"} Component={UserList}></Route>
              <Route path={"/todo"} Component={TodoList}></Route>
              <Route path={"/todo2"} Component={Todo}></Route>

          </Routes>
      </>
  );
}

export default App;
