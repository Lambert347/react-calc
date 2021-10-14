import { put, takeLatest } from "@redux-saga/core/effects";
import axios from 'axios';

function* addResult(action) {
    try {
        console.log('Checking in reducer')
        yield axios.post('/api/result', action.payload);
    } catch (error) {
        console.log('Error with adding a result to the backend')
    }
};

export default addResult;