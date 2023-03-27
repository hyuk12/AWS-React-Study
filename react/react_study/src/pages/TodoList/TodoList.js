/** @jsxImportSource @emotion/react */
import React, {useRef} from 'react';
import * as S from './style.js';
import {todoListContainer} from "./style.js";
const TodoList = () => {

    const todo = {
        id: 0,
        text: '',
        completed: false
    }

    const textIndex = useRef(1);
    const [inputs, setInputs] = React.useState(todo);
    const { id, text, completed } = inputs;
    const [todoList, setTodoList] = React.useState([]);

    const inputHandler = (e) => {
        const { name, value } = e.target;
        setInputs({...inputs, [name]: value});
    }

    const addTodoClick = () => {
        const todo = {
            ...inputs
        }
        todo.id = textIndex.current++;
        setTodoList([...todoList, todo]);
        setInputs({
            ...inputs,

            text: '',
            completed: false
        });

    }

    const removeTodoClick = (index) => {
        setTodoList(todoList.filter(todo => todo.id!== index));
    }

    const completeTodoClick = (index) => {
        setTodoList(todoList.map(todo => todo.id === index? {...todo, completed:!todo.completed} : todo));
    }

    return (
        <div css={S.container}>
            <div css={S.inputContainer}>
                <input css={S.todoInput} type={"text"} onChange={inputHandler} name={"text"} placeholder={"todo 입력"} value={text} />
                <button css={S.todoButton} type={"button"} onClick={addTodoClick} >+</button>
            </div>
            <div css={S.todoListContainer}>
                {todoList.map(todo =>{
                    return(
                        <div css={S.todoList} key={todo.id}>
                            <div css={S.todoListItem}>
                                <span css={S.todoListNumber}>{todo.id}.</span>
                                <span>{todo.text}</span>
                            </div>

                            {todo.completed
                                ? <button css={S.changeTodoCompleteButton} onClick={() => completeTodoClick(todo.id)}>✔︎</button>
                                : <button css={S.todoCompleteButton} onClick={() => completeTodoClick(todo.id)}>✔︎</button>
                            }
                            <button css={S.todoDeleteButton} onClick={() => removeTodoClick(todo.id)}>✂︎</button>

                        </div>

                    )})}
            </div>

        </div>
    );
};

export default TodoList;