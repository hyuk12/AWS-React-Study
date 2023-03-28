/** @jsxImportSource @emotion/react */
import React from 'react';
import {css} from "@emotion/react";

const NavContainer = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  width: 100%;
  height: 50px;
  
  background-color: #282c34;
`;

const NavLeftArea = css`
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  
  margin-left: 100px;
  width: 70%;
`;

const NavRightArea = css`
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  
  margin-right: 50px;
  width: 30%;
`;

const NavTitle = css`
  
  padding: 10px;
  color: azure;
  font-size: 20px;
  font-weight: 400;
`;

const Nav2 = () => {
    return (
        <div css={NavContainer} className={"font-sans"}>
            <div css={NavLeftArea}>
                <span css={NavTitle}>logo</span>
                <span css={NavTitle}>Main</span>
                <span css={NavTitle}>Hot Sale</span>
                <span css={NavTitle}></span>
            </div>
            <div css={NavRightArea}>
                <span css={NavTitle}>alert</span>
                <span css={NavTitle}>profile</span>

            </div>
        </div>
    );
};

export default Nav2;