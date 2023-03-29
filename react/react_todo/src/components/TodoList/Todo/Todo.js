/** @jsxImportSource @emotion/react*/
import React from 'react';
import * as S from './style';
import {FcEditImage} from "@react-icons/all-files/fc/FcEditImage";
import {FcEmptyTrash} from "@react-icons/all-files/fc/FcEmptyTrash";
import Button from "../../Buttons/Button";

const Todo = ({ todo, openModal, removeClick }) => {
    return (
        <li css={S.ContentContainer} >
            <div css={S.ContentHeader} >
                <div css={S.TodoDate} >
                    {todo.date}
                </div>
                <div css={S.TodoDateTime} >
                    {todo.dateTime}
                </div>
            </div>
            <div css={S.ContentMain} >
                {todo.content}
            </div>
            <div css={S.ContentFooter} >
                <Button  onClick={() => openModal(todo.id)}><FcEditImage/></Button>
                <Button  onClick={() => removeClick(todo.id)} ><FcEmptyTrash/></Button>
            </div>
        </li>
    );
};

export default Todo;
