import {css} from "@emotion/react";



export const MainContainer = css`
  margin: 10px auto;
  width: 550px;
  height: 100%;
`;

export const MainHeader = css`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const MainTitle = css`
  margin: 20px 0 0 20px;
  font-size: 36px;
`;

export const TodoInputContainer = css`
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

export const TodoInput = css`
  padding: 0 70px;
  width: 100%;
  height: 100%;
  transition: padding .5s ease;
  
  &:focus {
    padding: 0 10px;
  }
`;

export const AddTodoButton = css`
  position: absolute;
  transform: translateY(-50%);
  top: 50%;
  right: 0;
  
  border: none;
  padding: 5px 20px;
  height: 100%;
`;

export const TodoContentList = css`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  width: 100%;
  height: 88%;
  
  overflow-y: auto;
  list-style: none;
  
`;


export const InfoPhoto = css`
  box-sizing: border-box;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  
  margin-top: 20px;
  width: 100%;
  height: 300px;
  
  overflow: hidden;
  cursor: pointer;
  
  &:hover {
    
    opacity: 0.8;
  }
`;

export const PhotoFile = css`
  display: none;
`;

export const Img = css`
  width: 100%;
`;

export const ChangeNav = css`
  position: absolute;
  bottom: 3px;
  right: 3px;
  
  display: none;
  
  border-radius: 5px;
  padding: 5px;
  
  background-color: #121212bb;
  color: #f0f0f0;
  font-size: 12px;
`;

export const InfoMain = css`
  margin-top: 30px;
  padding: 20px;
`;

export const InfoTitle = css`
  font-size: 20px;
  margin-bottom: 10px;
  cursor: default;
`;

export const ButtonHidden = css`
  display: none;
`;

export const InfoDetail = css`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const DetailContent = css`
  width: 48%;
`;

export const InfoInputContainer = css`
  display: flex;
  flex-direction: column;
  
  width: 100%;
`;

export const Label = css`
  font-weight: 600;
  margin-bottom: 5px;
`;

export const InfoInput = css`
  margin-bottom: 10px;
  border-bottom: 1px solid #dbdbdb;
  width: 100%;
  
  background-color: #f0f0f0;
`;

export const IntroduceInput = css`
  border-bottom: 1px solid #dbdbdb;
  width: 100%;
  height: 100px;
  resize: none;
  
  background-color: #f0f0f0;
`;
