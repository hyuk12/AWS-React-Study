import React, {useRef, useState} from 'react';

const InputSample2 = () => {
    const userInfo = {
        username: '',
        password: ''
    };

    const [user, setUser] = useState(userInfo);
    const [userInputText, setUserInputText] = useState(userInfo);

    const { username , password } = userInputText;

    const passwordRef = useRef();
    const handlerChange = (e) => {
        const {name, value} = e.target
        setUser({...user, [name]: value})
    }

    const nextFocus = (e) => {
        if(e.keyCode === 13) {
            passwordRef.current.focus();
        }
    }

    const submitButton = (e) => {
        setUserInputText({...user});
    }



    return (
        <div>
            <input
                type="text"
                onChange={handlerChange}
                onKeyUp={nextFocus}
                name={"username"}
            />

            <input

                type="password"
                onChange={handlerChange}
                name={"password"}
                ref={passwordRef}
            />

            <button onClick={submitButton}> 등록 </button>

            <div>username : {username}</div>
            <div>password : {password}</div>
        </div>
    );
};

export default InputSample2;