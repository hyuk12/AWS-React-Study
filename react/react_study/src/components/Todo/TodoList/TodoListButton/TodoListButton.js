/** @jsxImportSource @emotion/react*/
import React from 'react';
import * as S from '../style';

const TodoListButton = ({ onClick, children }) => {
    return (
        <button css={S.ItemButton} onClick={onClick}>
            {children}
        </button>

    );
};

export default TodoListButton;