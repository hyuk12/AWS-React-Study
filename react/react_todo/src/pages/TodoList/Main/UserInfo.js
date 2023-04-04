/** @jsxImportSource @emotion/react*/
import React, {createRef, useEffect, useState} from 'react';
import * as S from "./style";
import {css} from "@emotion/react";
import logo from "../../../images/newjeans-hanni-omg-mv-shoot-wallpaper-3840x2160_54.jpg";
import {FcCheckmark} from "@react-icons/all-files/fc/FcCheckmark";
import {FcEditImage} from "@react-icons/all-files/fc/FcEditImage";
import {motion} from "framer-motion";

const TodoButton = css`
  border: none;
  padding: 5px;
`;

const useLocalStorage = (key, defaultValue) => {
    const [value, setValue] = useState(() => {
        const storedValue = JSON.parse(localStorage.getItem(key));
        return storedValue || defaultValue;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
};

const UserInfo = () => {
    const [userInfo, setUserInfo] = useLocalStorage("userInfo", { userName: "", email: "", phone: "", github: "", introduction: "" });
    const [image, setImage] = useLocalStorage("image", logo);
    const [isEditableAbout, setIsEditableAbout] = useState(false);
    const [isEditableIntroduction, setIsEditableIntroduction] = useState(false);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setImage(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const fileInputRef = createRef();
    const handleImageClick = () => {
        fileInputRef.current.click();
    };

    const handleModifyAbout = () => {
        setIsEditableAbout(!isEditableAbout);
    };

    const handleModifyIntroduction = () => {
        setIsEditableIntroduction(!isEditableIntroduction);
    };

    const handleChange = (property) => (e) => {
        setUserInfo({
            ...userInfo,
            [property]: e.target.value,
        });
    };

    return (
        <>
            <motion.div
                initial={{ x: 300 }}
                animate={{ x:0, opacity: 1 }}
                exit={{ x: -300 }}
                transition={{ duration: 1.5 }}
            >
                <div css={S.InfoPhoto}>
                    <form>
                        <input css={S.PhotoFile} type="file" name="file" ref={fileInputRef} onChange={handleImageChange} style={{ display: 'none' }} />
                    </form>
                    <img css={S.Img} src={image} alt={"noimage-760x460"} onClick={handleImageClick} />
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
            </motion.div>

        </>
    );
};

export default UserInfo;
