/** @jsxImportSource @emotion/react*/
import React, {useRef, useState} from 'react';
import {css} from "@emotion/react";
import PromptModal from "../../components/Todo/Modal/PromptModal/PromptModal";
import TodoList from "../../components/Todo/TodoList/TodoList";
import AddTodo from "../../components/Todo/AddTodo/AddTodo";

const TodoContainer = css`
  
  display: flex;
  flex-direction: column;
  align-items: center;
  
  margin-top: 100px;
  width: 100%;
`;


const Todo = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [modifyTodo, setModifyTodo] = useState({
        id: 0,
        content: ''
    });

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
            onAdd();
        }
    }

    const onAdd = (e) => {
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

    const updateTodo = (todo) => {
        setTodoList(
            todoList.map(item => {
                if (item.id === todo.id) {
                    item.content = todo.content;
                }
                return item;
            })
        );

    }

    const openModal = (id) => {
        setIsOpen(true);
        setModifyTodo(
            todoList.filter(todo => todo.id === id)[0]
        )
    }

    return (
        <>
            <div css={TodoContainer} className={"font-sans"}>
                <AddTodo onChange={onChange} onKeyUp={onKeyUp} value={input.content} onAdd={onAdd}/>
                {
                    todoList.map(
                        todo => {
                            return (
                                <div key={todo.id}>
                                    <TodoList todo={todo} openModal={openModal} onRemove={onRemove}/>
                                </div>
                            )
                        }
                    )
                }
            </div>
            {
                isOpen ? (<PromptModal title={'Edit Todo'} todo={modifyTodo} setIsOpen={setIsOpen} updateTodo={updateTodo}/>) : ''
            }
        </>
    );
};

export default Todo;