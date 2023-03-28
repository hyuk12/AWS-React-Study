/** @jsxImportSource @emotion/react*/
import React, {useRef, useState} from 'react';
import {Navigation} from "react-minimal-side-navigation";
import {useNavigate} from "react-router-dom";
import {FcTodoList} from "@react-icons/all-files/fc/FcTodoList";
import * as S from "./style";
import {style} from "./style";

const Aside = () => {
    const navigate = useNavigate();
    const [asideStyle, setAsideStyle] = useState(S.style)
    const onNavBarButtonClicked = () => {
        setAsideStyle(S.HiddenMenu);
    }

    return (
        <aside  css={asideStyle} >
            <button css={S.MenuButton} onClick={onNavBarButtonClicked} >▶︎</button>
            <Navigation
                activeItemId="/"
                onSelect={({itemId}) => {
                    navigate(itemId);
                }}
                items={[
                    {
                        title: 'Home',
                        itemId: '/',
                        elemBefore: () => <FcTodoList />
                    },
                    // {
                    //     title: 'UserInformation',
                    //     itemId: '/UserInformation',
                    //     elemBefore: () => <FcInfo />
                    // }
                    ]}
               />
        </aside>
    );
};

export default Aside;