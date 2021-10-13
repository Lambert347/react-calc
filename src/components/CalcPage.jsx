import React from 'react';
import { useState } from 'react';
import {useDispatch} from 'react-redux';

function CalcPage(){
    const dispatch = useDispatch();

    const [operation, setOperation] = useState('');
    const [result, setResult] = useState(0);
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(0);


    const newResult = {
        operation: operation,
        result: result,
        value1: value1,
        value2: value2
    }

    const clearInputs = () => {
        setOperation('');
        setResult(0);
        setValue1(0);
        setValue2(0);
    }

    const addResult = (event) => {
        dispatch({type: 'ADD_NEW_RESULT'});
        clearInputs();
    }

    return (
        <>
            <button>0</button>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
        </>
    )
}


export default CalcPage;