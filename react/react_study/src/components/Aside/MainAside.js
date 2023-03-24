/** @jsxImportSource @emotion/react*/
import React from 'react';
import * as S from './style';
import {Navigation} from "react-minimal-side-navigation";

import {HiHome} from "@react-icons/all-files/hi/HiHome";
import {GrTest} from "@react-icons/all-files/gr/GrTest";
import {BsCardChecklist} from "@react-icons/all-files/bs/BsCardChecklist";
import {BiListCheck} from "@react-icons/all-files/bi/BiListCheck";
const MainAside = () => {
    return (
        <aside css={S.style}>
            <Navigation
                // you can use your own router's api to get pathname
                activeItemId="/"
                onSelect={({itemId}) => {

                }}
                items={[
                    {
                      title: 'home',
                      itemId: '/',
                        elemBefore: () => <HiHome />
                    },
                    {
                        title: 'T1',
                        itemId: '/t1',
                        elemBefore: () => <GrTest />
                    },
                    {
                        title: 'T2',
                        itemId: '/t2',
                        elemBefore: () => <GrTest />
                    },
                    {
                        title: 'Sample',
                        itemId: '/sample',
                        elemBefore: () => <BsCardChecklist />,
                        subNav :[
                            {
                                title: 'Input1',
                                itemId: '/sample/input/1',
                                elemBefore: () => <BiListCheck />
                            },
                            {
                                title: 'Input2',
                                itemId: '/sample/input/2',
                                elemBefore: () => <BiListCheck />
                            }
                        ]
                    }

                ]}
            />
        </aside>
    );
};

export default MainAside;