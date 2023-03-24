/** @jsxImportSource @emotion/react*/
import React, {useEffect, useRef, useState} from 'react';
import * as S from './style'
const UserList = () => {
    useEffect(() => {
        console.log('component rendering')
    }, []);

    const user = {
        id: 0,
        username: '',
        password: '',
        name: '',
        email: ''
    }

    const [inputs, setInputs] = useState(user);
    const inputRefs = [useRef(), useRef(), useRef(), useRef()];
    const addButtonRef = useRef();
    const inputHandler = (e) => {
        const { name, value} = e.target;
        setInputs({...inputs, [name] : value});
    }

    const keyUpHandler = (e) => {
        if(e.keyCode === 13) {
            let index = 0;

            switch (e.target.name) {
                case 'username' : index = 1; break;
                case 'password' : index = 2; break;
                case 'name' : index = 3; break;
                case 'email' : index = 3; break;
                default: addButtonRef.current.click();
            }
            if (index !== 0) {
                inputRefs[index].current.focus();
            }
        }
    };
    const addHandler = (e) => {

    };

    const users = [
        {
              id: 1,
              username: 'aaa',
              password: '1234',
              name: 'John',
              email: 'john@example.com'
        },
        {
            id: 2,
            username: 'bbb',
            password: '1234',
            name: 'Tobi',
            email: 'tobi@example.com'
        },
        {
            id: 3,
            username: 'ccc',
            password: '1234',
            name: 'Mary',
            email: 'mary@example.com'
        }
    ]

    const userIndex = useRef(4);

    return (
        <div css={S.Container}>
            <div>
                <input
                    type="text"
                    onKeyUp={keyUpHandler}
                    onChange={inputHandler}
                    placeholder={'username'}
                    name={'username'}
                    value={0}
                    ref={inputRefs[0]}/>

                <input
                    type="text"
                    onKeyUp={keyUpHandler}
                    onChange={inputHandler}
                    placeholder={'password'}
                    name={'password'}
                    value={0}
                    ref={inputRefs[1]}/>

                <input
                    type="text"
                    onKeyUp={keyUpHandler}
                    onChange={inputHandler}
                    placeholder={'name'}
                    name={'name'}
                    value={0}
                    ref={inputRefs[2]}/>

                <input
                    type="text"
                    onKeyUp={keyUpHandler}
                    onChange={inputHandler}
                    placeholder={'email'}
                    name={'email'}
                    value={0}
                    ref={inputRefs[3]}/>

                <button onClick={addHandler} ref={addButtonRef}>추가</button>
            </div>
            <table css={S.Table}>

                <thead>
                    <tr>
                        <th css={S.ThAndTd}>Index</th>
                        <th css={S.ThAndTd}>username</th>
                        <th css={S.ThAndTd}>password</th>
                        <th css={S.ThAndTd}>name</th>
                        <th css={S.ThAndTd}>email</th>
                    </tr>
                </thead>
                <tbody>
                {users.map(user => {

                        return(
                            <tr>
                                <td css={S.ThAndTd} key={0}>{user.id}</td>
                                <td css={S.ThAndTd} key={1}>{user.username}</td>
                                <td css={S.ThAndTd} key={2}>{user.password}</td>
                                <td css={S.ThAndTd} key={3}>{user.name}</td>
                                <td css={S.ThAndTd} key={4}>{user.email}</td>
                            </tr>
                        )
                    }
                )
                }
                </tbody>

            </table>
        </div>
    );
};

export default UserList;