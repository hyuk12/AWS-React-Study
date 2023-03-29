/** @jsxImportSource @emotion/react*/
import React, { useEffect, useState } from "react";
import { css, keyframes } from "@emotion/react";

const TodoHome = () => {
    const [fontSize, setFontSize] = useState(16);

    const slideUpAndGrow = keyframes`
      0% {
        transform: translateY(100%) translateX(100%) rotateX(90deg) rotateY(90deg) rotateZ(0deg); // 하단에서 시작, 회전
        font-size: 16px;
        opacity: 0;
      }
      100% {
        transform: translateY(0%) translateX(0%) rotateX(0deg) rotateY(0deg) rotateZ(0deg); // 중앙보다 20% 상단에 위치, 회전
        font-size: ${fontSize}px;
        opacity: 1;
      }
    `;

    useEffect(() => {
        const timer = setTimeout(() => {
            setFontSize(32);
        }, 1000); // 글자 크기 변경을 위한 시간 지연 설정

        return () => clearTimeout(timer);
    }, []);

    const styles = css`
      position: relative;
      perspective: 800px;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 800px;
    `;

    const H1 = css`
      position: absolute;
      font-size: ${fontSize}px;
      animation: ${slideUpAndGrow} 2s ease-out forwards; // 애니메이션 추가
      transform-style: preserve-3d;
      backface-visibility: hidden;
    `;

    return (
        <main css={styles}>
            <h1 css={H1}>Todo HomePage</h1>
        </main>
    );
};

export default TodoHome;
