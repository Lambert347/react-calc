import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';

function CalcPage(){
    const dispatch = useDispatch();
    const history = useHistory();

    const [operation, setOperation] = useState('');
    const [result, setResult] = useState('');
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');


    const [onFirstValue, setOnFirstValue] = useState(true);
    let [gotResult, setGotResult] = useState(false);
    
    const recentResult = useSelector(store => store.result);

    const newResult = {
        operation: operation,
        result: result,
        value1: value1,
        value2: value2
    }

    const onClick = (event) => {
        console.log(onFirstValue);
        console.log(recentResult.result);

        console.log('Checking got result when submitting: ', gotResult);
        if (gotResult === true) {
            setValue1(recentResult.result);
            console.log('Updating value 1 to the recent result: ', value1);
            if (onFirstValue === true) {
                console.log('Value 1: ' , recentResult.result);
                setValue1(recentResult.result + event.target.value);
            } else {
                console.log('Value 2: ', value2);
                setValue2(value2 + event.target.value);
            }
        } else {
            if (onFirstValue === true) {
                console.log('Value 1: ' , value1);
                setValue1(value1 + event.target.value);
            } else {
                console.log('Value 2: ', value2);
                setValue2(value2 + event.target.value);
            }
        }
        
    }

    const setOperator = (event) => {
        console.log('Setting operator: ', event.target.value)
        setOperation(event.target.value);
        setOnFirstValue(false);
    }

    const clearValues = (event) => {
        setValue1('');
        setValue2('');
        setOnFirstValue(true);
        setOperation('');
    }

    const resetCalc = () => {
        window.location.reload(false);
    }

    const submitValues = () => {
        dispatch({type: 'ADD_NEW_RESULT', payload: newResult});
        console.log(newResult);
        setGotResult(true);
        gotResult = true;
        
        clearValues();

        console.log('Checking recent result: ', recentResult);

        setOnFirstValue(true);
        console.log('Checking got result: ', gotResult)
    }

    const getAll = (event) => {
        history.push('/results');
    }
    return (
        <>
        
            {recentResult.result ? 
                <p>{recentResult.result}</p> : 

                onFirstValue === true ?
                    <p>{value1}</p> :
                        <p>{value2}</p>
                
            }
            <button onClick={onClick} value={'0'}>0</button>
            <button onClick={onClick} value={'1'}>1</button>
            <button onClick={onClick} value={'2'}>2</button>
            <button onClick={onClick} value={'3'}>3</button>
            <button onClick={onClick} value={'4'}>4</button>
            <button onClick={onClick} value={'5'}>5</button>
            <button onClick={onClick} value={'6'}>6</button>
            <button onClick={onClick} value={'7'}>7</button>
            <button onClick={onClick} value={'8'}>8</button>
            <button onClick={onClick} value={'9'}>9</button>
            <br></br>
            <br></br>
            <button onClick={setOperator} value={'+'}>+</button>
            <button onClick={setOperator} value={'-'}>-</button>
            <button onClick={setOperator} value={'*'}>*</button>
            <button onClick={setOperator} value={'/'}>/</button>
            <button onClick={setOperator} value={'%'}>%</button>
            <br></br>
            <br></br>
            <button onClick={resetCalc}>C</button>
            <br></br>
            <br></br>
            <button onClick={submitValues}>=</button>


            <button onClick={getAll}>History</button>
        </>
    )
}



export default CalcPage;