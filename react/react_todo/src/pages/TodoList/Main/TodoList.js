/** @jsxImportSource @emotion/react*/
import React, {useRef, useState} from 'react';
import {FcFile} from "@react-icons/all-files/fc/FcFile";
import {FcPlus} from "@react-icons/all-files/fc/FcPlus";
import Aside from "../../../components/Aside/Aside";
import Clock from 'react-live-clock'
import * as S from "./style";
import {FcEditImage} from "@react-icons/all-files/fc/FcEditImage";
import {FcEmptyTrash} from "@react-icons/all-files/fc/FcEmptyTrash";


const TodoList = () => {

    const today = useState(new Date());

    const [input, setInput] = useState({
        id: 0,
        content: ''

    });


    const [todoList, setTodoList] = useState([]);
    const todoId = useRef(1);


    const TodoInputChange = (e) => {
        setInput({
          ...input,
            content: e.target.value
        });
    };

    const onKeyUp = (e) => {
        if(e.keyCode === 13) {
            AddTodoClick();
        }
    }

    const AddTodoClick = () => {
        const todo = {
            ...input,
            id: todoId.current++
        }
        setTodoList([...todoList, todo]);

        setInput(
            {
                id: 0,
                content: ''
            }
        )
    };

    return (
        <div css={S.Container}>
            <Aside/>
            <main css={S.MainContainer}>
                <header css={S.MainHeader}>
                    <h1 css={S.MainTitle}>Todo</h1>
                    <div css={S.TodoInputContainer}>
                        <FcFile/>
                        <input css={S.TodoInput} type="text" onChange={TodoInputChange} onKeyUp={onKeyUp} value={input.content} placeholder={"Please Enter Todo..."}/>
                        <button css={S.AddTodoButton} onClick={AddTodoClick} ><FcPlus/></button>
                    </div>
                </header>

                <ul css={S.TodoContentList}>
                    {
                        todoList.map(
                            todo => {

                                const RemoveClick = (id) => {
                                    setTodoList(todoList.filter(todo => todo.id!== id))
                                }
                                return (
                                    <li css={S.ContentContainer} key={todo.id}>
                                        <div css={S.ContentHeader} >
                                            <div css={S.TodoDate} >
                                                <Clock
                                                    format={'YYYY.MM.DD (ddd) '}
                                                    ticking={false}
                                                    timezone={"KR/Pacific"}/>
                                            </div>
                                            <div css={S.TodoDateTime} >
                                                <Clock
                                                    format={"HH:mm:ss"}
                                                    ticking={false}
                                                    timezone={"KR/Pacific"}/>
                                            </div>
                                        </div>
                                        <div css={S.ContentMain} >
                                            {todo.content}
                                        </div>
                                        <div css={S.ContentFooter} >
                                            <button css={S.ModifyButton} onClick={null}>
                                                <FcEditImage/>
                                            </button>
                                            <button css={S.RemoveButton} onClick={() => RemoveClick(todo.id)} >
                                               <FcEmptyTrash/>
                                            </button>
                                        </div>
                                    </li>
                                )
                            }
                        )
                    }
                </ul>
            </main>
        </div>
    );
};

export default TodoList;