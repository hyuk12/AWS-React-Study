import {css} from "@emotion/react";

export const ModalContainer = css`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  width: 100%;
  height: 100%;
  
  background-color: #000000cc;
`;

export const ModalHidden = css`
  display: none;
`;

export const ModalSection = css`
  box-sizing: border-box;
  border-radius: 2px;
  padding: 2px;
  width: 350px;
  height: 200px;
  
  background-color: #ffffff;
  box-shadow: 0 0 10px 1px #000;
`;

export const ModalHeader = css`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  
  padding: 0 10px;
  height: 20%;
`;

export const ModalMain = css`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  padding: 10px;
  height: 60%;
`;

export const ModalModifyContent = (editing) => css`
  margin: 10px 0 0 ;
  border-bottom: 1px solid #dbdbdb;
  width: 100%;
  height: 35px;
  
  text-align: center;
`;

export const ModalFooter = css`
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  
  padding: 0 10px; 
  height: 20%;
`;