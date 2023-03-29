/** @jsxImportSource @emotion/react*/
import React from 'react';
import * as S from "./style";
import {css} from "@emotion/react";

const TodoButton = css`
  border: none;
  padding: 5px;
`;
const UserInfo = () => {
    return (

        <>
            <main css={S.MainContainer}>
                <header css={S.MainHeader}>
                    <h1 css={S.MainTitle}>User Information</h1>
                </header>
                <div css={S.InfoPhoto}>
                    <form>
                        <input css={S.PhotoFile} type="file" name="file"/>
                    </form>
                    <img css={S.Img} src="../../../../public/img/noimage-760x460.png" alt={"noimage-760x460"}/>
                    <div css={S.ChangeNav}>
                        클릭하여 이미지 변경
                    </div>
                </div>
                <div css={S.InfoMain}>
                    <h1 css={S.InfoTitle}>
                        About Me
                        <button css={TodoButton} disabled>modify</button>
                        <button css={TodoButton} disabled>hidden</button>
                    </h1>
                    <div css={S.InfoDetail}>
                        <div css={S.DetailContent}>
                            <div css={S.InfoInputContainer}>
                                <label css={S.Label} htmlFor="name">Name</label>
                                <input css={S.InfoInput} type="text" id={"name"} disabled/>
                            </div>
                            <div css={S.InfoInputContainer}>
                                <label css={S.Label} htmlFor="email">E-Mail</label>
                                <input css={S.InfoInput} type="text" id={"email"} disabled/>
                            </div>
                        </div>
                        <div css={S.DetailContent}>
                            <div css={S.InfoInputContainer}>
                                <label css={S.Label} htmlFor="phone">Phone</label>
                                <input css={S.InfoInput} type="text" id={"phone"} disabled/>
                            </div>
                            <div css={S.InfoInputContainer}>
                                <label css={S.Label} htmlFor="github">GitHub</label>
                                <input css={S.InfoInput} type="text" id={"github"} disabled/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1 css={S.InfoTitle}>
                            Self Introduction
                            <button css={TodoButton} disabled>modify</button>
                            <button css={TodoButton} disabled>hidden</button>
                        </h1>
                        <textarea css={S.IntroduceInput} disabled></textarea>
                    </div>
                </div>
            </main>
        </>

    );
};

export default UserInfo;