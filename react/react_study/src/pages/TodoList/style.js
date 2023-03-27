import {css} from "@emotion/react";

export const container = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px auto;
  width: 900px;
  
`;

export const inputContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
  
  margin-bottom: 200px;
  width: 600px;
`;

export const todoInput = css`
  border: none;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  width: 300px;
  height: 50px;
  
  font-size: 20px;
  background-color: aliceblue;
`;

export const todoButton = css`
  border: none;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  width: 100px;
  height: 50px;

  font-size: 20px;
  background-color: #61dafb;
`;

export const todoListContainer = css`

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  border: none;
  width: 600px;
  height: 800px;
  
  overflow-y: auto;

  background-color: rgba(240, 255, 131, 0.29);
`;

export const todoList = css`
  display: flex;
  justify-content: center;
  align-items: center;
  
  width: 600px;
`;

export const todoListItem = css`
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  
  margin: 10px 0 ;
  border: none;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  padding: 10px;
  
  width: 300px;
  height: 50px;
  
  font-size: 20px;
  background-color: aliceblue;
  
`;

export const todoDeleteButton = css`

  padding: 10px;
  border: none;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  width: 100px;
  height: 50px;

  font-size: 20px;
  background-color: #61dafb;
`;

export const todoListNumber = css`
  padding: 10px;

`;

export const todoCompleteButton =css`

  padding: 10px;
  border: none;
  
  width: 100px;
  height: 50px;

  font-size: 20px;
  background-color: rgba(251, 197, 97, 0.4);
`;

export const changeTodoCompleteButton = css`
  padding: 10px;
  border: none;
  
  width: 100px;
  height: 50px;

  font-size: 20px;
  background-color: rgba(140, 241, 58, 0.4);
`;