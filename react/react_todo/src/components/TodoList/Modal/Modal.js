/** @jsxImportSource @emotion/react*/
import React, {useEffect, useRef, useState} from 'react';
import * as S from './style';
import Button from "../../Buttons/Button";

const Modal = ({ todo, deleteModal, setIsOpen, updateTodo, deleteTodo }) => {
    const modalRef = useRef();
    const [editing, setEditing] = useState(true);
    const [modalContent , setModalContent] = useState('');

    useEffect(

        ()=> {
            setModalContent(todo.content);

            const handler = (e) => {
                if (!modalRef.current.contains(e.target)) {
                    setIsOpen(false);
                }
            };

            document.addEventListener('mousedown', handler);
            return () => {
                document.removeEventListener('mousedown', handler);
            }
        },
        []);

    const EditContent = (e) => {
        setEditing(true)
        setModalContent(e.target.value);
    }

    const KeyUpEditContent = (e) => {
        if(e.key === 'Enter') {
            Edit();
        }
    }

    const Edit = () => {
        updateTodo({
            id: todo.id,
            content: modalContent,
            date: todo.date,
            dateTime: todo.dateTime
        })
        Cancel();
    };

    const Delete = () => {
        deleteTodo(todo.id);
        Cancel();
    };

    const Cancel = () => {
        setIsOpen(false);
    };

    return (
        <div css={S.ModalContainer}>
            <div css={S.ModalSection} ref={modalRef}>
                <div css={S.ModalHeader}>
                    {
                        deleteModal ? <h1 >ToDo 삭제</h1> : <h1 >ToDo 수정</h1>
                    }
                </div>
                <div css={S.ModalMain}>
                    {
                        deleteModal? <p>Todo를 삭제하시겠습니까</p> :
                        <div> <p>{todo.date + '.' + todo.dateTime}</p>
                            <input css={S.ModalModifyContent(editing)} type="text" onChange={EditContent} onKeyUp={KeyUpEditContent} defaultValue={todo.content}/></div>
                    }
                </div>
                <div css={S.ModalFooter}>
                    {
                        deleteModal ?  <Button type={"button"} onClick={Delete} >삭제</Button> : <Button type={"button"} onClick={Edit} >확인</Button>
                    }
                    <Button type={"button"} onClick={Cancel} >취소</Button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
