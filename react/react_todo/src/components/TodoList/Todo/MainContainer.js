/** @jsxImportSource @emotion/react*/
import React from 'react';
import * as S from './style';
const MainContainer = ({ children }) => {
    return (
        <main css={S.MainContainer}>
            {children}
        </main>
    );
};

export default MainContainer;