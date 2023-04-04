/** @jsxImportSource @emotion/react*/
import React, { useEffect, useState } from "react";
import { css, keyframes } from "@emotion/react";
import {motion} from "framer-motion";
import backImage  from '../../../images/newjeans-hanni-omg-mv-shoot-wallpaper-3840x2160_54.jpg'

const TodoHome = () => {
    const [fontSize, setFontSize] = useState(16);

    const slideUpAndGrow = keyframes`
      0% {
        transform: translateY(-500%) translateX(100%) rotateX(90deg) rotateY(90deg) rotateZ(0deg); // 하단에서 시작, 회전
        font-size: 16px;
        opacity: 0;
      }
      100% {
        transform: translateY(-1000%) translateX(0%) rotateX(0deg) rotateY(0deg) rotateZ(0deg); // 중앙보다 20% 상단에 위치, 회전
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
        <motion.div
            initial={{ x: 500 }}
            animate={{ x:0, opacity: 1 }}
            exit={{ x: -300 }}
            transition={{ duration: 1.5 }}
        >
            <main css={styles}>
                <img src={backImage} alt="hani" style={{width: '100%'}}/>
                <h1 css={H1}>Todo HomePage</h1>
            </main>
        </motion.div>
    );
};

export default TodoHome;
