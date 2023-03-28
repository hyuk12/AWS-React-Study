import {css} from "@emotion/react";


export const TodoList = css`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  margin-bottom: 5px;
  border-radius: 7px;
  padding: 10px;
  width: 600px;

  background-color: rgba(243, 243, 241, 0.37);
`;

export const TodoContent = css`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  
  width: 85%;
  height: 40px;
`;

export const ItemGroup = css`
  display: flex;
  align-items: center;
  
  height: 40px;
`;

export const ItemButton = css`
  display: flex;
  align-items: center;
  border: none;
  height: 100%;
  
  
  font-size: 1.2rem;
  background-color: #ffffff00;
  
  cursor: pointer;
`;