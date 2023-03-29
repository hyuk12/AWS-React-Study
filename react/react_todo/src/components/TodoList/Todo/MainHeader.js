/** @jsxImportSource @emotion/react*/
import React from 'react';
import * as S from './style';

const MainHeader = ({ children }) => {
    return (
        <header css={S.MainHeader}>
            {children}
        </header>
    );
};

export default MainHeader;