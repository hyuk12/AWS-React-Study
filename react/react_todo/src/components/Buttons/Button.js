/** @jsxImportSource @emotion/react*/
import React from 'react';
import {css} from "@emotion/react";

const TodoButton = css`
  border: none;
  padding: 5px;
`;

const Button = ({ onClick, children }) => {
    return (
        <button css={TodoButton} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;