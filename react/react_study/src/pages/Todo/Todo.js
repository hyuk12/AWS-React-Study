/** @jsxImportSource @emotion/react*/
import React, {useRef, useState} from 'react';
import {css} from "@emotion/react";
import {FcPlus} from "@react-icons/all-files/fc/FcPlus";
import {FcEmptyTrash} from "@react-icons/all-files/fc/FcEmptyTrash";
import {FcEditImage} from "@react-icons/all-files/fc/FcEditImage";

const TodoContainer = css`
  
  display: flex;
  flex-direction: column;
  align-items: center;
  
  margin-top: 100px;
  width: 100%;
`;

const TodoAddition = css`
  position: sticky;
  top: 0;
  box-sizing: border-box;
  border-radius: 7px;
  margin-bottom: 20px;
  padding: 10px;
  width: 600px;
  height: 60px;

  background-color: rgba(232, 218, 213);
`;

const AdditionInput = css`
  box-sizing: border-box;
  outline: none;
  border: none;
  border-bottom: 3px solid rgb(216, 207, 207);
  padding: 0 50px 0 10px;
  width: 100%;
  height: 100%;
  font-size: 1.2rem;
  background-color: rgba(232, 218, 213);
`;

const TodoAddButton = css`
  position: absolute;
  transform: translateY(-50%);
  top: 50%;
  right: 15px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  
  width: 35px;
  height: 35px;
  font-size: 1.2rem;
  background-color: #ffffff00;
  transition: all 1s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: translateY(-50%) rotate(180deg) scale(1.5);
  }
`;

const TodoList = css`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  margin-bottom: 5px;
  border-radius: 7px;
  padding: 10px;
  width: 600px;

  background-color: rgba(243, 243, 241, 0.37);
`;

const TodoContent = css`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  
  width: 85%;
  height: 40px;
`;

const ItemGroup = css`
  display: flex;
  align-items: center;
  
  height: 40px;
`;

const ItemButton = css`
  display: flex;
  align-items: center;
  border: none;
  height: 100%;
  
  
  font-size: 1.2rem;
  background-color: #ffffff00;
  
  cursor: pointer;
`;

const Todo = () => {

    const [input, setInput] = useState({
        id: 0,
        content: ''
    });


    const [todoList, setTodoList] = useState([]);
    const todoId = useRef(1);
    const onChange = (e) => {
        setInput({
          ...input,
            content: e.target.value
        });


    }

    const onKeyUp = (e) => {

        if (e.key === 'Enter') {
            onClick();
        }
    }

    const onClick = (e) => {
        const todo = {
            ...input,
            id: todoId.current++
        }
        setTodoList([...todoList, todo]);
        setInput({
            id: 0,
            content: ''
        });
    }

    const onRemove = (index) => {
        setTodoList(todoList.filter(todo => todo.id!== index));
    }

    return (
        <div css={TodoContainer}>
            <div css={TodoAddition}>
                <input css={AdditionInput} type={"text"} placeholder={"Add your new Todo"} onChange={onChange} onKeyUp={onKeyUp} value={input.content}/>
                <button css={TodoAddButton} onClick={onClick} ><FcPlus /></button>
            </div>
            {
                todoList.map(todo => {
                    return (
                            <div css={TodoList} key={todo.id}>
                                <div css={TodoContent}>{todo.content}</div>
                                <div css={ItemGroup}>
                                    <button css={ItemButton}><FcEditImage/></button>
                                    <button css={ItemButton} onClick={() => onRemove(todo.id)}><FcEmptyTrash/></button>
                                </div>
                            </div>
                    )})
            }

        </div>
    );
};

export default Todo;