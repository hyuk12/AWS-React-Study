/** @jsxImportSource @emotion/react*/
import React from 'react';
import * as S from "./style";
import Aside from "../../../components/Aside/Aside";

const UserInfo = () => {
    return (
        <div css={S.Container}>
            <Aside/>
            <main css={S.MainContainer}>
                <header css={S.MainHeader}>
                    <h1 css={S.MainTitle}>User Information</h1>
                </header>
                <div css={S.InfoPhoto}>
                    <form>
                        <input css={S.PhotoFile} type="file" name="file"/>
                    </form>
                    <img css={S.Img} src="../images/noimage-760x460.png" alt={"#"}/>
                    <div css={S.ChangeNav}>
                        클릭하여 이미지 변경
                    </div>
                </div>
                <div css={S.InfoMain}>
                    <h1 css={S.InfoTitle}>
                        About Me
                        <button css={S.ModifyButton} disabled>modify</button>
                        <button css={S.ModifyButton} disabled>hidden</button>
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
                            <button css={S.ModifyButton} disabled>modify</button>
                            <button css={S.ModifyButton} disabled>hidden</button>
                        </h1>
                        <textarea css={S.IntroduceInput} disabled></textarea>
                    </div>
                </div>
            </main>
        </div>

    );
};

export default UserInfo;