/** @jsxImportSource @emotion/react*/
import React from 'react';
import {FcEditImage} from "@react-icons/all-files/fc/FcEditImage";
import {FcEmptyTrash} from "@react-icons/all-files/fc/FcEmptyTrash";
import * as S from './style';
import TodoListButton from "./TodoListButton/TodoListButton";


const TodoList = ({ todo, openModal, onRemove}) => {
    return (
        <div css={S.TodoList}>
            <div css={S.TodoContent}>{todo.content}</div>
            <div css={S.ItemGroup}>
                <TodoListButton onClick={() => openModal(todo.id)}><FcEditImage/></TodoListButton>
                <TodoListButton onClick={() => onRemove(todo.id)}><FcEmptyTrash/></TodoListButton>
            </div>
        </div>
    );
};

export default TodoList;