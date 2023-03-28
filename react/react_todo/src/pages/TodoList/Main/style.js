import {css} from "@emotion/react";

export const Container = css`
  position: relative;
  margin: 50px auto;
  border: 2px solid #dbdbdb;
  width: 600px;
  height: 800px;
  background-color: #fff;
  overflow: hidden;
`;

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

export const ContentContainer = css`
  margin: 10px;
  width: 230px;
  height: 230px;
  
  box-shadow: 0 0 5px 1px #dbdbdb;
  cursor: pointer;
  transition: box-shadow .3s ease;
  
  &:hover {
    box-shadow: 0 0 10px 1px #121212;
  }
`;

export const ContentHeader = css`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  
  border-bottom: 1px solid #f0f0f0;
  padding: 10px 10px 5px;
  height: 46px;
`;

export const TodoDate = css`
  display: flex;
  align-items: flex-start;
  
  height: 100%;
  font-size: 20px;
  line-height: 15px;
`;

export const TodoDateTime = css`
  display: flex;
  align-items: flex-end;
  
  font-size: 11px;
`;

export const ContentMain = css`
  box-sizing: border-box;
  padding: 10px;
  height: 149.5px;
  word-break: keep-all;
  line-height: 25px;
`;

export const ContentFooter = css`
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;
  padding: 0 10px 10px;
  height: 34.5px;
`;

export const ModifyButton = css`
  border: none;
  padding: 5px;
`;

export const RemoveButton = css`
  border: none;
  padding: 5px;
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
