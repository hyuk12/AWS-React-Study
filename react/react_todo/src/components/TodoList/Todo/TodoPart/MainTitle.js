/** @jsxImportSource @emotion/react*/
import React from 'react';
import * as S from '../style';

const MainTitle = ({ title , color }) => {
    return (
        <h1 css={() => S.MainTitle(color)}>
            {title}
        </h1>
    );
};

export default MainTitle;