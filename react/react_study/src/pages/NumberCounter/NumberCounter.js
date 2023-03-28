/** @jsxImportSource @emotion/react*/
import React from 'react';
import {css} from "@emotion/react";
import {configureStore} from "@reduxjs/toolkit";
import {Provider, useSelector} from "react-redux";

const Container = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  margin: 50px auto;
  border: 3px solid #ceec3b;
  width: 400px;
  height: 400px;
`;

const BoxContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  margin-bottom: 10px;
  border: 3px solid #ceec3b;
  width: 80%;
  height: 80%;
`;



const reducer = (currentState, action) => {
    if (currentState !== undefined) {
        switch (action.type) {
            case 'increment':
                return {...currentState, number: currentState.number + 1};

            case 'decrement':
                return {...currentState, number: currentState.number - 1};

            default:
                break;
        }
        return currentState;
    } else {
        return {
            number: 0
        };
    }
    // if(currentState === undefined) {
    //     return {
    //         number: 0
    //     };
    // }
    //
    // if(action.type === 'increment') {
    //     return {...currentState, number: currentState.number + 1};
    // }else if(action.type === 'decrement') {
    //     return {...currentState, number: currentState.number - 1};
    // }
    // return {...currentState};

}

const store = configureStore({reducer});

const Box = ({ title, children }) => {
    const count = useSelector(store => store.number);
    return (
        <div css={BoxContainer}>
            <h1>{title}</h1>
            <h2>count: {count}</h2>
            {children}
        </div>
    );
}

const Buttons = () => {
    const increment = () => {
        store.dispatch({type: 'increment'});
    };

    const decrement = () => {
        store.dispatch({type: 'decrement'});
    };

    return (
        <>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </>
    );
}

const NumberCounter = () => {
    // const [count, setCount] = useState(0);
    //
    // const increment = () => {
    //     setCount(count + 1);
    // };
    //
    // const decrement = () => {
    //     setCount(count - 1);
    // };

    return (
        <div css={Container}>
            <Provider store={store}>
                <Box title={'box1'}>
                    <Box title={'box2'}>
                        <Box title={'box3'}>
                            <Box title={'box4'}>
                                <Buttons />
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Provider>


        </div>
    );
};

export default NumberCounter;