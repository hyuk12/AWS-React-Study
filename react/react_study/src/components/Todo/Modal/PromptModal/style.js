import {css} from "@emotion/react";

export const modalContainer =css`
      position: absolute;
      top: 0;
      left: 0;
      z-index: 99;
      
      display: flex;
      justify-content: center;
      align-items: center;
      
      
      width: 100%;
      height: 100%;
      
      background-color: #000000aa;
      
    `;

export const modalBox = css`
      border-radius: 7px;
      width: 350px;
      height: 200px;

      background-color: #f6e9e9;
      overflow: hidden;
    `;

export const modalHeader = css`
      display: flex;
      justify-content: center;
      align-items: center;

      border-bottom: 2px solid #f3d9d9;
      height: 40px;
    `;

export const modalTitle = css`
        font-size: 18px;
        font-weight: 600;
    `;

export const modalMain = css`
      display: flex;
      justify-content: center;
      align-items: center;

      
      height: 120px;
    `;

export const modalInput = css`
      border: none;
      outline: none;
      border-bottom: 2px solid #c4c5f4;

      width: 90%;
      height: 30px;
      background-color: #f6e9e9;

    `;

export const modalFooter = css`
      display: flex;
      justify-content: center;
      align-items: center;
      
      height: 40px;
    `;



