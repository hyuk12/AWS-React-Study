/** @jsxImportSource @emotion/react*/
import React from 'react';
import * as S from './style';
import {Navigation} from "react-minimal-side-navigation";

import {FcHome} from "@react-icons/all-files/fc/FcHome";
import {FcViewDetails} from "@react-icons/all-files/fc/FcViewDetails";
import {FcList} from "@react-icons/all-files/fc/FcList";
import {FcIdea} from "@react-icons/all-files/fc/FcIdea";
import {useNavigate} from "react-router-dom";
import {FcSearch} from "@react-icons/all-files/fc/FcSearch";
import {FcTodoList} from "@react-icons/all-files/fc/FcTodoList";
import {FcNumericalSorting12} from "@react-icons/all-files/fc/FcNumericalSorting12";

const MainAside = () => {
    const navigate = useNavigate();
    return (
        <aside css={S.style}>
            <Navigation
                // you can use your own router's api to get pathname
                activeItemId="/"
                onSelect={({itemId}) => {
                    console.log(itemId);
                    navigate(itemId);
                }}
                items={[
                    {
                      title: 'home',
                      itemId: '/',
                        elemBefore: () => <FcHome />
                    },
                    {
                        title: 'T1',
                        itemId: '/t1',
                        elemBefore: () => <FcIdea />
                    },
                    {
                        title: 'T2',
                        itemId: '/t2',
                        elemBefore: () => <FcIdea />
                    },
                    {
                        title: 'Sample',
                        itemId: '/sample/input/',
                        elemBefore: () => <FcViewDetails />,
                        subNav :[
                            {
                                title: 'Input1',
                                itemId: '/sample/input/1',
                                elemBefore: () => <FcList />
                            },
                            {
                                title: 'Input2',
                                itemId: '/sample/input/2',
                                elemBefore: () => <FcList />
                            }
                        ]
                    },

                    {
                        title: 'List',
                        itemId: '/users',
                        elemBefore: () => <FcViewDetails />,
                        subNav :[
                            {
                                title: '사용자 전체 조회',
                                itemId: '/users',
                                elemBefore: () => <FcSearch />
                            }
                        ]
                    },

                    {
                        title: 'todoList',
                        itemId: '/todoList/home',
                        elemBefore: () => <FcTodoList />,
                        subNav :[
                            {
                                title: 'todoList',
                                itemId: '/todo',
                                elemBefore: () => <FcTodoList />
                            },
                            {
                                title: 'todoList2',
                                itemId: '/todo2',
                                elemBefore: () => <FcTodoList />
                            }
                        ]
                    },
                    {
                        title: 'numberCounterList',
                        itemId: '/number',
                        elemBefore: () => <FcNumericalSorting12 />,
                        subNav :[
                            {
                                title: 'numberCounter',
                                itemId: '/number/counter',
                                elemBefore: () => <FcNumericalSorting12 />
                            }
                        ]
                    }

                ]}
            />
        </aside>
    );
};

export default MainAside;