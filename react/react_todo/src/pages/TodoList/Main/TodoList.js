/** @jsxImportSource @emotion/react*/
import React, { useEffect, useRef, useState } from 'react';
import * as S from './style';
import {FcFile} from "@react-icons/all-files/fc/FcFile";
import {FcPlus} from "@react-icons/all-files/fc/FcPlus";
import Todo from "../../../components/TodoList/Todo/Todo";
import Modal from "../../../components/TodoList/Modal/Modal";
import {format} from "date-fns";
import {motion} from "framer-motion";

const TodoList = () => {
    const [todoList, setTodoList] = useState([]);
    const [input, setInput] = useState({ id: 0, content: '', date: new Date(), dateTime: new Date() });
    const [modifyTodo, setModifyTodo] = useState({ id: 0, content: '', date: new Date(), dateTime: new Date() });
    const [deleteModal, setDeleteModal] = useState(false);
    const [isOpened, setIsOpened] = useState(false);
    const todoId = useRef(1);

    useEffect(() => {
        const storedTodoList = JSON.parse(localStorage.getItem('todoList')) || [];
        setTodoList(storedTodoList);
    }, []);

    const formatDate = (date, formatString) => format(date, formatString);

    const onInputChange = (e) => setInput({ ...input, content: e.target.value });

    const onKeyUp = (e) => {
        if (e.keyCode === 13) {
            addTodo();
        }
    };

    const addTodo = () => {
        const todo = { ...input, id: todoId.current++, date: formatDate(new Date(), 'yyyy.MM.dd (E)'), dateTime: formatDate(new Date(), 'HH:mm:ss') };
        const updatedTodoList = [...todoList, todo];
        setTodoList(updatedTodoList);
        localStorage.setItem('todoList', JSON.stringify(updatedTodoList));

        setInput({ id: 0, content: '', date: new Date(), dateTime: new Date() });
    };

    const removeClick = (id) => {
        setIsOpened(true);
        setDeleteModal(true);
        setModifyTodo(todoList.find(todo => todo.id === id));
    };

    const openModal = (id) => {
        setIsOpened(true);
        setDeleteModal(false);
        setModifyTodo(todoList.find(todo => todo.id === id));
    };

    const updateTodo = (todo) => {
        const updatedTodoList = todoList.map(item => (item.id === todo.id ? { ...item, content: todo.content } : item));
        setTodoList(updatedTodoList);
        localStorage.setItem('todoList', JSON.stringify(updatedTodoList));
    };

    const deleteTodo = (id) => {
        const updatedTodoList = todoList.filter(item => item.id !== id);
        setTodoList(updatedTodoList);
        localStorage.setItem('todoList', JSON.stringify(updatedTodoList));
    };

    return (
        <>
            <motion.div
                initial={{ x: 300 }}
                animate={{ x:0, opacity: 1 }}
                exit={{ x: -300 }}
                transition={{ duration: 1.5 }} >
                <div css={S.TodoInputContainer}>
                    <FcFile />
                    <input css={S.TodoInput} type="text" onChange={onInputChange} onKeyUp={onKeyUp} value={input.content} placeholder="Please Enter Todo..." />
                    <button css={S.AddTodoButton} onClick={addTodo}>
                        <FcPlus />
                    </button>
                </div >
                <ul css={S.TodoContentList}>
                    {todoList.map((todo, index) => (
                        <div key={index}>
                            <Todo todo={todo} openModal={openModal} removeClick={removeClick} />
                        </div>
                    ))}
                </ul>
                {isOpened && <Modal  setIsOpen={setIsOpened} deleteModal={deleteModal} todo={modifyTodo} updateTodo={updateTodo} deleteTodo={deleteTodo} />}
            </motion.div>
        </>
    );
};

export default TodoList;