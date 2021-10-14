import { put, takeLatest } from "@redux-saga/core/effects";
import axios from "axios";

function* fetchResult(){
    try {
        const response = yield axios.get('/api/result');
        console.log(response.data);
        yield put({type: 'SET_RESULT', payload: response});
    } catch(error) {
        console.log('Error with getting most recent result', error);
    }
}

function* fetchSaga(){
    yield takeLatest('FETCH_RESULT', fetchResult);
}

export default fetchSaga;