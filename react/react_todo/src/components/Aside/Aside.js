/** @jsxImportSource @emotion/react*/
import React, {useRef, useState} from 'react';
import {Navigation} from "react-minimal-side-navigation";
import {useNavigate} from "react-router-dom";
import {FcTodoList} from "@react-icons/all-files/fc/FcTodoList";
import * as S from "./style";
import {FcInfo} from "@react-icons/all-files/fc/FcInfo";
import {FcHome} from "@react-icons/all-files/fc/FcHome";



const Aside = () => {
    const navigate = useNavigate();
    const [asideStyle, setAsideStyle] = useState(S.HiddenMenu);
    const ButtonRef = useRef(false);
    const onNavBarButtonClicked = (e) => {
        if(asideStyle === S.style){
            setAsideStyle(S.HiddenMenu);
            ButtonRef.current = true;
        }else if(asideStyle === S.HiddenMenu){
            setAsideStyle(S.style);
            ButtonRef.current = false;
        }
    }

    return (
        <aside  css={asideStyle} >
            {
                ButtonRef.current ? <button css={S.MenuButton} onClick={onNavBarButtonClicked}  >▶︎</button>
                    : <button css={S.MenuButton} onClick={onNavBarButtonClicked}  >◀︎</button>
            }

                <Navigation

                    activeItemId="/"
                    onSelect={({itemId}) => {
                        navigate(itemId, {replace: true});
                        onNavBarButtonClicked();
                    }}
                    items={[
                        {
                            title: 'Home',
                            itemId: '/AWS-React-Study',
                            elemBefore: () => <FcHome />
                        },
                        {
                            title: 'UserInformation',
                            itemId: '/UserInformation',
                            elemBefore: () => <FcInfo />
                        },
                        {
                            title: 'TodoList',
                            itemId: '/todoList',
                            elemBefore: () => <FcTodoList />
                        }
                    ]}
                />
            </aside>

    );
};

export default Aside;