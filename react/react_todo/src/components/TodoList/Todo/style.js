import {css} from "@emotion/react";

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


