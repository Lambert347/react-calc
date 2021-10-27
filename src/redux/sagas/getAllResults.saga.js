import { put, takeLatest } from "@redux-saga/core/effects";
import axios from "axios";

function* fetchResult(){
    try {
        const response = yield axios.get('/api/all_results');
        console.log('Checking response data: ' , response.data);
        yield put({type: 'SET_ALL_RESULTS', payload: response.data});
        console.log(response.data);
    } catch(error) {
        console.log('Error with getting all recent result', error);
    }
}

function* fetchSaga(){
    yield takeLatest('FETCH_ALL_RESULTS', fetchResult);
}

export default fetchSaga;