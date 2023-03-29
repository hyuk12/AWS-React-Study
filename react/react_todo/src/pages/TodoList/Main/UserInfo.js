/** @jsxImportSource @emotion/react*/
import React, {useEffect, useRef, useState} from 'react';
import * as S from "./style";
import {css} from "@emotion/react";
import logo from "../../../images/noimage-760x460.png";
import {FcCheckmark} from "@react-icons/all-files/fc/FcCheckmark";
import {FcEditImage} from "@react-icons/all-files/fc/FcEditImage";
import MediaDisplay from "../../../components/TodoList/User/MediaDisplay";

const TodoButton = css`
  border: none;
  padding: 5px;
`;



const useLocalStorage = (key, defaultValue) => {
    const [value, setValue] = useState(() => {
        const storedValue = JSON.parse(localStorage.getItem(key));
        return storedValue !== null ? storedValue : defaultValue;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
};


const UserInfo = () => {
    const [userInfo, setUserInfo] = useState({
        userName: '',
        email: '',
        phone: '',
        github: '',
        introduction: '',
    });

    const [image, setImage] = useState(localStorage.getItem('image') || logo);
    const [isEditableAbout, setIsEditableAbout] = useState(false);
    const [isEditableIntroduction, setIsEditableIntroduction] = useState(false);

    const fileInputRef = useRef(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                const base64Data = event.target.result;
                localStorage.setItem('image', base64Data);
                setImage(base64Data);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleImageClick = () => {
        fileInputRef.current.click();
    };

    const handleModifyAbout = () => {
        setIsEditableAbout(!isEditableAbout);
    };

    const handleModifyIntroduction = () => {
        setIsEditableIntroduction(!isEditableIntroduction);
    };

    const handleChange = (property) => (event) => {
        setUserInfo({
            ...userInfo,
            [property]: event.target.value,
        });
    };


    return (
        <>
            <div css={S.InfoPhoto}>
                <form>
                    <input css={S.PhotoFile} type="file" name="file" ref={fileInputRef} onChange={handleImageChange} style={{ display: 'none' }}  />
                </form>
                <MediaDisplay key={image} src={image} handleImageClick={handleImageClick} />
                <div css={S.ChangeNav} onClick={handleImageClick}>
                    클릭하여 이미지 변경
                </div>
            </div>
            <div css={S.InfoMain}>
                <h1 css={S.InfoTitle}>
                    About Me
                    <button css={TodoButton} onClick={handleModifyAbout}>
                        {isEditableAbout ? <FcCheckmark/> : <FcEditImage/>}
                    </button>
                </h1>
                <div css={S.InfoDetail}>
                    <div css={S.DetailContent}>
                        <div css={S.InfoInputContainer}>
                            <label css={S.Label} htmlFor="name">Name</label>
                            <input css={S.InfoInput} type="text" id={"name"} value={userInfo.userName} disabled={!isEditableAbout} onChange={handleChange("userName")} />
                        </div>
                        <div css={S.InfoInputContainer}>
                            <label css={S.Label} htmlFor="email">E-Mail</label>
                            <input css={S.InfoInput} type="text" id={"email"} value={userInfo.email} disabled={!isEditableAbout} onChange={handleChange("email")} />
                        </div>
                    </div>
                    <div css={S.DetailContent}>
                        <div css={S.InfoInputContainer}>
                            <label css={S.Label} htmlFor="phone">Phone</label>
                            <input css={S.InfoInput} type="text" id={"phone"} value={userInfo.phone} disabled={!isEditableAbout} onChange={handleChange("phone")} />
                        </div>
                        <div css={S.InfoInputContainer}>
                            <label css={S.Label} htmlFor="github">GitHub</label>
                            <input css={S.InfoInput} type="text" id={"github"} value={userInfo.github} disabled={!isEditableAbout} onChange={handleChange("github")} />
                        </div>
                    </div>
                </div>
                <div>
                    <h1 css={S.InfoTitle}>
                        Self Introduction
                        <button css={TodoButton} onClick={handleModifyIntroduction}>{isEditableIntroduction ? <FcCheckmark/> : <FcEditImage/>}</button>
                    </h1>
                    <textarea css={S.IntroduceInput} value={userInfo.introduction} disabled={!isEditableIntroduction} onChange={handleChange("introduction")}></textarea>
                </div>
            </div>
        </>
    );
};

export default UserInfo;
