import React, {useRef, useState} from 'react';

const InputSample = () => {
    const userInfo = {
        username :'',
        password :''
    }
    const [userInput, setUserInput] = useState(userInfo);
    const [userInfoText, setUserInfoText] = useState(userInfo);

    const { username , password } = userInfoText;

    const passwordRef = useRef();

    const handlerChange = (e) => {
        const { name, value } = e.target;
        setUserInput({...userInput, [name] : value})

        console.log(e.target.name);
    };

    const nextFocus = (e) => {
        if(e.keyCode === 13) {
            passwordRef.current.focus();
        }
    };

    const submitHandler = (e) => {
        if(e.keyCode === 13) {

            setUserInfoText({...userInput});
        }
    };

    return (
        <div>
            <input
                type="text"
                onKeyUp={nextFocus}
                onChange={handlerChange}
                name={"username"}
            />

            <input
                type="text"
                onKeyUp={submitHandler}
                onChange={handlerChange}
                name={"password"}
                ref={passwordRef}
            />
            <div>username : {username}</div>
            <div>password : {password}</div>
        </div>
    );
};

export default InputSample;