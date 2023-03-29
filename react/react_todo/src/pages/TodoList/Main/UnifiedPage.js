import React, { useState, useEffect } from 'react';
import MainContainer from "../../../components/TodoList/Todo/MainContainer";
import MainHeader from "../../../components/TodoList/Todo/MainHeader";
import MainTitle from "../../../components/TodoList/Todo/MainTitle";
import TodoList from "./TodoList";
import UserInfo from "./UserInfo";

const UnifiedPage = ({ pageType }) => {
    const [color, setColor] = useState('#000000');

    useEffect(() => {
        const mainColors = [
            { r: 255, g: 0, b: 0 }, // 빨강
            { r: 0, g: 255, b: 0 }, // 초록
            { r: 0, g: 0, b: 255 }, // 파랑
        ];

        const getRandomColor = () => {
            const randomMainColor = mainColors[Math.floor(Math.random() * mainColors.length)];
            const randomColor = {
                r: Math.floor((randomMainColor.r + Math.random() * 256) / 2),
                g: Math.floor((randomMainColor.g + Math.random() * 256) / 2),
                b: Math.floor((randomMainColor.b + Math.random() * 256) / 2),
            };
            return `rgb(${randomColor.r}, ${randomColor.g}, ${randomColor.b})`;
        };

        const interval = setInterval(() => {
            setColor(getRandomColor());
        }, 1000); // 1초마다 색상 변경

        return () => clearInterval(interval);
    }, []);

    return (
        <MainContainer>
            <MainHeader>
                <MainTitle title={pageType === 'todo' ? 'Todo' : 'User Information'} color={color} />
            </MainHeader>
            {
                pageType === 'todo' ? <TodoList/> : <UserInfo/>
            }
        </MainContainer>
    );
};

export default UnifiedPage;
