/** @jsxImportSource @emotion/react*/
import React, {useEffect, useRef, useState} from 'react';
import {FcFile} from "@react-icons/all-files/fc/FcFile";
import {FcPlus} from "@react-icons/all-files/fc/FcPlus";
import * as S from "./style";
import Modal from "../../../components/TodoList/Modal/Modal";
import {format} from "date-fns";
import Todo from "../../../components/TodoList/Todo/Todo";


const TodoList = () => {
    const [todoList, setTodoList] = useState([]);

    const saveToLocalStorage = (items) => {
        localStorage.setItem('todoList', JSON.stringify(items));
    }

    const getFromLocalStorage = () => {
        const storedTodoList = localStorage.getItem('todoList');
        return storedTodoList? JSON.parse(storedTodoList) : [];
    };

    useEffect(() => {
        const storedTodoList = getFromLocalStorage();
        if(storedTodoList !== undefined) {
            setTodoList(storedTodoList);
        } else {
            setTodoList([]);
        }

    },[]);

    const formatDate = (date, formatString) => {
        return format(date, formatString);

    };

    const [input, setInput] = useState({
        id: 0,
        content: '',
        date: new Date(),
        dateTime: new Date()
    });

    const [modifyTodo, setModifyTodo] = useState({
        id: 0,
        content: '',
        date: new Date(),
        dateTime: new Date()
    });

    const [deleteModal, setDeleteModal] = useState(false);
    const [isOpened, setIsOpened] = useState(false);
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
            id: todoId.current++,
            date: formatDate(new Date(), 'yyyy.MM.dd (E)'),
            dateTime: formatDate(new Date(), 'HH:mm:ss'),
        }
        const updatedTodoList = [...todoList, todo];
        setTodoList(updatedTodoList);
        setTimeout(()=> saveToLocalStorage(updatedTodoList),500 );

        setInput(
            {
                id: 0,
                content: '',
                date: new Date(),
                dateTime: new Date()
            }
        )
    };

    const RemoveClick = (id) => {
        setIsOpened(true);
        setDeleteModal(true)
        setModifyTodo(
            todoList.filter(todo => todo.id === id)[0]
        )

    }

    const OpenModal = (id) => {
        setIsOpened(true);
        setDeleteModal(false)
        setModifyTodo(
            todoList.filter(todo => todo.id === id)[0]
        )
        console.log(modifyTodo)
    }

    const updateTodo = (todo) => {
        const updatedTodoList = todoList.map(item => {
            if (item.id === todo.id) {
                item.content = todo.content;
            }
            return item;
        });
        setTodoList(updatedTodoList);
        setTimeout(() => saveToLocalStorage(updatedTodoList),500);
    }

    const DeleteTodo = (id) => {
        const updatedTodoList = todoList.filter(item => item.id!== id);
        console.log(todoList)
        setTodoList(updatedTodoList);
        setTimeout(() => saveToLocalStorage(updatedTodoList),500);

    }

    return (
            <>
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
                        { todoList.map(todo =>
                            {
                                return (
                                    <div key={todo.id}>
                                        <Todo todo={todo} OpenModal={OpenModal} RemoveClick={RemoveClick}/>
                                    </div>
                                )
                            })}
                    </ul>
                </main>
                {
                    isOpened ? <Modal setIsOpen={setIsOpened} deleteModal={deleteModal} todo={modifyTodo} updateTodo={updateTodo} deleteTodo={DeleteTodo}/> : ''
                }

            </>


    );
};

export default TodoList;