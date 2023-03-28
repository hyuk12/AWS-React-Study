/** @jsxImportSource @emotion/react*/
import React, {useEffect, useRef, useState} from "react";
import * as S from "./style.js";
import ModalButton from "../ModalButton/ModalButton";

const PromptModal = (props) => {
    const modalRef = useRef();
    const [modalContent, setModalContent] = useState('');

    useEffect(

        ()=> {
            setModalContent(props.todo.content);

            const handler = (e) => {
                if (!modalRef.current.contains(e.target)) {
                    props.setIsOpen(false);
                }
            };

            document.addEventListener('mousedown', handler);
            return () => {
                document.removeEventListener('mousedown', handler);
            }
        },
        []);

    const contentChange = (e) => {
        setModalContent(e.target.value);
    }

    const closeModal = () => {
        props.setIsOpen(false);
    }

    const onSubmitKeyUp = (e) => {
        if (e.key === 'Enter') {
            onSubmit();
        }
    }

    const onSubmit = () => {
        props.updateTodo({
            id: props.todo.id,
            content: modalContent
        });

        closeModal();
    }

    return (
        <div css={S.modalContainer} >
            <div css={S.modalBox} ref={modalRef}>
                <header css={S.modalHeader}>
                    <h1 css={S.modalTitle}>{props.title}</h1>
                </header>
                <main css={S.modalMain}>
                    <input css={S.modalInput} onChange={contentChange} onKeyUp={onSubmitKeyUp} type="text" defaultValue={props.todo.content}/>
                </main>
                <footer css={S.modalFooter}>
                    <ModalButton onClick={onSubmit} buttonCount={2} >Edit</ModalButton>
                    <ModalButton onClick={closeModal} buttonCount={2} >Close</ModalButton>
                </footer>
            </div>
        </div>
    );
}

export default PromptModal;