/** @jsxImportSource @emotion/react*/
import React from 'react';
import {css} from "@emotion/react";



const ModalButton = ({ onClick, children, buttonCount }) => {

    const modalButton = css`
      border: none;
      width: ${(100 / buttonCount) + '%'};
      height: 100%;

      background-color: #d0c8ed;
      cursor: pointer;

      &:not(:last-of-type) {
        border-right: 1px solid #b9b5c7;
      }

      &:hover {
        background-color: #9f88ed;
      }

      &:active {
        background-color: #896cec;
      }
    `;
    return (
        <button css={modalButton} onClick={onClick} >{children}</button>
    );
};

export default ModalButton;
