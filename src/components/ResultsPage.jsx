import React from 'react';
import { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';


function ResultsPage(){

    const dispatch = useDispatch();
    const history = useHistory();

    const calcHistory = useSelector(store => store.allResults);

    useEffect(() => {
        dispatch({type: 'FETCH_ALL_RESULTS'})
    }, [])

    const onClick = () => {
        history.push('/');
    }

    const clearHistory = () => {
        dispatch({type: 'DELETE_ALL'});
    }

    return (
        <>
            {calcHistory ? 
            <>
                <h1>Calculator History:</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Result</th>
                            <th>Operation</th>
                            <th>Value 1</th>
                            <th>Value 2</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {calcHistory.map((item, index) => 
                            <tr key={index}>
                                <td>{item.result}</td>
                                <td>{item.operation}</td>
                                <td>{item.value1}</td>
                                <td>{item.value2}</td>
                                <button onClick={() => dispatch({type: 'DELETE_RESULT', payload: item.id})}>Delete</button>
                            </tr>
                        )}
                    </tbody> 
                </table>
                <button onClick={onClick}>Back</button>
                <br></br>
                <br></br>
                <button onClick={clearHistory}>Clear History</button>
                </> :
                <>
                    <h1>Loading results....</h1>
                </>
            }
        </>
    )
}

export default ResultsPage;