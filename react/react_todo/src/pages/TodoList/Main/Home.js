/** @jsxImportSource @emotion/react*/
import {css} from "@emotion/react";
import React from 'react';
import {FcFile} from "@react-icons/all-files/fc/FcFile";
import {FcPlus} from "@react-icons/all-files/fc/FcPlus";
import Aside from "../../../components/Aside/Aside";

const Container = css`
  position: relative;
  margin: 50px auto;
  border: 2px solid #dbdbdb;
  width: 600px;
  height: 800px;
  background-color: #fff;
  overflow: hidden;
`;

const MainContainer = css`
  margin: 10px auto;
  width: 550px;
  height: 100%;
`;

const MainHeader = css`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const MainTitle = css`
  margin: 20px 0 0 20px;
  font-size: 36px;
`;

const TodoInputContainer = css`
  position: relative;
  display: flex;
  align-items: center;
  
  margin: 0 0 3px;
  border-bottom: 1px solid #dbdbdb;
  padding: 0 50px 0 0;
  width: 70%;
  height: 40px;
  
  font-size: 20px;
`;

const TodoInput = css`
  padding: 0 70px;
  width: 100%;
  height: 100%;
  transition: padding .5s ease;
  
  &:focus {
    padding: 0 10px;
  }
`;

const AddTodoButton = css`
  position: absolute;
  transform: translateY(-50%);
  top: 50%;
  right: 0;
  
  border: none;
  padding: 5px 20px;
  height: 100%;
`;

const TodoContentList = css`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  width: 100%;
  height: 88%;
  
  overflow-y: auto;
  list-style: none;
  
`;

const Home = () => {
    return (
        <div css={Container}>
            <Aside/>
            <main css={MainContainer}>
                <header css={MainHeader}>
                    <h1 css={MainTitle}>Todo</h1>
                    <div css={TodoInputContainer}>
                        <FcFile/>
                        <input css={TodoInput} type="text" placeholder={"Please Enter Todo..."}/>
                        <button css={AddTodoButton} disabled><FcPlus/></button>
                    </div>
                </header>
                <ul css={TodoContentList}>

                </ul>
            </main>
        </div>
    );
};

export default Home;